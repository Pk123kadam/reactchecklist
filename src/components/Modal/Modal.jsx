import React, { useEffect, useState } from 'react'
import { useForm } from "react-hook-form"
import { updform } from '../../views/pages/Task2/FormReducer'
import { useDispatch } from "react-redux"

function Modal(props) {
    const dispatch = useDispatch()
    const {
        register,
        formState: { errors },
        setValue,
        handleSubmit,
    } = useForm()


    const onSubmit = (data) => {
        console.log('data', data)
        dispatch(updform({ id: props?.selectedData?.id, data: data }))
        setValue("name", "")
        setValue("email", "")
        setValue("phone", "")
    }
    useEffect(() => {
        setValue("name", props?.selectedData?.name ? props?.selectedData?.name : "")
        setValue("email", props?.selectedData?.email ? props?.selectedData?.email : "")
        setValue("phone", props?.selectedData?.phone ? props?.selectedData?.phone : "")

    }, [props?.selectedData])
    return (
        <>
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                {props.name}
            </button>

            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-body">
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
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">Save changes</button>
                                </div>
                            </form>

                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}

export default Modal