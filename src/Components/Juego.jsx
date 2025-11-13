import { Unity, useUnityContext } from "react-unity-webgl";
//import {} from "../build/build.wasm"

export const Juego = () => {
  const { unityProvider } = useUnityContext({
        loaderUrl: "/build.loader.js",
        dataUrl: "/build.data",
        frameworkUrl: "/build.framework.js",
        codeUrl: "/build.wasm",
  });

  return <div style={{ width: "100%", height: "100vh" }}>
        <Unity
            unityProvider={unityProvider}
            style={{
            width: "100%",
            height: "100%",
            }}
        />
    </div>;
}
  