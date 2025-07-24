import '../stylesMobile/AddCartMobile.css';
import Toast from '../../Toast/Toast'; // importa el Toast

import { useState } from "react";
import { useCart } from "../../../context/CartContext";

//imagenes
import mas from '../../../assets/images/icon-plus.svg';
import menos from '../../../assets/images/icon-minus.svg';
import iconCart from '../../../assets/images/icon-cart.svg';

function AddCartMobile() {

    const [quantity, setQuantity] = useState(0);
    const { addToCart } = useCart();
    const price = 125.00;
    const [toast, setToast] = useState({ show: false, message: '', type: 'success' });

    const decreaseQuantity = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1);
        }
    };

    const increaseQuantity = () => {
        setQuantity(quantity + 1);
    };

    const handleAddToCart = () => {
        if (quantity > 0) {
            addToCart({
                title: "Fall Limited Edition Sneakers",
                quantity: quantity,
                price: price,
                totalPrice: price * quantity,
            });
            setQuantity(0);
            setToast({ show: true, message: 'Product added!', type: 'success' });
        } else {
            setToast({ show: true, message: 'Please add one or more items.', type: 'error' });

        }
        setTimeout(() => setToast({ ...toast, show: false }), 2000);
    };


    return (
        <>

            <div className="bodyContainerM">
                <div className="description">
                    <p className="subTitle">SNEAKER COMPANY</p>
                    <h4 className="productName">Fall Limited Edition Sneakers</h4>
                    <p className="productDescription">
                        These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.
                    </p>
                    <div className="price">
                        <div className="priceFlex">
                            <p className="priceDesc">$125.00</p>
                            <p className="offer">50%</p>
                        </div>
                        <p className="realPrice">$250.00</p>
                    </div>
                </div>
                <div className="quantityControls">
                    <div className="buttonsContainerFlex">
                        <div className="quantityCounter">
                            <button onClick={decreaseQuantity}>
                                <img src={menos} alt="" />
                            </button>
                            <span>{quantity}</span>
                            <button onClick={increaseQuantity}>
                                <img src={mas} alt="" />
                            </button>
                        </div>
                        <button
                            className="addToCartM"
                            onClick={handleAddToCart}
                        >
                            <img src={iconCart} alt="" />
                            <span>Add to cart</span>
                        </button>

                    </div>
                    <Toast message={toast.message} type={toast.type} show={toast.show} />
                </div>
            </div>
        </>
    )
}

export default AddCartMobile