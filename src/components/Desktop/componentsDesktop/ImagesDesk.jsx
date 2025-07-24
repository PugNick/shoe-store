import close from '../../../assets/images/icon-close.svg';
import prev from '../../../assets/images/icon-previous.svg';
import next from '../../../assets/images/icon-next.svg';

import { useState } from 'react';
import '../stylesDesktop/ImagesDesk.css';
// Importar imágenes grandes
import imgProduct1 from '../../../assets/images/image-product-1.jpg';
import imgProduct2 from '../../../assets/images/image-product-2.jpg';
import imgProduct3 from '../../../assets/images/image-product-3.jpg';
import imgProduct4 from '../../../assets/images/image-product-4.jpg';

// Importar thumbnails
import imgThumbnail1 from '../../../assets/images/image-product-1-thumbnail.jpg';
import imgThumbnail2 from '../../../assets/images/image-product-2-thumbnail.jpg';
import imgThumbnail3 from '../../../assets/images/image-product-3-thumbnail.jpg';
import imgThumbnail4 from '../../../assets/images/image-product-4-thumbnail.jpg';

function ImagesDesk() {
    const images = [
        { id: 1, full: imgProduct1, thumb: imgThumbnail1 },
        { id: 2, full: imgProduct2, thumb: imgThumbnail2 },
        { id: 3, full: imgProduct3, thumb: imgThumbnail3 },
        { id: 4, full: imgProduct4, thumb: imgThumbnail4 }
    ];

    const [selectedImage, setSelectedImage] = useState(images[0].full);
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleThumbnailClick = (index) => {
        setCurrentIndex(index);
        setSelectedImage(images[index].full);
    };

    //navegar entre imagenes en el lightbox
    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        setSelectedImage(images[(currentIndex + 1) % images.length].full);
    };

    const prevImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
        setSelectedImage(images[(currentIndex - 1 + images.length) % images.length].full);
    };


    // Función para abrir el lightbox
    const openLightbox = () => setIsLightboxOpen(true);

    // Función para cerrar el lightbox
    const closeLightbox = () => setIsLightboxOpen(false);



    return (
        <div className='carrouselContainerD'>




            {/* Imagen principal */}
            <div
                className='MainImageContainer'
                onClick={openLightbox}
            >
                <img src={selectedImage} alt="Selected product" />
            </div>




            {/* Thumbnails */}
            <div className='imgsThumbContainer'>
                {images.map((image) => (
                    <div
                        key={image.id}
                        className={selectedImage === image.full ? 'thumbnail-wrapper selected' : 'thumbnail-wrapper'}
                        onClick={() => setSelectedImage(image.full)}
                    >
                        <img
                            src={image.thumb}
                            alt={`Thumbnail ${image.id}`}
                            className='thumbnail'
                        />
                    </div>
                ))}
            </div>




            {/* Lightbox */}
            {isLightboxOpen && (
                <div className="gohstContainer">
                    <div className="lightbox">
                        <div className="relativeContainerImagesD">
                            <div className="btnCloseContainer">
                                <button onClick={closeLightbox} className="closeBtn">
                                    <img src={close} alt="Close" />
                                </button>
                            </div>

                            <button onClick={prevImage} className="prevBtn">
                                <img src={prev} alt="" />
                            </button>

                            <div className="lightbox-content">
                                <img src={selectedImage} alt="Lightbox product" />
                            </div>

                            <button onClick={nextImage} className="nextBtn">
                                <img src={next} alt="" />
                            </button>
                        </div>

                        <div className="lightbox-thumbnails">
                            {images.map((image) => (
                                <div
                                    key={image.id}
                                    className={selectedImage === image.full ? 'thumbnail-wrapper selected' : 'thumbnail-wrapper'}
                                    onClick={() => setSelectedImage(image.full)}
                                >
                                    <img
                                        src={image.thumb}
                                        alt={`Thumbnail ${image.id}`}
                                        className='thumbnail'
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
}

export default ImagesDesk;
