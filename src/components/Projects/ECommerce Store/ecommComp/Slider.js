import React, { useState } from "react";

import { motion } from "framer-motion";

import { sliderItems } from "../../../constants";

const Slider = () => {

  const [...slide] = sliderItems;
  const [slideCount, setSlideCount] = useState(() => 1);
  const [slideMotion, setSlideMotion] = useState([null, slideCount]);   // [prev, current]

  if (slideMotion[1] !== slideCount) setSlideMotion([slideMotion[1], slideCount])

  let prev = slideMotion[0];
  
  const incrementSlide = () => {
    if (slideCount < 2) {
      setSlideCount(slideCount + 1)
    } else setSlideCount(0)
    setSlideMotion([slideCount, 3])
  }
  const decrementSlide = () => {
    if (slideCount >= 1) {
      setSlideCount(slideCount - 1)
    } else setSlideCount(2)
    setSlideMotion([slideCount, -1])
  }

  let direction = slideCount > prev ? 'incresing' : 'decresing';

  
  return (
    <main className="e-comm-slider-main">
      <section>
        <motion.figure
            className="e-comm-slider-figure"
            key={slideCount}
            initial={{ x: direction === 'incresing' ? 150 : -150 }}
            animate={{ x: 0 }}
            transition={{duration: 0.2}}
            >
            <img
                src={slide[slideCount].image}
                alt=" slider product ..."
                className="e-comm-slider-figure-image"
            />
            <div className="e-comm-slider-figure-info">
                <h5
                style={{
                    color: "#FFFFFF",
                    fontSize: "2em",
                    marginBottom: "0.5%",
                }}
                >
                {slide[slideCount].title}
                </h5>
                <p style={{ color: "#FFFFFF", fontSize: "1.2em" }}>
                {slide[slideCount].description}
                </p>
                <div>
                  <button className="e-comm-slider-button">
                      <a href="/projects/e_commerce_store/product_page">BUY NOW</a>
                  </button>
                </div>
            </div>
        </motion.figure>
      </section>
      <div className="e-comm-slider-buttons">
        <button onClick={decrementSlide}>PREV</button>
        <button onClick={incrementSlide}>NEXT</button>
      </div>
    </main>
  );
};

export default Slider;
