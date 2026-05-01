import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

export default function MagneticDotGrid() {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);

  useGSAP(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let dots = [];
    const mouse = { x: -1000, y: -1000 };
    const gap = 40; // Spacing between dots

    const init = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      canvas.width = width * window.devicePixelRatio;
      canvas.height = height * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);

      dots = [];
      const cols = Math.floor(width / gap);
      const rows = Math.floor(height / gap);

      for (let i = 0; i <= cols; i++) {
        for (let j = 0; j <= rows; j++) {
          dots.push({
            originX: i * gap + (width % gap) / 2,
            originY: j * gap + (height % gap) / 2,
            x: i * gap + (width % gap) / 2,
            y: j * gap + (height % gap) / 2,
            size: 2,
          });
        }
      }
    };

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      dots.forEach((dot) => {
        const dx = mouse.x - dot.x;
        const dy = mouse.y - dot.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxDist = 150;

        // Interaction Logic
        if (distance < maxDist) {
          const accel = (maxDist - distance) / maxDist; // 0 to 1
          const angle = Math.atan2(dy, dx);
          
          // Move away from mouse
          dot.x -= Math.cos(angle) * accel * 15;
          dot.y -= Math.sin(angle) * accel * 15;
          dot.size = 2 + accel * 4; // Grow
        } else {
          // Spring back to origin
          dot.x += (dot.originX - dot.x) * 0.1;
          dot.y += (dot.originY - dot.y) * 0.1;
          dot.size += (2 - dot.size) * 0.1;
        }

        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.size, 0, Math.PI * 2);
        // Use a nice modern "accent" color
        ctx.fillStyle = `rgba(127, 90, 255, ${dot.size / 6})`; 
        ctx.fill();
      });

      requestAnimationFrame(render);
    };

    const onMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    window.addEventListener("resize", init);
    window.addEventListener("mousemove", onMouseMove);
    init();
    render();

    return () => {
      window.removeEventListener("resize", init);
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="magnetic-container">
      <canvas ref={canvasRef} className="dot-canvas" />
    </div>
  );
}
