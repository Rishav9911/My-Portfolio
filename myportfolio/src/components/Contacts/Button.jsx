import React from 'react';
import "./Button.scss";

const Button = ({
  color = 'orange',
  width = 200,
  height = 75,
  fontSize = 20,
  borderWidth = 10,
  buttonText = 'SUBMIT',
}) => {
 
  
  const maskId = `mask_${Math.random().toString(36).substr(2, 9)}`;
  const maskStyle = `#fancy-masked-element_${maskId} { mask: url(#${maskId}); -webkit-mask: url(#${maskId})}`;

  const buttonStyle = {
    width: width,
    height: height,
  };

  const fancyFrontStyle = {
    transform: `rotateX(0deg) translateZ(${height / 2}px)`,
  };

  const fancyBackStyle = {
    transform: `rotateX(90deg) translateZ(${height / 2}px)`,
  };

  // SVG attributes
  const textTransform = `matrix(1 0 0 1 ${width / 2} ${height / 1.6})`;
  const viewBox = `0 0 ${width} ${height}`;

  return (
    <div className="fancy-button" style={buttonStyle}>
      <div className="fancy-flipper">
        <div className="fancy-front" style={fancyFrontStyle}>
          <svg height={height} width={width} viewBox={viewBox}>
            <defs>
              <mask id={maskId}>
                <rect width="100%" height="100%" fill="#FFFFFF" />
                <text
                  className="mask-text button-text"
                  fill="#000000"
                  transform={textTransform}
                  fontFamily="'intro_regular'"
                  fontSize={fontSize}
                  width="100%"
                  textAnchor="middle"
                  letterSpacing="1"
                >
                  {buttonText}
                </text>
              </mask>
            </defs>
            <style>{maskStyle}</style>
            <rect
              id={`fancy-masked-element_${maskId}`}
              fill={color}
              width="100%"
              height="100%"
            />
          </svg>
        </div>
        <div className="fancy-back" style={fancyBackStyle}>
          <svg height={height} width={width} viewBox={viewBox}>
            <rect
              stroke={color}
              strokeWidth={borderWidth}
              fill="transparent"
              width="100%"
              height="100%"
            />
            <text
              className="button-text"
              transform={textTransform}
              fill={color}
              fontFamily="'intro_regular'"
              fontSize={fontSize}
              textAnchor="middle"
              letterSpacing="1"
            >
              {buttonText}
            </text>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Button;
