import React, { useEffect } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { addCategoryAPI, getCategoryAPI,removeCategoryAPI } from '../../services/allAPI';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Categories() {
  const [allCategoryName,setallCategoryName] = useState ([])
  const [categoryName,setCategoryName] = useState ("")
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  useEffect (()=>{
    getAllCategory()
  },[])



  console.log(allCategoryName);

  const handleAddCategory = async ()=>{
    if(categoryName){

      const result = await addCategoryAPI({categoryName,allVideos:[]})
      handleClose()
      getAllCategory()
      toast.success( ` is succesfully uploaded`)
      setCategoryName("")

      try {
        
      } catch (error) {
        console.log(error);
      }


    }else{
      toast.warn("please fill the form completely")
    }

  }

  const getAllCategory = async ()=>{
    try {
      const result = await getCategoryAPI()
      setallCategoryName(result.data)
    } catch (error) {
      console.log(error);
    }


  }
  const handleRemoveCategory = async (categoryId)=>{
    try {
      await removeCategoryAPI(categoryId)
      getAllCategory()
    } catch (error) {
      console.log(error);
    }


  }


  return (
    <>
      <div className="d-flex justify-content-between">
        <h3>All Categories</h3>
        <button onClick={handleShow} className="btn btn-info rounded-circle fw-bolder fs-5">+</button>
      </div>

      <div className="container-fluid mt-3">
        {allCategoryName.length > 0 ? (
          allCategoryName.map((item) => (
            <div key={item?.id} className="border rounded p-3 mb-2">
              <div className="d-flex justify-content-between">
                <h5>{item.categoryName}</h5>
                <button onClick={()=>handleRemoveCategory(item?.id)} className="btn">
                  <i className="fa-solid fa-trash text-danger"></i>
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="text-danger fw-bolder">No categories are added yet!!!</div>
        )}

        <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} centered>
          <Modal.Header closeButton>
            <Modal.Title>Category Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Please name the category!!
            <div className="my-3 border rounded p-3">
              <FloatingLabel className="mt-3 mb-3" controlId="floatingInputCaption" label="Video Caption">
                <Form.Control onChange={(e) => setCategoryName(e.target.value)} type="text" placeholder="Enter Label Name" />
              </FloatingLabel>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button onClick={handleAddCategory} variant="primary">
              Add
            </Button>
          </Modal.Footer>
        </Modal>
        <ToastContainer position="top-center" theme="colored" autoClose={3000} />
      </div>
    </>
  );
}

export default Categories