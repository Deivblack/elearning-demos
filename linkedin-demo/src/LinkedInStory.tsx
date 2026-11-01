import React from 'react';
import { AbsoluteFill, Sequence } from 'remotion';
import { FPS } from './config';
import { TitlePlate } from './components/TitlePlate';
import { TimelineTick } from './components/TimelineTick';
import { PhoneFrame } from './components/PhoneFrame';
import { PlaceholderPlate } from './components/PlaceholderPlate';

const s = (sec: number) => Math.round(sec * FPS);

/**
 * Compact ~54s cut of linkedin-demo/SCRIPT.md.
 * DO NOT run remotion render until David approves SCRIPT.md.
 */
export const LinkedInStory: React.FC = () => {
  return (
    <AbsoluteFill
      style={{
        backgroundColor: '#0D1F3C',
        fontFamily: "'Space Grotesk', 'Inter', sans-serif",
      }}
    >
      {/* Load fonts for Remotion preview/render */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=Space+Grotesk:wght@500;600;700&display=swap');
      `}</style>

      <Sequence from={s(0)} durationInFrames={s(3)}>
        <TitlePlate lines={['High turnover.', 'Fast floor.']} />
      </Sequence>

      <Sequence from={s(3)} durationInFrames={s(3)}>
        <TitlePlate
          lines={['Three languages.', 'One first week.']}
          sub="Belt → carts → container"
        />
      </Sequence>

      <Sequence from={s(6)} durationInFrames={s(4)}>
        <TitlePlate
          lines={['I built a 10-minute pilot.']}
          accent="Prime Choice"
          sub="Outbound onboarding"
        />
      </Sequence>

      <Sequence from={s(10)} durationInFrames={s(3)}>
        <TitlePlate lines={['Missions. XP. Badges. Retry.']} />
      </Sequence>

      <Sequence from={s(13)} durationInFrames={s(2.4)}>
        <TimelineTick
          date="2026-10-31"
          headline="Published the pilot."
          detail="Publish Prime Choice pilot on GitHub Pages"
        />
      </Sequence>

      <Sequence from={s(15.4)} durationInFrames={s(2.4)}>
        <TimelineTick
          date="2026-10-31"
          headline="Phone-ready. Three languages."
          detail="Responsive, i18n, admin-only records"
        />
      </Sequence>

      <Sequence from={s(17.8)} durationInFrames={s(2.4)}>
        <TimelineTick
          date="2026-11-01"
          headline="Activities. Retry. Best score."
          detail="Activities, shuffle, retry, and copy"
        />
      </Sequence>

      <Sequence from={s(20.2)} durationInFrames={s(2.4)}>
        <TimelineTick
          date="2026-11-01"
          headline="Graphics. Path progress. Saved."
          detail="Missions 2–4 graphics + progress persistence"
        />
      </Sequence>

      <Sequence from={s(22.6)} durationInFrames={s(2.4)}>
        <TimelineTick
          date="2026-11-01"
          headline="One XP truth. Mission five."
          detail="Unify XP display and rewrite Mission 5"
        />
      </Sequence>

      <Sequence from={s(25)} durationInFrames={s(4)}>
        <PhoneFrame src="welcome.webm" caption="Welcome to Prime Choice." />
      </Sequence>

      <Sequence from={s(29)} durationInFrames={s(4)}>
        <PhoneFrame src="mission-map.webm" caption="Five missions. Belt first." />
      </Sequence>

      <Sequence from={s(33)} durationInFrames={s(4)}>
        <PhoneFrame src="lesson-safety.webm" caption="Safety. Look. Don’t climb. Tell." />
      </Sequence>

      <Sequence from={s(37)} durationInFrames={s(3)}>
        <PhoneFrame src="quiz-wrong.webm" caption="Wrong once." />
      </Sequence>

      <Sequence from={s(40)} durationInFrames={s(3)}>
        <PhoneFrame src="quiz-right.webm" caption="Then right." />
      </Sequence>

      <Sequence from={s(43)} durationInFrames={s(3)}>
        <PhoneFrame src="badge.webm" caption="Badge unlocked. Keep going." />
      </Sequence>

      <Sequence from={s(46)} durationInFrames={s(4)}>
        <PhoneFrame src="final.webm" caption="Path complete. Pilot record." />
      </Sequence>

      <Sequence from={s(50)} durationInFrames={s(2)}>
        <PlaceholderPlate
          title="Real floor. Same path."
          note="[TODO: piloto.mov or photo]"
        />
      </Sequence>

      <Sequence from={s(52)} durationInFrames={s(2)}>
        <TitlePlate
          lines={['Built for the floor.']}
          accent="David Moreno · L&D"
          sub="Prime Choice · Outbound pilot"
        />
      </Sequence>
    </AbsoluteFill>
  );
};
