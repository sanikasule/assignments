import { useState, useEffect } from 'react'

export function useWindowSize(){
    //windowSize = width x height
    //thus initial state has width, height
    const [windowSize, setWindowSize] = useState({width: window.innerWidth, height: window.innerHeight})
    
    useEffect(() => {
        const handleResize = () => {
            setWindowSize({width: window.innerWidth, height: window.innerHeight});

            windowSize.addEventListner('resize', handleResize) //updating state when event fired

            return (() => {
                windowSize.addEventListner('resize', handleResize) //clearing
            })
        }
        return windowSize
    }, [])
}