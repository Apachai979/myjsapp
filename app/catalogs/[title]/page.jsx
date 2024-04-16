import ButtonMain from "@/components/buttons/ButtonMain";
import Image from "next/image";
import Link from "next/link";
import prisma from "@/lib/client";
import { Napkin, PlasterPostOperative, ScalpelEleven, NeedleHolder, PlasterFixCatheter, Clamp, Withaperturemain, Plaster, PintsetThin, Bandage, Cover, Withaperture, PintsetMedium, ScalpelRemoveFiber, Adhesivestrip, Ball, Container, AppPieces } from "@/components/pieces/MedicalPieces";


const components = {
    clamp: <Clamp />,
    napkin: <Napkin />,
    ball: <Ball />,
    pintsetMedium: <PintsetMedium />,
    pintsetThin: <PintsetThin />,
    scalpelRemoveFiber: <ScalpelRemoveFiber />,
    scalpelEleven: <ScalpelEleven />,
    clamp: <Clamp />,
    needleHolder: <NeedleHolder />,
    container: <Container />,
    bandage: <Bandage />,
    plasterTrip: <PlasterTrip />,
    plaster: <Plaster />,
    plasterPostOperative: <PlasterPostOperative />,
    plasterFixCatheter: <PlasterFixCatheter />,
    cover: <Cover />,
    coverAperture: <CoverAperture />,
    coverAdhesive: <CoverAdhesive />,
};

async function getNeoset(titleName) {
    // const response = await fetch('http://localhost:3000/api/neosets/' + titleName)
    // if (!response.ok) throw new Error("Unable to fetch Neosets.")
    // return response.json()
    try {
        const data = await prisma.neoset.findFirst({
            where: {
                pathname: titleName
            },
            include: {
                code: {
                    include: {
                        consistOf: true
                    }
                }
            }

        })

        for (let i = 1; i < data.code.length; i++) {
            data.code[i].consistOf.forEach(comp => {
                let index = data.code[0].consistOf.findIndex(c => c.component === comp.component);
                if (index !== -1) {
                    data.code[0].consistOf[index] = {
                        ...data.code[0].consistOf[index],
                        ['count' + (i + 1)]: comp.count
                    };
                }
            });
        }

        return [data, data.code[0].consistOf]

    } catch (e) {
        console.log(e)
    }
}


export default async function Neoset({ params: { title } }) {

    const [neoset, arrConsistOf] = await getNeoset(title)

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
                    <table className="w-full table-auto">
                        <thead>
                            <tr className="border-b border-slate-600 ">
                                <th className="text-left py-2 px-4 ">Состав:</th>
                                {neoset.code.map((el) => {
                                    return <th key={el.id} className="py-2 px-4 ">{el.transcript}</th>
                                })}
                            </tr>
                        </thead>
                        <tbody>
                            {arrConsistOf.map((el) => {
                                return (
                                    <tr key={el.id} className="bg-gray-50 odd:bg-white even:bg-slate-100 border-b border-stone-200">
                                        <td className="py-2 px-4">{el.component}</td>
                                        <td className="py-2 px-4 text-center">{el.count}</td>
                                        <td className="py-2 px-4 text-center">{el.count2}</td>
                                        {(typeof el.count3 !== "undefined") && <td className="py-2 px-4 text-center">{el.count3}</td>}
                                        {(typeof el.count4 !== "undefined") && <td className="py-2 px-4 text-center">{el.count4}</td>}
                                    </tr>
                                )
                            })}

                            <tr className="bg-bodyColor">
                                {Array.from({ length: neoset.code.length + 1 }, (_, index) => (
                                    <td key={index} className="p-3"></td>
                                ))}
                            </tr>

                            <tr className="border-t border-slate-400" >
                                <td className="py-2 px-4">Количество наборов в транспортной упаковке:</td>
                                <td className="py-2 px-4 text-center">60</td>
                                <td className="py-2 px-4 text-center">50</td>
                                {/* <td className="py-2 px-4 text-center">50</td> */}
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div >

            <AppPieces>
                {arrConsistOf.map((el) => components[el.class])}
            </AppPieces>
        </>
    )
}