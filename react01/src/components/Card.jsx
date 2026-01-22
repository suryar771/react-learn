import React from 'react'

function Card() {
  return (
    <div style={{ width: '18rem', border: '1px solid #ccc', borderRadius: '8px', padding: '1rem', margin: '1rem auto' }}>
      <div style={{ backgroundColor: '#f0f0f0', height: '200px', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
        <span style={{ color: '#888' }}>Image Placeholder</span>
      </div>
      <div>
        <h3>Card title</h3>
        <p>
          Some quick example text to build on the card title and make up the bulk of the card's
          content.
        </p>
        <button style={{ backgroundColor: '#646cff', color: 'white', border: 'none', padding: '0.5rem 1rem', borderRadius: '4px', cursor: 'pointer' }}>
          Go somewhere
        </button>
      </div>
    </div>
  )
}

export default Card