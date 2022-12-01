const gql = require('graphql-tag');

module.exports = gql`

fragment WebsiteFeaturedVenueSupplierListFragment on Content {
  id
  shortName
  primarySection {
    id
    name
    canonicalPath
  }
}

`;
