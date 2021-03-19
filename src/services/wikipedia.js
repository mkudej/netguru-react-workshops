import ky from "ky";

export const getArticles = async (coord, radius = 1000, limit = 10) => {
  if (!coord) {
    console.error("Wikipedia API: no coord passed to getArticles");
  }

  const searchParams = {
    action: "query",
    list: "geosearch",
    format: "json",
    origin: "*",
    gscoord: coord.lat + "|" + coord.lng,
    gsradius: radius,
    gslimit: limit,
  };

  const response = await ky.get("https://pl.wikipedia.org/w/api.php", {
    searchParams,
  });
  const body = await response.json();
  return body.query.geosearch;
};
