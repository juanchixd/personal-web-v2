import React, { useEffect, useState } from "react";

export default function EasterEgg() {
  const [show, setShow] = useState(false);
  const [buffer, setBuffer] = useState("");

  useEffect(() => {
    const handleKeyDown = (e) => {
      setBuffer((prev) => {
        const newBuffer = (prev + e.key).slice(-2);
        if (newBuffer === "33") {
          triggerAnimation();
        }
        return newBuffer;
      });
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const triggerAnimation = () => {
    if (show) return;
    setShow(true);
    setTimeout(() => {
      setShow(false);
      setBuffer("");
    }, 4500);
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md animate-fade-in-out pointer-events-none">
      {/* Contenedor de la escena */}
      <div className="relative w-80 h-80 flex items-center justify-center">
        {/* === TERMO (Estilo Metálico/Cobre) === */}
        <div className="absolute -top-10 right-0 z-20 animate-cebar origin-bottom-right">
          <svg
            width="120"
            height="220"
            viewBox="0 0 120 220"
            fill="none"
            className="drop-shadow-2xl"
          >
            <defs>
              <linearGradient
                id="copperGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#8a4f1e" />
                <stop offset="50%" stopColor="#d98c45" /> {/* Brillo central */}
                <stop offset="100%" stopColor="#8a4f1e" />
              </linearGradient>
            </defs>
            {/* Cuerpo */}
            <path
              d="M30 50 L35 15 L85 15 L90 50 V200 C90 210 80 215 60 215 C40 215 30 210 30 200 V50 Z"
              fill="url(#copperGradient)"
              stroke="#5e330e"
              strokeWidth="2"
            />
            {/* Tapa negra */}
            <path d="M35 15 L40 5 L80 5 L85 15 Z" fill="#1a1a1a" />
            {/* Pico vertedor */}
            <path d="M40 5 L30 0 L50 0 L50 5 Z" fill="#333" />
            {/* Manija */}
            <path
              d="M90 70 H105 V150 H90"
              stroke="#1a1a1a"
              strokeWidth="8"
              strokeLinecap="round"
              fill="none"
            />
          </svg>
        </div>

        {/* === AGUA (Fluido) === */}
        <div className="absolute top-[70px] right-[220px] z-10 w-2 bg-blue-400/80 rounded-full animate-chorro opacity-0 blur-[1px]"></div>

        {/* === MATE (Estilo Calabaza) === */}
        <div className="absolute bottom-10 left-10 z-20">
          <svg
            width="100"
            height="100"
            viewBox="0 0 100 100"
            fill="none"
            className="drop-shadow-xl"
          >
            {/* Cuerpo Calabaza */}
            <path
              d="M20 30 C10 60 25 90 50 90 C75 90 90 60 80 30 H20 Z"
              fill="#3d2b1f"
              stroke="#00ff9d"
              strokeWidth="1.5"
            />
            {/* Virola (Metal arriba) */}
            <ellipse
              cx="50"
              cy="30"
              rx="30"
              ry="5"
              fill="#e2e2e2"
              stroke="#999"
              strokeWidth="1"
            />
            {/* Yerba (Con textura) */}
            <ellipse cx="50" cy="30" rx="25" ry="3" fill="#385c22" />
            {/* Bombilla */}
            <path
              d="M55 30 L80 -10"
              stroke="#C0C0C0"
              strokeWidth="6"
              strokeLinecap="round"
            />
            <path
              d="M55 30 L80 -10"
              stroke="#FFF"
              strokeWidth="1"
              strokeLinecap="round"
              strokeOpacity="0.5"
            />
          </svg>
        </div>

        {/* === HUMITO (Partículas de vapor) === */}
        <div className="absolute bottom-28 left-16 z-10 flex gap-2">
          <span className="w-2 h-2 bg-white/40 rounded-full animate-vapor delay-0"></span>
          <span className="w-3 h-3 bg-white/30 rounded-full animate-vapor delay-700"></span>
          <span className="w-2 h-2 bg-white/20 rounded-full animate-vapor delay-300"></span>
        </div>

        <div className="absolute -bottom-16 w-full text-center">
          <div className="inline-block bg-black/50 border border-mate-green/30 px-4 py-2 rounded-lg backdrop-blur">
            <span className="font-mono text-mate-green text-lg tracking-widest animate-pulse">
              &gt; EXECUTING MATE.sh...
            </span>
          </div>
        </div>
      </div>

      <style>{`
        /* Movimiento del Termo */
        @keyframes cebar {
            0% { transform: rotate(0deg) translate(0, 0); }
            15% { transform: rotate(-35deg) translate(-40px, 20px); }
            75% { transform: rotate(-35deg) translate(-40px, 20px); } 
            100% { transform: rotate(0deg) translate(0, 0); }
        }
        
        /* Caída del Agua */
        @keyframes chorro {
            0%, 15% { height: 0; opacity: 0; }
            20% { height: 120px; opacity: 0.6; }
            70% { height: 120px; opacity: 0.6; }
            75% { height: 0; opacity: 0; top: 155px; } /* Desaparece al llegar abajo */
            100% { height: 0; opacity: 0; }
        }

        /* Partículas de Vapor */
        @keyframes vapor {
            0% { transform: translateY(0) scale(1); opacity: 0; }
            20% { opacity: 0.6; }
            100% { transform: translateY(-40px) scale(2); opacity: 0; }
        }
        
        /* Aparición y Desaparición Global */
        @keyframes fade-in-out {
            0% { opacity: 0; }
            10% { opacity: 1; }
            90% { opacity: 1; }
            100% { opacity: 0; }
        }

        .animate-cebar { animation: cebar 4s cubic-bezier(0.4, 0, 0.2, 1) forwards; }
        .animate-chorro { animation: chorro 4s ease-in-out forwards; }
        .animate-vapor { animation: vapor 2s infinite ease-out; }
        .animate-fade-in-out { animation: fade-in-out 4.5s ease-in-out forwards; }
        
        .delay-0 { animation-delay: 1.5s; }
        .delay-300 { animation-delay: 1.8s; }
        .delay-700 { animation-delay: 2.2s; }
      `}</style>
    </div>
  );
}
