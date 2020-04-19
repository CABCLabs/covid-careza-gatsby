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
      {/* <Header title={title} image={image} subtitle={subtitle} /> */}
      <div className="columns">
      <div className="column is-4 hideMob">
      <img src="/img/join.jpg"/>
      </div>
        <div className="column is-6">
          <div className="section">
          <h1 style={{ fontSize: `2rem`, fontWeight: '500' }}>Join CareZA for information that kickstarts healthy conversations</h1>
          <PageContent className="content" content={content} />
              <ContactForm />
          <div className="content">
      <h2 style={{ fontSize: `1.5rem`, fontWeight: '500' }}>The CareZA Manifesto</h2>
      <p>
Wise up and Rise up to fake news and hate speech!<br/>
Information is free but don’t let misinformation enslave us.<br/>
Together we are strong, divided we fall prey to negativity.<br/>
So BE the change. <br/>
Be a Citizen Activist.<br/>
Get people talking about serious, sad, even scary issues.<br/>
Open minds. <br/>
Let’s connect.<br/>
Let’s debate. Let’s even disagree.<br/>
But let’s share information that’s accurate.<br/>
Let’s spread information that helps, not hurts. <br/>
Let’s Care South Africa. <br/>
</p>
</div>
        </div>
        </div>
        <div className="column is-4 hideDesk">
      <img src="/img/join.jpg"/>
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
