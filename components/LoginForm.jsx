import { GraphQLClient, gql } from 'graphql-request'
import Link from 'next/link';
import React, { useState } from 'react'
import { submitAuthor } from '../services';


const LoginForm = () => {
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [formData, setFormData] = useState({ name: null, email: null, password: null, confirmPassword: false });
    const [error, setError] = useState(false);

    const onInputChange = (e) => {
        const { target } = e;
        setFormData((prevState) => ({
            ...prevState,
            [target.name]: target.value,
        }));

    };

    const handleAuthorLogin = () => {
        setError(false);
        const { email, password } = formData;
        if (!email || !password) {
            setError(true);
            console.log(error)
            return;
        }
        const authorObj = {
            email,
            password,
        };
        submitAuthor(authorObj)
            .then((res) => {
                if (res.createComment) {
                    formData.name = '';
                    formData.email = '';
                    formData.password = '';
                    formData.confirmPassword = '';
                    setFormData((prevState) => ({
                        ...prevState,
                        ...formData,
                    }));
                    setShowSuccessMessage(true);
                    setTimeout(() => {
                        setShowSuccessMessage(false);
                    }, 3000);
                }
            });
    };

    return (
        <div className="bg-white shadow-lg rounded-lg p-8 pb-16 mb-8">
            <div className='overflow-hidden shadow-md mb-6' >
                <span className='text-xl'>Login Form</span>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-1 gap-4 mb-4">
                <input type="email" onChange={onInputChange} className="py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700" placeholder="Email" name="email" />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-1 gap-4 mb-4">
                <input type="password" onChange={onInputChange} className="py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700" placeholder="Password" name="password" />
            </div>
            {error && <p className="text-xs text-red-500">All fields are mandatory</p>}

            <div className="mt-8">
                <Link href='/auth/registerForm'>
                    <button type="button" className="transition duration-500 ease hover:bg-indigo-900 inline-block bg-pink-600 text-lg font-medium rounded-full text-white px-8 py-3 cursor-pointer">Register</button>
                </Link>
                <button type="button" onClick='' className="transition duration-500 ease hover:bg-indigo-900 inline-block bg-green-600 text-lg font-medium rounded-full text-white px-8 py-3 cursor-pointer">Login</button>
                {showSuccessMessage && <span className="text-xl float-right font-semibold mt-3 text-green-500">Registration submitted for review</span>}
            </div>
        </div>
    )
}


export default LoginForm