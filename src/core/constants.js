/** @module */

/** The current lib version, reported with errors and analytics */
export const LIB_VERSION = 'v0.8.2';

/** The base url for the api backend */
export const API_BASE_URL = 'https://liveapi.yext.com';

/** The default url for compiled component templates */
export const COMPILED_TEMPLATES_URL = `https://assets.sitescdn.net/answers/${LIB_VERSION}/answerstemplates.compiled.min.js`;

/** The base url for the analytics backend  */
export const ANALYTICS_BASE_URL = 'https://realtimeanalytics.yext.com';

/** The valid answers analytics event types */
export const ANALYTICS_EVENT_TYPE = {
  THUMBS_UP: 'THUMBS_UP',
  THUMBS_DOWN: 'THUMBS_DOWN',
  ROW_EXPAND: 'ROW_EXPAND',
  ROW_COLLAPSE: 'ROW_COLLAPSE',
  TITLE_CLICK: 'TITLE_CLICK',
  CTA_CLICK: 'CTA_CLICK',
  TAP_TO_CALL: 'TAP_TO_CALL',
  ORDER_NOW: 'ORDER_NOW',
  ADD_TO_CART: 'ADD_TO_CART',
  RSVP: 'RSVP',
  APPLY_NOW: 'APPLY_NOW',
  DRIVING_DIRECTIONS: 'DRIVING_DIRECTIONS',
  VIEW_WEBSITE: 'VIEW_WEBSITE',
  EMAIL: 'EMAIL',
  FILTERING_WITHIN_SECTION: 'FILTERING_WITHIN_SECTION',
  QUESTION_FOCUS: 'QUESTION_FOCUS',
  QUESTION_SUBMIT: 'QUESTION_SUBMIT',
  SCROLL_TO_BOTTOM_OF_PAGE: 'SCROLL_TO_BOTTOM_OF_PAGE',
  BRAND_ICON: 'BRAND_ICON',
  HEADER_LINKS: 'HEADER_LINKS'
};

/**
 * The valid analytics searcher types
 */
export const ANALYTICS_SEARCHER_TYPE = {
  VERTICAL: 'VERTICAL',
  UNIVERSAL: 'UNIVERSAL,'
};
