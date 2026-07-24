"use client";

import { ReactLenis } from 'lenis/react';

export default function SmoothScroll({ children }) {
    return (
        <ReactLenis
            root
            options={{
                // lerp: controls the "heaviness" (0.05 is very smooth/slow)
                lerp: 0.05,
                // duration: how long the animation lasts in seconds
                duration: 1.2,
                smoothWheel: true,
                wheelMultiplier: 1,
                touchMultiplier: 1.5,
                infinite: false,
            }}
        >
            {children}
        </ReactLenis>
    );
}