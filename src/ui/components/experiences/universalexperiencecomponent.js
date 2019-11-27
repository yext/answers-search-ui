/** @module UniversalExperienceComponent */

import Component from '../component';

export default class UniversalExperienceComponent extends Component {
  constructor (config = {}, systemConfig = {}) {
    super(config, systemConfig);

    // validate config

  }

  static defaultTemplateName (config) {
    return 'experiences/universalexperience';
  }

  static get type() {
    return 'UniversalExperience'
  }

  onMount() {
    this.addChild({}, 'UniversalResults', {
      'container': '.results-container'
    })

    this.addChild({}, 'QASubmission', {
      'container': '.qa-container',
      entityId: 'test'
    })
  }
}
