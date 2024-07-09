export const slugFormat = (url) => url.toLowerCase().split(" ").join("-");

export const slugToText = (url) => url.split("-").join(" ");
