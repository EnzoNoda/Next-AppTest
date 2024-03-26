import Image from 'next/image';

export default function Home() {
    return (
        <main className="flex flex-1 h-screen flex-row">
            <div className="flex w-1/3 justify-center items-center bg-slate-400">
                <h1 className="text-xl">Login</h1>
            </div>
            <div className="flex w-2/3 justify-center items-center bg-slate-500">
                <h1 className="text-xl">Welcome</h1>
            </div>
        </main>
    );
}
