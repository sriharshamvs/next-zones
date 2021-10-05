const { ELECTIONS_URL, COVID_URL } = process.env
const path = require("path")

module.exports = {
  target: "serverless",
  webpack: (config) => {
    config.resolve.alias["~"] = path.resolve(__dirname, "src")
    return config
  },
  async rewrites() {
    return [
      {
        source: "/elections",
        destination: `${ELECTIONS_URL}`
      },
      {
        source: "/covid19-cases-graphs-maps-india-world",
        destination: `${COVID_URL}`
      }
    ]
  }
}
