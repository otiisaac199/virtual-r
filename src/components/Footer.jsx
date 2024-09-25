import { communityLinks, platformLinks, resourcesLinks } from "../constants";

const Footer = () => {
  return (
    <footer className="mt-20 border-t py-10 border-neutral-700">
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 ">
        <div>
          <h3 className="text-md font-semibold mb-4">Resources</h3>
          <ul className="space-y-2">
            {resourcesLinks.map((resource, index) => (
              <li key={index}>
                <a
                  className="text-neutral-300 hover:text-white"
                  href={resource.href}
                >
                  {resource.text}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-md font-semibold mb-4">Platform</h3>
          <ul className="space-y-2">
            {platformLinks.map((platform, index) => (
              <li key={index}>
                <a
                  className="text-neutral-300 hover:text-white"
                  href={platform.href}
                >
                  {platform.text}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-md font-semibold mb-4">Community</h3>
          <ul className="space-y-2">
            {communityLinks.map((community, index) => (
              <li key={index}>
                <a
                  className="text-neutral-300 hover:text-white"
                  href={community.href}
                >
                  {community.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
