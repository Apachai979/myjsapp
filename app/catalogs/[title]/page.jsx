import Image from "next/image";
import Link from "next/link";

export default function Neoset({ params }) {
    return (
        <>
            <h1>{params.title}</h1>
        </>
    )
}