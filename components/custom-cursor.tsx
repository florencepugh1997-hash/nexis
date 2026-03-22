'use client';

import { useEffect, useRef } from 'react';

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
      }
      if (glowRef.current) {
        glowRef.current.style.left = `${e.clientX}px`;
        glowRef.current.style.top = `${e.clientY}px`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      <div
        ref={glowRef}
        className="pointer-events-none fixed z-50 transform -translate-x-1/2 -translate-y-1/2"
        style={{
          width: '60px',
          height: '60px',
          background: 'radial-gradient(circle, rgba(32, 201, 201, 0.4) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(8px)',
        }}
      />
      <div
        ref={cursorRef}
        className="pointer-events-none fixed z-50 transform -translate-x-1/2 -translate-y-1/2"
        style={{
          width: '8px',
          height: '8px',
          background: 'rgb(32, 201, 201)',
          borderRadius: '50%',
          boxShadow: '0 0 15px rgba(32, 201, 201, 0.8)',
        }}
      />
    </>
  );
}
