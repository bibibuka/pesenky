import { useState, useEffect, useRef } from 'react';
import { Music, Mic, Play } from 'lucide-react';

export default function MouseWave() {
  const [waves, setWaves] = useState<{ id: number; x: number; y: number; icon: number }[]>([]);
  const waveId = useRef(0);

  useEffect(() => {
    let lastTime = 0;
    let lastPos = { x: 0, y: 0 };

    const handleMouseMove = (e: MouseEvent) => {
      const now = Date.now();
      const dx = e.clientX - lastPos.x;
      const dy = e.clientY - lastPos.y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      // В 2 раза быстрее: не больше 4 в секунду (250мс) и сдвиг минимум на 60 пикселей
      if (now - lastTime < 250 || dist < 60) return;

      lastTime = now;
      lastPos = { x: e.clientX, y: e.clientY };

      const id = waveId.current++;
      // Выбираем случайную иконку (индекс 0..2)
      const icon = Math.floor(Math.random() * 3);
      setWaves(prev => [...prev.slice(-10), { id, x: e.clientX, y: e.clientY, icon }]);

      setTimeout(() => {
        setWaves(prev => prev.filter(w => w.id !== id));
      }, 1500);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[100] overflow-hidden">
      {waves.map(wave => (
        <div
          key={wave.id}
          className="absolute flex items-center justify-center animate-sound-wave"
          style={{
            width: '60px',
            height: '60px',
            left: wave.x - 30,
            top: wave.y - 30,
          }}
        >
          {/* Контур прозрачностью в 2 раза меньше (20% вместо 40%) */}
          <div className="absolute inset-0 rounded-full border border-primary-500/20" style={{ borderRadius: '50%' }} />
          {/* Случайная иконка */}
          <div className="text-primary-500/30 drop-shadow-sm">
            {wave.icon === 0 ? <Music className="w-5 h-5" /> : wave.icon === 1 ? <Mic className="w-5 h-5" /> : <Play className="w-4 h-4 ml-1" />}
          </div>
        </div>
      ))}
    </div>
  );
}
