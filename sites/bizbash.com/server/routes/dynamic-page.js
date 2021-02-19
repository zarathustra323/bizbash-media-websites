const { withDynamicPage } = require('@parameter1/base-cms-marko-web/middleware');
const page = require('@bizbash-media/package-global/templates/dynamic-page');
const queryFragment = require('@bizbash-media/package-global/graphql/fragments/dynamic-page');

module.exports = (app) => {
  app.get('/page/:alias(*)', withDynamicPage({
    template: page,
    queryFragment,
  }));
};
