
import React, { useState, useEffect, useRef, useCallback } from 'react';
import TypingEffect from './components/TypingEffect';
import Modal from './components/Modal';
import FloatingElements from './components/FloatingElements';
import FlowerExplosion from './components/FlowerExplosion';

const TING_SOUND_DATA_URL = 'data:audio/mpeg;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjU2LjM2LjEwMAAAAAAAAAAAAAAA//OEAAAAAAAAAAAAAAAAAAAAAAAASW5mbwAAAA8AAAAEAAABIADAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV6urq6urq6urq6urq6urq6urq6urq6urq6v////////////////////////////////8AAAAATGF2YzU2LjQxAAAAAAAAAAAAAAAA Sidebar - Ting - Sound Effect (HD) //OEJQRAAAAAAXAAANIAAAAQ3//uYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//MUeAAAAANIAAAAAQ3//uYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//MUeAAAAANIAAAAAQ3//uYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//MUeAAAAANIAAAAAQ3//uYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//MUeAAAAANIAAAAAQ3//uYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//MUeAAAAANIAAAAAQ3//uYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//MUeAAAAANIAAAAAQ3//uYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//MUeAAAAANIAAAAAQ3//uYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//MUeAAAAANIAAAAAQ3//uYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//MUeAAAAANIAAAAAQ3//uYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//MUeAAAAANIAAAAAQ3//uYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//MUeAAAAANIAAAAAQ3//uYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//MUeAAAAANIAAAAAQ3//uYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//MUeAAAAANIAAAAAQ3//uYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//MUeAAAAANIAAAAAQ3//uYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//MUeAAAAANIAAAAAQ3//uYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//MUeAAAAANIAAAAAQ3//uYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//MUeAAAAANIAAAAAQ3//uYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//MUeAAAAANIAAAAAQ3//uYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//MUeAAAAANIAAAAAQ3//uYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//MUeAAAAANIAAAAAQ3//uYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//MUeAAAAANIAAAAAQ3//uYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//MUeAAAAANIAAAAAQ3//uYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//MUeAAAAANIAAAAAQ3//uYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//MUeAAAAANIAAAAAQ3//uYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//MUeAAAAANIAAAAAQ3//uYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//MUeAAAAANIAAAAAQ3//uYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//MUeAAAAANIAAAAAQ3//uYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//MUeAAAAANIAAAAAQ3//uYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//MUeBIQIbEGP+9f+wf/b//+k4//8EAPgC//8RoLgCAAr/+x//8b//6z/9H//rP/wf/mv/5H//b//+f//8IA//v//5IAAAMgAAB//5gQARCAIAV//t//4//9f//P/+CAAADgAAH//sCAAET//m//9r//V//7BAAABwAAC//4gQARP/+z//9P//X//wQAABIAA//+IIEARP//f//0//+v//EAAA//+IEAEb//t//5P//b//sEAAD//ogQARv/+n//v//f//wQAAgAAA//+YIAGz//o//7//3//sEAAIAAP//mCAAEAAABwAAAAAABgAAAQAAAAP//4gQAVv/+z//6//+P//gQAAMAAA//+IIAAbP/+v//z//6//+CAAD//8gQARgAAVv/+v//3//wQAAB//+YIABGAAA//7oEADQAAAb//o//9P//EAAAP//qCAAED//+//9r//X//wQAAD//6ggABD//2//+v//f//BAAB//8wQABQAAA//9kEABAAAA//+IIAEz//r//+//8v//BAAD//4gQAFv//X//7//2v//BAA=';
const BACKGROUND_MUSIC_URL = 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'; // Placeholder music

const App: React.FC = () => {
    const [isStarted, setIsStarted] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [showFlowerExplosion, setShowFlowerExplosion] = useState(false);
    const [scrollY, setScrollY] = useState(0);
    const audioRef = useRef<HTMLAudioElement>(null);
    const tingAudioRef = useRef<HTMLAudioElement | null>(null);

    useEffect(() => {
        tingAudioRef.current = new Audio(TING_SOUND_DATA_URL);
    }, []);

    const handleScroll = useCallback(() => {
        setScrollY(window.scrollY);
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [handleScroll]);

    const handleStart = () => {
        setIsStarted(true);
        if (audioRef.current) {
            audioRef.current.play().catch(error => console.error("Audio play failed:", error));
        }
    };

    const handleShowModal = () => {
        if (tingAudioRef.current) {
            tingAudioRef.current.currentTime = 0;
            tingAudioRef.current.play();
        }
        setShowFlowerExplosion(true);
    };

    const handleFlowerExplosionComplete = () => {
        setShowFlowerExplosion(false);
        setShowModal(true);
    };

    const ParallaxBackground = () => (
        <div
            className="absolute top-0 left-0 w-full h-[200vh] bg-cover bg-center -z-10"
            style={{
                backgroundImage: `url(https://picsum.photos/seed/love/1920/1080)`,
                transform: `translateY(${scrollY * 0.4}px)`,
                filter: 'blur(3px) brightness(0.9)'
            }}
        />
    );

    if (!isStarted) {
        return (
            <div className="flex items-center justify-center h-screen bg-gradient-to-br from-pink-200 via-rose-200 to-white text-center text-rose-800">
                <FloatingElements count={25} element="💖" animationName="animate-float" />
                <div className="z-10 bg-white/50 backdrop-blur-sm p-8 rounded-2xl shadow-2xl">
                    <h1 className="font-great-vibes text-5xl md:text-7xl mb-4">Happy Vietnamese Women’s Day 💐</h1>
                    <p className="text-xl md:text-2xl mb-8">A little surprise awaits...</p>
                    <button
                        onClick={handleStart}
                        className="px-8 py-3 bg-rose-400 text-white rounded-full text-lg shadow-lg hover:bg-rose-500 transition-all duration-300 transform hover:scale-105"
                    >
                        Click to begin
                    </button>
                </div>
            </div>
        );
    }
    
    return (
        <div className="relative min-h-screen w-full bg-gradient-to-br from-pink-100 via-rose-100 to-amber-50 text-gray-700 overflow-x-hidden">
            <ParallaxBackground />
            <FloatingElements count={20} element="💖" animationName="animate-float" />
            <audio ref={audioRef} src={BACKGROUND_MUSIC_URL} loop />
            
            <main className="relative z-10">
                <section className="min-h-screen flex flex-col items-center justify-center text-center p-4">
                    <div className="bg-white/60 backdrop-blur-sm p-8 md:p-12 rounded-2xl shadow-xl max-w-3xl">
                        <h1 className="font-great-vibes text-4xl md:text-6xl text-rose-500 mb-6 animate-fadeIn" style={{ animationDelay: '0.5s' }}>
                        Gửi đến cô gái xinh đẹp và mạnh mẽ nhân ngày 20/10 🌷💖
                        </h1>
                        <p className="text-xl md:text-3xl text-rose-700 opacity-0 animate-fadeIn" style={{ animationDelay: '1.5s' }}>
                        Cảm ơn em vì đã luôn mang đến niềm vui, năng lượng tích cực và những nụ cười thật tươi trong cuộc sống này 💖
                        </p>
                    </div>
                </section>

                <section className="min-h-[70vh] flex items-center justify-center p-4">
                     <div className="bg-white/60 backdrop-blur-sm p-8 md:p-12 rounded-2xl shadow-xl max-w-3xl text-center">
                        <TypingEffect
                            text="Chúc em có một ngày 20/10 thật ý nghĩa, tràn ngập hạnh phúc, và luôn xinh đẹp, tự tin mỗi ngày ✨🌸"
                            className="text-2xl md:text-4xl text-rose-600 font-bold"
                            speed={100}
                        />
                     </div>
                </section>
                
                <section className="min-h-screen flex flex-col items-center justify-center text-center p-4">
                    <div className="bg-white/60 backdrop-blur-sm p-8 md:p-12 rounded-2xl shadow-xl max-w-3xl flex flex-col items-center">
                        <button
                            onClick={handleShowModal}
                            className="text-xl px-10 py-4 bg-rose-500 text-white rounded-full shadow-lg hover:bg-rose-600 transition-all duration-300 transform hover:scale-105 animate-glowing"
                        >
                            Nhấn để nhận hoa 🌹
                        </button>
                    </div>
                </section>
                 
                <section className="min-h-screen flex flex-col items-center justify-center text-center p-4 relative">
                    <FloatingElements count={30} element="🌷" animationName="animate-fall" />
                    <div className="bg-white/60 backdrop-blur-sm p-8 md:p-12 rounded-2xl shadow-xl max-w-3xl">
                        <p className="text-2xl md:text-4xl text-rose-700">
                             Hãy luôn tỏa sáng theo cách của riêng em — vì em xứng đáng với tất cả những điều tốt đẹp nhất 🌷
                        </p>
                    </div>
                </section>
            </main>

            <FlowerExplosion 
                isActive={showFlowerExplosion} 
                onComplete={handleFlowerExplosionComplete} 
            />

            <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
                <div className="text-center">
                    <p className="font-great-vibes text-6xl text-rose-500 animate-glowing">
                        Gửi tặng em những đóa hoa xinh đẹp nhất hôm nay 💐❤️
                    </p>
                </div>
            </Modal>
        </div>
    );
};

export default App;
