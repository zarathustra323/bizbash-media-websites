import DefaultTheme from '@parameter1/base-cms-marko-web-theme-default/browser';
import GTM from '@parameter1/base-cms-marko-web-gtm/browser';
import GAM from '@parameter1/base-cms-marko-web-gam/browser';
import IdentityX from '@parameter1/base-cms-marko-web-identity-x/browser';
import Inquiry from '@parameter1/base-cms-marko-web-inquiry/browser';
import RevealAd from '@parameter1/base-cms-marko-web-reveal-ad/browser';
import SocialSharing from '@parameter1/base-cms-marko-web-social-sharing/browser';
import Search from '@parameter1/base-cms-marko-web-search/browser';

const ImageSlider = () => import(/* webpackChunkName: "global-image-slider" */ './image-slider.vue');
const InquiryForm = () => import(/* webpackChunkName: "global-inquiry-form" */ './inquiry-form.vue');
const ContactUsForm = () => import(/* webpackChunkName: "global-contact-us" */ './contact-us-form.vue');

export default (Browser) => {
  DefaultTheme(Browser);
  GTM(Browser);
  GAM(Browser);
  IdentityX(Browser);
  Inquiry(Browser, { component: InquiryForm });
  RevealAd(Browser);
  Search(Browser);
  SocialSharing(Browser);

  // @todo this should be removed once contact us is moved to core.
  Browser.register('GlobalContactUsForm', ContactUsForm);
  Browser.register('GlobalImageSlider', ImageSlider);
};
