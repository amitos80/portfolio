import React from "react";
import PropTypes from "prop-types";

const Subtitle = ({ onDone }) => (
  <div className="my-2 flex lg:h-32">
    <code className="w-full text-sm leading-loose">
      <div>
        <span className="text-purple-600">const</span>{" "}
        <span className="text-yellow-400">me</span>:{" "}
        <span className="text-yellow-400">Array</span>&lt;
        <span className="text-yellow-400">Ingredient</span>&gt;{" "}
        <span className="text-yellow-600">=[</span>
      </div>
      <div className="lg:pl-8">
        <span className="text-red-500">Architecture Design</span>,{" "}
        <span className="text-red-500">Rapid Prototyping</span>,{" "}
        <span className="text-red-500">Web Development</span>,{" "}
        <span className="text-red-500">Instructing</span>,{" "}
      </div>
      <div className="lg:pl-8">
        <span className="text-red-500">Guitars</span>,{" "}
        <span className="text-red-500">Electronics</span>, ...
        <span className="text-red-500">GoodLife</span>
      </div>
      <div className="text-yellow-600">];</div>
    </code>
  </div>
);

Subtitle.propTypes = {
  onDone: PropTypes.func.isRequired,
};

export default Subtitle;
