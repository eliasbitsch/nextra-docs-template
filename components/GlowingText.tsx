import React, { ReactNode, Key, CSSProperties } from 'react';

interface GlowingTextProps {
    children: ReactNode;
    key?: Key;
    style?: CSSProperties;  // Add this line to accept custom styles
}

function GlowingText({ children, key, style }: GlowingTextProps): React.ReactElement {
    return React.createElement(
        'span',
        {
            key: key,
            className: "glowing-text",
            style: style, // Apply custom styles
            children: [
                children,
                React.createElement(
                    'style',
                    { jsx: true, key: 'glowing-text-style' },
                    `
                        .glowing-text {
                            position: relative;
                            display: inline-block;
                            font-weight: bold;
                            color: orange;
                            background: linear-gradient(to right, orange, #ff9, orange);
                            background-size: 200% auto;
                            background-clip: text;
                            -webkit-background-clip: text;
                            -webkit-text-fill-color: transparent;
                            animation: glowMove 2s linear infinite;
                        }

                        @keyframes glowMove {
                            0% {
                                background-position: 200% 0;
                            }
                            100% {
                                background-position: 0 0;
                            }
                        }
                    `
                )
            ]
        }
    );
}

export default GlowingText;
