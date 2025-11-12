import { TrendingUp, Users, Code, Clock } from 'lucide-react';

const stats = [
  {
    icon: Users,
    value: '10,000+',
    label: '活跃开发者',
    description: '来自全球的开发者正在使用 Bolt.new',
    trend: '+25%'
  },
  {
    icon: Code,
    value: '50,000+',
    label: '项目创建',
    description: '已成功生成并部署的应用数量',
    trend: '+40%'
  },
  {
    icon: Clock,
    value: '5 分钟',
    label: '平均上线时间',
    description: '从创意到部署的平均耗时',
    trend: '-30%'
  },
  {
    icon: TrendingUp,
    value: '98%',
    label: '用户满意度',
    description: '用户对平台的整体评价',
    trend: '+5%'
  }
];

export default function Stats() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            数据说明一切
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Bolt.new 正在改变开发者的工作方式，让开发变得更快、更简单、更有趣
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
                  <stat.icon className="w-6 h-6 text-blue-400" />
                </div>
                <span className="text-green-400 text-sm font-medium flex items-center">
                  {stat.trend}
                  <TrendingUp className="w-4 h-4 ml-1" />
                </span>
              </div>
              <div className="text-4xl font-bold mb-2">{stat.value}</div>
              <div className="text-lg font-semibold mb-2 text-gray-200">{stat.label}</div>
              <div className="text-sm text-gray-400">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
