"use client"
import { usePathname } from "next/navigation"
import Navbar from "../fragments/Navbar"

type MainLayoutProps = {
    children: React.ReactNode
}

const disabledNavbar = ['/login', '/register']

export default function MainLayout({ children }: MainLayoutProps) {
    const pathName = usePathname()
    return (
        <div>
            {!disabledNavbar.includes(pathName) && <Navbar />}
            <div>
                {children}
            </div>
        </div>
    )
}
