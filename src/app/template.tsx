import SetCountGroup from "@/components/fragments/SetCountGroup"

type TemplateProps = {
    children: React.ReactNode
}

export default function Template({ children }: TemplateProps) {
    return (
        <div>
            <SetCountGroup>Template</SetCountGroup>
            <div className="w-full flex justify-center pt-10 bg-slate-200">
                {children}
            </div>
        </div>
    )
}