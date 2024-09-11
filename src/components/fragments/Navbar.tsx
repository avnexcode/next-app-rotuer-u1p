import { useRouter, usePathname } from 'next/navigation'
import ButtonAuth from '../elements/ButtonAuth'
import NavLink from '../elements/NavLink'
export default function Navbar() {
    const router = useRouter()
    const pathName = usePathname()
    return (
        <nav className='flex px-5 justify-between items-center py-4 bg-slate-700'>
            <div className='flex gap-8 bg-slate-700'>
            <NavLink href='/'>Home</NavLink>
            <NavLink href="/about">About</NavLink>
            <NavLink href="/products">Products</NavLink>
            <NavLink href="/products2">Products 2</NavLink>
            </div>
            <div className='flex gap-5'>
                <ButtonAuth onClick={() => {router.push('login')}}>Login</ButtonAuth>
                <ButtonAuth onClick={() => {router.push('register')}}>Register</ButtonAuth>
                <ButtonAuth onClick={() => {router.push('dashboard')}}>Dashboard</ButtonAuth>
            </div>
        </nav>
    )
}