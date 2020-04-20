import React, { useState } from "react";
import { useStaticQuery, graphql } from "gatsby";
import Layout from "../components/Layout/Layout";
import SEO from "../components/seo";
import styled from "styled-components";
import BlockContent from "@sanity/block-content-to-react";
import {
  Player,
  ControlBar,
  CurrentTimeDisplay,
  VolumeMenuButton,
} from "video-react";

const HeroSection = styled.section`
  position: relative;
`;

const HeroSectionAsset = styled.img`
  width: 100%;

  @media (min-width: 1024px) {
    margin-bottom: 0;
  }
`;

const HeroTitleSection = styled.aside`
  padding: 20px;

  @media (min-width: 1024px) {
    position: absolute;
    left: 20px;
    bottom: 20px;
  }
`;

const HeroTitle = styled.h1`
  font-size: 2.5rem;
  margin: 0;

  @media (min-width: 1024px) {
    font-size: 4rem;
    padding-right: 20px;
  }

  @media (min-width: 1400px) {
    font-size: 6rem;
  }
`;

const HeroSubtitle = styled.h2`
  margin: 0.25rem 0 0.5rem;
  font-size: 1rem;

  @media (min-width: 1024px) {
    font-size: 1.33333333rem;
    margin: 0;
    padding-right: 20px;
  }
  color: #d5dee2;
`;

const Step = styled.section`
  display: flex;
  flex-direction: column;
  margin: 50px 0px;
  padding: 20px;

  @media (min-width: 1024px) {
    p {
      font-size: 20px;
    }
    margin: 300px 0;
    flex-direction: row;
    justify-content: flex-end;
    flex-wrap: wrap;
  }

  @media (min-width: 1200px) {
    p {
      font-size: 24px;
    }
  }
`;
const StepSectionTitle = styled.h3`
  font-size: 2em;
  padding: 0 20px 40px 0;
  margin: 0;
  @media (min-width: 1024px) {
    font-size: 2.25rem;
    width: 25%;
    padding: 0 20px 0 0;
  }

  @media (min-width: 1200px) {
    font-size: 2.5rem;
  }
`;

const StepSectionInfo = styled.aside`
  p {
    margin: 0 0 1em;
    max-width: 75ch;
    line-height: 1.25;
  }
  @media (min-width: 1024px) {
    width: 50%;
  }
`;

const StepSectionAsset = styled.aside`
  padding: 50px 0px;
  width: 100%;

  img {
    max-width: 100%;
    width: 100%;
  }

  .video-react-control-bar {
    display: none;
  }

  video:focus {
    outline: 1px solid transparent;
  }

  @media (min-width: 1024px) {
    padding: 300px 0px 0px;
  }
`;

const CaseStudy = () => {
  const data = useStaticQuery(graphql`
    {
      allSanityCaseStudy {
        nodes {
          heroAsset {
            asset {
              title
              url
            }
          }
          title
          subtitle
          step1Title
          step1Subtitle
          _rawStep1Description
          step1Asset {
            asset {
              url
              title
              _type
            }
          }
          step2Title
          step2Subtitle
          _rawStep2Description
          step2Asset {
            asset {
              url
              title
              _type
            }
          }
          step3Title
          step3Subtitle
          _rawStep3Description
          step3Asset {
            asset {
              url
              title
              _type
            }
          }
          step4Title
          step4Subtitle
          _rawStep4Description
          step4Asset {
            asset {
              url
              title
              _type
            }
          }
          step5Title
          step5Subtitle
          _rawStep5Description
          step5Asset {
            asset {
              url
              title
              _type
            }
          }
          step6Title
          step6Subtitle
          _rawStep6Description
          step6Asset {
            asset {
              url
              title
              _type
            }
          }
        }
      }
    }
  `);

  const [caseStudy] = useState(data.allSanityCaseStudy.nodes[0]);

  return (
    <Layout>
      <SEO title="Case Study" description="" />
      <HeroSection>
        <HeroSectionAsset src={caseStudy.heroAsset.asset.url} />
        <HeroTitleSection>
          <HeroTitle>{caseStudy.title}</HeroTitle>
          <HeroSubtitle>{caseStudy.subtitle}</HeroSubtitle>
        </HeroTitleSection>
      </HeroSection>

      <Step data-id={caseStudy.step1Title}>
        <StepSectionTitle>{caseStudy.step1Title}</StepSectionTitle>
        <StepSectionInfo>
          <BlockContent blocks={caseStudy._rawStep1Description} />
        </StepSectionInfo>
        <StepSectionAsset>
          {caseStudy.step1Asset.asset.url.split(".")[
            caseStudy.step1Asset.asset.url.split(".").length - 1
          ] === "gif" ||
          caseStudy.step1Asset.asset.url.split(".")[
            caseStudy.step1Asset.asset.url.split(".").length - 1
          ] === "png" ||
          caseStudy.step1Asset.asset.url.split(".")[
            caseStudy.step1Asset.asset.url.split(".").length - 1
          ] === "jpg" ? (
            <img
              src={caseStudy.step1Asset.asset.url}
              alt={caseStudy.step1Title}
            />
          ) : (
            <Player
              playsInline
              autoPlay={true}
              loop={true}
              muted={true}
              src={caseStudy.step1Asset.asset.url}
            >
              <ControlBar autoHide={true}>
                <CurrentTimeDisplay order={4.1} />
                <VolumeMenuButton disabled />
              </ControlBar>
            </Player>
          )}
        </StepSectionAsset>
      </Step>
      <Step data-id={caseStudy.step2Title}>
        <StepSectionTitle>{caseStudy.step2Title}</StepSectionTitle>
        <StepSectionInfo>
          <BlockContent blocks={caseStudy._rawStep2Description} />
        </StepSectionInfo>
        <StepSectionAsset>
          {caseStudy.step2Asset.asset.url.split(".")[
            caseStudy.step2Asset.asset.url.split(".").length - 1
          ] === "gif" ||
          caseStudy.step2Asset.asset.url.split(".")[
            caseStudy.step2Asset.asset.url.split(".").length - 1
          ] === "png" ||
          caseStudy.step2Asset.asset.url.split(".")[
            caseStudy.step2Asset.asset.url.split(".").length - 1
          ] === "jpg" ? (
            <img
              src={caseStudy.step2Asset.asset.url}
              alt={caseStudy.step2Title}
            />
          ) : (
            <Player
              playsInline
              autoPlay={true}
              loop={true}
              muted={true}
              src={caseStudy.step2Asset.asset.url}
            >
              <ControlBar autoHide={true}>
                <CurrentTimeDisplay order={4.1} />
                <VolumeMenuButton disabled />
              </ControlBar>
            </Player>
          )}
        </StepSectionAsset>
      </Step>
      <Step data-id={caseStudy.step3Title}>
        <StepSectionTitle>{caseStudy.step3Title}</StepSectionTitle>
        <StepSectionInfo>
          <BlockContent blocks={caseStudy._rawStep3Description} />
        </StepSectionInfo>
        <StepSectionAsset>
          {caseStudy.step3Asset.asset.url.split(".")[
            caseStudy.step3Asset.asset.url.split(".").length - 1
          ] === "gif" ||
          caseStudy.step3Asset.asset.url.split(".")[
            caseStudy.step3Asset.asset.url.split(".").length - 1
          ] === "png" ||
          caseStudy.step3Asset.asset.url.split(".")[
            caseStudy.step3Asset.asset.url.split(".").length - 1
          ] === "jpg" ? (
            <img
              src={caseStudy.step3Asset.asset.url}
              alt={caseStudy.step3Title}
            />
          ) : (
            <Player
              playsInline
              autoPlay={true}
              loop={true}
              muted={true}
              src={caseStudy.step3Asset.asset.url}
            >
              <ControlBar autoHide={true}>
                <CurrentTimeDisplay order={4.1} />
                <VolumeMenuButton disabled />
              </ControlBar>
            </Player>
          )}
        </StepSectionAsset>
      </Step>
      <Step data-id={caseStudy.step4Title}>
        <StepSectionTitle>{caseStudy.step4Title}</StepSectionTitle>
        <StepSectionInfo>
          <BlockContent blocks={caseStudy._rawStep4Description} />
        </StepSectionInfo>
        <StepSectionAsset>
          {caseStudy.step4Asset.asset.url.split(".")[
            caseStudy.step4Asset.asset.url.split(".").length - 1
          ] === "gif" ||
          caseStudy.step4Asset.asset.url.split(".")[
            caseStudy.step4Asset.asset.url.split(".").length - 1
          ] === "png" ||
          caseStudy.step4Asset.asset.url.split(".")[
            caseStudy.step4Asset.asset.url.split(".").length - 1
          ] === "jpg" ? (
            <img
              src={caseStudy.step4Asset.asset.url}
              alt={caseStudy.step4Title}
            />
          ) : (
            <Player
              playsInline
              autoPlay={true}
              loop={true}
              muted={true}
              src={caseStudy.step4Asset.asset.url}
            >
              <ControlBar autoHide={true}>
                <CurrentTimeDisplay order={4.1} />
                <VolumeMenuButton disabled />
              </ControlBar>
            </Player>
          )}
        </StepSectionAsset>
      </Step>
      <Step data-id={caseStudy.step5Title}>
        <StepSectionTitle>{caseStudy.step5Title}</StepSectionTitle>
        <StepSectionInfo>
          <BlockContent blocks={caseStudy._rawStep5Description} />
        </StepSectionInfo>
        <StepSectionAsset>
          {caseStudy.step5Asset.asset.url.split(".")[
            caseStudy.step5Asset.asset.url.split(".").length - 1
          ] === "gif" ||
          caseStudy.step5Asset.asset.url.split(".")[
            caseStudy.step5Asset.asset.url.split(".").length - 1
          ] === "png" ||
          caseStudy.step5Asset.asset.url.split(".")[
            caseStudy.step5Asset.asset.url.split(".").length - 1
          ] === "jpg" ? (
            <img
              src={caseStudy.step5Asset.asset.url}
              alt={caseStudy.step5Title}
            />
          ) : (
            <Player
              playsInline
              autoPlay={true}
              loop={true}
              muted={true}
              src={caseStudy.step5Asset.asset.url}
            >
              <ControlBar autoHide={true}>
                <CurrentTimeDisplay order={4.1} />
                <VolumeMenuButton disabled />
              </ControlBar>
            </Player>
          )}
        </StepSectionAsset>
      </Step>
      <Step data-id={caseStudy.step6Title}>
        <StepSectionTitle>{caseStudy.step6Title}</StepSectionTitle>
        <StepSectionInfo>
          <BlockContent blocks={caseStudy._rawStep6Description} />
        </StepSectionInfo>
        <StepSectionAsset>
          {caseStudy.step6Asset.asset.url.split(".")[
            caseStudy.step6Asset.asset.url.split(".").length - 1
          ] === "gif" ||
          caseStudy.step6Asset.asset.url.split(".")[
            caseStudy.step6Asset.asset.url.split(".").length - 1
          ] === "png" ||
          caseStudy.step6Asset.asset.url.split(".")[
            caseStudy.step6Asset.asset.url.split(".").length - 1
          ] === "jpg" ? (
            <img
              src={caseStudy.step6Asset.asset.url}
              alt={caseStudy.step6Title}
            />
          ) : (
            <Player
              playsInline
              autoPlay={true}
              loop={true}
              muted={true}
              src={caseStudy.step6Asset.asset.url}
            >
              <ControlBar autoHide={true}>
                <CurrentTimeDisplay order={4.1} />
                <VolumeMenuButton disabled />
              </ControlBar>
            </Player>
          )}
        </StepSectionAsset>
      </Step>
    </Layout>
  );
};

export default CaseStudy;
