import { useState, useEffect } from 'react';
import { motion, useSpring } from 'framer-motion';

const CursorGlow = () => {
  const [cursorText, setCursorText] = useState('');
  const [cursorVariant, setCursorVariant] = useState('default');
  const [visible, setVisible] = useState(false);

  const cursorX = useSpring(-100, { stiffness: 450, damping: 32 });
  const cursorY = useSpring(-100, { stiffness: 450, damping: 32 });

  useEffect(() => {
    const mediaQuery = window.matchMedia('(pointer: fine)');
    if (!mediaQuery.matches) return;

    const handleMouseMove = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!visible) setVisible(true);

      const targetProject = e.target.closest('[data-cursor]');
      if (targetProject) {
        setCursorText(targetProject.getAttribute('data-cursor') || 'VIEW ↗');
        setCursorVariant('project');
        return;
      }

      const targetAction = e.target.closest('a, button, [role="button"], input, select');
      if (targetAction) {
        setCursorText('');
        setCursorVariant('action');
        return;
      }

      setCursorText('');
      setCursorVariant('default');
    };

    const handleMouseLeave = () => setVisible(false);
    const handleMouseEnter = () => setVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [cursorX, cursorY, visible]);

  if (!visible) return null;

  return (
    <motion.div
      className={`editorial-cursor variant-${cursorVariant}`}
      style={{
        left: cursorX,
        top: cursorY,
      }}
    >
      {cursorText ? (
        <span className="editorial-cursor-label">{cursorText}</span>
      ) : (
        <span className="editorial-cursor-dot" />
      )}
    </motion.div>
  );
};

export default CursorGlow;
