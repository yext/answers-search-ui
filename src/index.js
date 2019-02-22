// NOTE(billy) 
// Each package or subpackage could have an index.js which would define what their package would export
//
// For instance, the search package can be something like:
//
// '/search/index.js'
//      export { default as ... } from './class'
//  
// And this file could just:
//    export * from '/search/index';
//
// But, since this example doesn't have a lot of code or subpackages, 
// we could just access the classes directly from here:

export { default as Search } from './search/search';
export { default as Analytics } from './analytics/analytics';
export { default as Rendering } from './rendering/rendering';
export { default as StandardAPI } from './interfaces/standard';
export { default as AdvancedAPI } from './interfaces/advanced';

