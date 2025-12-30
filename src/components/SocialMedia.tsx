import { useEffect, useState } from "react";

// Data for Social Media Links
const socialMediaLinks = [
  {
    name: "Facebook",
    iconClass: "fab fa-facebook-f",
    color: "#1877F2",
    type: "icon",
    url: "#",
  },
  {
    name: "Twitter",
    iconClass: "fab fa-twitter",
    color: "#1DA1F2",
    type: "icon",
    url: "#",
  },
  // {
  //   name: "Instagram",
  //   iconClass: "fab fa-instagram",
  //   color: "#E4405F",
  //   type: "icon",
  //   url: "#",
  // },
  //   {
  //     name: 'YouTube',
  //     iconClass: 'fab fa-youtube',
  //     color: '#FF0000',
  //     type: 'icon',
  //     url: '#'
  //   },
  //   {
  //     name: 'LinkedIn',
  //     iconClass: 'fab fa-linkedin-in',
  //     color: '#0A66C2',
  //     type: 'icon',
  //     url: '#'
  //   },
  {
    name: "Google Maps",
    iconClass: "fas fa-map-marker-alt",
    color: "#34A853",
    type: "icon",
    url: "#",
  },
  {
    name: "Yelp",
    iconClass: "fab fa-yelp",
    color: "#AF0606",
    type: "icon",
    url: "#",
  },
  //   {
  //     name: 'Custom Link',
  //     color: '#F59E0B',
  //     type: 'svg',
  //     url: '#',
  //     svgPath: (
  //       <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
  //     )
  //   }
];

export default function App() {
  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <div className="w-full flex justify-center">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-xl w-full text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Connect With Us
        </h2>
        <p className="text-gray-500 mb-8">Follow our social media channels</p>

        <div className="flex flex-wrap justify-center gap-x-20 gap-y-10">
          {socialMediaLinks.map((item, index) => (
            <SocialIcon key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

// Sub-component for individual icons
function SocialIcon({ item }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href={item.url}
      className="group relative inline-block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Icon Circle */}
      <div
        className="
        w-16 h-16 rounded-full flex items-center justify-center 
        bg-gray-50 border border-gray-100 shadow-sm
        transition-all duration-300 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)]
        group-hover:-translate-y-2 group-hover:bg-white
        group-hover:shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1)]
      "
      >
        {/* Render FontAwesome Icon or Custom SVG */}
        {item.type === "icon" ? (
          <i
            className={`${item.iconClass} text-2xl transition-colors duration-300`}
            style={{ color: isHovered ? item.color : "black" }}
          />
        ) : (
          <svg
            className="w-6 h-6 transition-colors duration-300 fill-current"
            style={{ color: isHovered ? item.color : "black" }}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            {item.svgPath}
          </svg>
        )}
      </div>

      {/* Tooltip */}
      <span
        className="
        absolute -top-10 left-1/2 -translate-x-1/2 
        bg-gray-800 text-white text-xs font-semibold px-2 py-1 rounded 
        opacity-0 group-hover:opacity-100 transition-opacity duration-300 
        pointer-events-none whitespace-nowrap
        before:content-[''] before:absolute before:top-full before:left-1/2 
        before:-translate-x-1/2 before:border-[6px] 
        before:border-transparent before:border-t-gray-800
      "
      >
        {item.name}
      </span>
    </a>
  );
}
