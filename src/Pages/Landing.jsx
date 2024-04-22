import React from 'react'
import { Link } from 'react-router-dom'
import spotlight from '../assets/spotlight.gif'
import Card from 'react-bootstrap/Card';
import CardOne from '../assets/CardOne.gif'
import CardTwo from '../assets/CardTwo.gif'
import CardThree from '../assets/CardThree.gif'

function Landing() {
  return (
    <>
    <div className='landingSection container'>
      <div className='row align-items-center my-5'>
        <div className='col-lg-5'>
          <h3>Welcome to <span className='text-warning'>Media Player</span></h3>
          <p className='mt-5 mb-5'>Media Player App. will allow you to add and remove their uploaded videos, also helps to arrange them in different categories by providing drag and drop functionalities.</p>
          <Link to={"/home"} className='btn btn-info'>Get Started</Link>
        </div>
        <div className='col'></div>
        <div className='col-lg-6'>
          <img  src={spotlight} alt="img" />
          
        </div>


      </div>


      <div className="Features my-5">
        <h3 className='text-center p-5'>Features</h3>
        <div className='row p-5'>
            <div className="col-lg-4 mb-3">

            <Card style={{ width: '100%' }}>
              <Card.Img style={{height:"350px"}}  variant="top" src={CardOne} />
              <Card.Body >
                <Card.Title>Managing Videos</Card.Title>
                <Card.Text className='pb-5'>
                User can upload, view and remove the videos in youtube
                </Card.Text>
               </Card.Body>
            </Card>




            </div>

            <div className="col-lg-4 mb-3">

            <Card style={{ width: '100%' }}>
              <Card.Img style={{height:"350px"}} variant="top" src={CardTwo} />
              <Card.Body >
                <Card.Title>Categorize Vidoes</Card.Title>
                <Card.Text className='pb-5'>
                User can categorise the videos according to their prefernces using drag and drop features
                </Card.Text>
               </Card.Body>
            </Card>




            </div>

            <div className="col-lg-4 mb-3">

            <Card style={{ width: '100%' }}>
              <Card.Img style={{height:"350px"}}  variant="top" src={CardThree} />
              <Card.Body >
                <Card.Title>Watch History</Card.Title>
                <Card.Text className='pb-5'>
                User are able to see the history of watched videos.
                </Card.Text>
               </Card.Body>
            </Card>




            </div>

            </div>



      </div>

      <div className="row align-items-center my-5 border rounded p-5">

        <div className="col-lg-5">
            <h3 className='text-warning mb-5'>Simple, Fast and Powerful</h3>
            <div className='my-2' >
            <h6 className='fs-4'>Play Everything: <span className='fs-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, animi perspiciatis! Deleniti maxime .</span></h6>
          </div>
          <div className='my-2'>
            <h6 className='fs-4'>Categorize Videos: <span className='fs-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, animi perspiciatis! Deleniti maxime .</span></h6>
          </div>
          <div className='my-2'>
            <h6 className='fs-4'>Watch History: <span className='fs-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, animi perspiciatis! Deleniti maxime .</span></h6>
          </div>



        </div>
        <div className="col">

        </div>
        <div className="col-lg-6">
        <iframe width="100%" height="315" src="https://www.youtube.com/embed/WWr9086eWtY?si=dGJqhJfVJu_jCwSi" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>



        </div>






      </div>










    </div>


    
    
    
    
    </>
  )
}

export default Landing