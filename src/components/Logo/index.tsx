import { Typography } from "antd";
import style from "./index.module.scss";
import { observer } from "mobx-react-lite";

interface LogoProps {
  iconSize?: number;
  title?: string;
}

const HOME_URL = "https://www.tttia.com";

export const Logo = observer(({ iconSize = 42, title = "PicUn tu" }: LogoProps) => {
  return (
    <a
      className={style.container}
      href={HOME_URL}
      title="返回 PicUn tu 首页"
      aria-label="点击 PicUn tu Logo 返回首页"
    >
      <img
        src="/logo-new.png"
        width={iconSize}
        height={iconSize}
        alt="PicUn tu 图片压缩工具 Logo"
      />
      <Typography.Text>{title}</Typography.Text>
    </a>
  );
});
