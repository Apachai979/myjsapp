import Link from "next/link"

export default function ButtonMain({ children, titleForForm }) {
    return (
        <Link href="/feedbackform"><button className="px-10 py-5 text-2xl bg-white outline-0 text-mainGreen rounded-full font-semibold shadow-md hover:shadow-xl hover:shadow-mainGreen hover:-translate-y-1 transition-all duration-300">{children}</button></Link>
    )
}