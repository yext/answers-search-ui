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

  it('Transition between default icon (Yext) and search icon (Magnifying Glass)', () => {
    const component = COMPONENT_MANAGER.create('SearchBar', defaultConfig);
    const wrapper = mount(component);
    const controller = component.searchBarIconController;

    const defaultIcon = wrapper.find('.js-yxt-AnimatedReverse');
    const searchIcon = wrapper.find('.js-yxt-AnimatedForward');
    const defaultSVGWrapper = wrapper.find('.Icon--yext_animated_reverse');
    const searchSVGWrapper = wrapper.find('.Icon--yext_animated_forward');

    expect(defaultSVGWrapper.getDOMNode().classList.contains('yxt-SearchBar-Yext--static')).toBeTruthy();
    expect(defaultIcon.getDOMNode().classList.contains('yxt-SearchBar-Icon--inactive')).toBeFalsy();

    controller.handleEvent('FOCUS');
    expect(defaultIcon.getDOMNode().classList.contains('yxt-SearchBar-Icon--inactive')).toBeTruthy();
    expect(searchIcon.getDOMNode().classList.contains('yxt-SearchBar-Icon--inactive')).toBeFalsy();
    expect(searchSVGWrapper.getDOMNode().classList.contains('yxt-SearchBar-MagnifyingGlass--static')).toBeFalsy();

    controller.handleEvent('FOCUS_OUT');
    expect(defaultIcon.getDOMNode().classList.contains('yxt-SearchBar-Icon--inactive')).toBeFalsy();
    expect(searchIcon.getDOMNode().classList.contains('yxt-SearchBar-Icon--inactive')).toBeTruthy();
    expect(defaultSVGWrapper.getDOMNode().classList.contains('yxt-SearchBar-MagnifyingGlass--static')).toBeFalsy();
    expect(searchSVGWrapper.getDOMNode().classList.contains('yxt-SearchBar-MagnifyingGlass--static')).toBeFalsy();
  });

  it('transition between default icon (Yext) and loading icon', () => {
    const component = COMPONENT_MANAGER.create('SearchBar', defaultConfig);
    const wrapper = mount(component);
    const controller = component.searchBarIconController;

    const defaultIcon = wrapper.find('.js-yxt-AnimatedReverse');
    const loadingIcon = wrapper.find('.js-yxt-SearchBar-LoadingIndicator');
    const defaultSVGWrapper = wrapper.find('.Icon--yext_animated_reverse');

    expect(defaultSVGWrapper.getDOMNode().classList.contains('yxt-SearchBar-Yext--static')).toBeTruthy();
    expect(defaultIcon.getDOMNode().classList.contains('yxt-SearchBar-Icon--inactive')).toBeFalsy();

    controller.handleEvent('SUBMIT');
    expect(defaultIcon.getDOMNode().classList.contains('yxt-SearchBar-Icon--inactive')).toBeTruthy();
    expect(loadingIcon.getDOMNode().classList.contains('yxt-SearchBar-Icon--inactive')).toBeFalsy();

    controller.handleEvent('SEARCH_COMPLETE');
    expect(defaultIcon.getDOMNode().classList.contains('yxt-SearchBar-Icon--inactive')).toBeFalsy();
    expect(loadingIcon.getDOMNode().classList.contains('yxt-SearchBar-Icon--inactive')).toBeTruthy();
    expect(defaultSVGWrapper.getDOMNode().classList.contains('yxt-SearchBar-Yext--static')).toBeTruthy();
  });

  it('transition between search icon (Magnifying Glass) and loading icon', () => {
    const component = COMPONENT_MANAGER.create('SearchBar', focusIconConfig);
    const wrapper = mount(component);
    const controller = component.searchBarIconController;

    const searchIcon = wrapper.find('.js-yxt-AnimatedForward');
    const defaultIcon = wrapper.find('.js-yxt-AnimatedReverse');
    const loadingIcon = wrapper.find('.js-yxt-SearchBar-LoadingIndicator');
    const searchSVGWrapper = wrapper.find('.Icon--yext_animated_forward');
    const defaultSVGWrapper = wrapper.find('.Icon--yext_animated_reverse');

    expect(searchSVGWrapper.getDOMNode().classList.contains('yxt-SearchBar-MagnifyingGlass--static')).toBeTruthy();
    expect(searchIcon.getDOMNode().classList.contains('yxt-SearchBar-Icon--inactive')).toBeFalsy();

    controller.handleEvent('SUBMIT');
    expect(searchIcon.getDOMNode().classList.contains('yxt-SearchBar-Icon--inactive')).toBeTruthy();
    expect(loadingIcon.getDOMNode().classList.contains('yxt-SearchBar-Icon--inactive')).toBeFalsy();

    controller.handleEvent('SEARCH_COMPLETE');
    expect(searchIcon.getDOMNode().classList.contains('yxt-SearchBar-Icon--inactive')).toBeTruthy();
    expect(loadingIcon.getDOMNode().classList.contains('yxt-SearchBar-Icon--inactive')).toBeTruthy();
    expect(searchSVGWrapper.getDOMNode().classList.contains('yxt-SearchBar-Yext--static')).toBeFalsy();
    expect(defaultIcon.getDOMNode().classList.contains('yxt-SearchBar-Icon--inactive')).toBeFalsy();
    expect(defaultSVGWrapper.getDOMNode().classList.contains('yxt-SearchBar-Yext--static')).toBeTruthy();
  });

  it('transition between custom loading icon and custom default icon', () => {
    const component = COMPONENT_MANAGER.create('SearchBar', customIconConfig);
    const wrapper = mount(component);
    const controller = component.searchBarIconController;

    const defaultIcon = wrapper.find('.js-yxt-SearchBar-buttonImage');
    const loadingIcon = wrapper.find('.js-yxt-SearchBar-LoadingIndicator');

    expect(defaultIcon.getDOMNode().classList.contains('yxt-SearchBar-Icon--inactive')).toBeFalsy();

    controller.handleEvent('SUBMIT');
    expect(defaultIcon.getDOMNode().classList.contains('yxt-SearchBar-Icon--inactive')).toBeTruthy();
    expect(loadingIcon.getDOMNode().classList.contains('yxt-SearchBar-Icon--inactive')).toBeFalsy();

    controller.handleEvent('SEARCH_COMPLETE');
    expect(defaultIcon.getDOMNode().classList.contains('yxt-SearchBar-Icon--inactive')).toBeFalsy();
    expect(loadingIcon.getDOMNode().classList.contains('yxt-SearchBar-Icon--inactive')).toBeTruthy();

    controller.handleEvent('FOCUS');
    expect(defaultIcon.getDOMNode().classList.contains('yxt-SearchBar-Icon--inactive')).toBeFalsy();
    expect(loadingIcon.getDOMNode().classList.contains('yxt-SearchBar-Icon--inactive')).toBeTruthy();

    controller.handleEvent('FOCUS_OUT');
    expect(defaultIcon.getDOMNode().classList.contains('yxt-SearchBar-Icon--inactive')).toBeFalsy();
    expect(loadingIcon.getDOMNode().classList.contains('yxt-SearchBar-Icon--inactive')).toBeTruthy();
  });

  it('check that iconIsFrozen works', () => {
    const component = COMPONENT_MANAGER.create('SearchBar', defaultConfig);
    const wrapper = mount(component);
    const controller = component.searchBarIconController;

    const defaultIcon = wrapper.find('.js-yxt-AnimatedReverse');
    const searchIcon = wrapper.find('.js-yxt-AnimatedForward');
    const defaultSVGWrapper = wrapper.find('.Icon--yext_animated_reverse');
    const searchSVGWrapper = wrapper.find('.Icon--yext_animated_forward');

    expect(defaultSVGWrapper.getDOMNode().classList.contains('yxt-SearchBar-Yext--static')).toBeTruthy();
    expect(defaultIcon.getDOMNode().classList.contains('yxt-SearchBar-Icon--inactive')).toBeFalsy();

    controller.iconIsFrozen = true;
    controller.handleEvent('FOCUS');
    expect(defaultIcon.getDOMNode().classList.contains('yxt-SearchBar-Icon--inactive')).toBeFalsy();
    expect(searchIcon.getDOMNode().classList.contains('yxt-SearchBar-Icon--inactive')).toBeTruthy();
    expect(defaultSVGWrapper.getDOMNode().classList.contains('yxt-SearchBar-Yext--static')).toBeTruthy();
    expect(searchSVGWrapper.getDOMNode().classList.contains('yxt-SearchBar-MagnifyingGlass--static')).toBeTruthy();

    controller.iconIsFrozen = false;
    controller.handleEvent('FOCUS');
    expect(defaultIcon.getDOMNode().classList.contains('yxt-SearchBar-Icon--inactive')).toBeTruthy();
    expect(searchIcon.getDOMNode().classList.contains('yxt-SearchBar-Icon--inactive')).toBeFalsy();
    expect(searchSVGWrapper.getDOMNode().classList.contains('yxt-SearchBar-MagnifyingGlass--static')).toBeFalsy();
  });
});
