import ReactLogo from "../img/reactLogo.png";
import T3Logo from "../img/t3Logo.png";
import RemixLogo from "../img/remixLogo.png";

type FrameworkMap = {
    [key: string]: {
        imgUrl: string,
        url: string,
    };
};

export const frameworkMap: FrameworkMap = {
    React: {
        imgUrl: ReactLogo,
        url: "https://react.dev"
    },
    T3: {
        imgUrl: T3Logo,
        url: "https://create.t3.gg"
    },
    Remix: {
        imgUrl: RemixLogo,
        url: "https://remix.run"
    },
}