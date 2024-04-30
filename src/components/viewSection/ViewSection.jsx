import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import VideoCard from "../VideoCard/VideoCard";
import { getVIdeoAPI } from '../../services/allAPI';




function ViewSection({addVideoResponse}) {
  const [deleteResponse,setDeleteResponse] = useState("")

  const [allVideo, SetAllVideo] = useState([])
  console.log(allVideo);
  useEffect(()=>{
    getAllVideo()

  },[addVideoResponse,deleteResponse])
const getAllVideo = async ()=>{
  try {
    const result = await getVIdeoAPI()
    console.log(result);
    if( result.status >=200 && result.status<300){
      SetAllVideo(result.data);
    }    
  } catch (error) {
    console.log(error);
  }
}


  return (
    <>
      <Row>
      {
        allVideo.length>0?
        allVideo?.map(video=>(
          <Col key={video?.id} className="mb-4" sm={12} md={6} lg={4}>
            <VideoCard displayData = {video} setDeleteResponse={setDeleteResponse}/>
          </Col>
        ))
        :
        <div className="fw-bolder text-danger">Nothing to display</div>
      }
      </Row>
    </>
  );
}

export default ViewSection;
