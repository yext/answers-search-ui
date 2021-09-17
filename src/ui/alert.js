import alertify from 'alertifyjs';

function setUpAlertConfiguration () {
  Object.assign(alertify.defaults, {
    transitionOff: true,
    closable: false,
    defaultFocusOff: true,
    glossary: { ...alertify.defaults.glossary, title: '' }
  });
}

setUpAlertConfiguration();

export default alertify;
