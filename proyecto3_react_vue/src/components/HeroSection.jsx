import React from 'react';

export default function HeroSection() {
  return (
    <section style={{ position: 'relative', textAlign: 'center', color: 'white' }}>
      <video
        autoPlay
        loop
        muted
        style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
      >
        <source src="/hero-video.mp4" type="video/mp4" />
        Tu navegador no soporta el video.
      </video>
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
        <h1>Llamita Sports</h1>
        <p>Ropa deportiva de alta calidad para todos</p>
      </div>
    </section>
  );
}
