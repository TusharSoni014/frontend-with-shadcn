import {
  Carousel as ShadCarousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.jpg";
import img4 from "../../assets/img4.jpg";

export default function Carousel() {
  return (
    <ShadCarousel
      opts={{
        align: "start",
      }}
      className="w-full"
    >
      <CarouselContent>
        <CarouselItem className="md:basis-1/4 lg:basis-1/4 sm:basis-1/4 cursor-pointer hover:scale-[1.05] transition">
          <div className="__carousel_item_img">
            <img src={img1} alt="" />
          </div>
        </CarouselItem>
        <CarouselItem className="md:basis-1/4 lg:basis-1/4 sm:basis-1/4 cursor-pointer hover:scale-[1.05] transition">
          <div className="__carousel_item_img">
            <img src={img2} alt="" />
          </div>
        </CarouselItem>
        <CarouselItem className="md:basis-1/4 lg:basis-1/4 sm:basis-1/4 cursor-pointer hover:scale-[1.05] transition">
          <div className="__carousel_item_img">
            <img src={img3} alt="" />
          </div>
        </CarouselItem>
        <CarouselItem className="md:basis-1/4 lg:basis-1/4 sm:basis-1/4 cursor-pointer hover:scale-[1.05] transition">
          <div className="__carousel_item_img">
            <img src={img4} alt="" />
          </div>
        </CarouselItem>
        <CarouselItem className="md:basis-1/4 lg:basis-1/4 sm:basis-1/4 cursor-pointer hover:scale-[1.05] transition">
          <div className="__carousel_item_img">
            <img src={img1} alt="" />
          </div>
        </CarouselItem>
        <CarouselItem className="md:basis-1/4 lg:basis-1/4 sm:basis-1/4 cursor-pointer hover:scale-[1.05] transition">
          <div className="__carousel_item_img">
            <img src={img2} alt="" />
          </div>
        </CarouselItem>
        <CarouselItem className="md:basis-1/4 lg:basis-1/4 sm:basis-1/4 cursor-pointer hover:scale-[1.05] transition">
          <div className="__carousel_item_img">
            <img src={img3} alt="" />
          </div>
        </CarouselItem>
        <CarouselItem className="md:basis-1/4 lg:basis-1/4 cursor-pointer hover:scale-[1.05] transition">
          <div className="__carousel_item_img">
            <img src={img4} alt="" />
          </div>
        </CarouselItem>
      </CarouselContent>
    </ShadCarousel>
  );
}
