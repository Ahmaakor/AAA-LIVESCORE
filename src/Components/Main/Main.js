import React, { useState } from 'react'
import styles from './Main.module.css';
import Sidebar from '../SIdebar/Sidebar';
import Played from '../Played/Played';
import Home from '../Home/Home';
import Fixtures from '../Fixtures/Fixtures';

function Main() {
    const [currentPage, setCurrentPage] = useState("home");
    return (
        <main className={`container ${styles.main}`}>
            <Sidebar currentPage={currentPage} onNavChange={setCurrentPage} />
            {/* {currentPage != 'home' || 'fixtures' && <Home />} */}
            {currentPage === "home" && <Home />}
            {currentPage === "fixtures" && <Fixtures />}
            <Played />
        </main>
    )
}

export default Main;