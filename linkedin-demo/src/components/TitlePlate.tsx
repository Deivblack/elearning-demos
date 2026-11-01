import React from 'react';
import { AbsoluteFill, interpolate, useCurrentFrame } from 'remotion';
import { COLORS } from '../config';

type Props = {
  lines: string[];
  es?: string;
  accent?: string;
  sub?: string;
};

export const TitlePlate: React.FC<Props> = ({ lines, es, accent, sub }) => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [0, 10], [0, 1], { extrapolateRight: 'clamp' });
  const y = interpolate(frame, [0, 10], [22, 0], { extrapolateRight: 'clamp' });

  return (
    <AbsoluteFill
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        padding: 64,
        background: `radial-gradient(ellipse at 20% 40%, ${COLORS.navy2} 0%, ${COLORS.navy} 50%, ${COLORS.navyDeep} 100%)`,
        opacity,
        transform: `translateY(${y}px)`,
      }}
    >
      <div style={{ maxWidth: 920, textAlign: 'center' }}>
        {lines.map((line, i) => (
          <div
            key={i}
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700,
              fontSize: lines.length === 1 && line.length > 36 ? 48 : i === 0 ? 58 : 48,
              lineHeight: 1.18,
              color: COLORS.white,
              marginBottom: 10,
            }}
          >
            {line}
          </div>
        ))}
        {es ? (
          <div
            style={{
              marginTop: 14,
              fontFamily: "'Inter', sans-serif",
              fontWeight: 600,
              fontSize: 28,
              color: COLORS.teal2,
              lineHeight: 1.35,
            }}
          >
            {es}
          </div>
        ) : null}
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
              marginTop: 24,
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 600,
              fontSize: 38,
              color: COLORS.teal2,
            }}
          >
            {accent}
          </div>
        ) : null}
        {sub ? (
          <div
            style={{
              marginTop: 16,
              fontFamily: "'Inter', sans-serif",
              fontSize: 26,
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
