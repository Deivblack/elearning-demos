import React from 'react';
import { AbsoluteFill, interpolate, useCurrentFrame } from 'remotion';
import { COLORS } from '../config';

type Props = {
  date: string;
  en: string;
  es?: string;
  detail?: string;
};

export const TimelineTick: React.FC<Props> = ({ date, en, es, detail }) => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [0, 8], [0, 1], { extrapolateRight: 'clamp' });

  return (
    <AbsoluteFill
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        padding: 64,
        background: `linear-gradient(160deg, ${COLORS.navyDeep}, ${COLORS.navy2})`,
        opacity,
      }}
    >
      <div style={{ width: '100%', maxWidth: 900 }}>
        <div
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 24,
            fontWeight: 600,
            color: COLORS.gold,
            letterSpacing: 2,
            textTransform: 'uppercase',
            marginBottom: 18,
          }}
        >
          {date}
        </div>
        <div
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 700,
            fontSize: 52,
            color: COLORS.white,
            lineHeight: 1.2,
            marginBottom: 12,
          }}
        >
          {en}
        </div>
        {es ? (
          <div
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 600,
              fontSize: 28,
              color: COLORS.teal2,
              marginBottom: 16,
            }}
          >
            {es}
          </div>
        ) : null}
        {detail ? (
          <div
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 24,
              color: COLORS.muted,
              borderLeft: `3px solid ${COLORS.teal}`,
              paddingLeft: 18,
            }}
          >
            {detail}
          </div>
        ) : null}
      </div>
    </AbsoluteFill>
  );
};
