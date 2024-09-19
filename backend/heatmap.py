import torch
import torch.nn as nn
from torchvision import models, transforms
import cv2
import numpy as np
import matplotlib.pyplot as plt
from PIL import Image
import io

# Function to apply Grad-CAM and return the heatmap visualized on the image
def grad_cam(image_file):
    # Define the modified ResNet50 class for Grad-CAM
    class ResNet50GradCAM(nn.Module):
        def __init__(self, model):
            super(ResNet50GradCAM, self).__init__()
            self.resnet = model
            self.gradients = None

            # Hook the feature extractor
            self.resnet.layer4[2].register_forward_hook(self.forward_hook)
            self.resnet.layer4[2].register_backward_hook(self.backward_hook)

        def forward_hook(self, module, input, output):
            self.activations = output

        def backward_hook(self, module, grad_in, grad_out):
            self.gradients = grad_out[0]

        def forward(self, x):
            return self.resnet(x)

    # Preprocessing function for the input image
    def preprocess_image(image_file):
        preprocess = transforms.Compose([
            transforms.Resize((224, 224)),
            transforms.ToTensor(),
            transforms.Normalize(mean=[0.485, 0.456, 0.406], std=[0.229, 0.224, 0.225])
        ])
        img = Image.open(io.BytesIO(image_file))
        img_tensor = preprocess(img).unsqueeze(0)
        return img_tensor

    # Generate Grad-CAM heatmap
    def generate_heatmap(model, img_tensor, target_class):
        # Forward pass
        model_output = model(img_tensor)

        # Backward pass
        model.zero_grad()
        class_loss = model_output[0, target_class]
        class_loss.backward()

        # Get activations and gradients
        activations = model.activations.detach().cpu().numpy()[0]
        gradients = model.gradients.detach().cpu().numpy()[0]

        # Perform GAP on gradients
        pooled_gradients = np.mean(gradients, axis=(1, 2))

        # Weight activations by gradients
        for i in range(activations.shape[0]):
            activations[i, :, :] *= pooled_gradients[i]

        # Generate the heatmap
        heatmap = np.mean(activations, axis=0)
        heatmap = np.maximum(heatmap, 0)
        heatmap = heatmap / np.max(heatmap)  # Normalize between 0 and 1

        return heatmap

    # Overlay heatmap on the image
    def overlay_heatmap(image_file, heatmap, alpha=0.4):
        img = np.array(Image.open(io.BytesIO(image_file)))
        heatmap = cv2.resize(heatmap, (img.shape[1], img.shape[0]))

        # Ensure heatmap is uint8
        heatmap = np.uint8(255 * heatmap)

        heatmap_img = cv2.applyColorMap(heatmap, cv2.COLORMAP_JET)

        # Ensure original image is uint8 before overlay
        if img.dtype != np.uint8:
            img = np.uint8(img)

        # Overlay the heatmap on the image
        superimposed_img = cv2.addWeighted(heatmap_img, alpha, img, 1 - alpha, 0)
        return superimposed_img

    # Visualize and save the heatmap
    def visualize_heatmap(heatmap_img):
        # Convert BGR to RGB
        img = cv2.cvtColor(heatmap_img, cv2.COLOR_BGR2RGB)
        pil_img = Image.fromarray(img_rgb)
        img_byte_arr = io.BytesIO()
        pil_img.save(img_byte_arr,format='JPEG')
        img_byte_arr = img_byte_arr.getvalue()

        return img_byte_arr

    # Load the pre-trained ResNet model
    resnet50 = models.resnet50(pretrained=True)
    resnet50.eval()

    # Modify the model for Grad-CAM
    grad_cam_model = ResNet50GradCAM(resnet50)

    # Preprocess the image
    img_tensor = preprocess_image(image_file)

    # Get the predicted class
    output = grad_cam_model(img_tensor)
    target_class = output.argmax().item()

    # Generate heatmap
    heatmap = generate_heatmap(grad_cam_model, img_tensor, target_class)

    # Overlay the heatmap on the image with adjustable transparency
    heatmap_img = overlay_heatmap(image_file, heatmap, alpha=0.3)

    # Visualize the heatmap
    visualize_heatmap(heatmap_img)

# Example usage:
# with open("test.jpeg", "rb") as f:   # Replace with your image file
#     image_file = f.read()
# grad_cam(image_file)

