import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import { Link } from "gatsby";
import Header from "../components/Header";
import Content, { HTMLContent } from "../components/Content";

export const CompetitionHomePageTemplate = ({
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
        <div className="column is-8">
          <div className="section">
          <h1 style={{ fontSize: `3rem`, fontWeight: '500' }}>{title}</h1>
            <h2>Take action, co-create content and share your experiences
</h2>
<p>The co-creation of content sparks opportunities for dialogue where men reflect on their personal relationship with violence and old social norms on a mass scale. Through content co-creation we’re bringing these aspects into greater consciousness and generating opportunities for healing. We’re then asking men what action they’re going to take to make a difference.
</p>
          </div>
        </div>
      </div>
      <div className="section">
        <h2>Choose your radio station</h2>
        </div>
        <div className="section">
      <div className="columns">
      <Link to="/competition/radio1" className="column is-4 radioStation">
</Link>
<Link to="/competition/radio1" className="column is-4 radioStation">
</Link>
<Link to="/competition/radio1" className="column is-4 radioStation">
</Link>
        </div>
      <div className="columns">
      <Link to="/competition/radio1" className="column is-4 radioStation">
</Link>
<Link to="/competition/radio1" className="column is-4 radioStation">
</Link>
      </div>
    </div>
    </div>
  </section>
  );
};

CompetitionHomePageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

const CompetitionHomePage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <CompetitionHomePageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        subtitle={post.frontmatter.subtitle}
        image={post.frontmatter.image}
        content={post.html}
      />
    </Layout>
  );
};

CompetitionHomePage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default CompetitionHomePage;

export const CompetitionHomePageQuery = graphql`
  query CompetitionHomePage($id: String!) {
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
