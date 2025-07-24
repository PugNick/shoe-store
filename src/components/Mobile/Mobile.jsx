import { useState } from "react"

//componentes
import NavBarMobile from "./componentsMobile/NavBarMobile"
import ImagesMobile from "./componentsMobile/ImagesMobile"
import AddCartMobile from "./componentsMobile/AddCartMobile"



function Mobile() {

    const [isCartActive, setIsCartActive] = useState(false);

    return (
        <>
            <NavBarMobile setCartActive={setIsCartActive} />
            <ImagesMobile isCartActive={isCartActive} />
            <AddCartMobile price={125.00} />
        </>
    )
}

export default Mobile