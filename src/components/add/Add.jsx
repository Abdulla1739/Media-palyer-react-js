import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addVIdeoAPI } from '../../services/allAPI';




function Add({setaddVideoResponse}) {
  const [videoDetails, setvideoDetails] = useState({
    caption: "", imgURL:"", youtubeURL:"",
})
const [invalidURl,setinvaliURL] = useState(false)

const handleUpload = async ()=>{
console.log("inside handle upload function");
const {caption,imgURL,youtubeURL} = videoDetails;
if(caption&&imgURL&&youtubeURL){
  console.log("api call");

  try {
   const result = await addVIdeoAPI(videoDetails)
   console.log(result);
    if( result.status >=200 && result.status<300){
      console.log(result.data);
      setaddVideoResponse(result.data)
      toast.success( `${result.data.caption} is succesfully uploaded`)
      handleClose()
    }else{
      toast.error(`${result.response.data}`)
    }

  } catch (error) {
    console.log(error);
  }


}else{
  toast.warn("please fill the form completely")
}




}




    console.log(videoDetails);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);



    const getEmbedURL =(link)=>{
      if(link.includes("v=")){
        let videoid = link.split("v=")[1].slice(0,11)
        console.log(videoid);

        setvideoDetails({...videoDetails, youtubeURL:`http://www.youtube.com/embed/${videoid}`})
        setinvaliURL(false)



      }else{
        setvideoDetails({...videoDetails, youtubeURL:""})
        setinvaliURL(true)
      }



  
    }




  return (
    <>
    <div className="d-flex align-items-center">
        <h5>Upload New Video</h5>
        <button onClick={handleShow} className='btn btn-warning ms-3 rounded-circle fw-bolder fs-5'>+</button>
    </div>
    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Video Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        Please Fill the following details!!!
        <div className=' my-3 border rounded p-3'>

        <FloatingLabel className='mt-3 mb-3' controlId="floatingInputCaption" label="Video Caption">
          <Form.Control onChange={e=>setvideoDetails({...videoDetails,caption:e.target.value})} type="text" placeholder="Video Caption" />
        </FloatingLabel>
        <FloatingLabel className='mb-3' controlId="floatingInputURL" label="Image URL">
          <Form.Control onChange={e=>setvideoDetails({...videoDetails,imgURL:e.target.value})} type="text" placeholder="Image URL" />
        </FloatingLabel>
        <FloatingLabel className='mb-3' controlId="floatingInputLink" label="Youtube Video Link">
          <Form.Control onChange={e=>getEmbedURL(e.target.value)} type="text" placeholder="Youtube Video Link" />
        </FloatingLabel>
        {invalidURl&&
        <small className='text-danger'>Invalid URL</small>

        }
        </div>




        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleUpload} variant="primary">Upload</Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer position='top-center' theme='colored' autoClose={3000}  />
    
    
    
    
    </>
  )
}

export default Add