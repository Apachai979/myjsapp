import { FaPhone } from "react-icons/fa6";

export default function FormContact() {
    return (
        <form className="space-y-4">

            <div className="relative w-80">
                <input id="your_name" type="text" className="block rounded-md px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50  border-0 border-b-2 border-gray-300 focus:outline-none focus:ring-0 focus:border-primary_green peer" placeholder=" " />
                <label for="your_name" className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-primary_green peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Ваше имя</label>
            </div>

            <div className="relative">
                <input id="your_email" type="text" className="block rounded-md px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50  border-0 border-b-2 border-gray-300 focus:outline-none focus:ring-0 focus:border-primary_green peer" placeholder=" " />
                <label for="your_email" className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-primary_green peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Ваш e-mail</label>
            </div>

            <div className="relative">
                <input id="your_phone_number" type="text" className="block rounded-md pl-10 px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50  border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-primary_green peer" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder=" " />
                <div class="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none peer-focus:translate-y-1.5 duration-300 transform translate-y-1.5 peer-placeholder-shown:translate-y-0">
                    <FaPhone />
                </div>
                <label for="your_phone_number" className="pl-8 absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-primary_green  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Ваш телефон</label>
            </div>

            <div className="relative">
                <input id="your_company" type="text" className="block rounded-md px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50  border-0 border-b-2 border-gray-300 focus:outline-none focus:ring-0 focus:border-primary_green peer" placeholder=" " />
                <label for="your_company" className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-primary_green peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Название компании</label>
            </div>

            <div className="relative">
                <input id="your_message" type="text" className="block rounded-md px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50  border-0 border-b-2 border-gray-300 focus:outline-none focus:ring-0 focus:border-primary_green peer" placeholder=" " />
                <label for="your_message" className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-primary_green peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Ваше сообщение</label>
            </div>

        </form>
    )
}