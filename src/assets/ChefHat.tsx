import React from 'react';

const HatChefIcon = ({
  size = 60,
  color = '#000000',
  strokeWidth = 2,
  background = 'transparent',
  opacity = 1,
  rotation = 0,
  shadow = 0,
  flipHorizontal = false,
  flipVertical = false,
  padding = 0
}) => {
  const transforms = [];
  if (rotation !== 0) transforms.push(`rotate(${rotation}deg)`);
  if (flipHorizontal) transforms.push('scaleX(-1)');
  if (flipVertical) transforms.push('scaleY(-1)');

  const viewBoxSize = 24 + (padding * 2);
  const viewBoxOffset = -padding;
  const viewBox = `${viewBoxOffset} ${viewBoxOffset} ${viewBoxSize} ${viewBoxSize}`;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={viewBox}
      width={size}
      height={size}
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{
        opacity,
        transform: transforms.join(' ') || undefined,
        filter: shadow > 0 ? `drop-shadow(0 ${shadow}px ${shadow * 2}px rgba(0,0,0,0.3))` : undefined,
        backgroundColor: background !== 'transparent' ? background : undefined
      }}
    >
      <path fill="currentColor" fill-rule="evenodd" d="M4 15h10v1H4zm9.449-11.688A4.24 4.24 0 0 0 9.322.086a4.244 4.244 0 0 0-4.166 3.39a3.3 3.3 0 0 0-.833-.119a3.31 3.31 0 0 0-3.312 3.312c0 1.829 1.187 3.312 3.017 3.312c.019 0 .036-.005.056-.005v3.981h9.875v-3.384c1.883-.14 3.011-1.709 3.011-3.627a3.64 3.64 0 0 0-3.521-3.634M8.9 1.795c-.842.544-1.383 1.401-1.383 2.368H6.216c0-1.398 1.133-2.571 2.664-2.9c.277-.058.452.252.02.532"/>
    </svg>
  );
};

export default HatChefIcon;