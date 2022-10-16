import React, {useState, useEffect} from 'react';
import './App.css';
import FileUploader from './Uploader';
import { storage } from './firebase';
import { ref, listAll, uploadBytes,getDownloadURL } from "firebase/storage";


function Main() {
  const[name, setName] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
 const [imageList, setImageList] = useState([]);// to track image or file list
  const imageListRef = ref(storage,"images/");
 
 const nameHandler =(event)=>{
setName(event.target.value);
  }

  const uploadHandler =(event)=>{
event.preventDefault();
  if(selectedFile == null) return;
const imgeRef = ref(storage,`images/${selectedFile.name}`);
uploadBytes(imgeRef,selectedFile)
.then((snapsot)=>{
  getDownloadURL(snapsot.ref)
  .then((url)=>{
    setImageList((prev)=>[...prev,url]);

  })
})

}

useEffect(()=>{
listAll(imageListRef)
.then((response)=>{
response.items.forEach(item=>{
  getDownloadURL(item).then(url =>{
    setImageList((prev)=>[...prev,url]);
  })
})
})

},[]);

console.log(imageList);
  return (
    <div className="App">
      <form onSubmit={uploadHandler}>
        <input type="text" value={name} onChange={nameHandler} />
     <FileUploader onFileSelectSuccess ={(file)=>setSelectedFile(file)}
      onFileSelectError ={({ error }) => alert(error)}
     />
     <button type="submit">Upload</button>
      </form>
    </div>
  );
}

export default Main;
