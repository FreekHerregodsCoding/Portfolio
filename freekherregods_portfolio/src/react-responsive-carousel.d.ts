declare module 'react-responsive-carousel' {
    import * as React from 'react';

    export interface CarouselProps {
        showArrows?: boolean;
        showStatus?: boolean;
        showIndicators?: boolean;
        showThumbs?: boolean;
        infiniteLoop?: boolean;
        autoPlay?: boolean;
        stopOnHover?: boolean;
        swipeable?: boolean;
        dynamicHeight?: boolean;
        emulateTouch?: boolean;
        autoFocus?: boolean;
        interval?: number;
        transitionTime?: number;
        swipeScrollTolerance?: number;
        ariaLabel?: string;
        className?: string;
        children?: React.ReactNode;
    }

    export class Carousel extends React.Component<CarouselProps> { }
}