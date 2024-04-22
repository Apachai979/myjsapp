'use client'
import { useState } from "react";
import { FaPhone } from "react-icons/fa6";

export default function FormContact() {

    const [hasErrorEmail, sethasErrorEmail] = useState(true);
    const [hasErrorName, setHasErrorName] = useState(true);
    const [hasErrorTel, setHasErrorTel] = useState(true);
    const [formData, setFormData] = useState({
        TITLE: '',
        NAME: '',
        LAST_NAME: '',
        EMAIL: '',
        PHONE: '',
        COMPANY_TITLE: '',
        MESSAGE: ''
    });

    function handleCheckInput(e) {
        const { name, value } = e.target;
        let regex, hasError;
        // console.log(name, ' ', value)

        switch (name) {
            case 'NAME':
                regex = /^[A-Za-zА-Яа-яЁё]{2,}$/;
                hasError = regex.test(value);
                setHasErrorName(hasError);
                break;
            case 'LAST_NAME':
                regex = /^[A-Za-zА-Яа-яЁё]{2,}$/;
                hasError = regex.test(value);
                setHasErrorName(hasError);
                break;
            case 'EMAIL':
                regex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
                hasError = regex.test(value);
                sethasErrorEmail(hasError);
                break;
            case 'PHONE':
                regex = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
                hasError = regex.test(value);
                if (value.length === 6 || value.length === 10 || value.length === 13) {
                    e.target.value += "-";
                }
                setHasErrorTel(hasError);
                break;
        }

        setFormData(prevFormData => ({ ...prevFormData, [name]: value }));
        console.log(formData['COMPANY_TITLE'])
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        // const query = new URLSearchParams(formData).toString();
        let query = '';
        for (const key in formData) {
            if (formData.hasOwnProperty(key)) {
                const formattedStr = formData[key].replace(/[\s!#$%^&*()\-\+]/g, '');
                key === 'PHONE' || key === 'EMAIL'
                    ? query += `FIELDS[${key}][0][VALUE]=${formattedStr}&`
                    : query += `FIELDS[${key}]=${formattedStr}&`;
            }
        }
        query = query.slice(0, -1);
        console.log(query)

        const url = `https://neoset.bitrix24.ru/rest/1/mzpsgl4hdwikjvig/crm.lead.add.json?${query}`;

        try {
            const response = await fetch(url, {
                method: 'GET'
            });
            if (response.ok) {
                console.log('Данные успешно отправлены');
                // Действия после успешной отправки
            } else {
                console.error('Ошибка при отправке данных');
                // Действия в случае неудачной отправки
            }
        } catch (error) {
            console.error('Ошибка при отправке данных:', error);
            // Обработка ошибок
        }
    };


    return (
        <>
            <form onSubmit={handleSubmit} className=" space-y-4 w-96">

                <div className="relative">
                    <input id="first_name" type="text" required className={hasErrorName ? "input border-gray-300  focus:border-primary_green peer " : "input border-red-500"} placeholder=" " name='NAME' onChange={handleCheckInput} />
                    <label htmlFor="first_name" className="label ">Ваше имя</label>
                </div>

                <div className="relative">
                    <input id="last_name" type="text" required className={hasErrorName ? "input border-gray-300  focus:border-primary_green peer " : "input border-red-500"} placeholder=" " name='LAST_NAME' onChange={handleCheckInput} />
                    <label htmlFor="last_name" className="label ">Ваша фамилия</label>
                </div>

                <div className="relative">
                    <input id="your_email" type="email" required className={hasErrorEmail ? "input border-gray-300  focus:border-primary_green peer" : "input border-red-500"} placeholder=" " name='EMAIL' onChange={handleCheckInput} />
                    <label htmlFor="your_email" className="label">Ваш e-mail</label>
                </div>

                <div className="relative">
                    <input id="your_phone_number" type="text" required className={hasErrorTel ? "pl-10 input border-gray-300  focus:border-primary_green peer" : "pl-10 input border-red-500 "} placeholder=" " onFocus={(e) => e.target.value === "" ? e.target.value = "+7 " : null} name='PHONE' onChange={handleCheckInput} />
                    <div className="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none peer-focus:translate-y-1.5 duration-300 transform translate-y-1.5 peer-placeholder-shown:translate-y-0">
                        <FaPhone />
                    </div>
                    <label htmlFor="your_phone_number" className="pl-8 label">Ваш телефон</label>
                </div>

                <div className="relative">
                    <input id="your_company" type="text" className="input border-gray-300  focus:border-primary_green peer" placeholder=" " name='COMPANY_TITLE' onChange={handleCheckInput} />
                    <label htmlFor="your_company" className="label">Название компании</label>
                </div>

                <div className="relative">
                    <input id="your_message" type="text" className="input border-gray-300  focus:border-primary_green peer " placeholder=" " name='TITLE' onChange={handleCheckInput} />
                    <label htmlFor="your_message" className="label">Ваше сообщение</label>
                </div>


                <button type="submit" className="py-4 bg-primary_green text-xl shadow-md text-white w-full rounded-full cursor-pointer transition duration-300 hover:bg-contrast_green">
                    Отправить
                </button>
            </form>

        </>
    )
}