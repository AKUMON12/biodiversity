import { useState, useEffect } from 'react';

interface MousePosition {
    x: number;
    y: number;
    normalizedX: number;
    normalizedY: number;
}

export const useMousePosition = () => {
    const [mousePosition, setMousePosition] = useState<MousePosition>({
        x: 0,
        y: 0,
        normalizedX: 0.5,
        normalizedY: 0.5,
    });

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            setMousePosition({
                x: event.clientX,
                y: event.clientY,
                normalizedX: event.clientX / window.innerWidth,
                normalizedY: event.clientY / window.innerHeight,
            });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return mousePosition;
};
