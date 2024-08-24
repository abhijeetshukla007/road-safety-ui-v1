import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();

const VideoUpload = () => {
    const [file, setFile] = useState(null);
    const [uploading, setUploading] = useState(false);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleUpload = async () => {
        if (!file) {
            toast.error('Please select a file.');
            return;
        }

        const formData = new FormData();
        formData.append('video', file);

        try {
            setUploading(true);
            const response = await axios.post('/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            if (response.status === 200) {
                toast.success('Video uploaded successfully!');
            } else {
                toast.error('Video upload failed.');
            }
        } catch (error) {
            toast.error('An error occurred during upload.');
        } finally {
            setUploading(false);
        }
    };

    return (
        <div className="upload-container">
            <h1>Upload a Video</h1>
            <input type="file" accept="video/*" onChange={handleFileChange} />
            <button onClick={handleUpload} disabled={uploading}>
                {uploading ? 'Uploading...' : 'Upload'}
            </button>
        </div>
    );
};

export default VideoUpload;
