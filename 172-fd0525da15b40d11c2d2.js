(window.webpackJsonp=window.webpackJsonp||[]).push([[172,376,377,378,379,380,381,382,383,384,385,386,387,388,389,390,391,392,393,394,395,396,397,398,399,400,401,402,403,404,405,406,407,408,409,410,411,412,413,414,415,416,417,418,419,420,421,422,423,424,425,426,427,428,429,430,431,432,433,434,435,436,437,438,439],{3534:function(e,t,n){"use strict";n.r(t),t.default="# Terra Visually Hidden Text\n\nVisually Hidden Text is a component designed for screen readers that renders text on the dom, but is not visible to the UI. Some components such as badge will have a visual indication to note their hierarchy on the page, but that indication is lost when a screen reader is used on the web page. Visually Hidden text would allow your application to provide that additional context to a screen reader.\n\nAnother reason for this component is when you want to produce more semantic markup for a screen reader only experience. Some various examples include:\n\n- You may want to provide a visually hidden header to allow for better readability.\n- You may need to provide different instructions for visual users vs non visual users.\n- div nodes have a difficult understanding the aria-label attributes as well.\n\nIn these instances, it's recommended to use visually hidden text.\n\n## Getting Started\n\n- Install with [npmjs](https://www.npmjs.com):\n  - `npm install terra-visually-hidden-text`\n\n\x3c!-- AUTO-GENERATED-CONTENT:START Peer Dependencies --\x3e\n## Peer Dependencies\n\n<details>\n<summary>View information on this component's peer dependencies.</summary>\n\nThis component requires the following peer dependencies be installed in your app for the component to properly function.\n\n| Peer Dependency | Version |\n|-|-|\n| react | ^16.8.5 |\n| react-dom | ^16.8.5 |\n\n\n</details>\n\x3c!-- AUTO-GENERATED-CONTENT:END --\x3e\n\n## Component Features\n\n * [Cross-Browser Support](https://engineering.cerner.com/terra-ui/#/getting-started/terra-ui/features)\n"},3535:function(e){e.exports=JSON.parse('{"_from":"terra-visually-hidden-text@^2.0.0","_id":"terra-visually-hidden-text@2.14.0","_inBundle":false,"_integrity":"sha512-t0PuegrP9UnSLMcgjEK1LUQkpcKnUjo5fA5vgoI/XrGTM2IOsyMUskB3SUn9r/Ek/3zg05ESVBa7boEEaNDNFw==","_location":"/terra-visually-hidden-text","_phantomChildren":{},"_requested":{"type":"range","registry":true,"raw":"terra-visually-hidden-text@^2.0.0","name":"terra-visually-hidden-text","escapedName":"terra-visually-hidden-text","rawSpec":"^2.0.0","saveSpec":null,"fetchSpec":"^2.0.0"},"_requiredBy":["/","/terra-abstract-modal","/terra-application-navigation","/terra-badge","/terra-card","/terra-date-picker","/terra-demographics-banner","/terra-form-checkbox","/terra-form-radio","/terra-infinite-list","/terra-navigation-side-menu","/terra-paginator","/terra-status"],"_resolved":"https://registry.npmjs.org/terra-visually-hidden-text/-/terra-visually-hidden-text-2.14.0.tgz","_shasum":"b7ea9454ab668ba2c24a2e87eee95fdac6ec1ebe","_spec":"terra-visually-hidden-text@^2.0.0","_where":"/home/travis/build/cerner/terra-ui","author":{"name":"Cerner Corporation"},"bugs":{"url":"https://github.com/cerner/terra-core/issues"},"bundleDependencies":false,"dependencies":{"classnames":"^2.2.5","prop-types":"^15.5.8","terra-doc-template":"^2.15.0"},"deprecated":false,"description":"Text that is designed to only be read by a screen reader.","gitHead":"0b893dc4a80250c0b485a5f205f2defde7c38ecf","homepage":"https://github.com/cerner/terra-core#readme","keywords":["Cerner","Terra","terra-visually-hidden-text","VisuallyHiddenText","UI"],"license":"Apache-2.0","main":"lib/VisuallyHiddenText.js","name":"terra-visually-hidden-text","peerDependencies":{"react":"^16.8.5","react-dom":"^16.8.5"},"repository":{"type":"git","url":"git+https://github.com/cerner/terra-core.git"},"scripts":{"compile":"babel --root-mode upward src --out-dir lib --copy-files","lint":"npm run lint:js && npm run lint:scss","lint:js":"eslint --ext .js,.jsx . --ignore-path ../../.eslintignore","lint:scss":"stylelint src/**/*.scss","precompile":"rm -rf lib","test":"npm run test:jest && npm run test:wdio","test:jest":"jest --config ../../jestconfig.js","test:wdio":"../../node_modules/.bin/wdio ../../node_modules/terra-dev-site/config/wdio/wdio.conf.js"},"version":"2.14.0"}')},3536:function(e,t,n){"use strict";n.r(t),t.default="import React from 'react';\nimport PropTypes from 'prop-types';\nimport classNames from 'classnames/bind';\nimport styles from './VisuallyHiddenText.module.scss';\n\nconst cx = classNames.bind(styles);\n\nconst propTypes = {\n  /**\n   * Callback ref to pass into the dom element. This is useful when using terra-visually-hidden-text as an aria-live container.\n   */\n  refCallback: PropTypes.func,\n  /**\n   * Text to be read to the screen reader\n   */\n  text: PropTypes.string,\n};\n\nconst defaultProps = {\n  text: undefined,\n  refCallback: undefined,\n};\n\nconst VisuallyHiddenText = ({ refCallback, text, ...customProps }) => {\n  const VisuallyHiddenTextClassNames = cx([\n    'visually-hidden-text',\n    customProps.className,\n  ]);\n\n  return (<span ref={refCallback} {...customProps} className={VisuallyHiddenTextClassNames}>{text}</span>);\n};\n\nVisuallyHiddenText.propTypes = propTypes;\nVisuallyHiddenText.defaultProps = defaultProps;\n\nexport default VisuallyHiddenText;\n"},3537:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(n(0)),a=i(n(153));function i(e){return e&&e.__esModule?e:{default:e}}t.default=function(){return r.default.createElement("p",null,"Focus in this section to hear screen reader only text",r.default.createElement(a.default,{tabIndex:"0",text:"This is read by a screen reader"}))}},3538:function(e,t,n){"use strict";n.r(t),t.default="import React from 'react';\n\n// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions\nimport VisuallyHiddenText from 'terra-visually-hidden-text/lib/VisuallyHiddenText';\n\nexport default () => (\n  <p>\n     Focus in this section to hear screen reader only text\n    <VisuallyHiddenText tabIndex=\"0\" text=\"This is read by a screen reader\" />\n  </p>\n);\n"},3539:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(n(0)),a=i(n(153));function i(e){return e&&e.__esModule?e:{default:e}}function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e,t){return!t||"object"!==s(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var c=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),l(this,d(t).apply(this,arguments))}var n,i,s;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(t,r.default.Component),n=t,(i=[{key:"componentDidMount",value:function(){this.visuallyHiddenText.innerText="Text written via refCallback innerText update"}},{key:"render",value:function(){var e=this;return r.default.createElement("p",null,"Visually Hidden Text which uses refCallback to write innerText",r.default.createElement(a.default,{refCallback:function(t){e.visuallyHiddenText=t}}))}}])&&o(n.prototype,i),s&&o(n,s),t}();t.default=c},3540:function(e,t,n){"use strict";n.r(t),t.default="import React from 'react';\n\n// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions\nimport VisuallyHiddenText from 'terra-visually-hidden-text/lib/VisuallyHiddenText';\n\nclass Example extends React.Component {\n  componentDidMount() {\n    this.visuallyHiddenText.innerText = 'Text written via refCallback innerText update';\n  }\n\n  render() {\n    return (\n      <p>\n        Visually Hidden Text which uses refCallback to write innerText\n        <VisuallyHiddenText refCallback={(ref) => { this.visuallyHiddenText = ref; }} />\n      </p>\n    );\n  }\n}\n\nexport default Example;\n"},3857:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=p(n(0)),a=p(n(911)),i=p(n(3534)),s=n(3535),o=p(n(3536)),l=p(n(3537)),d=p(n(3538)),u=p(n(3539)),c=p(n(3540));function p(e){return e&&e.__esModule?e:{default:e}}var f=function(){return r.default.createElement(a.default,{packageName:s.name,readme:i.default,srcPath:"https://github.com/cerner/terra-core/tree/master/packages/".concat(s.name),examples:[{title:"VisuallyHiddenText with empty string",example:r.default.createElement(l.default,null),source:d.default},{title:"VisuallyHiddenText with ref Callback",example:r.default.createElement(u.default,null),source:c.default}],propsTables:[{componentName:"VisuallyHiddenText",componentSrc:o.default}]})};t.default=f},912:function(e,t){}}]);
//# sourceMappingURL=172-fd0525da15b40d11c2d2.js.map