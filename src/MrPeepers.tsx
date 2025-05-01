import { useEffect } from "react";

import { useState } from "react";

const EyeballContainer = ({
  mousePosition,
  className,
}: {
  mousePosition: { x: number; y: number };
  className?: string;
}) => {
  return (
    <div className={`eyeball-container ${className}`}>
      <div className="eyeball">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 49 47"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <ellipse
            cx="24.5"
            cy="23.5"
            rx="24.5"
            ry="23.5"
            fill="url(#paint0_linear_637_2364)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_637_2364"
              x1="49"
              y1="33.9444"
              x2="4.11659"
              y2="10.9094"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#30B83B" />
              <stop offset="1" stopColor="#DDEC3B" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div
        className="iris"
        // moves less than pupil but still moves
        style={{
          transform: `translate( ${-55 + (mousePosition.x / 100) * 10}%, ${
            -55 + (mousePosition.y / 100) * 10
          }%)`,
        }}
      >
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 29 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <ellipse
            cx="14.5"
            cy="18"
            rx="14.5"
            ry="18"
            fill="url(#paint0_linear_633_3801)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_633_3801"
              x1="29"
              y1="26"
              x2="1.11946e-06"
              y2="14.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#19B294" />
              <stop offset="1" stopColor="#7ACFB2" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div
        className="pupil"
        style={{
          transform: `translate( ${-70 + (mousePosition.x / 100) * 20}%, ${
            -60 + (mousePosition.y / 100) * 20
          }%)`,
        }}
      >
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 17 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <ellipse cx="8.5" cy="15" rx="8.5" ry="15" fill="#1E222D" />
          <ellipse cx="4.5" cy="10" rx="1.5" ry="2" fill="white" />
        </svg>
      </div>
    </div>
  );
};

const MrPeepers = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  console.log(mousePosition.x, mousePosition.y);

  useEffect(() => {
    let rafId: number;
    let lastUpdate = 0;
    const minUpdateInterval = 1000 / 60; // 60fps

    const handleMouseMove = (e: MouseEvent) => {
      const now = performance.now();
      if (now - lastUpdate < minUpdateInterval) return;

      rafId = requestAnimationFrame(() => {
        setMousePosition({
          x: Math.min(60, (e.clientX / window.innerWidth) * 100),
          y: (e.clientY / window.innerHeight) * 100,
        });
        lastUpdate = now;
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div className="image-sidebar">
      <EyeballContainer mousePosition={mousePosition} />
      <EyeballContainer mousePosition={mousePosition} className="middle" />
      <EyeballContainer mousePosition={mousePosition} className="right" />
    </div>
  );
};

export default MrPeepers;
