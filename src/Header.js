import React from 'react';
import styles from './Header.module.css';

function Header(){
    return(
        <div id={styles.headerOuter}>
            <div id={styles.name}>Srikar Ayyalasomayajula</div>
        </div>
    );
}

export default Header;