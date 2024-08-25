import React from 'react'
import "./hole.css"

export default function DarkHole() {
  return (
    <div className="containerDarkHole">
        {[...Array(20)].map((_, index) => (
            <div
                key={index}
                className="itemDH"
                style={{ '--i': index + 1 } as React.CSSProperties}
            ></div>
        ))}
    </div>
);
}
