type ProductLayoutProps = {
    children: React.ReactNode,
    modal: React.ReactNode
}
export default function ProductLayout({ children, modal }: ProductLayoutProps) {
    return (
        <div>
            {children}
            {modal}
        </div>
    )
}
