import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import Card from "react-bootstrap/Card";
import { removeVideoAPI, saveHistoryAPI } from "../../services/allAPI";

function VideoCard({displayData,setDeleteResponse}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async () => {
    setShow(true);
    const {caption,youtubeURL} = displayData
    const systemTime = new Date ()
    const formatedDate = systemTime.toLocaleString('en-US',{timeZoneName:'short'});
    console.log(formatedDate);
    const videoHistory = {caption,youtubeURL,timeStamp:formatedDate}
    try {
      await saveHistoryAPI(videoHistory)
    } catch (error) {
      console.log(error);
    }
  
  
  
  }
  

  const handleRemoveVideo = async (videoId)=>{
    try {
      const result = await removeVideoAPI(videoId)
      setDeleteResponse(result.data)
    } catch (error) {
      console.log(error); 
    }
  }




  return (
    <div>
      <Card>
        <Card.Img
          onClick={handleShow}
          style={{ height: "200px", cursor: "pointer" }}
          variant="top"
          src={displayData?.imgURL}
        />
        <Card.Body className="text-center w-100">
          <Card.Title className="d-flex justify-content-between align-items-center">
            <p>{displayData?.caption}</p>
            <button onClick={()=>handleRemoveVideo(displayData?.id)} className="btn">
              <i className="fa-solid fa-trash text-danger"></i>
            </button>
          </Card.Title>
        </Card.Body>
      </Card>

      <Modal size="xl" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{displayData?.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
  
        <iframe width="100%" height="500" src={`${displayData?.youtubeURL}?autoplay=1`} title="caption"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>




        </Modal.Body>
      </Modal>
    </div>
  );
}

export default VideoCard;
