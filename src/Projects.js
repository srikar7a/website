import React from 'react';
import styles from './Projects.module.css';

class Projects extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div id={styles.projectsOuter}>
                <div id={styles.neuroTitle}>NLP Metric Calculation Tool for Alzheimer's Diagnosis</div>
                <div id={styles.neuroDescription}>I am designing program that takes voice interviews of patients that are being tested for Alzheimer's and Dementia, transcribes them, and
                uses NLP to automatically calculate metrics for early Alzheimer’s detection such as Brunet’s Index and Honore’s Statistic in order to give an automated recommendation for further testing</div>
                <div id={styles.neuroGit}>Github Repo Link: https://github.com/srikar7a/ADSpeechAnalysis</div>

                <div id={styles.colorTitle}>"Color Hop" 2D Platformer Game</div>
                <div id={styles.colorDescription}>I built a 2D platformer game using Unity Game Engine and many C# scripts in which the player has to hop on 
                a course of dissapearing black beams that change color in order to get to the top under a time limit. Through this project I learned the importance
                of well-thought-out game mechanics as well as how physics and vector graphics intersects with computer programming. I am working on embedding the game onto this site.</div>
                <div id={styles.colorGit}>Github Repo Link: https://github.com/srikar7a/ColorHop</div>
                
            </div>
        );
    }
};

export default Projects;