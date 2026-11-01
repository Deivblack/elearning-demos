import React from 'react';
import { Composition } from 'remotion';
import { LinkedInStory } from './LinkedInStory';
import { DURATION_IN_FRAMES, FPS, HEIGHT, WIDTH } from './config';

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="LinkedInStory"
        component={LinkedInStory}
        durationInFrames={DURATION_IN_FRAMES}
        fps={FPS}
        width={WIDTH}
        height={HEIGHT}
        defaultProps={{}}
      />
    </>
  );
};
