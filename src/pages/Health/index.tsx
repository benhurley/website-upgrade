import styled from "styled-components";
import { FadeInComponent } from "../../helpers/FadeInComponent";
import { SlideInText } from "../../helpers/SlideInText";
import { productData } from "../Websites/productData";
import { CardWithCTAs } from "../../components/CardWithCTAs";

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

export const Health = () => {
    return (
        <FadeInComponent>
            <FadeInComponent timeout={250}>
                <SlideInText text="Save Your Balls" size="h1" />
                <Row>
                    <Col>
                        <HyperLink
                            target='_blank'
                            rel='noopener noreferrer'
                            href='https://www.npr.org/sections/health-shots/2024/05/22/1252831827/microplastics-testicles-humans-health'
                        >
                            <RoundedImg src="../../src/img/nrp.webp" />
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
            <Disclaimer>Disclaimer: These are affilicate links.</Disclaimer>
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
        </FadeInComponent>
    );
}