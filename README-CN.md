# InfluAgent Landing Page

InfluAgent 是一个基于 AI 的社交媒体增长助手的落地页项目。项目使用 Next.js 14 构建，采用 TypeScript 和 Tailwind CSS 进行开发。

## 技术栈

- **框架**: Next.js 14
- **语言**: TypeScript
- **样式**: Tailwind CSS
- **UI 组件**: Radix UI
- **状态管理**: React Hooks
- **表单处理**: React Hook Form
- **验证**: Zod
- **图标**: Lucide React

## 功能特点

- 响应式设计
- 深色模式支持
- 现代化 UI 组件
- 性能优化
- SEO 友好
- 可访问性支持

## 项目结构

```plaintext
influagent-landing/
├── app/                    # Next.js 应用目录
│   ├── globals.css        # 全局样式
│   ├── layout.tsx         # 根布局组件
│   └── page.tsx           # 首页组件
├── components/            # React 组件
│   ├── ui/               # UI 基础组件
│   ├── features.tsx      # 特性展示组件
│   ├── hero.tsx          # 主页 Hero 部分
│   ├── pricing.tsx       # 价格方案组件
│   ├── team.tsx          # 团队介绍组件
│   └── testimonial.tsx   # 用户评价组件
├── hooks/                # 自定义 Hooks
├── lib/                  # 工具函数
└── public/              # 静态资源
```

## 主要组件

- **Hero**: 网站主要展示区域
- **Features**: 产品特性展示
- **DashboardPreview**: 仪表盘预览
- **Pricing**: 价格方案
- **Testimonial**: 用户评价
- **Team**: 团队介绍
- **FAQ**: 常见问题
- **CTA**: 行动召唤

## 开始使用

1. 克隆项目:
```bash
git clone <repository-url>
cd influagent-landing
```

2. 安装依赖:
```bash
npm install
```

3. 运行开发服务器:
```bash
npm run dev
```

4. 构建生产版本:
```bash
npm run build
```

5. 启动生产服务器:
```bash
npm start
```

## 环境要求

- Node.js 18.0 或更高版本
- npm 或 yarn

## 配置文件说明

- **next.config.mjs**: Next.js 配置，包含图片优化和实验性功能设置
- **tailwind.config.js**: Tailwind CSS 配置，包含主题和动画设置
- **postcss.config.mjs**: PostCSS 配置
- **tsconfig.json**: TypeScript 配置

## 贡献指南

1. Fork 项目
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启 Pull Request

## 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情

## 联系方式

- 项目维护者: Tempest
- Email: tar118@pitt.edu
