'use client'
import Link from "next/link"
import { usePathname } from 'next/navigation'

const navItems = [
    { label: "Каталог", href: "/catalogs" },
    { label: "Партнерам", href: "/partners" },
    { label: "О Компании", href: "/about" },
    { label: "Производство", href: "/manufacture" },
    { label: "Документы", href: "/documentation" },
    { label: "Академия", href: "/academy" },
    { label: "Контакты", href: "/contacts" }
]

export default function Navigation() {

    const pathname = usePathname();

    return (
        <nav className="grow">
            <div className="flex justify-evenly items-center px-10">
                {navItems.map((link) => {
                    const isActive = pathname === link.href;
                    return (
                        <Link key={navItems.label} href={link.href} className={isActive ? "first:shadow-inner first:bg-contrast_green first:shadow-gray-600/50 first:text-white first:rounded-full first:px-6 first:py-2 text-primary_green px-1" : "first:bg-primary_green first:text-white first:rounded-full first:shadow-md first:shadow-night_green/50 first:hover:shadow-inner first:hover:bg-contrast_green first:hover:shadow-gray-600/50 first:px-6 first:py-2 first:text-center first:transition-all first:hover:text-white hover:text-primary_green px-1"}>{link.label}</Link>
                    )
                })}
            </div>
        </nav>
    )
}