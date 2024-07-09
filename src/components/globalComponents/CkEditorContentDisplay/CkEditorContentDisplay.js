import { getHtmlTag } from "./helper";
import { EMPTY_OBJECT } from "../../../assets/constants/index";

const CkEditorContentDisplay = ({ content }) => {
  const { type, format, children, level } = content || EMPTY_OBJECT;
  let Tag = getHtmlTag(type);
  if (type === "paragraph") return <Tag>{children[0]?.text}</Tag>;

  if (type === "heading") {
    Tag = Tag + level;
    return <Tag>{children[0]?.text}</Tag>;
  }

  if (type === "list") {
    const ListTag = getHtmlTag(format);
    const textItem = children[0].children[0].text;
    if (!textItem) return null;
    return (
      <ListTag>
        <li>{textItem}</li>
      </ListTag>
    );
  }

  return null;
};

export default CkEditorContentDisplay;

// export const typeFormat = [
//   {
//     types: "list",
//     format: "ordered",
//   },
//   {
//     types: "list",
//     format: "unordered",
//   },
//   { type: "list-item" },
// ];

// "bold": true,  "italic": true,  "underline": true,  "strikethrough": true  if these things are true then we will apply conditional  style

// const CkEditorContentDisplay2 = ({ data }) => {
//   data?.map((item) => {
//     if (item?.type === "paragraph") return <p>{item?.children[0]?.text}</p>;

//     if (item?.type === "heading") return <h3>{item?.children[0]?.text}</h3>;

//     return null;
//   });
// };

// switch (type) {
//   case "paragraph":
//     return <p>{children?.[0]?.text}</p>;
//   case "heading":
//     return React.createElement(tagType("h", level), {}, children?.[0]?.text);
//   case "list":
//     return React.createElement(getHtmlTag(format), {}, <li>{children?.[0]?.text}</li>);
//   default:
//     return null;
// }
