import React from 'react';
import styles from './Home.module.css';
import prof from './profPic.png';
import DownloadLink from 'react-download-link';
import resume from './srikarResume.pdf';


class Home extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div id={styles.homeOuter}>
                <img src={prof} id={styles.img}/>
                <div id={styles.heading}>Hey! I'm Srikar.</div>
                <div id={styles.para}>I'm a Computer Science student and a passionate programmer with lots of experience in Software Engineering, IT, and CS Teaching.</div>
                <div id={styles.sub}>Look around the site to check out my past work and projects or to contact me. You can also view my resume <DownloadLink label="here." filename="srikarResume.pdf" exportFile={() => resume}/></div>
            </div>
        );
    }
};

export default Home;