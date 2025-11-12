import { Zap, Github, Twitter, MessageCircle, Mail } from 'lucide-react';

const footerLinks = {
  product: [
    { name: '功能特性', href: '#features' },
    { name: '定价方案', href: '#' },
    { name: '更新日志', href: '#' },
    { name: '路线图', href: '#' }
  ],
  resources: [
    { name: '文档中心', href: '#' },
    { name: '视频教程', href: '#' },
    { name: '案例模板', href: '#' },
    { name: 'API 文档', href: '#' }
  ],
  community: [
    { name: '社区项目', href: '#projects' },
    { name: '技术论坛', href: '#' },
    { name: '微信群', href: '#' },
    { name: '贡献指南', href: '#' }
  ],
  company: [
    { name: '关于我们', href: '#' },
    { name: '加入我们', href: '#' },
    { name: '联系我们', href: '#' },
    { name: '隐私政策', href: '#' }
  ]
};

const socialLinks = [
  { icon: Github, href: '#', label: 'GitHub' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: MessageCircle, href: '#', label: '微信' },
  { icon: Mail, href: '#', label: '邮箱' }
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Zap className="w-8 h-8 text-blue-500" fill="currentColor" />
              <span className="text-xl font-bold text-white">Bolt.new</span>
            </div>
            <p className="text-sm text-gray-400 mb-6">
              用 AI 快速构建完整的 Web 应用，让开发变得更简单。
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">产品</h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-sm hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">资源</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-sm hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">社区</h3>
            <ul className="space-y-3">
              {footerLinks.community.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-sm hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">关于</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-sm hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400">
              © 2024 Bolt.new 中文社区. 保留所有权利。
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="hover:text-white transition-colors">服务条款</a>
              <a href="#" className="hover:text-white transition-colors">隐私政策</a>
              <a href="#" className="hover:text-white transition-colors">Cookie 设置</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
