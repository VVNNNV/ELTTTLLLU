import React from 'react';
import style from './index.module.scss';

interface AdPlaceholderProps {
  placement?: 'header' | 'sidebar' | 'footer' | 'inline';
  adCode?: string;
  className?: string;
}

/**
 * 广告占位符组件
 * 用于在应用中放置广告代码
 * 
 * 使用方式：
 * <AdPlaceholder placement="header" adCode={adCode} />
 * <AdPlaceholder placement="sidebar" adCode={adCode} />
 * <AdPlaceholder placement="footer" adCode={adCode} />
 * <AdPlaceholder placement="inline" adCode={adCode} />
 */
export const AdPlaceholder: React.FC<AdPlaceholderProps> = ({
  placement = 'inline',
  adCode,
  className,
}) => {
  const containerClass = `${style.container} ${style[`ad-${placement}`]} ${className || ''}`;

  return (
    <div className={containerClass}>
      {adCode ? (
        <div 
          className={style.adContent}
          dangerouslySetInnerHTML={{ __html: adCode }}
        />
      ) : (
        <div className={style.placeholder}>
          <p>{placement} Advertisement Slot</p>
        </div>
      )}
    </div>
  );
};
