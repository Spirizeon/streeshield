import React from 'react';
import "../componentsStyling/MediaPreview.css";
import CrossIcon from "../assets/CrossIcon.svg";

const MediaPreview = ({ fileUrl, fileName,togglePreview}) => {
  // Check if the file is a video by its MIME type
  const isVideo = fileUrl && (fileUrl.includes("video") || fileName.endsWith(".mp4") || fileName.endsWith(".webm"));

  return (
    <div className="media-preview-box">
        <img src={CrossIcon} alt=""  onClick={togglePreview} className="CrossIconInMediaPreview"/>
      <div className='PreviewTextAndFileNameInMediaPreview'>
        <p className='PreviewTextInMediaPreview'>Preview</p>
        <p className='FileNameInMediaPreview'>{fileName}</p>
      </div>
      {fileUrl ? (
        <div className="media-content">
          {isVideo ? (
            <video controls  autoPlay muted className='VideoInMediaPreview'>
            <source src={fileUrl} />
            Your browser does not support the video tag.
          </video>
          ) : (
            <img src={fileUrl} alt="Uploaded file preview"   className='ImageInMediaPreview'/>
          )}
        </div>
      ) : (
        <p>No media to preview.</p>
      )}
    </div>
  );
};

export default MediaPreview;
