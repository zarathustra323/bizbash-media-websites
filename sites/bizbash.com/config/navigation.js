const topics = [
  { href: '/production-strategy', label: 'Production & Strategy' },
  { href: '/catering-design', label: 'Catering & Design' },
  { href: '/event-tech-virtual', label: 'Event Tech & Virtual' },
  { href: '/venues-destinations', label: 'Venues & Destinations' },
  { href: '/bizbash-lists', label: 'BizBash Lists' },
];

const footerItems = [
  { href: 'https://www.pages03.net/collinsonpublishing/BizBashBuzz/', label: 'Subscribe', target: '_blank' },
  { href: '/venue-directory', label: 'Find a Venue' },
  { href: '/supplier-directory', label: 'Find a Supplier' },
];

module.exports = {
  primary: {
    items: topics,
  },
  secondary: {
    items: [
      { href: '/gathergeeks', label: 'Podcast' },
      { href: '/webinars', label: 'Webinars' },
      { href: '/page/our-events', label: 'Events & Awards' },
      { href: '/white-papers', label: 'White Papers' },
      { href: '/magazine/5b2a4e6c0305572b008b45ae', label: 'Magazines' },
      { href: 'https://www.bizbashlive.com/advertise', label: 'Advertise', target: '_blank' },
      { href: 'https://www.pages03.net/collinsonpublishing/BizBashBuzz/', label: 'Subscribe', target: '_blank' },
    ],
  },
  tertiary: {
    items: [
      { href: '/search', label: 'Search', icon: 'search' },
    ],
  },
  footer: {
    items: footerItems,
  },
  menu: [
    {
      label: 'Get to Know Us',
      items: [
        { href: '/page/about-us', label: 'About Us' },
        { href: 'https://www.bizbashlive.com/enventu/home', label: 'Community Involvement', target: '_blank' },
        { href: 'https://www.pages03.net/collinsonpublishing/BizBashBuzz/', label: 'Subscribe to BizBash Buzz Newsletter', target: '_blank' },
        { href: 'https://bizbash.formstack.com/forms/magazinesubscribe2020', label: 'Subscribe to BizBash Magazine', target: '_blank' },
        { href: 'https://www.linkedin.com/groups/46028/', label: 'Join Our Event Pros Gather Group on LinkedIn', target: '_blank' },
        { href: 'https://www.facebook.com/groups/eventplannersgather', label: 'Join Our Event Pros Gather Group on Facebook', target: '_blank' },
        { href: 'https://www.bizbashlive.com/advertise', label: 'Advertise With Us', target: '_blank' },
        { href: '/page/contact-us', label: 'Contact Us' },
        { href: '/page/careers', label: 'Careers' },
        { href: '/page/privacy-policy', label: 'Privacy Policy' },
      ],
    },
    {
      label: 'Find Inspiration',
      items: topics,
    },
    {
      label: 'Other Resources',
      items: [
        { href: '/gathergeeks', label: 'GatherGeeks Podcast' },
        { href: '/webinars', label: 'Webinars' },
        { href: '/page/our-events', label: 'Events & Awards' },
        { href: '/magazine/5b2a4e6c0305572b008b45ae', label: 'Magazines' },
        { href: '/white-papers', label: 'White Papers' },
      ],
    },
  ],
};
