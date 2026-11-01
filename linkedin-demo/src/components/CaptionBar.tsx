import React from 'react';
import { COLORS } from '../config';

type Props = {
  en: string;
  es?: string;
  position?: 'bottom' | 'center';
};

export const CaptionBar: React.FC<Props> = ({ en, es, position = 'bottom' }) => {
  return (
    <div
      style={{
        position: 'absolute',
        left: 40,
        right: 40,
        bottom: position === 'bottom' ? 72 : undefined,
        top: position === 'center' ? '42%' : undefined,
        textAlign: 'center',
        zIndex: 20,
      }}
    >
      <div
        style={{
          display: 'inline-block',
          maxWidth: 960,
          background: 'rgba(6,15,30,.78)',
          borderRadius: 18,
          padding: '18px 28px',
          border: `1px solid rgba(20,184,166,.35)`,
        }}
      >
        <div
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 700,
            fontSize: 40,
            lineHeight: 1.2,
            color: COLORS.white,
          }}
        >
          {en}
        </div>
        {es ? (
          <div
            style={{
              marginTop: 10,
              fontFamily: "'Inter', sans-serif",
              fontWeight: 600,
              fontSize: 26,
              lineHeight: 1.3,
              color: COLORS.teal2,
            }}
          >
            {es}
          </div>
        ) : null}
      </div>
    </div>
  );
};
