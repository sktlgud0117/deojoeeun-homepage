import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { Menu, X, Search, ShoppingBag, Phone, Mail, MapPin } from 'lucide-react';
import './index.css';

function EcommerceSite() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('전체');
  const [searchTerm, setSearchTerm] = useState('');

  const products = [
    {
      id: 1,
      name: '식품 상품 1',
      category: '식품류',
      image: 'https://via.placeholder.com/300x300?text=식품1',
      description: '고급 식품'
    },
    {
      id: 2,
      name: '식품 상품 2',
      category: '식품류',
      image: 'https://via.placeholder.com/300x300?text=식품2',
      description: '신선한 식품'
    },
    {
      id: 3,
      name: '일용품 상품 1',
      category: '일용품',
      image: 'https://via.placeholder.com/300x300?text=일용품1',
      description: '생활용품'
    },
    {
      id: 4,
      name: '일용품 상품 2',
      category: '일용품',
      image: 'https://via.placeholder.com/300x300?text=일용품2',
      description: '위생용품'
    },
    {
      id: 5,
      name: '가구 상품 1',
      category: '가구',
      image: 'https://via.placeholder.com/300x300?text=가구1',
      description: '모던 가구'
    },
    {
      id: 6,
      name: '가구 상품 2',
      category: '가구',
      image: 'https://via.placeholder.com/300x300?text=가구2',
      description: '디자인 가구'
    }
  ];

  const categories = ['전체', '식품류', '일용품', '가구'];

  const filteredProducts = products.filter(product => {
    const matchCategory = selectedCategory === '전체' || product.category === selectedCategory;
    const matchSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#fff' }}>
      {/* Navigation */}
      <nav style={{
        position: 'fixed',
        width: '100%',
        backgroundColor: '#fff',
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
        zIndex: 50,
        top: 0
      }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 1rem' }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            height: '64px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <ShoppingBag size={32} color="#2563eb" />
              <div style={{
                fontSize: '24px',
                fontWeight: 'bold',
                color: '#2563eb'
              }}>
                더조은컴퍼니
              </div>
            </div>

            <div style={{
              display: 'flex',
              gap: '2rem',
              alignItems: 'center'
            }}>
              <a href="#products" style={{
                color: '#374151',
                textDecoration: 'none',
                fontWeight: '600',
                cursor: 'pointer'
              }}>상품</a>
              <a href="#about" style={{
                color: '#374151',
                textDecoration: 'none',
                fontWeight: '600',
                cursor: 'pointer'
              }}>회사소개</a>
              <a href="#contact" style={{
                color: '#374151',
                textDecoration: 'none',
                fontWeight: '600',
                cursor: 'pointer'
              }}>문의</a>
            </div>

            <button onClick={() => setIsMenuOpen(!isMenuOpen)} style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer'
            }}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {isMenuOpen && (
            <div style={{
              paddingBottom: '1rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem'
            }}>
              <a href="#products" style={{
                color: '#374151',
                textDecoration: 'none'
              }}>상품</a>
              <a href="#about" style={{
                color: '#374151',
                textDecoration: 'none'
              }}>회사소개</a>
              <a href="#contact" style={{
                color: '#374151',
                textDecoration: 'none'
              }}>문의</a>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section style={{
        paddingTop: '128px',
        paddingBottom: '48px',
        background: 'linear-gradient(to right, #eff6ff, #e0e7ff)',
        padding: '128px 16px 48px'
      }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto', textAlign: 'center' }}>
          <h1 style={{
            fontSize: '48px',
            fontWeight: 'bold',
            color: '#111827',
            marginBottom: '16px'
          }}>
            더조은컴퍼니
          </h1>
          <p style={{
            fontSize: '20px',
            color: '#4b5563',
            marginBottom: '32px'
          }}>
            믿을 수 있는 유통 전문회사
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" style={{
        padding: '64px 16px'
      }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '36px',
            fontWeight: 'bold',
            color: '#111827',
            marginBottom: '32px',
            textAlign: 'center'
          }}>
            유통 상품
          </h2>

          {/* Search Bar */}
          <div style={{
            marginBottom: '32px',
            maxWidth: '512px',
            margin: '0 auto 32px'
          }}>
            <div style={{ position: 'relative' }}>
              <Search size={20} style={{
                position: 'absolute',
                left: '16px',
                top: '12px',
                color: '#9ca3af'
              }} />
              <input
                type="text"
                placeholder="상품 검색..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{
                  width: '100%',
                  paddingLeft: '48px',
                  paddingRight: '16px',
                  paddingTop: '12px',
                  paddingBottom: '12px',
                  border: '2px solid #d1d5db',
                  borderRadius: '8px',
                  outline: 'none'
                }}
              />
            </div>
          </div>

          {/* Category Filter */}
          <div style={{
            display: 'flex',
            gap: '12px',
            marginBottom: '32px',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                style={{
                  paddingLeft: '24px',
                  paddingRight: '24px',
                  paddingTop: '8px',
                  paddingBottom: '8px',
                  borderRadius: '9999px',
                  fontWeight: '600',
                  border: 'none',
                  cursor: 'pointer',
                  backgroundColor: selectedCategory === category ? '#2563eb' : '#e5e7eb',
                  color: selectedCategory === category ? '#fff' : '#374151'
                }}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '32px'
          }}>
            {filteredProducts.length > 0 ? (
              filteredProducts.map(product => (
                <div key={product.id} style={{
                  backgroundColor: '#fff',
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
                }}>
                  <div style={{
                    width: '100%',
                    height: '256px',
                    backgroundColor: '#f3f4f6',
                    overflow: 'hidden'
                  }}>
                    <img
                      src={product.image}
                      alt={product.name}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                      }}
                    />
                  </div>

                  <div style={{ padding: '24px' }}>
                    <p style={{
                      fontSize: '14px',
                      color: '#2563eb',
                      fontWeight: '600',
                      marginBottom: '8px'
                    }}>
                      {product.category}
                    </p>
                    <h3 style={{
                      fontSize: '20px',
                      fontWeight: 'bold',
                      color: '#111827',
                      marginBottom: '8px'
                    }}>
                      {product.name}
                    </h3>
                    <p style={{
                      color: '#4b5563',
                      marginBottom: '16px'
                    }}>
                      {product.description}
                    </p>
                    <button style={{
                      width: '100%',
                      backgroundColor: '#2563eb',
                      color: '#fff',
                      fontWeight: '600',
                      paddingTop: '8px',
                      paddingBottom: '8px',
                      borderRadius: '6px',
                      border: 'none',
                      cursor: 'pointer'
                    }}>
                      문의하기
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div style={{
                gridColumn: '1 / -1',
                textAlign: 'center',
                paddingTop: '48px',
                paddingBottom: '48px'
              }}>
                <p style={{
                  color: '#6b7280',
                  fontSize: '18px'
                }}>
                  상품을 찾을 수 없습니다.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" style={{
        padding: '64px 16px',
        backgroundColor: '#f9fafb'
      }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '36px',
            fontWeight: 'bold',
            color: '#111827',
            marginBottom: '48px',
            textAlign: 'center'
          }}>
            회사소개
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '48px',
            alignItems: 'center'
          }}>
            <div style={{
              backgroundColor: '#2563eb',
              borderRadius: '8px',
              height: '320px'
            }}></div>
            <div>
              <p style={{
                fontSize: '18px',
                color: '#374151',
                marginBottom: '24px'
              }}>
                더조은컴퍼니는 다양한 상품을 효율적으로 공급하는 신뢰할 수 있는 유통회사입니다.
              </p>
              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: 0
              }}>
                <li style={{
                  color: '#374151',
                  marginBottom: '16px'
                }}>
                  ✓ 다양한 카테고리의 상품 취급
                </li>
                <li style={{
                  color: '#374151',
                  marginBottom: '16px'
                }}>
                  ✓ 안정적이고 빠른 배송
                </li>
                <li style={{
                  color: '#374151',
                  marginBottom: '16px'
                }}>
                  ✓ 전국 네트워크
                </li>
                <li style={{
                  color: '#374151'
                }}>
                  ✓ 전문적인 고객 서비스
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" style={{
        padding: '64px 16px',
        background: 'linear-gradient(to right, #2563eb, #1e40af)',
        color: '#fff'
      }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '36px',
            fontWeight: 'bold',
            marginBottom: '48px',
            textAlign: 'center'
          }}>
            문의하기
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '32px',
            marginBottom: '48px'
          }}>
            <div style={{ textAlign: 'center' }}>
              <Phone size={48} style={{ margin: '0 auto 16px' }} />
              <h3 style={{
                fontSize: '20px',
                fontWeight: 'bold',
                marginBottom: '8px'
              }}>
                전화
              </h3>
              <p style={{ fontSize: '18px' }}>02-1234-5678</p>
              <p style={{
                fontSize: '14px',
                opacity: 0.9
              }}>
                평일 09:00 ~ 18:00
              </p>
            </div>

            <div style={{ textAlign: 'center' }}>
              <Mail size={48} style={{ margin: '0 auto 16px' }} />
              <h3 style={{
                fontSize: '20px',
                fontWeight: 'bold',
                marginBottom: '8px'
              }}>
                이메일
              </h3>
              <p style={{ fontSize: '18px' }}>info@deojoeeun.co.kr</p>
            </div>

            <div style={{ textAlign: 'center' }}>
              <MapPin size={48} style={{ margin: '0 auto 16px' }} />
              <h3 style={{
                fontSize: '20px',
                fontWeight: 'bold',
                marginBottom: '8px'
              }}>
                주소
              </h3>
              <p style={{ fontSize: '18px' }}>서울시 강남구 테헤란로 123</p>
            </div>
          </div>

          <div style={{ textAlign: 'center' }}>
            <a
              href="mailto:info@deojoeeun.co.kr"
              style={{
                display: 'inline-block',
                backgroundColor: '#fff',
                color: '#2563eb',
                fontWeight: 'bold',
                paddingTop: '12px',
                paddingBottom: '12px',
                paddingLeft: '32px',
                paddingRight: '32px',
                borderRadius: '8px',
                textDecoration: 'none',
                cursor: 'pointer'
              }}
            >
              이메일 문의하기
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        backgroundColor: '#111827',
        color: '#9ca3af',
        paddingTop: '32px',
        paddingBottom: '32px',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
          <p>&copy; 2024 더조은컴퍼니. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<EcommerceSite />);
