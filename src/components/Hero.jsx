import React from 'react';

function Hero() {
  return (
    <section style={{
      position: 'relative',
      minHeight: '600px',
      background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)',
      color: 'white',
      overflow: 'hidden'
    }}>
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '80px 2rem',
        position: 'relative',
        zIndex: 10,
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '3rem',
        alignItems: 'center'
      }}>
        {/* Left: Content */}
        <div>
          <h1 style={{
            fontSize: '3.5rem',
            fontWeight: '300',
            lineHeight: '1.2',
            marginBottom: '2rem',
            letterSpacing: '0.5px'
          }}>
            Luxury, Comfort, & Elegance In Every Ride
          </h1>
          
          {/* Features */}
          <div style={{ display: 'flex', gap: '2rem', marginBottom: '2.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <div style={{
                width: '20px',
                height: '20px',
                borderRadius: '50%',
                border: '2px solid #D4AF37',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <div style={{
                  width: '8px',
                  height: '8px',
                  backgroundColor: '#D4AF37',
                  borderRadius: '50%'
                }}></div>
              </div>
              <span style={{ fontSize: '0.95rem' }}>Punctual Service</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <div style={{
                width: '20px',
                height: '20px',
                borderRadius: '50%',
                border: '2px solid #D4AF37',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <div style={{
                  width: '8px',
                  height: '8px',
                  backgroundColor: '#D4AF37',
                  borderRadius: '50%'
                }}></div>
              </div>
              <span style={{ fontSize: '0.95rem' }}>Available 24/7</span>
            </div>
          </div>

          {/* CTA Button */}
          <button style={{
            backgroundColor: '#D4AF37',
            color: '#1a1a1a',
            fontWeight: '600',
            padding: '1rem 2.5rem',
            borderRadius: '50px',
            border: 'none',
            cursor: 'pointer',
            fontSize: '1rem',
            transition: 'all 0.3s ease'
          }}>
            Reserve Today
          </button>
        </div>

        {/* Right: Car Image */}
        <div style={{
          position: 'relative',
          height: '400px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <img 
            src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=2070"
            alt="Luxury Car"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.5))'
            }}
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
