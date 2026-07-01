import React from "react";

interface LogoSymbolProps {
  size?: number;
  className?: string;
  withText?: boolean;
  withBackground?: boolean;
}

export default function LogoSymbol({
  size = 120,
  className = "",
  withText = true,
  withBackground = true,
}: LogoSymbolProps) {
  // A perfect proportion of 1:1 or 1:1.15 depending on whether SOCKS text is present
  const viewBox = withText ? "0 0 200 230" : "0 0 200 200";
  const height = withText ? size * 1.15 : size;

  return (
    <div
      style={{ width: size, height: height }}
      className={`inline-block select-none ${className}`}
    >
      <svg
        viewBox={viewBox}
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <defs>
          {/* Clip path to keep diagonal background colors and the long shadow inside the 160x160 area */}
          <clipPath id="inner-square">
            <rect x="23" y="23" width="154" height="154" rx="1" />
          </clipPath>
        </defs>

        {/* 1. Official Red Card Background matching the screenshot (#BC0016) */}
        {withBackground && (
          <rect
            x="0"
            y="0"
            width="200"
            height={withText ? 230 : 200}
            fill="#BC0016"
            rx="8"
          />
        )}

        {/* 2. Main Square Graphic Area (with clip path for internal diagonal colors and shadow) */}
        <g clipPath="url(#inner-square)">
          {/* Top-Right Triangle Color: Dark Espresso/Charcoal (#201B18) */}
          <rect x="20" y="20" width="160" height="160" fill="#201B18" />

          {/* Yellow/Gold Diagonal Band (running top-left to bottom-right) */}
          <polygon
            points="20,20 105,20 180,95 180,180 105,180 20,95"
            fill="#EAB026"
          />

          {/* Bottom-Left Dark Red Triangle Color (#A60A17) */}
          <polygon
            points="20,95 20,180 105,180"
            fill="#A60A17"
          />

          {/* 45-degree angle Long Shadow cast by the white sock */}
          <polygon
            points="144,52 300,208 200,300 110,154 144,110"
            fill="black"
            opacity="0.32"
          />
        </g>

        {/* 3. Pure White Sock Shape (Drawn over the background and shadow) */}
        <path
          d="M 104,52 L 144,52 L 144,110 C 144,135 130,154 110,154 L 82,154 C 68,154 58,144 58,133 C 58,118 78,114 90,114 L 104,114 Z"
          fill="white"
        />

        {/* Sock Details: Dark espresso cuff divider line at the top */}
        <rect x="104" y="62" width="40" height="3.5" fill="#201B18" />

        {/* Sock Details: Golden-yellow heel curve patch line */}
        <path
          d="M 118,154 C 118,139.5 129.5,128 144,128"
          fill="none"
          stroke="#EAB026"
          strokeWidth="4"
          strokeLinecap="round"
        />

        {/* Sock Details: Bold Red "MK" Brand letters inside the upper leg */}
        <text
          x="124"
          y="93"
          fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
          fontWeight="900"
          fontSize="21px"
          fill="#A60A17"
          textAnchor="middle"
          letterSpacing="-1px"
        >
          MK
        </text>

        {/* 4. White Outer Frame of the Square Graphic */}
        <rect
          x="20"
          y="20"
          width="160"
          height="160"
          stroke="white"
          strokeWidth="4"
          fill="none"
          rx="1"
        />

        {/* 5. Bold Geometric "SOCKS" Text at the bottom */}
        {withText && (
          <text
            x="100"
            y="215"
            fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
            fontWeight="900"
            fontSize="26px"
            fill="white"
            textAnchor="middle"
            letterSpacing="0.5px"
          >
            SOCKS
          </text>
        )}
      </svg>
    </div>
  );
}
