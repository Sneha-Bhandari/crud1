import React, { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as yup from "yup"
import { toast, ToastContainer } from 'react-toastify'
import axios from 'axios';

const Formho = () => {
    const[open , setOpen]=useState(false)

    const details = [
        {
            name: "firstName", type: "text", placeholder: "enter your firstname",
        },
        {
            name: "middleName", type: "text", placeholder: "enter your middle name",
        },
        {
            name: "lastName", type: "text", placeholder: "enter your last  name",
        },
        {
            name: "collegeName", type: "text", placeholder: "enter your college name",
        },
        {
            name: "email", type: "email", placeholder: "enter your email",
        },
        {
            name: "phone", type: "text", placeholder: "enter your phone number",
        },
        {
            name: "subject", type: "text", placeholder: "enter your fav subject"
        }
    ]
    const schemas = yup.object().shape({
        firstName: yup.string().required("first name is required"),
        lastName: yup.string().required("last name is required"),
        middleName: yup.string().required("middle name is required"),
        collegeName: yup.string().required("College name is required"),
        email: yup.string().email("Please provide a valid email"),
        subject: yup.string()
            .required("Subject is required")
            .matches(/^[A-Za-z\s]+$/, "Subject must only contain letters and spaces")
            .max(100, "Subject must be less than 100 characters"),

        phone: yup.string()
            .required("Phone number is required")
            .matches(/^[0-9]{10}$/, "Phone number must be exactly 10 digits")
    })

    return (
        <div className={'fixed  bg-black h-screen flex justify-center items-center w-screen bg-opacity-30 z-10 left-0'}>
            <div className='w-6/12' >
                <ToastContainer />
                <Formik initialValues={{ firstName: "", middleName: "", lastName: "", collegeName: "", email: "", phone: "", subject: "" }}
                    validationSchema={schemas}
                    onSubmit={(values) => {
                        console.log(values)
                        alert("submitted successfully!!")
                        
    
                    }}>
                    <Form className='w-full'>
                        <div className='  h-lvh w-full flex items-center justify-center'>
                            <div className='h-fit bg-gray-300  w-full
                            flex items-center justify-center flex-col gap-6 py-8 shadow-lg rounded-lg '>

                                <h2 className='font-semibold text-4xl text-blue-950'>Person's Info</h2>

                                <div className='grid grid-cols-2 w-full p-4    gap-4'>
                                    {
                                        details.map((val, i) => {
                                            return (
                                                <div key={i} className='flex flex-col w-full gap-2'>
                                                    <div className='font-semibold text-gray-800 uppercase'>
                                                        {val.name}:
                                                    </div>
                                                    <Field className=" p-2 w-full " name={val.name} type={val.type} placeholder={val.placeholder}
                                                    ></Field>
                                                    <ErrorMessage name={val.name} component={"div"} className='text-red-600'></ErrorMessage>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                                <div className='flex flex-row gap-2 justify-between'>
                                    <button className="text-2xl bg-green-950 text-white w-fit h-fit p-2 rounded-lg shadow-lg " type="submit" onClick={()=>setOpen(false) }>Submit</button>
                                    <button className="text-2xl bg-green-950 text-white w-fit h-fit p-2 rounded-lg shadow-lg"  onClick={()=>{setOpen(false)} }>Cancel</button>
                                </div>

                            </div>
                        </div>
                    </Form>
                </Formik>


            </div>

        </div>
    )
}

export default Formho