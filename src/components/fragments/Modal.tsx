import { useRouter } from "next/navigation"
import { MouseEventHandler, useRef } from "react"

export default function Modal({ children }: { children: React.ReactNode }) {
    const overlay = useRef(null)
    const router = useRouter()
    const close: MouseEventHandler = (e) => {
        if (e.target === overlay.current) {
            router.back()
        }
    }
    return (
        <div ref={overlay} onClick={close} className="fixed z-10 right-0 left-0 top-0 bottom-0 mx-auto bg-black/50">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 p-6 bg-white rounded-lg">
                {children}
            </div>
        </div>
    )
}

// import { useRouter } from "next/navigation"
// import { MouseEventHandler, useState } from "react"

// export default function Modal({ children }: { children: React.ReactNode }) {
//     const [overlay, setOverlay] = useState<HTMLDivElement | null>(null)
//     const router = useRouter()

//     const close: MouseEventHandler = (e) => {
//         if (e.target === overlay) {
//             router.back()
//         }
//     }

//     return (
//         <div ref={setOverlay} onClick={close} className="fixed z-10 right-0 left-0 top-0 bottom-0 mx-auto bg-black/50">
//             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 p-6 bg-white rounded-lg">
//                 {children}
//             </div>
//         </div>
//     )
// }
