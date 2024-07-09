export function getHtmlTag(tagType) {
  const tagName = {
    paragraph: "p",
    heading: "h",
    ordered: "ol",
    unordered: "ul",
    "list-item": "li",
  };

  return tagName[tagType] || "div";
}
