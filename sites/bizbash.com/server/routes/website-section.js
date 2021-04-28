const { withWebsiteSection } = require('@parameter1/base-cms-marko-web/middleware');
const section = require('@bizbash-media/package-global/templates/website-section');
const queryFragment = require('@bizbash-media/package-global/graphql/fragments/website-section-page');

const eventplannerschoiceTemplate = require('../templates/website-section/eventplannerschoice');
const gatherGeeksTemplate = require('../templates/website-section/gathergeeks');
const productionStrategyTemplate = require('../templates/website-section/production-strategy');
const cateringDesignTemplate = require('../templates/website-section/catering-design');
const eventTechVirtualTemplate = require('../templates/website-section/event-tech-virtual');
const supplierDirectory = require('../templates/website-section/supplier-directory');
const venueDirectory = require('../templates/website-section/venue-directory');
const bermudaTemplate = require('../templates/website-section/bermuda');
const industryBuzzTemplate = require('../templates/website-section/industry-buzz');
const venuesDestinationsTemplate = require('../templates/website-section/venues-destinations');
const bizbashListsTemplate = require('../templates/website-section/bizbash-lists');

module.exports = (app) => {
  app.get('/:alias(supplier-directory)', withWebsiteSection({
    template: supplierDirectory,
    queryFragment,
  }));

  app.get('/:alias(venue-directory)', withWebsiteSection({
    template: venueDirectory,
    queryFragment,
  }));

  app.get('/:alias(gathergeeks)', withWebsiteSection({
    template: gatherGeeksTemplate,
    queryFragment,
  }));

  app.get('/:alias(eventplannerschoice)', withWebsiteSection({
    template: eventplannerschoiceTemplate,
    queryFragment,
  }));

  app.get('/:alias(production-strategy)', withWebsiteSection({
    template: productionStrategyTemplate,
    queryFragment,
  }));

  app.get('/:alias(catering-design)', withWebsiteSection({
    template: cateringDesignTemplate,
    queryFragment,
  }));

  app.get('/:alias(event-tech-virtual)', withWebsiteSection({
    template: eventTechVirtualTemplate,
    queryFragment,
  }));

  app.get('/:alias(venues-destinations)', withWebsiteSection({
    template: venuesDestinationsTemplate,
    queryFragment,
  }));

  app.get('/:alias(bizbash-lists)', withWebsiteSection({
    template: bizbashListsTemplate,
    queryFragment,
  }));

  app.get('/:alias(bermuda)', withWebsiteSection({
    template: bermudaTemplate,
    queryFragment,
  }));

  app.get('/:alias(industry-buzz)', withWebsiteSection({
    template: industryBuzzTemplate,
    queryFragment,
  }));

  app.get('/:alias([a-z0-9-/]+)', withWebsiteSection({
    template: section,
    queryFragment,
  }));
};
