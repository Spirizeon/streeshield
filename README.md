![ezgif com-video-to-gif-converter (2)](https://github.com/user-attachments/assets/c9503db5-77bf-456b-960e-826e468ec87d)


<div align="center">
  
![ezgif com-video-to-gif-converter](https://github.com/user-attachments/assets/78998710-7014-46bc-817a-6768aa8bf188)
  
# Stree Shield: AI/ML-based Deepfake Detection
</div>

### 🌐 Real-time detection of face-swap deepfake videos and morphed images.

---

## Inspiration

With the increasing prevalence of deepfakes, digital media integrity is under threat. Deepfakes are often used for misinformation, fraud, and other malicious purposes. **Stree Shield** addresses this issue by offering a robust AI/ML solution to detect manipulated media effectively, ensuring digital authenticity and safeguarding public discourse.

---

## How is Stree Shield Different?

- **Dual Media Detection**: Supports **both images and videos** with distinct models for each, enhancing versatility and accuracy.
  
- **CNN and 3D CNN Models**: Utilizes **CNN for images** and **3D CNN for videos** to improve detection accuracy for different media types.

- **Real-time Results**: Provides **results in under 1 second for images** and less than 4 seconds for videos, ensuring rapid analysis.

- **User-friendly Design**: Features an intuitive interface with clear visual results and confidence percentages.

- **Multi-lingual Support**: Accessible to users in multiple languages, broadening its usability.

---

## Problem it Solves

- **Detecting Deepfakes**: Helps prevent the misuse of deepfake technology by accurately detecting manipulated media.
  
- **Media Integrity**: Ensures the authenticity of digital content, crucial for maintaining trust in digital communications.

---

## Approach

The **workflow** involves:

1. **Media Upload**: Users upload images or videos via a straightforward interface supporting formats like JPEG, PNG, MP4, and AVI.
  
2. **Media Type Detection**: The backend identifies the media type and triggers the appropriate processing model.

3. **Preprocessing and Data Augmentation**: Media files are resized, videos are frame-extracted, and both media types undergo augmentation to ensure reliable input.

4. **Model Inference**: 
   - **Images**: Classified using a CNN.
   - **Videos**: Analyzed using a 3D CNN for deepfake detection.

5. **Real-time Results**: Confidence percentages are calculated and displayed for both images and videos.
<img src="https://github.com/user-attachments/assets/8ccb26d5-ca85-41f5-8ad2-52fe875bf359"  width="100%">



![Desktop (1)](https://github.com/user-attachments/assets/b2750a81-626c-4905-b896-f3faebfc96b0)
![Desktop (2)](https://github.com/user-attachments/assets/c5b1ab50-3859-4d04-9cff-a9abad159c2e)


---

## Unique Features

- **Fast Detection**: Results are quickly generated, suitable for real-time applications.
  
- **Data Augmentation**: Consistent augmentation across images and videos for enhanced model performance.

- **Detailed Confidence Metrics**: Provides clear confidence percentages for each detection outcome.

---

## Technologies Used

- **Frontend**: ReactJS for a dynamic user interface (Akhil & Jayanth), Figma for UI/UX (Jayanth)
- **Backend**: FastAPI for setting up communications (Ayush)
- **Models**: Tensorflow for model inference (Praneeth & Balaswitha)
  - **CNN** for image classification.
  - **3D CNN** for video analysis.
- **Database**: MongoDB for data storage. (Ayush) 
- **API**: REST APIs for communication. (Ayush & Akhil)

---

## Challenges We Faced

- Handling large video datasets and real-time analysis.
- Ensuring accuracy and managing potential prediction glitches.
- Scaling the system to accommodate various media sizes and formats.

---

## What’s Next?

- **Enhanced Algorithms**: Developing more robust algorithms to tackle advanced deepfake techniques and reduce glitches.
  
- **Scaling Up**: Improving processing capabilities for larger datasets and higher-quality media.

---

## Team

- [AKhil Butta](https://github.com/buttaakhil)
- [Ayush Dutta](https://github.com/Spirizeon)
- [Praneeth Bhavana](https://github.com/ZELTROX1)
- [Jayanth CT](https://github.com/jayanthct)
- [Balaswitha Pusapati](https://github.com/balaswithapusapati)
- [Nandita Cherukuri](https://github.com/nandita3006)
