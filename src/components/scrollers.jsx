import { useRef, useState } from 'react';

const useCardScroller = () => {
    const cardContainerRef = useRef(null);
    const [showLeftArrow, setShowLeftArrow] = useState(false);
    const [showRightArrow, setShowRightArrow] = useState(true);

    const cardWidth = 320; // Card width + gap
    const scrollExtremes = 10; // 10px offset for smooth experience
    
    const handleScroll = () => {
        const cardContainer = cardContainerRef.current;
        const maxScroll = cardContainer.scrollWidth - cardContainer.clientWidth;

        if (cardContainer.scrollLeft <= scrollExtremes) {
            setShowLeftArrow(false);
            setShowRightArrow(true);
        } else if (cardContainer.scrollLeft >= maxScroll - scrollExtremes) {
            setShowLeftArrow(true);
            setShowRightArrow(false);
        } else {
            setShowLeftArrow(true);
            setShowRightArrow(true);
        }
    };

    const scrollLeft = () => {
        cardContainerRef.current.scrollBy({ left: -cardWidth, behavior: 'smooth' });
    };

    const scrollRight = () => {
        cardContainerRef.current.scrollBy({ left: cardWidth, behavior: 'smooth' });
    };

    return {
        cardContainerRef,
        showLeftArrow,
        showRightArrow,
        handleScroll,
        scrollLeft,
        scrollRight,
    };
};

export default useCardScroller;
