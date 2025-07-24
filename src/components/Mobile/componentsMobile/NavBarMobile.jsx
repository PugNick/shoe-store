//importacion de herramientas react
import { useState, useRef, useEffect } from 'react';
import { useCart } from '../../../context/CartContext';

//imagenes
import hamburguer from '../../../assets/images/icon-menu.svg';
import logo from '../../../assets/images/logo.svg';
import iconCart from '../../../assets/images/icon-cart.svg';
import avatar from '../../../assets/images/image-avatar.png';
import close from '../../../assets/images/icon-close.svg';
import trash from '../../../assets/images/icon-delete.svg';
import imgCart from '../../../assets/images/image-product-1-thumbnail.jpg';
//estilos
import '../stylesMobile/NavBarMobile.css';

function NavBarMobile({ setCartActive }) {
    const [navBarActive, setNavBarActive] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [mostrarCart, setMostrarCart] = useState(false);
    const { cartItems, removeFromCart } = useCart();
    const cartRef = useRef(null);

    //funcion para desplegar menu
    const mostrarMenu = () => {
        setNavBarActive(true);
        setIsVisible(true);
    };

    //funcion para esconder el menu
    const ocultarMenu = () => {
        setNavBarActive(false);
        setTimeout(() => {
            setIsVisible(false);
        }, 300);
    };

    const toggleCarrito = () => {
        setMostrarCart(!mostrarCart);
        setCartActive(!mostrarCart);
    };

    useEffect(() => {
        function handleClickOutside(event) {
            if (
                cartRef.current &&
                !cartRef.current.contains(event.target) &&
                event.target.tagName !== 'BUTTON' // Evita cerrar al tocar el botón
            ) {
                setMostrarCart(false);
                setCartActive(false);
            }
        }

        if (mostrarCart) {
            document.addEventListener('mousedown', handleClickOutside);
            document.addEventListener('touchstart', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('touchstart', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('touchstart', handleClickOutside);
        };
    }, [mostrarCart, setCartActive]);

    return (
        <div className='navContainer'>
            <div className="menuLogo">
                <div className="menuSlide">
                    <button onClick={mostrarMenu}>
                        <img src={hamburguer} alt="boton de menu" />
                    </button>
                    {isVisible && (
                        <div className="ghostContainer">
                            <div className={`menuMobile ${navBarActive ? 'active' : ''}`}>
                                <button
                                    className='buttonCloseM'
                                    onClick={ocultarMenu}
                                >
                                    <img src={close} alt="cerrar" />
                                </button>

                                <div className="linksM">
                                    <p>Collections</p>
                                    <p>Men</p>
                                    <p>Women</p>
                                    <p>About</p>
                                    <p>Contact</p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                <div className="logoContainer">
                    <img src={logo} alt="logo" />
                </div>
            </div>
            <div className="cartAvatar">
                <div className="cart" ref={cartRef}>
                    <div className="quantityIcon">
                        {cartItems.length > 0 && (
                            <span className="cartQuantity">
                                {cartItems.reduce((total, item) => total + item.quantity, 0)}
                            </span>
                        )}
                        <button onClick={toggleCarrito}>
                            <img src={iconCart} alt="carrito" />
                        </button>
                    </div>
                    <div className={`countCart ${mostrarCart ? 'active' : ''}`}>
                        <p id='cartM'>Cart</p>
                        <hr />
                        {cartItems.length === 0 ? (
                            <div className="emptyContainer">
                                <p>Your cart is empty.</p>
                            </div>
                        ) : (
                            <>
                                {cartItems.map((item, index) => (
                                    <div key={index} className='cartItem'>
                                        <div className="imgCart">
                                            <img src={imgCart} alt={item.title} />
                                        </div>
                                        <div className="itemDetails">
                                            <p>{item.title}</p>
                                            <p>
                                                ${item.price}.00 x {item.quantity}
                                                <span className='total'>${item.totalPrice}.00</span>
                                            </p>
                                        </div>
                                        <button
                                            onClick={() => removeFromCart(index)}
                                            className='deleteButton'
                                        >
                                            <img src={trash} alt="" />
                                        </button>
                                    </div>
                                ))}
                                <div className="containerButtonCart">
                                    <button className='checkoutButton'>
                                        Checkout
                                    </button>


                                </div>
                            </>
                        )}
                    </div>
                </div>
                <div className="avatarContainer">
                    <img src={avatar} alt="imagen avatar" />
                </div>
            </div>

        </div>
    )
}

export default NavBarMobile