import thumbIcon from './thumb';
import receiptIcon from './receipt';
import pantheonIcon from './pantheon';
import micIcon from './mic';
import directionsIcon from './directions';
import calendarIcon from './calendar';
import calloutIcon from './callout';
import infoIcon from './info';
import briefcaseIcon from './briefcase';
import kabobIcon from './kabob';
import personIcon from './person';
import magnifyingGlassIcon from './magnifying_glass';
import officeIcon from './office';
import linkIcon from './link';
import windowIcon from './window';
import phoneIcon from './phone';
import tagIcon from './tag';
import documentIcon from './document';
import chevronIcon from './chevron';
import supportIcon from './support';
import yextIcon from './yext';
import pinIcon from './pin';
import gearIcon from './gear';
import lightBulbIcon from './light_bulb';
import starIcon from './star';
import close from './close';
import elements from './elements';
import application from './application';
import appointment from './appointment';
import book from './book';
import calendarWithClock from './calendar_with_clock';
import call from './call';
import cart from './cart';
import demo from './demo';
import details from './details';
import dollarSign from './dollar_sign';
import email from './email';
import fourGrid from './four_grid';
import linkInCircle from './link_in_circle';
import network from './network';
import officePin from './office_pin';
import personWithCircle from './person_with_circle';
import pillars from './pillars';
import RSVP from './RSVP';
import sixGrid from './six_grid';
import supportSquare from './support_square';
import webpage from './webpage';

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
  application,
  appointment,
  book,
  calendarWithClock,
  call,
  cart,
  demo,
  details,
  dollarSign,
  email,
  fourGrid,
  linkInCircle,
  network,
  officePin,
  personWithCircle,
  pillars,
  RSVP,
  sixGrid,
  supportSquare,
  webpage
];

const Icons = {};

iconsArray.forEach(icon => {
  Icons[icon.name] = icon.markup();
});

Icons.default = starIcon.markup();

export default Icons;
