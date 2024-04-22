import React from 'react'
import Add from '../components/add/Add'
import { Link } from 'react-router-dom'
import ViewSection from '../components/viewSection/ViewSection'
import Categories from '../components/Categories/Categories'

function Home() {
  return (
    <>
    <div className="container my-5 d-flex justify-content-between">
      <Add/>
      <Link to={'/history'} Watch History></Link>
    </div>
    <div className="container-fluid my-5 row">
    <div className="col-lg-6">
      <h3>All videos</h3>
      <ViewSection/>
    </div>
    <div className="col-lg-6">
    <Categories/>
    </div>



    </div>
    
    
    
    
    
    
    </>
  )
}

export default Home