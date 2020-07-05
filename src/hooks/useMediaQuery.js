import { useState, useEffect } from 'react';

const MOBILE = `max-width: 760px`;

const useMediaQuery = (query = MOBILE) => {
    const [breakPoint, setBreakPoint] = useState(query);
    let isMobile;
    useEffect(() => {
        isMobile = window.matchMedia(`${(breakPoint)}`);
    }, []);
    return {
        isMobile,
        setBreakPoint
    }
}

export default useMediaQuery;
