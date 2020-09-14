import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Header from "../components/Header";
import Content, { HTMLContent } from "../components/Content";

export const CompetitionBrandPageTemplate = ({
  title,
  subtitle,
  image,
  content,
  contentComponent,
}) => {
  const PageContent = contentComponent || Content;

  return (
    <section className="section section--gradient">
    <div className="container">
      {/* <Header title={title} image={image} subtitle={subtitle} /> */}
      <div className="columns">
      <div className="column is-4 hideMob">
      <img src="/img/about.jpg"/>
      </div>
        <div className="column is-6">
          <div className="section">
          <h1 style={{ fontSize: `3rem`, fontWeight: '500' }}>{title}</h1>
            <PageContent className="content" content={content} />
          </div>
        </div>
        <div className="column is-4 hideDesk">
      <img src="/img/about.jpg"/>
      </div>
      </div>
    </div>
  </section>
  );
};

CompetitionBrandPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

const CompetitionBrandPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <CompetitionBrandPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        subtitle={post.frontmatter.subtitle}
        image={post.frontmatter.image}
        content={post.html}
      />
    </Layout>
  );
};

CompetitionBrandPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default CompetitionBrandPage;

export const CompetitionBrandPageQuery = graphql`
  query CompetitionBrandPage($id: String!) {
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
      }
    }
  }
`;
