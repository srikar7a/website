import React from 'react';
import styles from './Contact.module.css';
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";
  
class Contact extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div id={styles.contactOuter}>
                <div id={styles.contactMessage}>Feel free to reach out to me or check out any of my social media links below!</div>
                <div id={styles.phone}>Phone Number: 848.667.4516</div>
                <div id={styles.email}><Link to="/email">Email</Link></div>
                <div id={styles.linkedin}><Link to="/linkedin">LinkedIn</Link></div>
                <div id={styles.fb}><Link to="/fb">Facebook</Link></div>
                <div id={styles.ig}><Link to="/ig">Instagram</Link></div>
                <div id={styles.yt}><Link to="/yt">YouTube</Link></div>
            </div>
        );
    }
};

export default Contact;