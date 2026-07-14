import { useContext, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import ThemeContext from "../context/ThemeContext";
import "../styles/ThemeToggle.css";

gsap.registerPlugin(DrawSVGPlugin);

export default function ThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const buttonRef = useRef(null);
  const sunRef = useRef(null);
  const moonRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const sun = sunRef.current;
      const moon = moonRef.current;

      const sunCircle = sun.querySelector("circle");
      const sunRays = sun.querySelectorAll("path");
      const moonPath = moon.querySelector("path");

      if (theme === "dark") {
        // Show Sun
        gsap.set(sun, { autoAlpha: 1 });
        gsap.set(moon, { autoAlpha: 0 });

        gsap.set([sunCircle, ...sunRays], {
          drawSVG: "0%",
        });

        gsap
          .timeline()
          .fromTo(
            buttonRef.current,
            { scale: 1 },
            {
              scale: 0.88,
              duration: 0.08,
              yoyo: true,
              repeat: 1,
              ease: "power2.out",
            }
          )
          .fromTo(
            sun,
            {
              scale: 0.5,
              rotate: -90,
            },
            {
              scale: 1,
              rotate: 0,
              duration: 0.45,
              ease: "back.out(2)",
            },
            "<"
          )
          .to(
            sunCircle,
            {
              drawSVG: "100%",
              duration: 0.35,
            },
            "<"
          )
          .to(
            sunRays,
            {
              drawSVG: "100%",
              stagger: 0.05,
              duration: 0.2,
            },
            "-=0.15"
          )
          .to(sun, {
            rotate: 15,
            duration: 0.15,
          })
          .to(sun, {
            rotate: 0,
            duration: 0.5,
            ease: "elastic.out(1,0.4)",
          });
      } else {
        // Show Moon
        gsap.set(moon, { autoAlpha: 1 });
        gsap.set(sun, { autoAlpha: 0 });

        gsap.set(moonPath, {
          drawSVG: "0%",
        });

        gsap
          .timeline()
          .fromTo(
            buttonRef.current,
            { scale: 1 },
            {
              scale: 0.88,
              duration: 0.08,
              yoyo: true,
              repeat: 1,
            }
          )
          .fromTo(
            moon,
            {
              scale: 0.5,
              rotate: 90,
            },
            {
              scale: 1,
              rotate: 0,
              duration: 0.45,
              ease: "back.out(2)",
            },
            "<"
          )
          .to(
            moonPath,
            {
              drawSVG: "100%",
              duration: 0.7,
              ease: "power2.out",
            },
            "<"
          )
          .to(moon, {
            y: -2,
            repeat: 1,
            yoyo: true,
            duration: 0.15,
          });
      }
    }, buttonRef);

    return () => ctx.revert();
  }, [theme]);

  return (
    <button
      ref={buttonRef}
      className="theme-btn"
      onClick={toggleTheme}
    >
      <svg className="theme-icon"
        ref={sunRef}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2" />
        <path d="M12 20v2" />
        <path d="m4.93 4.93 1.41 1.41" />
        <path d="m17.66 17.66 1.41 1.41" />
        <path d="M2 12h2" />
        <path d="M20 12h2" />
        <path d="m6.34 17.66-1.41 1.41" />
        <path d="m19.07 4.93-1.41 1.41" />
      </svg>

      <svg className="theme-icon"
        ref={moonRef}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401" />
      </svg>
    </button>
  );
}