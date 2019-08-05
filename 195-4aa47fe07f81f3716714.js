(window.webpackJsonp=window.webpackJsonp||[]).push([[195,376,377,378,379,380,381,382,383,384,385,386,387,388,389,390,391,392,393,394,395,396,397,398,399,400,401,402,403,404,405,406,407,408,409,410,411,412,413,414,415,416,417,418,419,420,421,422,423,424,425,426,427,428,429,430,431,432,433,434,435,436,437,438,439],{1213:function(e){e.exports=JSON.parse('{"_from":"terra-icon@^3.0.0","_id":"terra-icon@3.16.0","_inBundle":false,"_integrity":"sha512-/aABMkyCxywONwe8xzie3Um1KiYwYNPlS80qv9hyfGYzvVeRzEdVYkPWMcaaDIqXTCPR58URBUQhC8bTBLLwew==","_location":"/terra-icon","_phantomChildren":{},"_requested":{"type":"range","registry":true,"raw":"terra-icon@^3.0.0","name":"terra-icon","escapedName":"terra-icon","rawSpec":"^3.0.0","saveSpec":null,"fetchSpec":"^3.0.0"},"_requiredBy":["/","/terra-action-header","/terra-alert","/terra-application-layout","/terra-application-links","/terra-application-navigation","/terra-application-utility","/terra-arrange","/terra-badge","/terra-button","/terra-button-group","/terra-clinical-data-grid","/terra-clinical-detail-view","/terra-clinical-item-collection","/terra-clinical-item-collection/terra-list","/terra-clinical-item-display","/terra-clinical-item-view","/terra-clinical-label-value-view","/terra-clinical-onset-picker/terra-date-picker","/terra-date-picker","/terra-dev-site","/terra-dialog","/terra-form-field","/terra-form-input","/terra-form-textarea","/terra-list","/terra-menu","/terra-navigation-side-menu","/terra-overlay","/terra-paginator","/terra-search-field","/terra-status","/terra-status-view","/terra-table","/terra-tabs","/terra-tag","/terra-toggle","/terra-toggle-button"],"_resolved":"https://registry.npmjs.org/terra-icon/-/terra-icon-3.16.0.tgz","_shasum":"74bd2744886097f6bd770ef28188f588a46111e6","_spec":"terra-icon@^3.0.0","_where":"/home/travis/build/cerner/terra-ui","author":{"name":"Cerner Corporation"},"bugs":{"url":"https://github.com/cerner/terra-core/issues"},"bundleDependencies":false,"dependencies":{"classnames":"^2.2.5","prop-types":"^15.5.8","terra-doc-template":"^2.15.0"},"deprecated":false,"description":"The terra-icon component is used to visually represent a literal or symbolic object intended to initiate an action, communicate a status, or navigate the workflow.","devDependencies":{"csvtojson":"^2.0.8","jsdom":"^15.1.1","one-cerner-style-icons":"https://github.com/cerner/one-cerner-style-icons/archive/v1.26.tar.gz","shelljs":"^0.8.2","svgo":"^1.2.2"},"gitHead":"0b893dc4a80250c0b485a5f205f2defde7c38ecf","homepage":"https://github.com/cerner/terra-core#readme","keywords":["Cerner","Terra","terra-icon","Icon","UI"],"license":"Apache-2.0","name":"terra-icon","peerDependencies":{"react":"^16.8.5","react-dom":"^16.8.5"},"repository":{"type":"git","url":"git+https://github.com/cerner/terra-core.git"},"scripts":{"compile":"babel --root-mode upward src --out-dir lib --copy-files","compilescripts":"npm run compilescripts:clean && npm run compilescripts:build","compilescripts:build":"babel --root-mode upward scripts/src --out-dir scripts/lib --copy-files","compilescripts:clean":"rm -rf scripts/lib","generate-example":"node scripts/lib/generate-example/index.js","generate-icon":"node scripts/lib/generate-icon/index.js","generate-json":"node scripts/lib/generate-json/index.js","lint":"npm run lint:js && npm run lint:scss","lint:js":"eslint --ext .js,.jsx . --ignore-path ../../.eslintignore","lint:scss":"stylelint src/**/*.scss","migrate-cerner-one-icons":"npm run compilescripts && npm run migrate-csv && npm run migrate-svg && npm run generate-json && npm run generate-icon && npm run generate-example","migrate-csv":"node scripts/lib/migrate-csv/index.js","migrate-svg":"node scripts/lib/migrate-svg/index.js","precompile":"rm -rf lib","test":"npm run test:jest && npm run test:wdio","test:jest":"jest --config ../../jestconfig.js","test:wdio":"../../node_modules/.bin/wdio ../../node_modules/terra-dev-site/config/wdio/wdio.conf.js"},"version":"3.16.0"}')},2656:function(e,t,n){"use strict";n.r(t),t.default="# Terra Icon\n\nThe terra-icon component is used to visually represent a literal or symbolic object intended to initiate an action, communicate a status, or navigate the workflow.\n\n## Getting Started\n\n- Install with [npmjs](https://www.npmjs.com):\n  - `npm install terra-icon`\n  - `yarn add terra-icon`\n\n\x3c!-- AUTO-GENERATED-CONTENT:START Peer Dependencies --\x3e\n## Peer Dependencies\n\n<details>\n<summary>View information on this component's peer dependencies.</summary>\n\nThis component requires the following peer dependencies be installed in your app for the component to properly function.\n\n| Peer Dependency | Version |\n|-|-|\n| react | ^16.8.5 |\n| react-dom | ^16.8.5 |\n\n\n</details>\n\x3c!-- AUTO-GENERATED-CONTENT:END --\x3e\n\n## Usage\nEach Icon can be imported individually.\n\n```jsx\nimport React from 'react';\nimport IconAdd from 'terra-icon/lib/icon/IconAdd';\nimport IconEdit from 'terra-icon/lib/icon/IconEdit';\n\n<div>\n  <IconAdd />\n  <IconEdit />\n</div>\n```\n\n## Component Features\n* [Cross-Browser Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#cross-browser-support)\n* [Responsive Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#responsive-support)\n* [Mobile Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#mobile-support)\n"},2657:function(e,t,n){"use strict";n.r(t),t.default="import React from 'react';\nimport PropTypes from 'prop-types';\nimport classNames from 'classnames/bind';\n\n// eslint-disable-next-line import/no-unresolved, import/no-webpack-loader-syntax\nimport styles from './Icon.module.scss';\n\nconst cx = classNames.bind(styles);\n\nconst propTypes = {\n  /**\n   * Should the svg mirror when dir=\"rtl\".\n   */\n  isBidi: PropTypes.bool,\n  /**\n   * Should the SVG rotate.\n   */\n  isSpin: PropTypes.bool,\n  /**\n   * Child nodes.\n   */\n  children: PropTypes.node,\n  /**\n   * Height of SVG.\n   */\n  height: PropTypes.string,\n  /**\n   * Width of SVG.\n   */\n  width: PropTypes.string,\n  /**\n   * String that labels the current element. If 'aria-label' is present,\n   * role is set to 'img' and aria-hidden is removed.\n   */\n  ariaLabel: PropTypes.string,\n  /**\n   * Focusable attribute. IE 10/11 are focusable without this attribute.\n   */\n  focusable: PropTypes.string,\n};\n\nconst defaultProps = {\n  isBidi: false,\n  isSpin: false,\n  children: null,\n  height: '1em',\n  width: '1em',\n  ariaLabel: null,\n  focusable: 'false',\n};\n\nconst IconBase = ({\n  isBidi,\n  isSpin,\n  children,\n  height,\n  width,\n  ariaLabel,\n  focusable,\n  ...customProps\n}) => {\n  const attributes = Object.assign({}, customProps);\n\n  const addAnimationStyles = () => {\n    if (isSpin) {\n      const css = '@-webkit-keyframes tui-spin-ltr{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}@keyframes tui-spin-ltr{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}@-webkit-keyframes tui-spin-rtl{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(-359deg);transform:rotate(-359deg)}}@keyframes tui-spin-rtl{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(-359deg);transform:rotate(-359deg)}}[dir=ltr] .tui-Icon.is-spin {-webkit-animation: tui-spin-ltr 2s infinite linear;animation: tui-spin-ltr 2s infinite linear;}[dir=rtl] .tui-Icon.is-spin {-webkit-animation: tui-spin-rtl 2s infinite linear;animation: tui-spin-rtl 2s infinite linear;}';\n      const head = document.head || document.getElementsByTagName('head')[0];\n      const style = document.createElement('style');\n      style.type = 'text/css';\n      style.id = 'terra-icon-animation';\n      // If we haven't written the styles to the DOM yet, add them, otherwise don't do this for subsequent spinner icons.\n      if (!document.getElementById(style.id)) {\n        style.appendChild(document.createTextNode(css));\n        head.appendChild(style);\n      }\n    }\n  };\n  addAnimationStyles();\n\n  // append to existing classNames\n  const classes = cx(\n    'tui-Icon',\n    'icon',\n    { 'is-bidi': isBidi },\n    { 'is-spin': isSpin },\n    attributes.className,\n  );\n\n  // aria-label is present, remove aria-hidden, set role to img\n  if (ariaLabel) {\n    attributes['aria-label'] = ariaLabel;\n    attributes.role = 'img';\n    attributes['aria-hidden'] = null;\n  } else {\n    attributes['aria-hidden'] = 'true';\n  }\n\n  attributes.height = height;\n  attributes.width = width;\n  attributes.focusable = focusable;\n\n  return <svg {...attributes} className={classes}>{children}</svg>;\n};\n\nIconBase.propTypes = propTypes;\nIconBase.defaultProps = defaultProps;\n\nexport default IconBase;\n"},3736:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=c(n(0)),i=c(n(911)),a=c(n(2656)),s=n(1213),o=c(n(2657));function c(e){return e&&e.__esModule?e:{default:e}}var l=function(){return r.default.createElement(i.default,{packageName:s.name,readme:a.default,srcPath:"https://github.com/cerner/terra-core/tree/master/packages/".concat(s.name),propsTables:[{componentName:"Icon",componentSrc:o.default}]})};t.default=l},912:function(e,t){}}]);
//# sourceMappingURL=195-4aa47fe07f81f3716714.js.map