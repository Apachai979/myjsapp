import Link from "next/link"
import Image from "next/image"
import Navigation from "./Navigation"

export default function TheHeader() {
    return (
        <header className="container mx-auto px-4 sticky top-0 z-50">

            <div className="flex justify-center ">
                <div className="flex items-center min-h-16 whitespace-nowrap bg-body_bg  w-[1200px]">

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

                    <Navigation />

                    <div className="-space-y-1.5 flex-none">
                        <p className="text-xs font-semibold text-stone-400">Тел./WhatsApp</p>
                        <p className="text-lg font-semibold">+7 (495) 927-48-47</p>
                    </div>

                </div>
            </div>

        </header>
    )
}