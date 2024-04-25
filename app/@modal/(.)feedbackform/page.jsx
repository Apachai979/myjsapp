'use client'
import Modal from "/components/Modal";
import FormContact from "@/components/forms/FormContact";
import { useRouter } from 'next/router';

export default function FeedBackForm({ title }) {
    return (
        <Modal>
            <section className="flex flex-col justify-center items-center ">
                <h1 className="text-2xl mb-5">{title}</h1>
                <FormContact />
            </section>
        </Modal>
    )
}