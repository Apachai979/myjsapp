import Link from "next/link"
import Image from "next/image"

export default function TellaSoft() {

    const tellasoft = [
        { name: 'Марлевые салфетки TellaLux', srcImg: '', href: '#' },
        { name: 'Марлевые тампоны SoftLux', srcImg: '', href: '#' },
        { name: 'Марлевые тампоны SoftLux с рентгенконтрастной нитью', srcImg: '', href: '#' },
    ]

    return (
        <>
            {tellasoft.map((product) => (
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