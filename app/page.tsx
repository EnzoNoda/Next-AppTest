import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
    return (
        <div className="bg-emerald-100 h-screen flex flex-row justify-around">
            <h1 className="text-gray-800 text-lg">Home Page</h1>
            <Link className="text-gray-800" href="/Login">
                Login
            </Link>
            <Link className="text-gray-800" href="/About">
                About
            </Link>
        </div>
    );
}
