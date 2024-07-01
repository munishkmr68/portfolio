import { marked } from "marked";

marked.use({
  mangle: false,
  headerIds: false,
});

// plainText
export const plainText = (content) => {
  const filterBrackets = content.replace(/<\/?[^>]+(>|$)/gm, "");
  const filterSpaces = filterBrackets.replace(/[\r\n]\s*[\r\n]/gm, "");
  const stripHTML = htmlEntityDecoder(filterSpaces);
  return stripHTML;
};

const htmlEntityDecoder = (htmlWithEntities) => {
  let entityList = {
    "&nbsp;": " ",
    "&lt;": "<",
    "&gt;": ">",
    "&amp;": "&",
    "&quot;": '"',
    "&#39;": "'",
  };
  let htmlWithoutEntities = htmlWithEntities.replace(
    /(&amp;|&lt;|&gt;|&quot;|&#39;)/g,
    (entity) => {
      return entityList[entity];
    }
  );
  return htmlWithoutEntities;
};

export const convertWithSpan = (data) => {
  if (data) {
    const firstReplace = data.replaceAll("{", "<span>");
    const secondReplace = firstReplace.replaceAll("}", "</span>");
    const markup = { __html: secondReplace };
    return markup;
  }
};

export const convertWithBr = (data) => {
  if (data) {
    const firstReplace = data.replaceAll("<br>", "<br />");
    const markup = { __html: firstReplace };
    return markup;
  }
};

export const convertWithBrSpanImg = (data) => {
  if (data) {
    const firstReplace = data.replaceAll("{", "<span>");
    const secondReplace = firstReplace.replaceAll("}", "</span>");
    let thirdReplace = secondReplace.replaceAll("<br>", "<br />");

    const allImage = thirdReplace.match(/\[([^\]]*)\]/g);

    if (allImage && allImage.length) {
      for (let i = 0; i < allImage.length; i++) {
        thirdReplace = thirdReplace.replace(
          allImage[i],
          `<img src=${allImage[i].slice(1, -1).split(",")[0]} class='${
            allImage[i].slice(1, -1).split(",")[1] || ""
          }' alt='image' />`
        );
      }
    }
    const markup = { __html: thirdReplace };
    return markup;
  }
};

export const insertLink = (array, fn) => {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    let singleValue = fn(array[i], i);
    result = result.concat(singleValue);
  }
  result.pop();
  return result;
};
