import Image from "next/image"
import Block from "../Block"

function AppPieces({ children }) {


    return (
        <Block>
            <div className="grid grid-cols-4 gap-2">
                {children.map((elem) => {
                    return (
                        <>
                            {elem}
                        </>
                    )
                })}
            </div>

        </Block>
    )
}

const Pintset = () => {
    return (
        <div className=" w-[260px] flex flex-col  ">
            <Image
                src='/catalog/vector/pintset.svg'
                className="border rounded-lg w-[260px] h-[158px]"
                alt="Пластиковый пинцет"
                width={260}
                height={158}
            />
            <p className="text-base pt-2 leading-tight ">Пластиковый пинцет имеет тонкие кончики, специально приспособленные для точного и надежного захвата шовного материала. Выполнен из полипропилена и усилен стекловолокном.</p>
        </div>
    )
}
const Gauzeball = () => {
    return (
        <div className=" w-[260px] flex flex-col  ">
            <Image
                src='/catalog/vector/gauzeball.svg'
                className="border rounded-lg w-[260px] h-[158px] py-2"
                alt="Пластиковый пинцет"
                width={260}
                height={158}
            />
            <p className="text-base pt-2 leading-tight ">Тампон марлевый изготавливается из высококачественной марли (100% хлопок) плотностью 20 нитей на квадратный сантиметр, имеющей европейский сертификат ЕС Certificate.</p>
        </div>
    )
}

const Bandage = () => {
    return (
        <div className=" w-[260px] flex flex-col ">
            <Image
                src='/catalog/vector/bandage.svg'
                className="border rounded-lg w-[260px] h-[158px] py-2"
                alt="Фиксирующий бинт"
                width={260}
                height={158}
            />
            <p className="text-base pt-2 leading-tight ">Высокоэластичный фиксирующий бинт. Изготовлен из гипоаллергенного полиэстера. Имеет европейский сертификат качества ЕС Certificate.</p>
        </div >
    )
}

const Coating = () => {
    return (
        <div className=" w-[260px] flex flex-col  ">
            <Image
                src='/catalog/vector/coating.svg'
                className="border rounded-lg w-[260px] h-[158px] py-2"
                alt="Непромокаемое защитное покрытие"
                width={260}
                height={158}
            />
            <p className="text-base pt-2 leading-tight ">Непромокаемое защитное покрытие выполнено из двух слоев: целлюлоза и полиэтилен. Идеально подходит в качестве подлоктевого покрытия стола, защищающего от протекания различных жидкостей.</p>
        </div>
    )
}
const Container = () => {
    return (
        <div className=" w-[260px] flex flex-col  ">
            <Image
                src='/catalog/vector/container.svg'
                className="border rounded-lg w-[260px] h-[158px] py-2"
                alt="Пластиковая емкость"
                width={260}
                height={158}
            />
            <p className="text-base pt-2 leading-tight ">Пластиковая емкость имеет шкалу для определения объема наливаемой жидкости. Отлично подходит для дезинфицирующего раствора и смачивания марлевых тампонов.</p>
        </div>
    )
}

const Gauzepad = () => {
    return (
        <div className=" w-[260px] flex flex-col  ">
            <Image
                src='/catalog/vector/gauzepad.svg'
                className="border rounded-lg w-[260px] h-[158px]"
                alt="Марлевая салфетка"
                width={260}
                height={158}
            />
            <p className="text-base pt-2 leading-tight ">Марлевая салфетка имеет подвернутые кромки и изготавливается из высококачественной марли (100% хлопок) плотностью 17 нитей на квадратный сантиметр, имеющей европейский сертификат качества EC Certificate.</p>
        </div>
    )
}

const Adhesivestrip = () => {
    return (
        <div className=" w-[260px] flex flex-col  ">

            <Image
                src='/catalog/vector/adhesivestrip.svg'
                className="border rounded-lg w-[260px] h-[158px] px-2"
                alt="Пластырная полоска"
                width={260}
                height={158}
            />
            <p className="text-base pt-2 leading-tight ">Пластырная полоска выполнена из нетканного материала с применением гипоаллергенного клея.</p>
        </div>
    )
}

const scalpelRemoveFiber = () => {
    return (
        <div className=" w-[260px] flex flex-col  ">
            <Image
                src='/catalog/vector/scalpelRemoveFiber.svg'
                className="border rounded-lg w-[260px] h-[158px]"
                alt="Скальпель"
                width={260}
                height={158}
            />
            <p className="text-base pt-2 leading-tight ">Скальпель для снятия швов с пластиковой ручкой и защитным колпачком. Лезвие выполнено из нержавеющей стали и обладает удобной серповидной формой для подцепления и разрезания шовного материала. Имеет европейский сертификат качества EC Certificate.</p>
        </div>
    )
}

const Tweezers = () => {
    return (
        <div className=" w-[260px] flex flex-col  ">
            <Image
                src='/catalog/vector/tweezers.svg'
                className="border rounded-lg w-[260px] h-[158px] px-2"
                alt="Пластиковый пинцет"
                width={260}
                height={158}
            />
            <p className="text-base pt-2 leading-tight ">Пластиковый пинцет имеет рифленые кончики, специально приспособленные для удобного и надежного захвата перевязочных материалов.</p>
        </div>
    )
}

const Withaperture = () => {
    return (
        <div className=" w-[260px] flex flex-col ">
            <Image
                src='/catalog/vector/withaperture.svg'
                className="border rounded-lg w-[260px] h-[158px] py-2"
                alt="Покрытие с апертурой и адгезивным слоем"
                width={720}
                height={480}
            />
            <p className="text-base pt-2 leading-tight ">Непромокаемое покрытие с апертурой и адгезивным слоем выполнено из двух слоев: целлюлоза и полиэтилен. Имеет круглый вырез диаметром 80 мм в центральной части и адгезивный слой вокруг него для надежной фиксации на теле пациента.</p>
        </div>
    )
}

const Plaster = () => {
    return (
        <div className=" w-[260px] flex flex-col ">
            <Image
                src='/catalog/vector/plaster.svg'
                className="border rounded-lg w-[260px] h-[158px] px-2"
                alt="Пластырь с абсорбционной подушкой"
                width={720}
                height={480}
            />
            <p className="text-base pt-2 leading-tight ">Пластырная повязка с абсорбционной подушкой из целлюлозы обладает кровеостанавливающими свойствами и применяется для закрытия пункционного отверстия после проведения процедуры.</p>
        </div>
    )
}
const Withaperturemain = () => {
    return (
        <div className=" w-[260px] flex flex-col ">
            <Image
                src='/catalog/vector/withaperturemain.svg'
                className="border rounded-lg w-[260px] h-[158px] py-2"
                alt="Покрытие с апертурой"
                width={720}
                height={480}
            />
            <p className="text-base pt-2 leading-tight ">Непромокаемое покрытие с апертурой выполнено из двух слоев: целлюлоза и полиэтилен. Имеет круглый вырез в центральной части. Идеально подходит для защиты пациента от протекания различных жидкостей.</p>
        </div>
    )
}

const Clip = () => {
    return (
        <div className=" w-[260px] flex flex-col ">
            <Image
                src='/catalog/vector/clip.svg'
                className="border rounded-lg w-[260px] h-[158px] px-2"
                alt="Пластиковый зажим"
                width={720}
                height={480}
            />
            <p className="text-base pt-2 leading-tight ">Пластиковый зажим имеет рифленые бранши и зубчатый замок для надежной фиксации и зажима различных предметов. Выполнен из полипропилена и усилен стекловолокном.</p>
        </div>
    )
}

const Plasterfixed = () => {
    return (
        <div className=" w-[260px] flex flex-col ">
            <Image
                src='/catalog/vector/plasterfixed.svg'
                className=" object-contain border rounded-lg h-[158px]"
                alt="Пластырная повязка"
                width={720}
                height={480}
            />
            <p className="text-base pt-2 leading-tight ">Пластырная повязка для фиксации катетеров и канюль имеет прозрачную смотровую вставку из плёнки в центре повязки и дополнительные полоски для фиксации.</p>
        </div>
    )
}

const Needleholder = () => {
    return (
        <div className=" w-[260px] flex flex-col ">
            <Image
                src='/catalog/vector/needleholder.svg'
                className="border rounded-lg w-[260px] h-[158px]"
                alt="Иглодержатель"
                width={720}
                height={480}
            />
            <p className="text-base pt-2 leading-tight ">Иглодержатель выполнен из нержавеющей стали, имеет рифлёные бранши и зубчатый замок для прочного удержания иглы во время наложения швов и фиксации нити при проведении хирургических вмешательств.</p>
        </div>
    )
}

const ScalpelEleven = () => {
    return (
        <div className=" w-[260px] flex flex-col ">
            <Image
                src='/catalog/vector/scalpelEleven.svg'
                className="border rounded-lg w-[260px] h-[158px] px-2"
                alt="Скадбпель №11"
                width={720}
                height={480}
            />
            <p className="text-base pt-2 leading-tight ">Скальпель с пластиковой ручкой и защитным кожухом. Лезвие классической формы №11 для различных хирургических манипуляций выполнено из нержавеющей стали. Имеет европейский сертификат качества ЕС Certificate.</p>
        </div>
    )
}

const Plasterwith = () => {
    return (
        <div className=" w-[260px] flex flex-col ">
            <Image
                src='/catalog/vector/plasterwith.svg'
                className="border rounded-lg w-[260px] h-[158px]"
                alt="Пластырь"
                width={720}
                height={480}
            />
            <p className="text-base pt-2 leading-tight ">Пластырная повязка послеоперационная с мягкой подушечкой в центре используется для комфортного и безопасного закрытия послеоперационных ран.</p>
        </div>
    )
}

export { Gauzeball, Plasterwith, ScalpelEleven, Needleholder, Plasterfixed, Clip, Withaperturemain, Plaster, Pintset, Bandage, Coating, Withaperture, Tweezers, scalpelRemoveFiber, Adhesivestrip, Gauzepad, Container, AppPieces };