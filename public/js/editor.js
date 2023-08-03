/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@wordpress/icons/build-module/library/star-filled.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/star-filled.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const starFilled = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M11.776 4.454a.25.25 0 01.448 0l2.069 4.192a.25.25 0 00.188.137l4.626.672a.25.25 0 01.139.426l-3.348 3.263a.25.25 0 00-.072.222l.79 4.607a.25.25 0 01-.362.263l-4.138-2.175a.25.25 0 00-.232 0l-4.138 2.175a.25.25 0 01-.363-.263l.79-4.607a.25.25 0 00-.071-.222L4.754 9.881a.25.25 0 01.139-.426l4.626-.672a.25.25 0 00.188-.137l2.069-4.192z"
}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (starFilled);
//# sourceMappingURL=star-filled.js.map

/***/ }),

/***/ "./resources/js/const.js":
/*!*******************************!*\
  !*** ./resources/js/const.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ICONS: () => (/* binding */ ICONS)
/* harmony export */ });
/*
store constants that other files can import. 
An array of icon definitions named `ICONS`.
comment: probably could call it icons.js instead of const.js

This code exports a basic JavaScript array of objects. 
Each object provides a machine-readable `value` that will be used as part of the block style’s CSS class. 
Ultimately, this will create an `.is-style-icon-{value}` class.

The `icon` value is the symbol or emoji that will be used in the block style label.

*/
const ICONS = [{
  value: 'floral-heart',
  icon: '❦'
}, {
  value: 'blossom',
  icon: '🌼',
  gradient: 'luminous-vivid-amber-to-luminous-vivid-orange'
}, {
  value: 'sun',
  icon: '☀️',
  gradient: 'luminous-vivid-amber-to-luminous-vivid-orange'
}, {
  value: 'feather',
  icon: '🪶',
  gradient: 'cool-to-warm-spectrum'
}, {
  value: 'fire',
  icon: '🔥',
  gradient: 'luminous-vivid-amber-to-luminous-vivid-orange'
}, {
  value: 'leaves',
  icon: '🍃',
  gradient: 'electric-grass'
}, {
  value: 'coffee',
  icon: '☕',
  gradient: 'cool-to-warm-spectrum'
}, {
  value: 'beer',
  icon: '🍻',
  gradient: 'cool-to-warm-spectrum'
}, {
  value: 'lotus',
  icon: '🪷',
  gradient: 'luminous-dusk'
}, {
  value: 'melting-face',
  icon: '🫠',
  gradient: 'luminous-vivid-amber-to-luminous-vivid-orange'
}, {
  value: 'guitar',
  icon: '🎸',
  gradient: 'blush-bordeaux'
}, {
  value: 'pencil',
  icon: '✏️',
  gradient: 'pale-ocean'
}, {
  value: 'rocket',
  icon: '🚀',
  gradient: 'luminous-vivid-orange-to-vivid-red'
}, {
  value: 'clover',
  icon: '☘️',
  gradient: 'electric-grass'
}, {
  value: 'star',
  icon: '⭐',
  gradient: 'luminous-vivid-amber-to-luminous-vivid-orange'
}, {
  value: 'sunflower',
  icon: '🌻',
  gradient: 'luminous-vivid-amber-to-luminous-vivid-orange'
}, {
  value: 'beach-umbrella',
  icon: '⛱️',
  gradient: 'luminous-dusk'
}];

/***/ }),

/***/ "./resources/js/control-icons.js":
/*!***************************************!*\
  !*** ./resources/js/control-icons.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./const */ "./resources/js/const.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./resources/js/utils.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/star-filled.js");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);

// Internal dependencies.



// WordPress dependencies.



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (({
  attributes: {
    className
  },
  setAttributes
}) => {
  // Get the current icon.
  const currentIcon = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.getIconFromClassName)(className);

  // Update the icon class and gradient.
  const onIconButtonClick = icon => {
    console.log('Clicked Icon:', icon);
    console.log('Current ClassName:', className);
    setAttributes({
      className: (0,_utils__WEBPACK_IMPORTED_MODULE_2__.updateIconClass)(className, currentIcon === icon.value ? '' : icon.value, currentIcon),
      gradient: currentIcon === icon.value || !icon?.gradient ? undefined : icon?.gradient
    });
    console.log('current icon:', currentIcon);
    // Log the updated attributes after calling setAttributes.
    console.log('Updated Attributes:', {
      className: (0,_utils__WEBPACK_IMPORTED_MODULE_2__.updateIconClass)(className, currentIcon === icon.value ? '' : icon.value, currentIcon),
      gradient: currentIcon === icon.value || !icon?.gradient ? undefined : icon?.gradient
    });
  };
  // Builds a menu item for an icon.
  const iconButton = (icon, index) => {
    var _icon$icon;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
      key: index,
      isPressed: currentIcon === icon.value,
      className: "tt3pauli-sep-icons-picker__button",
      onClick: () => onIconButtonClick(icon)
    }, (_icon$icon = icon.icon) !== null && _icon$icon !== void 0 ? _icon$icon : icon.value);
  };
  // Builds an icon picker in a 6-column grid.
  const iconPicker = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.BaseControl, {
    className: "tt3pauli-sep-icons-picker",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Icons', 'tt3pauli')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tt3pauli-sep-icons-picker__description"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Pick an icon to super-charge your separator.', 'tt3pauli')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.__experimentalGrid, {
    className: "tt3pauli-sep-icons-picker__grid",
    columns: "6"
  }, _const__WEBPACK_IMPORTED_MODULE_1__.ICONS.map((icon, index) => iconButton(icon, index))));
  // Returns the dropdown menu item.
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Dropdown, {
    className: "tt3pauli-sep-icons-dropdown",
    contentClassName: "tt3pauli-sep-icons-popover",
    popoverProps: {
      headerTitle: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Separator Icons', 'tt3pauli'),
      variant: 'toolbar'
    },
    renderToggle: ({
      isOpen,
      onToggle
    }) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToolbarButton, {
      className: "tt3pauli-sep-icons-dropdown__button",
      icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_5__["default"],
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Separator Icon', 'tt3pauli'),
      onClick: onToggle,
      "aria-expanded": isOpen,
      isPressed: !!currentIcon
    }),
    renderContent: () => iconPicker
  });
});

/***/ }),

/***/ "./resources/js/utils.js":
/*!*******************************!*\
  !*** ./resources/js/utils.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getIconFromClassName: () => (/* binding */ getIconFromClassName),
/* harmony export */   updateIconClass: () => (/* binding */ updateIconClass)
/* harmony export */ });
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./const */ "./resources/js/const.js");
/* harmony import */ var _wordpress_token_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/token-list */ "@wordpress/token-list");
/* harmony import */ var _wordpress_token_list__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_token_list__WEBPACK_IMPORTED_MODULE_1__);
// Internal dependencies.


// WordPress dependencies.


/* 
    This function creates a DOM token list of classes by 
    passing the `className` variable into `TokenList`. 
    Then, it searches for a class containing one of the icon values. 
    If found, it returns the value for the icon. 
    Else, it returns an empty string.
*/

const getIconFromClassName = className => {
  const list = new (_wordpress_token_list__WEBPACK_IMPORTED_MODULE_1___default())(className);
  const style = _const__WEBPACK_IMPORTED_MODULE_0__.ICONS.find(option => list.contains(`is-style-icon-${option.value}`));
  return undefined !== style ? style.value : '';
};

/* 
    This function uses the `TokenList` function to create a list of class names. 
    This makes it easy to target classes related to icons, 
    removing the old icon class and adding the new.
*/

const updateIconClass = (className, newIcon = '', oldIcon = '') => {
  const list = new (_wordpress_token_list__WEBPACK_IMPORTED_MODULE_1___default())(className);
  if (oldIcon) {
    list.remove(`is-style-icon-${oldIcon}`);
  }
  if (newIcon) {
    list.add(`is-style-icon-${newIcon}`);
  }
  return list.value;
};

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/hooks":
/*!*******************************!*\
  !*** external ["wp","hooks"] ***!
  \*******************************/
/***/ ((module) => {

module.exports = window["wp"]["hooks"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "@wordpress/primitives":
/*!************************************!*\
  !*** external ["wp","primitives"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["primitives"];

/***/ }),

/***/ "@wordpress/token-list":
/*!***********************************!*\
  !*** external ["wp","tokenList"] ***!
  \***********************************/
/***/ ((module) => {

module.exports = window["wp"]["tokenList"];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!********************************!*\
  !*** ./resources/js/editor.js ***!
  \********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _control_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./control-icons */ "./resources/js/control-icons.js");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_3__);

/*
// Internal dependencies.
import { ICONS } from "./const";

// WordPress dependencies.
import { registerBlockStyle } from '@wordpress/blocks';
import domReady               from '@wordpress/dom-ready';
import { __, sprintf }        from '@wordpress/i18n';
*/
/*The code below waits until the DOM is ready and 
loops through each of the icons and registers them as a block style:
*/
/*
// Register a block style for each icon.
domReady( () => {
	ICONS.forEach( ( icon ) =>
		registerBlockStyle( 'core/separator', {
			name: `icon-${ icon.value }`,
			label: sprintf( __( 'Icon: %s', 'tt3pauli' ), icon.icon )
		} )
	);
} );
Above is the code from part 2 of the series. 
In part 3 we will modify the approach
*/
// Internal dependencies.


// WordPress dependencies.


const withSeparatorIcons = BlockEdit => props => {
  return 'core/separator' === props.name ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockEdit, {
    ...props
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.BlockControls, {
    group: "other"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_control_icons__WEBPACK_IMPORTED_MODULE_1__["default"], {
    attributes: props.attributes,
    setAttributes: props.setAttributes
  }))) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockEdit, {
    ...props
  });
};
(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_3__.addFilter)('editor.BlockEdit', 'tt3pauli/separator-icons', withSeparatorIcons);
})();

/******/ })()
;
//# sourceMappingURL=editor.js.map