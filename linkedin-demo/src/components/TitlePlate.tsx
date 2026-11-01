import React from 'react';
import { AbsoluteFill, interpolate, useCurrentFrame } from 'remotion';
import { COLORS } from '../config';

type Props = {
  lines: string[];
  accent?: string;
  sub?: string;
};

export const TitlePlate: React.FC<Props> = ({ lines, accent, sub }) => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [0, 12], [0, 1], { extrapolateRight: 'clamp' });
  const y = interpolate(frame, [0, 12], [24, 0], { extrapolateRight: 'clamp' });

  return (
    <AbsoluteFill
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        padding: 72,
        background: `radial-gradient(ellipse at 20% 40%, ${COLORS.navy2} 0%, ${COLORS.navy} 50%, ${COLORS.navyDeep} 100%)`,
        opacity,
        transform: `translateY(${y}px)`,
      }}
    >
      <div style={{ maxWidth: 900, textAlign: 'center' }}>
        {lines.map((line, i) => (
          <div
            key={i}
            style={{
              fontFamily: 'Space Grotesk, sans-serif',
              fontWeight: 700,
              fontSize: i === 0 ? 64 : 52,
              lineHeight: 1.15,
              color: COLORS.white,
              marginBottom: 12,
            }}
          >
            {line}
          </div>
        ))}
        {accent ? (
          <div
            style={{
              marginTop: 28,
              height: 4,
              width: 120,
              marginLeft: 'auto',
              marginRight: 'auto',
              background: COLORS.gold,
              borderRadius: 2,
            }}
          />
        ) : null}
        {accent ? (
          <div
            style={{
              marginTop: 28,
              fontFamily: 'Space Grotesk, sans-serif',
              fontWeight: 600,
              fontSize: 40,
              color: COLORS.teal2,
            }}
          >
            {accent}
          </div>
        ) : null}
        {sub ? (
          <div
            style={{
              marginTop: 20,
              fontFamily: 'Inter, sans-serif',
              fontSize: 28,
              color: COLORS.muted,
            }}
          >
            {sub}
          </div>
        ) : null}
      </div>
    </AbsoluteFill>
  );
};
