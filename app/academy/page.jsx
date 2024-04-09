import { Pintset, Bandage, Coating, Withaperture, Tweezers, Scalpel, Plaster, Gauzepad, Container } from "@/components/pieces/MedicalPieces"

export default function Academy() {
    return (
        <div className="">

            <Pintset />
            <Bandage />
            <Coating></Coating>
            <Withaperture></Withaperture>
            <Tweezers></Tweezers>
            <Scalpel></Scalpel>
            <Plaster></Plaster>
            <Gauzepad></Gauzepad>
            <Container></Container>
        </div>
    )
}