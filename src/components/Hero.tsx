import { memo } from 'react';

const Hero = memo(() => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Cyberpunk Background */}
      <div className="absolute inset-0 bg-black">
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px',
              animation: 'gridMove 20s linear infinite',
            }}
          />
        </div>

        {/* Animated Lines */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse" />
          <div
            className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent animate-pulse"
            style={{ animationDelay: '1s' }}
          />
          <div
            className="absolute left-1/4 top-0 w-px h-full bg-gradient-to-b from-transparent via-pink-400 to-transparent animate-pulse"
            style={{ animationDelay: '2s' }}
          />
          <div
            className="absolute right-1/4 top-0 w-px h-full bg-gradient-to-b from-transparent via-blue-400 to-transparent animate-pulse"
            style={{ animationDelay: '3s' }}
          />
        </div>

        {/* Floating Elements */}
        <div
          className="absolute top-1/4 left-1/4 w-32 h-32 bg-cyan-400/10 rounded-full blur-xl animate-bounce"
          style={{ animationDuration: '3s' }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-purple-400/10 rounded-full blur-xl animate-bounce"
          style={{ animationDuration: '4s', animationDelay: '1s' }}
        />
        <div
          className="absolute top-1/2 right-1/3 w-16 h-16 bg-pink-400/10 rounded-full blur-lg animate-pulse"
          style={{ animationDuration: '2s' }}
        />

        {/* Glitch Effect */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0 bg-gradient-to-br from-cyan-400 via-purple-400 to-pink-400 animate-pulse"
            style={{ animationDuration: '8s' }}
          />
        </div>

        {/* Scan Lines */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                'linear-gradient(transparent 50%, rgba(0, 255, 255, 0.1) 50%)',
              backgroundSize: '100% 4px',
              animation: 'scanLines 2s linear infinite',
            }}
          />
        </div>

        {/* Corner Elements */}
        <div className="absolute top-0 left-0 w-16 h-16 border-l-2 border-t-2 border-cyan-400" />
        <div className="absolute top-0 right-0 w-16 h-16 border-r-2 border-t-2 border-purple-400" />
        <div className="absolute bottom-0 left-0 w-16 h-16 border-l-2 border-b-2 border-pink-400" />
        <div className="absolute bottom-0 right-0 w-16 h-16 border-r-2 border-b-2 border-blue-400" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
              Ruben Vasquez
            </span>
            <br />
            <span className="text-white drop-shadow-lg">
              Programador fullstack
            </span>
          </h1>

          <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed drop-shadow-lg">
            Programador especializado en el stack JavaScript.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:scale-105 transition-all duration-300 will-change-transform overflow-hidden">
              <span className="relative z-10">Comenzar Proyecto</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
            <button className="group relative px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 overflow-hidden">
              <span className="relative z-10">Ver Portafolio</span>
              <div className="absolute inset-0 bg-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
});

Hero.displayName = 'Hero';

export default Hero;
