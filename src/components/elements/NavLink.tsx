"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'

type NavLinkProps = {
    children: React.ReactNode
    href: string
    className?: string
}

export default function NavLink({ children, href, className }: NavLinkProps) {
    const pathName = usePathname()
    const isActive = pathName === href
    return <Link href={href} className={`${className} ${isActive? "text-blue-500" : "text-white"}`}>{children}</Link>

}
