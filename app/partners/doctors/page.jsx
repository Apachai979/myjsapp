import Image from "next/image"
import Link from "next/link"
import { MdArrowRightAlt } from "react-icons/md";
import { HiMiniArrowLongRight } from "react-icons/hi2";

const arrControlTask = [
    { title: 'Бережливые технологии в вашей клинике', description: 'Применение наборов NeoSet полностью отвечают задачам федерального проекта «Новая модель медицинской организации" по внедрению бережливых технологий в здравоохранении.', info: 'Подробнее' },
    { title: 'Снижение трудозатрат', description: 'Экономия времени персонала на рутинные манипуляции повышает эффективность работы подразделения. Возможность проведения медицинских манипуляций без ассистента.', info: 'Пример' },
    { title: 'Снижение затрат на стерилизацию', description: 'Высокотемпературная стерилизация способом автоклавирования - надежный, но затратный метод. При использовании готовых стерильных наборов - экономия очевидна.', info: 'Подробнее' },
    { title: 'Профилактика ИСМП', description: 'Борьба с распространением инфекций, связанных с оказанием медицинской помощи, значительно эффективнее с внедрением готовых стерильных наборов.', info: 'Подробнее' },
    { title: 'Учет, контроль и документирование', description: 'Процессы учета расходных материалов, медицинских манипуляций и их документирование сведены к минимуму.', info: 'Подробнее' },
    { title: 'Безопасное хранение и утилизация', description: 'Надежность стерильной упаковки и гарантия производителя позволяют не думать о безопасности хранения готовых стерильных наборов. Процесс утилизации сводится к минимуму.', info: 'Подробнее' }
]
export default function Doctors() {
    return (
        <>
            <div className='container mx-auto px-4 max-w-[1200px] my-10'>
                <h1 className="text-4xl font-semibold py-6 text-center sm:text-left">Главному врачу клиники</h1>
                <div className="flex items-center space-x-10 ">
                    <Image
                        src="/doctors/headdoctor.jpg"
                        alt="Neoset"
                        className="object-cover object-bottom w-1/3 h-[250px] rounded-3xl shadow-sm"
                        width={1280}
                        height={720}
                        priority></Image>
                    <div className="w-2/3">
                        <p className="text-lg">Задача руководителя медицинского учреждения – контролировать эффективность процессов, происходящих в клинике.
                            Качество и уровень работы лечебного учреждения зависят от многих составляющих: экономии бюджетных средств, оптимизации трудовых затрат, квалификации персонала, применения передовых технологий, использования современных материалов при медицинских манипуляциях и многих других.
                            Одним из элементов, позволяющим улучшить показатели эффективности, может стать использование готовых стерильных процедурных наборов.</p>
                    </div>
                </div>
            </div>
            <div className='container mx-auto px-4 max-w-[1200px] my-10'>
                <div className="md:text-right text-center">
                    <h1 className="text-3xl font-semibold py-1">Возможности <span className="text-primary_green">для решения</span> управленческих задач</h1>
                    <p className="text-xl">с внедрением готовых cтерильных <br />процедурных наборов NeoSet</p>
                </div>
                <div className="flex mt-8">
                    <div className="grid  md:grid-cols-2 lg:grid-cols-3 lg:gap-10 gap-8 ">
                        {arrControlTask.map((elem) => {
                            return (
                                <Link href="" key={elem.title} className=" flex group">
                                    <div className="flex flex-col justify-between bg-white rounded-3xl shadow-md p-6 group-hover:bg-stone-200 transition duration-200 ease-in h-full">
                                        <div>
                                            <h2 className="text-lg font-semibold pb-3">
                                                {elem.title}
                                            </h2>
                                            <p className="text-lg">{elem.description}</p>
                                        </div>
                                        <div className="flex items-center pt-4 ">
                                            <p className=" text-base text-primary_green transition duration-200 ease-in group-hover:scale-105">{elem.info}</p> <HiMiniArrowLongRight size={26} className="fill-primary_green pt-1" />
                                        </div>
                                    </div>
                                </Link>
                            )
                        })}

                    </div>
                </div>
            </div>
        </>
    )
}