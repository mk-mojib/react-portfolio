import React from 'react';
import Typewriter from 'typewriter-effect';

function Type() {
  return (
    <div style={{ fontSize: '2rem' }}>
      <Typewriter
        options={{
          strings: [
            'Software Developer',
            'Front-End Developer',
            'Web Developer',
            'MERN Stack Developer',
          ],
          autoStart: true,
          loop: true,
          deleteSpeed: 50,
        }}
      />
    </div>
  );
}

export default Type;
