import { memo, useState, useMemo } from 'react';
import { Code, Smartphone, Monitor, Server } from 'lucide-react';

interface Skill {
  name: string;
  level: number;
}

interface SkillCategory {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  skills: Skill[];
}

const Skills = memo(() => {
  const [activeCategory, setActiveCategory] = useState(0);

  const categories: SkillCategory[] = useMemo(
    () => [
      {
        name: 'Frontend',
        icon: Monitor,
        skills: [
          { name: 'React', level: 90 },
          { name: 'TypeScript', level: 85 },
          { name: 'Next.js', level: 80 },
          { name: 'Tailwind CSS', level: 95 },
          { name: 'HTML/CSS', level: 90 },
        ],
      },
      {
        name: 'Backend',
        icon: Server,
        skills: [
          { name: 'Node.js', level: 85 },
          { name: 'Express', level: 80 },
          { name: 'MongoDB', level: 75 },
          { name: 'PostgreSQL', level: 70 },
          { name: 'REST APIs', level: 85 },
        ],
      },
      {
        name: 'Mobile',
        icon: Smartphone,
        skills: [
          { name: 'React Native', level: 75 },
          { name: 'Expo', level: 70 },
          { name: 'Mobile UI/UX', level: 80 },
          { name: 'App Store', level: 65 },
          { name: 'Push Notifications', level: 70 },
        ],
      },
      {
        name: 'DevOps',
        icon: Code,
        skills: [
          { name: 'Git', level: 90 },
          { name: 'Docker', level: 70 },
          { name: 'Vercel', level: 85 },
          { name: 'Netlify', level: 80 },
          { name: 'CI/CD', level: 75 },
        ],
      },
    ],
    []
  );

  const currentCategory = categories[activeCategory];

  const createRadarPath = (skills: Skill[]) => {
    const centerX = 200;
    const centerY = 200;
    const maxRadius = 120;
    const angleStep = (2 * Math.PI) / skills.length;

    const points = skills.map((skill, index) => {
      const angle = index * angleStep - Math.PI / 2;
      const radius = (skill.level / 100) * maxRadius;
      const x = centerX + radius * Math.cos(angle);
      const y = centerY + radius * Math.sin(angle);
      return `${x},${y}`;
    });

    return `M ${points.join(' L ')} Z`;
  };

  const createGridLines = () => {
    const centerX = 200;
    const centerY = 200;
    const maxRadius = 120;
    const lines = [];

    for (let i = 1; i <= 4; i++) {
      const radius = (maxRadius / 4) * i;
      const points = [];
      for (let j = 0; j < 8; j++) {
        const angle = (j * Math.PI) / 4;
        const x = centerX + radius * Math.cos(angle);
        const y = centerY + radius * Math.sin(angle);
        points.push(`${x},${y}`);
      }
      lines.push(`M ${points.join(' L ')} Z`);
    }

    return lines;
  };

  const createAxisLines = (skills: Skill[]) => {
    const centerX = 200;
    const centerY = 200;
    const maxRadius = 120;
    const angleStep = (2 * Math.PI) / skills.length;

    return skills.map((_, index) => {
      const angle = index * angleStep - Math.PI / 2;
      const x = centerX + maxRadius * Math.cos(angle);
      const y = centerY + maxRadius * Math.sin(angle);
      return `${centerX},${centerY} ${x},${y}`;
    });
  };

  const createSkillPoints = (skills: Skill[]) => {
    const centerX = 200;
    const centerY = 200;
    const maxRadius = 120;
    const angleStep = (2 * Math.PI) / skills.length;

    return skills.map((skill, index) => {
      const angle = index * angleStep - Math.PI / 2;
      const radius = (skill.level / 100) * maxRadius;
      const x = centerX + radius * Math.cos(angle);
      const y = centerY + radius * Math.sin(angle);

      // Label position (outside the radar with more space)
      const labelRadius = maxRadius + 60;
      const labelX = centerX + labelRadius * Math.cos(angle);
      const labelY = centerY + labelRadius * Math.sin(angle);

      return (
        <g key={index}>
          {/* Skill point */}
          <circle
            cx={x}
            cy={y}
            r="6"
            fill="white"
            stroke={`url(#gradient-${activeCategory})`}
            strokeWidth="3"
            className="drop-shadow-lg"
          />

          {/* Skill label with better positioning and larger font */}
          <text
            x={labelX}
            y={labelY}
            textAnchor="middle"
            dominantBaseline="middle"
            className="text-sm font-semibold fill-white drop-shadow-lg"
            style={{
              textAnchor: 'middle',
              fontSize: '12px',
            }}
          >
            {skill.name}
          </text>

          {/* Level text */}
          <text
            x={labelX}
            y={labelY + 18}
            textAnchor="middle"
            dominantBaseline="middle"
            className="text-xs fill-gray-400 drop-shadow-lg"
            style={{
              textAnchor: 'middle',
              fontSize: '10px',
            }}
          >
            {skill.level}%
          </text>
        </g>
      );
    });
  };

  return (
    <section id="skills" className="relative py-24 bg-black overflow-hidden">
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
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Habilidades Técnicas
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Especializado en tecnologías modernas para crear experiencias
            digitales excepcionales
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Category Selector */}
          <div className="space-y-4 sm:space-y-6 order-2 lg:order-1">
            <h3 className="text-2xl font-bold text-white mb-6">Categorías</h3>
            <div className="grid grid-cols-2 gap-4">
              {categories.map((category, index) => (
                <button
                  key={category.name}
                  onClick={() => setActiveCategory(index)}
                  className={`group relative p-4 rounded-xl border transition-all duration-300 ${
                    activeCategory === index
                      ? 'border-cyan-400 bg-cyan-400/10 shadow-lg shadow-cyan-400/20'
                      : 'border-gray-700 bg-gray-800/30 hover:border-cyan-400/50 hover:bg-cyan-400/5'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div
                      className={`p-2 rounded-lg ${
                        activeCategory === index
                          ? 'bg-gradient-to-r from-cyan-400 to-purple-400'
                          : 'bg-gray-700 group-hover:bg-cyan-400/20'
                      }`}
                    >
                      <category.icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-sm font-medium text-white min-w-0 truncate">
                      {category.name}
                    </span>
                  </div>
                </button>
              ))}
            </div>

            {/* Stats */}
            <div className="mt-8 p-6 bg-gray-800/30 rounded-xl border border-gray-700/50">
              <h4 className="text-lg font-semibold text-white mb-4">
                Estadísticas
              </h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-cyan-400">
                    {currentCategory.skills.reduce(
                      (acc, skill) => acc + skill.level,
                      0
                    ) / currentCategory.skills.length}
                    %
                  </div>
                  <div className="text-sm text-gray-400">Promedio</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-400">
                    {currentCategory.skills.length}
                  </div>
                  <div className="text-sm text-gray-400">Habilidades</div>
                </div>
              </div>
            </div>
          </div>

          {/* Radar Chart */}
          <div className="flex justify-center items-center order-1 lg:order-2 min-h-[400px]">
            <div className="relative w-full max-w-sm lg:max-w-md">
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 400 400"
                className="drop-shadow-2xl"
                preserveAspectRatio="xMidYMid meet"
              >
                {/* Definitions */}
                <defs>
                  <linearGradient
                    id="gradient-0"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#06b6d4" />
                    <stop offset="100%" stopColor="#8b5cf6" />
                  </linearGradient>
                  <linearGradient
                    id="gradient-1"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#8b5cf6" />
                    <stop offset="100%" stopColor="#ec4899" />
                  </linearGradient>
                  <linearGradient
                    id="gradient-2"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#ec4899" />
                    <stop offset="100%" stopColor="#06b6d4" />
                  </linearGradient>
                  <linearGradient
                    id="gradient-3"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#06b6d4" />
                    <stop offset="100%" stopColor="#8b5cf6" />
                  </linearGradient>
                </defs>

                {/* Grid Lines */}
                {createGridLines().map((path, index) => (
                  <path
                    key={index}
                    d={path}
                    fill="none"
                    stroke="rgba(6, 182, 212, 0.1)"
                    strokeWidth="1"
                  />
                ))}

                {/* Axis Lines */}
                {createAxisLines(currentCategory.skills).map((line, index) => (
                  <line
                    key={index}
                    x1={line.split(' ')[0].split(',')[0]}
                    y1={line.split(' ')[0].split(',')[1]}
                    x2={line.split(' ')[1].split(',')[0]}
                    y2={line.split(' ')[1].split(',')[1]}
                    stroke="rgba(6, 182, 212, 0.2)"
                    strokeWidth="1"
                  />
                ))}

                {/* Radar Area */}
                <path
                  d={createRadarPath(currentCategory.skills)}
                  fill={`url(#gradient-${activeCategory})`}
                  fillOpacity="0.2"
                  stroke={`url(#gradient-${activeCategory})`}
                  strokeWidth="2"
                />

                {/* Skill Points */}
                {createSkillPoints(currentCategory.skills)}

                {/* Center point */}
                <circle
                  cx="200"
                  cy="200"
                  r="4"
                  fill="white"
                  className="drop-shadow-lg"
                />
              </svg>
              {/* Center label */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                <div className="bg-gray-900/80 backdrop-blur-sm rounded-lg p-2 border border-gray-700/50">
                  <div className="text-white font-bold text-xs sm:text-sm">
                    {currentCategory.name}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skill Details */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Detalles de {currentCategory.name}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentCategory.skills.map(skill => (
              <div
                key={skill.name}
                className="group relative p-6 bg-gray-800/30 rounded-xl border border-gray-700/50 hover:border-cyan-400/50 hover:bg-cyan-400/5 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg font-semibold text-white">
                    {skill.name}
                  </h4>
                  <div className="text-2xl font-bold text-cyan-400">
                    {skill.level}%
                  </div>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-cyan-400 to-purple-400 h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
                <div className="absolute top-2 right-2 w-3 h-3 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});

Skills.displayName = 'Skills';

export default Skills;
