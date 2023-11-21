import { useState } from 'react';
import { FaFacebookF } from "react-icons/fa6";
import { SiTwitter } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { IoAddCircleSharp } from "react-icons/io5";
import { TiThMenuOutline } from "react-icons/ti";
import srcimg from './logo.jpg';
import { IoSettings } from "react-icons/io5";
import { TbLogout } from "react-icons/tb";
import { ImProfile } from "react-icons/im";
import { GrCompliance } from "react-icons/gr";
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { FaInstagramSquare } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io5";
import { SiGmail } from "react-icons/si";






export default function Profile (){

/*<button className="addlinkprofile"><IoAddCircleSharp /></button>*/

const [navdis,setnavdis]=useState(true);

const [show, setShow] = useState(false);

const handleClose = () => setShow(false);
const handleShow = () => setShow(true);
    return(

        <>
  
        <div className="root">
    

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
      
        <Form.Label >Full Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Full Name"
                autoFocus
              />

        <Form.Label >Job Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Job Title"
                autoFocus
              />
        <div class="social-media">
        <a href="#" style={{q:'1'}} class=""><FaFacebookF className='iconmodal' /></a>
        <a href="#" style={{q:'2'}} class=""> <SiTwitter className='iconmodal'/></a>
        <a href="#" style={{q:'3'}} class=""> <BsYoutube className='iconmodal'/></a>
        <a href="#" style={{q:'3'}} class=""> <FaInstagramSquare  className='iconmodal'/></a>
        <a href="#" style={{q:'3'}} class=""> <IoLogoTwitter  className='iconmodal'/></a>
        <a href="#" style={{q:'3'}} class=""> <SiGmail  className='iconmodal'/></a>
        <Form.Control
                type="text"
                placeholder="link Social Media"
                autoFocus
              />
       </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      {navdis == true &&  
    <div className ="navbar1"display="block" id="menumen">

        <div id="adminn"      >
          <a className="adminn" href="#">
          <img className="adminnimg" src={srcimg}></img>
          <span>Fayez</span>
          </a>
        </div>


        <div id="adminn"      >
          <a className="adminn" href="#">
          <GrCompliance className='icon' />
          <span>Complete Profile</span>
          </a>
        </div>


        <div id="adminn"      >
          <a className="adminn" href="#">
          <ImProfile className='icon' />
          <span>My Profile</span>
          </a>
        </div>


        <div id="adminn"      >
          <a className="adminn" href="#">
         <IoSettings className='icon' /> 
          <span>Settings</span>
          </a>
        </div>


        <div id="adminn"      >
          <a className="adminn" href="#">
          <TbLogout className='icon' />
          <span>Logout</span>
          </a>
        </div>

    </div>}
        <div className="container">
        <div className="row h-100">
        <div className="profilebody">
        <button onClick={()=> setnavdis(!navdis)} className="menuprofile"><TiThMenuOutline /></button>
         <div className="userprofile one" ></div>
         <div className="divprofilename">Fayez</div>
         <div className="divprofilejob">Project Manager</div>
         <div class="social-media">
        <a href="#" style={{q:'1'}} class=""><FaFacebookF /></a>
        <a href="#" style={{q:'2'}} class=""> <SiTwitter /></a>
        <a href="#" style={{q:'3'}} class=""> <BsYoutube /></a>
        
       </div>
      
       <button className="buttonprofile" variant="primary" onClick={handleShow} >Edit Profile</button>
         </div>
      </div>
     </div>

       </div> 

      

       
        </>
    )
}