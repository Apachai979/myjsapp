import Link from "next/link"
import Image from "next/image"
import Navigation from "./Navigation"
import ButtonMenu from "@/components/buttons/ButtonMenu";

export default function TheHeader() {
    return (
        <header className="sticky top-0 z-50 sm920:bg-body_bg bg-white">
            <div className="px-10 sm920:px-1 mb-1">
                <div className="flex justify-center">
                    <div className="flex flex-1 justify-between max-w-[1200px] items-center  min-h-16 whitespace-nowrap sm920:bg-body_bg bg-white ">

                        <Link href="/" className="flex-none">
                            <span className="sr-only">Onestep Logo</span>
                            <Image
                                src="/logoOneStep.png"
                                alt="OneStep Logo"
                                className=""
                                width={110} //140 //128 //117 //110 //105
                                height={47} //60 //55 //50 //47 //45
                                priority>
                            </Image>
                        </Link>

                        <nav className="hidden sm920:flex flex-1 justify-evenly items-center max-w-[880px] xl:px-8 px-4 text-sm lg:text-base">
                            <Navigation />
                        </nav>

                        <div className="-space-y-1.5 flex-none hidden sm920:block ">
                            <p className="text-xs font-semibold text-stone-400">Тел./WhatsApp</p>
                            <p className="lg:text-lg text-base font-semibold">+7 (495) 927-48-47</p>
                        </div>

                        <details className="sm920:hidden">
                            <ButtonMenu />
                        </details>

                    </div>
                </div>
            </div>
        </header>
    )
}