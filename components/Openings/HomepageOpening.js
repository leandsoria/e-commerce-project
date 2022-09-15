/* eslint-disable @next/next/no-img-element */

import { useState, useEffect } from 'react';
const images = [
  ['/homepage/opening/clothes-1.jpg', 'First Clothes'],
  ['/homepage/opening/clothes-2.jpg', 'Second Clothes'],
  ['/homepage/opening/clothes-3.jpg', 'Third Clothes'],
];
const imageSlider = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [timer, setTimer] = useState(0);
  let showFirstImage;
  let showSecondImage;
  let showThirdImage;

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    const counter = setInterval(() => {
      setTimer((prev) => prev + 1);
    }, 1000);
    return () => {
      clearInterval(counter);
    };
  }, []);
  if (timer === 15) setTimer(0);

  timer < 5
    ? (showFirstImage = `opacity-1`)
    : (showFirstImage = `opacity-0 filter(blur:10px)`);
  timer >= 5 && timer < 10
    ? (showSecondImage = `opacity-1`)
    : (showSecondImage = `opacity-0 filter(blur:10px)`);
  timer >= 10 && timer < 15
    ? (showThirdImage = `opacity-1`)
    : (showThirdImage = `opacity-0 filter(blur:10px)`);
  return { showFirstImage, showSecondImage, showThirdImage };
};
const HomepageOpening = () => {
  const { showFirstImage, showSecondImage, showThirdImage } = imageSlider();
  return (
    <section className="w-full h-[600px]">
      <div className="flex flex-col justify-between py-14 px-4 md:py-24 md:px-12 md:flex-row h-full w-full max-w-7xl m-auto">
        <div className="lg:pt-24 justify-center text-center mb-8 md:mb-0 md:pr-12 md:w-1/2">
          <h3>Wellcome to</h3>
          <h1>E-Commerce</h1>
          <p>The last gen e-commerce shop that you can find!</p>
        </div>
        <div className="overflow-hidden h-full  md:w-1/2 relative">
          <img
            src={images[0][0]}
            className={`object-scale-down lg:object-cover h-full md:object-top m-auto absolute top-0 ${showFirstImage}  transition-opacity duration-500`}
            alt="clothes"
          />
          <img
            src={images[1][0]}
            className={`object-scale-down lg:object-cover h-full md:object-top m-auto absolute top-0 ${showSecondImage}  transition-opacity duration-500`}
            alt="clothes"
          />
          <img
            src={images[2][0]}
            className={`object-scale-down lg:object-cover h-full md:object-top m-auto absolute top-0 ${showThirdImage}  transition-opacity duration-500`}
            alt="clothes"
          />
        </div>
      </div>
    </section>
  );
};

export default HomepageOpening;
