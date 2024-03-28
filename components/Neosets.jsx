import Link from "next/link"
import Image from "next/image"

export default function Neosets() {

    const neosets = [
        { name: 'Набор для снятия швов', srcImg: '', href: '#' },
        { name: 'Набор для обработки ран', srcImg: '', href: '#' },
        { name: 'Набор для забора донорской крови', srcImg: '', href: '#' },
        { name: 'Набор для забора крови из вены', srcImg: '', href: '#' },
        { name: 'Набор для катетеризации мочевого пузыря', srcImg: '', href: '#' },
        { name: 'Набор для катетеризации центральных вен', srcImg: '', href: '#' },
        { name: 'Набор для локальной анестезии', srcImg: '', href: '#' },
        { name: 'Набор для гемодиализа', srcImg: '', href: '#' },
    ]

    return (
        <>
            {neosets.map((product) => (
                <Link key={product.name} href={`/catalogs/${product.name}`}>
                    <div className="flex-initial w-[265px] group">
                        <Image
                            src={product.srcImg}
                            alt="Neoset"
                            className="object-cover object-center rounded-2xl w-[260px] h-[170px]"
                            width={1280}
                            height={720}
                            priority>
                        </Image>
                        <h3 className='text-mainGreen text-xl font-semibold text-center group-hover:text-txtGreen'>{product.name}</h3>
                    </div>
                </Link>
            ))
            }
        </>
    )
}