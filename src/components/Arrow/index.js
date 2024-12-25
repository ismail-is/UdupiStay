import React from 'react';

const Arrow = () => {
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '120px',

  };

  const chevronStyle = {
    position: 'absolute',
    width: '2.1rem',
    height: '0.48rem',
    opacity: 0,
    transform: 'scale(0.3)',
    animation: 'move-chevron 3s ease-out infinite',
  };

  const chevronFirstChildStyle = {
    ...chevronStyle,
    animationDelay: '1s',
  };

  const chevronSecondChildStyle = {
    ...chevronStyle,
    animationDelay: '2s',
  };

  const chevronBeforeAfterStyle = {
    content: '""',
    position: 'absolute',
    top: 0,
    height: '100%',
    width: '50%',
    background: '#99B02C', // Updated color
  };

  const chevronBeforeStyle = {
    ...chevronBeforeAfterStyle,
    left: 0,
    transform: 'skewY(30deg)',
  };

  const chevronAfterStyle = {
    ...chevronBeforeAfterStyle,
    right: 0,
    transform: 'skewY(-30deg)',
  };

  return (
    <div style={{marginTop:'-160px'}}>
    <div style={containerStyle}>
      <div style={chevronStyle} className="chevron">
        <div style={chevronBeforeStyle}></div>
        <div style={chevronAfterStyle}></div>
      </div>
      <div style={chevronFirstChildStyle} className="chevron">
        <div style={chevronBeforeStyle}></div>
        <div style={chevronAfterStyle}></div>
      </div>
      <div style={chevronSecondChildStyle} className="chevron">
        <div style={chevronBeforeStyle}></div>
        <div style={chevronAfterStyle}></div>
      </div>
      <style>
        {`
          @keyframes move-chevron {
            25% {
              opacity: 1;
            }
            33.3% {
              opacity: 1;
              transform: translateY(2.28rem);
            }
            66.6% {
              opacity: 1;
              transform: translateY(3.12rem);
            }
            100% {
              opacity: 0;
              transform: translateY(4.8rem) scale(0.5);
            }
          }
        `}
      </style>
    </div>

    </div>
  );
};

export default Arrow;
