import ReactLogo from "../img/reactLogo.webp";
import T3Logo from "../img/t3Logo.webp";
import RemixLogo from "../img/remixLogo.webp";
import NextJSLogo from "../img/nextjsLogo.webp";
import GoDaddyLogo from "../img/godaddy.webp";
import WordpressLogo from "../img/wordpress.webp";
import ShopifyLogo from "../img/shopifyLogo.webp";

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
    NextJS: {
        imgUrl: NextJSLogo,
        url: "https://nextjs.org"
    },
    T3: {
        imgUrl: T3Logo,
        url: "https://create.t3.gg"
    },
    Remix: {
        imgUrl: RemixLogo,
        url: "https://remix.run"
    },
    GoDaddy: {
        imgUrl: GoDaddyLogo,
        url: "https://godaddy.com",
    },
    Shopify: {
        imgUrl: ShopifyLogo,
        url: "https://shopify.com",
    },
    Wordpress: {
        imgUrl: WordpressLogo,
        url: "https://wordpress.com",
    }
}
