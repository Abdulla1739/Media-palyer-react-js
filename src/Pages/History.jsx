import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import {getHistoryAPI} from '../services/allAPI'

function History() {
const [videoHistory,setVideoHistory] = useState([])

console.log(videoHistory);
useEffect(()=>{
  getAllHistory()
},[])


const  getAllHistory = async ()=>{
try {
  const result =await getHistoryAPI()
  setVideoHistory(result.data)
  
} catch (error) {
  console.log(error);
}




}





  return (
    <div className='container my-5'>
      <div className="d-flex justify-content-between">
        <h3>Watch History</h3>
        <Link to={'/home'}>Back to home</Link>        
      </div>
      <table className="table my-5">
        <thead>
          <tr>
            <th>#</th>
            <th>Caption</th>
            <th>Video Link</th>
            <th>Time Stamp</th>
            <th><div className='fa-solid fa-ellipsis-vertical'></div></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Nyanbagam</td>
            <td><a href="https://www.youtube.com/embed/W6NZfCO5SIk" target='_blank'>https://www.youtube.com/embed/W6NZfCO5SIk</a></td>
            <td>04/22/2024, 10:39:17 AM</td>
            <td><button className="fa-solid fa-trash text-danger"></button></td>
          </tr>
        </tbody>

      </table>





    </div>
  )
}

export default History