import '../stylesMobile/ImagesMobile.css';

import { useState, useRef } from "react";
//images
import image1 from '../../../assets/images/image-product-1.jpg';
import image2 from '../../../assets/images/image-product-2.jpg';
import image3 from '../../../assets/images/image-product-3.jpg';
import image4 from '../../../assets/images/image-product-4.jpg';
import prev from '../../../assets/images/icon-previous.svg'
import next from '../../../assets/images/icon-next.svg';


function ImagesMobile({ isCartActive }) {

    const images = [image1, image2, image3, image4];

    const [currentIndex, setCurrentIndex] = useState(0);
    const touchStartX = useRef(0);
    const touchEndX = useRef(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    const handleTouchStart = (e) => {
        touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = (e) => {
        touchEndX.current = e.changedTouches[0].clientX;
        handleSwipe();
    };

    const handleSwipe = () => {
        if (touchStartX.current - touchEndX.current > 50) {
            handleNext();
        }
        if (touchEndX.current - touchStartX.current > 50) {
            handlePrev();
        }
    };


    const buttonZIndex = isCartActive ? 100 : 110;

    return (
        <div className="carouselContainer">
            <button
                onClick={handlePrev}
                className="buttonPrev"
                style={{ zIndex: buttonZIndex }}
            >
                <img src={prev} alt="" />
            </button>
            <div
                className="imageContainer"
                style={{ zIndex: isCartActive ? 100 : 101 }}
            >
                <img
                    src={images[currentIndex]}
                    alt={`Slide ${currentIndex}`}
                    className="carouselImage"
                    onTouchStart={handleTouchStart}
                    onTouchEnd={handleTouchEnd}
                />
            </div>

            <button
                onClick={handleNext}
                className="buttonNext"
                style={{ zIndex: buttonZIndex }}
            >
                <img src={next} alt="" />
            </button>
        </div>
    );
}

export default ImagesMobile