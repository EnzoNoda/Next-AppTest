import Link from 'next/link';
import React from 'react';

// import { Container } from './styles';

const Login: React.FC = () => {
    return (
        <main className="flex flex-1 h-screen flex-row">
            <div className="flex w-full md:w-1/3 justify-center items-center bg-slate-200 ">
                <h1 className="text-xl">Login</h1>
                <Link href="/about">Login</Link>
            </div>
            <div className=" w-2/3 justify-center items-center bg-slate-400 hidden md:flex">
                <h1 className="text-xl">Welcome</h1>
            </div>
        </main>
    );
};

export default Login;
