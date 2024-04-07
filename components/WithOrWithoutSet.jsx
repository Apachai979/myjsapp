'use client'
import { useRef, useState } from 'react'
import Block from './Block'

export default function WithOrWithoutSet() {
    const [open, setOpen] = useState(true)

    function handleClick() { }

    return (
        <Block>
            <div className="max-w-[800px] mx-auto">
                <button
                    onClick={() => {
                        setOpen(prev => !prev)
                    }}
                    className=" flex w-full justify-between items-center px-10 py-4 bg-slate-200"
                >
                    <h1 className="text-2xl font-semibold">Подготовка комплекта принадлежностей</h1>
                    <div className="relative w-6 h-6 flex justify-center items-center">
                        <div className=" absolute h-6 w-0.5 bg-primary_green"></div>
                        <div className=" absolute h-0.5 w-6 bg-primary_green"></div>
                    </div>
                </button>

                <div
                    className={`grid overflow-hidden bg-slate-200 transition-all duration-500 ease-in-out  ${open ? ' grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                        } `}
                >
                    <div className="overflow-hidden">
                        <p>
                            Чтобы самостоятельно подготовить нужный набор для проведения процедуры,
                            накрыть перевязочный стол, медсестра должна укомплектовать его
                            определенным количеством инструментов и привязочных материалов, в
                            правильном порядке расположить их в укладке. Перед этим часть
                            перевязочных материалов (салфетки, тампоны) медсестры должны еще
                            самостоятельно изготовить. Очевидно, что большую роль при этом играют
                            профессиональный навык и отточенность действий специалиста. Все
                            перевязочные материалы должны быть нужного размера и в нужном
                            количестве.
                        </p>
                        <p>
                            Готовый же процедурный набор нужно только достать и открыть. Все
                            материалы и инструменты вынимаются сразу из упаковки в заданном
                            процедурой порядке. Сама упаковка дополнительно выполняет роль емкости
                            для растворов, значит - не требуется отдельных контейнеров.
                        </p>
                    </div>
                    {/* <hr className="w-full bg-night_green h-0.5 max-w-[750px] mx-auto transition-transform duration-500 " /> */}
                </div>
            </div>
            <div className="max-w-[800px] mx-auto">
                <button
                    onClick={() => {
                        setOpen(prev => !prev)
                    }}
                    className=" flex w-full justify-between items-center px-10 py-4 bg-slate-200"
                >
                    <h1 className="text-2xl font-semibold">Подготовка комплекта принадлежностей</h1>
                    <div className="relative w-6 h-6 flex justify-center items-center">
                        <div className=" absolute h-6 w-0.5 bg-primary_green"></div>
                        <div className=" absolute h-0.5 w-6 bg-primary_green"></div>
                    </div>
                </button>

                <div
                    className={`grid overflow-hidden bg-slate-200 transition-all duration-500 ease-in-out  
                ${open ? ' grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'} `}
                >
                    <p className="overflow-hidden">
                        Чтобы самостоятельно подготовить нужный набор для проведения процедуры,
                        накрыть перевязочный стол, медсестра должна укомплектовать его определенным
                        количеством инструментов и привязочных материалов, в правильном порядке
                        расположить их в укладке. Перед этим часть перевязочных материалов
                        (салфетки, тампоны) медсестры должны еще самостоятельно изготовить.
                        Очевидно, что большую роль при этом играют профессиональный навык и
                        отточенность действий специалиста. Все перевязочные материалы должны быть
                        нужного размера и в нужном количестве. Готовый же процедурный набор нужно
                        только достать и открыть. Все материалы и инструменты вынимаются сразу из
                        упаковки в заданном процедурой порядке. Сама упаковка дополнительно
                        выполняет роль емкости для растворов, значит - не требуется отдельных
                        контейнеров.
                    </p>
                    {/* <hr className="w-full bg-night_green h-0.5 max-w-[750px] mx-auto transition-transform duration-500 " /> */}
                </div>
            </div>
        </Block>
    )
}
