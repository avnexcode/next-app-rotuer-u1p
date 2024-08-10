type ButtonAuthProps = {
    children: React.ReactNode
    className?: string
    onClick?: () => void
} & React.ButtonHTMLAttributes<HTMLButtonElement>

export default function ButtonAuth({ children, className, onClick }: ButtonAuthProps) {
    return <button className={`bg-gray-700 text-gray-200 border-2 border-blue-500 px-5 py-[0.125rem] ${className}`} onClick={onClick}>{children}</button>
}
