import { Typography } from "antd";
import logoImg from "/logo-new.png";
import style from "./index.module.scss";
import { observer } from "mobx-react-lite";

interface LogoProps {
  iconSize?: number;
  title?: string;
  showImage?: boolean;
}

export const Logo = observer(({ title = "PicCompress", showImage = true }: LogoProps) => {
  return (
    <div className={style.container}>
      {showImage && (
        <img 
          src={logoImg} 
          alt="Pic Smaller Logo" 
          className={style.logoImage}
          title={title}
        />
      )}
      {!showImage && <Typography.Text>{title}</Typography.Text>}
    </div>
  );
});
