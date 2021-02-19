const GAMConfiguration = require('@parameter1/base-cms-marko-web-gam/config');

const config = new GAMConfiguration('21802476813');

config
  .setTemplate('leaderboard', {
    size: [[970, 250], [970, 90], [970, 66], [728, 90], [320, 50], [300, 50], [300, 100]],
    sizeMapping: [
      { viewport: [980, 0], size: [[970, 250], [970, 90], [970, 66], [728, 90]] },
      { viewport: [750, 0], size: [728, 90] },
      { viewport: [320, 0], size: [[300, 50], [320, 50], [300, 100]] },
    ],
  });

config
  .setAliasAdUnits('default', [
    { name: 'lb1', template: 'loaeaderboard', path: 'lb1' },
    { name: 'lb2', template: 'loaeaderboard', path: 'lb2' },
    { name: 'rail1', path: 'rail1' },
    { name: 'rail2', path: 'rail2' },
    { name: 'load-more', path: 'load-more' },
    { name: 'reskin', path: 'reskin' },
    { name: 'wa', path: 'wa' },
  ])
  .setAliasAdUnits('production-strategy', [
    { name: 'lb1', template: 'loaeaderboard', path: 'lb1' },
    { name: 'lb2', template: 'loaeaderboard', path: 'lb2' },
    { name: 'rail1', path: 'rail1' },
    { name: 'rail2', path: 'rail2' },
    { name: 'load-more', path: 'load-more' },
    { name: 'reskin', path: 'reskin' },
    { name: 'wa', path: 'wa' },
  ])
  .setAliasAdUnits('style-decor', [
    { name: 'lb1', template: 'loaeaderboard', path: 'lb1' },
    { name: 'lb2', template: 'loaeaderboard', path: 'lb2' },
    { name: 'rail1', path: 'rail1' },
    { name: 'rail2', path: 'rail2' },
    { name: 'load-more', path: 'load-more' },
    { name: 'reskin', path: 'reskin' },
    { name: 'wa', path: 'wa' },
  ])
  .setAliasAdUnits('catering', [
    { name: 'lb1', template: 'loaeaderboard', path: 'lb1' },
    { name: 'lb2', template: 'loaeaderboard', path: 'lb2' },
    { name: 'rail1', path: 'rail1' },
    { name: 'rail2', path: 'rail2' },
    { name: 'load-more', path: 'load-more' },
    { name: 'reskin', path: 'reskin' },
    { name: 'wa', path: 'wa' },
  ])
  .setAliasAdUnits('bizbash-lists', [
    { name: 'lb1', template: 'loaeaderboard', path: 'lb1' },
    { name: 'lb2', template: 'loaeaderboard', path: 'lb2' },
    { name: 'rail1', path: 'rail1' },
    { name: 'rail2', path: 'rail2' },
    { name: 'load-more', path: 'load-more' },
    { name: 'reskin', path: 'reskin' },
    { name: 'wa', path: 'wa' },
  ])
  .setAliasAdUnits('local-venues-destinations', [
    { name: 'lb1', template: 'loaeaderboard', path: 'lb1' },
    { name: 'lb2', template: 'loaeaderboard', path: 'lb2' },
    { name: 'rail1', path: 'rail1' },
    { name: 'rail2', path: 'rail2' },
    { name: 'load-more', path: 'load-more' },
    { name: 'reskin', path: 'reskin' },
    { name: 'wa', path: 'wa' },
  ])
  .setAliasAdUnits('gathergeeks', [
    { name: 'lb1', template: 'loaeaderboard', path: 'lb1' },
    { name: 'lb2', template: 'loaeaderboard', path: 'lb2' },
    { name: 'rail1', path: 'rail1' },
    { name: 'rail2', path: 'rail2' },
    { name: 'load-more', path: 'load-more' },
    { name: 'reskin', path: 'reskin' },
    { name: 'wa', path: 'wa' },
  ]);

module.exports = config;
