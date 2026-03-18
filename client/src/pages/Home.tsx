import { useState } from 'react';
import FloatingParticles from '@/components/FloatingParticles';
import Countdown from '@/components/Countdown';

export default function Home() {
  const [showMessage, setShowMessage] = useState(false);

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <FloatingParticles />

      {/* Section 1: Hero with Lanterns and Moon */}
      <section
        className="eid-section relative"
        style={{
          background: 'linear-gradient(135deg, #FFE4F0 0%, #FFF9E6 50%, #FFE4F0 100%)',
        }}
      >
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          {/* Decorative Elements */}
          <div className="absolute top-12 left-8 text-5xl animate-bounce">✨</div>
          <div className="absolute top-20 right-12 text-4xl float">✨</div>

          {/* Moon */}
          <div className="flex justify-center mb-8">
            <span className="text-8xl float">🌙</span>
          </div>

          {/* Lanterns */}
          <div className="flex justify-center gap-8 mb-12">
            <span className="text-6xl animate-bounce" style={{ animationDelay: '0s' }}>
              🏮
            </span>
            <span className="text-6xl animate-bounce" style={{ animationDelay: '0.2s' }}>
              🏮
            </span>
            <span className="text-6xl animate-bounce" style={{ animationDelay: '0.4s' }}>
              🏮
            </span>
          </div>

          {/* Main Title */}
          <h1 className="eid-title mb-8">
            كل عيد وأنتِ أحلى بنوتة في الدنيا يا حبيبتي
          </h1>

          {/* Decorative Line with Rose */}
          <div className="flex justify-center items-center gap-4 mb-8">
            <span className="text-3xl">━━━</span>
            <span className="text-4xl">🌹</span>
            <span className="text-4xl">💛</span>
            <span className="text-3xl">━━━</span>
          </div>

          {/* Secondary Text */}
          <div className="space-y-4 mb-8">
            <p className="eid-subtitle">كل عيد وأنتِ أحلى بنوتة في الدنيا يا حبيبتي</p>
            <p className="text-2xl" style={{ color: '#FFD700', fontFamily: 'Amiri, serif' }}>
              تسرتوا البيشا
            </p>
          </div>

          {/* Scattered Hearts and Emojis */}
          <div className="absolute bottom-20 left-12 text-3xl float">💕</div>
          <div className="absolute bottom-32 right-8 text-2xl animate-bounce">💛</div>
        </div>
      </section>

      {/* Section 2: Photo Frame */}
      <section
        className="eid-section relative"
        style={{
          background: 'linear-gradient(135deg, #FFE4F0 0%, #FFFACD 100%)',
        }}
      >
        <div className="relative z-10 w-full max-w-4xl px-4 mx-auto">
          {/* Top Title */}
          <h2 className="eid-subtitle mb-8 flex justify-center items-center gap-4">
            <span>✨</span>
            <span>عيد فطر سعيد يا أغلى الناس</span>
            <span>✨</span>
          </h2>

          {/* Decorative Lines with Hearts */}
          <div className="flex justify-center items-center gap-4 mb-12">
            <span className="text-2xl">━━━━</span>
            <span className="text-3xl">❤️</span>
            <span className="text-2xl">━━━━</span>
            <span className="text-3xl">❤️</span>
            <span className="text-2xl">━━━━</span>
          </div>

          {/* Heart Frame Photo */}
          <div className="flex justify-center mb-12">
            <div className="heart-frame">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop"
                alt="صورة خاصة"
              />
            </div>
          </div>

          {/* Scattered Decorations */}
          <div className="absolute top-32 left-8 text-3xl float">💕</div>
          <div className="absolute top-40 right-12 text-2xl animate-bounce">✨</div>
          <div className="absolute bottom-32 left-16 text-2xl float">🌹</div>
          <div className="absolute bottom-40 right-20 text-3xl animate-bounce">💛</div>
        </div>
      </section>

      {/* Section 3: Interactive Button */}
      <section
        className="eid-section relative"
        style={{
          background: 'linear-gradient(135deg, #FFFACD 0%, #FFD700 50%, #FFFACD 100%)',
        }}
      >
        <div className="relative z-10 w-full max-w-3xl px-4 mx-auto text-center">
          {/* Top Message */}
          <p className="eid-subtitle mb-8">وعيدك سعيد يا أحلى حاجة حصلتلي</p>

          {/* Decorative Elements */}
          <div className="flex justify-center gap-6 mb-12">
            <span className="text-4xl">🌹</span>
            <span className="text-4xl">💛</span>
            <span className="text-4xl">🌹</span>
          </div>

          {/* Main Button */}
          <button
            onClick={() => setShowMessage(!showMessage)}
            className="eid-button mb-8 mx-auto block"
          >
            اضغطي هنا لو بتحبيني برضو ❤️
          </button>

          {/* Message Box */}
          {showMessage && (
            <div
              className="rounded-3xl p-8 md:p-12 shadow-2xl fade-in-up"
              style={{
                background: 'linear-gradient(135deg, #FF69B4 0%, #FF1493 100%)',
              }}
            >
              <p className="text-2xl md:text-3xl font-bold text-white mb-6">
                ❤️ شكراً على حبك وعطفك ❤️
              </p>
              <p className="text-lg md:text-xl text-white font-semibold leading-relaxed">
                أنتِ أغلى ما في حياتي، وكل يوم معك هو عيد بالنسبة لي.
              </p>
            </div>
          )}

          {/* Scattered Decorations */}
          <div className="absolute top-20 left-12 text-3xl float">💕</div>
          <div className="absolute bottom-32 right-8 text-2xl animate-bounce">🎀</div>
        </div>
      </section>

      {/* Section 4: Countdown */}
      <section
        className="eid-section relative"
        style={{
          background: 'linear-gradient(135deg, #FFD700 0%, #FF69B4 50%, #FF1493 100%)',
        }}
      >
        <div className="relative z-10 w-full max-w-4xl px-4 mx-auto">
          {/* Title with Hourglass */}
          <h2 className="eid-title mb-8 text-white flex justify-center items-center gap-4">
            <span>⏳</span>
            <span>العد التنازلي لأول أيام العيد</span>
            <span>⏳</span>
          </h2>

          {/* Countdown Container */}
          <div className="bg-gradient-to-r from-yellow-200 to-pink-300 rounded-3xl p-8 md:p-12 shadow-2xl">
            <Countdown />
          </div>

          {/* Gift Decorations */}
          <div className="flex justify-center gap-6 mt-12">
            <span className="text-5xl animate-bounce" style={{ animationDelay: '0s' }}>
              🎁
            </span>
            <span className="text-5xl animate-bounce" style={{ animationDelay: '0.2s' }}>
              💝
            </span>
            <span className="text-5xl animate-bounce" style={{ animationDelay: '0.4s' }}>
              🎁
            </span>
          </div>

          {/* Scattered Hearts */}
          <div className="absolute top-32 left-8 text-3xl float">💕</div>
          <div className="absolute bottom-32 right-12 text-2xl animate-bounce">🎀</div>
        </div>
      </section>

      {/* Section 5: Closing Message */}
      <section
        className="eid-section relative"
        style={{
          background: 'linear-gradient(135deg, #B0E0E6 0%, #90EE90 100%)',
        }}
      >
        <div className="relative z-10 w-full max-w-3xl px-4 mx-auto text-center">
          {/* Gift Box Decoration */}
          <div className="flex justify-center mb-8">
            <span className="text-6xl float">🎁</span>
          </div>

          {/* Main Message Box */}
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl mb-8">
            {/* Main Text */}
            <p className="eid-subtitle mb-6">
              ربنا يخليكِ ليا ويحلينا لبعض
            </p>

            <p className="text-lg md:text-xl text-red-600 font-semibold leading-relaxed mb-8">
              ويجعل كل أيامنا عيد ما دمتِ بجانبي
            </p>

            {/* Signature */}
            <p className="text-2xl md:text-3xl font-bold" style={{ color: '#FF1493' }}>
              - من قلبي ليكِ 💕
            </p>
          </div>

          {/* Sweets and Treats Decoration */}
          <div className="flex justify-center flex-wrap gap-4 mb-8">
            <span className="text-4xl">🎂</span>
            <span className="text-4xl">🍫</span>
            <span className="text-4xl">☕</span>
            <span className="text-4xl">🍪</span>
            <span className="text-4xl">🍩</span>
            <span className="text-4xl">🍰</span>
          </div>

          {/* Bottom Message */}
          <p className="text-xl md:text-2xl font-bold" style={{ color: '#8B4513' }}>
            شوكولاتة من اختيارك 🍫
          </p>

          {/* Scattered Decorations */}
          <div className="absolute top-20 left-8 text-3xl float">💕</div>
          <div className="absolute bottom-32 right-12 text-2xl animate-bounce">💕</div>
        </div>
      </section>

      {/* Floating Decorations */}
      <div className="fixed bottom-8 right-8 text-5xl animate-bounce pointer-events-none">
        💕
      </div>
      <div className="fixed top-1/4 left-8 text-4xl float pointer-events-none">
        ✨
      </div>
    </div>
  );
}
