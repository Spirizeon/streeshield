import React, { useState, useEffect } from 'react';
import "../componentsStyling/MediaPreview.css";
import CrossIcon from "../assets/CrossIcon.svg";

const MediaPreview = ({ fileUrl, fileName, togglePreview }) => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth); // State to track screen width

  useEffect(() => {
   
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  const truncatedFileName = screenWidth < 560 
    ? (fileName.length > 5 ? `${fileName.slice(0, 5)}...` : fileName)
    : (fileName.length > 15 ? `${fileName.slice(0, 15)}...` : fileName);

  const isVideo = fileUrl && (fileUrl.includes("video") || fileName.endsWith(".mp4") || fileName.endsWith(".webm"));

  return (
    <div className="media-preview-box">
      <img src={CrossIcon} alt="" onClick={togglePreview} className="CrossIconInMediaPreview" />
      <div className='PreviewTextAndFileNameInMediaPreview'>
        <p className='PreviewTextInMediaPreview'>Preview</p>
        {/* Display the truncated file name */}
        <p className='FileNameInMediaPreview'>{truncatedFileName}</p>
      </div>
      {fileUrl ? (
        <div className="media-content">
          {isVideo ? (
            <video controls autoPlay muted className='VideoInMediaPreview'>
              <source src={fileUrl} />
              Your browser does not support the video tag.
            </video>
          ) : (
            <img src={fileUrl} alt="Uploaded file preview" className='ImageInMediaPreview' />
          )}
        </div>
      ) : (
        <p>No media to preview.</p>
      )}
    </div>
  );
};

export default MediaPreview;
