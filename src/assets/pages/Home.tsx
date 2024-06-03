import { Helmet } from "react-helmet-async";
import { Swiper, SwiperSlide } from 'swiper/react';
import '../styles/home.css';

interface HomeProps {
  urlPage: string;
}

// Import Swiper React components

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../styles/swiper.css';

// import required modules
import { Pagination, Navigation, Autoplay } from 'swiper/modules';


export const Home = ( { urlPage }: HomeProps) => {

  return (
    <>
      <Helmet>
        <meta charSet="UTF-8" />
        <title>Web Makers - Desarrollo de Páginas Web</title>
        <meta name="description" content="Somos expertos en desarrollo de páginas web que te ayudarán a destacar en línea. Contáctanos para crear tu sitio web hoy mismo." />
        <link rel="canonical" href={urlPage} />
      </Helmet>
      <section>
        <div className="home_swiper-container">
        <Swiper
        pagination={{
          type: 'progressbar',
        }}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"

      >
        <SwiperSlide><h1>Titulo del banner informativo</h1></SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
        </div>
      </section>
    </>
  )
}