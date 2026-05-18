import logoImg from "/logo-new.png";
import style from "./index.module.scss";
import { observer } from "mobx-react-lite";

interface LogoProps {
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
          alt="Logo" 
          className={style.logoImage}
          title={title}
        />
      )}
      <span>{title}</span>
    </div>
  );
});
