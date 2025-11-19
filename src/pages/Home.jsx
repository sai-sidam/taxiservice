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
        <img src="/logo.png" alt="Ride With Carlos" style={{ height: '70px' }} />
        <nav style={{ display: 'flex', gap: '2.5rem', fontSize: '0.9rem' }}>
          <a href="#" style={{ color: 'white', textDecoration: 'none' }}>Home</a>
          <a href="#services" style={{ color: 'white', textDecoration: 'none' }}>Services</a>
          <a href="#vehicles" style={{ color: 'white', textDecoration: 'none' }}>Vehicles</a>
          <a href="#about" style={{ color: 'white', textDecoration: 'none' }}>About</a>
          <a href="#contact" style={{ color: 'white', textDecoration: 'none' }}>Contact</a>
        </nav>
        <a href="tel:+15551234567" style={{
          backgroundColor: '#FFC107',
          color: '#0a0a0a',
          padding: '0.75rem 1.5rem',
          borderRadius: '8px',
          cursor: 'pointer',
          fontSize: '0.9rem',
          fontWeight: '600',
          textDecoration: 'none'
        }}>
          📞 Call Now
        </a>
      </header>

      {/* Hero Section */}
      <section style={{
        position: 'relative',
        minHeight: '700px',
        background: 'linear-gradient(to right, rgba(0,0,0,0.85), rgba(0,0,0,0.4)), url(https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=2070) center/cover',
        display: 'flex',
        alignItems: 'center',
        padding: '80px 3rem'
      }}>
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
          width: '100%',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '4rem',
          alignItems: 'center'
        }}>
          <div>
            <h1 style={{
              fontSize: '3.5rem',
              fontWeight: '700',
              lineHeight: '1.2',
              marginBottom: '1rem',
              color: 'white'
            }}>
              Reliable Rides. Right on Time.
            </h1>
            <p style={{
              fontSize: '1.2rem',
              opacity: 0.9,
              marginBottom: '2rem',
              lineHeight: '1.6'
            }}>
              Airport transfers, home pickups, group trips, and long-distance rides — always safe, comfortable, and on schedule.
            </p>
            <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
              <a href="tel:+15551234567" style={{
                backgroundColor: '#FFC107',
                color: '#0a0a0a',
                padding: '1rem 2rem',
                border: 'none',
                borderRadius: '8px',
                fontSize: '1rem',
                fontWeight: '600',
                cursor: 'pointer',
                textDecoration: 'none',
                display: 'inline-block'
              }}>
                📞 Call Now
              </a>
              <a href="https://wa.me/15551234567" target="_blank" rel="noopener noreferrer" style={{
                backgroundColor: '#25D366',
                color: 'white',
                padding: '1rem 2rem',
                border: 'none',
                borderRadius: '8px',
                fontSize: '1rem',
                fontWeight: '600',
                cursor: 'pointer',
                textDecoration: 'none',
                display: 'inline-block'
              }}>
                💬 WhatsApp
              </a>
            </div>
          </div>
          
          {/* Booking Form */}
          <div style={{
            backgroundColor: 'white',
            padding: '2.5rem',
            borderRadius: '12px',
            boxShadow: '0 10px 40px rgba(0,0,0,0.3)'
          }}>
            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: '700',
              color: '#0a0a0a',
              marginBottom: '1.5rem'
            }}>
              Book Your Ride
            </h3>
            <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <input
                type="text"
                placeholder="Pickup Location"
                style={{
                  padding: '1rem',
                  border: '1px solid #ddd',
                  borderRadius: '6px',
                  fontSize: '1rem'
                }}
              />
              <input
                type="text"
                placeholder="Drop-off Location"
                style={{
                  padding: '1rem',
                  border: '1px solid #ddd',
                  borderRadius: '6px',
                  fontSize: '1rem'
                }}
              />
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <input
                  type="date"
                  style={{
                    padding: '1rem',
                    border: '1px solid #ddd',
                    borderRadius: '6px',
                    fontSize: '1rem'
                  }}
                />
                <input
                  type="time"
                  style={{
                    padding: '1rem',
                    border: '1px solid #ddd',
                    borderRadius: '6px',
                    fontSize: '1rem'
                  }}
                />
              </div>
              <input
                type="tel"
                placeholder="Phone Number"
                style={{
                  padding: '1rem',
                  border: '1px solid #ddd',
                  borderRadius: '6px',
                  fontSize: '1rem'
                }}
              />
              <button
                type="submit"
                style={{
                  backgroundColor: '#FFC107',
                  color: '#0a0a0a',
                  padding: '1.2rem',
                  border: 'none',
                  borderRadius: '6px',
                  fontSize: '1.1rem',
                  fontWeight: '700',
                  cursor: 'pointer'
                }}
              >
                Book Now
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" style={{
        padding: '100px 3rem',
        backgroundColor: '#f8f8f8'
      }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: '700',
            textAlign: 'center',
            marginBottom: '1rem',
            color: '#0a0a0a'
          }}>
            Our Services
          </h2>
          <p style={{
            textAlign: 'center',
            fontSize: '1.1rem',
            color: '#666',
            marginBottom: '3rem'
          }}>
            Safe, reliable transportation for every need
          </p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '2rem'
          }}>
            {[
              { icon: '✈️', title: 'Airport Pickups & Drop-offs', desc: 'All NYC airports - JFK, LaGuardia, Newark. On-time service guaranteed.' },
              { icon: '🏠', title: 'Home Pickups', desc: 'Door-to-door service from your home to anywhere you need to go.' },
              { icon: '👥', title: 'Group Trips', desc: 'Comfortable transportation for 2 to 15 passengers with our spacious vans.' },
              { icon: '🗺️', title: 'Long-Distance Trips', desc: 'Niagara Falls, Toronto, Disney Florida, and more. We go the distance.' },
              { icon: '♿', title: 'Wheelchair-Accessible Rides', desc: 'Fully accessible vehicles for passengers with mobility needs.' },
              { icon: '👶', title: 'Car Seats Available', desc: 'Child safety seats provided by request for families traveling with kids.' }
            ].map((item, i) => (
              <div key={i} style={{
                backgroundColor: 'white',
                padding: '2rem',
                borderRadius: '12px',
                boxShadow: '0 2px 10px rgba(0,0,0,0.08)',
                textAlign: 'center',
                border: '1px solid #e0e0e0'
              }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{item.icon}</div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '0.75rem', color: '#0a0a0a' }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '0.95rem', color: '#666', lineHeight: '1.6' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Vehicles Section */}
      <section id="vehicles" style={{
        padding: '100px 3rem',
        backgroundColor: 'white'
      }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: '700',
            textAlign: 'center',
            marginBottom: '3rem',
            color: '#0a0a0a'
          }}>
            Our Vehicles
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '2rem'
          }}>
            {[
              { name: '15-Passenger Van', desc: 'Perfect for large groups, airport shuttles, and long-distance trips with plenty of luggage space.', image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=800' },
              { name: 'Suburban SUV', desc: 'Spacious and comfortable for families or small groups. Ideal for airport transfers and city rides.', image: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=800' },
              { name: 'Compact Car', desc: 'Efficient and affordable for solo travelers or couples. Great for quick trips around the city.', image: 'https://images.unsplash.com/photo-1583508915901-b5f84c1dcde1?q=80&w=800' }
            ].map((vehicle, i) => (
              <div key={i} style={{
                backgroundColor: '#f8f8f8',
                borderRadius: '12px',
                overflow: 'hidden',
                boxShadow: '0 2px 10px rgba(0,0,0,0.08)'
              }}>
                <img src={vehicle.image} alt={vehicle.name} style={{
                  width: '100%',
                  height: '220px',
                  objectFit: 'cover'
                }} />
                <div style={{ padding: '2rem' }}>
                  <h3 style={{ fontSize: '1.3rem', fontWeight: '700', marginBottom: '0.75rem', color: '#0a0a0a' }}>
                    {vehicle.name}
                  </h3>
                  <p style={{ fontSize: '0.95rem', color: '#666', lineHeight: '1.6' }}>
                    {vehicle.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" style={{
        padding: '100px 3rem',
        backgroundColor: '#0a0a0a',
        color: 'white'
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
            <img 
              src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=1000"
              alt="Carlos Taxi Services"
              style={{ width: '100%', borderRadius: '12px' }}
            />
          </div>
          <div>
            <h2 style={{
              fontSize: '2.5rem',
              fontWeight: '700',
              marginBottom: '1.5rem'
            }}>
              About Us
            </h2>
            <p style={{
              fontSize: '1.1rem',
              lineHeight: '1.8',
              opacity: 0.9,
              marginBottom: '2rem'
            }}>
              For over 11 years, we've provided safe, reliable, and friendly transportation. 
              We offer wheelchair-accessible rides, car seats for families, and long-distance group trips. 
              Our customers trust us because we don't cut corners, and our goal is 100% satisfaction on every ride.
            </p>
            <div style={{ display: 'flex', gap: '3rem', marginBottom: '2rem' }}>
              <div>
                <div style={{ fontSize: '2.5rem', fontWeight: '700', color: '#FFC107' }}>11+</div>
                <div style={{ fontSize: '0.95rem', opacity: 0.8 }}>Years of Service</div>
              </div>
              <div>
                <div style={{ fontSize: '2.5rem', fontWeight: '700', color: '#FFC107' }}>100%</div>
                <div style={{ fontSize: '0.95rem', opacity: 0.8 }}>Satisfaction Goal</div>
              </div>
              <div>
                <div style={{ fontSize: '2.5rem', fontWeight: '700', color: '#FFC107' }}>24/7</div>
                <div style={{ fontSize: '0.95rem', opacity: 0.8 }}>Available</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section style={{
        padding: '100px 3rem',
        backgroundColor: '#f8f8f8'
      }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: '700',
            textAlign: 'center',
            marginBottom: '1rem',
            color: '#0a0a0a'
          }}>
            What Our Customers Say
          </h2>
          <p style={{
            textAlign: 'center',
            fontSize: '1.1rem',
            color: '#666',
            marginBottom: '3rem'
          }}>
            Real reviews from real customers
          </p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '2rem'
          }}>
            {[
              { name: 'Maria Rodriguez', review: 'They have been driving my family for years. Always on time, always professional. The wheelchair-accessible van made it so easy for my mother to travel comfortably.', rating: 5 },
              { name: 'John Smith', review: 'Best taxi service in the area! Used them for our trip to Niagara Falls with 12 people. The van was spotless and the driver was fantastic. Highly recommend!', rating: 5 },
              { name: 'Sarah Johnson', review: 'I always call them for airport rides. Never missed a flight! They track your flight and adjust pickup time if needed. That\'s real service.', rating: 5 }
            ].map((testimonial, i) => (
              <div key={i} style={{
                backgroundColor: 'white',
                padding: '2rem',
                borderRadius: '12px',
                boxShadow: '0 2px 10px rgba(0,0,0,0.08)'
              }}>
                <div style={{ marginBottom: '1rem' }}>
                  {Array(testimonial.rating).fill('⭐').map((star, j) => (
                    <span key={j} style={{ color: '#FFC107', fontSize: '1.2rem' }}>{star}</span>
                  ))}
                </div>
                <p style={{
                  fontSize: '0.95rem',
                  color: '#333',
                  lineHeight: '1.7',
                  marginBottom: '1.5rem',
                  fontStyle: 'italic'
                }}>
                  "{testimonial.review}"
                </p>
                <div style={{ fontWeight: '700', color: '#0a0a0a' }}>
                  {testimonial.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" style={{
        padding: '100px 3rem',
        background: 'linear-gradient(to right, rgba(0,0,0,0.8), rgba(0,0,0,0.5)), url(https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=2070) center/cover',
        textAlign: 'center'
      }}>
        <h2 style={{
          fontSize: '3rem',
          fontWeight: '700',
          marginBottom: '1rem'
        }}>
          Ready to Ride with Us?
        </h2>
        <p style={{
          fontSize: '1.2rem',
          opacity: 0.9,
          marginBottom: '2.5rem'
        }}>
          Book your ride today - call or text us now
        </p>
        <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center' }}>
          <a href="tel:+15551234567" style={{
            backgroundColor: '#FFC107',
            color: '#0a0a0a',
            padding: '1.2rem 3rem',
            border: 'none',
            borderRadius: '8px',
            fontSize: '1.1rem',
            fontWeight: '700',
            cursor: 'pointer',
            textDecoration: 'none',
            display: 'inline-block'
          }}>
            📞 Call: (555) 123-4567
          </a>
          <a href="https://wa.me/15551234567" target="_blank" rel="noopener noreferrer" style={{
            backgroundColor: '#25D366',
            color: 'white',
            padding: '1.2rem 3rem',
            border: 'none',
            borderRadius: '8px',
            fontSize: '1.1rem',
            fontWeight: '700',
            cursor: 'pointer',
            textDecoration: 'none',
            display: 'inline-block'
          }}>
            💬 WhatsApp Us
          </a>
        </div>
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
            <img src="/logo.png" alt="Ride With Carlos" style={{ height: '60px', marginBottom: '1rem' }} />
            <p style={{ fontSize: '0.9rem', opacity: 0.7, lineHeight: '1.6' }}>
              Reliable, safe, and friendly taxi service for over 11 years. Your satisfaction is our priority.
            </p>
          </div>
          <div>
            <h4 style={{ fontSize: '1rem', marginBottom: '1rem', color: '#FFC107' }}>Quick Links</h4>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {['Home', 'Services', 'Vehicles', 'About', 'Contact'].map((link, i) => (
                <li key={i} style={{ marginBottom: '0.5rem' }}>
                  <a href={`#${link.toLowerCase()}`} style={{ color: 'white', textDecoration: 'none', fontSize: '0.9rem', opacity: 0.7 }}>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 style={{ fontSize: '1rem', marginBottom: '1rem', color: '#FFC107' }}>Services</h4>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {['Airport Transfer', 'Home Pickups', 'Group Trips', 'Long Distance', 'Wheelchair Access'].map((service, i) => (
                <li key={i} style={{ marginBottom: '0.5rem', fontSize: '0.9rem', opacity: 0.7 }}>
                  {service}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 style={{ fontSize: '1rem', marginBottom: '1rem', color: '#FFC107' }}>Contact</h4>
            <p style={{ fontSize: '0.9rem', opacity: 0.7, marginBottom: '0.5rem' }}>
              📞 (555) 123-4567
            </p>
            <p style={{ fontSize: '0.9rem', opacity: 0.7, marginBottom: '0.5rem' }}>
              ✉️ info@ridewithcarlos.com
            </p>
            <p style={{ fontSize: '0.9rem', opacity: 0.7, marginBottom: '1rem' }}>
              📍 New York, NY
            </p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <a href="tel:+15551234567" style={{
                backgroundColor: '#FFC107',
                color: '#0a0a0a',
                padding: '0.5rem 1rem',
                borderRadius: '6px',
                textDecoration: 'none',
                fontSize: '0.85rem',
                fontWeight: '600'
              }}>
                Call
              </a>
              <a href="https://wa.me/15551234567" target="_blank" rel="noopener noreferrer" style={{
                backgroundColor: '#25D366',
                color: 'white',
                padding: '0.5rem 1rem',
                borderRadius: '6px',
                textDecoration: 'none',
                fontSize: '0.85rem',
                fontWeight: '600'
              }}>
                WhatsApp
              </a>
            </div>
          </div>
        </div>
        <div style={{
          textAlign: 'center',
          paddingTop: '2rem',
          borderTop: '1px solid rgba(255,255,255,0.1)',
          fontSize: '0.85rem',
          opacity: 0.6
        }}>
          © 2024 Ride With Carlos. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default Home;
