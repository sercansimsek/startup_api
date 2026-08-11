import { startups } from "../data/data.js";

export const getDataByPathParams = (req, res) => {
  const { field, term } = req.params;

  const allowedFields = ["country", "continent", "industry"];

  if (!allowedFields.includes(field.toLowerCase())) {
    const errMsg = {
      message:
        "Search field not allowed. Please use only 'country', 'continent', 'industry'",
    };
    res.statusCode = 400;
    return res.json(errMsg);
  }

  const filteredData = startups.filter((startup) => {
    return startup[field].toLowerCase() === term.toLowerCase();
  });

  res.json(filteredData);
};
