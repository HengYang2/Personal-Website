import React, { useState, useEffect, useRef } from 'react'
// import responseModule from '../components/FocusedInScreen/FocusViews/modules/responseModule';

export default function useTypingEffect(textCollection, collectionIndex, textSpeed, setIndicatorVisible, setQuestionsVisable, setClickBlockerDiv) {

    const [currentPosition, setCurrentPosition] = useState(0);
    const currentPositionRef = useRef(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            //Increment position in string
            setCurrentPosition((value) => value + 1)
            currentPositionRef.current += 1;

            //When the incrementaion is larger that the lenght of the string. Stop looping.
            if (currentPositionRef.current > textCollection[collectionIndex].length) {
                clearInterval(intervalId);
                if (collectionIndex == textCollection.length - 1) {
                    setClickBlockerDiv(true);
                    setIndicatorVisible(false);
                    setQuestionsVisable(true);
                } else {
                    setIndicatorVisible(true);
                }
            }
        }, textSpeed);
        return () => {
            clearInterval(intervalId);
            setCurrentPosition(0);
            currentPositionRef.current = 0;
        }

    }, [textSpeed, textCollection[collectionIndex]], collectionIndex);

    return textCollection[collectionIndex].substring(0, currentPosition)
}