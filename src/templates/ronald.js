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
                Hi, I&rsquo;m Ronald, and I&rsquo;m here to con you{" "}
              </strong>
            </h3>
          </div>
        </div>
        <div className="columns">
          <div className="column is-12">
            {/* <h1 style={{ fontSize: `3rem`, fontWeight: '500' }}>{title}</h1> */}
            <PageContent className="content" content={content} />
          </div>
        </div>
        <div className="columns">
          <div className="column is-6 infoBox">
          <p>Just to be clear: I am not human. I make every effort to appear human, but I&rsquo;m not.</p>
<p>You see, by mimicking how humans behave, I can get under their skins and influence their thoughts and behaviour. They won&rsquo;t even know it.</p>
<p>There are millions of bots like me on social media. But it is hard to find us, because we come across as ordinary social media accounts.</p>
<p>We were created by real people to do their dirty work. Our human masters gave us fake identities, and let us loose on social media, while they remain unseen and unidentified in the background.</p>
<p>Right now my day job is to spread lies about Covid-19 vaccinations. My human masters call it mis and disinformation. It&rsquo;s not a hard job. The people who don&rsquo;t think twice about what they see on social media before sharing it with all their friends make our jobs even easier. But we still have to be devious: we make our lies sound like the truth, so we can trick unsuspecting humans into believing us.</p>
          </div>
          <div className="column is-6 infoBox">
          <p>It works! I started applying my skills on this human, Pete, a short while ago. I fed him some true information until he started trusting me. Then I told him that 5G towers are responsible for the spread of the coronavirus. I convinced him face masks are dangerous and should not be worn and that Covid-19 vaccines contain nanotechnology which is injected into people&rsquo;s bodies to control them.&nbsp;</p>
<p>Of course, this is all absolute BS. But don&rsquo;t tell Pete. He believes whatever I say, and he shares it with everyone he knows. He is proving to be one my biggest successes.</p>
<p>Enough about me, just watch this short film about me</p>
          </div>
        </div>
        <div className="learnMoreBox">
        <div className="columns">
          <div className="column is-12">
          <h3 class="learnMore">Learn more</h3>
          <h4 class="learnMoreSub">Creating awareness</h4>
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
          <h4 class="learnMoreSub">Education </h4>
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
