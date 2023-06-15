import OurServicesData from "../../data/ourservices.json";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Navigation,
  Pagination,
  Autoplay,
  EffectCards,
} from "swiper";
import Image from "next/image";
import { ArrowRight } from "heroicons-react";
SwiperCore.use([Navigation, Pagination, Autoplay, EffectCards]);

const OurServices = () => {
  return (
    <div className="bg-white my-20 p-4 relative">
      <div className="p-4 sm:max-w-xl lg:max-w-6xl mx-auto flex flex-wrap justify-between items-center gap-4 pt-10">
        <div className="text-button w-full">
          <div className="font-bold text-4xl text-center uppercase">
            Our Services
          </div>
          <p className="text-center text-sm max-w-3xl mx-auto w-full pt-8">
            Nam efficitur nibh at tortor iaculis, a imperdiet tortor tempor.
            Donec feugiat venenatis ultricies. Etiam libero augue, vulputate
            laoreet sollicitudin ultrices, varius in quam.
          </p>
        </div>
        <div className="w-full">
          {OurServicesData?.services.map((data, i) => {
            return (
              <div
                key={i}
                className="grid md:grid-cols-2 gap-10 lg:gap-20 md:items-center mt-8 w-full"
              >
                <div
                  className={`${
                    i % 2 === 0 ? "md:order-first" : "md:order-last"
                  } w-[320px] sm:w-[500px] md:w-auto`}
                >
                  <Swiper
                    centeredSlides={true}
                    slidesPerView={1}
                    // loop={true}
                    effect="cards"
                    initialSlide={1}
                    grabCursor={true}
                    cardsEffect={{
                      slideShadows: false,
                      perSlideRotate: 15,
                      perSlideOffset: 25,
                    }}
                  >
                    {data?.image.map((our, i) => {
                      return (
                        <SwiperSlide className="flex justify-center" key={i}>
                          <Image
                            src={our}
                            alt=""
                            className="rounded-lg"
                            width={"270"}
                            height={"270"}
                          />
                        </SwiperSlide>
                      );
                    })}
                  </Swiper>
                </div>
                <div className="text-button w-full">
                  <div className="font-bold text-4xl uppercase">
                    {data?.title}
                  </div>
                  <p className="text-sm mr-auto pt-8">{data?.description}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="max-w-3xl w-full mx-auto mt-20">
          <div className="w-full flex justify-center">
            <Swiper
              centeredSlides={true}
              initialSlide={2}
              effect="cards"
              grabCursor={true}
              cardsEffect={{
                slideShadows: false,
                perSlideRotate: 15,
                perSlideOffset: 25,
              }}
            >
              {OurServicesData?.images.map((our, i) => {
                return (
                  <SwiperSlide className="flex justify-center" key={i}>
                    <Image
                      src={our}
                      alt=""
                      className="rounded-lg"
                      width={"270"}
                      height={"270"}
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
          <div className="text-button w-full mt-10">
            <div className="font-bold text-4xl text-center uppercase text-yellowc">
              special trip
            </div>
            <p className="text-center text-sm w-full py-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              euismod orci nibh, et facilisis ante dictum eu. Nam efficitur nibh
              at tortor iaculis, a imperdiet tortor tempor. Donec feugiat
              venenatis ultricies. Etiam libero augue, vulputate laoreet
              sollicitudin ultrices, varius in quam.
            </p>
            <div className="flex justify-center">
              <a
                href={"/"}
                target="_blank"
                className="flex items-center gap-4 text-yellowc font-semibold px-14 py-3 rounded-full justify-center border border-button hover:bg-button hover:text-white"
              >
                <p>BOOK SEAT</p>
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
