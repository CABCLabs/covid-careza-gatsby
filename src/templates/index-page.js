import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import ReactMarkdown from "react-markdown";

import Layout from "../components/Layout";
import ContactForm from "../components/ContactForm.js";
import "./index-page.scss";

export const IndexPageTemplate = ({
  image,
  heading,
  mission_header,
  mission,
  join_us_header,
  join_us_pitch
}) => (
  <div className="index-page">
    <div className="container"></div>

    <section className="has-background-light">
      <div className="container">
        <h2
          className={`
                 is-size-5-mobile 
                 is-size-4-tablet 
                 is-size-3-widescreen`}
        >
          {mission_header}
        </h2>
        <div>
          <ReactMarkdown source={mission} />
        </div>
      </div>
    </section>

    <section>
      <div className="container">
        <h2
          id="joinus"
          className={` 
                 is-size-5-mobile 
                 is-size-4-tablet 
                 is-size-3-widescreen`}
        >
          {join_us_header}
        </h2>
        <div className="columns">
          <div className="column">
            <ReactMarkdown source={join_us_pitch} />
          </div>
          <div
            className="column is-flex"
            style={{ alignItems: "center", justifyContent: "center" }}
          >
            <div>
              <div>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  heading: PropTypes.string
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate {...frontmatter} />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  })
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        heading
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }

        mission_header
        mission

        join_us_header
        join_us_pitch

        join_us_button
        join_us_button_subtext
      }
    }
  }
`;
