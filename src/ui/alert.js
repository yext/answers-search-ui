import swal from 'sweetalert';
import DOM from './dom/dom';

const defaultAlertOptions = {
  closeOnClickOutside: false,
  closeOnEsc: false
};

export default function alert (message, options = null) {
  const opts = options || defaultAlertOptions;
  swal(message, opts).then(() => {
    DOM.query('.swal-overlay').remove();
  });
}
