import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Header from "../components/Header";
import ContactForm from "../components/ContactForm";
import Content, { HTMLContent } from "../components/Content";

export const PledgePageTemplate = ({
  title,
  subtitle,
  image,
  content,
  contentComponent
}) => {
  const PageContent = contentComponent || Content;

  return (
    <section className="section section--gradient">
      <div className="container">
        <Header title={title} image={image} subtitle={subtitle} />
        <div className="columns">
          <div className="column is-6">
            <div className="section">
              <PageContent className="content" content={content} />
              <ContactForm />
            </div>
          </div>
          <div className="column is-6">
            <div className="section"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

PledgePageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func
};

const PledgePage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <PledgePageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        subtitle={post.frontmatter.subtitle}
        image={post.frontmatter.image}
        content={post.html}
      />
    </Layout>
  );
};

PledgePage.propTypes = {
  data: PropTypes.object.isRequired
};

export default PledgePage;

export const pledgePageQuery = graphql`
  query PledgePage($id: String!) {
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
