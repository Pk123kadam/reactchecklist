import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from "./Navbar.module.css"
import { useDispatch } from "react-redux"
import { filtered } from '../../views/pages/Task2/FormReducer'

function Navbar() {
    const dispatch = useDispatch()
    const [name, setName] = useState("")
    function handlechange(e) {
        setName(e.target.value)

    }
    function handlesubmit(e) {
        e.preventDefault()
        console.log('submit')
        dispatch(filtered(name))
    }
    console.log('name', name)
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <div class="container-fluid">
                    <Link to="/"><button className='btn navbar-brand'>Checklist</button></Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link to="/task1" className={styles.link}> <button className='btn text-white'>Task1</button></Link>
                                <Link to="/task2" className={styles.link}> <button className='btn text-white'>Task2</button></Link>
                            </li>
                            {/* <li class="nav-item">
                                <Link to="/task2"> <button className='btn'>Task2</button></Link>
                            </li> */}

                        </ul>
                        <form class="d-flex" onSubmit={handlesubmit}>
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={(e) => handlechange(e)} />
                            <button class="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default Navbar
