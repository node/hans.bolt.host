import { useState } from 'react';
import { ChevronRight, Menu, X } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const sections = [
  {
    id: 'intro',
    title: '什么是 Bolt.new？',
    content: `Bolt.new 是一个革命性的 AI 驱动的全栈开发平台，它彻底改变了 Web 应用的开发方式。与传统的编程工具不同，Bolt.new 让你可以通过自然语言对话来描述你的需求，AI 会自动为你生成、运行和部署完整的 Web 应用。

无论你是初学者还是经验丰富的开发者，Bolt.new 都能帮助你大幅加速开发过程，从而将更多的精力投入到创意和产品逻辑上。`
  },
  {
    id: 'features',
    title: '核心功能',
    content: `Bolt.new 提供了以下核心功能来支持你的开发工作流：

• **AI 代码生成** - 根据你的描述自动生成高质量代码，支持 React、Vue、Next.js 等主流框架
• **实时预览** - 修改代码立即看到效果，无需等待编译
• **一键部署** - 集成 Vercel、Netlify 等平台，一键部署到生产环境
• **智能对话** - 通过持续对话不断完善和优化代码
• **多技术支持** - 支持前端框架、后端服务、数据库等完整技术栈
• **团队协作** - 支持项目分享和协作编辑（高级功能）`
  },
  {
    id: 'getting-started',
    title: '快速开始',
    content: `开始使用 Bolt.new 只需简单的几个步骤：

**第 1 步：创建账户**
访问 bolt.new 并点击"Sign Up"按钮，你可以使用邮箱或 GitHub 账户快速注册。

**第 2 步：创建新项目**
点击"New Project"或"Create"按钮，选择一个项目类型或从空白开始。

**第 3 步：描述你的想法**
在对话框中用自然语言描述你想要构建的应用。例如："创建一个待办事项应用，包含添加、删除和标记完成的功能"。

**第 4 步：查看生成的代码**
AI 会在右侧窗口实时生成代码，你可以在左侧的预览窗口看到效果。

**第 5 步：优化和修改**
继续与 AI 对话来优化代码、修改样式或添加功能。

**第 6 步：部署**
当满意后，点击"Deploy"按钮选择你的部署平台，一键上线。`
  },
  {
    id: 'best-practices',
    title: '最佳实践',
    content: `为了获得最佳的 Bolt.new 使用体验，我们建议遵循以下最佳实践：

**清晰的需求描述**
使用具体的、细节性的描述，而不是模糊的请求。好的示例："创建一个电商产品列表页面，包含搜索、分类过滤、价格排序和购物车按钮"

**渐进式开发**
不要试图一次性描述所有功能。先实现基础功能，再逐步添加更多功能。

**参考和借鉴**
如果不确定如何开始，可以在"Examples"部分查看现有的项目模板。

**测试功能**
在部署前充分测试应用的各项功能，确保一切正常运行。

**保存和备份**
定期保存你的项目，Bolt.new 会自动保存，但定期导出备份是好习惯。

**代码审查**
虽然 AI 生成的代码质量很高，但在部署到生产环境前，建议审查关键部分的代码。`
  },
  {
    id: 'projects',
    title: '项目类型',
    content: `Bolt.new 支持多种项目类型来满足不同的开发需求：

**Web 应用** - 构建交互式的单页应用（SPA），包括任务管理、数据可视化等。

**电商平台** - 创建完整的在线商店，包含产品页面、购物车、支付集成。

**博客系统** - 构建内容管理平台，支持发布、编辑和评论功能。

**数据仪表板** - 创建数据可视化和分析工具，展示关键指标。

**协作工具** - 构建团队协作应用，如项目管理、沟通工具等。

**移动应用** - 使用 React Native 或 Flutter 框架构建跨平台应用。

每种项目类型都预配置了必要的框架和库，你可以直接开始开发。`
  },
  {
    id: 'ai-capabilities',
    title: 'AI 能力',
    content: `Bolt.new 中的 AI 助手具有强大的开发能力：

**理解上下文** - AI 能够理解你的项目需求和代码现状，提供有针对性的建议。

**技术知识** - 支持最新的 Web 开发技术和最佳实践，包括性能优化、安全性考虑等。

**代码生成** - 可以生成完整的组件、页面和功能，节省大量开发时间。

**问题解决** - 遇到 bug 时，描述症状，AI 可以帮你快速定位和修复问题。

**学习资源** - AI 可以解释代码、提供教学建议和技术指导。

**性能优化** - 提出性能改进建议，帮助你优化应用。`
  },
  {
    id: 'deployment',
    title: '部署指南',
    content: `将你的应用部署到生产环境非常简单：

**选择部署平台**
Bolt.new 支持多个流行的部署平台：
- Vercel - 最佳选择，优化了 Next.js 部署
- Netlify - 适合静态网站和 React 应用
- GitHub Pages - 免费选项，适合静态内容
- 自托管 - 在自己的服务器上部署

**连接账户**
在 Bolt.new 中点击"Deploy"，选择平台，连接你的账户。

**配置环境变量**
如果应用需要环境变量（如 API 密钥），在部署平台中配置它们。

**一键部署**
点击"Deploy"按钮，Bolt.new 会自动处理构建和部署。

**检查部署**
访问生成的 URL 检查应用是否正确运行。

**更新**
修改代码后再次点击"Deploy"即可更新生产环境。`
  },
  {
    id: 'collaboration',
    title: '协作与分享',
    content: `Bolt.new 提供多种方式进行项目协作和分享：

**项目分享** - 通过生成的链接分享你的项目给他人查看或评论。

**协作编辑** - 邀请团队成员一起编辑同一个项目（需要高级计划）。

**版本控制** - 项目自动保存每个版本，可以回滚到之前的版本。

**评论和反馈** - 在代码或设计上留下评论，便于团队讨论。

**导出代码** - 随时可以导出完整的项目代码到本地或其他 Git 仓库。

**社区分享** - 将优秀项目分享到 Bolt.new 社区，获得反馈和认可。`
  },
  {
    id: 'troubleshooting',
    title: '常见问题解答',
    content: `在使用 Bolt.new 时遇到问题？以下是一些常见的解决方案：

**Q: AI 生成的代码不符合我的需求**
A: 尽可能详细地描述你的需求。使用具体的例子说明你想要什么。如果 AI 误解了，可以纠正它并重新要求。

**Q: 如何修改已生成的代码？**
A: 直接在代码编辑器中修改，或告诉 AI 你想做的改动，让它帮你修改。

**Q: 应用运行很慢，如何优化？**
A: 向 AI 描述性能问题，请它提供优化建议。通常涉及代码分割、缓存策略等。

**Q: 如何连接数据库？**
A: 在初始化项目时选择数据库选项，或向 AI 描述你的数据需求。

**Q: 支持哪些支付方式集成？**
A: 支持 Stripe、PayPal 等主流支付网关。告诉 AI 你想使用哪个支付方式。

**Q: 如何处理用户认证和授权？**
A: Bolt.new 支持多种认证方式。向 AI 描述你的需求，它会为你配置相应的认证系统。

**Q: 如何监控和分析应用性能？**
A: 部署后可以集成 Google Analytics、Sentry 等监控工具。`
  },
  {
    id: 'tips-tricks',
    title: '小贴士与技巧',
    content: `以下是一些能帮你更高效使用 Bolt.new 的小贴士：

**使用模板加速**
社区提供了许多项目模板，从模板开始往往比从零开始更快。

**借鉴优秀项目**
浏览社区中的优秀项目，学习最佳实践。

**分阶段开发**
大项目分成多个小阶段开发，比一次性做完更容易管理。

**充分利用 AI 的学习能力**
不仅让 AI 生成代码，还可以让它解释代码、提供教学。

**定期备份**
虽然 Bolt.new 会自动保存，但定期导出代码备份是好习惯。

**加入社区**
参与 Bolt.new 社区，获取最新资讯、学习他人经验。

**试验和探索**
不要害怕尝试新想法。Bolt.new 可以快速验证概念。

**保持 AI 对话上下文**
保持与 AI 的对话历史，这样 AI 能更好地理解你的项目。`
  }
];

export default function GettingStarted() {
  const [activeSection, setActiveSection] = useState('intro');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const currentSection = sections.find(s => s.id === activeSection);

  return (
    <div className="min-h-screen bg-white">
      <Header currentPage="guide" />
      <div className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-64 flex-shrink-0">
              <div className="hidden lg:block sticky top-24 bg-gray-50 rounded-2xl p-6 border border-gray-200">
                <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-4">
                  目录导航
                </h3>
                <nav className="space-y-2">
                  {sections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => {
                        setActiveSection(section.id);
                        setIsMobileMenuOpen(false);
                      }}
                      className={`w-full text-left px-4 py-3 rounded-lg transition-all flex items-center justify-between group ${
                        activeSection === section.id
                          ? 'bg-blue-600 text-white'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      <span className="text-sm font-medium">{section.title}</span>
                      {activeSection === section.id && (
                        <ChevronRight className="w-4 h-4" />
                      )}
                    </button>
                  ))}
                </nav>
              </div>

              <div className="lg:hidden mb-6">
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="w-full flex items-center justify-between bg-blue-600 text-white px-4 py-3 rounded-lg font-semibold"
                >
                  <span>目录导航</span>
                  {isMobileMenuOpen ? (
                    <X className="w-5 h-5" />
                  ) : (
                    <Menu className="w-5 h-5" />
                  )}
                </button>
                {isMobileMenuOpen && (
                  <nav className="mt-3 bg-gray-50 rounded-lg border border-gray-200 p-4 space-y-2">
                    {sections.map((section) => (
                      <button
                        key={section.id}
                        onClick={() => {
                          setActiveSection(section.id);
                          setIsMobileMenuOpen(false);
                        }}
                        className={`w-full text-left px-4 py-2 rounded transition-all text-sm font-medium ${
                          activeSection === section.id
                            ? 'bg-blue-600 text-white'
                            : 'text-gray-700 hover:bg-gray-100'
                        }`}
                      >
                        {section.title}
                      </button>
                    ))}
                  </nav>
                )}
              </div>
            </div>

            <div className="flex-1 lg:max-w-4xl">
              <div className="mb-8">
                <h1 className="text-5xl font-bold text-gray-900 mb-4">
                  入门指南
                </h1>
                <p className="text-xl text-gray-600">
                  学习如何使用 Bolt.new 快速构建和部署应用
                </p>
              </div>

              {currentSection && (
                <div className="bg-white">
                  <div className="mb-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">
                      {currentSection.title}
                    </h2>
                    <div className="prose prose-lg max-w-none text-gray-700">
                      {currentSection.content.split('\n\n').map((paragraph, index) => (
                        <p
                          key={index}
                          className="leading-relaxed mb-4 whitespace-pre-wrap text-base"
                        >
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>

                  <div className="border-t border-gray-200 pt-8 mt-8">
                    <div className="flex items-center justify-between">
                      <div>
                        {activeSection !== 'intro' && (
                          <button
                            onClick={() => {
                              const currentIndex = sections.findIndex(
                                s => s.id === activeSection
                              );
                              if (currentIndex > 0) {
                                setActiveSection(sections[currentIndex - 1].id);
                                window.scrollTo(0, 0);
                              }
                            }}
                            className="text-blue-600 hover:text-blue-700 font-semibold transition-colors"
                          >
                            ← 上一节
                          </button>
                        )}
                      </div>
                      <div>
                        {activeSection !== 'tips-tricks' && (
                          <button
                            onClick={() => {
                              const currentIndex = sections.findIndex(
                                s => s.id === activeSection
                              );
                              if (currentIndex < sections.length - 1) {
                                setActiveSection(sections[currentIndex + 1].id);
                                window.scrollTo(0, 0);
                              }
                            }}
                            className="text-blue-600 hover:text-blue-700 font-semibold flex items-center transition-colors"
                          >
                            下一节 →
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
