import { useState } from 'react';
import FloatingParticles from '@/components/FloatingParticles';
import Countdown from '@/components/Countdown';
import { Heart } from 'lucide-react';

export default function Home() {
  const [showMessage, setShowMessage] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 via-yellow-50 to-pink-50 overflow-hidden">
      <FloatingParticles />

      {/* Section 1: Hero */}
      <section
        className="eid-section relative min-h-screen flex flex-col items-center justify-center"
        style={{
          backgroundImage:
            'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663406205528/j7zpC9QDWZ2kXCjt6gwH9m/eid-hero-bg-KzQ5vG6PukTT3b2qrsBQF5.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-pink-100/50"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="eid-title mb-6 animate-bounce">
            كل عيد وأنتِ أحلى بنوتة في الدنيا يا حبيبتي
          </h1>
          <div className="flex justify-center gap-4 mb-8 flex-wrap">
            <span className="text-4xl animate-pulse">🌙</span>
            <span className="text-4xl animate-pulse" style={{ animationDelay: '0.2s' }}>
              🏮
            </span>
            <span className="text-4xl animate-pulse" style={{ animationDelay: '0.4s' }}>
              🌙
            </span>
          </div>
        </div>
      </section>

      {/* Section 2: Photo Frame */}
      <section className="eid-section min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-pink-50 to-yellow-50">
        <div className="relative z-10 w-full max-w-4xl px-4">
          <h2 className="eid-subtitle mb-12 fade-in-up">
            ✨ عيد فطر سعيد يا أغلى الناس ✨
          </h2>

          <div className="flex justify-center mb-12">
            <div className="heart-frame shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop"
                alt="صورة خاصة"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="text-center">
            <p className="eid-subtitle text-pink-700 mb-8">
              وعيدك سعيد يا أحلى حاجة حصلتلي
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: Interactive Button */}
      <section className="eid-section min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-yellow-50 to-pink-100">
        <div className="relative z-10 w-full max-w-2xl px-4 text-center">
          <button
            onClick={() => setShowMessage(!showMessage)}
            className="eid-button mb-8 mx-auto block"
          >
            اضغطي هنا لو بتحبيني برضو 💕
          </button>

          {showMessage && (
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl fade-in-up">
              <p className="eid-subtitle mb-6">
                ❤️ شكراً على حبك وعطفك ❤️
              </p>
              <p className="text-lg md:text-xl text-pink-700 font-semibold leading-relaxed">
                أنتِ أغلى ما في حياتي، وكل يوم معك هو عيد بالنسبة لي.
                <br />
                <br />
                كل عام وأنتِ أقرب لأحلامك وطموحاتك، وأتمنى أن تكون كل أيامك
                مليئة بالفرح والسعادة.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Section 4: Countdown */}
      <section className="eid-section min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-pink-100 to-pink-200">
        <div className="relative z-10 w-full max-w-4xl px-4">
          <h2 className="eid-title mb-12 text-white drop-shadow-lg">
            ⏳ العد التنازلي لأول أيام العيد ⏳
          </h2>

          <div className="bg-gradient-to-r from-pink-400 to-rose-400 rounded-3xl p-8 md:p-12 shadow-2xl">
            <Countdown />
          </div>

          <div className="mt-12 text-center">
            <div className="flex justify-center gap-4 flex-wrap">
              <span className="text-5xl animate-bounce">🎁</span>
              <span className="text-5xl animate-bounce" style={{ animationDelay: '0.2s' }}>
                💝
              </span>
              <span className="text-5xl animate-bounce" style={{ animationDelay: '0.4s' }}>
                🎁
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Closing Message */}
      <section className="eid-section min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-100 to-cyan-100">
        <div className="relative z-10 w-full max-w-3xl px-4 text-center">
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl">
            <div className="mb-8 flex justify-center">
              <Heart className="w-16 h-16 text-pink-500 animate-pulse" />
            </div>

            <p className="eid-subtitle mb-8 text-pink-700">
              ربنا يخليكِ ليا ويحلينا لبعض
            </p>

            <p className="text-lg md:text-xl text-pink-700 font-semibold leading-relaxed mb-8">
              ويجعل كل أيامنا عيد ما دمتِ بجانبي
            </p>

            <div
              className="mb-8"
              style={{
                backgroundImage:
                  'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663406205528/j7zpC9QDWZ2kXCjt6gwH9m/eid-footer-decoration-P9bDPBYmkcj9Ryo5RzfEHS.webp)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '200px',
                borderRadius: '1.5rem',
              }}
            ></div>

            <p className="text-2xl md:text-3xl font-bold text-pink-600">
              - من قلبي ليكِ 💕
            </p>
          </div>
        </div>
      </section>

      {/* Decorative Elements */}
      <div className="fixed bottom-8 right-8 text-4xl animate-bounce pointer-events-none">
        💕
      </div>
      <div className="fixed top-1/4 left-8 text-3xl float pointer-events-none">
        ✨
      </div>
    </div>
  );
}
