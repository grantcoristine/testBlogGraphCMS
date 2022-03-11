import { gql } from 'graphql-request'
import React, { useState } from 'react'

const RegisterForm = () => {
    const [values, setValues] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    const onInputChange = (event) => {
        setValues({ ...values, [event.target.name]: event.target.value })
    }

    const onSubmit = (event) => {
        event.preventDefault();

    }

    return (
        <div className="bg-white shadow-lg rounded-lg p-8 pb-16 mb-8">
            <div className='overflow-hidden shadow-md mb-6' >
                <span className='text-xl'>Register Form</span>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
                <input type="email" onChange={onInputChange} className="py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700" placeholder="Email" name="email" />
                <input type="text" onChange={onInputChange} className="py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700" placeholder="Username" name="username" />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
                <input type="password" onChange={onInputChange} className="py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700" placeholder="Password" name="password" />
                <input type="password" onChange={onInputChange} className="py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700" placeholder="Confirm Password" name="confirmPassword" />
            </div>
            <button type="button" /*onClick={handlePostSubmission}*/ className="float-right transition duration-500 ease hover:bg-green-600 inline-block bg-pink-600 text-lg font-medium rounded-full text-white px-8 py-3 cursor-pointer">Register</button>
        </div>
    )
}

const REGISTER_USER = gql`
mutation register(
    $username: String!
    $email: String!
    $password: String!
    $confirmPassword: String!
){
    register(
        registerInput: {
            username: $username
            email: $email
            password: $password
            confirmPassword: $confirmPassword
        }
    ) {
        id email username createdAt token
    }
}`

export default RegisterForm