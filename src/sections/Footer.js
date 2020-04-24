import React from "react";
import Heading from "../components/Heading";
import { FaInfoCircle } from "../components/Icons";

const Footer = () => {

  return (
    <section id="footer">
      <Heading icon={FaInfoCircle} title="Contact" />
      <div className="mt-0 pt-0 pb-8 text-xs leading-relaxed opacity-75">
        <div>
            <a href="mailto:amitos80@gmail.com?Subject=Freelance project" target="_top"> Email</a>
        </div>
        <div>
            <a href="tell:972522266878">Call</a>
        </div>
      </div>
    </section>
  );
};

export default Footer;
