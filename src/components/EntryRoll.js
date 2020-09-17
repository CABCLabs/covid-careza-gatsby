import React from "react";
import PropTypes from "prop-types";
import { Link, graphql, StaticQuery } from "gatsby";
import PreviewCompatibleImage from "./PreviewCompatibleImage";

class EntryRoll extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;
    function shuffle(array) {
      return [...array].sort(() => Math.random() - 0.5);
  }

  const sortedArray = shuffle(posts);

    return (
      <div>
        {Object.entries(postGroups).map(([date, sortedArray]) => {
          console.log(date, posts);
          return (
            <div className="blog-day-block">
              <h4 className="content">{date}</h4>
              <div className="columns is-multiline">
                {sortedArray &&
                  sortedArray.map((post) => (
                    <div className="is-parent column is-4" key={post.id}>
                      <article
                        className={`blog-list-item tile is-child box notification ${
                          post.frontmatter.featuredpost ? "is-featured" : ""
                        }`}
                      >
                        <header>
                          {post.frontmatter.imageEntry ? (
                            <div className="featured-thumbnail">
                              <PreviewCompatibleImage
                                imageInfo={{
                                  image: post.frontmatter.imageEntry,
                                  alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                                }}
                              />
                            </div>
                          ) : null}
                        </header>
                        <p className="post-meta">
                          <Link
                            className="title has-text-primary is-size-4"
                            to={post.fields.slug}
                          >
                            {post.frontmatter.title}
                          </Link>
                          {/* <span className="subtitle is-size-5 is-block">
                            {post.frontmatter.date}
                          </span> */}
                        
                        </p>
                      </article>
                    </div>
                  ))}
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

EntryRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

export default () => (
  <StaticQuery
    query={graphql`
      query EntryRollQuery {
        allMarkdownRemark(
          limit: 3
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { station: { eq: "radio1" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                title
                VideoEntryUrl
                templateKey
                date(formatString: "DD/MM/YYYY")
                featuredpost
                imageEntry {
                  childImageSharp {
                    fluid(maxWidth: 2048, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <EntryRoll data={data} count={count} />}
  />
);
