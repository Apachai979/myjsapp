import TheHeader from "@/components/TheHeader";
import Image from "next/image";
import Carousel from "@/components/Carousel";

export default function Home() {

  let slides = [
    "/sliderImage/machine.png",
    "/sliderImage/marla.png",
    "/sliderImage/medsisters.png",
    "/sliderImage/nabor.png",
    "/sliderImage/proc.png",
  ]
  return (
    <div className="relative h-120 w-full">
      <div className="absolute w-[60%]">
        <Carousel slides={slides} />
      </div>
    </div>
  );
}
