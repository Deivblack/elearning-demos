import React from 'react';
import { AbsoluteFill, Sequence } from 'remotion';
import { FPS } from './config';
import { TitlePlate } from './components/TitlePlate';
import { PhoneFrame } from './components/PhoneFrame';
import { PhotoBeat } from './components/PhotoBeat';
import { CaptionOverPhone } from './components/CaptionOverPhone';
import { IN } from './clipInPoints';

const s = (sec: number) => Math.round(sec * FPS);

/**
 * Re-cut after David feedback:
 * - No mid-story jumps back to welcome/login (clip in-points)
 * - Longer pauses between beats
 * - First ~20s: captions + live course UI in phone frame
 * - Piloto photo with "teammates hooked" message
 */
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

      {/* 0–5: Hook — cover already shows the system in the warehouse */}
      <Sequence from={s(0)} durationInFrames={s(5)}>
        <PhotoBeat
          src="cover-laptop-warehouse-safe.png"
          en={'Our onboarding was: "Go figure it out."'}
          es={'Nuestro onboarding era: "Arréglatelas."'}
        />
      </Sequence>

      {/* 5–20: letter beats WITH phone UI (forward-only) */}
      <Sequence from={s(5)} durationInFrames={s(4.5)}>
        <CaptionOverPhone
          en="Three languages. One first week."
          es="Tres idiomas. Una primera semana."
          phoneSrc="welcome.webm"
          startFromSec={IN.welcome}
          backdropSrc="cover-laptop-warehouse-safe.png"
        />
      </Sequence>

      <Sequence from={s(9.5)} durationInFrames={s(4.5)}>
        <CaptionOverPhone
          en="I built a 10-minute pilot."
          es="Armé un piloto de 10 minutos."
          phoneSrc="mission-map.webm"
          startFromSec={IN.map}
        />
      </Sequence>

      <Sequence from={s(14)} durationInFrames={s(4)}>
        <CaptionOverPhone
          en="Missions. XP. Badges. Retry."
          es="Misiones. XP. Badges. Reintento."
          phoneSrc="mission-map.webm"
          startFromSec={IN.map}
        />
      </Sequence>

      <Sequence from={s(18)} durationInFrames={s(3.5)}>
        <CaptionOverPhone
          en="Shipped Oct 31 – Nov 1."
          es="Publicado 31 oct – 1 nov."
          phoneSrc="lesson-safety.webm"
          startFromSec={IN.lesson}
        />
      </Sequence>

      {/* Course path — continue forward only */}
      <Sequence from={s(21.5)} durationInFrames={s(4)}>
        <PhoneFrame
          src="mission-map.webm"
          startFromSec={IN.map}
          en="Five missions. Belt first."
          es="Cinco misiones. Cinta primero."
        />
      </Sequence>

      <Sequence from={s(25.5)} durationInFrames={s(4)}>
        <PhoneFrame
          src="lesson-safety.webm"
          startFromSec={IN.lesson}
          en="Safety. Look. Don’t climb. Tell."
          es="Seguridad. Mira. No trepes. Avisa."
        />
      </Sequence>

      <Sequence from={s(29.5)} durationInFrames={s(3)}>
        <PhoneFrame
          src="quiz-wrong.webm"
          startFromSec={IN.quizWrong}
          en="Wrong once."
          es="Fallar una."
        />
      </Sequence>

      <Sequence from={s(32.5)} durationInFrames={s(3.5)}>
        <PhoneFrame
          src="quiz-right.webm"
          startFromSec={IN.quizRight}
          en="Then right."
          es="Luego bien."
        />
      </Sequence>

      <Sequence from={s(36)} durationInFrames={s(4)}>
        <PhoneFrame
          src="badge.webm"
          startFromSec={IN.badge}
          en="Badge unlocked. Keep going."
          es="Badge desbloqueado. Sigue."
        />
      </Sequence>

      <Sequence from={s(40)} durationInFrames={s(4)}>
        <PhoneFrame
          src="final.webm"
          startFromSec={IN.final}
          en="Path complete. Pilot record."
          es="Ruta completa. Registro piloto."
        />
      </Sequence>

      <Sequence from={s(44)} durationInFrames={s(4.5)}>
        <PhotoBeat
          src="piloto-pda-blur.png"
          en="The result: teammates hooked on onboarding"
          es="Resultado: el equipo enganchado al onboarding"
          fit="cover"
        />
      </Sequence>

      <Sequence from={s(48.5)} durationInFrames={s(3.5)}>
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
