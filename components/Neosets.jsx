import Link from "next/link"
import Image from "next/image"

export default function Neosets() {

    const neosets = [
        { name: 'Набор для снятия швов', srcImg: '/catalog/aneste.jpg', href: 'dlya-snyatiya-shvov' },
        { name: 'Набор для обработки ран', srcImg: '/catalog/aneste.jpg', href: 'dlya-obrabotki-ran' },
        { name: 'Набор для забора донорской крови', srcImg: '/catalog/aneste.jpg', href: 'dlya-zabora-donorskoj-krovi' },
        { name: 'Набор для забора крови из вены', srcImg: '/catalog/aneste.jpg', href: 'dlya-zabora-krovi-iz-veny' },
        { name: 'Набор для катетеризации мочевого пузыря', srcImg: '/catalog/aneste.jpg', href: 'dlya-kateterizacii-mochevogo-puzyrya' },
        { name: 'Набор для катетеризации центральных вен', srcImg: '/catalog/aneste.jpg', href: 'dlya-kateterizacii-centralnyh-ven' },
        { name: 'Набор для локальной анестезии', srcImg: '/catalog/aneste.jpg', href: 'dlya-lokalnoj-anestezii' },
        { name: 'Набор для гемодиализа', srcImg: '/catalog/aneste.jpg', href: 'dlya-gemodializa' },
    ]

    return (
        <>
            {neosets.map((product) => (
                <Link key={product.name} href={`/catalogs/${product.href}`}>
                    <div className="flex flex-col w-[265px] group">
                        <Image
                            src={product.srcImg}
                            alt="Neoset"
                            className="object-cover object-center rounded-2xl h-[170px] shadow-md  transition duration-300 group-hover:shadow-stone-300 group-hover:-translate-y-3 group-hover:scale-105"
                            width={1280}
                            height={720}
                            priority>
                        </Image>
                        <h3 className='text-mainGreen text-xl font-semibold text-center transition duration-300 group-hover:text-txtGreen group-hover:-translate-y-1'>{product.name}</h3>
                    </div>
                </Link>
            ))
            }
        </>
    )
}