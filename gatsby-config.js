const dotenv = require("dotenv");
dotenv.config();

const { spaceId, accessToken } = process.env;

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId,
        accessToken
      }
    }
  ],
}
