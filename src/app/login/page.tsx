'use client';

import Head from 'next/head'
import LoginForm from "@/components/form/login-form";

export default function LoginPage() {
    return (
        <>
            <Head>
                <title>Login Page</title>
            </Head>
            <div className="flex items-center justify-center h-screen bg-gray-100">
                <LoginForm />
            </div>
        </>
    )
}
