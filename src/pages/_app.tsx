import "swiper/css";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "swiper/swiper.min.css";
import "aos/dist/aos.css";
import type { AppProps } from "next/app";
import "../../src/styles/globals.css";
import "../../src/styles/custom.css";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
