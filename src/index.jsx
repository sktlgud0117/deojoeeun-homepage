import React, { useState } from 'react';
import { Menu, X, Search, ShoppingBag, Phone, Mail, MapPin } from 'lucide-react';

export default function EcommerceSite() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('전체');
  const [searchTerm, setSearchTerm] = useState('');

  // 상품 데이터 - 여기서 쉽게 추가/삭제 가능
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

  // 필터링 로직
  const filteredProducts = products.filter(product => {
    const matchCategory = selectedCategory === '전체' || product.category === selectedCategory;
    const matchSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <ShoppingBag className="text-blue-600" size={32} />
              <div className="text-2xl font-bold text-blue-600">더조은컴퍼니</div>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex gap-8">
              <a href="#products" className="text-gray-700 hover:text-blue-600 transition font-semibold">상품</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition font-semibold">회사소개</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition font-semibold">문의</a>
            </div>

            {/* Mobile Menu Button */}
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden pb-4 flex flex-col gap-4">
              <a href="#products" className="text-gray-700 hover:text-blue-600">상품</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600">회사소개</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600">문의</a>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-gradient-to-r from-blue-50 to-indigo-50 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">더조은컴퍼니</h1>
          <p className="text-xl text-gray-600 mb-8">믿을 수 있는 유통 전문회사</p>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">유통 상품</h2>

          {/* Search Bar */}
          <div className="mb-8 max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-4 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="상품 검색..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
              />
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex gap-3 mb-8 overflow-x-auto pb-2 justify-center flex-wrap">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-semibold whitespace-nowrap transition ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.length > 0 ? (
              filteredProducts.map(product => (
                <div key={product.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition">
                  {/* Product Image */}
                  <div className="w-full h-64 bg-gray-100 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover hover:scale-105 transition"
                    />
                  </div>
                  
                  {/* Product Info */}
                  <div className="p-6">
                    <p className="text-sm text-blue-600 font-semibold mb-2">{product.category}</p>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                    <p className="text-gray-600 mb-4">{product.description}</p>
                    <button className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition">
                      문의하기
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-gray-500 text-lg">상품을 찾을 수 없습니다.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">회사소개</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-blue-600 rounded-lg h-80"></div>
            <div>
              <p className="text-lg text-gray-700 mb-6">
                더조은컴퍼니는 다양한 상품을 효율적으로 공급하는 신뢰할 수 있는 유통회사입니다.
              </p>
              <ul className="space-y-4">
                <li className="text-gray-700">✓ 다양한 카테고리의 상품 취급</li>
                <li className="text-gray-700">✓ 안정적이고 빠른 배송</li>
                <li className="text-gray-700">✓ 전국 네트워크</li>
                <li className="text-gray-700">✓ 전문적인 고객 서비스</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">문의하기</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Phone size={48} className="mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">전화</h3>
              <p className="text-lg">02-1234-5678</p>
              <p className="text-sm opacity-90">평일 09:00 ~ 18:00</p>
            </div>
            
            <div className="text-center">
              <Mail size={48} className="mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">이메일</h3>
              <p className="text-lg break-all">info@deojoeeun.co.kr</p>
            </div>
            
            <div className="text-center">
              <MapPin size={48} className="mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">주소</h3>
              <p className="text-lg">서울시 강남구 테헤란로 123</p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <a 
              href="mailto:info@deojoeeun.co.kr"
              className="inline-block bg-white text-blue-600 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition"
            >
              이메일 문의하기
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p>&copy; 2024 더조은컴퍼니. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
