import React from 'react'
import styles from "./Home.module.css"
import { Link } from 'react-router-dom'

function Home(props) {
    return (
        <>
            <div className='d-flex flex-wrap justify-content-center gap-3 mt-3'>
                <Link to='/task1' className={styles.tasks}><div >StopWatch</div></Link>
                <Link to='/task2' className={styles.tasks}><div >Redux Tool Kit (crud operation)</div></Link>
                <Link to='/task1' className={styles.tasks}><div >StopWatch</div></Link>
                <Link to='/task1' className={styles.tasks}><div >StopWatch</div></Link>


            </div>


        </>
    )
}

export default Home
