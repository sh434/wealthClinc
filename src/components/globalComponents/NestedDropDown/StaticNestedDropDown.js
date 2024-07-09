import "./staticNestedDropDown.css";

const StaticNestedDropDown = () => {
  return (
    <nav>
      <ul>
        <li>
          <span className="findProperty">Find Property</span>
          <ul>
            <li>
              <span className="resdes">Residential</span>
              <ul>
                <li>
                  <span className="resdes">Metadata</span>
                </li>
                <li>
                  <span className="resdes">Text Fundamentals</span>
                </li>
                <li>
                  <span className="resdes">Hyperlinks</span>
                </li>
              </ul>
            </li>
            <li>
              <span className="resdes">Commercial</span>
              <ul>
                <li>
                  <span className="resdes">Metadata</span>
                </li>
                <li>
                  <span className="resdes">Text Fundamentals</span>
                </li>
                <li>
                  <span className="resdes">Hyperlinks</span>
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default StaticNestedDropDown;

export const navItems = [
  { title: "Home", href: "#" },
  {
    title: "HTML",
    href: "#",
    children: [
      {
        title: "Introduction to HTML",
        href: "#",
        children: [
          { title: "Metadata", href: "#" },
          { title: "Text Fundamentals", href: "#" },
          { title: "Hyperlinks", href: "#" },
          {
            title: "more",
            href: "#",
            children: [
              {
                title: "and more",
                href: "#",
                children: [
                  { title: "and even more", href: "#" },
                  { title: "and even more", href: "#" },
                  { title: "and even more", href: "#" },
                  { title: "and even more", href: "#" },
                ],
              },
              { title: "and more", href: "#" },
            ],
          },
        ],
      },
      { title: "Multimedia and Embedding", href: "#" },
      { title: "HTML Tables", href: "#" },
    ],
  },
  { title: "CSS", href: "#" },
  {
    title: "JavaScript",
    href: "#",
    children: [
      { title: "JavaScript Objects", href: "#" },
      { title: "Asynchronous JavaScript", href: "#" },
      { title: "Client-side web APIs", href: "#" },
    ],
  },
  { title: "About", href: "#" },
  { title: "Contact", href: "#" },
];
