import { useEffect, useRef, useState } from 'react';
import './navBar.css';

export default function Navbar() {

  const [showNav, setShowNav] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // prevent flickering from small movements
      if (Math.abs(currentScrollY - lastScrollY.current) < 10) {
        return;
      }

      if (currentScrollY > lastScrollY.current) {
        // scrolling down
        setShowNav(false);
      } else {
        // scrolling up
        setShowNav(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`navBar ${showNav ? 'show' : 'hide'}`}>
      <button className="logo">
        
      </button>

      <p>about</p>
      <p>ingredients</p>
      <p>faq</p>
      <p>buy</p>

      <button className="account">
        hdriehkimi@gmail.com
      </button>
    </nav>
  );
}