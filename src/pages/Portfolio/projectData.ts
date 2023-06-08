const NippiesScreenshot = require('../../img/nippies.png');
const CryptoCostScreenshot = require('../../img/cryptocost.png')
const DHScreenshot = require('../../img/dh.png')
const BonobosScreenshot = require('../../img/bonobos.png')
const JustBenFYI = require('../../img/justbenfyi.png')

export const projectData = [
    {
        imgUrl: DHScreenshot,
        imgAlt: "Daily Harvest homepage",
        title: "Daily Harvest",
        description: "A plant-based meal delivery service providing a variety of ready-to-eat food.",
        url: "https://daily-harvest.com",
        badges: [{ name: "Dev", color: "#90ee90", }, { name: "Design", color: "#add8e6" },],
    },
    {
        imgUrl: BonobosScreenshot,
        imgAlt: "Bonobos homepage",
        title: "Bonobos",
        description: "An upscale, e-commerce-driven apparel subsidiary of Express that sells menswear.",
        url: "https://bonobos.com",
        badges: [{ name: "Dev", color: "#90ee90" },],
    },
    {
        imgUrl: NippiesScreenshot,
        imgAlt: "Nippies by @ScubaSteveArt",
        title: "Nippies",
        description: "A collection of 100 misfit yeti characters on the Solana Blockchain.",
        url: "https://nippi.es",
        badges: [{ name: "Founding Dev", color: "#ffdab9" },],
    },
    {
        imgUrl: CryptoCostScreenshot,
        imgAlt: "Cryptocost homepage",
        title: "Crypto Cost Engine",
        description: "Gives a cost-basis estimate in USD for a given cryptocurrency purchase.",
        url: "https://cryptocost.netlify.app",
        badges: [{ name: "Founding Dev", color: "#ffdab9" }, { name: "Design", color: "#add8e6" },],
    },
    {
        imgUrl: JustBenFYI,
        imgAlt: "Ben's Portfolio",
        title: "Ben's Portfolio",
        description: "My little corner of the internet. Made with React and designed in Figma by yours truly.",
        url: "https://www.figma.com/file/nDKHo006pyCyPuOlweSIFZ/Design-System?node-id=0%3A1&t=n5H7ynu73OUXOcV6-1",
        badges: [{ name: "Founding Dev", color: "#ffdab9" }, { name: "Design", color: "#add8e6" },],
    },
]