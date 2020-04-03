import React from "react";
import PropTypes from "prop-types";
import { PledgePageTemplate } from "../../templates/pledge-page";
import "../../components/global.scss";

const PledgePagePreview = ({ entry, widgetFor }) => (
  <PledgePageTemplate
    title={entry.getIn(["data", "title"])}
    subtitle={entry.getIn(["data", "subtitle"])}
    image={entry.getIn(["data", "image"])}
    content={widgetFor("body")}
  />
);

PledgePagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default PledgePagePreview;
