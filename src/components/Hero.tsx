import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-6 animate-fade-in">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">AI 驱动的全栈开发平台</span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            使用 AI 快速构建
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent"> 完整的 Web 应用</span>
          </h1>

          <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-3xl mx-auto">
            Bolt.new 是一个革命性的 AI 开发平台，让你通过自然语言描述即可生成、运行和部署全栈应用。无需复杂配置，从想法到上线只需几分钟。
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 transition-all font-semibold text-lg flex items-center space-x-2 shadow-lg hover:shadow-xl">
              <span>开始免费使用</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="bg-white text-gray-700 px-8 py-4 rounded-xl hover:bg-gray-50 transition-colors font-semibold text-lg border-2 border-gray-200">
              观看演示视频
            </button>
          </div>

          <div className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-1">10K+</div>
              <div className="text-sm text-gray-600">活跃用户</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-1">50K+</div>
              <div className="text-sm text-gray-600">创建项目</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-1">98%</div>
              <div className="text-sm text-gray-600">用户满意度</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
