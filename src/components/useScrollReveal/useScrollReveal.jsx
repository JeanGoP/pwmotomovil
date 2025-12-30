import { useEffect } from "react";
import './useScrollReveal.css'
const useScrollReveal = () => {
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
            obs.unobserve(entry.target); // 👈 clave: solo una vez
          }
        });
      },
      {
        threshold: 0.15,
      }
    );

    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);
};

export default useScrollReveal;
