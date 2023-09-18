import React, { useEffect, useState } from 'react'
import { useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux"
import { addform, delform, getform } from './FormReducer'
import Loader from '../../../components/Loader/Loader'
import Modal from '../../../components/Modal/Modal'

function Task2() {
    const dispatch = useDispatch()
    const { form, load, filtered } = useSelector((state) => state.form)
    const [obj, setObj] = useState({})
    useEffect(() => {
        dispatch(getform())
    }, [])
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm()
    const onSubmit = (data) => {
        dispatch(addform(data))
    }
    return (
        <> {load ? <Loader></Loader> : <>
            <div className=' mt-5'>
                <form onSubmit={handleSubmit(onSubmit)} className='d-flex flex-column align-items-center'>
                    <div>
                        <div>Name:</div>
                        <input
                            {...register("name", { required: true })}
                            aria-invalid={errors.name ? "true" : "false"}
                        />
                        <div style={{ height: "30px", color: "red" }}>
                            {errors.name?.type === "required" && (
                                <p role="alert">First name is required</p>
                            )}
                        </div>
                    </div>
                    <div>
                        <div>Email:</div>
                        <input
                            {...register("email", { required: "Email Address is required" })}
                            aria-invalid={errors.email ? "true" : "false"}
                        />
                        <div style={{ height: "30px", color: "red" }}>
                            {errors.email && <p role="alert">{errors.email.message}</p>}
                        </div>
                    </div>
                    <div>
                        <div>Phone:</div>
                        <input
                            {...register("phone", { required: "phone number is required" })}
                            aria-invalid={errors.password ? "true" : "false"}
                        />
                        <div style={{ height: "30px", color: "red" }}>
                            {errors.phone && <p role="alert">{errors.phone.message}</p>}

                        </div>
                    </div>
                    <div>
                        <button type='submit' className='btn btn-primary'>Submit</button>
                    </div>
                </form>
            </div>
            <div className='container mt-5'>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">First</th>
                            <th scope="col">Email</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filtered.length == 0 ?
                            form?.map((e, i) => {
                                return <tr>
                                    <td>{e.name}</td>
                                    <td>{e.email}</td>
                                    <td>{e.phone}</td>
                                    <td onClick={() => setObj(e)} ><Modal name={"Update"} selectedData={obj}></Modal></td>
                                    <td><button className='btn btn-danger' onClick={() => dispatch(delform(e.id))}>Delete</button></td>
                                </tr>
                            }) : filtered?.map((e, i) => {
                                return <tr>
                                    <td>{e.name}</td>
                                    <td>{e.email}</td>
                                    <td>{e.phone}</td>
                                    <td onClick={() => setObj(e)} ><Modal name={"Update"} selectedData={obj}></Modal></td>
                                    <td><button className='btn btn-danger' onClick={() => dispatch(delform(e.id))}>Delete</button></td>
                                </tr>
                            })
                        }
                        <tr>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>}

        </>

    )
}

export default Task2

