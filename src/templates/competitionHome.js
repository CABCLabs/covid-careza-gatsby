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
    <section className="section section--gradient" >
    <div className="container">
      {/* <Header title={title} image={image} subtitle={subtitle} /> */}
      <div className="columns">
        <div className="column is-8">
          <div className="section" style={{ paddingBottom: '0px'}}>
            <h2 style={{ color: 'rgb(77, 173, 51)', fontSize: `1.8rem`, fontWeight: 'bold' }}>Take action, create content and share your experiences
</h2>
<h4 style={{ color: 'rgb(77, 173, 51)',fontSize: `1.1rem`, marginBottom: '20px',  marginTop: '20px', fontWeight: '600' }}>The creation of content sparks dialogue where men reflect on their personal relationship with violence and old social norms on a mass scale. Through content creation we’re bringing these experiences into greater awareness and generating opportunities for healing. We then ask men what action they’re going to take to make a difference.
</h4>
<h4 style={{ color: 'rgb(77, 173, 51)', fontSize: `1.3rem`, marginBottom: '20px',  marginTop: '20px', fontWeight: 'bold' }}>How to enter:
</h4>

WhatsApp Hi to 0600 111 011 to find out more.


<h4 style={{ color: 'rgb(77, 173, 51)', fontSize: `1.3rem`, marginBottom: '20px',  marginTop: '20px', fontWeight: 'bold' }}>Rewards and Awards</h4>
<ul style={{width: '100%', display: 'inline-block'}}>
  <li style={{ backgroundColor: '#4dad33', color: '#fff', padding: '20px', width: 'fit-content', float: 'left', margin: '10px', fontSize: '1.2rem', fontWeight: '500' }}><strong style={{color: '#fff'}}>Award 1</strong>: R1500</li>
  <li style={{ backgroundColor: '#4dad33', color: '#fff', padding: '20px', width: 'fit-content', float: 'left', margin: '10px', fontSize: '1.2rem', fontWeight: '500' }}><strong style={{color: '#fff'}}>Award 2</strong>: R1000</li>
  <li style={{ backgroundColor: '#4dad33', color: '#fff', padding: '20px', width: 'fit-content', float: 'left', margin: '10px', fontSize: '1.2rem', fontWeight: '500' }}><strong style={{color: '#fff'}}>Award 3</strong>: R500</li>
  </ul>


<h4 style={{ color: 'rgb(77, 173, 51)', fontSize: `1.3rem`, marginBottom: '20px',  marginTop: '20px', fontWeight: 'bold' }}>Questions:
</h4>
<nav class="accordion arrows">
		<input type="radio" name="accordion" id="cb1" />
		<section class="boxQue">
			<label class="box-title queText" for="cb1">What was your first memory or experience of violence?</label>
			<label class="box-close" for="acc-close"></label>
			<div class="box-content"><p><strong>Connecting with men's personal experience of violence</strong></p>
<p>This part of the content creation explores men’s first experience of violence and shows how violence is often passed on from generation to generation. The questions are bringing the cycle of violence into awareness. The creation of content intends to develop thinking around how violence leads to more violence. This helps men to understand their personnel history and old practices that lead to violence so that they can facilitate healing among men.
</p>
<p>Question: What was your first memory or experience of violence?</p>
<p>Sub questions that explore men&rsquo;s personal experience of violence:&nbsp;</p>
<ul>
<li>Have you ever seen your father in a violent situation? How did you feel?</li>
<li>How would you tell your father not to hit your mother (if only I could have said this to my father)?</li>
<li>When in your life have you felt the most powerless?</li>
<li>Was there ever a situation when you wished you could cry but you could not? What caused that?</li>
</ul>
<p>Experiences of violence as a child can lead to feelings of shame, powerlessness and pain. Research shows that one of the basic psychological causes of violent behaviour is the wish to  prevent feelings of shame and humiliation, feelings so painful that they’re overpowering and intolerable. The perpetrators of misogyny and gender-based violence are often men who are in pain - hurt people, hurt people. In some instances, these violence individuals don’t see non-violent ways to regain their self-esteem and self-respect. So for these individuals, violence is a way to force respect from the people around them. 
</p></div>
		</section>
		<input type="radio" name="accordion" id="cb2" />
		<section class="boxQue">
			<label class="box-title queText" for="cb2">How do men of my community see women, how do I see women, is it right?</label>
			<label class="box-close" for="acc-close"></label>
			<div class="box-content"><p><strong>Connecting with social norms that are misogynistic</strong></p>
<p>This part of the content creation explores men and boys’ thinking that they own another person’s body and sense of entitlement to sex. These questions start to unpack that and start to elicit thinking. 
</p>
<p>Question: How do men of my community see women, how do I see women, is it right?</p>
<p>Sub questions that explore men&rsquo;s sense of entitlement towards a women&rsquo;s body:&nbsp;</p>
<ul>
<li>Do you have a right over a woman's body?&nbsp;</li>
<li>Can you tell a woman what to do?</li>
<li>Are women your possessions?</li>
</ul></div>
		</section>
		<input type="radio" name="accordion" id="cb3" />
		<section class="boxQue">
			<label class="box-title queText" for="cb3">Is the way I, my friends, and community treat women what I want, for my mother, my sister, my own daughter? 
</label>
			<label class="box-close" for="acc-close"></label>
			<div class="box-content"><p><strong>Taking Action</strong></p>
<p>This question is about being a man of action and explores what men can do to end the violence.</p>
<p>Question: Is the way I, my friends, and community treat women what I want, for my mother, my sister, my own daughter? I must make the difference.</p></div>
		</section>

		<input type="radio" name="accordion" id="acc-close" />
	</nav>
<h4 style={{ color: 'rgb(77, 173, 51)', fontSize: `1.3rem`, marginBottom: '20px',  marginTop: '20px', fontWeight: 'bold' }}>Accepted Entry Formats via WhatsApp:
</h4>
<ol style={{ marginLeft: '50px'}}>
  <li>
Memes/Instagram/TikTok</li>
  <li>
Art - photography, paintings, graffiti, sculptures, drawings, comic strips</li>
  <li>
Music - any type of music e.g rap</li>
  <li>
Videos - dance (any type of dance eg breakdancing, Capoeira), drama and skits, comedy</li>
  <li>
Radio - In the vernacular script competition, which includes radio skits, snippets, and stories.</li>
  <li>
Written - stories, poetry</li>

</ol>
          </div>
        </div>
      </div>
      <div className="section" style={{ paddingTop: '0px', paddingBottom: '0px'}}>
        <h2 style={{ color: 'rgb(77, 173, 51)', fontSize: `1.3rem`, marginBottom: '20px',  marginTop: '20px', fontWeight: 'bold' }}>Choose Your Radio Station</h2>
        </div>
        <div className="section">
      <div className="columns">
      <Link to="/content-creation/bush-radio" className="column is-4 radioStation">
</Link>
{/* <Link to="/competition/radio1" className="column is-4 radioStation">
</Link>
<Link to="/competition/radio1" className="column is-4 radioStation">
</Link>
        </div>
      <div className="columns">
      <Link to="/competition/radio1" className="column is-4 radioStation">
</Link>
<Link to="/competition/radio1" className="column is-4 radioStation">
</Link> */}
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
