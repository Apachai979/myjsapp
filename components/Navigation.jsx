'use client'
import Link from "next/link"
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from "react"

const navItems = [
    // { label: "Каталог", href: "/catalogs" },
    { label: "Партнерам", href: "/partners" },
    { label: "О Компании", href: "/about" },
    { label: "Производство", href: "/manufacture" },
    { label: "Документы", href: "/documentation" },
    { label: "Академия", href: "/academy" },
    { label: "Контакты", href: "/contacts" }
]

export default function Navigation() {
    const ulRef = useRef()
    const [state, setState] = useState(true)

    function handleMenu() {
        if (state) ulRef.current.className += ' top-[80px] opacity-100 '
        else ulRef.current.className = ' sm920:flex sm920:flex-1 sm920:items-center sm920:justify-evenly z-[-1] sm920:z-auto sm920:static absolute bg-body_bg sm920:max-w-[880px] w-full left-0 sm920:w-auto sm920:py-0 py-4 sm920:pl-0 pl-7 text-sm lg:text-base sm920:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500 '

        setState((prev) => !prev)
        console.log(state)
    }

    useEffect(() => {
        const intervalId = setInterval(handleMenu, 3000)
        return () => { clearInterval(intervalId) }
    }, [])

    const pathname = usePathname();

    return (
        <>
            <ul ref={ulRef} className="sm920:flex sm920:flex-1 sm920:items-center sm920:justify-evenly z-[-1] sm920:z-auto sm920:static absolute bg-body_bg sm920:max-w-[880px] w-full left-0 sm920:w-auto xl:px-8 sm920:px-4 sm920:py-0 py-4 pl-7 text-base sm920:text-sm lg:text-base sm920:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500 ">

                <li className="mx-4 my-6 sm920:my-0 sm920:mx-0 ">
                    <Link href="/catalogs" className={pathname === "/catalogs" ? "shadow-inner bg-contrast_green shadow-gray-600/50 text-white rounded-full px-6 py-2 " : "bg-primary_green text-white rounded-full shadow-md shadow-night_green/50 hover:shadow-inner hover:bg-contrast_green hover:shadow-gray-600/50 px-6 py-2 text-center transition-all hover:text-white "}>Каталог</Link>
                </li>

                {navItems.map((link) => {
                    const isActive = pathname === link.href;
                    return (
                        <li key={link.label} className="mx-4 my-6 sm920:my-0 sm920:mx-0 ">
                            <Link href={link.href} className={isActive ? "px-1 text-primary_green duration-300"
                                : "px-1 hover:text-primary_green duration-300"}>{link.label}</Link>
                        </li>
                    )
                })}
                <div className="-space-y-1.5 flex-none block sm920:hidden ">
                    <p className="text-xs font-semibold text-stone-400">Тел./WhatsApp</p>
                    <p className="lg:text-lg text-base font-semibold">+7 (495) 927-48-47</p>
                </div>
            </ul>
            <div className="-space-y-1.5 flex-none hidden sm920:block ">
                <p className="text-xs font-semibold text-stone-400">Тел./WhatsApp</p>
                <p className="lg:text-lg text-base font-semibold">+7 (495) 927-48-47</p>
            </div>
        </>
    )
}