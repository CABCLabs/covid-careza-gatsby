import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

import ReactMarkdown from "react-markdown";
import Layout from "../components/Layout";
import Header from "../components/Header";
import ContactForm from "../components/ContactForm";

import Content, { HTMLContent } from "../components/Content";

import "./landing-page.scss";

export const LandingPageTemplate = ({
  title,
  subtitle,
  image,
  introduction,
  content,
  contentComponent
}) => {
  const PageContent = contentComponent || Content;

  return (
    <div className="landing-page">
      <div className="container">
        <Header title={title} image={image} subtitle={subtitle} />
      </div>

      <div className="introduction">
        <div className="container">
          <div className="columns">
            <div className="column is-4 is-offset-2">
              <div
                className="introduction-content 
                  is-size-6-mobile 
                  is-size-5-tablet 
                  is-size-5-widescreen"
              >
                <ReactMarkdown source={introduction} />
              </div>
            </div>
            <div className="column is-4">
              <ContactForm action="covid/thanks" />
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="columns">
          <div className="column is-8 is-offset-2">
            <PageContent className="content" content={content} />
          </div>
        </div>
      </div>
    </div>
  );
};

LandingPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  introduction: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func
};

const LandingPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <LandingPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        subtitle={post.frontmatter.subtitle}
        image={post.frontmatter.image}
        introduction={post.frontmatter.introduction}
        content={post.html}
      />
    </Layout>
  );
};

LandingPage.propTypes = {
  data: PropTypes.object.isRequired
};

export default LandingPage;

export const landingPageQuery = graphql`
  query LandingPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        subtitle
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        introduction
      }
    }
  }
`;
