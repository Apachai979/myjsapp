'use client'
import Image from "next/image"
import sliderShape from "@/public/sliderImage/sliderShape.svg"
import { useState } from "react"
import { FaChevronCircleLeft } from "react-icons/fa";
import { FaChevronCircleRight } from "react-icons/fa";
import { FaRegCircle } from "react-icons/fa";
import Link from "next/link";


export default function Carousel() {

    const [slideimage, setSlideimage] = useState(0)

    const slides = [
        { description: "Одноразовые процедурные стерильные наборы", buttonName: "Посмотреть каталог", scr: "/sliderImage/machine.png", href: "/" },
        { description: "Собственное производство", buttonName: "Ознакомиться", scr: "/sliderImage/marla.png", href: "/" },
        { description: "Сырьё и материалы", buttonName: "Подробнее", scr: "/sliderImage/medsisters.png", href: "/" },
        { description: "Стерильность и безопасность", buttonName: "Подробнее", scr: "/sliderImage/nabor.png", href: "/" },
        { description: "Полезное для профессионалов", buttonName: "Подробнее", scr: "/sliderImage/proc.png", href: "/" },
    ]

    return (
        <div className="container mx-auto px-4">

            <div className="w-[1160px] h-120 justify-center m-auto my-10 relative rounded-3xl overflow-hidden z-30 drop-shadow-md">

                <div className="absolute flex left-10 top-20 flex-col justify-center w-[370px] h-[250px] z-30 font-semibold text-4xl space-y-7">
                    <h1 className="flex text-white">{slides[0].description}</h1>
                    <Link href="/" className="flex w-[250px] h-14 bg-white rounded-full z-30 justify-center text-stone-700 text-xl items-center hover:text-white hover:bg-primary_green hover:border-2 hover:border-white transition duration-300">{slides[0].buttonName}</Link>
                </div>

                <Image
                    src={sliderShape}
                    alt=""
                    className="absolute left-0 h-120 w-auto z-20"
                    width={1280}
                    height={720}
                    priority>
                </Image>

                <Image
                    src={slides[0].scr}
                    alt="Neoset"
                    className="absolute right-0 object-cover h-120 w-auto z-10"
                    width={1043}
                    height={569}
                    priority>
                </Image>

                <div className="absolute bottom-6 left-10 flex items-center justify-center space-x-5">
                    <div className="flex space-x-3">
                        <button onClick={() => setSlideimage(slideimage - 1)} className="flex h-8 w-8 rounded-full justify-center items-center p-4 z-30 bg-night_green/70 hover:bg-night_green transition duration-300">
                            <FaChevronCircleLeft className="absolute fill-white hover:fill-stone-300 transition duration-300" size="34" />
                        </button>

                        <button onClick={() => setSlideimage(slideimage + 1)} className="flex h-8 w-8 rounded-full justify-center items-center p-4 z-30 bg-night_green/70 hover:bg-night_green transition duration-300">
                            <FaChevronCircleRight className="absolute fill-white hover:fill-stone-300 transition duration-300" size="34" />
                        </button>
                    </div>

                    <div className="flex space-x-2">
                        <div className=" w-3 h-3 rounded-full border-2 border-white hover:bg-white cursor-pointer z-30"></div>
                        <div className=" w-3 h-3 rounded-full border-2 border-white hover:bg-white cursor-pointer z-30"></div>
                        <div className=" w-3 h-3 rounded-full border-2 border-white hover:bg-white cursor-pointer z-30"></div>
                        <div className=" w-3 h-3 rounded-full border-2 border-white hover:bg-white cursor-pointer z-30"></div>
                        <div className=" w-3 h-3 rounded-full border-2 border-white hover:bg-white cursor-pointer z-30"></div>
                    </div>

                </div>
            </div>

        </div>
    )
}