import React from "react";
import { TiTick } from "react-icons/ti";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { Slide } from "react-awesome-reveal";

const services = [
  {
    title: "Frontend Development",
    slide: "left",
    aos: "fade-right",
    points: [
      "Responsive design for optimal user experiences across devices and screen sizes",
      "Deep understanding of core concepts like HTML, CSS and Javascript",
      "Develop user interfaces by using popular framework React.js and Next.js",
      "Build enhanced and performance optimized websites by using latest technologies",
      "Implement performance optimization techniques for faster website loading",
      "Ensuring consistent performance across different web browsers",
    ],
  },
  {
    title: "Backend Development",
    slide: "right",
    aos: "fade-left",
    points: [
      "Build server side application by using Node.js, Hono and Express.js",
      "Design efficient database structures systems by MongoDB, MySQL and PostgreSQL",
      "Implement security measures to protect user data and prevent web vulnerabilities",
      "Develop RESTful APIs for frontend-backend communication",
      "Optimize backend infrastructure and code for scalability and high performance",
      "Ensure more security and safety by Using Environment Variables",
    ],
  },
];

const ServiceCard = ({ title, aos, points }) => (
  <div
    data-aos={aos}
    className="cursor-default rounded-lg p-4 shadow2 duration-200 bg-[#242424]"
  >
    <h2 className="text-3xl font-semibold mb-6 primary-color">{title}</h2>
    {points.map((point, i) => (
      <div
        key={point}
        className={`flex gap-2 text-white ${
          i !== points.length - 1 ? "pb-3" : ""
        }`}
      >
        <TiTick className="text-2xl absolute primary-color" />
        <span className="pl-8">{point}</span>
      </div>
    ))}
  </div>
);

const MyServices = () => {
  return (
    <div className="w-11/12 lg:w-3/4 mx-auto pt-20 lg:pt-32" id="services">
      <Slide direction="down">
        <h1 className="text-center text-4xl mb-10 font-semibold primary-color">
          My Services
        </h1>
      </Slide>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {services.map((service) => (
          <Slide key={service.title} direction={service.slide}>
            <ServiceCard {...service} />
          </Slide>
        ))}
      </div>

      <div className="bg-[url(/keyboard.jpg)] bg-fixed bg-cover mt-10 rounded-lg bg-center lg:bg-left-top">
        <div
          data-aos="zoom-in"
          className="text-4xl flex gap-10 justify-center items-center text-white text-center lg:py-16 py-10"
        >
          <FaQuoteLeft className="text-white mb-28 ml-4 text-6xl primary-color" />
          <h1>Never stop learning, because life never stops teaching</h1>
          <FaQuoteRight className="text-white mt-28 mr-4 text-6xl primary-color" />
        </div>
      </div>
    </div>
  );
};

export default MyServices;
