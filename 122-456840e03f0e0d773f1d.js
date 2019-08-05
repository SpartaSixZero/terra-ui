(window.webpackJsonp=window.webpackJsonp||[]).push([[122,376,377,378,379,380,381,382,383,384,385,386,387,388,389,390,391,392,393,394,395,396,397,398,399,400,401,402,403,404,405,406,407,408,409,410,411,412,413,414,415,416,417,418,419,420,421,422,423,424,425,426,427,428,429,430,431,432,433,434,435,436,437,438,439],{1190:function(e,t,n){"use strict";var a=n(5);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(17)),o=a(n(34)),l=a(n(0)),i=a(n(2)),s=a(n(4)),p=a(n(1191)),c=s.default.bind(p.default),u={content:i.default.element,extensions:i.default.element,footer:i.default.element,header:i.default.element},d=function(e){var t,n,a,i,s=e.content,p=e.extensions,u=e.footer,d=e.header,m=(0,o.default)(e,["content","extensions","footer","header"]),f=c(["menu","fill",m.className]);return d&&(t=l.default.createElement("div",{className:c(["fit","header"])},d)),s&&(n=l.default.createElement("div",{className:c(["fill","content"])},l.default.createElement("div",{className:c("normalizer")},s))),p&&(a=l.default.createElement("div",{className:c(["fit","widget"])},p)),u&&(i=l.default.createElement("div",{className:c(["fit","footer"])},u)),l.default.createElement("div",(0,r.default)({},m,{className:f}),t,l.default.createElement("div",{className:c(["fill","body"])},a,n),i)};d.propTypes=u;var m=d;t.default=m},1191:function(e,t,n){e.exports={fit:"ApplicationMenuLayout-module__fit___2kplH",fill:"ApplicationMenuLayout-module__fill___1i_jC",menu:"ApplicationMenuLayout-module__menu___1Qj1C",header:"ApplicationMenuLayout-module__header___3dc86",footer:"ApplicationMenuLayout-module__footer___2JZDd",body:"ApplicationMenuLayout-module__body___2kmng",widgets:"ApplicationMenuLayout-module__widgets___2Ruea",content:"ApplicationMenuLayout-module__content___9sthv",normalizer:"ApplicationMenuLayout-module__normalizer___3H3kw"}},1862:function(e){e.exports=JSON.parse('{"_from":"terra-application-menu-layout@^3.0.0","_id":"terra-application-menu-layout@3.10.0","_inBundle":false,"_integrity":"sha512-cTeeYMY1dmXGaBxEeJBVXNqBt4RV8BprFy7OU8jwtV3v+onvpnzoSbcgbSaHLiMP/un8FBeBPyUnp8mCG/IRlw==","_location":"/terra-application-menu-layout","_phantomChildren":{},"_requested":{"type":"range","registry":true,"raw":"terra-application-menu-layout@^3.0.0","name":"terra-application-menu-layout","escapedName":"terra-application-menu-layout","rawSpec":"^3.0.0","saveSpec":null,"fetchSpec":"^3.0.0"},"_requiredBy":["/","/terra-application-layout"],"_resolved":"https://registry.npmjs.org/terra-application-menu-layout/-/terra-application-menu-layout-3.10.0.tgz","_shasum":"334bae249829848a9bbcfff0f12eefd43f0b9e51","_spec":"terra-application-menu-layout@^3.0.0","_where":"/home/travis/build/cerner/terra-ui","author":{"name":"Cerner Corporation"},"bugs":{"url":"https://github.com/cerner/terra-framework/issues"},"bundleDependencies":false,"dependencies":{"classnames":"^2.2.5","prop-types":"^15.5.8"},"deprecated":false,"description":"This component renders an application menu layout. To be used with a terra-layout or terra-navigation-layout.","devDependencies":{"terra-doc-template":"^2.2.0"},"gitHead":"f763d8f2d030d85d834554d5c2eca6f2917f2eac","homepage":"https://github.com/cerner/terra-framework#readme","keywords":["Cerner","Terra","Framework","terra-application-menu-layout","Application","Menu","Layout","UI"],"license":"Apache-2.0","main":"lib/ApplicationMenuLayout.js","name":"terra-application-menu-layout","peerDependencies":{"react":"^16.8.5","react-dom":"^16.8.5"},"repository":{"type":"git","url":"git+https://github.com/cerner/terra-framework.git"},"scripts":{"compile":"babel --root-mode upward src --out-dir lib --copy-files","lint":"npm run lint:js && npm run lint:scss","lint:js":"eslint --ext .js,.jsx . --ignore-path ../../.eslintignore","lint:scss":"stylelint src/**/*.scss","precompile":"rm -rf lib","test":"npm run test:jest && npm run test:wdio","test:jest":"jest --config ../../jestconfig.js","test:wdio":"../../node_modules/.bin/wdio ../../node_modules/terra-dev-site/config/wdio/wdio.conf.js"},"version":"3.10.0"}')},1863:function(e,t,n){"use strict";n.r(t),t.default="# Terra Application Menu Layout\n\nThis component renders an application menu layout. To be used with terra-layout or terra-navigation-layout.\n\n## Getting Started\n\n- Install with [npmjs](https://www.npmjs.com):\n  - `npm install terra-application-menu-layout`\n\n\x3c!-- AUTO-GENERATED-CONTENT:START Peer Dependencies --\x3e\n## Peer Dependencies\n\n<details>\n<summary>View information on this component's peer dependencies.</summary>\n\nThis component requires the following peer dependencies be installed in your app for the component to properly function.\n\n| Peer Dependency | Version |\n|-|-|\n| react | ^16.8.5 |\n| react-dom | ^16.8.5 |\n\n\n</details>\n\x3c!-- AUTO-GENERATED-CONTENT:END --\x3e\n\n## Component Features\n* [Cross-Browser Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#cross-browser-support)\n* [Responsive Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#responsive-support)\n* [Mobile Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#mobile-support)\n"},1864:function(e,t,n){"use strict";n.r(t),t.default="import React from 'react';\nimport PropTypes from 'prop-types';\nimport classNames from 'classnames/bind';\n\nimport styles from './ApplicationMenuLayout.module.scss';\n\nconst cx = classNames.bind(styles);\n\nconst propTypes = {\n  /**\n   * Content element to be placed within the fill area of the header.\n   * */\n  content: PropTypes.element,\n  /**\n   * Extensions element to be placed before the end of the header.\n   * */\n  extensions: PropTypes.element,\n  /**\n   * Footer element to be placed at the end of the header.\n   * */\n  footer: PropTypes.element,\n  /**\n   * Header element to be placed at the start of the header.\n   * */\n  header: PropTypes.element,\n};\n\nconst ApplicationMenuLayout = ({\n  content,\n  extensions,\n  footer,\n  header,\n  ...customProps\n}) => {\n  const menuClassNames = cx([\n    'menu',\n    'fill',\n    customProps.className,\n  ]);\n\n  let headerElement;\n  if (header) {\n    headerElement = <div className={cx(['fit', 'header'])}>{header}</div>;\n  }\n\n  let contentElement;\n  if (content) {\n    contentElement = <div className={cx(['fill', 'content'])}><div className={cx('normalizer')}>{content}</div></div>;\n  }\n\n  let extensionsElement;\n  if (extensions) {\n    extensionsElement = <div className={cx(['fit', 'widget'])}>{extensions}</div>;\n  }\n\n  let footerElement;\n  if (footer) {\n    footerElement = <div className={cx(['fit', 'footer'])}>{footer}</div>;\n  }\n\n  return (\n    <div {...customProps} className={menuClassNames}>\n      {headerElement}\n      <div className={cx(['fill', 'body'])}>\n        {extensionsElement}\n        {contentElement}\n      </div>\n      {footerElement}\n    </div>\n  );\n};\n\nApplicationMenuLayout.propTypes = propTypes;\n\nexport default ApplicationMenuLayout;\n"},1865:function(e,t,n){"use strict";var a=n(5);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(0)),o=a(n(4)),l=a(n(1190)),i=a(n(1866)),s=a(n(1868)),p=o.default.bind(s.default),c=function(){return r.default.createElement("div",{className:p("content-wrapper")},r.default.createElement(l.default,{header:r.default.createElement(i.default,{text:"Header",type:"header"}),footer:r.default.createElement(i.default,{text:"Footer",type:"footer"}),extensions:r.default.createElement(i.default,{text:"Extensions",type:"extensions"}),content:r.default.createElement(i.default,{text:"Content"})}))};t.default=c},1866:function(e,t,n){"use strict";var a=n(5);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(0)),o=a(n(4)),l=a(n(2)),i=a(n(1867)),s=o.default.bind(i.default),p={text:l.default.string,type:l.default.string},c=function(e){var t=e.text,n=e.type;return r.default.createElement("div",{className:s("wrapper1-".concat(n))},r.default.createElement("div",{className:s("wrapper2")},r.default.createElement("div",{className:s("wrapper3")},r.default.createElement("h3",null,t))))};c.propTypes=p,c.defaultProps={text:"PlaceHolder",type:"default"};var u=c;t.default=u},1867:function(e,t,n){e.exports={"wrapper1-default":"Placeholder-module__wrapper1-default___7xA0j","wrapper1-header":"Placeholder-module__wrapper1-header___1Z1yh","wrapper1-footer":"Placeholder-module__wrapper1-footer___36SUH","wrapper1-extensions":"Placeholder-module__wrapper1-extensions___sqDJ2",wrapper2:"Placeholder-module__wrapper2___MNzD5",wrapper3:"Placeholder-module__wrapper3___3wxPA"}},1868:function(e,t,n){e.exports={"content-wrapper":"MenuWireframe-module__content-wrapper___2LbU-"}},1869:function(e,t,n){"use strict";n.r(t),t.default='import React from \'react\';\nimport classNames from \'classnames/bind\';\n/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */\nimport ApplicationMenuLayout from \'terra-application-menu-layout/lib/ApplicationMenuLayout\';\nimport PlaceHolder from \'terra-application-menu-layout/lib/terra-dev-site/doc/common/Placeholder\';\n/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */\nimport styles from \'./MenuWireframe.module.scss\';\n\nconst cx = classNames.bind(styles);\n\nconst Menu = () => (\n  <div className={cx(\'content-wrapper\')}>\n    <ApplicationMenuLayout\n      header={<PlaceHolder text="Header" type="header" />}\n      footer={<PlaceHolder text="Footer" type="footer" />}\n      extensions={<PlaceHolder text="Extensions" type="extensions" />}\n      content={<PlaceHolder text="Content" />}\n    />\n  </div>\n);\n\nexport default Menu;\n'},3588:function(e,t,n){"use strict";var a=n(5);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(0)),o=a(n(911)),l=n(1862),i=a(n(1863)),s=a(n(1864)),p=a(n(1865)),c=a(n(1869)),u=function(){return r.default.createElement(o.default,{packageName:l.name,readme:i.default,srcPath:"https://github.com/cerner/terra-framework/tree/master/packages/".concat(l.name),examples:[{title:"Menu - Wireframe",example:r.default.createElement(p.default,null),source:c.default}],propsTables:[{componentSrc:s.default}]})};t.default=u},912:function(e,t){}}]);
//# sourceMappingURL=122-456840e03f0e0d773f1d.js.map