(self["webpackChunkMiLocal"] = self["webpackChunkMiLocal"] || []).push([["default-src_app_services_subjects_ts"],{

/***/ 205:
/*!**********************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/observable/throwError.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "throwError": () => (/* binding */ throwError)
/* harmony export */ });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ 9165);

function throwError(error, scheduler) {
    if (!scheduler) {
        return new _Observable__WEBPACK_IMPORTED_MODULE_0__.Observable(subscriber => subscriber.error(error));
    }
    else {
        return new _Observable__WEBPACK_IMPORTED_MODULE_0__.Observable(subscriber => scheduler.schedule(dispatch, 0, { error, subscriber }));
    }
}
function dispatch({ error, subscriber }) {
    subscriber.error(error);
}
//# sourceMappingURL=throwError.js.map

/***/ }),

/***/ 8259:
/*!**********************************************************!*\
  !*** ./node_modules/sweetalert2/dist/sweetalert2.all.js ***!
  \**********************************************************/
/***/ (function(module) {

/*!
* sweetalert2 v11.1.5
* Released under the MIT License.
*/
(function (global, factory) {
   true ? module.exports = factory() :
  0;
}(this, function () { 'use strict';

  const DismissReason = Object.freeze({
    cancel: 'cancel',
    backdrop: 'backdrop',
    close: 'close',
    esc: 'esc',
    timer: 'timer'
  });

  const consolePrefix = 'SweetAlert2:';
  /**
   * Filter the unique values into a new array
   * @param arr
   */

  const uniqueArray = arr => {
    const result = [];

    for (let i = 0; i < arr.length; i++) {
      if (result.indexOf(arr[i]) === -1) {
        result.push(arr[i]);
      }
    }

    return result;
  };
  /**
   * Capitalize the first letter of a string
   * @param str
   */

  const capitalizeFirstLetter = str => str.charAt(0).toUpperCase() + str.slice(1);
  /**
   * Convert NodeList to Array
   * @param nodeList
   */

  const toArray = nodeList => Array.prototype.slice.call(nodeList);
  /**
   * Standardise console warnings
   * @param message
   */

  const warn = message => {
    console.warn("".concat(consolePrefix, " ").concat(typeof message === 'object' ? message.join(' ') : message));
  };
  /**
   * Standardise console errors
   * @param message
   */

  const error = message => {
    console.error("".concat(consolePrefix, " ").concat(message));
  };
  /**
   * Private global state for `warnOnce`
   * @type {Array}
   * @private
   */

  const previousWarnOnceMessages = [];
  /**
   * Show a console warning, but only if it hasn't already been shown
   * @param message
   */

  const warnOnce = message => {
    if (!previousWarnOnceMessages.includes(message)) {
      previousWarnOnceMessages.push(message);
      warn(message);
    }
  };
  /**
   * Show a one-time console warning about deprecated params/methods
   */

  const warnAboutDeprecation = (deprecatedParam, useInstead) => {
    warnOnce("\"".concat(deprecatedParam, "\" is deprecated and will be removed in the next major release. Please use \"").concat(useInstead, "\" instead."));
  };
  /**
   * If `arg` is a function, call it (with no arguments or context) and return the result.
   * Otherwise, just pass the value through
   * @param arg
   */

  const callIfFunction = arg => typeof arg === 'function' ? arg() : arg;
  const hasToPromiseFn = arg => arg && typeof arg.toPromise === 'function';
  const asPromise = arg => hasToPromiseFn(arg) ? arg.toPromise() : Promise.resolve(arg);
  const isPromise = arg => arg && Promise.resolve(arg) === arg;

  const isJqueryElement = elem => typeof elem === 'object' && elem.jquery;

  const isElement = elem => elem instanceof Element || isJqueryElement(elem);

  const argsToParams = args => {
    const params = {};

    if (typeof args[0] === 'object' && !isElement(args[0])) {
      Object.assign(params, args[0]);
    } else {
      ['title', 'html', 'icon'].forEach((name, index) => {
        const arg = args[index];

        if (typeof arg === 'string' || isElement(arg)) {
          params[name] = arg;
        } else if (arg !== undefined) {
          error("Unexpected type of ".concat(name, "! Expected \"string\" or \"Element\", got ").concat(typeof arg));
        }
      });
    }

    return params;
  };

  const swalPrefix = 'swal2-';
  const prefix = items => {
    const result = {};

    for (const i in items) {
      result[items[i]] = swalPrefix + items[i];
    }

    return result;
  };
  const swalClasses = prefix(['container', 'shown', 'height-auto', 'iosfix', 'popup', 'modal', 'no-backdrop', 'no-transition', 'toast', 'toast-shown', 'show', 'hide', 'close', 'title', 'html-container', 'actions', 'confirm', 'deny', 'cancel', 'default-outline', 'footer', 'icon', 'icon-content', 'image', 'input', 'file', 'range', 'select', 'radio', 'checkbox', 'label', 'textarea', 'inputerror', 'input-label', 'validation-message', 'progress-steps', 'active-progress-step', 'progress-step', 'progress-step-line', 'loader', 'loading', 'styled', 'top', 'top-start', 'top-end', 'top-left', 'top-right', 'center', 'center-start', 'center-end', 'center-left', 'center-right', 'bottom', 'bottom-start', 'bottom-end', 'bottom-left', 'bottom-right', 'grow-row', 'grow-column', 'grow-fullscreen', 'rtl', 'timer-progress-bar', 'timer-progress-bar-container', 'scrollbar-measure', 'icon-success', 'icon-warning', 'icon-info', 'icon-question', 'icon-error']);
  const iconTypes = prefix(['success', 'warning', 'info', 'question', 'error']);

  const getContainer = () => document.body.querySelector(".".concat(swalClasses.container));
  const elementBySelector = selectorString => {
    const container = getContainer();
    return container ? container.querySelector(selectorString) : null;
  };

  const elementByClass = className => {
    return elementBySelector(".".concat(className));
  };

  const getPopup = () => elementByClass(swalClasses.popup);
  const getIcon = () => elementByClass(swalClasses.icon);
  const getTitle = () => elementByClass(swalClasses.title);
  const getHtmlContainer = () => elementByClass(swalClasses['html-container']);
  const getImage = () => elementByClass(swalClasses.image);
  const getProgressSteps = () => elementByClass(swalClasses['progress-steps']);
  const getValidationMessage = () => elementByClass(swalClasses['validation-message']);
  const getConfirmButton = () => elementBySelector(".".concat(swalClasses.actions, " .").concat(swalClasses.confirm));
  const getDenyButton = () => elementBySelector(".".concat(swalClasses.actions, " .").concat(swalClasses.deny));
  const getInputLabel = () => elementByClass(swalClasses['input-label']);
  const getLoader = () => elementBySelector(".".concat(swalClasses.loader));
  const getCancelButton = () => elementBySelector(".".concat(swalClasses.actions, " .").concat(swalClasses.cancel));
  const getActions = () => elementByClass(swalClasses.actions);
  const getFooter = () => elementByClass(swalClasses.footer);
  const getTimerProgressBar = () => elementByClass(swalClasses['timer-progress-bar']);
  const getCloseButton = () => elementByClass(swalClasses.close); // https://github.com/jkup/focusable/blob/master/index.js

  const focusable = "\n  a[href],\n  area[href],\n  input:not([disabled]),\n  select:not([disabled]),\n  textarea:not([disabled]),\n  button:not([disabled]),\n  iframe,\n  object,\n  embed,\n  [tabindex=\"0\"],\n  [contenteditable],\n  audio[controls],\n  video[controls],\n  summary\n";
  const getFocusableElements = () => {
    const focusableElementsWithTabindex = toArray(getPopup().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')) // sort according to tabindex
    .sort((a, b) => {
      a = parseInt(a.getAttribute('tabindex'));
      b = parseInt(b.getAttribute('tabindex'));

      if (a > b) {
        return 1;
      } else if (a < b) {
        return -1;
      }

      return 0;
    });
    const otherFocusableElements = toArray(getPopup().querySelectorAll(focusable)).filter(el => el.getAttribute('tabindex') !== '-1');
    return uniqueArray(focusableElementsWithTabindex.concat(otherFocusableElements)).filter(el => isVisible(el));
  };
  const isModal = () => {
    return !isToast() && !document.body.classList.contains(swalClasses['no-backdrop']);
  };
  const isToast = () => {
    return document.body.classList.contains(swalClasses['toast-shown']);
  };
  const isLoading = () => {
    return getPopup().hasAttribute('data-loading');
  };

  const states = {
    previousBodyPadding: null
  };
  const setInnerHtml = (elem, html) => {
    // #1926
    elem.textContent = '';

    if (html) {
      const parser = new DOMParser();
      const parsed = parser.parseFromString(html, "text/html");
      toArray(parsed.querySelector('head').childNodes).forEach(child => {
        elem.appendChild(child);
      });
      toArray(parsed.querySelector('body').childNodes).forEach(child => {
        elem.appendChild(child);
      });
    }
  };
  const hasClass = (elem, className) => {
    if (!className) {
      return false;
    }

    const classList = className.split(/\s+/);

    for (let i = 0; i < classList.length; i++) {
      if (!elem.classList.contains(classList[i])) {
        return false;
      }
    }

    return true;
  };

  const removeCustomClasses = (elem, params) => {
    toArray(elem.classList).forEach(className => {
      if (!Object.values(swalClasses).includes(className) && !Object.values(iconTypes).includes(className) && !Object.values(params.showClass).includes(className)) {
        elem.classList.remove(className);
      }
    });
  };

  const applyCustomClass = (elem, params, className) => {
    removeCustomClasses(elem, params);

    if (params.customClass && params.customClass[className]) {
      if (typeof params.customClass[className] !== 'string' && !params.customClass[className].forEach) {
        return warn("Invalid type of customClass.".concat(className, "! Expected string or iterable object, got \"").concat(typeof params.customClass[className], "\""));
      }

      addClass(elem, params.customClass[className]);
    }
  };
  const getInput = (popup, inputType) => {
    if (!inputType) {
      return null;
    }

    switch (inputType) {
      case 'select':
      case 'textarea':
      case 'file':
        return getChildByClass(popup, swalClasses[inputType]);

      case 'checkbox':
        return popup.querySelector(".".concat(swalClasses.checkbox, " input"));

      case 'radio':
        return popup.querySelector(".".concat(swalClasses.radio, " input:checked")) || popup.querySelector(".".concat(swalClasses.radio, " input:first-child"));

      case 'range':
        return popup.querySelector(".".concat(swalClasses.range, " input"));

      default:
        return getChildByClass(popup, swalClasses.input);
    }
  };
  const focusInput = input => {
    input.focus(); // place cursor at end of text in text input

    if (input.type !== 'file') {
      // http://stackoverflow.com/a/2345915
      const val = input.value;
      input.value = '';
      input.value = val;
    }
  };
  const toggleClass = (target, classList, condition) => {
    if (!target || !classList) {
      return;
    }

    if (typeof classList === 'string') {
      classList = classList.split(/\s+/).filter(Boolean);
    }

    classList.forEach(className => {
      if (target.forEach) {
        target.forEach(elem => {
          condition ? elem.classList.add(className) : elem.classList.remove(className);
        });
      } else {
        condition ? target.classList.add(className) : target.classList.remove(className);
      }
    });
  };
  const addClass = (target, classList) => {
    toggleClass(target, classList, true);
  };
  const removeClass = (target, classList) => {
    toggleClass(target, classList, false);
  };
  const getChildByClass = (elem, className) => {
    for (let i = 0; i < elem.childNodes.length; i++) {
      if (hasClass(elem.childNodes[i], className)) {
        return elem.childNodes[i];
      }
    }
  };
  const applyNumericalStyle = (elem, property, value) => {
    if (value === "".concat(parseInt(value))) {
      value = parseInt(value);
    }

    if (value || parseInt(value) === 0) {
      elem.style[property] = typeof value === 'number' ? "".concat(value, "px") : value;
    } else {
      elem.style.removeProperty(property);
    }
  };
  const show = (elem, display = 'flex') => {
    elem.style.display = display;
  };
  const hide = elem => {
    elem.style.display = 'none';
  };
  const setStyle = (parent, selector, property, value) => {
    const el = parent.querySelector(selector);

    if (el) {
      el.style[property] = value;
    }
  };
  const toggle = (elem, condition, display) => {
    condition ? show(elem, display) : hide(elem);
  }; // borrowed from jquery $(elem).is(':visible') implementation

  const isVisible = elem => !!(elem && (elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length));
  const allButtonsAreHidden = () => !isVisible(getConfirmButton()) && !isVisible(getDenyButton()) && !isVisible(getCancelButton());
  const isScrollable = elem => !!(elem.scrollHeight > elem.clientHeight); // borrowed from https://stackoverflow.com/a/46352119

  const hasCssAnimation = elem => {
    const style = window.getComputedStyle(elem);
    const animDuration = parseFloat(style.getPropertyValue('animation-duration') || '0');
    const transDuration = parseFloat(style.getPropertyValue('transition-duration') || '0');
    return animDuration > 0 || transDuration > 0;
  };
  const animateTimerProgressBar = (timer, reset = false) => {
    const timerProgressBar = getTimerProgressBar();

    if (isVisible(timerProgressBar)) {
      if (reset) {
        timerProgressBar.style.transition = 'none';
        timerProgressBar.style.width = '100%';
      }

      setTimeout(() => {
        timerProgressBar.style.transition = "width ".concat(timer / 1000, "s linear");
        timerProgressBar.style.width = '0%';
      }, 10);
    }
  };
  const stopTimerProgressBar = () => {
    const timerProgressBar = getTimerProgressBar();
    const timerProgressBarWidth = parseInt(window.getComputedStyle(timerProgressBar).width);
    timerProgressBar.style.removeProperty('transition');
    timerProgressBar.style.width = '100%';
    const timerProgressBarFullWidth = parseInt(window.getComputedStyle(timerProgressBar).width);
    const timerProgressBarPercent = parseInt(timerProgressBarWidth / timerProgressBarFullWidth * 100);
    timerProgressBar.style.removeProperty('transition');
    timerProgressBar.style.width = "".concat(timerProgressBarPercent, "%");
  };

  // Detect Node env
  const isNodeEnv = () => typeof window === 'undefined' || typeof document === 'undefined';

  const sweetHTML = "\n <div aria-labelledby=\"".concat(swalClasses.title, "\" aria-describedby=\"").concat(swalClasses['html-container'], "\" class=\"").concat(swalClasses.popup, "\" tabindex=\"-1\">\n   <button type=\"button\" class=\"").concat(swalClasses.close, "\"></button>\n   <ul class=\"").concat(swalClasses['progress-steps'], "\"></ul>\n   <div class=\"").concat(swalClasses.icon, "\"></div>\n   <img class=\"").concat(swalClasses.image, "\" />\n   <h2 class=\"").concat(swalClasses.title, "\" id=\"").concat(swalClasses.title, "\"></h2>\n   <div class=\"").concat(swalClasses['html-container'], "\" id=\"").concat(swalClasses['html-container'], "\"></div>\n   <input class=\"").concat(swalClasses.input, "\" />\n   <input type=\"file\" class=\"").concat(swalClasses.file, "\" />\n   <div class=\"").concat(swalClasses.range, "\">\n     <input type=\"range\" />\n     <output></output>\n   </div>\n   <select class=\"").concat(swalClasses.select, "\"></select>\n   <div class=\"").concat(swalClasses.radio, "\"></div>\n   <label for=\"").concat(swalClasses.checkbox, "\" class=\"").concat(swalClasses.checkbox, "\">\n     <input type=\"checkbox\" />\n     <span class=\"").concat(swalClasses.label, "\"></span>\n   </label>\n   <textarea class=\"").concat(swalClasses.textarea, "\"></textarea>\n   <div class=\"").concat(swalClasses['validation-message'], "\" id=\"").concat(swalClasses['validation-message'], "\"></div>\n   <div class=\"").concat(swalClasses.actions, "\">\n     <div class=\"").concat(swalClasses.loader, "\"></div>\n     <button type=\"button\" class=\"").concat(swalClasses.confirm, "\"></button>\n     <button type=\"button\" class=\"").concat(swalClasses.deny, "\"></button>\n     <button type=\"button\" class=\"").concat(swalClasses.cancel, "\"></button>\n   </div>\n   <div class=\"").concat(swalClasses.footer, "\"></div>\n   <div class=\"").concat(swalClasses['timer-progress-bar-container'], "\">\n     <div class=\"").concat(swalClasses['timer-progress-bar'], "\"></div>\n   </div>\n </div>\n").replace(/(^|\n)\s*/g, '');

  const resetOldContainer = () => {
    const oldContainer = getContainer();

    if (!oldContainer) {
      return false;
    }

    oldContainer.remove();
    removeClass([document.documentElement, document.body], [swalClasses['no-backdrop'], swalClasses['toast-shown'], swalClasses['has-column']]);
    return true;
  };

  const resetValidationMessage = () => {
    if (Swal.isVisible()) {
      Swal.resetValidationMessage();
    }
  };

  const addInputChangeListeners = () => {
    const popup = getPopup();
    const input = getChildByClass(popup, swalClasses.input);
    const file = getChildByClass(popup, swalClasses.file);
    const range = popup.querySelector(".".concat(swalClasses.range, " input"));
    const rangeOutput = popup.querySelector(".".concat(swalClasses.range, " output"));
    const select = getChildByClass(popup, swalClasses.select);
    const checkbox = popup.querySelector(".".concat(swalClasses.checkbox, " input"));
    const textarea = getChildByClass(popup, swalClasses.textarea);
    input.oninput = resetValidationMessage;
    file.onchange = resetValidationMessage;
    select.onchange = resetValidationMessage;
    checkbox.onchange = resetValidationMessage;
    textarea.oninput = resetValidationMessage;

    range.oninput = () => {
      resetValidationMessage();
      rangeOutput.value = range.value;
    };

    range.onchange = () => {
      resetValidationMessage();
      range.nextSibling.value = range.value;
    };
  };

  const getTarget = target => typeof target === 'string' ? document.querySelector(target) : target;

  const setupAccessibility = params => {
    const popup = getPopup();
    popup.setAttribute('role', params.toast ? 'alert' : 'dialog');
    popup.setAttribute('aria-live', params.toast ? 'polite' : 'assertive');

    if (!params.toast) {
      popup.setAttribute('aria-modal', 'true');
    }
  };

  const setupRTL = targetElement => {
    if (window.getComputedStyle(targetElement).direction === 'rtl') {
      addClass(getContainer(), swalClasses.rtl);
    }
  };
  /*
   * Add modal + backdrop to DOM
   */


  const init = params => {
    // Clean up the old popup container if it exists
    const oldContainerExisted = resetOldContainer();
    /* istanbul ignore if */

    if (isNodeEnv()) {
      error('SweetAlert2 requires document to initialize');
      return;
    }

    const container = document.createElement('div');
    container.className = swalClasses.container;

    if (oldContainerExisted) {
      addClass(container, swalClasses['no-transition']);
    }

    setInnerHtml(container, sweetHTML);
    const targetElement = getTarget(params.target);
    targetElement.appendChild(container);
    setupAccessibility(params);
    setupRTL(targetElement);
    addInputChangeListeners();
  };

  const parseHtmlToContainer = (param, target) => {
    // DOM element
    if (param instanceof HTMLElement) {
      target.appendChild(param); // Object
    } else if (typeof param === 'object') {
      handleObject(param, target); // Plain string
    } else if (param) {
      setInnerHtml(target, param);
    }
  };

  const handleObject = (param, target) => {
    // JQuery element(s)
    if (param.jquery) {
      handleJqueryElem(target, param); // For other objects use their string representation
    } else {
      setInnerHtml(target, param.toString());
    }
  };

  const handleJqueryElem = (target, elem) => {
    target.textContent = '';

    if (0 in elem) {
      for (let i = 0; (i in elem); i++) {
        target.appendChild(elem[i].cloneNode(true));
      }
    } else {
      target.appendChild(elem.cloneNode(true));
    }
  };

  const animationEndEvent = (() => {
    // Prevent run in Node env

    /* istanbul ignore if */
    if (isNodeEnv()) {
      return false;
    }

    const testEl = document.createElement('div');
    const transEndEventNames = {
      WebkitAnimation: 'webkitAnimationEnd',
      OAnimation: 'oAnimationEnd oanimationend',
      animation: 'animationend'
    };

    for (const i in transEndEventNames) {
      if (Object.prototype.hasOwnProperty.call(transEndEventNames, i) && typeof testEl.style[i] !== 'undefined') {
        return transEndEventNames[i];
      }
    }

    return false;
  })();

  // https://github.com/twbs/bootstrap/blob/master/js/src/modal.js

  const measureScrollbar = () => {
    const scrollDiv = document.createElement('div');
    scrollDiv.className = swalClasses['scrollbar-measure'];
    document.body.appendChild(scrollDiv);
    const scrollbarWidth = scrollDiv.getBoundingClientRect().width - scrollDiv.clientWidth;
    document.body.removeChild(scrollDiv);
    return scrollbarWidth;
  };

  const renderActions = (instance, params) => {
    const actions = getActions();
    const loader = getLoader();
    const confirmButton = getConfirmButton();
    const denyButton = getDenyButton();
    const cancelButton = getCancelButton(); // Actions (buttons) wrapper

    if (!params.showConfirmButton && !params.showDenyButton && !params.showCancelButton) {
      hide(actions);
    } else {
      show(actions);
    } // Custom class


    applyCustomClass(actions, params, 'actions'); // Render buttons

    renderButton(confirmButton, 'confirm', params);
    renderButton(denyButton, 'deny', params);
    renderButton(cancelButton, 'cancel', params);
    handleButtonsStyling(confirmButton, denyButton, cancelButton, params);

    if (params.reverseButtons) {
      actions.insertBefore(cancelButton, loader);
      actions.insertBefore(denyButton, loader);
      actions.insertBefore(confirmButton, loader);
    } // Loader


    setInnerHtml(loader, params.loaderHtml);
    applyCustomClass(loader, params, 'loader');
  };

  function handleButtonsStyling(confirmButton, denyButton, cancelButton, params) {
    if (!params.buttonsStyling) {
      return removeClass([confirmButton, denyButton, cancelButton], swalClasses.styled);
    }

    addClass([confirmButton, denyButton, cancelButton], swalClasses.styled); // Buttons background colors

    if (params.confirmButtonColor) {
      confirmButton.style.backgroundColor = params.confirmButtonColor;
      addClass(confirmButton, swalClasses['default-outline']);
    }

    if (params.denyButtonColor) {
      denyButton.style.backgroundColor = params.denyButtonColor;
      addClass(denyButton, swalClasses['default-outline']);
    }

    if (params.cancelButtonColor) {
      cancelButton.style.backgroundColor = params.cancelButtonColor;
      addClass(cancelButton, swalClasses['default-outline']);
    }
  }

  function renderButton(button, buttonType, params) {
    toggle(button, params["show".concat(capitalizeFirstLetter(buttonType), "Button")], 'inline-block');
    setInnerHtml(button, params["".concat(buttonType, "ButtonText")]); // Set caption text

    button.setAttribute('aria-label', params["".concat(buttonType, "ButtonAriaLabel")]); // ARIA label
    // Add buttons custom classes

    button.className = swalClasses[buttonType];
    applyCustomClass(button, params, "".concat(buttonType, "Button"));
    addClass(button, params["".concat(buttonType, "ButtonClass")]);
  }

  function handleBackdropParam(container, backdrop) {
    if (typeof backdrop === 'string') {
      container.style.background = backdrop;
    } else if (!backdrop) {
      addClass([document.documentElement, document.body], swalClasses['no-backdrop']);
    }
  }

  function handlePositionParam(container, position) {
    if (position in swalClasses) {
      addClass(container, swalClasses[position]);
    } else {
      warn('The "position" parameter is not valid, defaulting to "center"');
      addClass(container, swalClasses.center);
    }
  }

  function handleGrowParam(container, grow) {
    if (grow && typeof grow === 'string') {
      const growClass = "grow-".concat(grow);

      if (growClass in swalClasses) {
        addClass(container, swalClasses[growClass]);
      }
    }
  }

  const renderContainer = (instance, params) => {
    const container = getContainer();

    if (!container) {
      return;
    }

    handleBackdropParam(container, params.backdrop);
    handlePositionParam(container, params.position);
    handleGrowParam(container, params.grow); // Custom class

    applyCustomClass(container, params, 'container');
  };

  /**
   * This module containts `WeakMap`s for each effectively-"private  property" that a `Swal` has.
   * For example, to set the private property "foo" of `this` to "bar", you can `privateProps.foo.set(this, 'bar')`
   * This is the approach that Babel will probably take to implement private methods/fields
   *   https://github.com/tc39/proposal-private-methods
   *   https://github.com/babel/babel/pull/7555
   * Once we have the changes from that PR in Babel, and our core class fits reasonable in *one module*
   *   then we can use that language feature.
   */
  var privateProps = {
    promise: new WeakMap(),
    innerParams: new WeakMap(),
    domCache: new WeakMap()
  };

  const inputTypes = ['input', 'file', 'range', 'select', 'radio', 'checkbox', 'textarea'];
  const renderInput = (instance, params) => {
    const popup = getPopup();
    const innerParams = privateProps.innerParams.get(instance);
    const rerender = !innerParams || params.input !== innerParams.input;
    inputTypes.forEach(inputType => {
      const inputClass = swalClasses[inputType];
      const inputContainer = getChildByClass(popup, inputClass); // set attributes

      setAttributes(inputType, params.inputAttributes); // set class

      inputContainer.className = inputClass;

      if (rerender) {
        hide(inputContainer);
      }
    });

    if (params.input) {
      if (rerender) {
        showInput(params);
      } // set custom class


      setCustomClass(params);
    }
  };

  const showInput = params => {
    if (!renderInputType[params.input]) {
      return error("Unexpected type of input! Expected \"text\", \"email\", \"password\", \"number\", \"tel\", \"select\", \"radio\", \"checkbox\", \"textarea\", \"file\" or \"url\", got \"".concat(params.input, "\""));
    }

    const inputContainer = getInputContainer(params.input);
    const input = renderInputType[params.input](inputContainer, params);
    show(input); // input autofocus

    setTimeout(() => {
      focusInput(input);
    });
  };

  const removeAttributes = input => {
    for (let i = 0; i < input.attributes.length; i++) {
      const attrName = input.attributes[i].name;

      if (!['type', 'value', 'style'].includes(attrName)) {
        input.removeAttribute(attrName);
      }
    }
  };

  const setAttributes = (inputType, inputAttributes) => {
    const input = getInput(getPopup(), inputType);

    if (!input) {
      return;
    }

    removeAttributes(input);

    for (const attr in inputAttributes) {
      input.setAttribute(attr, inputAttributes[attr]);
    }
  };

  const setCustomClass = params => {
    const inputContainer = getInputContainer(params.input);

    if (params.customClass) {
      addClass(inputContainer, params.customClass.input);
    }
  };

  const setInputPlaceholder = (input, params) => {
    if (!input.placeholder || params.inputPlaceholder) {
      input.placeholder = params.inputPlaceholder;
    }
  };

  const setInputLabel = (input, prependTo, params) => {
    if (params.inputLabel) {
      input.id = swalClasses.input;
      const label = document.createElement('label');
      const labelClass = swalClasses['input-label'];
      label.setAttribute('for', input.id);
      label.className = labelClass;
      addClass(label, params.customClass.inputLabel);
      label.innerText = params.inputLabel;
      prependTo.insertAdjacentElement('beforebegin', label);
    }
  };

  const getInputContainer = inputType => {
    const inputClass = swalClasses[inputType] ? swalClasses[inputType] : swalClasses.input;
    return getChildByClass(getPopup(), inputClass);
  };

  const renderInputType = {};

  renderInputType.text = renderInputType.email = renderInputType.password = renderInputType.number = renderInputType.tel = renderInputType.url = (input, params) => {
    if (typeof params.inputValue === 'string' || typeof params.inputValue === 'number') {
      input.value = params.inputValue;
    } else if (!isPromise(params.inputValue)) {
      warn("Unexpected type of inputValue! Expected \"string\", \"number\" or \"Promise\", got \"".concat(typeof params.inputValue, "\""));
    }

    setInputLabel(input, input, params);
    setInputPlaceholder(input, params);
    input.type = params.input;
    return input;
  };

  renderInputType.file = (input, params) => {
    setInputLabel(input, input, params);
    setInputPlaceholder(input, params);
    return input;
  };

  renderInputType.range = (range, params) => {
    const rangeInput = range.querySelector('input');
    const rangeOutput = range.querySelector('output');
    rangeInput.value = params.inputValue;
    rangeInput.type = params.input;
    rangeOutput.value = params.inputValue;
    setInputLabel(rangeInput, range, params);
    return range;
  };

  renderInputType.select = (select, params) => {
    select.textContent = '';

    if (params.inputPlaceholder) {
      const placeholder = document.createElement('option');
      setInnerHtml(placeholder, params.inputPlaceholder);
      placeholder.value = '';
      placeholder.disabled = true;
      placeholder.selected = true;
      select.appendChild(placeholder);
    }

    setInputLabel(select, select, params);
    return select;
  };

  renderInputType.radio = radio => {
    radio.textContent = '';
    return radio;
  };

  renderInputType.checkbox = (checkboxContainer, params) => {
    const checkbox = getInput(getPopup(), 'checkbox');
    checkbox.value = 1;
    checkbox.id = swalClasses.checkbox;
    checkbox.checked = Boolean(params.inputValue);
    const label = checkboxContainer.querySelector('span');
    setInnerHtml(label, params.inputPlaceholder);
    return checkboxContainer;
  };

  renderInputType.textarea = (textarea, params) => {
    textarea.value = params.inputValue;
    setInputPlaceholder(textarea, params);
    setInputLabel(textarea, textarea, params);

    const getMargin = el => parseInt(window.getComputedStyle(el).marginLeft) + parseInt(window.getComputedStyle(el).marginRight);

    setTimeout(() => {
      // #2291
      if ('MutationObserver' in window) {
        // #1699
        const initialPopupWidth = parseInt(window.getComputedStyle(getPopup()).width);

        const textareaResizeHandler = () => {
          const textareaWidth = textarea.offsetWidth + getMargin(textarea);

          if (textareaWidth > initialPopupWidth) {
            getPopup().style.width = "".concat(textareaWidth, "px");
          } else {
            getPopup().style.width = null;
          }
        };

        new MutationObserver(textareaResizeHandler).observe(textarea, {
          attributes: true,
          attributeFilter: ['style']
        });
      }
    });
    return textarea;
  };

  const renderContent = (instance, params) => {
    const htmlContainer = getHtmlContainer();
    applyCustomClass(htmlContainer, params, 'htmlContainer'); // Content as HTML

    if (params.html) {
      parseHtmlToContainer(params.html, htmlContainer);
      show(htmlContainer, 'block'); // Content as plain text
    } else if (params.text) {
      htmlContainer.textContent = params.text;
      show(htmlContainer, 'block'); // No content
    } else {
      hide(htmlContainer);
    }

    renderInput(instance, params);
  };

  const renderFooter = (instance, params) => {
    const footer = getFooter();
    toggle(footer, params.footer);

    if (params.footer) {
      parseHtmlToContainer(params.footer, footer);
    } // Custom class


    applyCustomClass(footer, params, 'footer');
  };

  const renderCloseButton = (instance, params) => {
    const closeButton = getCloseButton();
    setInnerHtml(closeButton, params.closeButtonHtml); // Custom class

    applyCustomClass(closeButton, params, 'closeButton');
    toggle(closeButton, params.showCloseButton);
    closeButton.setAttribute('aria-label', params.closeButtonAriaLabel);
  };

  const renderIcon = (instance, params) => {
    const innerParams = privateProps.innerParams.get(instance);
    const icon = getIcon(); // if the given icon already rendered, apply the styling without re-rendering the icon

    if (innerParams && params.icon === innerParams.icon) {
      // Custom or default content
      setContent(icon, params);
      applyStyles(icon, params);
      return;
    }

    if (!params.icon && !params.iconHtml) {
      return hide(icon);
    }

    if (params.icon && Object.keys(iconTypes).indexOf(params.icon) === -1) {
      error("Unknown icon! Expected \"success\", \"error\", \"warning\", \"info\" or \"question\", got \"".concat(params.icon, "\""));
      return hide(icon);
    }

    show(icon); // Custom or default content

    setContent(icon, params);
    applyStyles(icon, params); // Animate icon

    addClass(icon, params.showClass.icon);
  };

  const applyStyles = (icon, params) => {
    for (const iconType in iconTypes) {
      if (params.icon !== iconType) {
        removeClass(icon, iconTypes[iconType]);
      }
    }

    addClass(icon, iconTypes[params.icon]); // Icon color

    setColor(icon, params); // Success icon background color

    adjustSuccessIconBackgoundColor(); // Custom class

    applyCustomClass(icon, params, 'icon');
  }; // Adjust success icon background color to match the popup background color


  const adjustSuccessIconBackgoundColor = () => {
    const popup = getPopup();
    const popupBackgroundColor = window.getComputedStyle(popup).getPropertyValue('background-color');
    const successIconParts = popup.querySelectorAll('[class^=swal2-success-circular-line], .swal2-success-fix');

    for (let i = 0; i < successIconParts.length; i++) {
      successIconParts[i].style.backgroundColor = popupBackgroundColor;
    }
  };

  const setContent = (icon, params) => {
    icon.textContent = '';

    if (params.iconHtml) {
      setInnerHtml(icon, iconContent(params.iconHtml));
    } else if (params.icon === 'success') {
      setInnerHtml(icon, "\n      <div class=\"swal2-success-circular-line-left\"></div>\n      <span class=\"swal2-success-line-tip\"></span> <span class=\"swal2-success-line-long\"></span>\n      <div class=\"swal2-success-ring\"></div> <div class=\"swal2-success-fix\"></div>\n      <div class=\"swal2-success-circular-line-right\"></div>\n    ");
    } else if (params.icon === 'error') {
      setInnerHtml(icon, "\n      <span class=\"swal2-x-mark\">\n        <span class=\"swal2-x-mark-line-left\"></span>\n        <span class=\"swal2-x-mark-line-right\"></span>\n      </span>\n    ");
    } else {
      const defaultIconHtml = {
        question: '?',
        warning: '!',
        info: 'i'
      };
      setInnerHtml(icon, iconContent(defaultIconHtml[params.icon]));
    }
  };

  const setColor = (icon, params) => {
    if (!params.iconColor) {
      return;
    }

    icon.style.color = params.iconColor;
    icon.style.borderColor = params.iconColor;

    for (const sel of ['.swal2-success-line-tip', '.swal2-success-line-long', '.swal2-x-mark-line-left', '.swal2-x-mark-line-right']) {
      setStyle(icon, sel, 'backgroundColor', params.iconColor);
    }

    setStyle(icon, '.swal2-success-ring', 'borderColor', params.iconColor);
  };

  const iconContent = content => "<div class=\"".concat(swalClasses['icon-content'], "\">").concat(content, "</div>");

  const renderImage = (instance, params) => {
    const image = getImage();

    if (!params.imageUrl) {
      return hide(image);
    }

    show(image, ''); // Src, alt

    image.setAttribute('src', params.imageUrl);
    image.setAttribute('alt', params.imageAlt); // Width, height

    applyNumericalStyle(image, 'width', params.imageWidth);
    applyNumericalStyle(image, 'height', params.imageHeight); // Class

    image.className = swalClasses.image;
    applyCustomClass(image, params, 'image');
  };

  const createStepElement = step => {
    const stepEl = document.createElement('li');
    addClass(stepEl, swalClasses['progress-step']);
    setInnerHtml(stepEl, step);
    return stepEl;
  };

  const createLineElement = params => {
    const lineEl = document.createElement('li');
    addClass(lineEl, swalClasses['progress-step-line']);

    if (params.progressStepsDistance) {
      lineEl.style.width = params.progressStepsDistance;
    }

    return lineEl;
  };

  const renderProgressSteps = (instance, params) => {
    const progressStepsContainer = getProgressSteps();

    if (!params.progressSteps || params.progressSteps.length === 0) {
      return hide(progressStepsContainer);
    }

    show(progressStepsContainer);
    progressStepsContainer.textContent = '';

    if (params.currentProgressStep >= params.progressSteps.length) {
      warn('Invalid currentProgressStep parameter, it should be less than progressSteps.length ' + '(currentProgressStep like JS arrays starts from 0)');
    }

    params.progressSteps.forEach((step, index) => {
      const stepEl = createStepElement(step);
      progressStepsContainer.appendChild(stepEl);

      if (index === params.currentProgressStep) {
        addClass(stepEl, swalClasses['active-progress-step']);
      }

      if (index !== params.progressSteps.length - 1) {
        const lineEl = createLineElement(params);
        progressStepsContainer.appendChild(lineEl);
      }
    });
  };

  const renderTitle = (instance, params) => {
    const title = getTitle();
    toggle(title, params.title || params.titleText, 'block');

    if (params.title) {
      parseHtmlToContainer(params.title, title);
    }

    if (params.titleText) {
      title.innerText = params.titleText;
    } // Custom class


    applyCustomClass(title, params, 'title');
  };

  const renderPopup = (instance, params) => {
    const container = getContainer();
    const popup = getPopup(); // Width

    if (params.toast) {
      // #2170
      applyNumericalStyle(container, 'width', params.width);
      popup.style.width = '100%';
      popup.insertBefore(getLoader(), getIcon());
    } else {
      applyNumericalStyle(popup, 'width', params.width);
    } // Padding


    applyNumericalStyle(popup, 'padding', params.padding); // Background

    if (params.background) {
      popup.style.background = params.background;
    }

    hide(getValidationMessage()); // Classes

    addClasses(popup, params);
  };

  const addClasses = (popup, params) => {
    // Default Class + showClass when updating Swal.update({})
    popup.className = "".concat(swalClasses.popup, " ").concat(isVisible(popup) ? params.showClass.popup : '');

    if (params.toast) {
      addClass([document.documentElement, document.body], swalClasses['toast-shown']);
      addClass(popup, swalClasses.toast);
    } else {
      addClass(popup, swalClasses.modal);
    } // Custom class


    applyCustomClass(popup, params, 'popup');

    if (typeof params.customClass === 'string') {
      addClass(popup, params.customClass);
    } // Icon class (#1842)


    if (params.icon) {
      addClass(popup, swalClasses["icon-".concat(params.icon)]);
    }
  };

  const render = (instance, params) => {
    renderPopup(instance, params);
    renderContainer(instance, params);
    renderProgressSteps(instance, params);
    renderIcon(instance, params);
    renderImage(instance, params);
    renderTitle(instance, params);
    renderCloseButton(instance, params);
    renderContent(instance, params);
    renderActions(instance, params);
    renderFooter(instance, params);

    if (typeof params.didRender === 'function') {
      params.didRender(getPopup());
    }
  };

  /*
   * Global function to determine if SweetAlert2 popup is shown
   */

  const isVisible$1 = () => {
    return isVisible(getPopup());
  };
  /*
   * Global function to click 'Confirm' button
   */

  const clickConfirm = () => getConfirmButton() && getConfirmButton().click();
  /*
   * Global function to click 'Deny' button
   */

  const clickDeny = () => getDenyButton() && getDenyButton().click();
  /*
   * Global function to click 'Cancel' button
   */

  const clickCancel = () => getCancelButton() && getCancelButton().click();

  function fire(...args) {
    const Swal = this;
    return new Swal(...args);
  }

  /**
   * Returns an extended version of `Swal` containing `params` as defaults.
   * Useful for reusing Swal configuration.
   *
   * For example:
   *
   * Before:
   * const textPromptOptions = { input: 'text', showCancelButton: true }
   * const {value: firstName} = await Swal.fire({ ...textPromptOptions, title: 'What is your first name?' })
   * const {value: lastName} = await Swal.fire({ ...textPromptOptions, title: 'What is your last name?' })
   *
   * After:
   * const TextPrompt = Swal.mixin({ input: 'text', showCancelButton: true })
   * const {value: firstName} = await TextPrompt('What is your first name?')
   * const {value: lastName} = await TextPrompt('What is your last name?')
   *
   * @param mixinParams
   */
  function mixin(mixinParams) {
    class MixinSwal extends this {
      _main(params, priorityMixinParams) {
        return super._main(params, Object.assign({}, mixinParams, priorityMixinParams));
      }

    }

    return MixinSwal;
  }

  /**
   * Shows loader (spinner), this is useful with AJAX requests.
   * By default the loader be shown instead of the "Confirm" button.
   */

  const showLoading = buttonToReplace => {
    let popup = getPopup();

    if (!popup) {
      Swal.fire();
    }

    popup = getPopup();
    const loader = getLoader();

    if (isToast()) {
      hide(getIcon());
    } else {
      replaceButton(popup, buttonToReplace);
    }

    show(loader);
    popup.setAttribute('data-loading', true);
    popup.setAttribute('aria-busy', true);
    popup.focus();
  };

  const replaceButton = (popup, buttonToReplace) => {
    const actions = getActions();
    const loader = getLoader();

    if (!buttonToReplace && isVisible(getConfirmButton())) {
      buttonToReplace = getConfirmButton();
    }

    show(actions);

    if (buttonToReplace) {
      hide(buttonToReplace);
      loader.setAttribute('data-button-to-replace', buttonToReplace.className);
    }

    loader.parentNode.insertBefore(loader, buttonToReplace);
    addClass([popup, actions], swalClasses.loading);
  };

  const RESTORE_FOCUS_TIMEOUT = 100;

  const globalState = {};

  const focusPreviousActiveElement = () => {
    if (globalState.previousActiveElement && globalState.previousActiveElement.focus) {
      globalState.previousActiveElement.focus();
      globalState.previousActiveElement = null;
    } else if (document.body) {
      document.body.focus();
    }
  }; // Restore previous active (focused) element


  const restoreActiveElement = returnFocus => {
    return new Promise(resolve => {
      if (!returnFocus) {
        return resolve();
      }

      const x = window.scrollX;
      const y = window.scrollY;
      globalState.restoreFocusTimeout = setTimeout(() => {
        focusPreviousActiveElement();
        resolve();
      }, RESTORE_FOCUS_TIMEOUT); // issues/900

      window.scrollTo(x, y);
    });
  };

  /**
   * If `timer` parameter is set, returns number of milliseconds of timer remained.
   * Otherwise, returns undefined.
   */

  const getTimerLeft = () => {
    return globalState.timeout && globalState.timeout.getTimerLeft();
  };
  /**
   * Stop timer. Returns number of milliseconds of timer remained.
   * If `timer` parameter isn't set, returns undefined.
   */

  const stopTimer = () => {
    if (globalState.timeout) {
      stopTimerProgressBar();
      return globalState.timeout.stop();
    }
  };
  /**
   * Resume timer. Returns number of milliseconds of timer remained.
   * If `timer` parameter isn't set, returns undefined.
   */

  const resumeTimer = () => {
    if (globalState.timeout) {
      const remaining = globalState.timeout.start();
      animateTimerProgressBar(remaining);
      return remaining;
    }
  };
  /**
   * Resume timer. Returns number of milliseconds of timer remained.
   * If `timer` parameter isn't set, returns undefined.
   */

  const toggleTimer = () => {
    const timer = globalState.timeout;
    return timer && (timer.running ? stopTimer() : resumeTimer());
  };
  /**
   * Increase timer. Returns number of milliseconds of an updated timer.
   * If `timer` parameter isn't set, returns undefined.
   */

  const increaseTimer = n => {
    if (globalState.timeout) {
      const remaining = globalState.timeout.increase(n);
      animateTimerProgressBar(remaining, true);
      return remaining;
    }
  };
  /**
   * Check if timer is running. Returns true if timer is running
   * or false if timer is paused or stopped.
   * If `timer` parameter isn't set, returns undefined
   */

  const isTimerRunning = () => {
    return globalState.timeout && globalState.timeout.isRunning();
  };

  let bodyClickListenerAdded = false;
  const clickHandlers = {};
  function bindClickHandler(attr = 'data-swal-template') {
    clickHandlers[attr] = this;

    if (!bodyClickListenerAdded) {
      document.body.addEventListener('click', bodyClickListener);
      bodyClickListenerAdded = true;
    }
  }

  const bodyClickListener = event => {
    // TODO: replace with event.composedPath()
    for (let el = event.target; el && el !== document; el = el.parentNode) {
      for (const attr in clickHandlers) {
        const template = el.getAttribute(attr);

        if (template) {
          clickHandlers[attr].fire({
            template
          });
          return;
        }
      }
    }
  };

  const defaultParams = {
    title: '',
    titleText: '',
    text: '',
    html: '',
    footer: '',
    icon: undefined,
    iconColor: undefined,
    iconHtml: undefined,
    template: undefined,
    toast: false,
    showClass: {
      popup: 'swal2-show',
      backdrop: 'swal2-backdrop-show',
      icon: 'swal2-icon-show'
    },
    hideClass: {
      popup: 'swal2-hide',
      backdrop: 'swal2-backdrop-hide',
      icon: 'swal2-icon-hide'
    },
    customClass: {},
    target: 'body',
    backdrop: true,
    heightAuto: true,
    allowOutsideClick: true,
    allowEscapeKey: true,
    allowEnterKey: true,
    stopKeydownPropagation: true,
    keydownListenerCapture: false,
    showConfirmButton: true,
    showDenyButton: false,
    showCancelButton: false,
    preConfirm: undefined,
    preDeny: undefined,
    confirmButtonText: 'OK',
    confirmButtonAriaLabel: '',
    confirmButtonColor: undefined,
    denyButtonText: 'No',
    denyButtonAriaLabel: '',
    denyButtonColor: undefined,
    cancelButtonText: 'Cancel',
    cancelButtonAriaLabel: '',
    cancelButtonColor: undefined,
    buttonsStyling: true,
    reverseButtons: false,
    focusConfirm: true,
    focusDeny: false,
    focusCancel: false,
    returnFocus: true,
    showCloseButton: false,
    closeButtonHtml: '&times;',
    closeButtonAriaLabel: 'Close this dialog',
    loaderHtml: '',
    showLoaderOnConfirm: false,
    showLoaderOnDeny: false,
    imageUrl: undefined,
    imageWidth: undefined,
    imageHeight: undefined,
    imageAlt: '',
    timer: undefined,
    timerProgressBar: false,
    width: undefined,
    padding: undefined,
    background: undefined,
    input: undefined,
    inputPlaceholder: '',
    inputLabel: '',
    inputValue: '',
    inputOptions: {},
    inputAutoTrim: true,
    inputAttributes: {},
    inputValidator: undefined,
    returnInputValueOnDeny: false,
    validationMessage: undefined,
    grow: false,
    position: 'center',
    progressSteps: [],
    currentProgressStep: undefined,
    progressStepsDistance: undefined,
    willOpen: undefined,
    didOpen: undefined,
    didRender: undefined,
    willClose: undefined,
    didClose: undefined,
    didDestroy: undefined,
    scrollbarPadding: true
  };
  const updatableParams = ['allowEscapeKey', 'allowOutsideClick', 'background', 'buttonsStyling', 'cancelButtonAriaLabel', 'cancelButtonColor', 'cancelButtonText', 'closeButtonAriaLabel', 'closeButtonHtml', 'confirmButtonAriaLabel', 'confirmButtonColor', 'confirmButtonText', 'currentProgressStep', 'customClass', 'denyButtonAriaLabel', 'denyButtonColor', 'denyButtonText', 'didClose', 'didDestroy', 'footer', 'hideClass', 'html', 'icon', 'iconColor', 'iconHtml', 'imageAlt', 'imageHeight', 'imageUrl', 'imageWidth', 'preConfirm', 'preDeny', 'progressSteps', 'returnFocus', 'reverseButtons', 'showCancelButton', 'showCloseButton', 'showConfirmButton', 'showDenyButton', 'text', 'title', 'titleText', 'willClose'];
  const deprecatedParams = {};
  const toastIncompatibleParams = ['allowOutsideClick', 'allowEnterKey', 'backdrop', 'focusConfirm', 'focusDeny', 'focusCancel', 'returnFocus', 'heightAuto', 'keydownListenerCapture'];
  /**
   * Is valid parameter
   * @param {String} paramName
   */

  const isValidParameter = paramName => {
    return Object.prototype.hasOwnProperty.call(defaultParams, paramName);
  };
  /**
   * Is valid parameter for Swal.update() method
   * @param {String} paramName
   */

  const isUpdatableParameter = paramName => {
    return updatableParams.indexOf(paramName) !== -1;
  };
  /**
   * Is deprecated parameter
   * @param {String} paramName
   */

  const isDeprecatedParameter = paramName => {
    return deprecatedParams[paramName];
  };

  const checkIfParamIsValid = param => {
    if (!isValidParameter(param)) {
      warn("Unknown parameter \"".concat(param, "\""));
    }
  };

  const checkIfToastParamIsValid = param => {
    if (toastIncompatibleParams.includes(param)) {
      warn("The parameter \"".concat(param, "\" is incompatible with toasts"));
    }
  };

  const checkIfParamIsDeprecated = param => {
    if (isDeprecatedParameter(param)) {
      warnAboutDeprecation(param, isDeprecatedParameter(param));
    }
  };
  /**
   * Show relevant warnings for given params
   *
   * @param params
   */


  const showWarningsForParams = params => {
    if (!params.backdrop && params.allowOutsideClick) {
      warn('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`');
    }

    for (const param in params) {
      checkIfParamIsValid(param);

      if (params.toast) {
        checkIfToastParamIsValid(param);
      }

      checkIfParamIsDeprecated(param);
    }
  };



  var staticMethods = /*#__PURE__*/Object.freeze({
    isValidParameter: isValidParameter,
    isUpdatableParameter: isUpdatableParameter,
    isDeprecatedParameter: isDeprecatedParameter,
    argsToParams: argsToParams,
    isVisible: isVisible$1,
    clickConfirm: clickConfirm,
    clickDeny: clickDeny,
    clickCancel: clickCancel,
    getContainer: getContainer,
    getPopup: getPopup,
    getTitle: getTitle,
    getHtmlContainer: getHtmlContainer,
    getImage: getImage,
    getIcon: getIcon,
    getInputLabel: getInputLabel,
    getCloseButton: getCloseButton,
    getActions: getActions,
    getConfirmButton: getConfirmButton,
    getDenyButton: getDenyButton,
    getCancelButton: getCancelButton,
    getLoader: getLoader,
    getFooter: getFooter,
    getTimerProgressBar: getTimerProgressBar,
    getFocusableElements: getFocusableElements,
    getValidationMessage: getValidationMessage,
    isLoading: isLoading,
    fire: fire,
    mixin: mixin,
    showLoading: showLoading,
    enableLoading: showLoading,
    getTimerLeft: getTimerLeft,
    stopTimer: stopTimer,
    resumeTimer: resumeTimer,
    toggleTimer: toggleTimer,
    increaseTimer: increaseTimer,
    isTimerRunning: isTimerRunning,
    bindClickHandler: bindClickHandler
  });

  /**
   * Hides loader and shows back the button which was hidden by .showLoading()
   */

  function hideLoading() {
    // do nothing if popup is closed
    const innerParams = privateProps.innerParams.get(this);

    if (!innerParams) {
      return;
    }

    const domCache = privateProps.domCache.get(this);
    hide(domCache.loader);

    if (isToast()) {
      if (innerParams.icon) {
        show(getIcon());
      }
    } else {
      showRelatedButton(domCache);
    }

    removeClass([domCache.popup, domCache.actions], swalClasses.loading);
    domCache.popup.removeAttribute('aria-busy');
    domCache.popup.removeAttribute('data-loading');
    domCache.confirmButton.disabled = false;
    domCache.denyButton.disabled = false;
    domCache.cancelButton.disabled = false;
  }

  const showRelatedButton = domCache => {
    const buttonToReplace = domCache.popup.getElementsByClassName(domCache.loader.getAttribute('data-button-to-replace'));

    if (buttonToReplace.length) {
      show(buttonToReplace[0], 'inline-block');
    } else if (allButtonsAreHidden()) {
      hide(domCache.actions);
    }
  };

  function getInput$1(instance) {
    const innerParams = privateProps.innerParams.get(instance || this);
    const domCache = privateProps.domCache.get(instance || this);

    if (!domCache) {
      return null;
    }

    return getInput(domCache.popup, innerParams.input);
  }

  const fixScrollbar = () => {
    // for queues, do not do this more than once
    if (states.previousBodyPadding !== null) {
      return;
    } // if the body has overflow


    if (document.body.scrollHeight > window.innerHeight) {
      // add padding so the content doesn't shift after removal of scrollbar
      states.previousBodyPadding = parseInt(window.getComputedStyle(document.body).getPropertyValue('padding-right'));
      document.body.style.paddingRight = "".concat(states.previousBodyPadding + measureScrollbar(), "px");
    }
  };
  const undoScrollbar = () => {
    if (states.previousBodyPadding !== null) {
      document.body.style.paddingRight = "".concat(states.previousBodyPadding, "px");
      states.previousBodyPadding = null;
    }
  };

  /* istanbul ignore file */

  const iOSfix = () => {
    const iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream || navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1;

    if (iOS && !hasClass(document.body, swalClasses.iosfix)) {
      const offset = document.body.scrollTop;
      document.body.style.top = "".concat(offset * -1, "px");
      addClass(document.body, swalClasses.iosfix);
      lockBodyScroll();
      addBottomPaddingForTallPopups(); // #1948
    }
  };

  const addBottomPaddingForTallPopups = () => {
    const safari = !navigator.userAgent.match(/(CriOS|FxiOS|EdgiOS|YaBrowser|UCBrowser)/i);

    if (safari) {
      const bottomPanelHeight = 44;

      if (getPopup().scrollHeight > window.innerHeight - bottomPanelHeight) {
        getContainer().style.paddingBottom = "".concat(bottomPanelHeight, "px");
      }
    }
  };

  const lockBodyScroll = () => {
    // #1246
    const container = getContainer();
    let preventTouchMove;

    container.ontouchstart = e => {
      preventTouchMove = shouldPreventTouchMove(e);
    };

    container.ontouchmove = e => {
      if (preventTouchMove) {
        e.preventDefault();
        e.stopPropagation();
      }
    };
  };

  const shouldPreventTouchMove = event => {
    const target = event.target;
    const container = getContainer();

    if (isStylys(event) || isZoom(event)) {
      return false;
    }

    if (target === container) {
      return true;
    }

    if (!isScrollable(container) && target.tagName !== 'INPUT' && // #1603
    target.tagName !== 'TEXTAREA' && // #2266
    !(isScrollable(getHtmlContainer()) && // #1944
    getHtmlContainer().contains(target))) {
      return true;
    }

    return false;
  };

  const isStylys = event => {
    // #1786
    return event.touches && event.touches.length && event.touches[0].touchType === 'stylus';
  };

  const isZoom = event => {
    // #1891
    return event.touches && event.touches.length > 1;
  };

  const undoIOSfix = () => {
    if (hasClass(document.body, swalClasses.iosfix)) {
      const offset = parseInt(document.body.style.top, 10);
      removeClass(document.body, swalClasses.iosfix);
      document.body.style.top = '';
      document.body.scrollTop = offset * -1;
    }
  };

  // Adding aria-hidden="true" to elements outside of the active modal dialog ensures that
  // elements not within the active modal dialog will not be surfaced if a user opens a screen
  // reader’s list of elements (headings, form controls, landmarks, etc.) in the document.

  const setAriaHidden = () => {
    const bodyChildren = toArray(document.body.children);
    bodyChildren.forEach(el => {
      if (el === getContainer() || el.contains(getContainer())) {
        return;
      }

      if (el.hasAttribute('aria-hidden')) {
        el.setAttribute('data-previous-aria-hidden', el.getAttribute('aria-hidden'));
      }

      el.setAttribute('aria-hidden', 'true');
    });
  };
  const unsetAriaHidden = () => {
    const bodyChildren = toArray(document.body.children);
    bodyChildren.forEach(el => {
      if (el.hasAttribute('data-previous-aria-hidden')) {
        el.setAttribute('aria-hidden', el.getAttribute('data-previous-aria-hidden'));
        el.removeAttribute('data-previous-aria-hidden');
      } else {
        el.removeAttribute('aria-hidden');
      }
    });
  };

  /**
   * This module containts `WeakMap`s for each effectively-"private  property" that a `Swal` has.
   * For example, to set the private property "foo" of `this` to "bar", you can `privateProps.foo.set(this, 'bar')`
   * This is the approach that Babel will probably take to implement private methods/fields
   *   https://github.com/tc39/proposal-private-methods
   *   https://github.com/babel/babel/pull/7555
   * Once we have the changes from that PR in Babel, and our core class fits reasonable in *one module*
   *   then we can use that language feature.
   */
  var privateMethods = {
    swalPromiseResolve: new WeakMap()
  };

  /*
   * Instance method to close sweetAlert
   */

  function removePopupAndResetState(instance, container, returnFocus, didClose) {
    if (isToast()) {
      triggerDidCloseAndDispose(instance, didClose);
    } else {
      restoreActiveElement(returnFocus).then(() => triggerDidCloseAndDispose(instance, didClose));
      globalState.keydownTarget.removeEventListener('keydown', globalState.keydownHandler, {
        capture: globalState.keydownListenerCapture
      });
      globalState.keydownHandlerAdded = false;
    }

    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent); // workaround for #2088
    // for some reason removing the container in Safari will scroll the document to bottom

    if (isSafari) {
      container.setAttribute('style', 'display:none !important');
      container.removeAttribute('class');
      container.innerHTML = '';
    } else {
      container.remove();
    }

    if (isModal()) {
      undoScrollbar();
      undoIOSfix();
      unsetAriaHidden();
    }

    removeBodyClasses();
  }

  function removeBodyClasses() {
    removeClass([document.documentElement, document.body], [swalClasses.shown, swalClasses['height-auto'], swalClasses['no-backdrop'], swalClasses['toast-shown']]);
  }

  function close(resolveValue) {
    const popup = getPopup();

    if (!popup) {
      return;
    }

    resolveValue = prepareResolveValue(resolveValue);
    const innerParams = privateProps.innerParams.get(this);

    if (!innerParams || hasClass(popup, innerParams.hideClass.popup)) {
      return;
    }

    const swalPromiseResolve = privateMethods.swalPromiseResolve.get(this);
    removeClass(popup, innerParams.showClass.popup);
    addClass(popup, innerParams.hideClass.popup);
    const backdrop = getContainer();
    removeClass(backdrop, innerParams.showClass.backdrop);
    addClass(backdrop, innerParams.hideClass.backdrop);
    handlePopupAnimation(this, popup, innerParams); // Resolve Swal promise

    swalPromiseResolve(resolveValue);
  }

  const prepareResolveValue = resolveValue => {
    // When user calls Swal.close()
    if (typeof resolveValue === 'undefined') {
      return {
        isConfirmed: false,
        isDenied: false,
        isDismissed: true
      };
    }

    return Object.assign({
      isConfirmed: false,
      isDenied: false,
      isDismissed: false
    }, resolveValue);
  };

  const handlePopupAnimation = (instance, popup, innerParams) => {
    const container = getContainer(); // If animation is supported, animate

    const animationIsSupported = animationEndEvent && hasCssAnimation(popup);

    if (typeof innerParams.willClose === 'function') {
      innerParams.willClose(popup);
    }

    if (animationIsSupported) {
      animatePopup(instance, popup, container, innerParams.returnFocus, innerParams.didClose);
    } else {
      // Otherwise, remove immediately
      removePopupAndResetState(instance, container, innerParams.returnFocus, innerParams.didClose);
    }
  };

  const animatePopup = (instance, popup, container, returnFocus, didClose) => {
    globalState.swalCloseEventFinishedCallback = removePopupAndResetState.bind(null, instance, container, returnFocus, didClose);
    popup.addEventListener(animationEndEvent, function (e) {
      if (e.target === popup) {
        globalState.swalCloseEventFinishedCallback();
        delete globalState.swalCloseEventFinishedCallback;
      }
    });
  };

  const triggerDidCloseAndDispose = (instance, didClose) => {
    setTimeout(() => {
      if (typeof didClose === 'function') {
        didClose.bind(instance.params)();
      }

      instance._destroy();
    });
  };

  function setButtonsDisabled(instance, buttons, disabled) {
    const domCache = privateProps.domCache.get(instance);
    buttons.forEach(button => {
      domCache[button].disabled = disabled;
    });
  }

  function setInputDisabled(input, disabled) {
    if (!input) {
      return false;
    }

    if (input.type === 'radio') {
      const radiosContainer = input.parentNode.parentNode;
      const radios = radiosContainer.querySelectorAll('input');

      for (let i = 0; i < radios.length; i++) {
        radios[i].disabled = disabled;
      }
    } else {
      input.disabled = disabled;
    }
  }

  function enableButtons() {
    setButtonsDisabled(this, ['confirmButton', 'denyButton', 'cancelButton'], false);
  }
  function disableButtons() {
    setButtonsDisabled(this, ['confirmButton', 'denyButton', 'cancelButton'], true);
  }
  function enableInput() {
    return setInputDisabled(this.getInput(), false);
  }
  function disableInput() {
    return setInputDisabled(this.getInput(), true);
  }

  function showValidationMessage(error) {
    const domCache = privateProps.domCache.get(this);
    const params = privateProps.innerParams.get(this);
    setInnerHtml(domCache.validationMessage, error);
    domCache.validationMessage.className = swalClasses['validation-message'];

    if (params.customClass && params.customClass.validationMessage) {
      addClass(domCache.validationMessage, params.customClass.validationMessage);
    }

    show(domCache.validationMessage);
    const input = this.getInput();

    if (input) {
      input.setAttribute('aria-invalid', true);
      input.setAttribute('aria-describedby', swalClasses['validation-message']);
      focusInput(input);
      addClass(input, swalClasses.inputerror);
    }
  } // Hide block with validation message

  function resetValidationMessage$1() {
    const domCache = privateProps.domCache.get(this);

    if (domCache.validationMessage) {
      hide(domCache.validationMessage);
    }

    const input = this.getInput();

    if (input) {
      input.removeAttribute('aria-invalid');
      input.removeAttribute('aria-describedby');
      removeClass(input, swalClasses.inputerror);
    }
  }

  function getProgressSteps$1() {
    const domCache = privateProps.domCache.get(this);
    return domCache.progressSteps;
  }

  class Timer {
    constructor(callback, delay) {
      this.callback = callback;
      this.remaining = delay;
      this.running = false;
      this.start();
    }

    start() {
      if (!this.running) {
        this.running = true;
        this.started = new Date();
        this.id = setTimeout(this.callback, this.remaining);
      }

      return this.remaining;
    }

    stop() {
      if (this.running) {
        this.running = false;
        clearTimeout(this.id);
        this.remaining -= new Date() - this.started;
      }

      return this.remaining;
    }

    increase(n) {
      const running = this.running;

      if (running) {
        this.stop();
      }

      this.remaining += n;

      if (running) {
        this.start();
      }

      return this.remaining;
    }

    getTimerLeft() {
      if (this.running) {
        this.stop();
        this.start();
      }

      return this.remaining;
    }

    isRunning() {
      return this.running;
    }

  }

  var defaultInputValidators = {
    email: (string, validationMessage) => {
      return /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(string) ? Promise.resolve() : Promise.resolve(validationMessage || 'Invalid email address');
    },
    url: (string, validationMessage) => {
      // taken from https://stackoverflow.com/a/3809435 with a small change from #1306 and #2013
      return /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(string) ? Promise.resolve() : Promise.resolve(validationMessage || 'Invalid URL');
    }
  };

  function setDefaultInputValidators(params) {
    // Use default `inputValidator` for supported input types if not provided
    if (!params.inputValidator) {
      Object.keys(defaultInputValidators).forEach(key => {
        if (params.input === key) {
          params.inputValidator = defaultInputValidators[key];
        }
      });
    }
  }

  function validateCustomTargetElement(params) {
    // Determine if the custom target element is valid
    if (!params.target || typeof params.target === 'string' && !document.querySelector(params.target) || typeof params.target !== 'string' && !params.target.appendChild) {
      warn('Target parameter is not valid, defaulting to "body"');
      params.target = 'body';
    }
  }
  /**
   * Set type, text and actions on popup
   *
   * @param params
   * @returns {boolean}
   */


  function setParameters(params) {
    setDefaultInputValidators(params); // showLoaderOnConfirm && preConfirm

    if (params.showLoaderOnConfirm && !params.preConfirm) {
      warn('showLoaderOnConfirm is set to true, but preConfirm is not defined.\n' + 'showLoaderOnConfirm should be used together with preConfirm, see usage example:\n' + 'https://sweetalert2.github.io/#ajax-request');
    }

    validateCustomTargetElement(params); // Replace newlines with <br> in title

    if (typeof params.title === 'string') {
      params.title = params.title.split('\n').join('<br />');
    }

    init(params);
  }

  const swalStringParams = ['swal-title', 'swal-html', 'swal-footer'];
  const getTemplateParams = params => {
    const template = typeof params.template === 'string' ? document.querySelector(params.template) : params.template;

    if (!template) {
      return {};
    }

    const templateContent = template.content;
    showWarningsForElements(templateContent);
    const result = Object.assign(getSwalParams(templateContent), getSwalButtons(templateContent), getSwalImage(templateContent), getSwalIcon(templateContent), getSwalInput(templateContent), getSwalStringParams(templateContent, swalStringParams));
    return result;
  };

  const getSwalParams = templateContent => {
    const result = {};
    toArray(templateContent.querySelectorAll('swal-param')).forEach(param => {
      showWarningsForAttributes(param, ['name', 'value']);
      const paramName = param.getAttribute('name');
      let value = param.getAttribute('value');

      if (typeof defaultParams[paramName] === 'boolean' && value === 'false') {
        value = false;
      }

      if (typeof defaultParams[paramName] === 'object') {
        value = JSON.parse(value);
      }

      result[paramName] = value;
    });
    return result;
  };

  const getSwalButtons = templateContent => {
    const result = {};
    toArray(templateContent.querySelectorAll('swal-button')).forEach(button => {
      showWarningsForAttributes(button, ['type', 'color', 'aria-label']);
      const type = button.getAttribute('type');
      result["".concat(type, "ButtonText")] = button.innerHTML;
      result["show".concat(capitalizeFirstLetter(type), "Button")] = true;

      if (button.hasAttribute('color')) {
        result["".concat(type, "ButtonColor")] = button.getAttribute('color');
      }

      if (button.hasAttribute('aria-label')) {
        result["".concat(type, "ButtonAriaLabel")] = button.getAttribute('aria-label');
      }
    });
    return result;
  };

  const getSwalImage = templateContent => {
    const result = {};
    const image = templateContent.querySelector('swal-image');

    if (image) {
      showWarningsForAttributes(image, ['src', 'width', 'height', 'alt']);

      if (image.hasAttribute('src')) {
        result.imageUrl = image.getAttribute('src');
      }

      if (image.hasAttribute('width')) {
        result.imageWidth = image.getAttribute('width');
      }

      if (image.hasAttribute('height')) {
        result.imageHeight = image.getAttribute('height');
      }

      if (image.hasAttribute('alt')) {
        result.imageAlt = image.getAttribute('alt');
      }
    }

    return result;
  };

  const getSwalIcon = templateContent => {
    const result = {};
    const icon = templateContent.querySelector('swal-icon');

    if (icon) {
      showWarningsForAttributes(icon, ['type', 'color']);

      if (icon.hasAttribute('type')) {
        result.icon = icon.getAttribute('type');
      }

      if (icon.hasAttribute('color')) {
        result.iconColor = icon.getAttribute('color');
      }

      result.iconHtml = icon.innerHTML;
    }

    return result;
  };

  const getSwalInput = templateContent => {
    const result = {};
    const input = templateContent.querySelector('swal-input');

    if (input) {
      showWarningsForAttributes(input, ['type', 'label', 'placeholder', 'value']);
      result.input = input.getAttribute('type') || 'text';

      if (input.hasAttribute('label')) {
        result.inputLabel = input.getAttribute('label');
      }

      if (input.hasAttribute('placeholder')) {
        result.inputPlaceholder = input.getAttribute('placeholder');
      }

      if (input.hasAttribute('value')) {
        result.inputValue = input.getAttribute('value');
      }
    }

    const inputOptions = templateContent.querySelectorAll('swal-input-option');

    if (inputOptions.length) {
      result.inputOptions = {};
      toArray(inputOptions).forEach(option => {
        showWarningsForAttributes(option, ['value']);
        const optionValue = option.getAttribute('value');
        const optionName = option.innerHTML;
        result.inputOptions[optionValue] = optionName;
      });
    }

    return result;
  };

  const getSwalStringParams = (templateContent, paramNames) => {
    const result = {};

    for (const i in paramNames) {
      const paramName = paramNames[i];
      const tag = templateContent.querySelector(paramName);

      if (tag) {
        showWarningsForAttributes(tag, []);
        result[paramName.replace(/^swal-/, '')] = tag.innerHTML.trim();
      }
    }

    return result;
  };

  const showWarningsForElements = template => {
    const allowedElements = swalStringParams.concat(['swal-param', 'swal-button', 'swal-image', 'swal-icon', 'swal-input', 'swal-input-option']);
    toArray(template.children).forEach(el => {
      const tagName = el.tagName.toLowerCase();

      if (allowedElements.indexOf(tagName) === -1) {
        warn("Unrecognized element <".concat(tagName, ">"));
      }
    });
  };

  const showWarningsForAttributes = (el, allowedAttributes) => {
    toArray(el.attributes).forEach(attribute => {
      if (allowedAttributes.indexOf(attribute.name) === -1) {
        warn(["Unrecognized attribute \"".concat(attribute.name, "\" on <").concat(el.tagName.toLowerCase(), ">."), "".concat(allowedAttributes.length ? "Allowed attributes are: ".concat(allowedAttributes.join(', ')) : 'To set the value, use HTML within the element.')]);
      }
    });
  };

  const SHOW_CLASS_TIMEOUT = 10;
  /**
   * Open popup, add necessary classes and styles, fix scrollbar
   *
   * @param params
   */

  const openPopup = params => {
    const container = getContainer();
    const popup = getPopup();

    if (typeof params.willOpen === 'function') {
      params.willOpen(popup);
    }

    const bodyStyles = window.getComputedStyle(document.body);
    const initialBodyOverflow = bodyStyles.overflowY;
    addClasses$1(container, popup, params); // scrolling is 'hidden' until animation is done, after that 'auto'

    setTimeout(() => {
      setScrollingVisibility(container, popup);
    }, SHOW_CLASS_TIMEOUT);

    if (isModal()) {
      fixScrollContainer(container, params.scrollbarPadding, initialBodyOverflow);
      setAriaHidden();
    }

    if (!isToast() && !globalState.previousActiveElement) {
      globalState.previousActiveElement = document.activeElement;
    }

    if (typeof params.didOpen === 'function') {
      setTimeout(() => params.didOpen(popup));
    }

    removeClass(container, swalClasses['no-transition']);
  };

  const swalOpenAnimationFinished = event => {
    const popup = getPopup();

    if (event.target !== popup) {
      return;
    }

    const container = getContainer();
    popup.removeEventListener(animationEndEvent, swalOpenAnimationFinished);
    container.style.overflowY = 'auto';
  };

  const setScrollingVisibility = (container, popup) => {
    if (animationEndEvent && hasCssAnimation(popup)) {
      container.style.overflowY = 'hidden';
      popup.addEventListener(animationEndEvent, swalOpenAnimationFinished);
    } else {
      container.style.overflowY = 'auto';
    }
  };

  const fixScrollContainer = (container, scrollbarPadding, initialBodyOverflow) => {
    iOSfix();

    if (scrollbarPadding && initialBodyOverflow !== 'hidden') {
      fixScrollbar();
    } // sweetalert2/issues/1247


    setTimeout(() => {
      container.scrollTop = 0;
    });
  };

  const addClasses$1 = (container, popup, params) => {
    addClass(container, params.showClass.backdrop); // the workaround with setting/unsetting opacity is needed for #2019 and 2059

    popup.style.setProperty('opacity', '0', 'important');
    show(popup, 'grid');
    setTimeout(() => {
      // Animate popup right after showing it
      addClass(popup, params.showClass.popup); // and remove the opacity workaround

      popup.style.removeProperty('opacity');
    }, SHOW_CLASS_TIMEOUT); // 10ms in order to fix #2062

    addClass([document.documentElement, document.body], swalClasses.shown);

    if (params.heightAuto && params.backdrop && !params.toast) {
      addClass([document.documentElement, document.body], swalClasses['height-auto']);
    }
  };

  const handleInputOptionsAndValue = (instance, params) => {
    if (params.input === 'select' || params.input === 'radio') {
      handleInputOptions(instance, params);
    } else if (['text', 'email', 'number', 'tel', 'textarea'].includes(params.input) && (hasToPromiseFn(params.inputValue) || isPromise(params.inputValue))) {
      showLoading(getConfirmButton());
      handleInputValue(instance, params);
    }
  };
  const getInputValue = (instance, innerParams) => {
    const input = instance.getInput();

    if (!input) {
      return null;
    }

    switch (innerParams.input) {
      case 'checkbox':
        return getCheckboxValue(input);

      case 'radio':
        return getRadioValue(input);

      case 'file':
        return getFileValue(input);

      default:
        return innerParams.inputAutoTrim ? input.value.trim() : input.value;
    }
  };

  const getCheckboxValue = input => input.checked ? 1 : 0;

  const getRadioValue = input => input.checked ? input.value : null;

  const getFileValue = input => input.files.length ? input.getAttribute('multiple') !== null ? input.files : input.files[0] : null;

  const handleInputOptions = (instance, params) => {
    const popup = getPopup();

    const processInputOptions = inputOptions => populateInputOptions[params.input](popup, formatInputOptions(inputOptions), params);

    if (hasToPromiseFn(params.inputOptions) || isPromise(params.inputOptions)) {
      showLoading(getConfirmButton());
      asPromise(params.inputOptions).then(inputOptions => {
        instance.hideLoading();
        processInputOptions(inputOptions);
      });
    } else if (typeof params.inputOptions === 'object') {
      processInputOptions(params.inputOptions);
    } else {
      error("Unexpected type of inputOptions! Expected object, Map or Promise, got ".concat(typeof params.inputOptions));
    }
  };

  const handleInputValue = (instance, params) => {
    const input = instance.getInput();
    hide(input);
    asPromise(params.inputValue).then(inputValue => {
      input.value = params.input === 'number' ? parseFloat(inputValue) || 0 : "".concat(inputValue);
      show(input);
      input.focus();
      instance.hideLoading();
    }).catch(err => {
      error("Error in inputValue promise: ".concat(err));
      input.value = '';
      show(input);
      input.focus();
      instance.hideLoading();
    });
  };

  const populateInputOptions = {
    select: (popup, inputOptions, params) => {
      const select = getChildByClass(popup, swalClasses.select);

      const renderOption = (parent, optionLabel, optionValue) => {
        const option = document.createElement('option');
        option.value = optionValue;
        setInnerHtml(option, optionLabel);
        option.selected = isSelected(optionValue, params.inputValue);
        parent.appendChild(option);
      };

      inputOptions.forEach(inputOption => {
        const optionValue = inputOption[0];
        const optionLabel = inputOption[1]; // <optgroup> spec:
        // https://www.w3.org/TR/html401/interact/forms.html#h-17.6
        // "...all OPTGROUP elements must be specified directly within a SELECT element (i.e., groups may not be nested)..."
        // check whether this is a <optgroup>

        if (Array.isArray(optionLabel)) {
          // if it is an array, then it is an <optgroup>
          const optgroup = document.createElement('optgroup');
          optgroup.label = optionValue;
          optgroup.disabled = false; // not configurable for now

          select.appendChild(optgroup);
          optionLabel.forEach(o => renderOption(optgroup, o[1], o[0]));
        } else {
          // case of <option>
          renderOption(select, optionLabel, optionValue);
        }
      });
      select.focus();
    },
    radio: (popup, inputOptions, params) => {
      const radio = getChildByClass(popup, swalClasses.radio);
      inputOptions.forEach(inputOption => {
        const radioValue = inputOption[0];
        const radioLabel = inputOption[1];
        const radioInput = document.createElement('input');
        const radioLabelElement = document.createElement('label');
        radioInput.type = 'radio';
        radioInput.name = swalClasses.radio;
        radioInput.value = radioValue;

        if (isSelected(radioValue, params.inputValue)) {
          radioInput.checked = true;
        }

        const label = document.createElement('span');
        setInnerHtml(label, radioLabel);
        label.className = swalClasses.label;
        radioLabelElement.appendChild(radioInput);
        radioLabelElement.appendChild(label);
        radio.appendChild(radioLabelElement);
      });
      const radios = radio.querySelectorAll('input');

      if (radios.length) {
        radios[0].focus();
      }
    }
  };
  /**
   * Converts `inputOptions` into an array of `[value, label]`s
   * @param inputOptions
   */

  const formatInputOptions = inputOptions => {
    const result = [];

    if (typeof Map !== 'undefined' && inputOptions instanceof Map) {
      inputOptions.forEach((value, key) => {
        let valueFormatted = value;

        if (typeof valueFormatted === 'object') {
          // case of <optgroup>
          valueFormatted = formatInputOptions(valueFormatted);
        }

        result.push([key, valueFormatted]);
      });
    } else {
      Object.keys(inputOptions).forEach(key => {
        let valueFormatted = inputOptions[key];

        if (typeof valueFormatted === 'object') {
          // case of <optgroup>
          valueFormatted = formatInputOptions(valueFormatted);
        }

        result.push([key, valueFormatted]);
      });
    }

    return result;
  };

  const isSelected = (optionValue, inputValue) => {
    return inputValue && inputValue.toString() === optionValue.toString();
  };

  const handleConfirmButtonClick = instance => {
    const innerParams = privateProps.innerParams.get(instance);
    instance.disableButtons();

    if (innerParams.input) {
      handleConfirmOrDenyWithInput(instance, 'confirm');
    } else {
      confirm(instance, true);
    }
  };
  const handleDenyButtonClick = instance => {
    const innerParams = privateProps.innerParams.get(instance);
    instance.disableButtons();

    if (innerParams.returnInputValueOnDeny) {
      handleConfirmOrDenyWithInput(instance, 'deny');
    } else {
      deny(instance, false);
    }
  };
  const handleCancelButtonClick = (instance, dismissWith) => {
    instance.disableButtons();
    dismissWith(DismissReason.cancel);
  };

  const handleConfirmOrDenyWithInput = (instance, type
  /* 'confirm' | 'deny' */
  ) => {
    const innerParams = privateProps.innerParams.get(instance);
    const inputValue = getInputValue(instance, innerParams);

    if (innerParams.inputValidator) {
      handleInputValidator(instance, inputValue, type);
    } else if (!instance.getInput().checkValidity()) {
      instance.enableButtons();
      instance.showValidationMessage(innerParams.validationMessage);
    } else if (type === 'deny') {
      deny(instance, inputValue);
    } else {
      confirm(instance, inputValue);
    }
  };

  const handleInputValidator = (instance, inputValue, type
  /* 'confirm' | 'deny' */
  ) => {
    const innerParams = privateProps.innerParams.get(instance);
    instance.disableInput();
    const validationPromise = Promise.resolve().then(() => asPromise(innerParams.inputValidator(inputValue, innerParams.validationMessage)));
    validationPromise.then(validationMessage => {
      instance.enableButtons();
      instance.enableInput();

      if (validationMessage) {
        instance.showValidationMessage(validationMessage);
      } else if (type === 'deny') {
        deny(instance, inputValue);
      } else {
        confirm(instance, inputValue);
      }
    });
  };

  const deny = (instance, value) => {
    const innerParams = privateProps.innerParams.get(instance || undefined);

    if (innerParams.showLoaderOnDeny) {
      showLoading(getDenyButton());
    }

    if (innerParams.preDeny) {
      const preDenyPromise = Promise.resolve().then(() => asPromise(innerParams.preDeny(value, innerParams.validationMessage)));
      preDenyPromise.then(preDenyValue => {
        if (preDenyValue === false) {
          instance.hideLoading();
        } else {
          instance.closePopup({
            isDenied: true,
            value: typeof preDenyValue === 'undefined' ? value : preDenyValue
          });
        }
      });
    } else {
      instance.closePopup({
        isDenied: true,
        value
      });
    }
  };

  const succeedWith = (instance, value) => {
    instance.closePopup({
      isConfirmed: true,
      value
    });
  };

  const confirm = (instance, value) => {
    const innerParams = privateProps.innerParams.get(instance || undefined);

    if (innerParams.showLoaderOnConfirm) {
      showLoading(); // TODO: make showLoading an *instance* method
    }

    if (innerParams.preConfirm) {
      instance.resetValidationMessage();
      const preConfirmPromise = Promise.resolve().then(() => asPromise(innerParams.preConfirm(value, innerParams.validationMessage)));
      preConfirmPromise.then(preConfirmValue => {
        if (isVisible(getValidationMessage()) || preConfirmValue === false) {
          instance.hideLoading();
        } else {
          succeedWith(instance, typeof preConfirmValue === 'undefined' ? value : preConfirmValue);
        }
      });
    } else {
      succeedWith(instance, value);
    }
  };

  const addKeydownHandler = (instance, globalState, innerParams, dismissWith) => {
    if (globalState.keydownTarget && globalState.keydownHandlerAdded) {
      globalState.keydownTarget.removeEventListener('keydown', globalState.keydownHandler, {
        capture: globalState.keydownListenerCapture
      });
      globalState.keydownHandlerAdded = false;
    }

    if (!innerParams.toast) {
      globalState.keydownHandler = e => keydownHandler(instance, e, dismissWith);

      globalState.keydownTarget = innerParams.keydownListenerCapture ? window : getPopup();
      globalState.keydownListenerCapture = innerParams.keydownListenerCapture;
      globalState.keydownTarget.addEventListener('keydown', globalState.keydownHandler, {
        capture: globalState.keydownListenerCapture
      });
      globalState.keydownHandlerAdded = true;
    }
  }; // Focus handling

  const setFocus = (innerParams, index, increment) => {
    const focusableElements = getFocusableElements(); // search for visible elements and select the next possible match

    if (focusableElements.length) {
      index = index + increment; // rollover to first item

      if (index === focusableElements.length) {
        index = 0; // go to last item
      } else if (index === -1) {
        index = focusableElements.length - 1;
      }

      return focusableElements[index].focus();
    } // no visible focusable elements, focus the popup


    getPopup().focus();
  };
  const arrowKeysNextButton = ['ArrowRight', 'ArrowDown'];
  const arrowKeysPreviousButton = ['ArrowLeft', 'ArrowUp'];

  const keydownHandler = (instance, e, dismissWith) => {
    const innerParams = privateProps.innerParams.get(instance);

    if (!innerParams) {
      return; // This instance has already been destroyed
    }

    if (innerParams.stopKeydownPropagation) {
      e.stopPropagation();
    } // ENTER


    if (e.key === 'Enter') {
      handleEnter(instance, e, innerParams); // TAB
    } else if (e.key === 'Tab') {
      handleTab(e, innerParams); // ARROWS - switch focus between buttons
    } else if ([...arrowKeysNextButton, ...arrowKeysPreviousButton].includes(e.key)) {
      handleArrows(e.key); // ESC
    } else if (e.key === 'Escape') {
      handleEsc(e, innerParams, dismissWith);
    }
  };

  const handleEnter = (instance, e, innerParams) => {
    // #720 #721
    if (e.isComposing) {
      return;
    }

    if (e.target && instance.getInput() && e.target.outerHTML === instance.getInput().outerHTML) {
      if (['textarea', 'file'].includes(innerParams.input)) {
        return; // do not submit
      }

      clickConfirm();
      e.preventDefault();
    }
  };

  const handleTab = (e, innerParams) => {
    const targetElement = e.target;
    const focusableElements = getFocusableElements();
    let btnIndex = -1;

    for (let i = 0; i < focusableElements.length; i++) {
      if (targetElement === focusableElements[i]) {
        btnIndex = i;
        break;
      }
    }

    if (!e.shiftKey) {
      // Cycle to the next button
      setFocus(innerParams, btnIndex, 1);
    } else {
      // Cycle to the prev button
      setFocus(innerParams, btnIndex, -1);
    }

    e.stopPropagation();
    e.preventDefault();
  };

  const handleArrows = key => {
    const confirmButton = getConfirmButton();
    const denyButton = getDenyButton();
    const cancelButton = getCancelButton();

    if (![confirmButton, denyButton, cancelButton].includes(document.activeElement)) {
      return;
    }

    const sibling = arrowKeysNextButton.includes(key) ? 'nextElementSibling' : 'previousElementSibling';
    const buttonToFocus = document.activeElement[sibling];

    if (buttonToFocus) {
      buttonToFocus.focus();
    }
  };

  const handleEsc = (e, innerParams, dismissWith) => {
    if (callIfFunction(innerParams.allowEscapeKey)) {
      e.preventDefault();
      dismissWith(DismissReason.esc);
    }
  };

  const handlePopupClick = (instance, domCache, dismissWith) => {
    const innerParams = privateProps.innerParams.get(instance);

    if (innerParams.toast) {
      handleToastClick(instance, domCache, dismissWith);
    } else {
      // Ignore click events that had mousedown on the popup but mouseup on the container
      // This can happen when the user drags a slider
      handleModalMousedown(domCache); // Ignore click events that had mousedown on the container but mouseup on the popup

      handleContainerMousedown(domCache);
      handleModalClick(instance, domCache, dismissWith);
    }
  };

  const handleToastClick = (instance, domCache, dismissWith) => {
    // Closing toast by internal click
    domCache.popup.onclick = () => {
      const innerParams = privateProps.innerParams.get(instance);

      if (innerParams.showConfirmButton || innerParams.showDenyButton || innerParams.showCancelButton || innerParams.showCloseButton || innerParams.timer || innerParams.input) {
        return;
      }

      dismissWith(DismissReason.close);
    };
  };

  let ignoreOutsideClick = false;

  const handleModalMousedown = domCache => {
    domCache.popup.onmousedown = () => {
      domCache.container.onmouseup = function (e) {
        domCache.container.onmouseup = undefined; // We only check if the mouseup target is the container because usually it doesn't
        // have any other direct children aside of the popup

        if (e.target === domCache.container) {
          ignoreOutsideClick = true;
        }
      };
    };
  };

  const handleContainerMousedown = domCache => {
    domCache.container.onmousedown = () => {
      domCache.popup.onmouseup = function (e) {
        domCache.popup.onmouseup = undefined; // We also need to check if the mouseup target is a child of the popup

        if (e.target === domCache.popup || domCache.popup.contains(e.target)) {
          ignoreOutsideClick = true;
        }
      };
    };
  };

  const handleModalClick = (instance, domCache, dismissWith) => {
    domCache.container.onclick = e => {
      const innerParams = privateProps.innerParams.get(instance);

      if (ignoreOutsideClick) {
        ignoreOutsideClick = false;
        return;
      }

      if (e.target === domCache.container && callIfFunction(innerParams.allowOutsideClick)) {
        dismissWith(DismissReason.backdrop);
      }
    };
  };

  function _main(userParams, mixinParams = {}) {
    showWarningsForParams(Object.assign({}, mixinParams, userParams));

    if (globalState.currentInstance) {
      globalState.currentInstance._destroy();

      if (isModal()) {
        unsetAriaHidden();
      }
    }

    globalState.currentInstance = this;
    const innerParams = prepareParams(userParams, mixinParams);
    setParameters(innerParams);
    Object.freeze(innerParams); // clear the previous timer

    if (globalState.timeout) {
      globalState.timeout.stop();
      delete globalState.timeout;
    } // clear the restore focus timeout


    clearTimeout(globalState.restoreFocusTimeout);
    const domCache = populateDomCache(this);
    render(this, innerParams);
    privateProps.innerParams.set(this, innerParams);
    return swalPromise(this, domCache, innerParams);
  }

  const prepareParams = (userParams, mixinParams) => {
    const templateParams = getTemplateParams(userParams);
    const params = Object.assign({}, defaultParams, mixinParams, templateParams, userParams); // precedence is described in #2131

    params.showClass = Object.assign({}, defaultParams.showClass, params.showClass);
    params.hideClass = Object.assign({}, defaultParams.hideClass, params.hideClass);
    return params;
  };

  const swalPromise = (instance, domCache, innerParams) => {
    return new Promise(resolve => {
      // functions to handle all closings/dismissals
      const dismissWith = dismiss => {
        instance.closePopup({
          isDismissed: true,
          dismiss
        });
      };

      privateMethods.swalPromiseResolve.set(instance, resolve);

      domCache.confirmButton.onclick = () => handleConfirmButtonClick(instance);

      domCache.denyButton.onclick = () => handleDenyButtonClick(instance);

      domCache.cancelButton.onclick = () => handleCancelButtonClick(instance, dismissWith);

      domCache.closeButton.onclick = () => dismissWith(DismissReason.close);

      handlePopupClick(instance, domCache, dismissWith);
      addKeydownHandler(instance, globalState, innerParams, dismissWith);
      handleInputOptionsAndValue(instance, innerParams);
      openPopup(innerParams);
      setupTimer(globalState, innerParams, dismissWith);
      initFocus(domCache, innerParams); // Scroll container to top on open (#1247, #1946)

      setTimeout(() => {
        domCache.container.scrollTop = 0;
      });
    });
  };

  const populateDomCache = instance => {
    const domCache = {
      popup: getPopup(),
      container: getContainer(),
      actions: getActions(),
      confirmButton: getConfirmButton(),
      denyButton: getDenyButton(),
      cancelButton: getCancelButton(),
      loader: getLoader(),
      closeButton: getCloseButton(),
      validationMessage: getValidationMessage(),
      progressSteps: getProgressSteps()
    };
    privateProps.domCache.set(instance, domCache);
    return domCache;
  };

  const setupTimer = (globalState$$1, innerParams, dismissWith) => {
    const timerProgressBar = getTimerProgressBar();
    hide(timerProgressBar);

    if (innerParams.timer) {
      globalState$$1.timeout = new Timer(() => {
        dismissWith('timer');
        delete globalState$$1.timeout;
      }, innerParams.timer);

      if (innerParams.timerProgressBar) {
        show(timerProgressBar);
        setTimeout(() => {
          if (globalState$$1.timeout && globalState$$1.timeout.running) {
            // timer can be already stopped or unset at this point
            animateTimerProgressBar(innerParams.timer);
          }
        });
      }
    }
  };

  const initFocus = (domCache, innerParams) => {
    if (innerParams.toast) {
      return;
    }

    if (!callIfFunction(innerParams.allowEnterKey)) {
      return blurActiveElement();
    }

    if (!focusButton(domCache, innerParams)) {
      setFocus(innerParams, -1, 1);
    }
  };

  const focusButton = (domCache, innerParams) => {
    if (innerParams.focusDeny && isVisible(domCache.denyButton)) {
      domCache.denyButton.focus();
      return true;
    }

    if (innerParams.focusCancel && isVisible(domCache.cancelButton)) {
      domCache.cancelButton.focus();
      return true;
    }

    if (innerParams.focusConfirm && isVisible(domCache.confirmButton)) {
      domCache.confirmButton.focus();
      return true;
    }

    return false;
  };

  const blurActiveElement = () => {
    if (document.activeElement && typeof document.activeElement.blur === 'function') {
      document.activeElement.blur();
    }
  };

  /**
   * Updates popup parameters.
   */

  function update(params) {
    const popup = getPopup();
    const innerParams = privateProps.innerParams.get(this);

    if (!popup || hasClass(popup, innerParams.hideClass.popup)) {
      return warn("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");
    }

    const validUpdatableParams = {}; // assign valid params from `params` to `defaults`

    Object.keys(params).forEach(param => {
      if (Swal.isUpdatableParameter(param)) {
        validUpdatableParams[param] = params[param];
      } else {
        warn("Invalid parameter to update: \"".concat(param, "\". Updatable params are listed here: https://github.com/sweetalert2/sweetalert2/blob/master/src/utils/params.js\n\nIf you think this parameter should be updatable, request it here: https://github.com/sweetalert2/sweetalert2/issues/new?template=02_feature_request.md"));
      }
    });
    const updatedParams = Object.assign({}, innerParams, validUpdatableParams);
    render(this, updatedParams);
    privateProps.innerParams.set(this, updatedParams);
    Object.defineProperties(this, {
      params: {
        value: Object.assign({}, this.params, params),
        writable: false,
        enumerable: true
      }
    });
  }

  function _destroy() {
    const domCache = privateProps.domCache.get(this);
    const innerParams = privateProps.innerParams.get(this);

    if (!innerParams) {
      return; // This instance has already been destroyed
    } // Check if there is another Swal closing


    if (domCache.popup && globalState.swalCloseEventFinishedCallback) {
      globalState.swalCloseEventFinishedCallback();
      delete globalState.swalCloseEventFinishedCallback;
    } // Check if there is a swal disposal defer timer


    if (globalState.deferDisposalTimer) {
      clearTimeout(globalState.deferDisposalTimer);
      delete globalState.deferDisposalTimer;
    }

    if (typeof innerParams.didDestroy === 'function') {
      innerParams.didDestroy();
    }

    disposeSwal(this);
  }

  const disposeSwal = instance => {
    // Unset this.params so GC will dispose it (#1569)
    delete instance.params; // Unset globalState props so GC will dispose globalState (#1569)

    delete globalState.keydownHandler;
    delete globalState.keydownTarget; // Unset WeakMaps so GC will be able to dispose them (#1569)

    unsetWeakMaps(privateProps);
    unsetWeakMaps(privateMethods); // Unset currentInstance

    delete globalState.currentInstance;
  };

  const unsetWeakMaps = obj => {
    for (const i in obj) {
      obj[i] = new WeakMap();
    }
  };



  var instanceMethods = /*#__PURE__*/Object.freeze({
    hideLoading: hideLoading,
    disableLoading: hideLoading,
    getInput: getInput$1,
    close: close,
    closePopup: close,
    closeModal: close,
    closeToast: close,
    enableButtons: enableButtons,
    disableButtons: disableButtons,
    enableInput: enableInput,
    disableInput: disableInput,
    showValidationMessage: showValidationMessage,
    resetValidationMessage: resetValidationMessage$1,
    getProgressSteps: getProgressSteps$1,
    _main: _main,
    update: update,
    _destroy: _destroy
  });

  let currentInstance;

  class SweetAlert {
    constructor(...args) {
      // Prevent run in Node env
      if (typeof window === 'undefined') {
        return;
      }

      currentInstance = this;
      const outerParams = Object.freeze(this.constructor.argsToParams(args));
      Object.defineProperties(this, {
        params: {
          value: outerParams,
          writable: false,
          enumerable: true,
          configurable: true
        }
      });

      const promise = this._main(this.params);

      privateProps.promise.set(this, promise);
    } // `catch` cannot be the name of a module export, so we define our thenable methods here instead


    then(onFulfilled) {
      const promise = privateProps.promise.get(this);
      return promise.then(onFulfilled);
    }

    finally(onFinally) {
      const promise = privateProps.promise.get(this);
      return promise.finally(onFinally);
    }

  } // Assign instance methods from src/instanceMethods/*.js to prototype


  Object.assign(SweetAlert.prototype, instanceMethods); // Assign static methods from src/staticMethods/*.js to constructor

  Object.assign(SweetAlert, staticMethods); // Proxy to instance methods to constructor, for now, for backwards compatibility

  Object.keys(instanceMethods).forEach(key => {
    SweetAlert[key] = function (...args) {
      if (currentInstance) {
        return currentInstance[key](...args);
      }
    };
  });
  SweetAlert.DismissReason = DismissReason;
  SweetAlert.version = '11.1.5';

  const Swal = SweetAlert;
  Swal.default = Swal;

  return Swal;

}));
if (typeof this !== 'undefined' && this.Sweetalert2){  this.swal = this.sweetAlert = this.Swal = this.SweetAlert = this.Sweetalert2}

"undefined"!=typeof document&&function(e,t){var n=e.createElement("style");if(e.getElementsByTagName("head")[0].appendChild(n),n.styleSheet)n.styleSheet.disabled||(n.styleSheet.cssText=t);else try{n.innerHTML=t}catch(e){n.innerText=t}}(document,".swal2-popup.swal2-toast{box-sizing:border-box;grid-column:1/4!important;grid-row:1/4!important;grid-template-columns:1fr 99fr 1fr;padding:1em;overflow-y:hidden;background:#fff;box-shadow:0 0 .625em #d9d9d9;pointer-events:all}.swal2-popup.swal2-toast>*{grid-column:2}.swal2-popup.swal2-toast .swal2-title{margin:1em;padding:0;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-loading{justify-content:center}.swal2-popup.swal2-toast .swal2-input{height:2em;margin:.5em;font-size:1em}.swal2-popup.swal2-toast .swal2-validation-message{font-size:1em}.swal2-popup.swal2-toast .swal2-footer{margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-popup.swal2-toast .swal2-close{grid-column:3/3;grid-row:1/99;align-self:center;width:.8em;height:.8em;margin:0;font-size:2em}.swal2-popup.swal2-toast .swal2-html-container{margin:1em;padding:0;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-html-container:empty{padding:0}.swal2-popup.swal2-toast .swal2-loader{grid-column:1;grid-row:1/99;align-self:center;width:2em;height:2em;margin:.25em}.swal2-popup.swal2-toast .swal2-icon{grid-column:1;grid-row:1/99;align-self:center;width:2em;min-width:2em;height:2em;margin:0 .5em 0 0}.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:700}.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-popup.swal2-toast .swal2-actions{justify-content:flex-start;height:auto;margin:0;margin-top:.3125em;padding:0}.swal2-popup.swal2-toast .swal2-styled{margin:.25em .5em;padding:.4em .6em;font-size:1em}.swal2-popup.swal2-toast .swal2-styled:focus{box-shadow:0 0 0 1px #fff,0 0 0 3px rgba(100,150,200,.5)}.swal2-popup.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;transform:rotate(45deg);border-radius:50%}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.8em;left:-.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-popup.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{-webkit-animation:swal2-toast-animate-success-line-tip .75s;animation:swal2-toast-animate-success-line-tip .75s}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{-webkit-animation:swal2-toast-animate-success-line-long .75s;animation:swal2-toast-animate-success-line-long .75s}.swal2-popup.swal2-toast.swal2-show{-webkit-animation:swal2-toast-show .5s;animation:swal2-toast-show .5s}.swal2-popup.swal2-toast.swal2-hide{-webkit-animation:swal2-toast-hide .1s forwards;animation:swal2-toast-hide .1s forwards}.swal2-container{display:grid;position:fixed;z-index:1060;top:0;right:0;bottom:0;left:0;box-sizing:border-box;grid-template-areas:\"top-start     top            top-end\" \"center-start  center         center-end\" \"bottom-start  bottom-center  bottom-end\";grid-template-rows:minmax(-webkit-min-content,auto) minmax(-webkit-min-content,auto) minmax(-webkit-min-content,auto);grid-template-rows:minmax(min-content,auto) minmax(min-content,auto) minmax(min-content,auto);height:100%;padding:.625em;overflow-x:hidden;transition:background-color .1s;-webkit-overflow-scrolling:touch}.swal2-container.swal2-backdrop-show,.swal2-container.swal2-noanimation{background:rgba(0,0,0,.4)}.swal2-container.swal2-backdrop-hide{background:0 0!important}.swal2-container.swal2-bottom-start,.swal2-container.swal2-center-start,.swal2-container.swal2-top-start{grid-template-columns:minmax(0,1fr) auto auto}.swal2-container.swal2-bottom,.swal2-container.swal2-center,.swal2-container.swal2-top{grid-template-columns:auto minmax(0,1fr) auto}.swal2-container.swal2-bottom-end,.swal2-container.swal2-center-end,.swal2-container.swal2-top-end{grid-template-columns:auto auto minmax(0,1fr)}.swal2-container.swal2-top-start>.swal2-popup{align-self:start}.swal2-container.swal2-top>.swal2-popup{grid-column:2;align-self:start;justify-self:center}.swal2-container.swal2-top-end>.swal2-popup,.swal2-container.swal2-top-right>.swal2-popup{grid-column:3;align-self:start;justify-self:end}.swal2-container.swal2-center-left>.swal2-popup,.swal2-container.swal2-center-start>.swal2-popup{grid-row:2;align-self:center}.swal2-container.swal2-center>.swal2-popup{grid-column:2;grid-row:2;align-self:center;justify-self:center}.swal2-container.swal2-center-end>.swal2-popup,.swal2-container.swal2-center-right>.swal2-popup{grid-column:3;grid-row:2;align-self:center;justify-self:end}.swal2-container.swal2-bottom-left>.swal2-popup,.swal2-container.swal2-bottom-start>.swal2-popup{grid-column:1;grid-row:3;align-self:end}.swal2-container.swal2-bottom>.swal2-popup{grid-column:2;grid-row:3;justify-self:center;align-self:end}.swal2-container.swal2-bottom-end>.swal2-popup,.swal2-container.swal2-bottom-right>.swal2-popup{grid-column:3;grid-row:3;align-self:end;justify-self:end}.swal2-container.swal2-grow-fullscreen>.swal2-popup,.swal2-container.swal2-grow-row>.swal2-popup{grid-column:1/4;width:100%}.swal2-container.swal2-grow-column>.swal2-popup,.swal2-container.swal2-grow-fullscreen>.swal2-popup{grid-row:1/4;align-self:stretch}.swal2-container.swal2-no-transition{transition:none!important}.swal2-popup{display:none;position:relative;box-sizing:border-box;grid-template-columns:minmax(0,100%);width:32em;max-width:100%;padding:0 0 1.25em;border:none;border-radius:5px;background:#fff;color:#545454;font-family:inherit;font-size:1rem}.swal2-popup:focus{outline:0}.swal2-popup.swal2-loading{overflow-y:hidden}.swal2-title{position:relative;max-width:100%;margin:0;padding:.8em 1em 0;color:#595959;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word}.swal2-actions{display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:center;width:auto;margin:1.25em auto 0;padding:0}.swal2-actions:not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}.swal2-actions:not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0,0,0,.1),rgba(0,0,0,.1))}.swal2-actions:not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.2))}.swal2-loader{display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;-webkit-animation:swal2-rotate-loading 1.5s linear 0s infinite normal;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 transparent #2778c4 transparent}.swal2-styled{margin:.3125em;padding:.625em 1.1em;transition:box-shadow .1s;box-shadow:0 0 0 3px transparent;font-weight:500}.swal2-styled:not([disabled]){cursor:pointer}.swal2-styled.swal2-confirm{border:0;border-radius:.25em;background:initial;background-color:#7367f0;color:#fff;font-size:1em}.swal2-styled.swal2-confirm:focus{box-shadow:0 0 0 3px rgba(115,103,240,.5)}.swal2-styled.swal2-deny{border:0;border-radius:.25em;background:initial;background-color:#ea5455;color:#fff;font-size:1em}.swal2-styled.swal2-deny:focus{box-shadow:0 0 0 3px rgba(234,84,85,.5)}.swal2-styled.swal2-cancel{border:0;border-radius:.25em;background:initial;background-color:#6e7d88;color:#fff;font-size:1em}.swal2-styled.swal2-cancel:focus{box-shadow:0 0 0 3px rgba(110,125,136,.5)}.swal2-styled.swal2-default-outline:focus{box-shadow:0 0 0 3px rgba(100,150,200,.5)}.swal2-styled:focus{outline:0}.swal2-styled::-moz-focus-inner{border:0}.swal2-footer{justify-content:center;margin:1em 0 0;padding:1em 1em 0;border-top:1px solid #eee;color:#545454;font-size:1em}.swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;grid-column:auto!important;height:.25em;overflow:hidden;border-bottom-right-radius:5px;border-bottom-left-radius:5px}.swal2-timer-progress-bar{width:100%;height:.25em;background:rgba(0,0,0,.2)}.swal2-image{max-width:100%;margin:2em auto 1em}.swal2-close{z-index:2;align-items:center;justify-content:center;width:1.2em;height:1.2em;margin-top:0;margin-right:0;margin-bottom:-1.2em;padding:0;overflow:hidden;transition:color .1s,box-shadow .1s;border:none;border-radius:5px;background:0 0;color:#ccc;font-family:serif;font-family:monospace;font-size:2.5em;cursor:pointer;justify-self:end}.swal2-close:hover{transform:none;background:0 0;color:#f27474}.swal2-close:focus{outline:0;box-shadow:inset 0 0 0 3px rgba(100,150,200,.5)}.swal2-close::-moz-focus-inner{border:0}.swal2-html-container{z-index:1;justify-content:center;margin:1em 1.6em .3em;padding:0;overflow:auto;color:#545454;font-size:1.125em;font-weight:400;line-height:normal;text-align:center;word-wrap:break-word;word-break:break-word}.swal2-checkbox,.swal2-file,.swal2-input,.swal2-radio,.swal2-select,.swal2-textarea{margin:1em 2em 0}.swal2-file,.swal2-input,.swal2-textarea{box-sizing:border-box;width:auto;transition:border-color .1s,box-shadow .1s;border:1px solid #d9d9d9;border-radius:.1875em;background:inherit;box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px transparent;color:inherit;font-size:1.125em}.swal2-file.swal2-inputerror,.swal2-input.swal2-inputerror,.swal2-textarea.swal2-inputerror{border-color:#f27474!important;box-shadow:0 0 2px #f27474!important}.swal2-file:focus,.swal2-input:focus,.swal2-textarea:focus{border:1px solid #b4dbed;outline:0;box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(100,150,200,.5)}.swal2-file::-moz-placeholder,.swal2-input::-moz-placeholder,.swal2-textarea::-moz-placeholder{color:#ccc}.swal2-file:-ms-input-placeholder,.swal2-input:-ms-input-placeholder,.swal2-textarea:-ms-input-placeholder{color:#ccc}.swal2-file::placeholder,.swal2-input::placeholder,.swal2-textarea::placeholder{color:#ccc}.swal2-range{margin:1em 2em 0;background:#fff}.swal2-range input{width:80%}.swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}.swal2-range input,.swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}.swal2-input{height:2.625em;padding:0 .75em}.swal2-file{width:75%;margin-right:auto;margin-left:auto;background:inherit;font-size:1.125em}.swal2-textarea{height:6.75em;padding:.75em}.swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:inherit;color:inherit;font-size:1.125em}.swal2-checkbox,.swal2-radio{align-items:center;justify-content:center;background:#fff;color:inherit}.swal2-checkbox label,.swal2-radio label{margin:0 .6em;font-size:1.125em}.swal2-checkbox input,.swal2-radio input{flex-shrink:0;margin:0 .4em}.swal2-input-label{display:flex;justify-content:center;margin:1em auto 0}.swal2-validation-message{align-items:center;justify-content:center;margin:1em 0 0;padding:.625em;overflow:hidden;background:#f0f0f0;color:#666;font-size:1em;font-weight:300}.swal2-validation-message::before{content:\"!\";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}.swal2-icon{position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:2.5em auto .6em;border:.25em solid transparent;border-radius:50%;border-color:#000;font-family:inherit;line-height:5em;cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}.swal2-icon.swal2-error{border-color:#f27474;color:#f27474}.swal2-icon.swal2-error .swal2-x-mark{position:relative;flex-grow:1}.swal2-icon.swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}.swal2-icon.swal2-error.swal2-icon-show{-webkit-animation:swal2-animate-error-icon .5s;animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-error.swal2-icon-show .swal2-x-mark{-webkit-animation:swal2-animate-error-x-mark .5s;animation:swal2-animate-error-x-mark .5s}.swal2-icon.swal2-warning{border-color:#facea8;color:#f8bb86}.swal2-icon.swal2-info{border-color:#9de0f6;color:#3fc3ee}.swal2-icon.swal2-question{border-color:#c9dae1;color:#87adbd}.swal2-icon.swal2-success{border-color:#a5dc86;color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;transform:rotate(45deg);border-radius:50%}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}.swal2-icon.swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-.25em;left:-.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}.swal2-icon.swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}.swal2-icon.swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}.swal2-icon.swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-tip{-webkit-animation:swal2-animate-success-line-tip .75s;animation:swal2-animate-success-line-tip .75s}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-long{-webkit-animation:swal2-animate-success-line-long .75s;animation:swal2-animate-success-line-long .75s}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-circular-line-right{-webkit-animation:swal2-rotate-success-circular-line 4.25s ease-in;animation:swal2-rotate-success-circular-line 4.25s ease-in}.swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:1.25em auto;padding:0;background:inherit;font-weight:600}.swal2-progress-steps li{display:inline-block;position:relative}.swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:#add8e6;color:#fff}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:#add8e6}.swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}[class^=swal2]{-webkit-tap-highlight-color:transparent}.swal2-show{-webkit-animation:swal2-show .3s;animation:swal2-show .3s}.swal2-hide{-webkit-animation:swal2-hide .15s forwards;animation:swal2-hide .15s forwards}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{margin-right:initial;margin-left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}@-webkit-keyframes swal2-toast-show{0%{transform:translateY(-.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0)}}@keyframes swal2-toast-show{0%{transform:translateY(-.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0)}}@-webkit-keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@-webkit-keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@-webkit-keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@-webkit-keyframes swal2-show{0%{transform:scale(.7)}45%{transform:scale(1.05)}80%{transform:scale(.95)}100%{transform:scale(1)}}@keyframes swal2-show{0%{transform:scale(.7)}45%{transform:scale(1.05)}80%{transform:scale(.95)}100%{transform:scale(1)}}@-webkit-keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(.5);opacity:0}}@keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(.5);opacity:0}}@-webkit-keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@-webkit-keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@-webkit-keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@-webkit-keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(.4);opacity:0}50%{margin-top:1.625em;transform:scale(.4);opacity:0}80%{margin-top:-.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(.4);opacity:0}50%{margin-top:1.625em;transform:scale(.4);opacity:0}80%{margin-top:-.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@-webkit-keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0);opacity:1}}@-webkit-keyframes swal2-rotate-loading{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}@keyframes swal2-rotate-loading{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto!important}body.swal2-no-backdrop .swal2-container{background-color:transparent!important;pointer-events:none}body.swal2-no-backdrop .swal2-container .swal2-popup{pointer-events:all}body.swal2-no-backdrop .swal2-container .swal2-modal{box-shadow:0 0 10px rgba(0,0,0,.4)}@media print{body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow-y:scroll!important}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container{position:static!important}}body.swal2-toast-shown .swal2-container{box-sizing:border-box;width:360px;max-width:100%;background-color:transparent;pointer-events:none}body.swal2-toast-shown .swal2-container.swal2-top{top:0;right:auto;bottom:auto;left:50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{top:0;right:0;bottom:auto;left:auto}body.swal2-toast-shown .swal2-container.swal2-top-left,body.swal2-toast-shown .swal2-container.swal2-top-start{top:0;right:auto;bottom:auto;left:0}body.swal2-toast-shown .swal2-container.swal2-center-left,body.swal2-toast-shown .swal2-container.swal2-center-start{top:50%;right:auto;bottom:auto;left:0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{top:50%;right:auto;bottom:auto;left:50%;transform:translate(-50%,-50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{top:50%;right:0;bottom:auto;left:auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-left,body.swal2-toast-shown .swal2-container.swal2-bottom-start{top:auto;right:auto;bottom:0;left:0}body.swal2-toast-shown .swal2-container.swal2-bottom{top:auto;right:auto;bottom:0;left:50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{top:auto;right:0;bottom:0;left:auto}");

/***/ }),

/***/ 9809:
/*!***********************************************!*\
  !*** ./src/app/services/countries.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CountriesService": () => (/* binding */ CountriesService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 1841);



let CountriesService = class CountriesService {
    constructor(http) {
        this.http = http;
        this.API_URL = 'http://api.geonames.org/';
        this.API_URL_COUNTRIES = 'https://restcountries.com/v2/all';
        this.API_USERNAME = 'sapo89';
    }
    getCountries() {
        return this.http.get(`http://api.geonames.org/countryInfoJSON?username=sapo89`);
    }
    getProvinces(countryCode) {
        const url = `http://api.geonames.org/childrenJSON?geonameId=${countryCode}&username=${this.API_USERNAME}`;
        return this.http.get(url);
    }
    getCities(provinceID) {
        return this.http.get(`http://api.geonames.org/childrenJSON?geonameId=${provinceID}&username=${this.API_USERNAME}`);
    }
};
CountriesService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient }
];
CountriesService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root',
    })
], CountriesService);



/***/ }),

/***/ 2382:
/*!******************************************!*\
  !*** ./src/app/services/gets.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GetsService": () => (/* binding */ GetsService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 2340);




let GetsService = class GetsService {
    //private url = './APIS/deportes/gets.php?type=';
    constructor(http) {
        this.http = http;
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.dbApi + `gets.php?type=`;
    }
    GetData(type, order_by = '', param1 = null, param2 = null) {
        let params = '';
        if (order_by) {
            order_by = '&order_by=' + order_by;
        }
        if (param1) {
            params += '&params1=' + param1;
        }
        if (param2) {
            params += '&params2=' + param2;
        }
        let url_aux = this.url + type + order_by + params;
        return this.http.get(url_aux);
    }
    getHistory(params) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.dbApi + 'search_history.php', { params });
    }
};
GetsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
GetsService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root',
    })
], GetsService);



/***/ }),

/***/ 7019:
/*!**************************************!*\
  !*** ./src/app/services/subjects.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SubjectsService": () => (/* binding */ SubjectsService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 9765);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 6215);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 205);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ 8259);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _gets_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gets.service */ 2382);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _tools_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tools.service */ 7526);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 5304);
/* harmony import */ var _countries_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./countries.service */ 9809);









let SubjectsService = class SubjectsService {
    constructor(tools, loadingCtrl, gets, countriesService) {
        this.tools = tools;
        this.loadingCtrl = loadingCtrl;
        this.gets = gets;
        this.countriesService = countriesService;
        this.reloadTurns$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
        this.countries$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__.BehaviorSubject([]);
        this.provinces$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__.BehaviorSubject([]);
        this.cities$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__.BehaviorSubject([]);
        this.users$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__.BehaviorSubject([]);
        this.user$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__.BehaviorSubject(null);
        this.initUsers = false;
        this.argentina = {
            geonameId: 3865483,
            isoAlpha3: 'ARG',
            fipsCode: 'AR',
            isoNumeric: '032',
            countryCode: 'AR',
            countryName: 'Argentina',
            continentName: 'South America',
            currencyCode: 'ARS',
            provinces: [
                {
                    adminCode1: '01',
                    geonameId: 3435907,
                    toponymName: 'Buenos Aires',
                    countryId: '3865483',
                    countryCode: 'AR',
                    name: 'Buenos Aires',
                    countryName: 'Argentina',
                    fcodeName: 'first-order administrative division',
                    cities: [
                        {
                            geonameId: 3854937,
                            toponymName: ' Adolfo González Chaves',
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Adolfo Gonzáles Chaves',
                        },
                        {
                            geonameId: 3436394,
                            toponymName: ' Almirante Brown',
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Almirante Brown Partido',
                        },
                        {
                            geonameId: 3436219,
                            toponymName: ' Ayacucho',
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Ayacucho',
                        },
                        {
                            geonameId: 3436197,
                            toponymName: ' Azul',
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Azul',
                        },
                        {
                            geonameId: 3433284,
                            toponymName: ' Benito Juárez',
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Benito Juárez',
                        },
                        {
                            geonameId: 3863998,
                            toponymName: ' Bolívar',
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Bolívar',
                        },
                        {
                            geonameId: 3855135,
                            toponymName: ' General Alvear',
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'General Alvear',
                        },
                        {
                            geonameId: 3849298,
                            toponymName: ' Laprida',
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Laprida',
                        },
                        {
                            geonameId: 3431782,
                            toponymName: ' Las Flores',
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Las Flores',
                        },
                        {
                            geonameId: 3430696,
                            toponymName: ' Merlo',
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Merlo',
                        },
                        {
                            geonameId: 3866926,
                            toponymName: ' Adolfo Alsina',
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Partido de Adolfo Alsina',
                        },
                        {
                            geonameId: 3866414,
                            toponymName: ' Alberti',
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Partido de Alberti',
                        },
                        {
                            geonameId: 3436101,
                            toponymName: ' Arrecifes',
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Partido de Arrecifes',
                        },
                        {
                            geonameId: 3436227,
                            toponymName: ' Avellaneda',
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Partido de Avellaneda',
                        },
                        {
                            geonameId: 3865084,
                            toponymName: ' Bahía Blanca',
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Partido de Bahía Blanca',
                        },
                        {
                            geonameId: 3436176,
                            toponymName: ' Balcarce',
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Partido de Balcarce',
                        },
                        {
                            geonameId: 3436149,
                            toponymName: ' Baradero',
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Partido de Baradero',
                        },
                        {
                            geonameId: 3436042,
                            toponymName: ' Berazategui',
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Partido de Berazategui',
                        },
                        {
                            geonameId: 3436038,
                            toponymName: ' Berisso',
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Partido de Berisso',
                        },
                        {
                            geonameId: 3863881,
                            toponymName: ' Bragado',
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Partido de Bragado',
                        },
                        {
                            geonameId: 3435962,
                            toponymName: ' Brandsen',
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Partido de Brandsen',
                        },
                        {
                            geonameId: 3435809,
                            toponymName: ' Campana',
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Partido de Campana',
                        },
                        {
                            geonameId: 3435710,
                            toponymName: ' Canuelas',
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Partido de Canuelas',
                        },
                        {
                            geonameId: 3435689,
                            toponymName: ' Capitán Sarmiento',
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Partido de Capitán Sarmiento',
                        },
                        {
                            geonameId: 3862606,
                            toponymName: ' Carlos Casares',
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Partido de Carlos Casares',
                        },
                        {
                            geonameId: 3862599,
                            toponymName: ' Carlos Tejedor',
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Partido de Carlos Tejedor',
                        },
                        {
                            geonameId: 3435643,
                            toponymName: ' Carmen de Areco',
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Partido de Carmen de Areco',
                        },
                        {
                            geonameId: 3435603,
                            toponymName: ' Castelli',
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Partido de Castelli',
                        },
                        {
                            geonameId: 3861944,
                            toponymName: ' Chacabuco',
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Partido de Chacabuco',
                        },
                        {
                            geonameId: 3435446,
                            toponymName: ' Chascomús',
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Partido de Chascomús',
                        },
                        {
                            geonameId: 3435406,
                            toponymName: ' Chivilcoy',
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Partido de Chivilcoy',
                        },
                        {
                            geonameId: 3860822,
                            toponymName: ' Colón',
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Partido de Colón',
                        },
                        {
                            geonameId: 3860198,
                            toponymName: ' Coronel Dorrego',
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Partido de Coronel Dorrego',
                        },
                        {
                            geonameId: 3860172,
                            toponymName: ' Coronel Pringles',
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Partido de Coronel Pringles',
                        },
                        {
                            geonameId: 3860201,
                            toponymName: ' Coronel Rosales',
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Partido de Coronel Rosales',
                        },
                        {
                            geonameId: 3860163,
                            toponymName: ' Coronel Suárez',
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Partido de Coronel Suárez',
                        },
                        {
                            geonameId: 3862356,
                            toponymName: ' Daireaux',
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Partido de Daireaux',
                        },
                        {
                            geonameId: 3435032,
                            toponymName: ' Dolores',
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Partido de Dolores',
                        },
                        {
                            geonameId: 3434140,
                            toponymName: ' Ensenada',
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Partido de Ensenada',
                        },
                        {
                            geonameId: 3434130,
                            toponymName: ' Escobar',
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Partido de Escobar',
                        },
                        {
                            geonameId: 3434003,
                            toponymName: ' Esteban Echeverría',
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Partido de Esteban Echeverría',
                        },
                        {
                            geonameId: 3433977,
                            toponymName: ' Exaltación de la Cruz',
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Partido de Exaltación de la Cruz',
                        },
                        {
                            geonameId: 8063203,
                            toponymName: ' Ezeiza',
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Partido de Ezeiza',
                        },
                        {
                            geonameId: 3433922,
                            toponymName: ' Florencio Varela',
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Partido de Florencio Varela',
                        },
                        {
                            geonameId: 8063213,
                            toponymName: ' Florentino Ameghino',
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Partido de Florentino Ameghino',
                        },
                        {
                            geonameId: 3433821,
                            toponymName: ' General Alvarado',
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Partido de General Alvarado',
                        },
                        {
                            geonameId: 3855132,
                            toponymName: ' General Arenales',
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Partido de General Arenales',
                        },
                        {
                            geonameId: 3433816,
                            toponymName: ' General Belgrano',
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Partido de General Belgrano',
                        },
                        {
                            geonameId: 3433805,
                            toponymName: ' General Guido',
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Partido de General Guido',
                        },
                        {
                            geonameId: 3855102,
                            toponymName: ' General La Madrid',
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Partido de General La Madrid',
                        },
                        {
                            geonameId: 3433798,
                            toponymName: ' General Las Heras',
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Partido de General Las Heras',
                        },
                        {
                            geonameId: 3433794,
                            toponymName: ' General Lavalle',
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Partido de General Lavalle',
                        },
                        {
                            geonameId: 3433800,
                            toponymName: ' General Madariaga',
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Partido de General Madariaga',
                        },
                        {
                            geonameId: 3433785,
                            toponymName: ' General Paz',
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Partido de General Paz',
                        },
                        {
                            geonameId: 3855071,
                            toponymName: ' General Pinto',
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Partido de General Pinto',
                        },
                        {
                            geonameId: 3433782,
                            toponymName: ' General Pueyrredón',
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Partido de General Pueyrredón',
                        },
                        {
                            geonameId: 3433780,
                            toponymName: ' General Rodríguez',
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Partido de General Rodríguez',
                        },
                        {
                            geonameId: 3433778,
                            toponymName: ' General San Martín',
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Partido de General San Martín',
                        },
                        {
                            geonameId: 3855042,
                            toponymName: ' General Viamonte',
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Partido de General Viamonte',
                        },
                        {
                            geonameId: 3855039,
                            toponymName: ' General Villegas',
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Partido de General Villegas',
                        },
                        {
                            geonameId: 3854602,
                            toponymName: ' Guaminí',
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Partido de Guaminí',
                        },
                        {
                            geonameId: 3854283,
                            toponymName: ' Hipólito Yrigoyen',
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Partido de Hipólito Yrigoyen',
                        },
                        {
                            geonameId: 8063217,
                            toponymName: ' Hurlingham',
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Partido de Hurlingham',
                        },
                        {
                            geonameId: 8063220,
                            toponymName: ' Ituzaingó',
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Partido de Ituzaingó',
                        },
                        {
                            geonameId: 3433328,
                            toponymName: ' José C. Paz',
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Partido de José C. Paz',
                        },
                        {
                            geonameId: 3853351,
                            toponymName: ' Junín',
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Partido de Junín',
                        },
                        {
                            geonameId: 8063197,
                            toponymName: ' La Costa',
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Partido de La Costa',
                        },
                        {
                            geonameId: 3430786,
                            toponymName: ' La Matanza',
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Partido de La Matanza',
                        },
                        {
                            geonameId: 3432039,
                            toponymName: ' La Plata',
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Partido de La Plata',
                        },
                        {
                            geonameId: 3432134,
                            toponymName: ' Lanús',
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Partido de Lanús',
                        },
                        {
                            geonameId: 3847097,
                            toponymName: ' Leandro N. Alem',
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Partido de Leandro N. Alem',
                        },
                        {
                            geonameId: 8715333,
                            toponymName: ' Lezama',
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Partido de Lezama',
                        },
                        {
                            geonameId: 3846861,
                            toponymName: ' Lincoln',
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Partido de Lincoln',
                        },
                        {
                            geonameId: 3431318,
                            toponymName: ' Lobería',
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Partido de Lobería',
                        },
                        {
                            geonameId: 3431309,
                            toponymName: ' Lobos',
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Partido de Lobos',
                        },
                        {
                            geonameId: 3431270,
                            toponymName: ' Lomas de Zamora',
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Partido de Lomas de Zamora',
                        },
                        {
                            geonameId: 3430982,
                            toponymName: ' Luján',
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Partido de Luján',
                        },
                        {
                            geonameId: 3430951,
                            toponymName: ' Magdalena',
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Partido de Magdalena',
                        },
                        {
                            geonameId: 3430945,
                            toponymName: ' Maipú',
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Partido de Maipú',
                        },
                        {
                            geonameId: 8715332,
                            toponymName: ' Malvinas Argentinas',
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Partido de Malvinas Argentinas',
                        },
                        {
                            geonameId: 3430869,
                            toponymName: ' Mar Chiquita',
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Partido de Mar Chiquita',
                        },
                        {
                            geonameId: 3430867,
                            toponymName: ' Marcos Paz',
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Partido de Marcos Paz',
                        },
                        {
                            geonameId: 3430705,
                            toponymName: ' Mercedes',
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Partido de Mercedes',
                        },
                        {
                            geonameId: 3430604,
                            toponymName: ' Monte',
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Partido de Monte',
                        },
                        {
                            geonameId: 3864881,
                            toponymName: ' Monte Hermoso',
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Partido de Monte Hermoso',
                        },
                        {
                            geonameId: 3430550,
                            toponymName: ' Moreno',
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Partido de Moreno',
                        },
                        {
                            geonameId: 3430544,
                            toponymName: ' Morón',
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Partido de Morón',
                        },
                        {
                            geonameId: 3430454,
                            toponymName: ' Navarro',
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Partido de Navarro',
                        },
                        {
                            geonameId: 3430442,
                            toponymName: ' Necochea',
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Partido de Necochea',
                        },
                        {
                            geonameId: 3842871,
                            toponymName: ' Nueve de Julio',
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Partido de Nueve de Julio',
                        },
                        {
                            geonameId: 3842669,
                            toponymName: ' Olavarría',
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Partido de Olavarría',
                        },
                        {
                            geonameId: 3841799,
                            toponymName: ' Patagones',
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Partido de Patagones',
                        },
                        {
                            geonameId: 3841678,
                            toponymName: ' Pehuajó',
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Partido de Pehuajó',
                        },
                        {
                            geonameId: 3841610,
                            toponymName: ' Pellegrini',
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Partido de Pellegrini',
                        },
                        {
                            geonameId: 3841488,
                            toponymName: ' Pergamino',
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Partido de Pergamino',
                        },
                        {
                            geonameId: 3429987,
                            toponymName: ' Pila',
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Partido de Pila',
                        },
                        {
                            geonameId: 3429979,
                            toponymName: ' Pilar',
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Partido de Pilar',
                        },
                        {
                            geonameId: 3430860,
                            toponymName: ' Pinamar',
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Partido de Pinamar',
                        },
                        {
                            geonameId: 3430859,
                            toponymName: ' Presidente Perón',
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Partido de Presidente Perón',
                        },
                        {
                            geonameId: 3840251,
                            toponymName: ' Puan',
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Partido de Puan',
                        },
                        {
                            geonameId: 3433417,
                            toponymName: ' Punta Indio',
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Partido de Punta Indio',
                        },
                        {
                            geonameId: 3429651,
                            toponymName: ' Quilmes',
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Partido de Quilmes',
                        },
                        {
                            geonameId: 3839441,
                            toponymName: ' Ramallo',
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Partido de Ramallo',
                        },
                        {
                            geonameId: 3838646,
                            toponymName: ' Rojas',
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Partido de Rojas',
                        },
                        {
                            geonameId: 3429449,
                            toponymName: ' Roque Pérez',
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Partido de Roque Pérez',
                        },
                        {
                            geonameId: 3838468,
                            toponymName: ' Saavedra',
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Partido de Saavedra',
                        },
                        {
                            geonameId: 3429389,
                            toponymName: ' Saladillo',
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Partido de Saladillo',
                        },
                        {
                            geonameId: 3838240,
                            toponymName: ' Salliqueló',
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Partido de Salliqueló',
                        },
                        {
                            geonameId: 3838222,
                            toponymName: ' Salto',
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Partido de Salto',
                        },
                        {
                            geonameId: 3429308,
                            toponymName: ' San Andrés de Giles',
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Partido de San Andrés de Giles',
                        },
                        {
                            geonameId: 3429168,
                            toponymName: ' San Cayetano',
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Partido de San Cayetano',
                        },
                        {
                            geonameId: 7289234,
                            toponymName: ' San Miguel',
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Partido de San Miguel',
                        },
                        {
                            geonameId: 3836848,
                            toponymName: ' San Nicolás',
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Partido de San Nicolás',
                        },
                        {
                            geonameId: 3428533,
                            toponymName: ' San Pedro',
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Partido de San Pedro',
                        },
                        {
                            geonameId: 3428056,
                            toponymName: ' San Vicente',
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Partido de San Vicente',
                        },
                        {
                            geonameId: 3427896,
                            toponymName: ' Suipacha',
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Partido de Suipacha',
                        },
                        {
                            geonameId: 3834646,
                            toponymName: ' Tapalqué',
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Partido de Tapalqué',
                        },
                        {
                            geonameId: 3427753,
                            toponymName: ' Tigre',
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Partido de Tigre',
                        },
                        {
                            geonameId: 3427709,
                            toponymName: ' Tordillo',
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Partido de Tordillo',
                        },
                        {
                            geonameId: 3834182,
                            toponymName: ' Tornquist',
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Partido de Tornquist',
                        },
                        {
                            geonameId: 3833857,
                            toponymName: ' Tres Arroyos',
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Partido de Tres Arroyos',
                        },
                        {
                            geonameId: 8063222,
                            toponymName: ' Tres Lomas',
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Partido de Tres Lomas',
                        },
                        {
                            geonameId: 3833100,
                            toponymName: ' Veinticinco de Mayo',
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Partido de Veinticinco de Mayo',
                        },
                        {
                            geonameId: 8063223,
                            toponymName: ' Villa Gesell',
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Partido de Villa Gesell',
                        },
                        {
                            geonameId: 3832640,
                            toponymName: ' Villarino',
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Partido de Villarino',
                        },
                        {
                            geonameId: 3427212,
                            toponymName: ' Zárate',
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Partido de Zárate',
                        },
                        {
                            geonameId: 3429601,
                            toponymName: ' Rauch',
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Rauch',
                        },
                        {
                            geonameId: 3838745,
                            toponymName: ' Rivadavia',
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Rivadavia Partido',
                        },
                        {
                            geonameId: 3429247,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'San Antonio de Areco',
                        },
                        {
                            geonameId: 3429088,
                            toponymName: ' San Fernando',
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'San Fernando Partido',
                        },
                        {
                            geonameId: 3428983,
                            toponymName: ' San Isidro',
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'San Isidro Partido',
                        },
                        {
                            geonameId: 3427832,
                            toponymName: ' Tandil',
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Tandil',
                        },
                        {
                            geonameId: 3833874,
                            toponymName: ' Trenque Lauquen',
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Trenque Lauquen Partido',
                        },
                        {
                            geonameId: 3427655,
                            toponymName: ' Tres de Febrero',
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Tres de Febrero',
                        },
                        {
                            geonameId: 3427504,
                            toponymName: ' Vicente López',
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Vicente López Partido',
                        },
                    ],
                },
                {
                    adminCode1: '07',
                    geonameId: 3433955,
                    toponymName: 'C.A.B.A.',
                    countryId: '3865483',
                    countryCode: 'AR',
                    name: 'Buenos Aires F.D.',
                    countryName: 'Argentina',
                    fcodeName: 'first-order administrative division',
                    cities: [
                        {
                            geonameId: 1,
                            toponymName: ' Agronomía',
                            countryId: 3433955,
                            countryCode: 'CABA',
                            name: ' Agronomía',
                        },
                        {
                            geonameId: 2,
                            toponymName: ' Almagro',
                            countryId: 3433955,
                            countryCode: 'CABA',
                            name: ' Almagro',
                        },
                        {
                            geonameId: 3,
                            toponymName: ' Balvanera',
                            countryId: 3433955,
                            countryCode: 'CABA',
                            name: ' Balvanera',
                        },
                        {
                            geonameId: 4,
                            toponymName: ' Barracas',
                            countryId: 3433955,
                            countryCode: 'CABA',
                            name: ' Barracas',
                        },
                        {
                            geonameId: 5,
                            toponymName: ' Belgrano',
                            countryId: 3433955,
                            countryCode: 'CABA',
                            name: ' Belgrano',
                        },
                        {
                            geonameId: 6,
                            toponymName: ' Boedo',
                            countryId: 3433955,
                            countryCode: 'CABA',
                            name: ' Boedo',
                        },
                        {
                            geonameId: 7,
                            toponymName: ' Caballito',
                            countryId: 3433955,
                            countryCode: 'CABA',
                            name: ' Caballito',
                        },
                        {
                            geonameId: 8,
                            toponymName: ' Chacarita',
                            countryId: 3433955,
                            countryCode: 'CABA',
                            name: ' Chacarita',
                        },
                        {
                            geonameId: 9,
                            toponymName: ' Coghlan',
                            countryId: 3433955,
                            countryCode: 'CABA',
                            name: ' Coghlan',
                        },
                        {
                            geonameId: 10,
                            toponymName: ' Colegiales',
                            countryId: 3433955,
                            countryCode: 'CABA',
                            name: ' Colegiales',
                        },
                        {
                            geonameId: 11,
                            toponymName: ' Constitución',
                            countryId: 3433955,
                            countryCode: 'CABA',
                            name: ' Constitución',
                        },
                        {
                            geonameId: 12,
                            toponymName: ' Flores',
                            countryId: 3433955,
                            countryCode: 'CABA',
                            name: ' Flores',
                        },
                        {
                            geonameId: 13,
                            toponymName: ' Floresta',
                            countryId: 3433955,
                            countryCode: 'CABA',
                            name: ' Floresta',
                        },
                        {
                            geonameId: 14,
                            toponymName: ' La Boca',
                            countryId: 3433955,
                            countryCode: 'CABA',
                            name: ' La Boca',
                        },
                        {
                            geonameId: 15,
                            toponymName: ' La Paternal',
                            countryId: 3433955,
                            countryCode: 'CABA',
                            name: ' La Paternal',
                        },
                        {
                            geonameId: 16,
                            toponymName: ' Liniers',
                            countryId: 3433955,
                            countryCode: 'CABA',
                            name: ' Liniers',
                        },
                        {
                            geonameId: 17,
                            toponymName: ' Mataderos',
                            countryId: 3433955,
                            countryCode: 'CABA',
                            name: ' Mataderos',
                        },
                        {
                            geonameId: 18,
                            toponymName: ' Monte Castro',
                            countryId: 3433955,
                            countryCode: 'CABA',
                            name: ' Monte Castro',
                        },
                        {
                            geonameId: 19,
                            toponymName: ' Monserrat',
                            countryId: 3433955,
                            countryCode: 'CABA',
                            name: ' Monserrat',
                        },
                        {
                            geonameId: 20,
                            toponymName: ' Nueva Pompeya',
                            countryId: 3433955,
                            countryCode: 'CABA',
                            name: ' Nueva Pompeya',
                        },
                        {
                            geonameId: 21,
                            toponymName: ' Núñez',
                            countryId: 3433955,
                            countryCode: 'CABA',
                            name: ' Núñez',
                        },
                        {
                            geonameId: 22,
                            toponymName: ' Palermo',
                            countryId: 3433955,
                            countryCode: 'CABA',
                            name: ' Palermo',
                        },
                        {
                            geonameId: 23,
                            toponymName: ' Parque Avellaneda',
                            countryId: 3433955,
                            countryCode: 'CABA',
                            name: ' Parque Avellaneda',
                        },
                        {
                            geonameId: 24,
                            toponymName: ' Parque Chacabuco',
                            countryId: 3433955,
                            countryCode: 'CABA',
                            name: ' Parque Chacabuco',
                        },
                        {
                            geonameId: 25,
                            toponymName: ' Parque Chas',
                            countryId: 3433955,
                            countryCode: 'CABA',
                            name: ' Parque Chas',
                        },
                        {
                            geonameId: 26,
                            toponymName: ' Parque Patricios',
                            countryId: 3433955,
                            countryCode: 'CABA',
                            name: ' Parque Patricios',
                        },
                        {
                            geonameId: 27,
                            toponymName: ' Puerto Madero',
                            countryId: 3433955,
                            countryCode: 'CABA',
                            name: ' Puerto Madero',
                        },
                        {
                            geonameId: 28,
                            toponymName: ' Recoleta',
                            countryId: 3433955,
                            countryCode: 'CABA',
                            name: ' Recoleta',
                        },
                        {
                            geonameId: 29,
                            toponymName: ' Retiro',
                            countryId: 3433955,
                            countryCode: 'CABA',
                            name: ' Retiro',
                        },
                        {
                            geonameId: 30,
                            toponymName: ' Saavedra',
                            countryId: 3433955,
                            countryCode: 'CABA',
                            name: ' Saavedra',
                        },
                        {
                            geonameId: 31,
                            toponymName: ' San Cristóbal',
                            countryId: 3433955,
                            countryCode: 'CABA',
                            name: ' San Cristóbal',
                        },
                        {
                            geonameId: 32,
                            toponymName: ' San Nicolás',
                            countryId: 3433955,
                            countryCode: 'CABA',
                            name: ' San Nicolás',
                        },
                        {
                            geonameId: 33,
                            toponymName: ' San Telmo',
                            countryId: 3433955,
                            countryCode: 'CABA',
                            name: ' San Telmo',
                        },
                        {
                            geonameId: 34,
                            toponymName: ' Vélez Sarsfield',
                            countryId: 3433955,
                            countryCode: 'CABA',
                            name: ' Vélez Sarsfield',
                        },
                        {
                            geonameId: 35,
                            toponymName: ' Versalles',
                            countryId: 3433955,
                            countryCode: 'CABA',
                            name: ' Versalles',
                        },
                        {
                            geonameId: 36,
                            toponymName: ' Villa Crespo',
                            countryId: 3433955,
                            countryCode: 'CABA',
                            name: ' Villa Crespo',
                        },
                        {
                            geonameId: 37,
                            toponymName: ' Villa del Parque',
                            countryId: 3433955,
                            countryCode: 'CABA',
                            name: ' Villa del Parque',
                        },
                        {
                            geonameId: 38,
                            toponymName: ' Villa Devoto',
                            countryId: 3433955,
                            countryCode: 'CABA',
                            name: ' Villa Devoto',
                        },
                        {
                            geonameId: 39,
                            toponymName: ' Villa General Mitre',
                            countryId: 3433955,
                            countryCode: 'CABA',
                            name: ' Villa General Mitre',
                        },
                        {
                            geonameId: 40,
                            toponymName: ' Villa Lugano',
                            countryId: 3433955,
                            countryCode: 'CABA',
                            name: ' Villa Lugano',
                        },
                        {
                            geonameId: 41,
                            toponymName: ' Villa Luro',
                            countryId: 3433955,
                            countryCode: 'CABA',
                            name: ' Villa Luro',
                        },
                        {
                            geonameId: 42,
                            toponymName: ' Villa Ortúzar',
                            countryId: 3433955,
                            countryCode: 'CABA',
                            name: ' Villa Ortúzar',
                        },
                        {
                            geonameId: 43,
                            toponymName: ' Villa Pueyrredón',
                            countryId: 3433955,
                            countryCode: 'CABA',
                            name: ' Villa Pueyrredón',
                        },
                        {
                            geonameId: 44,
                            toponymName: ' Villa Real',
                            countryId: 3433955,
                            countryCode: 'CABA',
                            name: ' Villa Real',
                        },
                        {
                            geonameId: 45,
                            toponymName: ' Villa Riachuelo',
                            countryId: 3433955,
                            countryCode: 'CABA',
                            name: ' Villa Riachuelo',
                        },
                        {
                            geonameId: 46,
                            toponymName: ' Villa Santa Rita',
                            countryId: 3433955,
                            countryCode: 'CABA',
                            name: ' Villa Santa Rita',
                        },
                        {
                            geonameId: 47,
                            toponymName: ' Villa Soldati',
                            countryId: 3433955,
                            countryCode: 'CABA',
                            name: ' Villa Soldati',
                        },
                        {
                            geonameId: 48,
                            toponymName: ' Villa Urquiza',
                            countryId: 3433955,
                            countryCode: 'CABA',
                            name: ' Villa Urquiza',
                        },
                    ],
                },
                {
                    adminCode1: '02',
                    geonameId: 3862286,
                    toponymName: 'Catamarca',
                    countryId: '3865483',
                    countryCode: 'AR',
                    name: 'Catamarca',
                    countryName: 'Argentina',
                    fcodeName: 'first-order administrative division',
                    cities: [
                        {
                            geonameId: 3865661,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Antofagasta de la Sierra Department',
                        },
                        {
                            geonameId: 3865906,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Ambato',
                        },
                        {
                            geonameId: 3865829,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Ancasti',
                        },
                        {
                            geonameId: 3865801,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Andalgalá',
                        },
                        {
                            geonameId: 3864427,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Belén',
                        },
                        {
                            geonameId: 3862771,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Capayán',
                        },
                        {
                            geonameId: 3862746,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Capital',
                        },
                        {
                            geonameId: 3858933,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de El Alto',
                        },
                        {
                            geonameId: 3855367,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Fray Mamerto Esquiú',
                        },
                        {
                            geonameId: 3842418,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Paclín',
                        },
                        {
                            geonameId: 3840808,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Pomán',
                        },
                        {
                            geonameId: 3836129,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Santa María',
                        },
                        {
                            geonameId: 3835985,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Santa Rosa',
                        },
                        {
                            geonameId: 3833198,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Valle Viejo',
                        },
                        {
                            geonameId: 3849514,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'La Paz Department',
                        },
                        {
                            geonameId: 3834360,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Tinogasta Department',
                        },
                    ],
                },
                {
                    adminCode1: '03',
                    geonameId: 3861887,
                    toponymName: 'Chaco',
                    countryId: '3865483',
                    countryCode: 'AR',
                    name: 'Chaco',
                    countryName: 'Argentina',
                    fcodeName: 'first-order administrative division',
                    cities: [
                        {
                            geonameId: 3866226,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Almirante Brown Department',
                        },
                        {
                            geonameId: 3861945,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Chacabuco',
                        },
                        {
                            geonameId: 3436037,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Bermejo',
                        },
                        {
                            geonameId: 3860469,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Comandante Fernández',
                        },
                        {
                            geonameId: 3859289,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Doce de Octubre',
                        },
                        {
                            geonameId: 8715307,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Dos de Abril',
                        },
                        {
                            geonameId: 3855125,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de General Belgrano',
                        },
                        {
                            geonameId: 3433811,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de General Donovan',
                        },
                        {
                            geonameId: 3853853,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Independencia',
                        },
                        {
                            geonameId: 3431359,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Libertad',
                        },
                        {
                            geonameId: 3431356,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Libertador General San Martín',
                        },
                        {
                            geonameId: 3845238,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Maipú',
                        },
                        {
                            geonameId: 3844638,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Mayor Luis J. Fontana',
                        },
                        {
                            geonameId: 3842872,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Nueve de Julio',
                        },
                        {
                            geonameId: 3842751,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de O’Higgins',
                        },
                        {
                            geonameId: 3429865,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Presidencia de la Plaza',
                        },
                        {
                            geonameId: 3839489,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Quitilipi',
                        },
                        {
                            geonameId: 3429089,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de San Fernando',
                        },
                        {
                            geonameId: 3837081,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de San Lorenzo',
                        },
                        {
                            geonameId: 3428032,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Sargento Cabral',
                        },
                        {
                            geonameId: 3427822,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Tapenagá',
                        },
                        {
                            geonameId: 3429850,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento del Primero de Mayo',
                        },
                        {
                            geonameId: 3855371,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Fray Justo Santa María de Oro',
                        },
                        {
                            geonameId: 3855108,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'General Güemes Department',
                        },
                        {
                            geonameId: 3427532,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Veinticinco de Mayo',
                        },
                    ],
                },
                {
                    adminCode1: '04',
                    geonameId: 3861244,
                    toponymName: 'Chubut',
                    countryId: '3865483',
                    countryCode: 'AR',
                    name: 'Chubut',
                    countryName: 'Argentina',
                    fcodeName: 'first-order administrative division',
                    cities: [
                        {
                            geonameId: 3864255,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Biedma',
                        },
                        {
                            geonameId: 3859556,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Cushamen',
                        },
                        {
                            geonameId: 3856121,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Escalante',
                        },
                        {
                            geonameId: 3855504,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Florentino Ameghino',
                        },
                        {
                            geonameId: 3855298,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Futaleufú',
                        },
                        {
                            geonameId: 3855282,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Gaimán',
                        },
                        {
                            geonameId: 3855185,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Gastre',
                        },
                        {
                            geonameId: 3849745,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Languiñeo',
                        },
                        {
                            geonameId: 3844763,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Mártires',
                        },
                        {
                            geonameId: 3841892,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Paso de Indios',
                        },
                        {
                            geonameId: 3839303,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Rawson',
                        },
                        {
                            geonameId: 3835705,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Sarmiento',
                        },
                        {
                            geonameId: 3834560,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Tehuelches',
                        },
                        {
                            geonameId: 3834535,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Telsen',
                        },
                        {
                            geonameId: 3838795,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Río Senguer',
                        },
                    ],
                },
                {
                    adminCode1: '05',
                    geonameId: 3860255,
                    toponymName: 'Córdoba',
                    countryId: '3865483',
                    countryCode: 'AR',
                    name: 'Cordoba',
                    countryName: 'Argentina',
                    fcodeName: 'first-order administrative division',
                    cities: [
                        {
                            geonameId: 3863430,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Calamuchita',
                        },
                        {
                            geonameId: 3862744,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Capital',
                        },
                        {
                            geonameId: 3860825,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Colón',
                        },
                        {
                            geonameId: 3859827,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Cruz del Eje',
                        },
                        {
                            geonameId: 3855062,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de General Roca',
                        },
                        {
                            geonameId: 3855053,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de General San Martín',
                        },
                        {
                            geonameId: 3853686,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Ischilín',
                        },
                        {
                            geonameId: 3853410,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Juárez Celman',
                        },
                        {
                            geonameId: 3844898,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Marcos Juárez',
                        },
                        {
                            geonameId: 3844209,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Minas',
                        },
                        {
                            geonameId: 3840865,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Pocho',
                        },
                        {
                            geonameId: 3840292,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Presidente Roque Sáenz Peña',
                        },
                        {
                            geonameId: 3839996,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Punilla',
                        },
                        {
                            geonameId: 3838873,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Río Cuarto',
                        },
                        {
                            geonameId: 3838822,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Río Primero',
                        },
                        {
                            geonameId: 3838801,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Río Seco',
                        },
                        {
                            geonameId: 3838796,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Río Segundo',
                        },
                        {
                            geonameId: 3838154,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de San Alberto',
                        },
                        {
                            geonameId: 3837475,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de San Javier',
                        },
                        {
                            geonameId: 3836128,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Santa María',
                        },
                        {
                            geonameId: 3835180,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Sobremonte',
                        },
                        {
                            geonameId: 3834506,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Tercero Arriba',
                        },
                        {
                            geonameId: 3834008,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Totoral',
                        },
                        {
                            geonameId: 3833419,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Unión',
                        },
                        {
                            geonameId: 3837121,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'San Justo Department',
                        },
                        {
                            geonameId: 3833554,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Tulumba Department',
                        },
                    ],
                },
                {
                    adminCode1: '06',
                    geonameId: 3435214,
                    toponymName: 'Corrientes',
                    countryId: '3865483',
                    countryCode: 'AR',
                    name: 'Corrientes',
                    countryName: 'Argentina',
                    fcodeName: 'first-order administrative division',
                    cities: [
                        {
                            geonameId: 3436058,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Bella Vista',
                        },
                        {
                            geonameId: 3436028,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Berón de Astrada',
                        },
                        {
                            geonameId: 3435698,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Capital',
                        },
                        {
                            geonameId: 3435269,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Concepción',
                        },
                        {
                            geonameId: 3435101,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Curuzú Cuatiá',
                        },
                        {
                            geonameId: 3434152,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Empedrado',
                        },
                        {
                            geonameId: 3434094,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Esquina',
                        },
                        {
                            geonameId: 3433819,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de General Alvear',
                        },
                        {
                            geonameId: 3433786,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de General Paz',
                        },
                        {
                            geonameId: 3433714,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Goya',
                        },
                        {
                            geonameId: 3433362,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Itatí',
                        },
                        {
                            geonameId: 3433357,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Ituzaingó',
                        },
                        {
                            geonameId: 3431468,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Lavalle',
                        },
                        {
                            geonameId: 3430759,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Mburucuyá',
                        },
                        {
                            geonameId: 3430706,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Mercedes',
                        },
                        {
                            geonameId: 3430597,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Monte Caseros',
                        },
                        {
                            geonameId: 3430103,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Paso de los Libres',
                        },
                        {
                            geonameId: 3429402,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Saladas',
                        },
                        {
                            geonameId: 3429156,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de San Cosme',
                        },
                        {
                            geonameId: 3428707,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de San Luis del Palmar',
                        },
                        {
                            geonameId: 3428679,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de San Martín',
                        },
                        {
                            geonameId: 3428638,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de San Miguel',
                        },
                        {
                            geonameId: 3428491,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de San Roque',
                        },
                        {
                            geonameId: 3428070,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Santo Tomé',
                        },
                        {
                            geonameId: 3428003,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Sauce',
                        },
                    ],
                },
                {
                    adminCode1: '08',
                    geonameId: 3434137,
                    toponymName: 'Entre Ríos',
                    countryId: '3865483',
                    countryCode: 'AR',
                    name: 'Entre Rios',
                    countryName: 'Argentina',
                    fcodeName: 'first-order administrative division',
                    cities: [
                        {
                            geonameId: 3435351,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Colón',
                        },
                        {
                            geonameId: 3435260,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Concordia',
                        },
                        {
                            geonameId: 3859380,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Diamante',
                        },
                        {
                            geonameId: 3433958,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Federación',
                        },
                        {
                            geonameId: 8715308,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Federal',
                        },
                        {
                            geonameId: 3433947,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Feliciano',
                        },
                        {
                            geonameId: 3433661,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Gualeguay',
                        },
                        {
                            geonameId: 3433657,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Gualeguaychú',
                        },
                        {
                            geonameId: 8715309,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Islas del Ibicuy',
                        },
                        {
                            geonameId: 3432077,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de La Paz',
                        },
                        {
                            geonameId: 3430412,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Nogoyá',
                        },
                        {
                            geonameId: 3430146,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Paraná',
                        },
                        {
                            geonameId: 8715311,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de San Salvador',
                        },
                        {
                            geonameId: 3427856,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Tala',
                        },
                        {
                            geonameId: 3427576,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Uruguay',
                        },
                        {
                            geonameId: 3832932,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Victoria',
                        },
                        {
                            geonameId: 3427426,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Villaguay',
                        },
                    ],
                },
                {
                    adminCode1: '09',
                    geonameId: 3433896,
                    toponymName: 'Formosa',
                    countryId: '3865483',
                    countryCode: 'AR',
                    name: 'Formosa',
                    countryName: 'Argentina',
                    fcodeName: 'first-order administrative division',
                    cities: [
                        {
                            geonameId: 3864297,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Bermejo',
                        },
                        {
                            geonameId: 3433898,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Formosa',
                        },
                        {
                            geonameId: 3432407,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Laishí',
                        },
                        {
                            geonameId: 3844738,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Matacos',
                        },
                        {
                            geonameId: 3430084,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Patiño',
                        },
                        {
                            geonameId: 3429982,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Pilagás',
                        },
                        {
                            geonameId: 3429978,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Pilcomayo',
                        },
                        {
                            geonameId: 3429948,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Pirané',
                        },
                        {
                            geonameId: 3839414,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Ramón Lista',
                        },
                    ],
                },
                {
                    adminCode1: '10',
                    geonameId: 3853404,
                    toponymName: 'Jujuy',
                    countryId: '3865483',
                    countryCode: 'AR',
                    name: 'Jujuy',
                    countryName: 'Argentina',
                    fcodeName: 'first-order administrative division',
                    cities: [
                        {
                            geonameId: 3860953,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Cochinoca',
                        },
                        {
                            geonameId: 3862750,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Doctor Manuel Belgrano',
                        },
                        {
                            geonameId: 3858584,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de El Carmen',
                        },
                        {
                            geonameId: 3853966,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Humahuaca',
                        },
                        {
                            geonameId: 3847087,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Ledesma',
                        },
                        {
                            geonameId: 8715321,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Palpalá',
                        },
                        {
                            geonameId: 3838029,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de San Antonio',
                        },
                        {
                            geonameId: 3836752,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de San Pedro',
                        },
                        {
                            geonameId: 3836473,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Santa Bárbara',
                        },
                        {
                            geonameId: 3836444,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Santa Catalina',
                        },
                        {
                            geonameId: 3834892,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Susques',
                        },
                        {
                            geonameId: 3834402,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Tilcara',
                        },
                        {
                            geonameId: 3833548,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Tumbaya',
                        },
                        {
                            geonameId: 3833218,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Valle Grande',
                        },
                        {
                            geonameId: 3832287,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Yaví',
                        },
                        {
                            geonameId: 3839021,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Rinconada Department',
                        },
                    ],
                },
                {
                    adminCode1: '11',
                    geonameId: 3849574,
                    toponymName: 'La Pampa',
                    countryId: '3865483',
                    countryCode: 'AR',
                    name: 'La Pampa',
                    countryName: 'Argentina',
                    fcodeName: 'first-order administrative division',
                    cities: [
                        {
                            geonameId: 3865245,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Atreucó',
                        },
                        {
                            geonameId: 3863378,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Caleu-Caleu',
                        },
                        {
                            geonameId: 3862741,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Capital',
                        },
                        {
                            geonameId: 3862250,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Catriló',
                        },
                        {
                            geonameId: 3861829,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Chalileo',
                        },
                        {
                            geonameId: 3861714,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Chapaleufú',
                        },
                        {
                            geonameId: 3861539,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Chical-Có',
                        },
                        {
                            geonameId: 3860354,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Conhelo',
                        },
                        {
                            geonameId: 3859613,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Curacó',
                        },
                        {
                            geonameId: 3854492,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Guatraché',
                        },
                        {
                            geonameId: 3854058,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Hucal',
                        },
                        {
                            geonameId: 3846896,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Lihuel-Calel',
                        },
                        {
                            geonameId: 3846879,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Limay Mahuida',
                        },
                        {
                            geonameId: 3846928,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Loventué',
                        },
                        {
                            geonameId: 3844924,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Maracó',
                        },
                        {
                            geonameId: 3840188,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Puelén',
                        },
                        {
                            geonameId: 3839667,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Quemú Quemú',
                        },
                        {
                            geonameId: 3839380,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Rancul',
                        },
                        {
                            geonameId: 3839281,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Realicó',
                        },
                        {
                            geonameId: 3834309,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Toay',
                        },
                        {
                            geonameId: 3833878,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Trenel',
                        },
                        {
                            geonameId: 3833347,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Utracán',
                        },
                    ],
                },
                {
                    adminCode1: '12',
                    geonameId: 3848949,
                    toponymName: 'La Rioja',
                    countryId: '3865483',
                    countryCode: 'AR',
                    name: 'La Rioja',
                    countryName: 'Argentina',
                    fcodeName: 'first-order administrative division',
                    cities: [
                        {
                            geonameId: 3865578,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Arauco',
                        },
                        {
                            geonameId: 3862745,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Capital',
                        },
                        {
                            geonameId: 3862292,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Castro Barros',
                        },
                        {
                            geonameId: 3854983,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Chamical',
                        },
                        {
                            geonameId: 3861443,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Chilecito',
                        },
                        {
                            geonameId: 3855099,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Coronel Felipe Varela',
                        },
                        {
                            geonameId: 3855660,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Famatina',
                        },
                        {
                            geonameId: 3833075,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de General Angel Peñaloza',
                        },
                        {
                            geonameId: 3855127,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de General Belgrano',
                        },
                        {
                            geonameId: 3838749,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de General Juan F. Quiroga',
                        },
                        {
                            geonameId: 3855103,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de General Lamadrid',
                        },
                        {
                            geonameId: 3855082,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de General Ocampo',
                        },
                        {
                            geonameId: 3855054,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de General San Martín',
                        },
                        {
                            geonameId: 3855063,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Rosario Vera Peñaloza',
                        },
                        {
                            geonameId: 3837918,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de San Blas de los Sauces',
                        },
                        {
                            geonameId: 3838186,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Sanagasta',
                        },
                        {
                            geonameId: 3855050,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Vinchina',
                        },
                        {
                            geonameId: 3853854,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Independencia Department',
                        },
                    ],
                },
                {
                    adminCode1: '13',
                    geonameId: 3844419,
                    toponymName: 'Mendoza',
                    countryId: '3865483',
                    countryCode: 'AR',
                    name: 'Mendoza',
                    countryName: 'Argentina',
                    fcodeName: 'first-order administrative division',
                    cities: [
                        {
                            geonameId: 3862742,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Capital',
                        },
                        {
                            geonameId: 3855136,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de General Alvear',
                        },
                        {
                            geonameId: 3854963,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Godoy Cruz',
                        },
                        {
                            geonameId: 3854459,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Guaymallén',
                        },
                        {
                            geonameId: 3853352,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Junín',
                        },
                        {
                            geonameId: 3849513,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de La Paz',
                        },
                        {
                            geonameId: 3845397,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Luján',
                        },
                        {
                            geonameId: 3845244,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Maipú',
                        },
                        {
                            geonameId: 3838751,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Rivadavia',
                        },
                        {
                            geonameId: 3836982,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de San Martín',
                        },
                        {
                            geonameId: 3835984,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Santa Rosa',
                        },
                        {
                            geonameId: 3833519,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Tunuyán',
                        },
                        {
                            geonameId: 3833511,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Tupungato',
                        },
                        {
                            geonameId: 3848352,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Las Heras Department',
                        },
                        {
                            geonameId: 3847327,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Lavalle Department',
                        },
                        {
                            geonameId: 3845180,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Malargüe Department',
                        },
                        {
                            geonameId: 3837885,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'San Carlos Department',
                        },
                        {
                            geonameId: 3836668,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'San Rafael Department',
                        },
                    ],
                },
                {
                    adminCode1: '14',
                    geonameId: 3430657,
                    toponymName: 'Misiones',
                    countryId: '3865483',
                    countryCode: 'AR',
                    name: 'Misiones',
                    countryName: 'Argentina',
                    fcodeName: 'first-order administrative division',
                    cities: [
                        {
                            geonameId: 3436309,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Apóstoles',
                        },
                        {
                            geonameId: 3435844,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Cainguás',
                        },
                        {
                            geonameId: 3435732,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Candelaria',
                        },
                        {
                            geonameId: 3435699,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Capital',
                        },
                        {
                            geonameId: 3435270,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Concepción de la Sierra',
                        },
                        {
                            geonameId: 3434672,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Eldorado',
                        },
                        {
                            geonameId: 3433790,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de General Manuel Belgrano',
                        },
                        {
                            geonameId: 3433646,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Guaraní',
                        },
                        {
                            geonameId: 3433487,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Iguazú',
                        },
                        {
                            geonameId: 3431390,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Leandro N. Alem',
                        },
                        {
                            geonameId: 3431357,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Libertador General San Martín',
                        },
                        {
                            geonameId: 3430599,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Montecarlo',
                        },
                        {
                            geonameId: 3430339,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Oberá',
                        },
                        {
                            geonameId: 3429014,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de San Ignacio',
                        },
                        {
                            geonameId: 3428974,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de San Javier',
                        },
                        {
                            geonameId: 3428569,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de San Pedro',
                        },
                        {
                            geonameId: 3427535,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Veinticinco de Mayo',
                        },
                    ],
                },
                {
                    adminCode1: '15',
                    geonameId: 3843122,
                    toponymName: 'Neuquén',
                    countryId: '3865483',
                    countryCode: 'AR',
                    name: 'Neuquen',
                    countryName: 'Argentina',
                    fcodeName: 'first-order administrative division',
                    cities: [
                        {
                            geonameId: 3865999,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Aluminé',
                        },
                        {
                            geonameId: 3865775,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Añelo',
                        },
                        {
                            geonameId: 3862279,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Catán-Lil',
                        },
                        {
                            geonameId: 3861261,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Chos-Malal',
                        },
                        {
                            geonameId: 3860849,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Collón-Curá',
                        },
                        {
                            geonameId: 3860360,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Confluencia',
                        },
                        {
                            geonameId: 3853984,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Huiliches',
                        },
                        {
                            geonameId: 3846632,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Loncopué',
                        },
                        {
                            geonameId: 3846077,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Los Lagos',
                        },
                        {
                            geonameId: 3852288,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Lácar',
                        },
                        {
                            geonameId: 3844208,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Minas',
                        },
                        {
                            geonameId: 3841673,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Pehuenches',
                        },
                        {
                            geonameId: 3841303,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Picunches',
                        },
                        {
                            geonameId: 3841298,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Picún Leufú',
                        },
                        {
                            geonameId: 3832131,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Zapala',
                        },
                        {
                            geonameId: 3842991,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Ñorquín',
                        },
                    ],
                },
                {
                    adminCode1: '16',
                    geonameId: 3838830,
                    toponymName: 'Río Negro',
                    countryId: '3865483',
                    countryCode: 'AR',
                    name: 'Rio Negro',
                    countryName: 'Argentina',
                    fcodeName: 'first-order administrative division',
                    cities: [
                        {
                            geonameId: 3866927,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Adolfo Alsina',
                        },
                        {
                            geonameId: 3865210,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Avellaneda',
                        },
                        {
                            geonameId: 3864759,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Bariloche',
                        },
                        {
                            geonameId: 3860364,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Conesa',
                        },
                        {
                            geonameId: 3858240,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de El Cuy',
                        },
                        {
                            geonameId: 3855061,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de General Roca',
                        },
                        {
                            geonameId: 3842875,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Nueve de Julio',
                        },
                        {
                            geonameId: 3841356,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Pichi Mahuida',
                        },
                        {
                            geonameId: 3841139,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Pilcaniyeu',
                        },
                        {
                            geonameId: 3838028,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de San Antonio',
                        },
                        {
                            geonameId: 3833280,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Valcheta',
                        },
                        {
                            geonameId: 3833106,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Veinticinco de Mayo',
                        },
                        {
                            geonameId: 3842988,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Ñorquincó',
                        },
                    ],
                },
                {
                    adminCode1: '17',
                    geonameId: 3838231,
                    toponymName: 'Salta',
                    countryId: '3865483',
                    countryCode: 'AR',
                    name: 'Salta',
                    countryName: 'Argentina',
                    fcodeName: 'first-order administrative division',
                    cities: [
                        {
                            geonameId: 3863554,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Cachi',
                        },
                        {
                            geonameId: 3863502,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Cafayate',
                        },
                        {
                            geonameId: 3862749,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento Capital',
                        },
                        {
                            geonameId: 3865696,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Anta',
                        },
                        {
                            geonameId: 3862084,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Cerrillos',
                        },
                        {
                            geonameId: 3861493,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Chicoana',
                        },
                        {
                            geonameId: 3855089,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de General Güemes',
                        },
                        {
                            geonameId: 3855106,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de General José de San Martín',
                        },
                        {
                            geonameId: 3854676,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Guachipas',
                        },
                        {
                            geonameId: 3853698,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Iruya',
                        },
                        {
                            geonameId: 3849374,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de La Poma',
                        },
                        {
                            geonameId: 3847193,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de La Viña',
                        },
                        {
                            geonameId: 3844297,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Metán',
                        },
                        {
                            geonameId: 3843991,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Molinos',
                        },
                        {
                            geonameId: 3842606,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Orán',
                        },
                        {
                            geonameId: 3838753,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Rivadavia',
                        },
                        {
                            geonameId: 3838560,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Rosario de Lerma',
                        },
                        {
                            geonameId: 3838563,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Rosario de la Frontera',
                        },
                        {
                            geonameId: 3835877,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Santa Victoria',
                        },
                        {
                            geonameId: 3863400,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'La Caldera',
                        },
                        {
                            geonameId: 10231145,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'La Candelaria',
                        },
                        {
                            geonameId: 3846503,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Los Andes Department',
                        },
                        {
                            geonameId: 3837886,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'San Carlos Department',
                        },
                    ],
                },
                {
                    adminCode1: '18',
                    geonameId: 3837152,
                    toponymName: 'San Juan',
                    countryId: '3865483',
                    countryCode: 'AR',
                    name: 'San Juan',
                    countryName: 'Argentina',
                    fcodeName: 'first-order administrative division',
                    cities: [
                        {
                            geonameId: 3866424,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Albardón',
                        },
                        {
                            geonameId: 3865769,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Angaco',
                        },
                        {
                            geonameId: 3863361,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Calingasta',
                        },
                        {
                            geonameId: 3862743,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Capital',
                        },
                        {
                            geonameId: 3862239,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Caucete',
                        },
                        {
                            geonameId: 3861415,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Chimbas',
                        },
                        {
                            geonameId: 3853596,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Jáchal',
                        },
                        {
                            geonameId: 3842876,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Nueve de Julio',
                        },
                        {
                            geonameId: 3840858,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Pocito',
                        },
                        {
                            geonameId: 3839304,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Rawson',
                        },
                        {
                            geonameId: 3838750,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Rivadavia',
                        },
                        {
                            geonameId: 3836985,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de San Martín',
                        },
                        {
                            geonameId: 3836188,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Santa Lucía',
                        },
                        {
                            geonameId: 3835706,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Sarmiento',
                        },
                        {
                            geonameId: 3833446,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Ullúm',
                        },
                        {
                            geonameId: 3833221,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Valle Fértil',
                        },
                        {
                            geonameId: 3833107,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Veinticinco de Mayo',
                        },
                        {
                            geonameId: 3832079,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Zonda',
                        },
                        {
                            geonameId: 3853914,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Iglesia Department',
                        },
                    ],
                },
                {
                    adminCode1: '19',
                    geonameId: 3837029,
                    toponymName: 'San Luis',
                    countryId: '3865483',
                    countryCode: 'AR',
                    name: 'San Luis',
                    countryName: 'Argentina',
                    fcodeName: 'first-order administrative division',
                    cities: [
                        {
                            geonameId: 3840260,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Coronel Pringles',
                        },
                        {
                            geonameId: 3865174,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Ayacucho',
                        },
                        {
                            geonameId: 3864411,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Belgrano',
                        },
                        {
                            geonameId: 3861949,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Chacabuco',
                        },
                        {
                            geonameId: 3855076,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de General Pedernera',
                        },
                        {
                            geonameId: 3854968,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Gobernador Vicente Dupuy',
                        },
                        {
                            geonameId: 3853353,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Junín',
                        },
                        {
                            geonameId: 3836983,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Libertador General San Martín',
                        },
                        {
                            geonameId: 10231161,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Juan Martín de Pueyrredón',
                        },
                    ],
                },
                {
                    adminCode1: '20',
                    geonameId: 3836350,
                    toponymName: 'Santa Cruz',
                    countryId: '3865483',
                    countryCode: 'AR',
                    name: 'Santa Cruz',
                    countryName: 'Argentina',
                    fcodeName: 'first-order administrative division',
                    cities: [
                        {
                            geonameId: 3860153,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Corpen Aike',
                        },
                        {
                            geonameId: 3851119,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Lago Buenos Aires',
                        },
                        {
                            geonameId: 3845272,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Magallanes',
                        },
                        {
                            geonameId: 3859455,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Deseado Department',
                        },
                        {
                            geonameId: 3854444,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Güer Aike Department',
                        },
                        {
                            geonameId: 3851122,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Lago Argentino Department',
                        },
                        {
                            geonameId: 3838892,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Río Chico Department',
                        },
                    ],
                },
                {
                    adminCode1: '21',
                    geonameId: 3836276,
                    toponymName: 'Santa Fe',
                    countryId: '3865483',
                    countryCode: 'AR',
                    name: 'Santa Fe',
                    countryName: 'Argentina',
                    fcodeName: 'first-order administrative division',
                    cities: [
                        {
                            geonameId: 3864412,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Belgrano Department',
                        },
                        {
                            geonameId: 3852292,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Capital Department',
                        },
                        {
                            geonameId: 3860324,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Constitución Department',
                        },
                        {
                            geonameId: 3862359,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Caseros',
                        },
                        {
                            geonameId: 3862325,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Castellanos',
                        },
                        {
                            geonameId: 3428973,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de San Javier',
                        },
                        {
                            geonameId: 3837122,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de San Justo',
                        },
                        {
                            geonameId: 3837090,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de San Lorenzo',
                        },
                        {
                            geonameId: 3836984,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de San Martín',
                        },
                        {
                            geonameId: 3833025,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Vera',
                        },
                        {
                            geonameId: 3855221,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Garay Department',
                        },
                        {
                            geonameId: 3855095,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'General López Department',
                        },
                        {
                            geonameId: 3433788,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'General Obligado Department',
                        },
                        {
                            geonameId: 3853705,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Iriondo Department',
                        },
                        {
                            geonameId: 3848539,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Las Colonias Department',
                        },
                        {
                            geonameId: 3842877,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Nueve de Julio Department',
                        },
                        {
                            geonameId: 3838574,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Rosario Department',
                        },
                        {
                            geonameId: 3837821,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'San Cristóbal Department',
                        },
                        {
                            geonameId: 3837460,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'San Jerónimo Department',
                        },
                    ],
                },
                {
                    adminCode1: '22',
                    geonameId: 3835868,
                    toponymName: 'Santiago del Estero',
                    countryId: '3865483',
                    countryCode: 'AR',
                    name: 'Santiago del Estero',
                    countryName: 'Argentina',
                    fcodeName: 'first-order administrative division',
                    cities: [
                        {
                            geonameId: 3866489,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Aguirre',
                        },
                        {
                            geonameId: 3866417,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Alberdi',
                        },
                        {
                            geonameId: 3865278,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Atamisqui',
                        },
                        {
                            geonameId: 3865211,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Avellaneda',
                        },
                        {
                            geonameId: 3864853,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Banda',
                        },
                        {
                            geonameId: 3864413,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Belgrano',
                        },
                        {
                            geonameId: 3862747,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Capital',
                        },
                        {
                            geonameId: 3861253,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Choya',
                        },
                        {
                            geonameId: 3860289,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Copo',
                        },
                        {
                            geonameId: 3855567,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Figueroa',
                        },
                        {
                            geonameId: 3855047,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de General Taboada',
                        },
                        {
                            geonameId: 3854499,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Guasayán',
                        },
                        {
                            geonameId: 3853500,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Jiménez',
                        },
                        {
                            geonameId: 3844706,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Juan F. Ibarra',
                        },
                        {
                            geonameId: 3846597,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Loreto',
                        },
                        {
                            geonameId: 3844110,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Mitre',
                        },
                        {
                            geonameId: 3843684,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Moreno',
                        },
                        {
                            geonameId: 3842719,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Ojo de Agua',
                        },
                        {
                            geonameId: 3841612,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Pellegrini',
                        },
                        {
                            geonameId: 3839792,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Quebrachos',
                        },
                        {
                            geonameId: 3838752,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Rivadavia',
                        },
                        {
                            geonameId: 3838725,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Robles',
                        },
                        {
                            geonameId: 3838845,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Río Hondo',
                        },
                        {
                            geonameId: 3838300,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Salavina',
                        },
                        {
                            geonameId: 3836986,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de San Martín',
                        },
                        {
                            geonameId: 3835707,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Sarmiento',
                        },
                        {
                            geonameId: 3835272,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Silípica',
                        },
                    ],
                },
                {
                    adminCode1: '23',
                    geonameId: 3834450,
                    toponymName: 'Tierra del Fuego',
                    countryId: '3865483',
                    countryCode: 'AR',
                    name: 'Tierra del Fuego',
                    countryName: 'Argentina',
                    fcodeName: 'first-order administrative division',
                    cities: [
                        {
                            geonameId: 11524834,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Antártida Argentina',
                        },
                        {
                            geonameId: 3836551,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Río Grande',
                        },
                        {
                            geonameId: 3833365,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Ushuaia',
                        },
                        {
                            geonameId: 11524835,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Islas del Atlántico Sur',
                        },
                        {
                            geonameId: 11994812,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Tolhuin',
                        },
                    ],
                },
                {
                    adminCode1: '24',
                    geonameId: 3833578,
                    toponymName: 'Tucumán',
                    countryId: '3865483',
                    countryCode: 'AR',
                    name: 'Tucuman',
                    countryName: 'Argentina',
                    fcodeName: 'first-order administrative division',
                    cities: [
                        {
                            geonameId: 3863700,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Burruyacú',
                        },
                        {
                            geonameId: 3862748,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Capital',
                        },
                        {
                            geonameId: 3861525,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Chicligasta',
                        },
                        {
                            geonameId: 3859838,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Cruz Alta',
                        },
                        {
                            geonameId: 3855665,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Famaillá',
                        },
                        {
                            geonameId: 3854723,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Graneros',
                        },
                        {
                            geonameId: 8715331,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Juan B. Alberdi',
                        },
                        {
                            geonameId: 8715302,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de La Cocha',
                        },
                        {
                            geonameId: 3847102,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Leales',
                        },
                        {
                            geonameId: 8715306,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Lules',
                        },
                        {
                            geonameId: 3843802,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Monteros',
                        },
                        {
                            geonameId: 3838893,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Río Chico',
                        },
                        {
                            geonameId: 8715303,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Simoca',
                        },
                        {
                            geonameId: 8715304,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Tafí Viejo',
                        },
                        {
                            geonameId: 8715301,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Tafí del Valle',
                        },
                        {
                            geonameId: 3833945,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Trancas',
                        },
                        {
                            geonameId: 8715305,
                            countryId: '3865483',
                            countryCode: 'AR',
                            name: 'Departamento de Yerba Buena',
                        },
                    ],
                },
            ],
        };
        this.provinces$.next(this.argentina.provinces);
    }
    loadSession() {
        try {
            const storege = JSON.parse(atob(localStorage.getItem('token')));
            this.getUserSchedule(storege.id_user);
        }
        catch (error) { }
    }
    LoadList() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingCtrl.create({
                message: 'Loading...',
                duration: 0,
                cssClass: 'custom-loading',
            });
            loading.present();
            this.getUsers();
            const intervalData = setInterval(() => {
                if (this.initUsers) {
                    loading.dismiss();
                    clearInterval(intervalData);
                }
            }, 500);
        });
    }
    getUsers() {
        this.gets
            .GetData('getUsers', 'full_name')
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.catchError)((err) => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                icon: 'error',
                title: 'Ocurrió un error inesperado',
                text: 'Por favor recargue la página',
            });
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.throwError)('error');
        }))
            .subscribe((data) => {
            if (data.length > -1) {
                const array = data.map((x) => {
                    var _a, _b, _c;
                    return Object.assign(Object.assign({}, x), { schedule: JSON.parse(x.schedule), id_user: parseInt(x.id_user, 10), country_id: parseInt((_a = x.country_id) !== null && _a !== void 0 ? _a : '-2', 10), province_id: parseInt((_b = x.province_id) !== null && _b !== void 0 ? _b : '-2', 10), city_id: parseInt((_c = x.city_id) !== null && _c !== void 0 ? _c : '-2', 10), expose_phone: x.expose_phone === '1', expose_email: x.expose_email === '1' });
                });
                console.log(array);
                this.users$.next(array);
                this.initUsers = true;
                return;
            }
            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                icon: 'error',
                title: 'Error al obtener estilistas',
            });
        });
    }
    getUserSchedule(id_user) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingCtrl.create({
                message: 'Loading...',
                duration: 0,
                cssClass: 'custom-loading',
            });
            loading.present();
            this.gets
                .GetData('getUserLog', '', id_user)
                .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.catchError)((err) => {
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                    icon: 'error',
                    title: 'Ocurrió un error inesperado',
                    text: 'Por favor recargue la página',
                });
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.throwError)('error');
            }))
                .subscribe((data) => {
                var _a, _b, _c;
                if (data) {
                    const user = Object.assign(Object.assign({}, data), { schedule: JSON.parse(data.schedule), id_user: parseInt(data.id_user, 10), country_id: parseInt((_a = data.country_id) !== null && _a !== void 0 ? _a : '-2', 10), province_id: parseInt((_b = data.province_id) !== null && _b !== void 0 ? _b : '-2', 10), city_id: parseInt((_c = data.city_id) !== null && _c !== void 0 ? _c : '-2', 10), expose_phone: data.expose_phone === '1', expose_email: data.expose_email === '1' });
                    setTimeout(() => {
                        this.user$.next(user);
                        loading.dismiss();
                    }, 500);
                    return;
                }
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                    icon: 'error',
                    title: 'Error al obtener datos',
                });
                loading.dismiss();
            });
        });
    }
};
SubjectsService.ctorParameters = () => [
    { type: _tools_service__WEBPACK_IMPORTED_MODULE_2__.ToolsService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.LoadingController },
    { type: _gets_service__WEBPACK_IMPORTED_MODULE_1__.GetsService },
    { type: _countries_service__WEBPACK_IMPORTED_MODULE_3__.CountriesService }
];
SubjectsService = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Injectable)({
        providedIn: 'root',
    })
], SubjectsService);



/***/ }),

/***/ 7526:
/*!*******************************************!*\
  !*** ./src/app/services/tools.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToolsService": () => (/* binding */ ToolsService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);


let ToolsService = class ToolsService {
    constructor() { }
    validEmail(value) {
        if (!value) {
            return false;
        }
        else {
            return (value.match(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i) != null);
        }
    }
    capitalizeAllWords(str) {
        return str.toLowerCase().replace(/(^|\s)\S/g, (l) => l.toUpperCase());
    }
    cleanNumberInString(word) {
        const numbers = '0123456789'.split('');
        for (const num of numbers) {
            while (word.indexOf(num) > -1) {
                word = word.replace(num, '');
            }
        }
        return word;
    }
    cleanUser(word) {
        const chars = 'qwertyuiopñlkjhgfdsazxcvbnm0123456789';
        const aux = word.split('');
        for (const char of aux) {
            while (chars.indexOf(char) === -1 && word.indexOf(char) > -1) {
                word = word.replace(char, '');
            }
        }
        return word;
    }
    validatePhoneNumber(num, onlyNumer = false) {
        const numbers = onlyNumer ? '0123456789' : '0123456789+-()/';
        const aux = num.split('');
        for (const char of aux) {
            while (numbers.indexOf(char) === -1 && num.indexOf(char) > -1) {
                num = num.replace(char, '');
            }
        }
        return num;
    }
    cleanCharInNumber(num) {
        const numbers = '0123456789';
        const aux = num.split('');
        for (const char of aux) {
            while (numbers.indexOf(char) === -1 && num.indexOf(char) > -1) {
                num = num.replace(char, '');
            }
        }
        return num;
    }
    cleanCharInPrice(num, remove = false) {
        const numbers = remove ? '0123456789' : '0123456789.';
        const aux = num.split('');
        for (const char of aux) {
            while (numbers.indexOf(char) === -1 && num.indexOf(char) > -1) {
                if (char === ',' && !remove) {
                    num = num.replace(char, '.');
                }
                else {
                    num = num.replace(char, '');
                }
            }
        }
        return num;
    }
    sortArray(key, arr) {
        arr.sort((a, b) => {
            if (a[key] < b[key]) {
                return -1;
            }
            return 0;
        });
    }
    formatDate(date, format = 'eeuu') {
        var _a;
        const aux = date.indexOf('/') > -1 ? date.split('/') : date.split('-');
        const hora = (_a = aux[2].split(' ')[1].substring(0, 5) + 'hs') !== null && _a !== void 0 ? _a : '';
        return format === 'eeuu'
            ? aux[2].split(' ')[0] + '/' + aux[1] + '/' + aux[0] + ' ' + hora
            : aux[0] + '/' + aux[1] + '/' + aux[2];
    }
    validateFormatDate(date, format = 'arg') {
        const aux = date.indexOf('/') ? date.split('/') : date.split('-');
        aux[0] = this.cleanCharInNumber(aux[0] || '');
        aux[1] = this.cleanCharInNumber(aux[1] || '');
        aux[2] = this.cleanCharInNumber(aux[2] || '');
        return aux[0].length === 2 && aux[1].length === 2 && aux[2].length === 4;
    }
    getNameListCountries(list, item, key) {
        const element = list.find((x) => x.geonameId === item);
        return element[key];
    }
};
ToolsService.ctorParameters = () => [];
ToolsService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
        providedIn: 'root',
    })
], ToolsService);



/***/ })

}]);
//# sourceMappingURL=default-src_app_services_subjects_ts.js.map