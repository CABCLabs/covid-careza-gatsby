import CMS from "netlify-cms-app";
import uploadcare from "netlify-cms-media-library-uploadcare";
import cloudinary from "netlify-cms-media-library-cloudinary";

import SimplePagePreview from "./preview-templates/SimplePagePreview";
import LandingPagePreview from "./preview-templates/LandingPagePreview";
import PledgePagePreview from "./preview-templates/PledgePagePreview";
import BlogPostPreview from "./preview-templates/BlogPostPreview";

CMS.registerMediaLibrary(uploadcare);
CMS.registerMediaLibrary(cloudinary);

CMS.registerPreviewTemplate("about", SimplePagePreview);
CMS.registerPreviewTemplate("contact", SimplePagePreview);

// I feel there is a better way to do this?
// I don't understand why this cannot be automated

CMS.registerPreviewTemplate("covid-landing", LandingPagePreview);
CMS.registerPreviewTemplate("covid-pledge", PledgePagePreview);
CMS.registerPreviewTemplate("covid-thanks", SimplePagePreview);

CMS.registerPreviewTemplate("blog", BlogPostPreview);
