import { useState, useEffect, useRef } from 'react';
import './App.css';
import { uploadFile } from './services/api';

function App() {
  const [file, setFile] = useState('');
  const [result, setResult] = useState('');

  const fileInputRef = useRef();

  // const url = 'https://images.freeimages.com/images/previews/ac9/railway-hdr-1361893.jpg';

  useEffect(() => {
    const getImage = async () => {
      if (file) {
        const data = new FormData();
        data.append("name", file.name);
        data.append("file", file);

        let response = await uploadFile(data);
        if (response && response.path) {
          setResult(response.path);
        } else {
          setResult('Error uploading file');
        }
      }
    }
    getImage();
  }, [file])

  const onUploadClick = () => {
    fileInputRef.current.click();
  }

  return (
    <div className='container'>
      {/* <img src={url} className='img' alt='' /> */}
      <div className='wrapper'>
        <h1>ayo karlo file share!</h1>
        <h4>Upload karo aur share the download link to download the files.</h4>
        
        <button onClick={() => onUploadClick()}>Upload</button>
        <input
          type="file"
          ref={fileInputRef}
          style={{ display: "none" }}
          onChange={(e) => setFile(e.target.files[0])}
        />

{result && (
          <a href={result} target='_blank' rel='noopener noreferrer'>
            {result}
          </a>
        )}
      </div>
    </div>
  );
}

export default App;
