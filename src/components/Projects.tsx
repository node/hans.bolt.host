import { ExternalLink, Heart, Eye } from 'lucide-react';

const projects = [
  {
    title: 'AI 智能助手',
    description: '集成 GPT-4 的智能对话助手，支持多轮对话、上下文理解和个性化回复。',
    author: '张三',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Zhang',
    views: '1.2k',
    likes: 234,
    tags: ['React', 'AI', 'TypeScript'],
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    title: '电商购物平台',
    description: '完整的在线购物系统，包含商品管理、购物车、支付集成和订单追踪。',
    author: '李四',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Li',
    views: '2.5k',
    likes: 456,
    tags: ['Next.js', 'Stripe', 'Supabase'],
    gradient: 'from-green-500 to-emerald-500'
  },
  {
    title: '项目管理工具',
    description: '团队协作和项目管理平台，支持任务分配、进度跟踪和实时通知。',
    author: '王五',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Wang',
    views: '980',
    likes: 178,
    tags: ['Vue', 'WebSocket', 'Node.js'],
    gradient: 'from-orange-500 to-red-500'
  },
  {
    title: '个人博客系统',
    description: '简洁优雅的博客平台，支持 Markdown 编辑、标签分类和评论功能。',
    author: '赵六',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Zhao',
    views: '1.8k',
    likes: 312,
    tags: ['React', 'MDX', 'Tailwind'],
    gradient: 'from-violet-500 to-fuchsia-500'
  },
  {
    title: '数据可视化平台',
    description: '强大的数据分析和可视化工具，支持多种图表类型和实时数据更新。',
    author: '孙七',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sun',
    views: '1.5k',
    likes: 267,
    tags: ['D3.js', 'React', 'Python'],
    gradient: 'from-teal-500 to-cyan-500'
  },
  {
    title: '在线教育平台',
    description: '完整的在线学习系统，包含课程管理、视频播放和学习进度追踪。',
    author: '周八',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Zhou',
    views: '2.1k',
    likes: 389,
    tags: ['React', 'Video.js', 'MongoDB'],
    gradient: 'from-rose-500 to-pink-500'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            社区精选项目
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            看看其他开发者用 Bolt.new 创造了什么，获取灵感并开始你的项目
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              <div className={`h-48 bg-gradient-to-br ${project.gradient} relative`}>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors"></div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center space-x-1 text-sm">
                  <Eye className="w-4 h-4 text-gray-600" />
                  <span className="text-gray-700 font-medium">{project.views}</span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center space-x-2">
                    <img
                      src={project.avatar}
                      alt={project.author}
                      className="w-8 h-8 rounded-full"
                    />
                    <span className="text-sm text-gray-700 font-medium">{project.author}</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <button className="flex items-center space-x-1 text-gray-600 hover:text-red-500 transition-colors">
                      <Heart className="w-5 h-5" />
                      <span className="text-sm font-medium">{project.likes}</span>
                    </button>
                    <button className="text-blue-600 hover:text-blue-700 transition-colors">
                      <ExternalLink className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-xl hover:bg-blue-700 transition-colors font-semibold">
            查看更多项目
          </button>
        </div>
      </div>
    </section>
  );
}
