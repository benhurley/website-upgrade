import styled from "styled-components";
import { FadeInComponent } from "../../helpers/FadeInComponent";
import { SlideInText } from "../../helpers/SlideInText";
import { productData } from "../Websites/productData";
import { CardWithCTAs } from "../../components/CardWithCTAs";
import NPRScreenshot from "../../img/npr.webp";

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: auto;
  margin-left: auto;
  max-width: 1000px;
  margin-bottom: 50px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Col = styled.div`
  display: block;
  justify-content: center;
  align-items: center;
  flex-basis: 0;
  flex-grow: 1;
  max-width: 100%;
  padding-left: 10px;
  padding-right: 10px;

  @media (max-width: 768px) {
    &:not(:last-child) {
      margin-bottom: 20px;
    }
  }
`;

const Grid = styled.div`
    max-width: 1050px;
    margin: 20px auto 40px;
    display: grid;
    gap: 3rem;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`

const HyperLink = styled.a`
color: white;
`

const RoundedImg = styled.img`
border-radius: 4%;
max-width: 18rem;
`

const Disclaimer = styled.i`
font-size: 12px;
`
const SpacedP = styled.p`
margin-top: 2rem;
margin-bottom: 0;
`

const MaxWidthP = styled.p`
padding: 0 2rem;
margin: auto;
max-width: 70rem;
margin-bottom: 2rem;
`

const Citations = styled.div`
margin: 0 2rem;
text-align: left;
margin-top: 2rem;
`


export const Health = () => {
    return (
        <FadeInComponent>
            <FadeInComponent timeout={250}>
                <SlideInText text="Ditch the Platic (& Save Your Balls)" size="h1" />
                <Row>
                    <Col>
                        <HyperLink
                            target='_blank'
                            rel='noopener noreferrer'
                            href='https://www.npr.org/sections/health-shots/2024/05/22/1252831827/microplastics-testicles-humans-health'
                        >
                            <RoundedImg src={NPRScreenshot} />
                        </HyperLink>
                    </Col>
                    <Col>
                        <p>Microplatics are appearing in human testicles at alarming rates...&nbsp;
                            <HyperLink
                                target='_blank'
                                rel='noopener noreferrer'
                                href='https://academic.oup.com/toxsci/advance-article-abstract/doi/10.1093/toxsci/kfae060/7673133?redirectedFrom=fulltext&login=false'
                            >(read the 2024 study)</HyperLink>
                        </p>
                        <SpacedP>To save my balls from <b><i>utter distruction</i></b>, I have made an aggressive effort to replace everyday plastics with healthier alternatives.</SpacedP>
                    </Col>
                </Row>
            </FadeInComponent>
            <h2>My Non-Plastic Picks</h2>
            <Disclaimer>Disclaimer: Amazon affiliate links below.</Disclaimer>
            <Grid>
                {productData.map((product, index) => (
                    <FadeInComponent key={index} timeout={index * 400}>
                        <CardWithCTAs
                            key={index}
                            item={product}
                            imageShape="square"
                            primaryCTAData={{
                                buttonText: "View on Amazon",
                                url: product.url,
                            }}
                        />
                    </FadeInComponent>
                ))}
            </Grid>
            <h2>Why Should I Care?</h2>
            <MaxWidthP>Microplastics are harmful because they can accumulate in the human body and may lead to various health issues, including cardiovascular problems, reproductive issues, and even cancer.¹ ²</MaxWidthP>
            <b>Also, they are <i>literally</i> inside our balls.</b>
            <Citations>
            <hr />
                <div>
                    <Disclaimer>¹ <HyperLink
                        target='_blank'
                        rel='noopener noreferrer'
                        href='https://www.aamc.org/news/microplastics-are-inside-us-all-what-does-mean-our-health'>aamc.org - Microplastics are inside us all. What does that mean for our health?</HyperLink></Disclaimer>
                </div>
                <div>
                    <Disclaimer>² <HyperLink
                        target='_blank'
                        rel='noopener noreferrer'
                        href='https://www.ewg.org/news-insights/news/2024/03/new-study-links-microplastics-serious-health-harms-humans'>ewg.org - New study links microplastics to serious health harms in humans</HyperLink></Disclaimer>
                </div>
            </Citations>
        </FadeInComponent>
    );
}