import React, { useEffect, useRef, useMemo } from 'react';

/**
 * FloatingLines Component
 * Creates an interactive wave-like background effect using Canvas
 */
const FloatingLines = ({
  enabledWaves = ["top", "middle", "bottom"],
  lineCount = 8,
  lineDistance = 8,
  bendRadius = 8,
  bendStrength = -2,
  interactive = true,
  parallax = true,
  animationSpeed = 1,
  gradientStart = "#6BC4BC",
  gradientMid = "#6BC4BC",
  gradientEnd = "#6BC4BC",
}) => {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  const waves = useMemo(() => {
    return enabledWaves.map((wave) => ({
      type: wave,
      lines: Array.from({ length: lineCount }).map((_, i) => ({
        offset: i * lineDistance,
        freq: 0.005 + (i * 0.001), // Unique frequency per line for weaving
        phase: i * (Math.PI / 4),  // Phase shift to stager intersections
        speedMultiplier: 0.8 + (Math.random() * 0.4) // Slightly different speeds
      })),
    }));
  }, [enabledWaves, lineCount, lineDistance]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resize = () => {
      if (canvas.parentElement) {
        canvas.width = canvas.parentElement.clientWidth;
        canvas.height = canvas.parentElement.clientHeight;
      }
    };

    window.addEventListener('resize', resize);
    resize();

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    if (interactive) {
      window.addEventListener('mousemove', handleMouseMove);
    }

    const draw = (time) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, gradientStart);
      gradient.addColorStop(0.5, gradientMid);
      gradient.addColorStop(1, gradientEnd);

      ctx.strokeStyle = gradient;
      ctx.lineWidth = 1;
      ctx.globalAlpha = 0.4; // Subtle visibility for background lines

      waves.forEach((wave) => {
        wave.lines.forEach((line) => {
          ctx.beginPath();
          for (let x = 0; x <= canvas.width; x += 10) {
            let y;
            if (wave.type === 'top') y = line.offset;
            else if (wave.type === 'middle') y = canvas.height / 2 + line.offset - (lineCount * lineDistance) / 2;
            else if (wave.type === 'bottom') y = canvas.height - line.offset;

            const t = time * 0.001 * animationSpeed * line.speedMultiplier;
            // Complex wave function for intersection
            const waveOffset = Math.sin(x * line.freq + t + line.phase) * 40 + 
                               Math.cos(x * 0.002 + t * 0.5) * 20;
            y += waveOffset;

            if (interactive) {
              const dx = x - mouseRef.current.x;
              const dy = y - mouseRef.current.y;
              const dist = Math.sqrt(dx * dx + dy * dy);
              if (dist < bendRadius * 20) {
                const force = (1 - dist / (bendRadius * 20)) * bendStrength * 10;
                y += (dy / dist) * force;
              }
            }

            if (x === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
          }
          ctx.stroke();
        });
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    animationFrameId = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener('resize', resize);
      if (interactive) window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [waves, animationSpeed, bendRadius, bendStrength, gradientEnd, gradientMid, gradientStart, interactive, parallax, lineCount, lineDistance]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        display: 'block',
        width: '100%',
        height: '100%',
        pointerEvents: 'none' // Allow clicking through to content
      }}
    />
  );
};

export default FloatingLines;
