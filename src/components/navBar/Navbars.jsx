import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


const Navbars = () => {
  return (
    <div>
        <Navbar className="bg-info">
          <Container>
            <Link to={'/'} style={{textDecoration:"none",}} className='fw-bold py-2'>
                <Navbar.Brand style={{color:"white",}}>
                <i className="fa-solid fa-music me-2"></i>{' '}
                  Media Player
                </Navbar.Brand>
            </Link>
          </Container>
        </Navbar>
      
    </div>
  )
}

export default Navbars
