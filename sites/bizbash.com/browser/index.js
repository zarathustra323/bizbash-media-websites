import Browser from '@parameter1/base-cms-marko-web/browser';
import DefaultTheme from '@parameter1/base-cms-marko-web-theme-default/browser';
import GTM from '@parameter1/base-cms-marko-web-gtm/browser';
import GAM from '@parameter1/base-cms-marko-web-gam/browser';
import RevealAd from '@parameter1/base-cms-marko-web-reveal-ad/browser';
import Global from '@bizbash-media/package-global/browser';

DefaultTheme(Browser);
GTM(Browser);
GAM(Browser);
RevealAd(Browser);
Global(Browser);

export default Browser;
