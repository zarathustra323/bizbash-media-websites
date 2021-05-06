import DefaultTheme from '@parameter1/base-cms-marko-web-theme-default/browser';
import Inquiry from '@parameter1/base-cms-marko-web-inquiry/browser';
import RevealAd from '@parameter1/base-cms-marko-web-reveal-ad/browser';
import SocialSharing from '@parameter1/base-cms-marko-web-social-sharing/browser';
import InquiryForm from './inquiry-form.vue';

const ImageSlider = () => import(/* webpackChunkName: "common-image-slider" */ './image-slider.vue');
const ContactUsForm = () => import(/* webpackChunkName: "common-contact-us" */ './contact-us-form.vue');

export default (Browser) => {
  DefaultTheme(Browser);
  Inquiry(Browser, { component: InquiryForm });
  RevealAd(Browser);
  SocialSharing(Browser);

  // @todo this should be removed once contact us is moved to core.
  Browser.register('GlobalContactUsForm', ContactUsForm);
  Browser.register('GlobalImageSlider', ImageSlider);
};
