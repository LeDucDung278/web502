import React, { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { signin, } from '../api/auth'
import { User } from '../type/User'
import { authenticated } from '../utils/localStorage'

type TypeInputs = {
    email: string,
    password: string,
}

const SignIn = (props: TypeInputs) => {
    const { register, handleSubmit, formState: {errors}} = useForm<TypeInputs>()
  const navigate = useNavigate()

  const onSubmit: SubmitHandler<TypeInputs> = async data => {
    signin(data)

    const { data : user} = await signin(data)
    
    console.log(user);

    authenticated(user, () => {
      navigate('/')
    })
    }
    return (
        <div className="flex items-center min-h-screen bg-white">
            <div className="container mx-auto">
                <div className="max-w-md mx-auto my-10 border border-gray-300 rounded-md">
                    <div className="text-center">
                        <h1 className="my-3 text-3xl font-semibold text-gray-700">Đăng nhập tài khoản</h1>
                    </div>
                    <div className="m-7">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="mb-6">
                                <label htmlFor="email" className="block mb-2 text-sm text-gray-600 dark:text-gray-400">Email</label>
                                <input type="email" {...register('email')} id="email" placeholder="Email" className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md " />
                            </div>
                            <div className="mb-6">
                                <div className="flex justify-between mb-2">
                                    <label htmlFor="password" className="text-sm text-gray-600 dark:text-gray-400">Password</label>
                                    <a href="#!" className="text-sm text-gray-400 focus:outline-none focus:text-indigo-500 hover:text-orange-700">Quên mật khẩu?</a>
                                </div>
                                <input type="password" {...register('password')} id="password" placeholder="Your Password" className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md" />
                            </div>
                            <div className="mb-6">
                                <button className="w-full px-3 py-4 text-white bg-indigo-500 rounded-md focus:bg-indigo-600 focus:outline-none">Đăng Nhập</button>
                            </div>
                            <p className="text-sm text-center text-gray-400">Bạn chưa có tài khoản? <a href="/signup" className="text-indigo-400 focus:outline-none focus:underline focus:text-indigo-500 dark:focus:border-indigo-800 hover:text-orange-700">Đăng kí</a>.</p>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default SignIn