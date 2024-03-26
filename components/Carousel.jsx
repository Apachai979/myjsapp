'use client'
import Image from "next/image"
import sliderShape from "@/public/sliderImage/sliderShape.svg"
import { useState } from "react"
import { FaChevronCircleLeft } from "react-icons/fa";
import { FaChevronCircleRight } from "react-icons/fa";
import { FaRegCircle } from "react-icons/fa";


export default function Carousel() {

    const [slideimage, setSlideimage] = useState(0)

    let slides = [
        { description: "Одноразовые процедурные стерильные наборы", buttonName: "Посмотреть каталог", scr: "/sliderImage/machine.png" },
        { description: "Собственное производство", buttonName: "Ознакомиться", scr: "/sliderImage/marla.png" },
        { description: "Сырьё и материалы", buttonName: "Подробнее", scr: "/sliderImage/medsisters.png" },
        { description: "Стерильность и безопасность", buttonName: "Подробнее", scr: "/sliderImage/nabor.png" },
        { description: "Полезное для профессионалов", buttonName: "Подробнее", scr: "/sliderImage/proc.png" },
    ]

    return (
        <>

            <div className="w-[1160px] h-120 justify-center m-auto my-8 relative rounded-3xl overflow-hidden">

                <Image
                    src={sliderShape}
                    alt=""
                    className="absolute left-0 h-120 w-auto z-20"
                    width={1280}
                    height={720}
                    priority>
                </Image>

                <Image
                    src={slides[slideimage]}
                    alt="Neoset"
                    className="absolute right-0 object-cover h-120 w-auto z-10"
                    width={1043}
                    height={569}
                    priority>
                </Image>

                <div className="absolute bottom-6 left-10 flex items-center justify-center space-x-5">
                    <div className="flex space-x-3">
                        <button onClick={() => setSlideimage(slideimage - 1)} className="flex h-8 w-8 rounded-full justify-center items-center p-4 z-30 bg-stone-500 hover:bg-night_green">
                            <FaChevronCircleLeft className="absolute fill-white hover:fill-stone-300" size="34" />
                        </button>

                        <button onClick={() => setSlideimage(slideimage + 1)} className="flex h-8 w-8 rounded-full justify-center items-center p-4 z-30 bg-stone-500 hover:bg-night_green">
                            <FaChevronCircleRight className="absolute fill-white hover:fill-stone-300" size="34" />
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


        </>
    )
}