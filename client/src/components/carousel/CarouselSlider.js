import React from 'react';
import './carousel.css';

const CarouselSlider = ({ slides }) => {
    // Create a curr state indicating what's the current slide's index
    const [curr, setCurr] = React.useState(0);
    const { length } = slides;

    const goToNext = () => {
        // Check if we've reached the final slide in the array
        // If so, go back to 0, else curr + 1
        setCurr(curr === length - 1 ? 0 : curr + 1);
    }

    // useEffect will run at every re-render
    React.useEffect(() => {
        // At every render, set a new timeout to go to the next slide
        setTimeout(goToNext, 2000);
        // And, when unmounting <Slider />, clear the timeout
        // See the reactjs.org docs on hooks for more info
        return function () {
            clearTimeout(goToNext);
        }
    })

    if (!Array.isArray(slides) || length <= 0) {
        return null;
    }

    return (
        <section className="slider">
            {slides.map((slide, index) => (
                <div
                    // if active slide, include the "active" class
                    className={index === curr ? "slide active" : "slide"}
                    key={slide.title}
                    // if not active, include the "active" class
                    aria-hidden={index !== curr}
                >
                    <div>
                        <h1>{slide.title}</h1>
                        <h2>{slide.subtitle}</h2>
                    </div>
                    {index === curr && (
                        <img className="image" src={slide.image} alt={`Image for ${slide.title}`} />
                    )}
                </div>
            ))}
        </section>
    );
}
export default CarouselSlider;
