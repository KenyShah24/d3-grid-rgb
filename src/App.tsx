import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const grid = 10;
  const [b, setB] = useState(0);

const rg = Array.from({ length: 100 }, (_, idx) => ({
  r: (idx * 5) % 256,
  g: (idx * 3) % 256,
}));

  return (
    <div style={{ padding: "20px" }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${grid}, 40px)`,
          marginBottom: "20px",
        }}
      >
        {rg.map((rgi, idx) => (
          <div
            key={idx}
            style={{
              width: "40px",
              height: "40px",
              backgroundColor: `rgb(${rgi.r}, ${rgi.g}, ${b})`,
            }}
          />
        ))}
      </div>

      <div>
        <p>{b}</p>
        <input
          type="range"
          min={0}
          max={255}
          value={b}
          onChange={(e) => setB(parseInt(e.target.value))}
          style={{ width: "100%" }}
        />
      </div>
    </div>
  );
}

export default App
