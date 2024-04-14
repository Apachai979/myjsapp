import { Gauzeball, Plasterwith, ScalpelEleven, Needleholder, Plasterfixed, Clip, Withaperturemain, Plaster, Pintset, Bandage, Coating, Withaperture, Tweezers, scalpelRemoveFiber, Adhesivestrip, Gauzepad, Container, AppPieces } from "@/components/pieces/MedicalPieces"
import prisma from "@/lib/client"


// const neosets = [
//     { name: 'Набор для снятия швов', description: 'Готовый к использованию стерильный набор инструментов и перевязочных материалов, предназначенный для снятия швов.', srcImg: '/catalog/aneste.jpg', pathname: 'dlya-snyatiya-shvov' },
//     { name: 'Набор для обработки ран', description: 'Готовый к использованию стерильный набор инструментов и перевязочных материалов, предназначенный для дезинфекции и обработки ран.', srcImg: '/catalog/aneste.jpg', pathname: 'dlya-obrabotki-ran' },
//     { name: 'Набор для забора донорской крови', description: 'Готовый к использованию стерильный набор инструментов и перевязочных материалов, предназначенный для дезинфекции области руки и наложения повязки при процедуре забора донорской крови.', srcImg: '/catalog/aneste.jpg', pathname: 'dlya-zabora-donorskoj-krovi' },
//     { name: 'Набор для забора крови из вены', description: 'Готовый к использованию стерильный набор перевязочных материалов, предназначенный для наложения повязки при процедуре забора крови из вены.', srcImg: '/catalog/aneste.jpg', pathname: 'dlya-zabora-krovi-iz-veny' },
//     { name: 'Набор для катетеризации мочевого пузыря', description: 'Готовый к использованию стерильный набор инструментов и перевязочных материалов, предназначенный для дезинфекции процедурной области и безопасной постановки катетера мочевого пузыря.', srcImg: '/catalog/aneste.jpg', pathname: 'dlya-kateterizacii-mochevogo-puzyrya' },
//     { name: 'Набор для катетеризации центральных вен', description: 'Готовый к использованию стерильный набор инструментов и перевязочных материалов, предназначенный для дезинфекции процедурной области и безопасной постановки центрального венозного катетера.', srcImg: '/catalog/aneste.jpg', pathname: 'dlya-kateterizacii-centralnyh-ven' },
//     { name: 'Набор для локальной анестезии', description: 'Готовый к использованию стерильный набор инструментов и перевязочных материалов, предназначенный для дезинфекции процедурной области и безопасного выполнения локальной анестезии.', srcImg: '/catalog/aneste.jpg', pathname: 'dlya-lokalnoj-anestezii' },
//     { name: 'Набор для гемодиализа', description: 'Готовый к использованию стерильный набор инструментов и перевязочных материалов, предназначенный для дезинфекции процедурной области и безопасного выполнения гемодиализа.', srcImg: '/catalog/aneste.jpg', pathname: 'dlya-gemodializa' },
// ]

export default function Academy() {

    // async function addNeoset() {
    //     'use server'
    //     const createMany = await prisma.neoset.createMany({
    //         data: neosets
    //     }
    //     )
    // }


    return (
        <>
            <div className="">
                <AppPieces>
                    <Plasterwith />
                    <Needleholder />
                    <Plasterfixed />
                    <Pintset />
                    <Plaster />
                    <Adhesivestrip />
                    <Clip />

                    <Container></Container>
                    <Withaperturemain />
                    <Withaperture></Withaperture>
                    <Coating></Coating>
                    <Bandage />
                    <Gauzeball />
                </AppPieces>
            </div>
        </>
    )
}