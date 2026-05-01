import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import "../styles/StarfieldBackground.css";

gsap.registerPlugin(ScrollTrigger);

export default function StarfieldBackground() {
  const container = useRef(null);
  const canvasRef = useRef(null);
  const galaxyRef = useRef(null);

  useGSAP((context) => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let width, height, stars = [];
    let time = 0; // Global time tracker for the drift
    
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    const scroll = { value: 0 };

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * window.devicePixelRatio;
      canvas.height = height * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
      initStars();
    };

    const initStars = () => {
      stars = Array.from({ length: 400 }).map(() => ({
        x: Math.random() * width,
        y: Math.random() * height,
        z: Math.random() * 1000,
        size: Math.random() * 1.5 + 0.5,
        color: Math.random() > 0.8 ? "#9bbdff" : "#fff",
        opacity: Math.random(),
        // Unique speed and offset for the idle drift
        driftSpeed: Math.random() * 0.2 + 0.1,
        driftOffset: Math.random() * Math.PI * 2,
        twinkleSpeed: Math.random() * 0.02 + 0.01
      }));
    };

    const handleMouseMove = (e) => {
      mouse.targetX = (e.clientX - width / 2) * 0.05;
      mouse.targetY = (e.clientY - height / 2) * 0.05;
    };

    const tick = () => {
      time += 0.5; // Increment time for movement
      
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      ctx.clearRect(0, 0, width, height);
      
      stars.forEach(star => {
        // 1. Calculate Idle Drift (Sin/Cos wave)
        const driftX = Math.cos(time * 0.01 * star.driftSpeed + star.driftOffset) * 15;
        const driftY = Math.sin(time * 0.01 * star.driftSpeed + star.driftOffset) * 15;

        // 2. Apply Drift to the base coordinates within the calculation
        const factor = 1000 / (1000 - (scroll.value * 500)); 
        const x = (star.x + driftX - width / 2 + mouse.x * (star.z / 500)) * factor + width / 2;
        const y = (star.y + driftY - height / 2 + mouse.y * (star.z / 500)) * factor + height / 2;
        const s = star.size * factor;

        // 3. Optional: Add a subtle twinkle to the opacity
        const twinkle = star.opacity * (0.6 + Math.abs(Math.sin(time * star.twinkleSpeed)) * 0.4);

        if (x > -50 && x < width + 50 && y > -50 && y < height + 50) {
          ctx.beginPath();
          ctx.arc(x, y, s, 0, Math.PI * 2);
          ctx.fillStyle = star.color;
          ctx.globalAlpha = twinkle;
          ctx.fill();
          
          if (s > 1.2) {
            ctx.shadowBlur = 10;
            ctx.shadowColor = star.color;
          } else {
            ctx.shadowBlur = 0;
          }
        }
      });

      requestAnimationFrame(tick);
    };

    gsap.to(scroll, {
      value: 1,
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        scrub: 1.5
      }
    });

    gsap.to(galaxyRef.current, {
      rotate: 360,
      duration: 120, // Slower rotate for a more subtle feel
      repeat: -1,
      ease: "none"
    });

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", handleMouseMove);
    resize();
    tick();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, { scope: container });

  return (
    <div ref={container} className="starfield-bg">
      <div className="galaxy-gradient" ref={galaxyRef} />
      <canvas ref={canvasRef} />
      <div className="vignette" />
    </div>
  );
}
