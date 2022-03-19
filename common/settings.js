export const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 4,
  initialSlide: 0,
  autoplaySpeed: 5000,
  autoplay: true,

  responsive: [
    {
      breakpoint: 1600,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 3,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,
      },
    },
    {
      breakpoint: 1324,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,
      },
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
        autoplay: true,
        autoplaySpeed: 5000,
      },
    },
    {
      breakpoint: 480,
      settings: {
        autoplay: true,
        autoplaySpeed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
