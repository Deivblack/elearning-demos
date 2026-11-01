import React from 'react';
import { AbsoluteFill, interpolate, useCurrentFrame } from 'remotion';
import { COLORS } from '../config';

type Props = {
  date: string;
  headline: string;
  detail?: string;
};

export const TimelineTick: React.FC<Props> = ({ date, headline, detail }) => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [0, 10], [0, 1], { extrapolateRight: 'clamp' });

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
      <div style={{ width: '100%', maxWidth: 880 }}>
        <div
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: 26,
            fontWeight: 600,
            color: COLORS.gold,
            letterSpacing: 2,
            textTransform: 'uppercase',
            marginBottom: 20,
          }}
        >
          {date}
        </div>
        <div
          style={{
            fontFamily: 'Space Grotesk, sans-serif',
            fontWeight: 700,
            fontSize: 56,
            color: COLORS.white,
            lineHeight: 1.2,
            marginBottom: 16,
          }}
        >
          {headline}
        </div>
        {detail ? (
          <div
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: 28,
              color: COLORS.muted,
              borderLeft: `3px solid ${COLORS.teal}`,
              paddingLeft: 20,
            }}
          >
            {detail}
          </div>
        ) : null}
      </div>
    </AbsoluteFill>
  );
};
