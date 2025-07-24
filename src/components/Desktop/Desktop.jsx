//componentes
import MenuDesk from './componentsDesktop/NavBarDesk';
import ImagesDesk from './componentsDesktop/ImagesDesk';
import AddCartDesk from './componentsDesktop/AddCartDesk';

import './stylesDesktop/Desktop.css'


function Desktop() {
    return (
        <>
            <MenuDesk />
            <div className="centerMainContent">
                <div className="bodyFlex">
                    <ImagesDesk />
                    <AddCartDesk />
                </div>
            </div>
        </>
    )
}

export default Desktop