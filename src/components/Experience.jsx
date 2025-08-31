import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { certificates } from "../constants"; // certificates data
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const CertificateCard = ({ certificate }) => (
  <VerticalTimelineElement
    contentStyle={{
      background: "#1d1836",
      color: "#fff",
    }}
    contentArrowStyle={{ borderRight: "7px solid #232631" }}
    date={certificate.year}
    iconStyle={{ background: "#161329" }}
    icon={
      <div className="flex justify-center items-center w-full h-full">
        <img
          src={certificate.icon}
          alt={certificate.title}
          className="w-[70%] h-[70%] object-contain rounded-lg"
        />
      </div>
    }
  >
    <div>
      <h3 className="text-white text-[24px] font-bold">{certificate.title}</h3>
      <p
        className="text-secondary text-[16px] font-semibold"
        style={{ margin: 0 }}
      >
        {certificate.platform}
      </p>
    </div>

    <ul className="mt-5 list-disc ml-5 space-y-2">
      <li className="text-white-100 text-[14px] pl-1 tracking-wider">
        {certificate.description}
      </li>
    </ul>

    {certificate.link && (
      <a
        href={certificate.link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-400 underline mt-2 inline-block text-[14px]"
      >
        View Certificate
      </a>
    )}
  </VerticalTimelineElement>
);

const Certificates = () => (
  <>
    <motion.div variants={textVariant()}>
      <p className={`${styles.sectionSubText} text-center`}>
       Recognized Skills through Verified Certifications
      </p>
      <h2 className={`${styles.sectionHeadText} text-center`}>Certificates</h2>
    </motion.div>

    <div className="mt-20 flex flex-col">
      <VerticalTimeline>
        {certificates.map((certificate, index) => (
          <CertificateCard
            key={`certificate-${index}`}
            certificate={certificate}
          />
        ))}
      </VerticalTimeline>
    </div>
  </>
);

export default SectionWrapper(Certificates, "certificates");
