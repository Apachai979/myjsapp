'use client'
import Image from "next/image"
import sliderShape from "@/public/sliderImage/sliderShape.svg"
import { useState } from "react"
import { BsCaretLeft } from "react-icons/bs";
import { BsChevronLeft } from "react-icons/bs";


export default function Carousel() {

    const [slideimage, setSlideimage] = useState(0)

    let slides = [
        "/sliderImage/machine.png",
        "/sliderImage/marla.png",
        "/sliderImage/medsisters.png",
        "/sliderImage/nabor.png",
        "/sliderImage/proc.png",
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

                <button onClick={() => setSlideimage(slideimage - 1)} className="absolute bottom-6 left-10 flex h-8 w-8 rounded-full justify-center items-center bg-white p-4 z-30">
                    <BsChevronLeft color="black" size="20" className="absolute" />
                </button>

                <button onClick={() => setSlideimage(slideimage + 1)} className="absolute bottom-6 left-20 flex h-8 w-8 rounded-full justify-center items-center bg-white p-4 z-30 cursor-pointer">
                    f
                </button>

            </div>

            <BsCaretLeft color="black" />

        </>
    )
}