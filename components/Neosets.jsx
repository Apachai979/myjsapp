import Link from "next/link"
import Image from "next/image"
import products from "../components/Data/products"


export default function Neosets() {

    return
    (
        <>
            {products[0].map((product) => (
                <Link key={product.name} href={`/catalogs/${product.alt}`}>
                    <div className="flex-initial w-[265px] group">
                        <Image
                            src={product.srcImg}
                            alt="Neoset"
                            className="object-cover object-center rounded-2xl w-[260px] h-[170px]"
                            width={1280}
                            height={720}
                            priority>
                        </Image>
                        <h3 className='text-mainGreen text-xl font-semibold text-center group-hover:text-txtGreen'>{product.title}</h3>
                    </div>
                </Link>
            ))
            }
        </>
    )
}
