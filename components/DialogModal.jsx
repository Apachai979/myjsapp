'use client'
import { useCallback, useRef, useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function Modal({ children, open }) {
    const overlay = useRef(null)
    const wrapper = useRef(null)
    const router = useRouter()

    // const onDismiss = useCallback(() => {
    //     router.back()
    // }, [router])

    // const onClick = useCallback(
    //     (e) => {
    //         if (e.target === overlay.current || e.target === wrapper.current) {
    //             if (onDismiss) onDismiss()
    //         }
    //     },
    //     [onDismiss, overlay, wrapper]
    // )

    // const onKeyDown = useCallback(
    //     (e) => {
    //         if (e.key === 'Escape') onDismiss()
    //     },
    //     [onDismiss]
    // )

    // useEffect(() => {
    //     document.addEventListener('keydown', onKeyDown)
    //     return () => document.removeEventListener('keydown', onKeyDown)
    // }, [onKeyDown])

    return (
        <div
            ref={overlay}
            className="fixed z-10 left-0 right-0 top-0 bottom-0 mx-auto my-auto backdrop-blur-sm bg-black/60"

        >
            <div
                ref={wrapper}
                className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white p-10 rounded-xl overflow-hidden "
            >
                {children}
            </div>
        </div>
    )
}