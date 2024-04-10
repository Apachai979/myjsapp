import { Plasterwith, Scalpelsharptip, Needleholder, Plasterfixed, Clip, Withaperturemain, Plastermain, Pintset, Bandage, Coating, Gauzeball, Withaperture, Tweezers, Scalpel, Adhesivestrip, Gauzepad, Container, AppPieces } from "@/components/pieces/MedicalPieces"

export default function Academy() {
    return (
        <div className="">
            <AppPieces>
                <Plasterwith />
                <Scalpelsharptip />
                <Needleholder />
                <Plasterfixed />
                <Pintset />
                <Plastermain />
                <Adhesivestrip />
                <Clip />
                <Tweezers></Tweezers>
                <Scalpel></Scalpel>
                <Gauzepad></Gauzepad>
                <Container></Container>
                <Withaperturemain />
                <Withaperture></Withaperture>
                <Coating></Coating>
                <Bandage />
                <Gauzeball />
            </AppPieces>
        </div>
    )
}