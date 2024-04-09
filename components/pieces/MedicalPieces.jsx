import Image from "next/image"

const Pintset = () => {
    return (
        <div className=" w-[260px] flex flex-col  ">
            <Image
                src='/catalog/vector/pintset.svg'
                className="border rounded-lg w-[260px] h-[158px]"
                alt="Gauze Ball"
                width={260}
                height={158}
            />
            <p className="text-base">Пластиковый пинцет имеет тонкие кончики, специально приспособленные для точного и надежного захвата шовного материала. Выполнен из полипропилена и усилен стекловолокном.</p>
        </div>
    )
}

const Bandage = () => {
    return (
        <div className=" w-[260px] flex flex-col  ">
            <Image
                src='/catalog/vector/bandage.svg'
                className="border rounded-lg w-[260px] h-[158px]"
                alt="Gauze Ball"
                width={260}
                height={158}
            />
            <p className="text-base">Высокоэластичный фиксирующий бинт. Изготовлен из гипоаллергенного полиэстера. Имеет европейский сертификат качества ЕС Certificate.</p>
        </div >
    )
}

const Coating = () => {
    return (
        <div className=" w-[260px] flex flex-col  ">
            <Image
                src='/catalog/vector/coating.svg'
                className="border rounded-lg w-[260px] h-[158px]"
                alt="Gauze Ball"
                width={260}
                height={158}
            />
            <p className="text-base">Непромокаемое защитное покрытие выполнено из двух слоев: целлюлоза и полиэтилен. Идеально подходит в качестве подлоктевого покрытия стола, защищающего от протекания различных жидкостей.</p>
        </div>
    )
}
const Container = () => {
    return (
        <div className=" w-[260px] flex flex-col  ">
            <Image
                src='/catalog/vector/container.svg'
                className="border rounded-lg w-[260px] h-[158px]"
                alt="Gauze Ball"
                width={260}
                height={158}
            />
            <p className="text-base">Пластиковая емкость имеет шкалу для определения объема наливаемой жидкости. Отлично подходит для дезинфицирующего раствора и смачивания марлевых тампонов.</p>
        </div>
    )
}

const Gauzepad = () => {
    return (
        <div className=" w-[260px] flex flex-col  ">
            <Image
                src='/catalog/vector/gauzepad.svg'
                className="border rounded-lg w-[260px] h-[158px]"
                alt="Gauze Ball"
                width={260}
                height={158}
            />
            <p className="text-base">Марлевая салфетка имеет подвернутые кромки и изготавливается из высококачественной марли (100% хлопок) плотностью 17 нитей на квадратный сантиметр, имеющей европейский сертификат качества EC Certificate.</p>
        </div>
    )
}

const Plaster = () => {
    return (
        <div className=" w-[260px] flex flex-col  ">

            <Image
                src='/catalog/vector/plaster.svg'
                className="border rounded-lg w-[260px] h-[158px]"
                alt="Gauze Ball"
                width={260}
                height={158}
            />
            <p className="text-base">Пластырная полоска выполнена из нетканного материала с применением гипоаллергенного клея.</p>
        </div>
    )
}

const Scalpel = () => {
    return (
        <div className=" w-[260px] flex flex-col  ">
            <Image
                src='/catalog/vector/scalpel.svg'
                className="border rounded-lg w-[260px] h-[158px]"
                alt="Gauze Ball"
                width={260}
                height={158}
            />
            <p className="text-base">Скальпель с пластиковой ручкой и защитным кожухом. Лезвие классической формы №11 для различных хирургических манипуляций выполнено из нержавеющей стали. Имеет европейский сертификат качества ЕС Certificate.</p>
        </div>
    )
}

const Tweezers = () => {
    return (
        <div className=" w-[260px] flex flex-col  ">
            <Image
                src='/catalog/vector/tweezers.svg'
                className="border rounded-lg w-[260px] h-[158px]"
                alt="Gauze Ball"
                width={260}
                height={158}
            />
            <p className="text-base">Пластиковый пинцет имеет рифленые кончики, специально приспособленные для удобного и надежного захвата перевязочных материалов.</p>
        </div>
    )
}

const Withaperture = () => {
    return (
        <div className=" w-[260px] flex flex-col ">
            <Image
                src='/catalog/vector/withaperture.svg'
                className="border rounded-lg w-[260px] h-[158px]"
                alt="Gauze Ball"
                width={720}
                height={480}
            />
            <p className="text-base">Непромокаемое покрытие с апертурой и адгезивным слоем выполнено из двух слоев: целлюлоза и полиэтилен. Имеет круглый вырез диаметром 80 мм в центральной части и адгезивный слой вокруг него для надежной фиксации на теле пациента.</p>
        </div>
    )
}
export { Pintset, Bandage, Coating, Withaperture, Tweezers, Scalpel, Plaster, Gauzepad, Container };