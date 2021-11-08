const search = require('./search');

module.exports = (app, siteConfig) => {
  // IdentityX (user routing and app context)
  // identityX(app);

  // Search routes
  search(app, siteConfig);
};
