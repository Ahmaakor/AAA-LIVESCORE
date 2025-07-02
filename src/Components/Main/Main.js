import React from 'react'
import styles from './Main.module.css';
import Sidebar from '../SIdebar/Sidebar';

function Main() {
    return (
        <main className={`container ${styles.main}`}>
            <Sidebar />
            <div className="main-content">
                <div className={styles.content}>
                    {/* Main content goes here */}
                    <h1>Welcome to the Live Score App</h1>
                    <p>Stay updated with the latest scores and news.</p>
                </div>
            </div>
        </main>
    )
}

export default Main;