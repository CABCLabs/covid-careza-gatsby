import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Header from "../components/Header";
import Content, { HTMLContent } from "../components/Content";

export const RonaldTemplate = ({
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
          <div className="column is-12">
            <h3 class="ronaldIntro">
              <strong>
              Ronald will make you look, and think, twice.
              </strong>
            </h3>
          </div>
        </div>
        <div className="columns">
          <div className="column is-12">
            <PageContent className="content" content={content} />
          </div>
        </div>
        <div className="columns">
          <div className="column is-12 infoBox">
          <p>Pete is just an ordinary guy who gets his news and information from social media.</p>
<p>In this mockumentary, we meet Pete and his new-found friend Ronald, who Pete met online. Thing is Pete doesn&rsquo;t realise Ronald is actually a bot.</p>
<p>It might seem obvious to us, but in a digital landscape where bot accounts on Facebook and Twitter appear as human as anyone, it's not that hard to be fooled. And sadly, Pete doesn't realise that he&rsquo;s being duped by a bot into thinking the information he's getting is factual and accurate.</p>
</div></div>
<div className="columns">
          <div className="column is-6 infoBox">
<img src="/img/pete.jpg" width="100%" />
</div>
<div className="column is-6 infoBox">
<img src="/img/ronald.jpg" width="100%" />
</div></div>
<div className="columns">
          <div className="column is-12 infoBox">
<p>Bots are all over social media, we can&rsquo;t escape them. But we can be aware and discerning about who we follow, and what information we share, especially facts about Covid-19 and the vaccine. Follow only credible news sources that have research-backed evidence about a news story.</p>
<p>Watch Pete and Ronald's story here, a cautionary tale about who you allow into your social media space.</p>
</div>
</div>
        <div className="columns">
          <div className="column is-12 infoBox">
          <h3 class="standWith">Stand up against mis & disinformation<br/><a className="CTAButton1" href="/join">join the conversation.</a></h3>
            </div>
            </div>
        
        <div className="learnMoreBox">
        <div className="columns">
          <div className="column is-12">
          
          <h3 class="learnMore">Learn more</h3>
          </div>
          </div>
          <div className="columns">
            <div className="column is-6 infoBox">
              <h3>The rise of fake Facebook accounts, the why and the how.</h3>
              <p>
                Fake accounts are mostly used to amplify the popularity or
                dislike of a person or movement, thus manipulating users' views
                of true public sentiment.
                <a
                  href="https://phys.org/news/2019-05-fake-facebook-accounts-never-ending-bots.html"
                  target="_blank"
                >
                  <br />
                  Read more here 
                </a>
              </p>
            </div>
            <div className="column is-6 infoBox">
              <h3>Are you a bot?</h3>
              <p>
                Asked the bot to verify if they have gotten through to another
                bot or a believer. How do you know who you are engaging with
                online? Can you tell who is a bot or who isn’t?
                <a
                  href="https://www.nytimes.com/2020/06/16/science/social-media-bots-kazemi.html"
                  target="_blank"
                >
                  <br />
                  Read more here 
                </a>
              </p>
            </div>
          </div>
          <div className="columns">
            <div className="column is-6 infoBox">
              <h3>Bot Sentinel - Dashboard </h3>
              <p>
                Bot Sentinel was created to fight disinformation and targeted
                harassment through tracking all Twitter accounts using a machine
                learning and artificial intelligence model. The aim is to allow
                Twitter users to engage in online conversations without the
                interference of bots that manipulate and change the
                conversation. The bot accounts are then added to a public
                database that the public can browse and use to make informed
                decisions.
                <a href="https://botsentinel.com/" target="_blank">
                <br />
                  See more here 
                </a>
              </p>
            </div>
            <div className="column is-6 infoBox">
              <h3>Learn to Discern (L2D) - Media Literacy Training </h3>
              <p>
                Learn to Discern is a program that aims to share their approach
                with individuals in order to help them create healthy habits for
                engaging with online information. The idea is to build
                resilience to mis and disinformation at a community level. This
                is done by empowering individuals and helping them to recognize
                and reject divisive narratives, hate speech and misinformation
                ultimately making them less susceptible to consuming propaganda
                and mis and disinformation.
                <a
                  href="https://www.irex.org/project/learn-discern-l2d-media-literacy-training"
                  target="_blank"
                >
                  <br />
                  Learn more
                </a>
              </p>
            </div>
          </div>
        </div>
        </div>
    </section>
  );
};

RonaldTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

const RonaldPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <RonaldTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        subtitle={post.frontmatter.subtitle}
        image={post.frontmatter.image}
        content={post.html}
      />
    </Layout>
  );
};

RonaldPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default RonaldPage;

export const RonaldPageQuery = graphql`
  query RonaldPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        subtitle
      }
    }
  }
`;
