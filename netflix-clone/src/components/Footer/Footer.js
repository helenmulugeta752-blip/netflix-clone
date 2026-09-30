import React from 'react'
import "./Footer.css";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';


const Footer = () => {
  return (
    <div className="Footer_outer_container">
        <div className="Footer_inner_container">
            <div className="Footer_icons">
                <FacebookIcon/>
                <InstagramIcon/>
                <YouTubeIcon/>
            </div>
            < div className="footer_data">
         <ul>
            <li>Audio Description
            </li>
            <li>Invester Relation</li>
            <li>Legal Notice</li>
            <li>Help Center</li>
            <li>Jobs</li>
            <li>cookie Preferance</li>
            <li>Gift Cards</li>
            <li>Terms Of Use</li>
            <li>Corporation Information</li>
            <li>Media Class</li>
            <li>Privacy</li> 
            <li>Contact US</li>
         </ul>

</div>
    <div className="service_code">
        <p>
            service code
        </p>
    </div>
    <div className="copy_write">
        &copy;1997-2026 Netflix,Inc.

    </div>
        </div>

    </div>
  )
}

export default Footer