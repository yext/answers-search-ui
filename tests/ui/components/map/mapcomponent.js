import MapComponent from '../../../../src/ui/components/map/mapcomponent';

describe('map component config', () => {
  let defaultConfig;
  const core = {
    globalStorage: {
      getState: () => {}
    }
  };
  const systemConfig = { core };
  beforeEach(() => {
    defaultConfig = {
      mapProvider: 'google'
    };
  });

  describe('noResults.visible has priority over displayAllResults and showEmptyMap', () => {
    it('visible: true, displayAllResults: false, showEmptyMap: false', () => {
      const config = {
        showEmptyMap: false,
        noResults: {
          visible: true,
          displayAllResults: false
        },
        ...defaultConfig
      };
      const component = new MapComponent(config, systemConfig);
      const { visible } = component._noResults;
      expect(visible).toBeTruthy();
    });

    it('visible: false, displayAllResults: true, showEmptyMap: true', () => {
      const config = {
        showEmptyMap: true,
        noResults: {
          visible: false,
          displayAllResults: true
        },
        ...defaultConfig
      };
      const component = new MapComponent(config, systemConfig);
      const { visible } = component._noResults;
      expect(visible).toBeFalsy();
    });
  });

  it('does not break if given default config', () => {
    const component = new MapComponent(defaultConfig, systemConfig);
    const { displayAllResults, visible, template } = component._noResults;
    expect(displayAllResults).toBeFalsy();
    expect(visible).toBeFalsy();
    expect(template).toEqual('');
  });
});
