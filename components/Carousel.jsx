export default function Carousel({ slides }) {
    return (
        <div className="overflow-hidden relative">
            <div className="flex">
                {slides.map((el) => {
                    return <img src={el}></img>
                })}

            </div>
        </div>
    )
}