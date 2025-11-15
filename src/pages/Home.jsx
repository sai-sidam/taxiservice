import React from 'react';

function Home() {
  return (
    <div style={{ backgroundColor: '#0a0a0a', color: 'white', fontFamily: 'Arial, sans-serif' }}>
      {/* Header */}
      <header style={{
        padding: '1.5rem 3rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100
      }}>
        <div style={{ fontSize: '1.5rem', fontWeight: '700', color: '#D4AF37' }}>LIMOAN</div>
        <nav style={{ display: 'flex', gap: '2.5rem', fontSize: '0.9rem' }}>
          <a href="#" style={{ color: 'white', textDecoration: 'none' }}>Home</a>
          <a href="#" style={{ color: 'white', textDecoration: 'none' }}>About Us</a>
          <a href="#" style={{ color: 'white', textDecoration: 'none' }}>Services</a>
          <a href="#" style={{ color: 'white', textDecoration: 'none' }}>Pages</a>
          <a href="#" style={{ color: 'white', textDecoration: 'none' }}>Contact Us</a>
        </nav>
        <button style={{
          backgroundColor: 'transparent',
          border: '1px solid #D4AF37',
          color: '#D4AF37',
          padding: '0.75rem 1.5rem',
          borderRadius: '25px',
          cursor: 'pointer',
          fontSize: '0.85rem',
          fontWeight: '500'
        }}>
          VIP Membership
        </button>
      </header>

      {/* Hero Section */}
      <section style={{
        position: 'relative',
        height: '700px',
        background: 'linear-gradient(to right, rgba(0,0,0,0.8), rgba(0,0,0,0.3)), url(https://images.unsplash.com/photo-1563720360172-67b8f3dce741?q=80&w=2070) center/cover',
        display: 'flex',
        alignItems: 'center',
        padding: '0 3rem'
      }}>
        <div style={{ maxWidth: '600px' }}>
          <h1 style={{
            fontSize: '4rem',
            fontWeight: '300',
            lineHeight: '1.2',
            marginBottom: '1rem',
            letterSpacing: '1px'
          }}>
            Luxury, Comfort, & Elegance In Every Ride
          </h1>
          <p style={{
            fontSize: '1rem',
            opacity: 0.8,
            marginBottom: '2.5rem'
          }}>
            Experience premium transportation services
          </p>
          <button style={{
            backgroundColor: '#D4AF37',
            color: '#0a0a0a',
            padding: '1rem 2.5rem',
            border: 'none',
            borderRadius: '25px',
            fontSize: '0.95rem',
            fontWeight: '600',
            cursor: 'pointer'
          }}>
            Reserve Today
          </button>
        </div>
      </section>

      {/* Services Grid */}
      <section style={{
        padding: '0 3rem',
        marginTop: '-80px',
        position: 'relative',
        zIndex: 10
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '1.5rem',
          maxWidth: '1400px',
          margin: '0 auto'
        }}>
          {[
            { icon: '🚗', title: 'EASY ONLINE BOOKING', desc: 'Book your ride in minutes' },
            { icon: '💼', title: 'BUSINESS SERVICES', desc: 'Corporate transportation' },
            { icon: '✈️', title: 'AIRPORT TRANSFER', desc: 'Reliable airport rides' },
            { icon: '⭐', title: 'VIP SERVICES', desc: 'Premium experience' }
          ].map((item, i) => (
            <div key={i} style={{
              backgroundColor: '#1a1a1a',
              padding: '2rem 1.5rem',
              borderRadius: '8px',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{item.icon}</div>
              <h3 style={{ fontSize: '0.95rem', fontWeight: '700', marginBottom: '0.5rem', color: '#D4AF37' }}>
                {item.title}
              </h3>
              <p style={{ fontSize: '0.85rem', opacity: 0.7 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section style={{
        padding: '100px 3rem',
        backgroundColor: '#f5f5f5',
        color: '#0a0a0a'
      }}>
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '4rem',
          alignItems: 'center'
        }}>
          <div>
            <h2 style={{
              fontSize: '2.5rem',
              fontWeight: '300',
              marginBottom: '1.5rem'
            }}>
              Elevating Luxury, Redefining Elegance
            </h2>
            <p style={{
              fontSize: '1rem',
              lineHeight: '1.8',
              color: '#666',
              marginBottom: '2rem'
            }}>
              Experience unparalleled comfort and sophistication with our premium limousine services. 
              We provide the finest fleet and professional chauffeurs for all your transportation needs.
            </p>
            <div style={{ display: 'flex', gap: '2rem', marginBottom: '2rem' }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '2rem', fontWeight: '700', color: '#D4AF37' }}>500+</div>
                <div style={{ fontSize: '0.85rem', color: '#666' }}>Happy Clients</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '2rem', fontWeight: '700', color: '#D4AF37' }}>50+</div>
                <div style={{ fontSize: '0.85rem', color: '#666' }}>Luxury Vehicles</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '2rem', fontWeight: '700', color: '#D4AF37' }}>24/7</div>
                <div style={{ fontSize: '0.85rem', color: '#666' }}>Available</div>
              </div>
            </div>
            <button style={{
              backgroundColor: '#D4AF37',
              color: '#0a0a0a',
              padding: '1rem 2.5rem',
              border: 'none',
              borderRadius: '25px',
              fontSize: '0.9rem',
              fontWeight: '600',
              cursor: 'pointer'
            }}>
              Learn More
            </button>
          </div>
          <div>
            <img 
              src="https://images.unsplash.com/photo-1464219789935-c2d9d9aba644?q=80&w=1000"
              alt="Chauffeur"
              style={{ width: '100%', borderRadius: '8px' }}
            />
          </div>
        </div>
      </section>

      {/* Fleet Section */}
      <section style={{
        padding: '100px 3rem',
        backgroundColor: '#0a0a0a'
      }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: '300',
            textAlign: 'center',
            marginBottom: '3rem'
          }}>
            Indulge In Luxury With Our Limousine Service
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '2rem'
          }}>
            {[
              { name: 'Mercedes S-Class', price: '$120/hr', image: 'https://images.unsplash.com/photo-1563720360172-67b8f3dce741?q=80&w=800' },
              { name: 'BMW 7 Series', price: '$110/hr', image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=800' },
              { name: 'Audi A8', price: '$115/hr', image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?q=80&w=800' }
            ].map((car, i) => (
              <div key={i} style={{
                backgroundColor: '#1a1a1a',
                borderRadius: '8px',
                overflow: 'hidden'
              }}>
                <img src={car.image} alt={car.name} style={{
                  width: '100%',
                  height: '200px',
                  objectFit: 'cover'
                }} />
                <div style={{ padding: '1.5rem' }}>
                  <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>{car.name}</h3>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '1.5rem', color: '#D4AF37', fontWeight: '700' }}>{car.price}</span>
                    <button style={{
                      backgroundColor: '#D4AF37',
                      color: '#0a0a0a',
                      padding: '0.75rem 1.5rem',
                      border: 'none',
                      borderRadius: '20px',
                      fontSize: '0.85rem',
                      fontWeight: '600',
                      cursor: 'pointer'
                    }}>
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section style={{
        padding: '100px 3rem',
        backgroundColor: '#f5f5f5',
        color: '#0a0a0a'
      }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: '300',
            textAlign: 'center',
            marginBottom: '3rem'
          }}>
            Luxury At The Touch, Reserved For You
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '2rem'
          }}>
            {[
              { plan: 'BASIC', price: '$99', features: ['3 Hours Service', 'Airport Transfer', 'Professional Driver', 'WiFi Available'] },
              { plan: 'PREMIUM', price: '$199', features: ['6 Hours Service', 'City Tours', 'VIP Treatment', 'Refreshments'] },
              { plan: 'PLATINUM', price: '$299', features: ['Full Day Service', 'Multiple Stops', 'Luxury Fleet', 'Concierge Service'] }
            ].map((pkg, i) => (
              <div key={i} style={{
                backgroundColor: 'white',
                padding: '2.5rem',
                borderRadius: '8px',
                border: i === 1 ? '2px solid #D4AF37' : '1px solid #e0e0e0'
              }}>
                <h3 style={{ fontSize: '1.1rem', fontWeight: '700', marginBottom: '1rem', color: '#D4AF37' }}>
                  {pkg.plan}
                </h3>
                <div style={{ fontSize: '3rem', fontWeight: '700', marginBottom: '1.5rem' }}>
                  {pkg.price}
                  <span style={{ fontSize: '1rem', fontWeight: '400', color: '#666' }}>/day</span>
                </div>
                <ul style={{ listStyle: 'none', padding: 0, marginBottom: '2rem' }}>
                  {pkg.features.map((feature, j) => (
                    <li key={j} style={{
                      padding: '0.75rem 0',
                      borderBottom: '1px solid #f0f0f0',
                      fontSize: '0.9rem',
                      color: '#666'
                    }}>
                      ✓ {feature}
                    </li>
                  ))}
                </ul>
                <button style={{
                  backgroundColor: '#D4AF37',
                  color: '#0a0a0a',
                  padding: '1rem',
                  border: 'none',
                  borderRadius: '25px',
                  fontSize: '0.9rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  width: '100%'
                }}>
                  Choose Plan
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        padding: '100px 3rem',
        background: 'linear-gradient(to right, rgba(0,0,0,0.8), rgba(0,0,0,0.5)), url(https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=2070) center/cover',
        textAlign: 'center'
      }}>
        <h2 style={{
          fontSize: '3rem',
          fontWeight: '300',
          marginBottom: '1rem'
        }}>
          Chauffeur Elegance, Ride In Luxury
        </h2>
        <p style={{
          fontSize: '1.1rem',
          opacity: 0.8,
          marginBottom: '2.5rem'
        }}>
          Book your premium ride today
        </p>
        <button style={{
          backgroundColor: '#D4AF37',
          color: '#0a0a0a',
          padding: '1.2rem 3rem',
          border: 'none',
          borderRadius: '30px',
          fontSize: '1rem',
          fontWeight: '600',
          cursor: 'pointer'
        }}>
          Reserve Now
        </button>
      </section>

      {/* Footer */}
      <footer style={{
        backgroundColor: '#0a0a0a',
        padding: '60px 3rem 30px',
        borderTop: '1px solid rgba(255,255,255,0.1)'
      }}>
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '3rem',
          marginBottom: '3rem'
        }}>
          <div>
            <div style={{ fontSize: '1.5rem', fontWeight: '700', color: '#D4AF37', marginBottom: '1rem' }}>
              LIMOAN
            </div>
            <p style={{ fontSize: '0.9rem', opacity: 0.7, lineHeight: '1.6' }}>
              Premium limousine services for discerning clients who demand excellence.
            </p>
          </div>
          <div>
            <h4 style={{ fontSize: '1rem', marginBottom: '1rem', color: '#D4AF37' }}>Quick Links</h4>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {['About Us', 'Services', 'Fleet', 'Contact'].map((link, i) => (
                <li key={i} style={{ marginBottom: '0.5rem' }}>
                  <a href="#" style={{ color: 'white', textDecoration: 'none', fontSize: '0.9rem', opacity: 0.7 }}>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 style={{ fontSize: '1rem', marginBottom: '1rem', color: '#D4AF37' }}>Services</h4>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {['Airport Transfer', 'Corporate Events', 'Wedding Services', 'City Tours'].map((service, i) => (
                <li key={i} style={{ marginBottom: '0.5rem', fontSize: '0.9rem', opacity: 0.7 }}>
                  {service}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 style={{ fontSize: '1rem', marginBottom: '1rem', color: '#D4AF37' }}>Contact</h4>
            <p style={{ fontSize: '0.9rem', opacity: 0.7, marginBottom: '0.5rem' }}>
              📞 +1 (555) 123-4567
            </p>
            <p style={{ fontSize: '0.9rem', opacity: 0.7, marginBottom: '0.5rem' }}>
              ✉️ info@limoan.com
            </p>
            <p style={{ fontSize: '0.9rem', opacity: 0.7 }}>
              📍 123 Luxury Ave, City
            </p>
          </div>
        </div>
        <div style={{
          textAlign: 'center',
          paddingTop: '2rem',
          borderTop: '1px solid rgba(255,255,255,0.1)',
          fontSize: '0.85rem',
          opacity: 0.6
        }}>
          © 2024 LIMOAN. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default Home;
