import '../stylesDesktop/NavBarDesk.css';

//herramientas de react
import { useState, useRef, useEffect } from 'react';
import { useCart } from '../../../context/CartContext';

//imagenes
import logo from '../../../assets/images/logo.svg';
import cart from '../../../assets/images/icon-cart.svg'
import avatar from '../../../assets/images/image-avatar.png';
import trash from '../../../assets/images/icon-delete.svg';
import imgCart from '../../../assets/images/image-product-1-thumbnail.jpg';

function NavBarDesk() {
    const [mostrarCart, setMostrarCart] = useState(false);
    const { cartItems, removeFromCart } = useCart();
    const cartRef = useRef(null);

    const toggleCart = () => {
        setMostrarCart(!mostrarCart);
    };

    useEffect(() => {
        function handleClickOutside(event) {
            if (
                cartRef.current &&
                !cartRef.current.contains(event.target) &&
                event.target.className !== 'buttonCartD'
            ) {
                setMostrarCart(false);
            }
        }

        if (mostrarCart) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [mostrarCart]);

    return (
        <div className="hrNav">
            <div className="navBarContainerD">
                <div className="logoButtonsD">
                    <div className="logo">
                        <img src={logo} alt="Logo imagen" />
                    </div>
                    <div className="buttonsD">
                        <p>Collections</p>
                        <p>Men</p>
                        <p>Women</p>
                        <p>About</p>
                        <p>Contact</p>
                    </div>
                </div>
                <div className="cartAvatarD">
                    <div className="cartD">
                        <button className='buttonCartD' onClick={toggleCart}>
                            <img src={cart} alt="icocno carrito" />
                        </button>
                        {cartItems.length > 0 && (
                            <span id='totalCantD'>
                                {cartItems.reduce((total, item) => total + item.quantity, 0)}
                            </span>
                        )}
                        <div className="containerCartRelativeD" ref={cartRef}>
                            <div className="cartContainerD" style={{ display: mostrarCart ? 'block' : 'none' }}>
                                <p id='cartTitleD'>Cart</p>
                                <hr />
                                {cartItems.length === 0 ? (
                                    <div className="containerPFlexD">
                                        <p className='cartEmptyD'>Your cart is empty.</p>
                                    </div>
                                ) : (
                                    <div className='cartProductContainerD'>
                                        {cartItems.map((item, index) => (
                                            <div key={index} className="cartItemD">
                                                <img className='productInCartD' src={imgCart} alt={item.title} />
                                                <div className="itemDetailsD">
                                                    <p>{item.title}</p>
                                                    <p>
                                                        ${item.price}.00 x {item.quantity}
                                                        <span className='totalD'>${item.totalPrice}.00</span>
                                                    </p>
                                                </div>
                                                <button
                                                    onClick={() => removeFromCart(index)}
                                                    className='deleteButtonD'
                                                >
                                                    <img src={trash} alt="" />
                                                </button>
                                            </div>
                                        ))}
                                        <div className="containerButtonChekD">
                                            <button className='checkoutButtonD'>
                                                Checkout
                                            </button>
                                        </div>
                                    </div>

                                )}
                            </div>
                        </div>
                    </div>
                    <div className="avatarImageContainerD">
                        <img src={avatar} alt="imagen avatar" />
                    </div>
                </div>
            </div>
            <hr className='hrNoCart' />
        </div>
    )
}

export default NavBarDesk