import React, { useState } from 'react';
import { Container, Box, Button, Typography, LinearProgress, Card, CardContent, AppBar, Grid } from '@mui/material';
import axios from 'axios';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { styled } from '@mui/material/styles';
import MenuAppBar from './components/AppBar';
import SelectViolation from './components/SelectViolation';



const VideoUpload = () => {
  const [file, setFile] = useState(null);
  const [fileSelected, setFileSelected] = useState(false);
  const [fileUploaded, setFileUploaded] = useState(false);
  const [violation, setViolation] = React.useState('');

  const [uploading, setUploading] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setFileSelected(true)
  };

  const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  });
  const handleSelectViolation = async () => {
    
  }

  const handleUpload = async () => {
    if (!file) {
      alert('Please select a file.');
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
        alert('Video uploaded successfully!');
        setFileUploaded(true)
      } else {
        alert('Video upload failed.');
        setFileUploaded(true)
      }
    } catch (error) {
      alert('An error occurred during upload.');
      setFileUploaded(true)
    } finally {
      setUploading(false);
    }
  };

  return (
    <Container maxWidth="md">
      <MenuAppBar />
      <Box mt={5} >
        <Card>
          <CardContent>
            <Grid container spacing={1} textAlign={"center"}>
              <Grid item xs={12} md={12} >
                <Typography variant="h5" gutterBottom>
                  Upload  image/video of violation below
                </Typography>
              </Grid>
              <Grid item xs={2} md={2} />
              <Grid item xs={8} md={8} >
                <Button
                  component="label"
                  role={undefined}
                  variant="contained"
                  tabIndex={-1}
                  startIcon={<CloudUploadIcon />}
                  onChange={handleFileChange}
                  size='small'
                >
                  Choose file
                  <VisuallyHiddenInput type="file" />
                </Button>
                {fileSelected === true && <p><b>{file.name}</b></p>}
              </Grid>
              <Grid item xs={2} md={2} />
              <Grid item xs={2} md={2} />
              <Grid item xs={8} md={8} >
              {/* <input type="file" accept="video/*" onChange={handleFileChange} /> */}
              <Box mt={2}>
                <Button variant="contained" color="primary" onClick={handleUpload} disabled={uploading}>
                  {uploading ? 'Uploading...' : 'Process File'}
                </Button>
                {uploading && <LinearProgress sx={{ mt: 2 }} />}
              </Box>
              </Grid>
              <Grid item xs={2} md={2} />
              <Grid item xs={12} md={12} >
              <Box mt={2}>
                {fileUploaded === true && <SelectViolation violation={violation} setViolation={setViolation}>Select Violation</SelectViolation>}
              </Box>
              </Grid>
                <Grid item xs={12} md={12} >
                {violation !== '' && <Button variant="contained" color="primary">
                  Submit
                </Button>
                }
                </Grid>
            </Grid>
        </CardContent>
      </Card>
    </Box>
    </Container >
  );
};

export default VideoUpload;
