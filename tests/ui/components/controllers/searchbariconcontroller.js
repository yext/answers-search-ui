import DOM from '../../../../src/ui/dom/dom';
import mockManager from '../../../setup/managermocker';
import { mount } from 'enzyme';

describe('Search bar icon controller', () => {
  const defaultConfig = {
    container: '#test-component',
    verticalKey: 'verticalKey',
    inputEl: '.js-yext-query',
    loadingIndicator: {
      display: true
    }
  };

  const focusIconConfig = {
    ...defaultConfig,
    autoFocus: true
  };

  const customIconConfig = {
    ...defaultConfig,
    loadingIndicator: {
      display: true,
      iconUrl: 'customLoadingIcon.png'
    },
    customIconUrl: 'customIcon.png'
  };

  let COMPONENT_MANAGER;
  beforeEach(() => {
    const bodyEl = DOM.query('body');
    DOM.empty(bodyEl);
    DOM.append(bodyEl, DOM.createEl('div', { id: 'test-component' }));
    COMPONENT_MANAGER = mockManager();
  });

  const defaultSelector = '.js-yxt-AnimatedReverse';
  const searchSelector = '.js-yxt-AnimatedForward';
  const defaultSVGWrapperSelector = '.Icon--yext_animated_reverse';
  const searchSVGWrapperSelector = '.Icon--yext_animated_forward';
  const iconInactiveSelector = 'yxt-SearchBar-Icon--inactive';
  const defaultStaticSelector = 'yxt-SearchBar-Yext--static';
  const searchStaticSelector = 'yxt-SearchBar-MagnifyingGlass--static';

  it('Transition between default icon (Yext) and search icon (Magnifying Glass)', () => {
    const component = COMPONENT_MANAGER.create('SearchBar', defaultConfig);
    const wrapper = mount(component);
    const controller = component.searchBarIconController;

    const defaultIcon = wrapper.find(defaultSelector);
    const searchIcon = wrapper.find(searchSelector);
    const defaultSVGWrapper = wrapper.find(defaultSVGWrapperSelector);
    const searchSVGWrapper = wrapper.find(searchSVGWrapperSelector);

    expect(defaultSVGWrapper.getDOMNode().classList.contains(defaultStaticSelector)).toBeTruthy();
    expect(defaultIcon.getDOMNode().classList.contains(iconInactiveSelector)).toBeFalsy();

    controller.handleEvent('FOCUS');
    expect(defaultIcon.getDOMNode().classList.contains(iconInactiveSelector)).toBeTruthy();
    expect(searchIcon.getDOMNode().classList.contains(iconInactiveSelector)).toBeFalsy();
    expect(searchSVGWrapper.getDOMNode().classList.contains(searchStaticSelector)).toBeFalsy();

    controller.handleEvent('FOCUS_OUT');
    expect(defaultIcon.getDOMNode().classList.contains(iconInactiveSelector)).toBeFalsy();
    expect(searchIcon.getDOMNode().classList.contains(iconInactiveSelector)).toBeTruthy();
    expect(defaultSVGWrapper.getDOMNode().classList.contains(searchStaticSelector)).toBeFalsy();
    expect(searchSVGWrapper.getDOMNode().classList.contains(searchStaticSelector)).toBeFalsy();
  });

  it('transition between default icon (Yext) and loading icon', () => {
    const component = COMPONENT_MANAGER.create('SearchBar', defaultConfig);
    const wrapper = mount(component);
    const controller = component.searchBarIconController;

    const defaultIcon = wrapper.find(defaultSelector);
    const loadingIcon = wrapper.find('.js-yxt-SearchBar-LoadingIndicator');
    const defaultSVGWrapper = wrapper.find(defaultSVGWrapperSelector);

    expect(defaultSVGWrapper.getDOMNode().classList.contains(defaultStaticSelector)).toBeTruthy();
    expect(defaultIcon.getDOMNode().classList.contains(iconInactiveSelector)).toBeFalsy();

    controller.handleEvent('SUBMIT');
    expect(defaultIcon.getDOMNode().classList.contains(iconInactiveSelector)).toBeTruthy();
    expect(loadingIcon.getDOMNode().classList.contains(iconInactiveSelector)).toBeFalsy();

    controller.handleEvent('SEARCH_COMPLETE');
    expect(defaultIcon.getDOMNode().classList.contains(iconInactiveSelector)).toBeFalsy();
    expect(loadingIcon.getDOMNode().classList.contains(iconInactiveSelector)).toBeTruthy();
    expect(defaultSVGWrapper.getDOMNode().classList.contains(defaultStaticSelector)).toBeTruthy();
  });

  it('transition between search icon (Magnifying Glass) and loading icon', () => {
    const component = COMPONENT_MANAGER.create('SearchBar', focusIconConfig);
    const wrapper = mount(component);
    const controller = component.searchBarIconController;

    const searchIcon = wrapper.find(searchSelector);
    const defaultIcon = wrapper.find(defaultSelector);
    const loadingIcon = wrapper.find('.js-yxt-SearchBar-LoadingIndicator');
    const searchSVGWrapper = wrapper.find(searchSVGWrapperSelector);
    const defaultSVGWrapper = wrapper.find(defaultSVGWrapperSelector);

    expect(searchSVGWrapper.getDOMNode().classList.contains(searchStaticSelector)).toBeTruthy();
    expect(searchIcon.getDOMNode().classList.contains(iconInactiveSelector)).toBeFalsy();

    controller.handleEvent('SUBMIT');
    expect(searchIcon.getDOMNode().classList.contains(iconInactiveSelector)).toBeTruthy();
    expect(loadingIcon.getDOMNode().classList.contains(iconInactiveSelector)).toBeFalsy();

    controller.handleEvent('SEARCH_COMPLETE');
    expect(searchIcon.getDOMNode().classList.contains(iconInactiveSelector)).toBeTruthy();
    expect(loadingIcon.getDOMNode().classList.contains(iconInactiveSelector)).toBeTruthy();
    expect(searchSVGWrapper.getDOMNode().classList.contains(defaultStaticSelector)).toBeFalsy();
    expect(defaultIcon.getDOMNode().classList.contains(iconInactiveSelector)).toBeFalsy();
    expect(defaultSVGWrapper.getDOMNode().classList.contains(defaultStaticSelector)).toBeTruthy();
  });

  it('transition between custom loading icon and custom default icon', () => {
    const component = COMPONENT_MANAGER.create('SearchBar', customIconConfig);
    const wrapper = mount(component);
    const controller = component.searchBarIconController;

    const defaultIcon = wrapper.find('.js-yxt-SearchBar-buttonImage');
    const loadingIcon = wrapper.find('.js-yxt-SearchBar-LoadingIndicator');

    expect(defaultIcon.getDOMNode().classList.contains(iconInactiveSelector)).toBeFalsy();

    controller.handleEvent('SUBMIT');
    expect(defaultIcon.getDOMNode().classList.contains(iconInactiveSelector)).toBeTruthy();
    expect(loadingIcon.getDOMNode().classList.contains(iconInactiveSelector)).toBeFalsy();

    controller.handleEvent('SEARCH_COMPLETE');
    expect(defaultIcon.getDOMNode().classList.contains(iconInactiveSelector)).toBeFalsy();
    expect(loadingIcon.getDOMNode().classList.contains(iconInactiveSelector)).toBeTruthy();

    controller.handleEvent('FOCUS');
    expect(defaultIcon.getDOMNode().classList.contains(iconInactiveSelector)).toBeFalsy();
    expect(loadingIcon.getDOMNode().classList.contains(iconInactiveSelector)).toBeTruthy();

    controller.handleEvent('FOCUS_OUT');
    expect(defaultIcon.getDOMNode().classList.contains(iconInactiveSelector)).toBeFalsy();
    expect(loadingIcon.getDOMNode().classList.contains(iconInactiveSelector)).toBeTruthy();
  });

  it('check that iconIsFrozen works', () => {
    const component = COMPONENT_MANAGER.create('SearchBar', defaultConfig);
    const wrapper = mount(component);
    const controller = component.searchBarIconController;

    const defaultIcon = wrapper.find(defaultSelector);
    const searchIcon = wrapper.find(searchSelector);
    const defaultSVGWrapper = wrapper.find(defaultSVGWrapperSelector);
    const searchSVGWrapper = wrapper.find(searchSVGWrapperSelector);

    expect(defaultSVGWrapper.getDOMNode().classList.contains(defaultStaticSelector)).toBeTruthy();
    expect(defaultIcon.getDOMNode().classList.contains(iconInactiveSelector)).toBeFalsy();

    controller.iconIsFrozen = true;
    controller.handleEvent('FOCUS');
    expect(defaultIcon.getDOMNode().classList.contains(iconInactiveSelector)).toBeFalsy();
    expect(searchIcon.getDOMNode().classList.contains(iconInactiveSelector)).toBeTruthy();
    expect(defaultSVGWrapper.getDOMNode().classList.contains(defaultStaticSelector)).toBeTruthy();
    expect(searchSVGWrapper.getDOMNode().classList.contains(searchStaticSelector)).toBeTruthy();

    controller.iconIsFrozen = false;
    controller.handleEvent('FOCUS');
    expect(defaultIcon.getDOMNode().classList.contains(iconInactiveSelector)).toBeTruthy();
    expect(searchIcon.getDOMNode().classList.contains(iconInactiveSelector)).toBeFalsy();
    expect(searchSVGWrapper.getDOMNode().classList.contains(searchStaticSelector)).toBeFalsy();
  });
});
