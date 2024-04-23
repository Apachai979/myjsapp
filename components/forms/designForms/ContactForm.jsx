export default function ContactForm() {
    return (
        <>
            <form class="max-w-sm mx-auto">

                <div class="mb-4">
                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900">Ваше Имя</label>
                    <input type="email" id="email" class="focus:outline-primary_green bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full px-2.5 py-3" required />
                </div>
                <div class="mb-4">
                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900">Ваша Фамилия</label>
                    <input type="email" id="email" class="focus:outline-primary_green bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" required />
                </div>
                <div class="mb-4">
                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900">Ваш Email</label>
                    <input type="email" id="email" class="focus:outline-primary_green bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" required />
                </div>
                <div class="mb-4">
                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900">Укажите Ваш Телефон и мы свяжемся с вами</label>
                    <input type="email" id="email" class="focus:outline-primary_green bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" required />
                </div>
                <div class="mb-4">
                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900">Какую компанию вы представляете?</label>
                    <input type="email" id="email" class="focus:outline-primary_green bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" required />
                </div>
                <div class="mb-4">
                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900">Напишите ваш вопрос</label>
                    <textarea rows="4" cols="50" type="email" id="email" class="focus:outline-primary_green bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" required />
                </div>


                <button type="submit" class="text-white bg-primary_green hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Отправить</button>
            </form>
        </>
    )
}