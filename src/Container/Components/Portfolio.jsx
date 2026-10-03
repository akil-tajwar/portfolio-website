import React, { useState } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

const portfolio = [
  {
    id: 1,
    image: "hris.jpeg",
    name: "HRIS",
    description:
      "A multi-tenant HR management system for garments and manufacturing businesses, covering employees, attendance, leave, payroll, assets, and reporting with role-based access.",
    technologies: ["Next.js", "Tailwind CSS", "Express.js", "Node.js", "MySQL"],
    live_link: "https://hris-frontend-personal.vercel.app",
  },
  {
    id: 2,
    image: "cloth-store.jpeg",
    name: "Cloth Store",
    description:
      "A full-stack clothing e-commerce platform with product browsing, cart and checkout, and an admin dashboard to manage products and orders.",
    technologies: ["Next.js", "Tailwind CSS", "Express.js", "Node.js", "MySQL"],
    live_link: "https://cloth-store-frontend-personal-lemon.vercel.app",
  },
  {
    id: 3,
    image: "benign-fashion.jpeg",
    name: "Benign Fashion",
    description:
      "A fashion brand storefront with curated collections, product detail pages, and a streamlined ordering experience.",
    technologies: ["Next.js", "Tailwind CSS", "Express.js", "Node.js", "MySQL"],
    live_link: "https://benign-fashion-frontend-pearl.vercel.app",
  },
];

const Portfolio = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const totalPages = Math.ceil(portfolio.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = portfolio.slice(startIndex, startIndex + itemsPerPage);

  const iconBtn =
    "w-8 h-8 text-sm flex items-center justify-center rounded-full border border-[#159e53] text-white bg-[#159e53]/20 hover:bg-[#159e53] hover:scale-110 duration-200";

  return (
    <div className="w-11/12 lg:w-3/4 pt-20 lg:pt-32 mx-auto" id="portfolio">
      <h1 className="text-center text-4xl mb-10 font-semibold primary-color">
        My Portfolio
      </h1>

      {/* Portfolio Grid */}
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
        {currentItems.map((item) => (
          <div
            key={item.id}
            tabIndex={0}
            className="group relative overflow-hidden rounded-xl bg-[#242424] shadow-lg focus:outline-none"
          >
            {/* Image */}
            <img
              src={item.image}
              alt={item.name}
              className="block w-full h-auto duration-500 group-hover:blur-[3px] group-focus:blur-[3px]"
            />

            {/* Default title (hidden on hover)
            <div className="absolute inset-x-0 bottom-0 px-5 py-4 bg-gradient-to-t from-black/80 to-transparent duration-300 group-hover:opacity-0 group-hover:translate-y-2 group-focus:opacity-0 group-focus:translate-y-2">
              <h3 className="text-xl font-bold text-white">{item.name}</h3>
            </div> */}

            {/* Sliding overlay */}
            <div className="absolute inset-0 flex flex-col justify-end p-5 bg-gradient-to-t from-black/95 via-black/70 to-black/20 translate-y-full group-hover:translate-y-0 group-focus:translate-y-0 duration-500 ease-out">
              <h3 className="text-2xl font-bold text-white mb-2">
                {item.name}
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed mb-3">
                {item.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-4">
                {item.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2.5 py-1 rounded-full bg-white/10 text-gray-200 border border-white/10"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action buttons */}
              <div className="flex items-center gap-3">
                {item.live_link && (
                  <a
                    href={item.live_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Live Demo"
                    aria-label={`${item.name} live demo`}
                    className={iconBtn}
                  >
                    <FaExternalLinkAlt className="w-5" />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Controls (unchanged) */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center mt-8 space-x-2">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className={`px-4 py-2 border rounded-lg ${
              currentPage === 1
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-[#159e53] hover:text-white"
            }`}
          >
            Prev
          </button>

          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-4 py-2 border rounded-lg ${
                currentPage === i + 1
                  ? "bg-[#159e53] text-white"
                  : "hover:bg-[#159e53] hover:text-white"
              }`}
            >
              {i + 1}
            </button>
          ))}

          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className={`px-4 py-2 border rounded-lg ${
              currentPage === totalPages
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-[#159e53] hover:text-white"
            }`}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
