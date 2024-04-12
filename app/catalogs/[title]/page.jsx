import ButtonMain from "@/components/buttons/ButtonMain";
import Image from "next/image";
import Link from "next/link";
import prisma from "@/lib/client";

async function getNeoset(titleName) {
    // const response = await fetch('http://localhost:3000/api/neosets/' + titleName)
    // if (!response.ok) throw new Error("Unable to fetch Neosets.")
    // return response.json()
    console.log(titleName)
    try {
        const data = await prisma.neoset.findFirst({
            where: {
                pathname: titleName
            }
        })
        return data
    } catch (e) {
        console.log(e)
    }
}

export default async function Neoset({ params: { title } }) {

    const neoset = await getNeoset(title)

    return (
        <>
            <div className="container mx-auto px-4 max-w-[1200px] my-10">
                <div className="flex flex-col space-y-5 items-center lg:flex-row-reverse lg:space-y-0 lg:items-start">
                    <div className="flex">
                        <Image
                            src="/manufacture/nabor1.png"
                            alt="Neoset"
                            width={1000}
                            height={2000}
                            className='object-cover object-center shadow-md rounded-md w-[500px] h-[450px] mt-2'>
                        </Image >
                    </div>
                    <div className="flex flex-col flex-1">
                        <Link href="/"><h1 className="text-5xl text-txtGreen font-semibold">{neoset.name}</h1></Link>
                        <p className="text-txtGreen text-2xl mt-5">{neoset.description}</p>
                        <p className="text-txtGreen font-semibold text-xl mt-5">Скачать:</p>
                        <p><Link href="/" className="inline text-mainGreen text-lg font-semibold hover:text-night_green ">Регистрационное удостоверение</Link></p>
                        <p><Link href="/" className="inline-flex text-mainGreen text-lg font-semibold hover:text-night_green">Инструкция по применению </Link></p>
                        <p><Link href="/" className="text-mainGreen text-lg font-semibold hover:text-night_green">Видео-инструкция</Link></p>
                        <div className="mt-10">
                            <ButtonMain url="/">Получить консультацию</ButtonMain>
                        </div>
                    </div>

                </div>
            </div>

            <div className="container mx-auto px-4 max-w-[1200px]">
                <div className=" rounded-xl overflow-auto bg-white">
                    <table className="w-full">
                        <thead>
                            <tr className="border-b border-slate-600">
                                <th className="text-left py-2 px-4 w-6/12">Состав:</th>
                                <th className="py-2 px-4 w-3/12">Артикул NS-001-01</th>
                                <th className="py-2 px-4 w-3/12">Артикул NS-001-02</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b border-slate-300 ">
                                <td className="py-2 px-4">Скальпель для снятия швов</td>
                                <td className="py-2 px-4 text-center">1</td>
                                <td className="py-2 px-4 text-center">1</td>
                            </tr>
                            <tr className="border-b border-slate-300 bg-gray-50">
                                <td className="py-2 px-4">Пинцет пластиковый с тонкими концами</td>
                                <td className="py-2 px-4 text-center">1</td>
                                <td className="py-2 px-4 text-center">1</td>
                            </tr>
                            <tr className="border-b border-slate-300">
                                <td className="py-2 px-4">Салфетка марлевая 7,5х7,5 см, 8 слоев</td>
                                <td className="py-2 px-4 text-center">3</td>
                                <td className="py-2 px-4 text-center">-</td>
                            </tr>
                            <tr className="bg-gray-50">
                                <td className="py-2 px-4">Тампон марлевый круглый 35 мм</td>
                                <td className="py-2 px-4 text-center">-</td>
                                <td className="py-2 px-4 text-center">3</td>
                            </tr>
                            <tr className="bg-bodyColor">
                                <td className="p-3"> </td>
                                <td className="p-3"> </td>
                                <td className="p-3"> </td>
                            </tr>
                            <tr className="border-t border-slate-400">
                                <td className="py-2 px-4">Количество наборов в транспортной упаковке:</td>
                                <td className="py-2 px-4 text-center">60</td>
                                <td className="py-2 px-4 text-center">50</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="container mx-auto px-4 max-w-[1200px] mb-10">
                <div className="flex sm:space-x-8 flex-col sm:flex-row">
                    <div className="flex sm:flex-col space-x-5 sm:space-x-0 justify-center items-center">
                        <div className="flex p-5 w-1/2 sm:h-[200px] sm:w-auto">
                            <Image
                                src="/catalog/vector/7.svg"
                                alt="Neoset"
                                width={1600}
                                height={1080}
                                className='object-contain'>
                            </Image >
                        </div>
                        <div className="w-1/2 sm:w-full">
                            <p className="text-sm">Тампон марлевый изготавливается из высококачественной марли (100% хлопок) плотностью 20 нитей на квадратный сантиметр, имеющей европейский сертификат ЕС Certificate.</p>
                        </div>
                    </div>
                    <div className="flex sm:flex-col space-x-5 sm:space-x-0 justify-center items-center">
                        <div className="flex p-5 w-1/2 sm:h-[200px] sm:w-auto">
                            <Image
                                src="/catalog/vector/8.svg"
                                alt="Neoset"
                                width={1600}
                                height={1080}
                                className='object-contain'>
                            </Image >
                        </div>
                        <div className="w-1/2 sm:w-full">
                            <p className="text-sm">Марлевая салфетка имеет подвернутые кромки и изготавливается из высококачественной марли (100% хлопок) плотностью 17 нитей на квадратный сантиметр, имеющей европейский сертификат качества EC Certificate.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}