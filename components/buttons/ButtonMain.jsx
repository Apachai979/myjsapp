import Link from "next/link"
import { Children } from "react"

export default function ButtonMain({ children, url }) {
    return (
        <Link href={url}><button className="px-10 py-5 text-2xl bg-white text-mainGreen rounded-full font-semibold shadow-md hover:shadow-xl hover:shadow-mainGreen hover:-translate-y-1 transition-all duration-300">{children}</button></Link>
    )
}