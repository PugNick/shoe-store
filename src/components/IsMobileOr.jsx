import { useState, useEffect } from "react";
import Mobile from './Mobile/Mobile';
import Desk from './Desktop/Desktop';

function IsMobileOr() {
    const [isMobileDevice, setIsMobileDevice] = useState(window.innerWidth < 1024);

    useEffect(() => {
        const handleResize = () => {
            setIsMobileDevice(window.innerWidth < 1024);
        };

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="containerApp">
            {isMobileDevice ? <Mobile /> : <Desk />}
        </div>
    );
}

export default IsMobileOr;