(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{1120:function(e,t,n){e.exports={hyperlink:"Hyperlink-module__hyperlink___1XVZg","is-visited":"Hyperlink-module__is-visited___3I0or","is-hovered":"Hyperlink-module__is-hovered___2ABcm","is-focused":"Hyperlink-module__is-focused___3helG","is-active":"Hyperlink-module__is-active___28bj_","is-disabled":"Hyperlink-module__is-disabled___2t3Ph","is-underline-hidden":"Hyperlink-module__is-underline-hidden___33axY",external:"Hyperlink-module__external___3Yxw-",image:"Hyperlink-module__image___3NUm-",video:"Hyperlink-module__video___2FJsC",audio:"Hyperlink-module__audio___1s9lr",document:"Hyperlink-module__document___1AqYO"}},1176:function(e){e.exports=JSON.parse('{"_from":"terra-action-footer@^2.0.0","_id":"terra-action-footer@2.18.0","_inBundle":false,"_integrity":"sha512-mjGo66KOqtFKuDuxZJX1M1LOR0q+wG7PH0IKwees6FvbhqGlB812pWBWmcM+6Hbbifc/Y1W55My/wGymwRR+iQ==","_location":"/terra-action-footer","_phantomChildren":{},"_requested":{"type":"range","registry":true,"raw":"terra-action-footer@^2.0.0","name":"terra-action-footer","escapedName":"terra-action-footer","rawSpec":"^2.0.0","saveSpec":null,"fetchSpec":"^2.0.0"},"_requiredBy":["/","/terra-application-navigation","/terra-dev-site"],"_resolved":"https://registry.npmjs.org/terra-action-footer/-/terra-action-footer-2.18.0.tgz","_shasum":"88305d1a5bce19ffdb4bdbe266fb9cca6c1fb058","_spec":"terra-action-footer@^2.0.0","_where":"/home/travis/build/cerner/terra-ui","author":{"name":"Cerner Corporation"},"bugs":{"url":"https://github.com/cerner/terra-core/issues"},"bundleDependencies":false,"dependencies":{"classnames":"^2.2.5","prop-types":"^15.5.8","terra-button":"^3.19.0","terra-doc-template":"^2.15.0","terra-hyperlink":"^2.15.0","terra-spacer":"^3.17.0"},"deprecated":false,"description":"The terra-action-footer component is a footer bar that contains sockets for placing actionable items such as buttons and hyperlinks. The default variation contains a start and end socket, while the centered variation has only a center socket. If no actions are provided, the footer bar collapses to a themeable height and maintains the top border.","gitHead":"0b893dc4a80250c0b485a5f205f2defde7c38ecf","homepage":"https://github.com/cerner/terra-core#readme","keywords":["Cerner","Terra","terra-action-footer","ActionFooter","UI"],"license":"Apache-2.0","main":"lib/ActionFooter.js","name":"terra-action-footer","peerDependencies":{"react":"^16.8.5","react-dom":"^16.8.5"},"repository":{"type":"git","url":"git+https://github.com/cerner/terra-core.git"},"scripts":{"compile":"babel --root-mode upward src --out-dir lib --copy-files","lint":"npm run lint:js && npm run lint:scss","lint:js":"eslint --ext .js,.jsx . --ignore-path ../../.eslintignore","lint:scss":"stylelint src/**/*.scss","precompile":"rm -rf lib","test":"npm run test:jest && npm run test:wdio","test:jest":"jest --config ../../jestconfig.js","test:wdio":"../../node_modules/.bin/wdio ../../node_modules/terra-dev-site/config/wdio/wdio.conf.js"},"version":"2.18.0"}')},1177:function(e,t,n){e.exports={"content-wrapper":"ExampleTemplate__content-wrapper___m3Wa_"}},1282:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=c(n(0)),o=c(n(2)),a=c(n(4)),i=c(n(346)),l=c(n(1712));function c(e){return e&&e.__esModule?e:{default:e}}function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=a.default.bind(l.default),p={center:o.default.node},f={center:void 0},m=function(e){var t=e.center,n=u(e,["center"]),o=d(["centered-action-footer",n.className]);return r.default.createElement(i.default,s({},n,{className:o}),t)};m.propTypes=p,m.defaultProps=f;var y=m;t.default=y},1709:function(e,t,n){"use strict";n.r(t),t.default="# Terra Centered Action Footer\n\nThe terra-centered-action-footer component is a footer bar that contains a single, centered socket for placing actionable items such as buttons and hyperlinks. If no actions are provided, the footer bar collapses to a themeable height and maintains the top border.\n\n## Usage\n\n### Centered Action Footer with a Single Action\n\n```jsx\nimport React from 'react';\nimport CenteredActionFooter from 'terra-action-footer/lib/CenteredActionFooter';\nimport Hyperlink from 'terra-hyperlink';\n\n<CenteredActionFooter\n  center={<Hyperlink href=\"/link/to/somewhere\">A link</Hyperlink>}\n/>\n```\n\n### Centered Action Footer with Multiple Actions\n\n```jsx\nimport React from 'react';\nimport Button from 'terra-button';\nimport CenteredActionFooter from 'terra-action-footer/lib/CenteredActionFooter';\nimport Hyperlink from 'terra-hyperlink';\nimport Spacer from 'terra-spacer';\n\n<CenteredActionFooter\n  center={\n    <React.Fragment>\n      <Spacer isInlineBlock marginRight=\"medium\">\n        <Button text=\"Action One\" />\n      </Spacer>\n      <Button text=\"Action Two\" />\n    </React.Fragment>\n  }\n/>\n```\n\n### Empty Centered Action Footer\n\n```jsx\nimport React from 'react';\nimport CenteredActionFooter from 'terra-action-footer/lib/CenteredActionFooter';\n\n<CenteredActionFooter />\n```"},1710:function(e,t,n){"use strict";n.r(t),t.default="import React from 'react';\nimport PropTypes from 'prop-types';\nimport classNames from 'classnames/bind';\nimport BlockActionFooter from './BlockActionFooter';\nimport styles from './CenteredActionFooter.module.scss';\n\nconst cx = classNames.bind(styles);\n\nconst propTypes = {\n  /**\n   * Actions to be displayed in the center socket\n   */\n  center: PropTypes.node,\n};\n\nconst defaultProps = {\n  center: undefined,\n};\n\nconst CenteredActionFooter = ({\n  center,\n  ...customProps\n}) => {\n  const centeredActionFooterClassNames = cx([\n    'centered-action-footer',\n    customProps.className,\n  ]);\n\n  return (\n    <BlockActionFooter {...customProps} className={centeredActionFooterClassNames}>\n      {center}\n    </BlockActionFooter>\n  );\n};\n\nCenteredActionFooter.propTypes = propTypes;\nCenteredActionFooter.defaultProps = defaultProps;\n\nexport default CenteredActionFooter;\n"},1711:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(n(0)),o=i(n(1282)),a=i(n(937));function i(e){return e&&e.__esModule?e:{default:e}}t.default=function(){return r.default.createElement(a.default,null,r.default.createElement(o.default,null))}},1712:function(e,t,n){e.exports={"centered-action-footer":"CenteredActionFooter-module__centered-action-footer___uOMVl"}},1713:function(e,t,n){"use strict";n.r(t),t.default="import React from 'react';\n// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions\nimport CenteredActionFooter from 'terra-action-footer/lib/CenteredActionFooter';\nimport ExampleTemplate from '../../common/ExampleTemplate';\n\nexport default () => (\n  <ExampleTemplate>\n    <CenteredActionFooter />\n  </ExampleTemplate>\n);\n"},1714:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(n(0)),o=l(n(927)),a=l(n(1282)),i=l(n(937));function l(e){return e&&e.__esModule?e:{default:e}}t.default=function(){return r.default.createElement(i.default,null,r.default.createElement(a.default,{center:r.default.createElement(o.default,{href:"#"},"A link")}))}},1715:function(e,t,n){"use strict";n.r(t),t.default="import React from 'react';\nimport Hyperlink from 'terra-hyperlink';\n// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions\nimport CenteredActionFooter from 'terra-action-footer/lib/CenteredActionFooter';\nimport ExampleTemplate from '../../common/ExampleTemplate';\n\n\nexport default () => (\n  <ExampleTemplate>\n    <CenteredActionFooter\n      center={<Hyperlink href=\"#\">A link</Hyperlink>}\n    />\n  </ExampleTemplate>\n);\n"},1716:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=c(n(0)),o=c(n(61)),a=c(n(333)),i=c(n(1282)),l=c(n(937));function c(e){return e&&e.__esModule?e:{default:e}}t.default=function(){return r.default.createElement(l.default,null,r.default.createElement(i.default,{center:r.default.createElement(r.default.Fragment,null,r.default.createElement(a.default,{isInlineBlock:!0,marginRight:"medium"},r.default.createElement(o.default,{text:"Action One"})),r.default.createElement(o.default,{text:"Action Two"}))}))}},1717:function(e,t,n){"use strict";n.r(t),t.default="import React from 'react';\nimport Button from 'terra-button';\nimport Spacer from 'terra-spacer';\n// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions\nimport CenteredActionFooter from 'terra-action-footer/lib/CenteredActionFooter';\nimport ExampleTemplate from '../../common/ExampleTemplate';\n\nexport default () => (\n  <ExampleTemplate>\n    <CenteredActionFooter\n      center={(\n        <React.Fragment>\n          <Spacer isInlineBlock marginRight=\"medium\">\n            <Button text=\"Action One\" />\n          </Spacer>\n          <Button text=\"Action Two\" />\n        </React.Fragment>\n      )}\n    />\n  </ExampleTemplate>\n);\n"},3564:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=m(n(0)),o=m(n(911)),a=m(n(1709)),i=n(1176),l=m(n(1710)),c=m(n(1711)),s=m(n(1713)),u=m(n(1714)),d=m(n(1715)),p=m(n(1716)),f=m(n(1717));function m(e){return e&&e.__esModule?e:{default:e}}var y=function(){return r.default.createElement(o.default,{packageName:i.name,readme:a.default,srcPath:"https://github.com/cerner/terra-core/tree/master/packages/".concat(i.name),examples:[{title:"Empty",example:r.default.createElement(c.default,null),source:s.default},{title:"Single Action",example:r.default.createElement(u.default,null),source:d.default},{title:"Multiple Actions",example:r.default.createElement(p.default,null),source:f.default}],propsTables:[{componentName:"Centered Action Footer",componentSrc:l.default}]})};t.default=y},927:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.HyperlinkVariants=void 0;var r=c(n(0)),o=c(n(2)),a=c(n(4)),i=c(n(35)),l=c(n(1120));function c(e){return e&&e.__esModule?e:{default:e}}function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function d(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var h=a.default.bind(l.default),_={DEFAULT:"default",EXTERNAL:"external",IMAGE:"image",VIDEO:"video",AUDIO:"audio",DOCUMENT:"document"};t.HyperlinkVariants=_;var b={children:o.default.node,href:o.default.string,isDisabled:o.default.bool,isUnderlineHidden:o.default.bool,onClick:o.default.func,onBlur:o.default.func,onFocus:o.default.func,onKeyDown:o.default.func,onKeyUp:o.default.func,variant:o.default.oneOf(["default","external","image","video","audio","document"])},v={isDisabled:!1,variant:_.DEFAULT},g=function(e){function t(e){var n,r,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,(n=!(o=f(t).call(this,e))||"object"!==s(o)&&"function"!=typeof o?m(r):o).state={active:!1,focused:!1},n.handleKeyDown=n.handleKeyDown.bind(m(n)),n.handleKeyUp=n.handleKeyUp.bind(m(n)),n.handleOnBlur=n.handleOnBlur.bind(m(n)),n}var n,o,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(t,r.default.Component),n=t,(o=[{key:"handleOnBlur",value:function(e){this.setState({focused:!1}),this.props.onBlur&&this.props.onBlur(e)}},{key:"handleKeyDown",value:function(e){e.nativeEvent.keyCode===i.default.KEY_RETURN&&this.setState({focused:!0}),this.props.onKeyDown&&this.props.onKeyDown(e)}},{key:"handleKeyUp",value:function(e){e.nativeEvent.keyCode===i.default.KEY_TAB&&this.setState({focused:!0}),this.props.onKeyUp&&this.props.onKeyUp(e)}},{key:"render",value:function(){var e=this.props,t=e.children,n=e.isDisabled,o=e.isUnderlineHidden,a=e.variant,i=e.href,l=e.onClick,c=(e.onBlur,e.onFocus),s=(e.onKeyDown,e.onKeyUp,d(e,["children","isDisabled","isUnderlineHidden","variant","href","onClick","onBlur","onFocus","onKeyDown","onKeyUp"])),p=h(["hyperlink",a,{"is-disabled":n},{"is-underline-hidden":o},{"is-active":this.state.active},{"is-focused":this.state.focused},s.className]),f=n?"span":"a",m=s.target,y=s.rel;return s.target||"external"!==a||(m="_blank"),s.rel||"external"!==a||(y="noopener noreferrer"),r.default.createElement(f,u({},s,{className:p,onKeyDown:this.handleKeyDown,onKeyUp:this.handleKeyUp,onBlur:this.handleOnBlur,onClick:l,onFocus:c,href:n?null:i,target:m,rel:y}),t)}}])&&p(n.prototype,o),a&&p(n,a),t}();g.propTypes=b,g.defaultProps=v;var k=g;t.default=k},937:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(n(0)),o=l(n(4)),a=l(n(2)),i=l(n(1177));function l(e){return e&&e.__esModule?e:{default:e}}var c=o.default.bind(i.default),s={children:a.default.node.isRequired},u=function(e){var t=e.children;return r.default.createElement("div",{className:c("content-wrapper")},t)};u.propTypes=s;var d=u;t.default=d}}]);
//# sourceMappingURL=104-a9d4c508f305fdb8f2eb.js.map