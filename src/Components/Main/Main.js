import React from 'react'
import styles from './Main.module.css';
import Sidebar from '../SIdebar/Sidebar';
import Home from '../Home/Home';

function Main() {
    return (
        <main className={`container ${styles.main}`}>
            <Sidebar />
            <Home/>
            <Sidebar />
        </main>
    )
}

export default Main;