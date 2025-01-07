import React from 'react'
import { useState, useEffect } from "react";
import axios from 'axios'


import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";


function First() {
  
    const Forms = [
        {
          name: "firstName",
          type: "text",
          placeholder: "Enter your firstname",
        },
        {
            name: "middleName",
            type: "text",
            placeholder: "Enter your middlename",
          },
          {
            name: "lastName",
            type: "text",
            placeholder: "Enter your lastname",
          },
          {
            name: "collegeName",
            type: "text",
            placeholder: "Enter your collegename",
          },
        {
          name: "email",
          type: "email",
          placeholder: "Enter your email",
        },
        {
            name: "phone",
            type: "number",
            placeholder: "Enter phone number",
          },
          {
            name: "subject",
            type: "text",
            placeholder: "Enter any subject",
          },
        
      ];
      const [count, setCount] = useState(0);
  const Schemas = yup.object().shape({
    firstName: yup.string().required("firstname is required!!"),
    middleName: yup.string().required("middlename is required!!"),
    lastName: yup.string().required("lastname is required!!"),
    collegeName: yup.string().required("Collegename is required!!"),
    phone: yup.string().required("Number is required!!"),
    subject: yup.string().required("Subject is required!!"),




    email: yup
      .string()
      .email("please provide a valid  email")
      .required("please enter your email"),
    
  });


  return (
    <div>
      <div className="flex justify-center items-center min-h-screen h-lvh ">
      <div className="w-full max-w-md p-4 h-full">
        <Formik
          className=""
          initialValues={{
            firstName: "",
            middleName:"",
            lastName:"",
            collegeName:"",
            email: "",
            phone:"",
            subject:""

            
          }}
          validationSchema={Schemas}
          onSubmit={(values) => {
            console.log(values);
            alert ("Submitted")
            axios.post("http://localhost:3000/person", values).then(result=>{
                console.log(result)
            })
            .catch((error)=>{
                console.log(error)
            })
          
          }}
        >
         {({setFieldValue,values})=>{
          return(
            <Form className=" bg-gray-300  flex flex-col w-full p-1 shadow-lg rounded-xl">
            <div>
              <h1 className="text-black text-center font-bold text-3xl m-3">
                Form 
              </h1>
            </div>
            {Forms.map((val, i) => {
              return (
                <div key={i} className="flex flex-col px-2 py-3">
                    <div className='uppercase text-sm px-2 tracking-tighter py-1'>{val.name}:</div>
                  <Field
                    className="bg-white border border-gray-400  w-full rounded-lg  p-1 outline-none"
                    name={val.name}
                    type={val.type}
                    placeholder={val.placeholder}
                  />
                  <ErrorMessage
                    name={val.name}
                    component={"div"}
                    className="text-red-700 px-3"
                  />
                </div>
              );
            })}
            <div className="flex items-center justify-center mx-2 my-2">
              <button
                className="bg-black text-white rounded-lg p-1 w-full shadow-2xl  "
                type="submit"
              >
                <h1 className='font-semibold text-lg  hover:cursor-pointer'>Submit</h1>
              </button>
            </div>
          </Form>
          )
         }}
        </Formik>
      </div>
    </div>
    
    </div>

    
  )
}

export default First
