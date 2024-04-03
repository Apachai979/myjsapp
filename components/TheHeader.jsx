import Link from "next/link"
import Image from "next/image"
import Navigation from "./Navigation"
import ButtonMenu from "@/components/buttons/ButtonMenu";

export default function TheHeader() {
    return (
        <header className="sticky top-0 z-50 sm920:bg-body_bg bg-white">
            <nav className="px-6 sm920:px-1 mb-1">
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

                        <div className="sm920:hidden block">
                            <ButtonMenu />
                        </div>
                        {/* xl:px-8 px-4  */}

                        <Navigation />



                    </div>
                </div>
            </nav>
        </header>
    )
}