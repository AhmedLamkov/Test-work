import { Swiper, SwiperSlide} from 'swiper/react';
import { Navigation, Pagination, Keyboard } from 'swiper/modules';
import Arrow from '../Icons/Arrow';
import classes from './Slider.module.css';
import classNames from 'classnames';
import { SwiperOptions } from 'swiper/types';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const arrow = <Arrow/>;

interface Slide {
  id: number;
  img: string;
  name: string;
  town: string;
  text: string;
};

const Slides: readonly Slide[] = [
  {
    id: 1,
    img: process.env.PUBLIC_URL + '/images/Unknown.png',
    name: 'Константинов Михаил Павлович',
    town: 'Санкт-Петербург',
    text: 'Каждый из нас понимает очевидную вещь: перспективное планирование предоставляет широкие возможности для анализа существующих паттернов поведения. В своём стремлении улучшить пользовательский опыт мы'
  },
  {
    id: 2,
    img:  process.env.PUBLIC_URL +'/images/Man.png',
    name: 'Иван Иванов',
    town: 'Санкт-Петербург',
    text: 'Каждый из нас понимает очевидную вещь: перспективное планирование предоставляет широкие возможности для анализа существующих паттернов поведения. В своём стремлении улучшить пользовательский опыт мы упускаем, что активно развивающиеся страны третьего мира призваны к ответу.'
  },
  {
    id: 3,
    img: process.env.PUBLIC_URL +'/images/Lorry.png',
    name: 'Иван Иванов',
    town: 'Санкт-Петербург',
    text: 'Каждый из нас понимает очевидную вещь: перспективное планирование предоставляет широкие возможности для анализа существующих паттернов поведения.'
  },
  {
    id: 4,
    img: process.env.PUBLIC_URL + '/images/Unknown.png',
    name: 'Константинов Михаил Павлович',
    town: 'Санкт-Петербург',
    text: 'Каждый из нас понимает очевидную вещь: перспективное планирование предоставляет широкие возможности для анализа существующих паттернов поведения. В своём стремлении улучшить пользовательский опыт мы'
  },
  {
    id: 5,
    img: process.env.PUBLIC_URL +'/images/Man.png',
    name: 'Иван Иванов',
    town: 'Санкт-Петербург',
    text: 'Каждый из нас понимает очевидную вещь: перспективное планирование предоставляет широкие возможности для анализа существующих паттернов поведения. В своём стремлении улучшить пользовательский опыт мы упускаем, что активно развивающиеся страны третьего мира призваны к ответу.'
  },
  {
    id: 6,
    img: process.env.PUBLIC_URL +'/images/Lorry.png',
    name: 'Иван Иванов',
    town: 'Санкт-Петербург',
    text: 'Каждый из нас понимает очевидную вещь: перспективное планирование предоставляет широкие возможности для анализа существующих паттернов поведения.'
  }
 ];

 const swiperOptions: SwiperOptions = {
  keyboard: {
    enabled: true,
  },
  pagination: {
     clickable: true,
     el: '.pagination'
  },
  navigation: {
    disabledClass: 'disabled',
    nextEl: '.navigation-next',
    prevEl: '.navigation-prev'
  },
  breakpoints: {
    320: {
      width: 290,
      slidesPerView: 1,
      spaceBetween: 24,
    },
    375: {
      width: 344,
      slidesPerView: 1,
      spaceBetween: 24,
    },
    768: {
      width: 740,
      slidesPerView: 2,
      spaceBetween: 24,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
    1340: {
      slidesPerView: 3,
      spaceBetween: 32,
    }
  }
};

const Slider = () => {
  return (
    <section className={classes.background}>
      <div className={classes.wrapper}>
        <h2 className={classes.title}>Отзывы</h2>
        <>
          <Swiper
            {...swiperOptions}
            modules={[Keyboard, Pagination, Navigation]}
            className={classes.mySwiper}
          >
            {Slides.map((slide) => {
              return (
                <SwiperSlide key={slide.id}>
                  <div className={classes.slide}>
                      <div className={classes.info}>
                        <img className={classes.image} src={slide.img} alt='Здесь должна была быть картинка'></img>
                        <div className={classes.description}>
                          <div className={classes.name}>{slide.name}</div>
                          <div className={classes.town}>{slide.town}</div>
                        </div>
                      </div>
                      <div className={classes.text}>{slide.text}</div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
          <div className={classNames(classes.swiperCustomPagination, 'pagination')}/>
          <button className={classNames(classes.swiperCustomNavigationRight, 'navigation-next')}>{arrow}</button>
          <button className={classNames(classes.swiperCustomNavigationLeft, 'navigation-prev')}>{arrow}</button>
        </>
      </div>
    </section>
  );
};

export default Slider;