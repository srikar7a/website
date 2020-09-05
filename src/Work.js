import React from 'react';
import styles from './Work.module.css';


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
                    <div id={styles.softwareSelected}>Software Engineering Experience</div>
                    <div id={styles.it} onClick={this.itClick}>IT Experience</div>
                    <div id={styles.other} onClick={this.otherClick}>Other Experience</div>
                </div>
            );
        }
        else if(this.state.itSelect){
            return(
                <div id={styles.workOuter}>
                    <div id={styles.software} onClick={this.softwareClick}>Software Engineering Experience</div>
                    <div id={styles.itSelected}>IT Experience</div>
                    <div id={styles.other} onClick={this.otherClick}>Other Experience</div>
                </div>
            );
        }
        else{
            return(
                <div id={styles.workOuter}>
                    <div id={styles.software} onClick={this.softwareClick}>Software Engineering Experience</div>
                    <div id={styles.it} onClick={this.itClick}>IT Experience</div>
                    <div id={styles.otherSelected}>Other Experience</div>
                </div>
            );
        }
        
    }
};

export default Work;