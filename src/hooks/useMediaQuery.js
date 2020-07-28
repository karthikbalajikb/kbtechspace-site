import { useState, useEffect } from 'react';

const MOBILE = `max-width: 760px`;

const useMediaQuery = (query = MOBILE) => {
    const [isMobile, setIsMobile] = useState(false);
    const [breakPoint, setBreakPoint] = useState(query);
    useEffect(() => {
        setIsMobile(window.matchMedia(`(${breakPoint})`).matches);
    }, []);
    return {
        isMobile,
        setBreakPoint
    }
}

export default useMediaQuery;
