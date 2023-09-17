import React from 'react'
import { useForm } from "react-hook-form"

function Task2() {
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm()
    const onSubmit = (data) => console.log(data)

    return (
        <>
            <div className=' mt-5'>
                <form onSubmit={handleSubmit(onSubmit)} className='d-flex flex-column align-items-center'>
                    <div>
                        <div>Name:</div>
                        <input
                            {...register("firstName", { required: true })}
                            aria-invalid={errors.firstName ? "true" : "false"}
                        />
                        <div style={{ height: "30px", color: "red" }}>
                            {errors.firstName?.type === "required" && (
                                <p role="alert">First name is required</p>
                            )}
                        </div>

                    </div>
                    <div>
                        <div>Email:</div>
                        <input
                            {...register("mail", { required: "Email Address is required" })}
                            aria-invalid={errors.mail ? "true" : "false"}
                        />
                        <div style={{ height: "30px", color: "red" }}>
                            {errors.mail && <p role="alert">{errors.mail.message}</p>}

                        </div>
                    </div>
                    <div>
                        <button type='submit' className='btn btn-primary'>Submit</button>
                    </div>
                </form>
            </div>
        </>

    )
}

export default Task2

