import thumbIcon from './thumb.js';
import receiptIcon from './receipt.js';
import pantheonIcon from './pantheon.js';
import micIcon from './mic.js';
import directionsIcon from './directions.js';
import calendarIcon from './calendar.js';
import calloutIcon from './callout.js';
import infoIcon from './info.js';
import briefcaseIcon from './briefcase.js';
import kabobIcon from './kabob.js';
import personIcon from './person.js';
import magnifyingGlassIcon from './magnifying_glass.js';
import officeIcon from './office.js';
import linkIcon from './link.js';
import windowIcon from './window.js';
import phoneIcon from './phone.js';
import tagIcon from './tag.js';
import documentIcon from './document.js';
import chevronIcon from './chevron.js';
import supportIcon from './support.js';
import yextIcon from './yext.js';
import pinIcon from './pin.js';
import gearIcon from './gear.js';
import lightBulbIcon from './light_bulb.js';
import starIcon from './star.js';
import close from './close.js';
import elements from './elements';
import yextAnimatedForward from './yext_animated_reverse';
import yextAnimatedReverse from './yext_animated_forward';
import email from './email';

const iconsArray = [
  thumbIcon,
  receiptIcon,
  pantheonIcon,
  micIcon,
  directionsIcon,
  calendarIcon,
  calloutIcon,
  infoIcon,
  briefcaseIcon,
  kabobIcon,
  personIcon,
  magnifyingGlassIcon,
  officeIcon,
  linkIcon,
  windowIcon,
  phoneIcon,
  tagIcon,
  documentIcon,
  chevronIcon,
  supportIcon,
  yextIcon,
  pinIcon,
  gearIcon,
  lightBulbIcon,
  elements,
  close,
  yextAnimatedForward,
  yextAnimatedReverse,
  email,
  starIcon
];

const Icons = {};

iconsArray.forEach(icon => {
  Icons[icon.name] = icon.markup();
});

Icons.default = starIcon.markup();

export default Icons;
