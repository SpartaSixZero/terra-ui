(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{1120:function(e,n,t){e.exports={hyperlink:"Hyperlink-module__hyperlink___1XVZg","is-visited":"Hyperlink-module__is-visited___3I0or","is-hovered":"Hyperlink-module__is-hovered___2ABcm","is-focused":"Hyperlink-module__is-focused___3helG","is-active":"Hyperlink-module__is-active___28bj_","is-disabled":"Hyperlink-module__is-disabled___2t3Ph","is-underline-hidden":"Hyperlink-module__is-underline-hidden___33axY",external:"Hyperlink-module__external___3Yxw-",image:"Hyperlink-module__image___3NUm-",video:"Hyperlink-module__video___2FJsC",audio:"Hyperlink-module__audio___1s9lr",document:"Hyperlink-module__document___1AqYO"}},2628:function(e,n,t){"use strict";t.r(n),n.default="# Terra Hyperlink\n\nThe terra hyperlink component allows linking to other web pages, files, locations within the same page, email addresses, or any other URL.\n\n## Getting Started\n\n- Install with [npmjs](https://www.npmjs.com):\n  - `npm install terra-hyperlink`\n\n\x3c!-- AUTO-GENERATED-CONTENT:START Peer Dependencies --\x3e\n## Peer Dependencies\n\n<details>\n<summary>View information on this component's peer dependencies.</summary>\n\nThis component requires the following peer dependencies be installed in your app for the component to properly function.\n\n| Peer Dependency | Version |\n|-|-|\n| react | ^16.8.5 |\n| react-dom | ^16.8.5 |\n\n\n</details>\n\x3c!-- AUTO-GENERATED-CONTENT:END --\x3e\n\n## Component Features\n\n * [Cross-Browser Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#cross-browser-support)\n * [LTR/RTL Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#ltr--rtl-support)\n"},2629:function(e){e.exports=JSON.parse('{"_from":"terra-hyperlink@^2.0.0","_id":"terra-hyperlink@2.15.0","_inBundle":false,"_integrity":"sha512-sF4eRxZfFi7ZCZfMC692PNFs9cc23lMZ2s8Bkwgf5KOd1xYko+Ut7cceMDyZ0bGI36YMKDjOef2skQHExPlptA==","_location":"/terra-hyperlink","_phantomChildren":{},"_requested":{"type":"range","registry":true,"raw":"terra-hyperlink@^2.0.0","name":"terra-hyperlink","escapedName":"terra-hyperlink","rawSpec":"^2.0.0","saveSpec":null,"fetchSpec":"^2.0.0"},"_requiredBy":["/","/terra-action-footer","/terra-dev-site"],"_resolved":"https://registry.npmjs.org/terra-hyperlink/-/terra-hyperlink-2.15.0.tgz","_shasum":"b70d9eca7ace2d994e083aba3c7e3a086abc8e7b","_spec":"terra-hyperlink@^2.0.0","_where":"/home/travis/build/cerner/terra-ui","author":{"name":"Cerner Corporation"},"bugs":{"url":"https://github.com/cerner/terra-core/issues"},"bundleDependencies":false,"dependencies":{"classnames":"^2.2.5","keycode-js":"^1.0.4","prop-types":"^15.5.8","terra-doc-template":"^2.15.0","terra-mixins":"^1.33.0"},"deprecated":false,"description":"The terra hyperlink component allows linking to other web pages, files, locations within the same page, email addresses, or any other URL.","gitHead":"0b893dc4a80250c0b485a5f205f2defde7c38ecf","homepage":"https://github.com/cerner/terra-core#readme","keywords":["Cerner","Terra","terra-hyperlink","Hyperlink","UI"],"license":"Apache-2.0","main":"lib/Hyperlink.js","name":"terra-hyperlink","peerDependencies":{"react":"^16.8.5","react-dom":"^16.8.5"},"repository":{"type":"git","url":"git+https://github.com/cerner/terra-core.git"},"scripts":{"compile":"babel --root-mode upward src --out-dir lib --copy-files","lint":"npm run lint:js && npm run lint:scss","lint:js":"eslint --ext .js,.jsx . --ignore-path ../../.eslintignore","lint:scss":"stylelint src/**/*.scss","precompile":"rm -rf lib","test":"npm run test:jest && npm run test:wdio","test:jest":"jest --config ../../jestconfig.js","test:wdio":"../../node_modules/.bin/wdio ../../node_modules/terra-dev-site/config/wdio/wdio.conf.js"},"version":"2.15.0"}')},2630:function(e,n,t){"use strict";t.r(n),n.default="import React from 'react';\nimport PropTypes from 'prop-types';\nimport classNames from 'classnames/bind';\nimport KeyCode from 'keycode-js';\nimport styles from './Hyperlink.module.scss';\n\nconst cx = classNames.bind(styles);\n\nconst variants = {\n  DEFAULT: 'default',\n  EXTERNAL: 'external',\n  IMAGE: 'image',\n  VIDEO: 'video',\n  AUDIO: 'audio',\n  DOCUMENT: 'document',\n};\n\nconst propTypes = {\n  /**\n   * The content to display inside link.\n   */\n  children: PropTypes.node,\n  /**\n   * Sets the href of the link.\n   */\n  href: PropTypes.string,\n  /**\n   * Whether or not the link should be disabled.\n   */\n  isDisabled: PropTypes.bool,\n  /**\n   * Whether or not the link should display an underline by default. Will still display an underline on hover and focus.\n   */\n  isUnderlineHidden: PropTypes.bool,\n  /**\n   * Callback function triggered when clicked.\n   */\n  onClick: PropTypes.func,\n  /**\n   * Callback function triggered when hyperlink loses focus.\n   */\n  onBlur: PropTypes.func,\n  /**\n   * Callback function triggered when hyperlink gains focus.\n   */\n  onFocus: PropTypes.func,\n  /**\n   * Callback function triggered when key is pressed.\n   */\n  onKeyDown: PropTypes.func,\n  /**\n   * Callback function triggered when key is released.\n   */\n  onKeyUp: PropTypes.func,\n  /**\n   * Sets the hyperlink variant. One of `default`, `external`, `image`, `video`, `audio`, `document`.\n   */\n  variant: PropTypes.oneOf(['default', 'external', 'image', 'video', 'audio', 'document']),\n};\n\nconst defaultProps = {\n  isDisabled: false,\n  variant: variants.DEFAULT,\n};\n\nclass Hyperlink extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = { active: false, focused: false };\n    this.handleKeyDown = this.handleKeyDown.bind(this);\n    this.handleKeyUp = this.handleKeyUp.bind(this);\n    this.handleOnBlur = this.handleOnBlur.bind(this);\n  }\n\n  handleOnBlur(event) {\n    this.setState({ focused: false });\n\n    if (this.props.onBlur) {\n      this.props.onBlur(event);\n    }\n  }\n\n  handleKeyDown(event) {\n    // Add focus styles for keyboard navigation\n    if (event.nativeEvent.keyCode === KeyCode.KEY_RETURN) {\n      this.setState({ focused: true });\n    }\n\n    if (this.props.onKeyDown) {\n      this.props.onKeyDown(event);\n    }\n  }\n\n  handleKeyUp(event) {\n    // Apply focus styles for keyboard navigation\n    if (event.nativeEvent.keyCode === KeyCode.KEY_TAB) {\n      this.setState({ focused: true });\n    }\n\n    if (this.props.onKeyUp) {\n      this.props.onKeyUp(event);\n    }\n  }\n\n  render() {\n    const {\n      children,\n      isDisabled,\n      isUnderlineHidden,\n      variant,\n      href,\n      onClick,\n      onBlur,\n      onFocus,\n      onKeyDown,\n      onKeyUp,\n      ...customProps\n    } = this.props;\n\n    const hyperlinkClasses = cx([\n      'hyperlink',\n      variant,\n      { 'is-disabled': isDisabled },\n      { 'is-underline-hidden': isUnderlineHidden },\n      { 'is-active': this.state.active },\n      { 'is-focused': this.state.focused },\n      customProps.className,\n    ]);\n\n    const ComponentType = isDisabled ? 'span' : 'a';\n\n    let { target } = customProps; // Defaults to undefined if not set\n    let { rel } = customProps; // Defaults to undefined if not set\n\n    // If variant is set to external, we'll add target=\"_blank\" and rel=\"noopener noreferrer\"\n    // unless user passes their own target or rel attribute\n    if (!customProps.target && variant === 'external') {\n      target = '_blank';\n    }\n\n    if (!customProps.rel && variant === 'external') {\n      rel = 'noopener noreferrer';\n    }\n\n    return (\n      <ComponentType\n        {...customProps}\n        className={hyperlinkClasses}\n        onKeyDown={this.handleKeyDown}\n        onKeyUp={this.handleKeyUp}\n        onBlur={this.handleOnBlur}\n        onClick={onClick}\n        onFocus={onFocus}\n        href={isDisabled ? null : href}\n        target={target}\n        rel={rel}\n      >\n        {children}\n      </ComponentType>\n    );\n  }\n}\n\nHyperlink.propTypes = propTypes;\nHyperlink.defaultProps = defaultProps;\n\nexport { variants as HyperlinkVariants };\nexport default Hyperlink;\n"},2631:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=o(t(0)),i=o(t(927));function o(e){return e&&e.__esModule?e:{default:e}}n.default=function(){return r.default.createElement(i.default,{href:"https://www.cerner.com"},"Default hyperlink")}},2632:function(e,n,t){"use strict";t.r(n),n.default="/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */\nimport React from 'react';\nimport Hyperlink from 'terra-hyperlink/lib/Hyperlink';\n\nexport default () => <Hyperlink href=\"https://www.cerner.com\">Default hyperlink</Hyperlink>;\n"},2633:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=o(t(0)),i=o(t(927));function o(e){return e&&e.__esModule?e:{default:e}}n.default=function(){return r.default.createElement(i.default,{href:"https://www.cerner.com",variant:"audio"},"Audio hyperlink")}},2634:function(e,n,t){"use strict";t.r(n),n.default="/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */\nimport React from 'react';\nimport Hyperlink from 'terra-hyperlink/lib/Hyperlink';\n\nexport default () => <Hyperlink href=\"https://www.cerner.com\" variant=\"audio\">Audio hyperlink</Hyperlink>;\n"},2635:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=o(t(0)),i=o(t(927));function o(e){return e&&e.__esModule?e:{default:e}}n.default=function(){return r.default.createElement(i.default,{href:"https://www.cerner.com",isDisabled:!0},"Disabled hyperlink")}},2636:function(e,n,t){"use strict";t.r(n),n.default="/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */\nimport React from 'react';\nimport Hyperlink from 'terra-hyperlink/lib/Hyperlink';\n\nexport default () => <Hyperlink href=\"https://www.cerner.com\" isDisabled>Disabled hyperlink</Hyperlink>;\n"},2637:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=o(t(0)),i=o(t(927));function o(e){return e&&e.__esModule?e:{default:e}}n.default=function(){return r.default.createElement(i.default,{href:"https://www.cerner.com",variant:"document"},"Document hyperlink")}},2638:function(e,n,t){"use strict";t.r(n),n.default="/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */\nimport React from 'react';\nimport Hyperlink from 'terra-hyperlink/lib/Hyperlink';\n\nexport default () => <Hyperlink href=\"https://www.cerner.com\" variant=\"document\">Document hyperlink</Hyperlink>;\n"},2639:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=o(t(0)),i=o(t(927));function o(e){return e&&e.__esModule?e:{default:e}}n.default=function(){return r.default.createElement(i.default,{href:"https://www.cerner.com",variant:"external"},"External hyperlink")}},2640:function(e,n,t){"use strict";t.r(n),n.default="/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */\nimport React from 'react';\nimport Hyperlink from 'terra-hyperlink/lib/Hyperlink';\n\nexport default () => <Hyperlink href=\"https://www.cerner.com\" variant=\"external\">External hyperlink</Hyperlink>;\n"},2641:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=o(t(0)),i=o(t(927));function o(e){return e&&e.__esModule?e:{default:e}}n.default=function(){return r.default.createElement(i.default,{href:"https://www.cerner.com",variant:"image"},"Image hyperlink")}},2642:function(e,n,t){"use strict";t.r(n),n.default="/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */\nimport React from 'react';\nimport Hyperlink from 'terra-hyperlink/lib/Hyperlink';\n\nexport default () => <Hyperlink href=\"https://www.cerner.com\" variant=\"image\">Image hyperlink</Hyperlink>;\n"},2643:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=o(t(0)),i=o(t(927));function o(e){return e&&e.__esModule?e:{default:e}}n.default=function(){return r.default.createElement(i.default,{href:"https://www.cerner.com",isUnderlineHidden:!0},"Underline hidden hyperlink")}},2644:function(e,n,t){"use strict";t.r(n),n.default="/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */\nimport React from 'react';\nimport Hyperlink from 'terra-hyperlink/lib/Hyperlink';\n\nexport default () => <Hyperlink href=\"https://www.cerner.com\" isUnderlineHidden>Underline hidden hyperlink</Hyperlink>;\n"},2645:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=o(t(0)),i=o(t(927));function o(e){return e&&e.__esModule?e:{default:e}}n.default=function(){return r.default.createElement(i.default,{href:"https://www.cerner.com",variant:"video"},"Video hyperlink")}},2646:function(e,n,t){"use strict";t.r(n),n.default="/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */\nimport React from 'react';\nimport Hyperlink from 'terra-hyperlink/lib/Hyperlink';\n\nexport default () => <Hyperlink href=\"https://www.cerner.com\" variant=\"video\">Video hyperlink</Hyperlink>;\n"},3730:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=H(t(0)),i=H(t(911)),o=H(t(2628)),l=t(2629),a=H(t(2630)),s=H(t(2631)),d=H(t(2632)),u=H(t(2633)),p=H(t(2634)),c=H(t(2635)),f=H(t(2636)),h=H(t(2637)),y=H(t(2638)),m=H(t(2639)),k=H(t(2640)),b=H(t(2641)),v=H(t(2642)),_=H(t(2643)),w=H(t(2644)),g=H(t(2645)),x=H(t(2646));function H(e){return e&&e.__esModule?e:{default:e}}var D=function(){return r.default.createElement(i.default,{packageName:l.name,readme:o.default,srcPath:"https://github.com/cerner/terra-core/tree/master/packages/".concat(l.name),examples:[{title:"Default Hyperlink",example:r.default.createElement(s.default,null),source:d.default},{title:"Disabled Hyperlink",example:r.default.createElement(c.default,null),source:f.default},{title:"External Hyperlink",description:"An external variant adds a custom icon to indicate the destination is external to the source.",example:r.default.createElement(m.default,null),source:k.default},{title:"Audio Hyperlink",description:"An audio variant adds a custom icon to indicate the content linked is audio.",example:r.default.createElement(u.default,null),source:p.default},{title:"Video Hyperlink",description:"A video variant adds a custom icon to indicate the content linked is a video.",example:r.default.createElement(g.default,null),source:x.default},{title:"Image Hyperlink",description:"An image variant adds a custom icon to indicate the content linked is an image.",example:r.default.createElement(b.default,null),source:v.default},{title:"Document Hyperlink",description:"A document variant adds a custom icon to indicate the content linked is document (.pdf, .doc, .xls, etc.).",example:r.default.createElement(h.default,null),source:y.default},{title:"Underline Hidden Hyperlink",description:"Option to hide the default underline when applied with theme-specific styling. Reserve for use when terra-hyperlink is applied in special situations within lists, other controls, or other components.",example:r.default.createElement(_.default,null),source:w.default}],propsTables:[{componentName:"Hyperlink",componentSrc:a.default}]})};n.default=D},927:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=n.HyperlinkVariants=void 0;var r=s(t(0)),i=s(t(2)),o=s(t(4)),l=s(t(35)),a=s(t(1120));function s(e){return e&&e.__esModule?e:{default:e}}function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(){return(u=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function p(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}function c(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(e,n){return(y=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}var m=o.default.bind(a.default),k={DEFAULT:"default",EXTERNAL:"external",IMAGE:"image",VIDEO:"video",AUDIO:"audio",DOCUMENT:"document"};n.HyperlinkVariants=k;var b={children:i.default.node,href:i.default.string,isDisabled:i.default.bool,isUnderlineHidden:i.default.bool,onClick:i.default.func,onBlur:i.default.func,onFocus:i.default.func,onKeyDown:i.default.func,onKeyUp:i.default.func,variant:i.default.oneOf(["default","external","image","video","audio","document"])},v={isDisabled:!1,variant:k.DEFAULT},_=function(e){function n(e){var t,r,i;return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),r=this,(t=!(i=f(n).call(this,e))||"object"!==d(i)&&"function"!=typeof i?h(r):i).state={active:!1,focused:!1},t.handleKeyDown=t.handleKeyDown.bind(h(t)),t.handleKeyUp=t.handleKeyUp.bind(h(t)),t.handleOnBlur=t.handleOnBlur.bind(h(t)),t}var t,i,o;return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&y(e,n)}(n,r.default.Component),t=n,(i=[{key:"handleOnBlur",value:function(e){this.setState({focused:!1}),this.props.onBlur&&this.props.onBlur(e)}},{key:"handleKeyDown",value:function(e){e.nativeEvent.keyCode===l.default.KEY_RETURN&&this.setState({focused:!0}),this.props.onKeyDown&&this.props.onKeyDown(e)}},{key:"handleKeyUp",value:function(e){e.nativeEvent.keyCode===l.default.KEY_TAB&&this.setState({focused:!0}),this.props.onKeyUp&&this.props.onKeyUp(e)}},{key:"render",value:function(){var e=this.props,n=e.children,t=e.isDisabled,i=e.isUnderlineHidden,o=e.variant,l=e.href,a=e.onClick,s=(e.onBlur,e.onFocus),d=(e.onKeyDown,e.onKeyUp,p(e,["children","isDisabled","isUnderlineHidden","variant","href","onClick","onBlur","onFocus","onKeyDown","onKeyUp"])),c=m(["hyperlink",o,{"is-disabled":t},{"is-underline-hidden":i},{"is-active":this.state.active},{"is-focused":this.state.focused},d.className]),f=t?"span":"a",h=d.target,y=d.rel;return d.target||"external"!==o||(h="_blank"),d.rel||"external"!==o||(y="noopener noreferrer"),r.default.createElement(f,u({},d,{className:c,onKeyDown:this.handleKeyDown,onKeyUp:this.handleKeyUp,onBlur:this.handleOnBlur,onClick:a,onFocus:s,href:t?null:l,target:h,rel:y}),n)}}])&&c(t.prototype,i),o&&c(t,o),n}();_.propTypes=b,_.defaultProps=v;var w=_;n.default=w}}]);
//# sourceMappingURL=88-d8ac5fd80fe2bb1fb0f0.js.map