"use client"

type ButtonProps = {
  children: React.ReactNode
  onClick?: () => void
  className?: string
} & React.ButtonHTMLAttributes<HTMLButtonElement>

export default function ButtonCount({ children, onClick, className, ...props }: ButtonProps) {
  return <button className="bg-blue-500 text-white px-10 py-2" onClick={onClick} {...props}>{children}</button>
}
