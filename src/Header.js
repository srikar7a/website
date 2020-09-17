import React from 'react';
import styles from './Header.module.css';
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom"; 

class Header extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            homeSelected: true,
            workSelected: false,
            projectsSelected: false,
            contactSelected: false
        };
        this.homeClick = this.homeClick.bind(this);
        this.workClick = this.workClick.bind(this);
        this.projectsClick = this.projectsClick.bind(this);
        this.contactClick = this.contactClick.bind(this);
    }

    homeClick(){
        this.setState({
            homeSelected: true,
            workSelected: false,
            projectsSelected: false,
            contactSelected: false
        });
    }

    workClick(){
        console.log("clicked");
        this.setState({
            homeSelected: false,
            workSelected: true,
            projectsSelected: false,
            contactSelected: false
        });
    }

    projectsClick(){
        this.setState({
            homeSelected: false,
            workSelected: false,
            projectsSelected: true,
            contactSelected: false
        });
    }

    contactClick(){
        this.setState({
            homeSelected: false,
            workSelected: false,
            projectsSelected: false,
            contactSelected: true
        });
    }

    render(){
        return(
            <div id={styles.headerOuter}>
                <div id={styles.fname}>Srikar</div>
                <div id={styles.lname}>Ayyalasomayajula</div>
                <div id={styles.navBar}>
                    {this.state.homeSelected ? 
                    <div id={styles.homeOuterSelected}>
                        <Link to="/" id={styles.home}>Home</Link>
                    </div> :
                    <div id={styles.homeOuter} onClick={this.homeClick}>
                        <Link to="/" id={styles.home}>Home</Link>
                    </div>
                    }
                    {this.state.workSelected ? 
                    <div id={styles.workOuterSelected}>
                        <Link to="/work" id={styles.work}>Experience</Link>
                    </div> :
                    <div id={styles.workOuter} onClick={this.workClick}>
                        <Link to="/work" id={styles.work}>Experience</Link>
                    </div>
                    }
                    {this.state.projectsSelected ? 
                    <div id={styles.projectsOuterSelected}>
                        <Link to="/projects" id={styles.projects}>Projects</Link>
                    </div> :
                    <div id={styles.projectsOuter} onClick={this.projectsClick}>
                        <Link to="/projects" id={styles.projects}>Projects</Link>
                    </div>
                    }
                    {this.state.contactSelected ? 
                    <div id={styles.contactOuterSelected}>
                        <Link to="/contact" id={styles.contact}>Contact</Link>
                    </div> :
                    <div id={styles.contactOuter} onClick={this.contactClick}>
                        <Link to="/contact" id={styles.contact} >Contact</Link>
                    </div>
                    }
                </div>
                
            </div>
        );
    }
};

export default Header;