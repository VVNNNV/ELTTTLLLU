import { Typography } from "antd";
import logoImg from "/logo-new.png";
import style from "./index.module.scss";
import { observer } from "mobx-react-lite";

interface LogoProps {
  iconSize?: number;
  title?: string;
  showImage?: boolean;
}

export const Logo = observer(({ title = "PicUn tu", showImage = true }: LogoProps) => {
  return (
    <div 
      className={style.container} 
      onClick={() => window.open("https://tttai.eu.cc", "_blank")}
      style={{ cursor: "pointer" }}
    >
      {showImage && (
        <img 
          src={logoImg} 
          alt="PicUn tu Logo" 
          className={style.logoImage}
          title={title}
        />
      )}
      <Typography.Text style={{ fontWeight: 'bold', fontSize: '18px' }}>{title}</Typography.Text>
    </div>
  );
});
