import Link from "next/link";

export default function Register() {
    return (
        <div className="flex flex-col gap-10 justify-center items-center">
            <h1 className="text-5xl">Register</h1>
            <span>Back to <Link href={'/'} className="underline text-blue-500">Home</Link></span>
        </div>
    )
}
