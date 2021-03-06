import React from "react";
import PropTypes from "prop-types";
import { SimplePageTemplate } from "../../templates/simple-page";
import "../../components/global.scss";

const SimplePagePreview = ({ entry, widgetFor }) => (
  <SimplePageTemplate
    title={entry.getIn(["data", "title"])}
    subtitle={entry.getIn(["data", "subtitle"])}
    image={entry.getIn(["data", "image"])}
    content={widgetFor("body")}
  />
);

SimplePagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default SimplePagePreview;
