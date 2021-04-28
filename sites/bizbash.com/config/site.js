const navigation = require('./navigation');
const nativeX = require('./native-x');
const gam = require('./gam');

module.exports = {
  navigation,
  nativeX,
  gam,
  company: 'Bizbash Media, Inc',
  logos: {
    navbar: {
      src: 'https://img.bizbash.com/files/base/bizbash/bzb/image/static/logo/BB_Logo_white_hires.png?h=60',
      srcset: [
        'https://img.bizbash.com/files/base/bizbash/bzb/image/static/logo/BB_Logo_white_hires.png?h=120 2x',
      ],
    },
    footer: {
      src: 'https://img.bizbash.com/files/base/bizbash/bzb/image/static/bizbash-new-footer.png?h=80',
      srcset: [
        'https://img.bizbash.com/files/base/bizbash/bzb/image/static/bizbash-new-footer.png?h=160 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'instagram', href: 'https://www.instagram.com/bizbash' },
    { provider: 'linkedin', href: 'https://www.linkedin.com/company/bizbash' },
    { provider: 'facebook', href: 'https://www.facebook.com/BizBash/' },
    { provider: 'twitter', href: 'https://twitter.com/BizBash' },
    { provider: 'pinterest', href: 'https://www.pinterest.com/bizbash/' },
    { provider: 'youtube', href: 'https://www.youtube.com/channel/UCtzRkaKB6yQvLnp_4fGsSUA' },
  ],
  gtm: {
    containerId: process.env.GTM_CONTAINER_ID || 'GTM-5TWCFJ',
  },
  wufoo: {
    userName: 'NOT_SET',
  },
  magazines: {
    description: 'We cover the event industry like no other including: planning, production, new openings, events and trends in marketing, design and style. BizBash also offers resources for event professionals like our venues and suppliers directory, trade shows, and magazines.',
  },
  contactUs: {
    branding: {
      bgColor: '#005ea0', // @todo Move to styling!
      logo: 'https://img.bizbash.com/files/base/bizbash/bzb/image/static/logo/site_logo.png?h=60',
    },
  },
  inquiry: {
    enabled: true,
    directSend: true,
    sendTo: 'connect@bizbash.com',
    sendFrom: 'BizBash.com <noreply@bizbash.com>',
    sendBcc: 'emailactivity@cygnus.com',
    logo: 'https://img.bizbash.com/files/base/bizbash/bzb/image/static/logo/site_logo.png?h=60',
    bgColor: '#25292d', // @todo Move to styling!
    blockedEmails: [
      'salmanibhram@gmail.com',
      'salmanibrahim010@gmail.com',
      'elhameedhamza@gmail.com',
      'elhameedhamza95@gmail.com',
      'alahmadianaktor@gmail.com',
      'zamansman@gmail.com',
      'brand@weare4evr.com',
      'hello@weare4evr.com',
      'hello@weare4EVR.com',
    ],
  },
};
