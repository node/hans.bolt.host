import { Code2, Zap, Globe, Lock, RefreshCw, Palette } from 'lucide-react';

const features = [
  {
    icon: Code2,
    title: 'AI 智能编程',
    description: '使用自然语言描述你的需求，AI 自动生成高质量的代码，支持 React、Vue、Node.js 等主流技术栈。',
    color: 'blue'
  },
  {
    icon: Zap,
    title: '实时预览',
    description: '代码修改即时生效，无需等待编译。在浏览器中直接看到效果，加速开发迭代。',
    color: 'cyan'
  },
  {
    icon: Globe,
    title: '一键部署',
    description: '集成主流部署平台，从开发到上线只需一键操作。支持自动化 CI/CD 流程。',
    color: 'green'
  },
  {
    icon: Lock,
    title: '安全可靠',
    description: '企业级安全标准，代码隔离运行。支持私有部署，保护你的核心业务逻辑。',
    color: 'orange'
  },
  {
    icon: RefreshCw,
    title: '智能迭代',
    description: 'AI 理解上下文，支持持续对话式开发。轻松修改和优化现有代码。',
    color: 'purple'
  },
  {
    icon: Palette,
    title: '精美设计',
    description: '内置现代化 UI 组件库，自动生成响应式设计。让你的应用在各种设备上都美观大方。',
    color: 'pink'
  }
];

const colorClasses = {
  blue: 'bg-blue-100 text-blue-600',
  cyan: 'bg-cyan-100 text-cyan-600',
  green: 'bg-green-100 text-green-600',
  orange: 'bg-orange-100 text-orange-600',
  purple: 'bg-purple-100 text-purple-600',
  pink: 'bg-pink-100 text-pink-600'
};

export default function Features() {
  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            强大的功能特性
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Bolt.new 集成了最先进的 AI 技术和开发工具，为你提供前所未有的开发体验
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-gray-200"
            >
              <div className={`w-14 h-14 rounded-xl ${colorClasses[feature.color as keyof typeof colorClasses]} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                <feature.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
