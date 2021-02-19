const { withContent } = require('@parameter1/base-cms-marko-web/middleware');
const queryFragment = require('@bizbash-media/package-global/graphql/fragments/content-page');
const companyQueryFragment = require('@bizbash-media/package-global/graphql/fragments/content-company');
const contactQueryFragment = require('@bizbash-media/package-global/graphql/fragments/content-contact');
const company = require('@bizbash-media/package-global/templates/content/company');
const content = require('@bizbash-media/package-global/templates/content');
const contact = require('@bizbash-media/package-global/templates/content/contact');
const podcast = require('@bizbash-media/package-global/templates/content/podcast');
const webinar = require('@bizbash-media/package-global/templates/content/webinar');
const document = require('@bizbash-media/package-global/templates/content/document');

module.exports = (app) => {
  app.get('/*?company/:id(\\d{8})*', withContent({
    template: company,
    queryFragment: companyQueryFragment,
  }));
  app.get('/*?contact/:id(\\d{8})*', withContent({
    template: contact,
    queryFragment: contactQueryFragment,
  }));
  app.get('/*?webinar/:id(\\d{8})*', withContent({
    template: webinar,
    queryFragment,
  }));
  app.get('/*?podcast/:id(\\d{8})*', withContent({
    template: podcast,
    queryFragment,
  }));
  app.get('/*?document/:id(\\d{8})*', withContent({
    template: document,
    queryFragment,
  }));
  app.get('/*?:id(\\d{8})*', withContent({
    template: content,
    queryFragment,
  }));
};
