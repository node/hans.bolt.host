import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'Bolt.new 是完全免费的吗？',
    answer: 'Bolt.new 提供免费版本，包含基础功能。我们也提供专业版，解锁更多高级功能如私有部署、团队协作和优先支持。你可以从免费版开始，随时升级到专业版。'
  },
  {
    question: '我需要有编程基础才能使用吗？',
    answer: '不需要！Bolt.new 的设计理念就是让任何人都能创建应用。你只需要用自然语言描述你想要的功能，AI 会帮你生成代码。当然，如果你有编程基础，可以直接编辑和优化生成的代码。'
  },
  {
    question: '生成的代码质量如何？',
    answer: 'Bolt.new 使用最先进的 AI 模型，生成的代码遵循行业最佳实践，包括代码规范、性能优化和安全标准。所有代码都经过严格测试，可以直接用于生产环境。'
  },
  {
    question: '支持哪些技术栈？',
    answer: 'Bolt.new 支持主流的前端框架（React、Vue、Next.js）、后端技术（Node.js、Python）和数据库（Supabase、PostgreSQL、MongoDB）。我们持续添加新的技术支持。'
  },
  {
    question: '如何部署我的应用？',
    answer: '部署非常简单！Bolt.new 集成了 Vercel、Netlify 等主流部署平台。你只需要点击"部署"按钮，选择目标平台，系统会自动完成配置和部署。整个过程不超过 2 分钟。'
  },
  {
    question: '我的代码和数据安全吗？',
    answer: '我们非常重视安全。所有代码在隔离环境中运行，数据传输采用加密，符合 GDPR 和 SOC 2 标准。你的代码属于你自己，可以随时导出。我们也提供私有部署选项。'
  },
  {
    question: '遇到问题如何获得帮助？',
    answer: '我们提供多种支持渠道：详细的文档、视频教程、社区论坛、微信群和 Discord 频道。专业版用户还可以获得 24/7 优先技术支持和专属客服。'
  },
  {
    question: '可以使用 Bolt.new 开发商业项目吗？',
    answer: '完全可以！你在 Bolt.new 上创建的所有项目都属于你，可以自由用于商业用途。我们不会对你的项目收入收取任何费用。'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            常见问题
          </h2>
          <p className="text-xl text-gray-600">
            快速找到你关心的问题答案
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100"
            >
              <button
                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-lg font-semibold text-gray-900 pr-8">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 flex-shrink-0 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-5">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">还有其他问题？</p>
          <button className="text-blue-600 hover:text-blue-700 font-semibold">
            联系我们的支持团队
          </button>
        </div>
      </div>
    </section>
  );
}
