"use client"
import ButtonAuth from "@/components/elements/ButtonAuth";
import Link from "next/link";
import axios from "axios"
export default function Login() {
    const loginHandler = (e: any) => {
        e.preventDefault()
        axios.post('http://localhost:3000/api/auth/login', {
            email: e.currentTarget.email.value,
            password: e.currentTarget.password.value
        })
    }
    return (
        <div className="flex flex-col gap-10 justify-center items-center">
            <h1 className="text-5xl">Login</h1>
            <form onSubmit={loginHandler}>
                <div className="flex flex-col gap-2 mb-5">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" placeholder="input email" className="px-2 py-1" />
                </div>
                <div className="flex flex-col gap-2 mb-5">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" placeholder="input password" className="px-2 py-1" />
                </div>
                <div className="flex justify-end">
                    <ButtonAuth>Login</ButtonAuth>
                </div>
            </form>
            <span>Back to <Link href={'/'} className="underline text-blue-500">Home</Link></span>
        </div>
    )
}
