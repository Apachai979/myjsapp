import Link from "next/link"
import Image from "next/image"
import Navigation from "./Navigation"
import ButtonMenu from "@/components/buttons/ButtonMenu";

export default function TheHeader() {
    return (
        <header className="sticky top-0 z-50 bg-body_bg">
            <div className="container mx-auto mb-1">
                <div className="flex justify-center">
                    <div className="flex flex-1 justify-between max-w-[1200px] items-center  min-h-16 whitespace-nowrap bg-body_bg ">

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

                        <nav className="flex flex-1 justify-evenly items-center max-w-[880px] px-8 ">
                            <Navigation />
                        </nav>

                        <div className="-space-y-1.5 flex-none hidden lg:block ">
                            <p className="text-xs font-semibold text-stone-400">Тел./WhatsApp</p>
                            <p className="text-lg font-semibold">+7 (495) 927-48-47</p>
                        </div>

                        <div className="lg:hidden">
                            <ButtonMenu />
                        </div>

                    </div>
                </div>
            </div>
        </header>
    )
}