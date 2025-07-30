import { memo } from 'react';
import { Palette, Code, Zap, Users } from 'lucide-react';

const About = memo(() => {
  const skills = [
    {
      icon: Palette,
      title: 'Desarrollo Web',
      description: 'React, TypeScript, Node.js',
      gradient: 'from-purple-500 to-pink-500',
      delay: '0ms',
    },
    {
      icon: Code,
      title: 'Backend',
      description: 'Node.js, Express, MongoDB, PostgreSQL',
      gradient: 'from-pink-500 to-blue-500',
      delay: '100ms',
    },
    {
      icon: Zap,
      title: 'Optimización',
      description: 'Performance, SEO, Accesibilidad',
      gradient: 'from-blue-500 to-purple-500',
      delay: '200ms',
    },
    {
      icon: Users,
      title: 'Colaboración',
      description: 'Git, Linear, Slack, Comunicación',
      gradient: 'from-purple-500 to-blue-500',
      delay: '300ms',
    },
  ];

  return (
    <section id="about" className="relative py-24 bg-black overflow-hidden">
      {/* Cyberpunk Background */}
      <div className="absolute inset-0 bg-black">
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(rgba(0, 255, 255, 0.05) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0, 255, 255, 0.05) 1px, transparent 1px)
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
          className="absolute top-1/4 left-1/4 w-32 h-32 bg-cyan-400/5 rounded-full blur-xl animate-bounce"
          style={{ animationDuration: '3s' }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-purple-400/5 rounded-full blur-xl animate-bounce"
          style={{ animationDuration: '4s', animationDelay: '1s' }}
        />
        <div
          className="absolute top-1/2 right-1/3 w-16 h-16 bg-pink-400/5 rounded-full blur-lg animate-pulse"
          style={{ animationDuration: '2s' }}
        />

        {/* Glitch Effect */}
        <div className="absolute inset-0 opacity-3">
          <div
            className="absolute inset-0 bg-gradient-to-br from-cyan-400 via-purple-400 to-pink-400 animate-pulse"
            style={{ animationDuration: '8s' }}
          />
        </div>

        {/* Scan Lines */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                'linear-gradient(transparent 50%, rgba(0, 255, 255, 0.05) 50%)',
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

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white relative">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Sobre Mí
              </span>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"></div>
            </h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-6">
              <span className="text-white font-medium">
                Desarrollador Fullstack
              </span>{' '}
              con más de 2 años de experiencia en la creación de aplicaciones
              web y móviles utilizando tecnologías modernas como{' '}
              <span className="text-cyan-400 font-medium">React</span>,{' '}
              <span className="text-purple-400 font-medium">Express</span>,{' '}
              <span className="text-pink-400 font-medium">Next.js</span>,{' '}
              <span className="text-cyan-400 font-medium">Node.js</span> y{' '}
              <span className="text-purple-400 font-medium">TypeScript</span>.
            </p>
            <p className="text-lg text-gray-400 leading-relaxed mb-6">
              Especializado en el desarrollo de interfaces{' '}
              <span className="text-gray-300">
                rápidas, accesibles y centradas en el usuario
              </span>
              , combinando un diseño funcional con una experiencia de usuario
              fluida.
            </p>
            <p className="text-lg text-gray-400 leading-relaxed">
              Comprometido con las{' '}
              <span className="text-gray-300">
                buenas prácticas de desarrollo
              </span>
              , la escalabilidad del código y la optimización del rendimiento,
              tanto en el frontend como en la integración con APIs y servicios
              backend.
            </p>
          </div>
        </div>
        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {skills.map(skill => (
            <div
              key={skill.title}
              className="group relative"
              style={{ animationDelay: skill.delay }}
            >
              {/* Card Background with Glow Effect */}
              <div
                className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur-xl -m-1"
                style={{
                  background: `linear-gradient(to right, var(--tw-gradient-stops))`,
                }}
              ></div>

              <div
                className="relative bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 
                    hover:bg-gray-800/60 hover:border-gray-600/50 hover:shadow-2xl hover:shadow-cyan-500/10
                    transition-all duration-500 hover:scale-105 will-change-transform group-hover:-translate-y-2 
                    flex flex-col justify-between min-h-[260px]"
              >
                {/* Icon Container */}
                <div className="flex justify-center mb-6">
                  <div
                    className={`relative p-4 bg-gradient-to-r ${skill.gradient} rounded-2xl shadow-lg 
                         group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}
                  >
                    <skill.icon className="w-8 h-8 text-white" />

                    {/* Icon Glow Effect */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${skill.gradient} rounded-2xl opacity-0 
                           group-hover:opacity-50 blur-lg transition-opacity duration-300`}
                    ></div>
                  </div>
                </div>

                {/* Content */}
                <div className="text-center space-y-4">
                  <h3
                    className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r 
                       group-hover:from-cyan-400 group-hover:to-purple-400 group-hover:bg-clip-text 
                       transition-all duration-300"
                  >
                    {skill.title}
                  </h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 leading-relaxed">
                    {skill.description}
                  </p>
                </div>

                {/* Bottom Accent Line */}
                <div
                  className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 
                       bg-gradient-to-r ${skill.gradient} group-hover:w-3/4 transition-all duration-500 rounded-full`}
                ></div>
              </div>
            </div>
          ))}
        </div>
        {/* Bottom Decorative Element */}
        <div className="flex justify-center mt-16">
          <div className="flex space-x-2">
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
            <div
              className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"
              style={{ animationDelay: '0.2s' }}
            ></div>
            <div
              className="w-2 h-2 bg-pink-400 rounded-full animate-pulse"
              style={{ animationDelay: '0.4s' }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
});

About.displayName = 'About';

export default About;
