import React from "react";
import "./BlogComponent.css";
const BlogComponent = ({ component }) => {
  switch (component.type) {
    case "cover-image":
      return <CoverImage imageUrl={component.imageUrl} />;
    case "heading-one":
      return <HeadingOne text={component.text} />;
    case "heading-two":
      return <HeadingTwo text={component.text} />;
    case "heading-three":
      return <HeadingThree text={component.text} />;
    case "paragraph":
      return <Parapgraph text={component.text} />;
    case "image":
      return <Image imageUrl={component.imageUrl} label={component.label} />;
    default:
      <></>;
  }
};

const CoverImage = ({ imageUrl }) => {
  return (
    <div className="CoverImage">
      <img src={imageUrl} alt="" />
    </div>
  );
};

const HeadingOne = ({ text }) => {
  return <p className="HeadingOne">{text}</p>;
};
const HeadingTwo = ({ text }) => {
  return <p className="HeadingTwo">{text}</p>;
};
const HeadingThree = ({ text }) => {
  return <p className="HeadingThree">{text}</p>;
};
const Parapgraph = ({ text }) => {
  return <p className="Paragraph">{text}</p>;
};
const Image = ({ imageUrl, label }) => {
  return (
    <div className="Image">
      <img src={imageUrl} alt="" /> <p className="image-label">{label}</p>
    </div>
  );
};

export default BlogComponent;
