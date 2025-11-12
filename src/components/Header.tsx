import { Zap, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md border-b border-gray-200 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Zap className="w-8 h-8 text-blue-600" fill="currentColor" />
            <span className="text-xl font-bold text-gray-900">Bolt.new 中文社区</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-700 hover:text-blue-600 transition-colors">功能特性</a>
            <a href="#resources" className="text-gray-700 hover:text-blue-600 transition-colors">学习资源</a>
            <a href="#projects" className="text-gray-700 hover:text-blue-600 transition-colors">社区项目</a>
            <a href="#faq" className="text-gray-700 hover:text-blue-600 transition-colors">常见问题</a>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium">
              开始使用
            </button>
          </div>

          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            <a href="#features" className="block text-gray-700 hover:text-blue-600 transition-colors">功能特性</a>
            <a href="#resources" className="block text-gray-700 hover:text-blue-600 transition-colors">学习资源</a>
            <a href="#projects" className="block text-gray-700 hover:text-blue-600 transition-colors">案例项目</a>
            <a href="#faq" className="block text-gray-700 hover:text-blue-600 transition-colors">常见问题</a>
            <button className="w-full bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium">
              开始使用
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}
