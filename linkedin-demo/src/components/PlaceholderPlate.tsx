import React from 'react';
import { AbsoluteFill } from 'remotion';
import { COLORS } from '../config';

type Props = {
  title: string;
  note: string;
};

export const PlaceholderPlate: React.FC<Props> = ({ title, note }) => {
  return (
    <AbsoluteFill
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        padding: 72,
        background: `repeating-linear-gradient(
          -45deg,
          ${COLORS.navy},
          ${COLORS.navy} 24px,
          ${COLORS.navy2} 24px,
          ${COLORS.navy2} 48px
        )`,
      }}
    >
      <div
        style={{
          background: 'rgba(6,15,30,.88)',
          border: `2px dashed ${COLORS.teal}`,
          borderRadius: 24,
          padding: 48,
          maxWidth: 840,
          textAlign: 'center',
        }}
      >
        <div
          style={{
            fontFamily: 'Space Grotesk, sans-serif',
            fontWeight: 700,
            fontSize: 48,
            color: COLORS.white,
            marginBottom: 20,
          }}
        >
          {title}
        </div>
        <div
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: 28,
            color: COLORS.gold,
          }}
        >
          {note}
        </div>
      </div>
    </AbsoluteFill>
  );
};
