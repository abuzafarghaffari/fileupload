import {useRef} from 'react';

const FileUploader = ({onFileSelectSuccess,onFileSelectError})=>{
const fileInput = useRef(null);

    const handleFileInput = (e) => {
        
//validation
const file = e.target.files[0];
  if (file.size > 1000000)
    onFileSelectError({ error: "File size cannot exceed more than 1MB" });
  else onFileSelectSuccess(file);

       
    }

    return(
        <div className="file-uploader">
<input type="file" onChange={handleFileInput} ref= {fileInput}/>
      
        </div>
    )
}

export default FileUploader;