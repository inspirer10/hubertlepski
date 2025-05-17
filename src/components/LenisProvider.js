import { useEffect } from 'react';
import Lenis from 'lenis';

function LenisProvider({ children }) {
    /*
    useEffect(() => {
        const lenis = new Lenis({
            //smooth: true,
            autoRaf: true,
        });

        const raf = (time) => {
            lenis.raf(time);
            requestAnimationFrame(raf);
        };

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
        };
    }, []);
*/
    return children;
}

export default LenisProvider;
