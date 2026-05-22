import { Typography } from "antd";
import style from "./index.module.scss";
import { observer } from "mobx-react-lite";

interface LogoProps {
  iconSize?: number;
  title?: string;
}

export const Logo = observer(({ title = "PicUntu" }: LogoProps) => {
  return (
    <a href="https://tttai.eu.cc" className={style.container} title="返回首页">
      <svg viewBox="0 0 24 24" className={style.icon}>
        <rect x="3" y="2" width="18" height="20" rx="2" fill="none" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="12" cy="9" r="4" fill="none" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M8 17c0-2.2 1.8-4 4-4s4 1.8 4 4" fill="none" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
      <Typography.Text className={style.text}>{title}</Typography.Text>
    </a>
  );
});
