'use client'
import Image from 'next/image'
import sliderShape from '@/public/sliderImage/sliderShape.svg'
import { useState } from 'react'
import { FaChevronCircleLeft } from 'react-icons/fa'
import { FaChevronCircleRight } from 'react-icons/fa'
import Link from 'next/link'

export default function Carousel() {
    const slides = [
        {
            id: 1,
            description: 'Одноразовые процедурные стерильные наборы',
            buttonName: 'Посмотреть каталог',
            src: '/sliderImage/machine.png',
            href: '/',
        },
        {
            id: 2,
            description: 'Собственное производство',
            buttonName: 'Ознакомиться',
            src: '/sliderImage/marla.png',
            href: '/',
        },
        {
            id: 3,
            description: 'Сырьё и материалы',
            buttonName: 'Подробнее',
            src: '/sliderImage/medsisters.png',
            href: '/',
        },
        {
            id: 4,
            description: 'Стерильность и безопасность',
            buttonName: 'Подробнее',
            src: '/sliderImage/nabor.png',
            href: '/',
        },
        {
            id: 5,
            description: 'Полезное для профессионалов',
            buttonName: 'Подробнее',
            src: '/sliderImage/proc.png',
            href: '/',
        },
    ]

    const [slide, setSlide] = useState(1)

    function showSlide(numberSlide) {
        setSlide(numberSlide)
    }

    let previousSlide = () => {
        if (slide == slides[0].id) setSlide(slides.length)
        else setSlide(slide - 1)
    }

    let nextSlide = () => {
        if (slide == slides[slides.length - 1].id) setSlide(slides[0].id)
        else setSlide(slide + 1)
    }

    return (
        <div className="container mx-auto px-4">
            <div className="w-[1160px] h-120 justify-center m-auto my-5 relative rounded-3xl overflow-hidden z-0 drop-shadow-md ">
                {slides.map(el => {
                    return (
                        <div
                            key={el.id}
                            className={
                                slide === el.id
                                    ? 'absolute left-10 flex flex-col justify-center w-[370px] h-[460px] z-40 transition opacity-1 duration-700 ease-in'
                                    : 'absolute left-10 flex flex-col justify-center w-[370px] h-[460px] z-30 transition opacity-0 duration-700'
                            }
                        >
                            <h1 className="text-white pb-9 font-semibold text-4xl">
                                {el.description}
                            </h1>
                            <Link
                                href={el.href}
                                className="text-center py-3 w-72 bg-white rounded-full text-stone-700 text-xl transition duration-300 border-2 border-primary_green hover:text-white hover:bg-primary_green hover:border-2 hover:border-white"
                            >
                                {el.buttonName}
                            </Link>
                        </div>
                    )
                })}

                <Image
                    src={sliderShape}
                    alt=""
                    className="absolute left-0 h-120 w-auto z-20"
                    width={1280}
                    height={720}
                    priority
                />

                {slides.map(el => {
                    return (
                        <Image
                            key={el.id}
                            src={el.src}
                            alt="Neoset"
                            className={
                                slide === el.id
                                    ? 'absolute right-0 object-cover h-120 w-auto z-10 opacity-1 transition duration-1000'
                                    : 'absolute right-0 object-cover h-120 w-auto z-10 opacity-0 transition duration-1000'
                            }
                            width={1043}
                            height={569}
                            priority
                        />
                    )
                })}

                <div className="absolute bottom-6 left-10 flex items-center justify-center space-x-5">
                    <div className="flex space-x-3">
                        <button
                            onClick={previousSlide}
                            className="flex h-8 w-8 outline-0 rounded-full justify-center items-center p-4 z-50 bg-night_green/70 hover:bg-night_green transition duration-300"
                        >
                            <FaChevronCircleLeft
                                className="absolute fill-white hover:fill-stone-300 transition duration-300"
                                size="34"
                            />
                        </button>

                        <button
                            onClick={nextSlide}
                            className="flex h-8 w-8 outline-0 rounded-full justify-center items-center p-4 z-50 bg-night_green/70 hover:bg-night_green transition duration-300"
                        >
                            <FaChevronCircleRight
                                className="absolute fill-white hover:fill-stone-300 transition duration-300"
                                size="34"
                            />
                        </button>
                    </div>

                    <div className="flex space-x-2">
                        {slides.map(elem => {
                            const isActive = slide === elem.id
                            return (
                                <button
                                    key={elem.id}
                                    onClick={() => showSlide(elem.id)}
                                    className={
                                        isActive
                                            ? 'w-3 h-3 rounded-full border-2 border-white bg-white cursor-pointer z-50'
                                            : 'w-3 h-3 rounded-full border-2 border-white hover:bg-white cursor-pointer z-50'
                                    }
                                ></button>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}
