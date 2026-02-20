import { useState, useEffect } from "react";

export function useScrollPosition() {
    const [scrollPosition, setScrollPosition] = useState(0)

    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY)
        }
        window.addEventListener('scroll', handleScroll) //setting to window bcoz here scrollPosition is a number not an object 

        return (() => {
            window.addEventListener('scroll', handleScroll) //clearing
        });
    }, [])
    return scrollPosition;
}