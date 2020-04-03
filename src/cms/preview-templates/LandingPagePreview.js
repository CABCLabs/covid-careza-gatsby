import React from "react";
import PropTypes from "prop-types";
import { LandingPageTemplate } from "../../templates/landing-page";
import "../../components/global.scss";

const LandingPagePreview = ({ entry, widgetFor }) => (
  <LandingPageTemplate
    title={entry.getIn(["data", "title"])}
    subtitle={entry.getIn(["data", "subtitle"])}
    image={entry.getIn(["data", "image"])}
    introduction={entry.getIn(["data", "introduction"])}
    content={widgetFor("body")}
  />
);

LandingPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default LandingPagePreview;
