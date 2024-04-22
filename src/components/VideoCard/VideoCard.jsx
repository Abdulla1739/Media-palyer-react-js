import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import Card from "react-bootstrap/Card";

function VideoCard() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Card>
        <Card.Img
          onClick={handleShow}
          style={{ height: "200px", cursor: "pointer" }}
          variant="top"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtKu1MuYOeKO8PeMpuYlZTRXHJbGDWKnyTlFAzBPKb7SpD-ij_FXMl9BgbgMGk1zJlsCY&usqp=CAU"
        />
        <Card.Body className="text-center w-100">
          <Card.Title className="d-flex justify-content-between align-items-center">
            <p>Caption</p>
            <button className="btn">
              <i className="fa-solid fa-trash text-danger"></i>
            </button>
          </Card.Title>
        </Card.Body>
      </Card>

      <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Caption</Modal.Title>
        </Modal.Header>
        <Modal.Body>
  
        <iframe width="853" height="480" src="https://www.youtube.com/embed/I5NMD5nd-NU?autoplay=1" title="Caption" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>




        </Modal.Body>
      </Modal>
    </div>
  );
}

export default VideoCard;
