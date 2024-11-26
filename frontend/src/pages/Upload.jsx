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
    const [uploadedFile, setUploadedFile] = useState(null);
    const [fileUrl, setFileUrl] = useState(null);
    const [percentageMorphed, setPercentageMorphed] = useState(0);
    const [searchResult, setSearchResult] = useState([]);
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 840); // Track screen size

    // Check screen size and update isSmallScreen state
    const handleResize = () => {
        setIsSmallScreen(window.innerWidth < 840);
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const simulateUpload = (file) => {
        setUploadStatus('uploading');
        setUploadPercentage(0);
        setUploadedFile(file);

        console.log('Uploading file:', file.name);

        const formData = new FormData();
        formData.append('file', file);

        fetch('http://streeshield-backend.onrender.com/upload', {
            method: 'POST',
            body: formData,
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Response from FastAPI:', data);
                setUploadStatus('uploaded');
                setUploadPercentage(100);
                setPercentageMorphed(data.percentage_morphed);
                setSearchResult(data.search_result);
            })
            .catch((error) => {
                console.error('Upload failed:', error);
                setUploadStatus('failed');
                setUploadedFile(null);
            });

        const interval = setInterval(() => {
            setUploadPercentage((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                }
                return Math.min(prev + 10, 100);
            });
        }, 200);
    };

    const onDrop = useCallback((acceptedFiles, rejectedFiles) => {
        setErrorMessage('');
        setUploadedFile(null);
        setFileUrl(null);

        console.log('Accepted files:', acceptedFiles);
        console.log('Rejected files:', rejectedFiles);

        if (rejectedFiles.length > 0) {
            setErrorMessage('Only one image or video file is allowed.');
            return;
        }

        if (acceptedFiles.length === 1) {
            const file = acceptedFiles[0];
            simulateUpload(file);
        } else {
            setErrorMessage('Please upload only one image or video file.');
        }
    }, []);

    useEffect(() => {
        if (uploadedFile) {
            const url = URL.createObjectURL(uploadedFile);
            setFileUrl(url);
            return () => {
                URL.revokeObjectURL(url);
                setFileUrl(null);
            };
        }
    }, [uploadedFile]);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        maxFiles: 1,
        accept: {
            'image/*': [],
            'video/*': [],
        },
    });

    return (
        <div className='UploadSectionMainOuter'>
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
                                isSmallScreen ? (
                                    <BeforeUploadSection /> // Display BeforeUploadSection if small screen
                                ) : (
                                    <DragAndDrop /> // Display DragAndDrop if large screen
                                )
                            ) : uploadStatus === 'idle' ? (
                                <BeforeUploadSection />
                            ) : null
                        }
                    </div>

                    {errorMessage && <p className="error-message">{errorMessage}</p>}

                    {uploadStatus === 'uploading' && uploadedFile ? (
                        <WhileUploading
                            progress={uploadPercentage}
                            fileName={uploadedFile?.name}
                            fileSize={(uploadedFile?.size / 1024 / 1024).toFixed(2)}
                        />
                    ) : uploadStatus === 'uploaded' && uploadedFile ? (
                        <UploadingProgress
                            fileName={uploadedFile?.name}
                            fileSize={(uploadedFile?.size / 1024 / 1024).toFixed(2)}
                            fileUrl={fileUrl}
                            percentageMorphed={percentageMorphed}
                            searchResult={searchResult}
                        />
                    ) : uploadStatus === 'failed' ? (
                        <p>Upload Failed. Please try again.</p>
                    ) : null}
                </div>
                <div className='BorderBottomForSection'></div>
            </div>
        </div>
    );
}

export default Upload;
