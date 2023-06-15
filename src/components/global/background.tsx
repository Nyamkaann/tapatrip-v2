import Image from "next/image";
import BackgroundData from "../../data/background.json";
import { ArrowRight } from "heroicons-react";

const Background = () => {
  return (
    <div className="">
      <div className="flex absolute">
        <div className="z-0 flex justify-center w-full">
          <img
            src="/images/background.png"
            alt="background"
            className="object-cover min-h-[1069px]"
          />
        </div>

        <div
          style={{
            background:
              "linear-gradient(180deg, rgba(255, 255, 255, 0.5) 0%, #FFFFFF 100%)",
          }}
          className="absolute z-1 min-h-[1069px] w-full"
        />
      </div>
      <div className="relative pt-40 p-4">
        {BackgroundData.map((data, i) => {
          return (
            <div
              key={i}
              className="max-w-xl p-4 sm:max-w-3xl lg:max-w-6xl mx-auto"
            >
              <div className="grid md:grid-cols-2 gap-10 lg:gap-0 items-center w-full">
                <div
                  className={`flex ${
                    i === 0
                      ? "justify-center md:justify-end md:order-first"
                      : "justify-center md:justify-start md:order-last"
                  }`}
                >
                  <div className="max-w-md">
                    <h1 className="uppercase font-bold text-button text-4xl">
                      {data?.title}
                    </h1>
                    <p className="mt-6 mb-8 text-button">{data?.description}</p>
                    <a
                      href={data?.url}
                      target="_blank"
                      className="flex items-center gap-4 text-text w-72 font-semibold px-14 py-3 rounded-full justify-center border border-button hover:bg-button hover:text-white"
                    >
                      <p>VISIT WEBSITE</p>
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>
                <div
                  className={`flex ${
                    i === 0
                      ? "justify-center md:justify-end"
                      : "justify-center md:justify-start"
                  } w-full`}
                >
                  <Image
                    src={data?.image}
                    alt="background"
                    width={"450"}
                    height={"270"}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {/* <div className="md:absolute top-0 pt-48 z-20 w-full p-4">
        

        <p className="text-sm text-center max-w-3xl mx-auto text-button pt-12">
          Blockchain Travel Platform • Verified OTA by KTO • Best scale-up OTA
          awards - Uzakrota 2022 • Цахим Хөгжлийн Яам • Зам Тээврийн Яам • Аялал
          Жуучлалын Яам - offical logistic partner MEF
        </p>
      </div> */}
    </div>
  );
};

export default Background;
