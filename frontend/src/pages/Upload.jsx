import React, { useState, useCallback, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import BackHomeButton from '../components/BackHomeButton';
import BeforeUploadSection from '../sections/BeforeUploadSection';
import DragAndDrop from '../sections/DragAndDrop';
import "../pagesStyling/Upload.css";
import UploadingProgress from '../sections/UploadingProgress';
import WhileUploading from '../sections/WhileUploading';

const Upload = () => {
    const [uploadStatus, setUploadStatus] = useState('idle');
    const [errorMessage, setErrorMessage] = useState('');
    const [uploadPercentage, setUploadPercentage] = useState(0);
    const [uploadedFile, setUploadedFile] = useState(null); // Store the actual file
    const [fileUrl, setFileUrl] = useState(null); // Store file URL for display

    // Simulate random success/failure for the file upload and show progress
    const simulateUpload = (file) => {
        setUploadStatus('uploading');
        setUploadPercentage(0);
        setUploadedFile(file); // Ensure file is set before starting upload

        console.log('Simulating upload for file:', file.name);

        const interval = setInterval(() => {
            setUploadPercentage((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);

                    const isSuccess = Math.random() > 0.3; // Simulate success 70% of the time
                    if (isSuccess) {
                        setUploadStatus('uploaded'); // Set to uploaded after success
                        console.log('Upload succeeded.');
                    } else {
                        console.log('Upload failed.');
                        setUploadStatus('failed'); // Set status to failed
                        setUploadedFile(null); // Clear file if upload fails
                    }
                }
                return prev + 10; // Increment by 10%
            });
        }, 200);
    };

    // Function that triggers on file drop
    const onDrop = useCallback((acceptedFiles, rejectedFiles) => {
        setErrorMessage('');
        setUploadedFile(null); // Reset the uploaded file initially
        setFileUrl(null); // Clear the previous file URL

        console.log('Accepted files:', acceptedFiles);
        console.log('Rejected files:', rejectedFiles);

        if (rejectedFiles.length > 0) {
            setErrorMessage('Only one image or video file is allowed.');
            return;
        }

        if (acceptedFiles.length === 1) {
            const file = acceptedFiles[0];
            simulateUpload(file); // Start simulated upload
        } else {
            setErrorMessage('Please upload only one image or video file.');
        }
    }, []);

    // Create object URL for the uploaded file and clean it up after unmount
    useEffect(() => {
        if (uploadedFile) {
            const url = URL.createObjectURL(uploadedFile);
            setFileUrl(url);

            console.log('File URL created:', url);

            return () => {
                console.log('Cleaning up file URL:', url);
                URL.revokeObjectURL(url); // Clean up old URL if present
                setFileUrl(null); // Ensure the URL is reset properly
            };
        }
    }, [uploadedFile]);

    // Initialize react-dropzone hook
    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        maxFiles: 1,
        accept: {
            'image/*': [],
            'video/*': [],
        },
    });

    // Ensure to return proper UI based on state
    return (
        <div className='UploadSectionOuter'>
            <div className='UploadSectionBackButton'>
                <BackHomeButton />
            </div>
            <div className='UploadPageHeaderAndBody'>
                <h2 className='UploadHeader'>UPLOAD</h2>

                <div {...getRootProps()}>
                    <input {...getInputProps()} />
                    {
                        isDragActive ? (
                            <DragAndDrop />
                        ) : uploadStatus === 'idle' ? (
                            <BeforeUploadSection />
                        ) : null
                    }
                </div>

                {/* Display validation error message */}
                {errorMessage && <p className="error-message">{errorMessage}</p>}

                {/* Display upload status and progress */}
                {
                    uploadStatus === 'uploading' && uploadedFile ? (
                        <div>
                            <WhileUploading 
                                progress={uploadPercentage} 
                                fileName={uploadedFile?.name} 
                                fileSize={(uploadedFile?.size / 1024 / 1024).toFixed(2)} 
                            />
                        </div>
                    ) : uploadStatus === 'uploaded' && uploadedFile ? (
                        <div>
                            <UploadingProgress 
                                fileName={uploadedFile?.name} 
                                fileSize={(uploadedFile?.size / 1024 / 1024).toFixed(2)} 
                                fileUrl={fileUrl}
                            />
                        </div>
                    ) : uploadStatus === 'failed' ? (
                        <p>Upload Failed. Please try again.</p>
                    ) : (
                        <div>
                            {console.log("Unexpected uploadStatus:", uploadStatus)}
                            <p>Unexpected upload status, please try again. {uploadStatus} {uploadedFile ? 'File present' : 'No file'}</p>
                        </div>
                    )
                }
            </div>
        </div>
    );
}

export default Upload;
