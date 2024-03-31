import { Children } from 'react'

export default function Modal({ children, open }) {
    return (
        <dialog open={open} className="z-50">
            {children}
        </dialog>
    )
}
