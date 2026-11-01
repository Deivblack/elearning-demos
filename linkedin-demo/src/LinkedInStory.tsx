import React from 'react';
import { AbsoluteFill, Sequence } from 'remotion';
import { FPS } from './config';
import { TitlePlate } from './components/TitlePlate';
import { TimelineTick } from './components/TimelineTick';
import { PhoneFrame } from './components/PhoneFrame';
import { PhotoBeat } from './components/PhotoBeat';

const s = (sec: number) => Math.round(sec * FPS);

/** Approved ~48s cut — SCRIPT.md (David 2026-11-01). */
export const LinkedInStory: React.FC = () => {
  return (
    <AbsoluteFill
      style={{
        backgroundColor: '#0D1F3C',
        fontFamily: "'Space Grotesk', 'Inter', sans-serif",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=Space+Grotesk:wght@500;600;700&display=swap');
      `}</style>

      <Sequence from={s(0)} durationInFrames={s(5)}>
        <PhotoBeat
          src="cover-laptop-warehouse-safe.png"
          en={'Our onboarding was: "Go figure it out."'}
          es={'Nuestro onboarding era: "Arréglatelas."'}
        />
      </Sequence>

      <Sequence from={s(5)} durationInFrames={s(3)}>
        <TitlePlate
          lines={['Three languages.', 'One first week.']}
          es="Tres idiomas. Una primera semana."
          sub="Belt → carts → container"
        />
      </Sequence>

      <Sequence from={s(8)} durationInFrames={s(4)}>
        <TitlePlate
          lines={['I built a 10-minute pilot.']}
          es="Armé un piloto de 10 minutos."
          accent="Prime Choice"
          sub="Outbound onboarding"
        />
      </Sequence>

      <Sequence from={s(12)} durationInFrames={s(2)}>
        <TitlePlate
          lines={['Missions. XP. Badges. Retry.']}
          es="Misiones. XP. Badges. Reintento."
        />
      </Sequence>

      <Sequence from={s(14)} durationInFrames={s(2)}>
        <TimelineTick
          date="2026-10-31"
          en="Published the pilot."
          es="Publiqué el piloto."
          detail="GitHub Pages · Prime Choice pilot"
        />
      </Sequence>

      <Sequence from={s(16)} durationInFrames={s(2)}>
        <TimelineTick
          date="2026-10-31"
          en="Phone-ready. Three languages."
          es="Listo en celular. Tres idiomas."
          detail="Responsive · i18n · admin records"
        />
      </Sequence>

      <Sequence from={s(18)} durationInFrames={s(2)}>
        <TimelineTick
          date="2026-11-01"
          en="Activities. Retry. Best score."
          es="Actividades. Reintento. Mejor puntaje."
        />
      </Sequence>

      <Sequence from={s(20)} durationInFrames={s(2)}>
        <TimelineTick
          date="2026-11-01"
          en="Graphics. Path progress. Saved."
          es="Gráficos. Progreso. Guardado."
        />
      </Sequence>

      <Sequence from={s(22)} durationInFrames={s(2)}>
        <TimelineTick
          date="2026-11-01"
          en="One XP truth. Mission five."
          es="Un solo XP. Misión cinco."
        />
      </Sequence>

      <Sequence from={s(24)} durationInFrames={s(3)}>
        <PhoneFrame
          src="welcome.webm"
          en="Welcome to Prime Choice."
          es="Bienvenido a Prime Choice."
        />
      </Sequence>

      <Sequence from={s(27)} durationInFrames={s(3)}>
        <PhoneFrame
          src="mission-map.webm"
          en="Five missions. Belt first."
          es="Cinco misiones. Cinta primero."
        />
      </Sequence>

      <Sequence from={s(30)} durationInFrames={s(3)}>
        <PhoneFrame
          src="lesson-safety.webm"
          en="Safety. Look. Don’t climb. Tell."
          es="Seguridad. Mira. No trepes. Avisa."
        />
      </Sequence>

      <Sequence from={s(33)} durationInFrames={s(1.5)}>
        <PhoneFrame src="quiz-wrong.webm" en="Wrong once." es="Fallar una." />
      </Sequence>

      <Sequence from={s(34.5)} durationInFrames={s(1.5)}>
        <PhoneFrame src="quiz-right.webm" en="Then right." es="Luego bien." />
      </Sequence>

      <Sequence from={s(36)} durationInFrames={s(3)}>
        <PhoneFrame
          src="badge.webm"
          en="Badge unlocked. Keep going."
          es="Badge desbloqueado. Sigue."
        />
      </Sequence>

      <Sequence from={s(39)} durationInFrames={s(3)}>
        <PhoneFrame
          src="final.webm"
          en="Path complete. Pilot record."
          es="Ruta completa. Registro piloto."
        />
      </Sequence>

      <Sequence from={s(42)} durationInFrames={s(3)}>
        <PhotoBeat
          src="piloto-pda-blur.png"
          en="Real floor. Same path."
          es="Piso real. Misma ruta."
          fit="cover"
        />
      </Sequence>

      <Sequence from={s(45)} durationInFrames={s(3)}>
        <TitlePlate
          lines={['Built for the floor.']}
          es="Hecho para el piso."
          accent="David Moreno Abril · L&D"
          sub="Prime Choice · Outbound pilot"
        />
      </Sequence>
    </AbsoluteFill>
  );
};
