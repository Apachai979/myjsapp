import Image from "next/image";

export default function Home() {
  return (
    <main className="container mx-auto flex min-h-screen flex-col">
      <h1 className="flex flex-col">Контакты</h1>
      <div className="flex flex-col-2 space-x-10">
        <div className="bg-neutral-300 rounded-lg p-10 space-y-3 flex flex-col text-xl">
          <div>
            <p className="">Адрес производства:</p>
            <p className="">634015, Томская область, г. Томск,
              ул. Циолковского, 19/1, пом. 24.</p>
          </div>
          <div>
            <p>+7 (495) 231-01-11</p>
            <p>+7 (985) 231-01-11</p>
          </div>
        </div>
        <div className="space-y-4">

          <div className="relative w-80">
            <input id="your_name" type="text" className="block rounded-md px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50  border-0 border-b-2 border-gray-300 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
            <label for="your_name" className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Ваше имя</label>
          </div>

          <div className="relative">
            <input id="your_email" type="text" className="block rounded-md px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50  border-0 border-b-2 border-gray-300 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
            <label for="your_email" className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Ваш e-mail</label>
          </div>

          <div className="relative">
            <input id="your_phone_number" type="text" className="block rounded-md pl-10 px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder=" " />
            <div class="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none peer-focus:translate-y-1.5 duration-300 transform translate-y-1.5 peer-placeholder-shown:translate-y-0">
              <svg className="w-4 h-4 absolute text-gray-500 duration-300 transform origin-[0] z-10 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 19 18">
                <path d="M18 13.446a3.02 3.02 0 0 0-.946-1.985l-1.4-1.4a3.054 3.054 0 0 0-4.218 0l-.7.7a.983.983 0 0 1-1.39 0l-2.1-2.1a.983.983 0 0 1 0-1.389l.7-.7a2.98 2.98 0 0 0 0-4.217l-1.4-1.4a2.824 2.824 0 0 0-4.218 0c-3.619 3.619-3 8.229 1.752 12.979C6.785 16.639 9.45 18 11.912 18a7.175 7.175 0 0 0 5.139-2.325A2.9 2.9 0 0 0 18 13.446Z" />
              </svg>
            </div>
            <label for="your_phone_number" className="pl-8 absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Ваш телефон</label>
          </div>

          <div className="relative">
            <input id="your_company" type="text" className="block rounded-md px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50  border-0 border-b-2 border-gray-300 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
            <label for="your_company" className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Название компании</label>
          </div>

          <div className="relative">
            <input id="your_message" type="text" className="block rounded-md px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50  border-0 border-b-2 border-gray-300 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
            <label for="your_message" className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Ваше сообщение</label>
          </div>

        </div>

      </div>

    </main >
  );
}
