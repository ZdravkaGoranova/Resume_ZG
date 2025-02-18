import { useEffect, useRef, useCallback } from 'react';
import Flickity from 'flickity';
import 'flickity/css/flickity.css';


export default function Skills() {
  const sliderRef = useRef(null);
  let requestId = useRef(null);
  let flickityInstance = useRef(null);

  // Запазваме функцията в useCallback, за да не я засича useEffect като "променяща се"
  const startMarquee = useCallback(() => {
    if (flickityInstance.current) {
      flickityInstance.current.x -= 1.5; // Регулирай скоростта тук
      flickityInstance.current.settle(flickityInstance.current.x);
      requestId.current = requestAnimationFrame(startMarquee);
    }
  }, []);

  // Спиране на анимацията при hover
  const stopMarquee = useCallback(() => {
    cancelAnimationFrame(requestId.current);
    requestId.current = null;
  }, []);

  useEffect(() => {
    if (sliderRef.current) {
      flickityInstance.current = new Flickity(sliderRef.current, {
        freeScroll: true,
        wrapAround: true,
        prevNextButtons: false,
        pageDots: false,
        autoPlay: false,
        contain: true,
      });

      startMarquee(); // Стартираме ефекта

      sliderRef.current.addEventListener('mouseenter', stopMarquee);
      sliderRef.current.addEventListener('mouseleave', startMarquee);
    }

    return () => {
      if (flickityInstance.current) {
        flickityInstance.current.destroy();
      }
      cancelAnimationFrame(requestId.current);
    };
  }, [startMarquee, stopMarquee]); // Добавяме само useCallback функции

  return (
    <div>
      <h1>Skills</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus
        maiores, mollitia blanditiis ratione autem repellendus consequuntur.
      </p>
      <div className="carousel" ref={sliderRef}>
        {[
          'https://cdn.shopify.com/s/files/1/0789/1333/files/Forbes.svg?v=1593719066',
          'https://cdn.shopify.com/s/files/1/0789/1333/files/Nat_Geo.svg?v=1593719066',
          'https://cdn.shopify.com/s/files/1/0789/1333/files/Red_Cross.svg?v=1593719066',
          'https://cdn.shopify.com/s/files/1/0789/1333/files/Discovery_Channel.svg?v=1593719066',
          'https://cdn.shopify.com/s/files/1/0789/1333/files/REI.svg?v=1593719066',
          'https://cdn.shopify.com/s/files/1/0789/1333/files/Fortune.svg?v=1593719066',
        ].map((imgSrc, index) => (
          <div className="carousel-cell" key={index}>
            <img src={imgSrc} alt={`Logo ${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
}
