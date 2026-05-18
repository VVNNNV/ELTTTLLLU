# Pic Smaller 广告集成指南

## 概述

本指南说明如何在 Pic Smaller 项目中集成广告代码。项目已为您准备了多个广告放置位置和相关组件。

## 项目结构

```
src/
├── components/
│   ├── AdPlaceholder/              # 广告占位符组件（新增）
│   │   ├── index.tsx
│   │   └── index.module.scss
│   ├── Logo/                       # Logo 组件（已修改）
│   │   ├── index.tsx
│   │   └── index.module.scss
│   └── ...
├── pages/
│   └── home/
│       ├── index.tsx               # 首页（已修改）
│       ├── index.module.scss       # 首页样式（已修改）
│       ├── LeftContent.tsx
│       └── RightOption.tsx
└── ...

public/
├── logo-new.png                    # 新 Logo（新增）
├── background-hero.png             # 英雄背景图（新增）
├── background-upload.png           # 上传区背景图（新增）
└── logo.svg                        # 原始 Logo
```

## 广告放置位置

### 1. 页头广告 (Header Advertisement)

**位置**: 应用顶部导航栏下方  
**文件**: `src/pages/home/index.tsx`  
**推荐尺寸**: 728x90px (Leaderboard) 或 970x90px (Large Leaderboard)  
**适用场景**: 品牌广告、推广活动

**集成代码示例**:
```tsx
import { AdPlaceholder } from '@/components/AdPlaceholder';

const headerAdCode = `
  <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-xxxxxxxxxxxxxxxx"
     crossorigin="anonymous"><\/script>
  <ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-xxxxxxxxxxxxxxxx"
     data-ad-slot="xxxxxxxxxx"
     data-ad-format="auto"
     data-full-width-responsive="true"><\/ins>
  <script>
     (adsbygoogle = window.adsbygoogle || []).push({});
  <\/script>
`;

// 在 Header 组件中添加
<AdPlaceholder placement="header" adCode={headerAdCode} />
```

**具体位置**: `src/pages/home/index.tsx` 中的 `Header` 组件，在语言选择器下方

```tsx
const Header = observer(() => {
  const { isPC } = useResponse();

  return (
    <Flex align="center" justify="space-between" className={style.header}>
      <Logo title={gstate.locale?.logo} />
      
      {/* 页头广告位置 */}
      <AdPlaceholder placement="header" adCode={headerAdCode} />
      
      <Space>
        {/* ... 其他内容 */}
      </Space>
    </Flex>
  );
});
```

### 2. 侧边栏广告 (Sidebar Advertisement)

**位置**: 右侧压缩选项面板上方或下方  
**文件**: `src/pages/home/RightOption.tsx`  
**推荐尺寸**: 300x250px (Medium Rectangle) 或 160x600px (Wide Skyscraper)  
**适用场景**: 产品推荐、相关服务

**集成代码示例**:
```tsx
import { AdPlaceholder } from '@/components/AdPlaceholder';

// 在 RightOption 组件中添加
<AdPlaceholder placement="sidebar" adCode={sidebarAdCode} />
```

**具体位置**: `src/pages/home/RightOption.tsx` 中的主容器

```tsx
export const RightOption = observer(() => {
  const { isPC } = useResponse();

  const content = (
    <div className={style.container}>
      {/* 侧边栏广告 */}
      <AdPlaceholder placement="sidebar" adCode={sidebarAdCode} />
      
      {/* 其他内容 */}
      <CompressOption />
    </div>
  );

  return isPC ? (
    <div className={style.rightOption}>{content}</div>
  ) : (
    <Drawer title="Options" onClose={() => (homeState.showOption = false)} open={homeState.showOption}>
      {content}
    </Drawer>
  );
});
```

### 3. 页脚广告 (Footer Advertisement)

**位置**: 页面底部  
**文件**: `src/pages/home/LeftContent.tsx`  
**推荐尺寸**: 728x90px (Leaderboard)  
**适用场景**: 品牌推广、合作伙伴链接

**集成代码示例**:
```tsx
import { AdPlaceholder } from '@/components/AdPlaceholder';

// 在 LeftContent 组件底部添加
<AdPlaceholder placement="footer" adCode={footerAdCode} />
```

**具体位置**: `src/pages/home/LeftContent.tsx` 的底部

```tsx
export const LeftContent = observer(() => {
  return (
    <div className={style.container}>
      {/* 文件列表内容 */}
      <div className={style.content}>
        {/* ... */}
      </div>
      
      {/* 页脚广告 */}
      <AdPlaceholder placement="footer" adCode={footerAdCode} />
    </div>
  );
});
```

### 4. 上传卡片内联广告 (Inline Advertisement)

**位置**: 上传卡片区域下方  
**文件**: `src/components/UploadCard/index.tsx`  
**推荐尺寸**: 300x250px (Medium Rectangle)  
**适用场景**: 相关工具推荐、赞助商链接

**集成代码示例**:
```tsx
import { AdPlaceholder } from '@/components/AdPlaceholder';

// 在 UploadCard 组件中添加
<AdPlaceholder placement="inline" adCode={inlineAdCode} />
```

**具体位置**: `src/components/UploadCard/index.tsx` 的底部

```tsx
export const UploadCard = observer(() => {
  return (
    <div className={style.container}>
      {/* 上传卡片内容 */}
      <div className={style.inner}>
        {/* ... */}
      </div>
      
      {/* 内联广告 */}
      <AdPlaceholder placement="inline" adCode={inlineAdCode} />
      
      {/* 隐藏的文件输入 */}
      <input ref={inputRef} type="file" multiple hidden />
    </div>
  );
});
```

## 广告代码集成方法

### 方法 1: 直接在组件中使用 AdPlaceholder

```tsx
import { AdPlaceholder } from '@/components/AdPlaceholder';

// Google AdSense 代码示例
const headerAdCode = `
  <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-xxxxxxxxxxxxxxxx"
     crossorigin="anonymous"><\/script>
  <ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-xxxxxxxxxxxxxxxx"
     data-ad-slot="xxxxxxxxxx"
     data-ad-format="auto"
     data-full-width-responsive="true"><\/ins>
  <script>
     (adsbygoogle = window.adsbygoogle || []).push({});
  <\/script>
`;

export const MyComponent = () => {
  return (
    <div>
      <AdPlaceholder placement="header" adCode={headerAdCode} />
    </div>
  );
};
```

### 方法 2: 使用环境变量配置

**文件**: `.env` 或 `.env.local`
```
VITE_HEADER_AD_CODE="<script>...</script>"
VITE_SIDEBAR_AD_CODE="<script>...</script>"
VITE_FOOTER_AD_CODE="<script>...</script>"
VITE_INLINE_AD_CODE="<script>...</script>"
```

**在组件中使用**:
```tsx
import { AdPlaceholder } from '@/components/AdPlaceholder';

const headerAdCode = import.meta.env.VITE_HEADER_AD_CODE || '';

export const Header = () => {
  return (
    <AdPlaceholder placement="header" adCode={headerAdCode} />
  );
};
```

### 方法 3: 创建广告配置文件

**文件**: `src/config/ads.config.ts`
```typescript
export const adsConfig = {
  header: {
    enabled: true,
    code: `<script async src="..."><\/script>`,
    placeholder: '728x90',
  },
  sidebar: {
    enabled: true,
    code: `<script async src="..."><\/script>`,
    placeholder: '300x250',
  },
  footer: {
    enabled: true,
    code: `<script async src="..."><\/script>`,
    placeholder: '728x90',
  },
  inline: {
    enabled: true,
    code: `<script async src="..."><\/script>`,
    placeholder: '300x250',
  },
};
```

**在组件中使用**:
```tsx
import { AdPlaceholder } from '@/components/AdPlaceholder';
import { adsConfig } from '@/config/ads.config';

export const Header = () => {
  return (
    <>
      {adsConfig.header.enabled && (
        <AdPlaceholder 
          placement="header" 
          adCode={adsConfig.header.code} 
        />
      )}
    </>
  );
};
```

## 常见广告平台集成

### Google AdSense

1. 注册 [Google AdSense](https://www.google.com/adsense/)
2. 获取您的 Publisher ID (ca-pub-xxxxxxxxxxxxxxxx)
3. 创建广告单元并获取代码
4. 将代码集成到 AdPlaceholder 组件

**代码示例**:
```html
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-xxxxxxxxxxxxxxxx"
   crossorigin="anonymous"></script>
<ins class="adsbygoogle"
   style="display:block"
   data-ad-client="ca-pub-xxxxxxxxxxxxxxxx"
   data-ad-slot="xxxxxxxxxx"
   data-ad-format="auto"
   data-full-width-responsive="true"></ins>
<script>
   (adsbygoogle = window.adsbygoogle || []).push({});
</script>
```

### 百度广告

1. 注册 [百度联盟](https://union.baidu.com/)
2. 创建广告位获取代码
3. 集成到 AdPlaceholder 组件

**代码示例**:
```html
<script>
(function(){
    var _53code = document.createElement("script");
    _53code.src = "http://p.53kf.com/article/getJs?v=1";
    document.head.appendChild(_53code);
})();
</script>
```

### 其他广告平台

- **Adsterra**: https://adsterra.com/
- **PropellerAds**: https://propellerads.com/
- **Monetag**: https://monetag.com/
- **Clickadu**: https://clickadu.com/

## 性能优化建议

1. **延迟加载广告**: 使用条件渲染，仅在需要时加载
2. **异步加载**: 广告脚本应设置 `async` 属性
3. **缓存策略**: 利用浏览器缓存减少重复加载
4. **响应式设计**: 确保广告在不同屏幕尺寸上正常显示

**延迟加载示例**:
```tsx
import { useState, useEffect } from 'react';
import { AdPlaceholder } from '@/components/AdPlaceholder';

export const Header = () => {
  const [showAds, setShowAds] = useState(false);

  useEffect(() => {
    // 页面加载完成后 2 秒显示广告
    const timer = setTimeout(() => {
      setShowAds(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showAds && (
        <AdPlaceholder placement="header" adCode={headerAdCode} />
      )}
    </>
  );
};
```

## 常见问题

### Q: 广告代码不显示？
**A**: 检查以下几点：
- 确保广告代码正确无误
- 检查浏览器控制台是否有错误
- 确认广告平台账户状态正常
- 检查广告过滤器/插件是否阻止了广告

### Q: 如何禁用某个广告位？
**A**: 
```tsx
{adsConfig.header.enabled && (
  <AdPlaceholder 
    placement="header" 
    adCode={adsConfig.header.code} 
  />
)}
```

### Q: 广告尺寸不对？
**A**: 
- 检查 CSS 样式中的 `max-width` 和 `height` 设置
- 确保广告代码中的尺寸与容器匹配
- 使用浏览器开发者工具检查实际渲染尺寸

## 相关文件

- 广告占位符组件: `src/components/AdPlaceholder/`
- Logo 组件: `src/components/Logo/`
- 首页: `src/pages/home/index.tsx`
- 首页样式: `src/pages/home/index.module.scss`
- 右侧选项: `src/pages/home/RightOption.tsx`
- 左侧内容: `src/pages/home/LeftContent.tsx`
- 上传卡片: `src/components/UploadCard/index.tsx`

## 支持

如有问题，请参考项目文档或提交 Issue。

---

**最后更新**: 2024 年  
**版本**: 1.0
