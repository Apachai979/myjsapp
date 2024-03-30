'use client'
import { useRef, useState } from "react";
import { FaPhone } from "react-icons/fa6";

export default function FormContact() {

    const [hasErrorEmail, sethasErrorEmail] = useState(false)
    const [hasErrorName, setHasErrorName] = useState(false)

    // const firstName = useRef();

    function handleCheckerName(e) {

        const regex = /^[A-Za-zА-Яа-яЁё]{3,}$/;
        const result = regex.test(e.target.value);
        // console.log(!result);
        setHasErrorName(!result);

    }

    function handleCheckerEmail(e) {
        const regexEmail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
        const result = regexEmail.test(e.target.value);
        // console.log(!result);
        sethasErrorEmail(!result);
    }

    function handleCheckerTel(e) {
        const regexEmail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
        const result = regexEmail.test(e.target.value);
        // console.log(!result);
        sethasErrorEmail(!result);
    }

    return (
        <>

            <form className="space-y-4 w-96">

                <div className="relative">
                    {/* <h1>{firstName}</h1> */}
                    <input id="first_name" type="text" required className={hasErrorName ? "input border-red-500" : "input border-gray-300  focus:border-primary_green peer "} placeholder=" " onChange={handleCheckerName} />
                    <label htmlFor="first_name" className="label ">Ваше имя</label>
                </div>

                <div className="relative">
                    <input id="your_email" type="email" required className={hasErrorEmail ? "input border-red-500" : "input border-gray-300  focus:border-primary_green peer "} placeholder=" " onChange={handleCheckerEmail} />
                    <label htmlFor="your_email" className="label">Ваш e-mail</label>
                </div>

                <div className="relative">
                    <input id="your_phone_number" type="text" className="pl-10 input border-gray-300  focus:border-primary_green peer" placeholder=" " onFocus={(e) => e.target.value === "" ? e.target.value = "+7 " : null} />
                    <div className="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none peer-focus:translate-y-1.5 duration-300 transform translate-y-1.5 peer-placeholder-shown:translate-y-0">
                        <FaPhone />
                    </div>
                    <label htmlFor="your_phone_number" className="pl-8 label">Ваш телефон</label>
                </div>

                <div className="relative">
                    <input id="your_company" type="text" className="input border-gray-300  focus:border-primary_green peer" placeholder=" " />
                    <label htmlFor="your_company" className="label">Название компании</label>
                </div>

                <div className="relative">
                    <input id="your_message" type="text" className="input border-gray-300  focus:border-primary_green peer " placeholder=" " />
                    <label htmlFor="your_message" className="label">Ваше сообщение</label>
                </div>
                {/* type="submit" */}
                <button type="submit" className="py-4 bg-primary_green text-xl shadow-md text-white w-full rounded-full cursor-pointer transition duration-300 hover:bg-contrast_green">
                    Отправить
                </button>
            </form>

        </>
    )
}