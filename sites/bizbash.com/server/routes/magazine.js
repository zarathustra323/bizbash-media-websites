const { withMagazineIssue, withMagazinePublication } = require('@parameter1/base-cms-marko-web/middleware');
const index = require('@bizbash-media/package-global/templates/magazine');
const publication = require('@bizbash-media/package-global/templates/magazine/publication');
const publicationFragment = require('@bizbash-media/package-global/graphql/fragments/magazine-publication-page');
const issue = require('@bizbash-media/package-global/templates/magazine/issue');
const issueFragment = require('@bizbash-media/package-global/graphql/fragments/magazine-issue-page');

module.exports = (app) => {
  app.get('/magazine', (req, res) => {
    res.marko(index);
  });

  app.get('/magazine/:id([a-fA-F0-9]{24})', withMagazinePublication({
    template: publication,
    queryFragment: publicationFragment,
  }));

  app.get('/magazine/:id(\\d+)', withMagazineIssue({
    template: issue,
    queryFragment: issueFragment,
  }));
};
