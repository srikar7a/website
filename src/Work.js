import React from 'react';
import styles from './Work.module.css';
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom"; 

class Work extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            softwareSelect: true,
            itSelect: false,
            otherSelect: false
        };

        this.softwareClick = this.softwareClick.bind(this);
        this.itClick = this.itClick.bind(this);
        this.otherClick = this.otherClick.bind(this);
    }

    softwareClick(){
        this.setState({
            softwareSelect: true,
            itSelect: false,
            otherSelect: false
        });
    }

    itClick(){
        this.setState({
            softwareSelect: false,
            itSelect: true,
            otherSelect: false
        });
    }

    otherClick(){
        this.setState({
            softwareSelect: false,
            itSelect: false,
            otherSelect: true
        });
    }

    render(){
        if(this.state.softwareSelect){
            return(
                <div id={styles.workOuter}>
                    <div id={styles.it} onClick={this.itClick}>IT Experience</div>
                    <div id={styles.softwareSelected}>Software Experience</div>
                    <div id={styles.other} onClick={this.otherClick}>Other Experience</div>
                    <div id={styles.steigTitle}>Software Engineering Intern - <Link class="linkClass" to="/steignet">Steignet</Link> - May 2020 to Aug 2020</div>
                    <div id={styles.steigDescription}>I used Python in combination with Excel in order to improve the accuracy of the company's Quicksilver email classification model. 
                    I also worked on a webscraping program that used Python tools to pull and consolidate real estate data from the internet.</div>
                    <div id={styles.uniTitle}>Software Engineer - <Link class="linkClass" to="/uniflow">Uniflow (Startup)</Link> - Mar 2020 to Aug 2020</div>
                    <div id={styles.uniDescription}>We created a fully interactive and dynamic campus involvement tool that includes a club database, application builder, and office portal using ReactJS, MongoDB, and Python Flask in order to 
                    encourage and increase student involvement on college campuses.</div>
                    <div id={styles.sriTitle}>Software Engineering Intern - <Link class="linkClass" to="/sri">SRI International</Link> - May 2019 to Aug 2019</div>
                    <div id={styles.sriDescription}>I implemented new features to the company's audiovisual test sequence generator using C++. I also created a parts cost calculation tool
                    using VBA with Excel in order to automate hardware budget analysis.</div>
                    <div id={styles.aethTitle}>Software Engineering Intern - <Link class="linkClass" to="/aetherpal">AetherPal (acquired by VMWare)</Link> - Jun 2017 to Aug 2017</div>
                    <div id={styles.aethDescription}>I conducted extensive testing of the company's mobile remote support app and created numerous interactive smartphone tutorials
                    in order to further enhance our customer service initiative.</div>
                </div>
            );
        }
        else if(this.state.itSelect){
            return(
                <div id={styles.workOuter}>
                    <div id={styles.itSelected}>IT Experience</div>
                    <div id={styles.software} onClick={this.softwareClick}>Software Experience</div>
                    <div id={styles.other} onClick={this.otherClick}>Other Experience</div>
                    <div id={styles.steigTitle}>Technical Consultant - <Link class="linkClass" to="/its">University of Michigan IT Services</Link> - Nov 2018 to Present</div>
                    <div id={styles.steigDescription}>I diagnose and fix any issue concerning the hardware, software, and network used by the faculty and staff of my university in order to 
                    provide a smoother computing experience and a worry-free use of advanced technology.</div>
                </div>
            );
        }
        else{
            return(
                <div id={styles.workOuter}>
                    <div id={styles.it} onClick={this.itClick}>IT Experience</div>
                    <div id={styles.software} onClick={this.softwareClick}>Software Experience</div>
                    <div id={styles.otherSelected}>Other Experience</div>
                    <div id={styles.steigTitle}>Computer Science Instructor - <Link class="linkClass" to="/juni">Juni Learning</Link> - Aug 2020 to Present</div>
                    <div id={styles.steigDescription}>I teach classes in Python, Java, and C++ to kids up to the algorithms level so that they can build a strong
                    computer science foundation and a genuine passion for programming.</div>
                    <div id={styles.uniTitle}>CS and Math Tutor - <Link class="linkClass" to="/varsity">Varsity Tutors</Link> - Jun 2020 to Aug 2020</div>
                    <div id={styles.uniDescription}>I provide on-demand assistance for kids who need help with computer science concepts, as well as math help for standardized testing.</div>
                </div>
            );
        }
        
    }
};

export default Work;