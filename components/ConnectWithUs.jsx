'use client'
import ButtonMain from "./Buttons/ButtonMain"
import Modal from "./Modal/Modal"

export default function ConnectWithUs({ title, textButton, url }) {
    const [modal, setModal] = useState(false)

    function openModal() {
        setModal(true)
    }

    return (
        <div className="container mx-auto px-4 my-14">
            <div className="flex flex-col items-center justify-center space-y-5 md:space-y-10 px-4 py-10 md:p-10 bg-cover bg-no-repeat rounded-3xl bg-[url('/partners/bg.jpg')]">
                <h1 className='text-4xl md:text-[44px] text-center text-white font-semibold leading-tight'>{title}</h1>
                <ButtonMain open={modal}>{textButton}</ButtonMain>
                <Modal>
                    <h1>This is Modal!</h1>
                    <p>EEEeeeeeeeeee!</p>
                </Modal>
            </div>
        </div>
    )
}