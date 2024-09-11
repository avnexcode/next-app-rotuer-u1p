
type DashboardLayoutProps = {
    children: React.ReactNode
    analytics: React.ReactNode
    products: React.ReactNode
}

export default function Layout({ children, analytics, products }: DashboardLayoutProps) {
    return (
        <div className='flex flex-col gap-5 p-5 w-full'>
            <div className='bg-slate-500 w-full flex justify-center items-center py-10'>
                {children}
            </div>
            <div className='flex w-full gap-5'>
                <div className="flex justify-center item-center py-10 flex-grow bg-slate-500">
                    {analytics}
                </div>
                <div className="flex justify-center item-center py-10 flex-grow bg-slate-500">
                    {products}
                </div>
            </div>
        </div>
    )
}
