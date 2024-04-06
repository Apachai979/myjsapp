import Modal from "@/components/DialogModal";

export default function Solution({ params: { title } }) {
    return (
        <Modal>
            <h1>hello, I am Modal! and It is {title}</h1>
        </Modal>
    )
}