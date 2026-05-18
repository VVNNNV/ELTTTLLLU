import { ConfigProvider, App as AntApp, theme } from "antd";
import { observer } from "mobx-react-lite";
import { gstate } from "./global";
import { ContextAction } from "./ContextAction";
import { Analytics } from "@vercel/analytics/react";
import { Loading } from "./components/Loading";
import { useResponse } from "./media";
import { useEffect } from "react";

function useMobileVConsole() {
  const { isMobile } = useResponse();
  useEffect(() => {
    if (!isMobile || !import.meta.env.DEV) return;
    let vConsole: any = null;
    import("vconsole").then((result) => {
      vConsole = new result.default({ theme: "dark" });
    });
    return () => vConsole?.destroy();
  }, [isMobile]);
}

export const App = observer(() => {
  useMobileVConsole();

  return (
    <ConfigProvider
      locale={gstate.locale?.antLocale}
      theme={{
        algorithm: gstate.theme === 'dark' ? theme.darkAlgorithm : theme.defaultAlgorithm,
        token: {
          borderRadius: 4,
          colorPrimary: "#ff4d4f", // 使用红色系匹配新 Logo
          colorLink: "#ff4d4f",
          colorSuccess: "#52c41a",
        },
      }}
    >
      <AntApp>
        <ContextAction />
      </AntApp>
      {import.meta.env.MODE === "production" && <Analytics />}
      {gstate.page}
      {gstate.loading && <Loading />}
    </ConfigProvider>
  );
});
