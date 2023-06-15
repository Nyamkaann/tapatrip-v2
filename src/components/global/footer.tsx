import Image from "next/image";
import FooterData from "../../data/footer.json";

export default function Footer() {
  return (
    <div className="footer-wrapper bg-gradient-to-b from-[#1F458B] to-[#023047] min-h-screen">
      <div className="font-bold text-3xl text-center pt-32 px-168 pb-232">
        CUSTOM CARE
        <div className="font-normal text-base text-center pt-4 pb-16">
          Nam efficitur nibh at tortor iaculis, a imperdiet tortor tempor. Donec
          feugiat <br />
          venenatis ultricies. Etiam libero augue, vulputate laoreet
          sollicitudin ultrices, varius in <br />
          quam.
        </div>
      </div>
      <div className="container mx-auto max-w-6xl grid md:grid-cols-3 gap-4 text-white">
        {FooterData?.map((footer, i) => {
          return (
            <div key={i}>
              <div className={`${i === 1 ? "block" : "hidden"} flex justify-center items-center`}>
                <img
                  src={footer?.img}
                  alt="Footer_pic_1.png"
                  className="rounded-lg "
                />
              </div>

              <div>
                <div className="text-center text-2xl font-semibold">
                  {footer?.text}
                </div>
{i !== 1 ?
                <div className="text-center font-semibold text-4xl pt-4">
                    {footer?.title}
                </div>
:
                <div className="flex justify-center pt-7 ">
                    <a
                        href="https://www.youtube.com"
                        className="text-sm border rounded-full py-4 px-12"

                    >
                        <button>{FooterData[1]?.title}</button>
                    </a>
                </div>
        }
              </div>

              <div className={`${i === 1 ? "hidden" : "block"} flex justify-center items-center pt-6`}>
                <img
                  src={footer?.img}
                  alt="Footer_pic_1.png"
                  className="rounded-lg "
                />
              </div>
            </div>
          );
        })}
      </div>
      

      <img
        src="/images/footer_pic_4.png"
        alt="Image description"
        className="mx-auto pt-16"
      />

      <div className="text-center font-normal text-sm pb-32 pt-16">
        Blockchain Travel Platform • Verified OTA by KTO • Best scale-up OTA
        awards - Uzakrota 2022 • Цахим Хөгжлийн Яам • Зам Тээврийн Яам • <br />
        Аялал Жуучлалын Яам - offical logistic partner MEF
      </div>
    </div>
  );
}
