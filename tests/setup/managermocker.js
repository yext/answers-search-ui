/** @module ManagerMocker */

import fs from 'fs';
import path from 'path';

import HandlebarsRenderer from '../../src/ui/rendering/handlebarsrenderer';
import Handlebars from 'handlebars/dist/handlebars.min.js';
import MockComponentManager from './mockcomponentmanager';

/**
 * Generates a MockComponentManager with templates from the passed in template paths.
 * TODO(oshi): better module/method names
 */
export default function mockManager (mockedCore, ...templatePaths) {
  const rendererOpts = {
    '_hb': Handlebars
  };

  for (let i = 0; i < templatePaths.length; i++) {
    const templatePath = templatePaths[i];
    rendererOpts[templatePath] = Handlebars.compile(loadTemplate(templatePath));
  }

  const RENDERER = new HandlebarsRenderer(rendererOpts);
  const COMPONENT_MANAGER = new MockComponentManager(mockedCore);
  COMPONENT_MANAGER.setRenderer(RENDERER);

  const mockAnalyticsReporter = {
    report: jest.fn(() => Promise.resolve())
  };
  COMPONENT_MANAGER.setAnalyticsReporter(mockAnalyticsReporter);
  return COMPONENT_MANAGER;
}

function loadTemplate (templatePath) {
  return fs.readFileSync(path.join(__dirname, '../../src/ui/templates/', templatePath + '.hbs'), 'utf8');
}
