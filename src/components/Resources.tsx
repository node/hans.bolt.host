import { BookOpen, Video, FileText, MessageCircle } from 'lucide-react';

const resources = [
  {
    icon: BookOpen,
    title: '完整教程',
    description: '从入门到精通的系统化学习路径',
    items: ['快速入门指南', '核心概念详解', '高级技巧与最佳实践', 'API 完整文档'],
    link: '#'
  },
  {
    icon: Video,
    title: '视频教程',
    description: '生动直观的视频演示',
    items: ['5分钟快速上手', '实战项目演示', '功能深度讲解', '问题排查技巧'],
    link: '#'
  },
  {
    icon: FileText,
    title: '案例模板',
    description: '开箱即用的项目模板',
    items: ['电商网站模板', 'SaaS 应用模板', '博客系统模板', '管理后台模板'],
    link: '#'
  },
  {
    icon: MessageCircle,
    title: '社区支持',
    description: '活跃的开发者社区',
    items: ['技术问答论坛', '微信交流群', 'Discord 频道', '每周技术分享'],
    link: '#'
  }
];

export default function Resources() {
  return (
    <section id="resources" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            丰富的学习资源
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            无论你是初学者还是经验丰富的开发者，我们都为你准备了完善的学习资料
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {resources.map((resource, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="flex items-start space-x-6">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <resource.icon className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {resource.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {resource.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {resource.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center text-gray-700">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={resource.link}
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold group"
                  >
                    了解更多
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
