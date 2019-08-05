(window.webpackJsonp=window.webpackJsonp||[]).push([[98,376,377,378,379,380,381,382,383,384,385,386,387,388,389,390,391,392,393,394,395,396,397,398,399,400,401,402,403,404,405,406,407,408,409,410,411,412,413,414,415,416,417,418,419,420,421,422,423,424,425,426,427,428,429,430,431,432,433,434,435,436,437,438,439],{1203:function(e){e.exports=JSON.parse('{"_from":"terra-clinical-header@^3.0.0","_id":"terra-clinical-header@3.6.0","_inBundle":false,"_integrity":"sha512-j9aqpPRrjV6llOKno5+anoTsbRVHH+34SucCxzR8GCFoQh/ktuPfZhNeYCpozfwjENGV6VrVfvzXJi7JJJrY0g==","_location":"/terra-clinical-header","_phantomChildren":{},"_requested":{"type":"range","registry":true,"raw":"terra-clinical-header@^3.0.0","name":"terra-clinical-header","escapedName":"terra-clinical-header","rawSpec":"^3.0.0","saveSpec":null,"fetchSpec":"^3.0.0"},"_requiredBy":["/"],"_resolved":"https://registry.npmjs.org/terra-clinical-header/-/terra-clinical-header-3.6.0.tgz","_shasum":"78779874272e1298f4480c5e34aac48d1938284c","_spec":"terra-clinical-header@^3.0.0","_where":"/home/travis/build/cerner/terra-ui","author":{"name":"Cerner Corporation"},"bugs":{"url":"https://github.com/cerner/terra-clinical/issues"},"bundleDependencies":false,"dependencies":{"classnames":"^2.2.5","prop-types":"^15.5.8","terra-button":"^3.0.0","terra-doc-template":"^2.0.0"},"deprecated":false,"description":"A Header component that allows elements to be placed on the left and right ends of the header with a left aligned title in the center. ","homepage":"https://github.com/cerner/terra-clinical#readme","keywords":["Cerner","Terra","Clinical","terra-clinical-header","Header","UI"],"license":"Apache-2.0","main":"lib/Header.js","name":"terra-clinical-header","peerDependencies":{"react":"^16.8.5","react-dom":"^16.8.5"},"repository":{"type":"git","url":"git+https://github.com/cerner/terra-clinical.git"},"scripts":{"compile":"babel --root-mode upward src --out-dir lib --copy-files","lint":"npm run lint:js && npm run lint:scss","lint:js":"eslint --ext .js,.jsx . --ignore-path ../../.eslintignore","lint:scss":"stylelint src/**/*.scss","precompile":"rm -rf lib","test":"npm run test:jest && npm run test:wdio","test:jest":"jest --config ../../jestconfig.js","test:wdio":"../../node_modules/.bin/wdio ../../node_modules/terra-dev-site/config/wdio/wdio.conf.js"},"version":"3.6.0"}')},1204:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(n(0)),a=o(n(2)),l=o(n(4)),i=o(n(2106));function o(e){return e&&e.__esModule?e:{default:e}}function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function d(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=l.default.bind(i.default),c={children:a.default.element,startContent:a.default.element,title:a.default.string,endContent:a.default.element,isSubheader:a.default.bool},m=function(e){var t,n,a,l,i=e.children,o=e.title,c=e.startContent,m=e.endContent,f=e.isSubheader,p=d(e,["children","title","startContent","endContent","isSubheader"]);if(c&&(t=r.default.createElement("div",{className:u("flex-end")},c)),o&&(n=r.default.createElement("div",{className:u("title-container")},r.default.createElement("h1",{className:u("title")},o))),m&&(a=r.default.createElement("div",{className:u("flex-end")},m)),i){var h=u(["flex-collapse",i.props.className]);l=r.default.cloneElement(i,{className:h})}var b=f?"flex-subheader":"flex-header";return r.default.createElement("header",s({},p,{className:u(b,p.className)}),t,r.default.createElement("div",{className:u("flex-fill")},n),l,a)};m.propTypes=c,m.defaultProps={title:"",startContent:null,endContent:null,isSubheader:!1};var f=m;t.default=f},1324:function(e,t,n){e.exports={"header-button":"ContentHeader-module__header-button___30_he"}},2103:function(e,t,n){"use strict";n.r(t),t.default="# Terra Clinical Header\n\nA Header component that allows elements to be placed on the left and right ends of the header with a left aligned title in the center.\n\n## Getting Started\n\n- Install with [npmjs](https://www.npmjs.com):\n  - `npm install terra-clinical-header`\n\n## Component Features\n* [Cross-Browser Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#cross-browser-support)\n* [Responsive Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#responsive-support)\n* [Mobile Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#mobile-support)\n"},2104:function(e,t,n){"use strict";n.r(t),t.default="import React from 'react';\nimport PropTypes from 'prop-types';\nimport classNames from 'classnames/bind';\nimport styles from './Header.scss';\n\nconst cx = classNames.bind(styles);\n\nconst propTypes = {\n  /**\n   * Child element to be displayed on the right end of the header.\n   * The element passed as children will be decorated with flex attributes.\n   */\n  children: PropTypes.element,\n\n  /**\n   * Content to be displayed at the start of the header, placed before the title\n   */\n  startContent: PropTypes.element,\n\n  /**\n   * Text to be displayed as the title in the header bar\n   */\n  title: PropTypes.string,\n\n  /**\n   * Content to be displayed at the end of the header\n   * The element passed as endContent will be wrapped in a div with flex attributes.\n   */\n  endContent: PropTypes.element,\n\n  /**\n   * A Boolean indicating if element is a subheader.\n   */\n  isSubheader: PropTypes.bool,\n};\n\nconst defaultProps = {\n  title: '',\n  startContent: null,\n  endContent: null,\n  isSubheader: false,\n};\n\nconst Header = ({\n  children, title, startContent, endContent, isSubheader, ...customProps\n}) => {\n  let startElement;\n  if (startContent) {\n    startElement = <div className={cx('flex-end')}>{startContent}</div>;\n  }\n\n  let titleElement;\n  if (title) {\n    titleElement = (\n      <div className={cx('title-container')}>\n        <h1 className={cx('title')}>\n          {title}\n        </h1>\n      </div>\n    );\n  }\n\n  let endElement;\n  if (endContent) {\n    endElement = <div className={cx('flex-end')}>{endContent}</div>;\n  }\n\n  let childElement;\n  if (children) {\n    const childClassNames = cx([\n      'flex-collapse',\n      children.props.className,\n    ]);\n    childElement = React.cloneElement(children, { className: childClassNames });\n  }\n\n  const headerClass = isSubheader ? 'flex-subheader' : 'flex-header';\n\n  return (\n    <header {...customProps} className={cx(headerClass, customProps.className)}>\n      {startElement}\n      <div className={cx('flex-fill')}>\n        {titleElement}\n      </div>\n      {childElement}\n      {endElement}\n    </header>\n  );\n};\n\nHeader.propTypes = propTypes;\nHeader.defaultProps = defaultProps;\n\nexport default Header;\n"},2105:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(n(0)),a=l(n(1204));function l(e){return e&&e.__esModule?e:{default:e}}var i=function(){return r.default.createElement(a.default,{title:"Default Header"})};t.default=i},2106:function(e,t,n){e.exports={"flex-header":"Header__flex-header___31sRw","flex-collapse":"Header__flex-collapse___2us5j","flex-fill":"Header__flex-fill___3x83B","flex-end":"Header__flex-end___1P6U4","title-container":"Header__title-container___3vCMY",title:"Header__title___3rbMt","flex-subheader":"Header__flex-subheader___kJd4x"}},2107:function(e,t,n){"use strict";n.r(t),t.default="import React from 'react';\n// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions\nimport Header from 'terra-clinical-header/lib/Header';\n\nconst TitleHeader = () => (\n  <Header title=\"Default Header\" />\n);\n\nexport default TitleHeader;\n"},2108:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=s(n(0)),a=s(n(61)),l=s(n(1204)),i=s(n(4)),o=s(n(1324));function s(e){return e&&e.__esModule?e:{default:e}}var d=i.default.bind(o.default),u=function(){return r.default.createElement("div",null,r.default.createElement(l.default,{startContent:r.default.createElement("div",null,r.default.createElement(a.default,{text:"Button",className:d("header-button")})),title:"Default Header",endContent:r.default.createElement("div",null,r.default.createElement(a.default,{text:"Button",className:d("header-button")}))}))};t.default=u},2109:function(e,t,n){"use strict";n.r(t),t.default="import React from 'react';\nimport Button from 'terra-button';\n// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions\nimport Header from 'terra-clinical-header/lib/Header';\nimport classNames from 'classnames/bind';\nimport styles from './ContentHeader.module.scss';\n\nconst cx = classNames.bind(styles);\n\nconst TitleHeader = () => (\n  <div>\n    <Header\n      startContent={<div><Button text=\"Button\" className={cx('header-button')} /></div>}\n      title=\"Default Header\"\n      endContent={<div><Button text=\"Button\" className={cx('header-button')} /></div>}\n    />\n  </div>\n);\n\nexport default TitleHeader;\n"},2110:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(n(0)),a=l(n(1204));function l(e){return e&&e.__esModule?e:{default:e}}var i=function(){return r.default.createElement("div",null,r.default.createElement(a.default,{title:"Lorem ipsum dolor sit amet, sea meis iisque petentium an. Vero copiosae eu eos. Usu ocurreret definiebas eu, vim esse duis habemus at, vix at alii ubique. Nobis meliore principes te cum. Ei quando eirmod oportere eum, ei nonumy eruditi eum. In qui odio euripidis, habeo mundi praesent vim et."}))};t.default=i},2111:function(e,t,n){"use strict";n.r(t),t.default="import React from 'react';\n// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions\nimport Header from 'terra-clinical-header/lib/Header';\n\nconst LongTextWithButtons = () => (\n  <div>\n    <Header\n      title=\"Lorem ipsum dolor sit amet, sea meis iisque petentium an. Vero copiosae eu eos. Usu ocurreret definiebas eu, vim esse duis habemus at, vix at alii ubique. Nobis meliore principes te cum. Ei quando eirmod oportere eum, ei nonumy eruditi eum. In qui odio euripidis, habeo mundi praesent vim et.\"\n    />\n  </div>\n);\n\nexport default LongTextWithButtons;\n"},2112:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=s(n(0)),a=s(n(61)),l=s(n(1204)),i=s(n(4)),o=s(n(1324));function s(e){return e&&e.__esModule?e:{default:e}}var d=i.default.bind(o.default),u=function(){return r.default.createElement("div",null,r.default.createElement(l.default,{startContent:r.default.createElement("div",null,r.default.createElement(a.default,{text:"Button",className:d("header-button")})),title:"Lorem ipsum dolor sit amet, sea meis iisque petentium an. Vero copiosae eu eos. Usu ocurreret definiebas eu, vim esse duis habemus at, vix at alii ubique. Nobis meliore principes te cum. Ei quando eirmod oportere eum, ei nonumy eruditi eum. In qui odio euripidis, habeo mundi praesent vim et.",endContent:r.default.createElement("div",null,r.default.createElement(a.default,{text:"Button",className:d("header-button")}))},r.default.createElement(a.default,{text:"Custom 1"})))};t.default=u},2113:function(e,t,n){"use strict";n.r(t),t.default="import React from 'react';\nimport Button from 'terra-button';\n// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions\nimport Header from 'terra-clinical-header/lib/Header';\nimport classNames from 'classnames/bind';\nimport styles from './ContentHeader.module.scss';\n\nconst cx = classNames.bind(styles);\n\nconst LongTextWithContent = () => (\n  <div>\n    <Header\n      startContent={<div><Button text=\"Button\" className={cx('header-button')} /></div>}\n      title=\"Lorem ipsum dolor sit amet, sea meis iisque petentium an. Vero copiosae eu eos. Usu ocurreret definiebas eu, vim esse duis habemus at, vix at alii ubique. Nobis meliore principes te cum. Ei quando eirmod oportere eum, ei nonumy eruditi eum. In qui odio euripidis, habeo mundi praesent vim et.\"\n      endContent={<div><Button text=\"Button\" className={cx('header-button')} /></div>}\n    >\n      <Button text=\"Custom 1\" />\n    </Header>\n  </div>\n);\n\nexport default LongTextWithContent;\n"},2114:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=s(n(0)),a=s(n(61)),l=s(n(1204)),i=s(n(4)),o=s(n(1324));function s(e){return e&&e.__esModule?e:{default:e}}var d=i.default.bind(o.default),u=function(){return r.default.createElement("div",null,r.default.createElement(l.default,{startContent:r.default.createElement("div",null,r.default.createElement(a.default,{text:"Button",className:d("header-button")})),title:"Default Subheader",endContent:r.default.createElement("div",null,r.default.createElement(a.default,{text:"Button",className:d("header-button")})),isSubheader:!0}))};t.default=u},2115:function(e,t,n){"use strict";n.r(t),t.default="import React from 'react';\nimport Button from 'terra-button';\n// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions\nimport Header from 'terra-clinical-header/lib/Header';\nimport classNames from 'classnames/bind';\nimport styles from './ContentHeader.module.scss';\n\nconst cx = classNames.bind(styles);\n\nconst Subheader = () => (\n  <div>\n    <Header\n      startContent={<div><Button text=\"Button\" className={cx('header-button')} /></div>}\n      title=\"Default Subheader\"\n      endContent={<div><Button text=\"Button\" className={cx('header-button')} /></div>}\n      isSubheader\n    />\n  </div>\n);\n\nexport default Subheader;\n"},3641:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=x(n(0)),a=x(n(911)),l=x(n(2103)),i=n(1203),o=x(n(2104)),s=x(n(2105)),d=x(n(2107)),u=x(n(2108)),c=x(n(2109)),m=x(n(2110)),f=x(n(2111)),p=x(n(2112)),h=x(n(2113)),b=x(n(2114)),v=x(n(2115));function x(e){return e&&e.__esModule?e:{default:e}}var _=function(){return r.default.createElement(a.default,{packageName:i.name,readme:l.default,srcPath:"https://github.com/cerner/terra-clinical/tree/master/packages/".concat(i.name),examples:[{title:"Header With Title Only",example:r.default.createElement(s.default,null),source:d.default},{title:"Header With Content",example:r.default.createElement(u.default,null),source:c.default},{title:"Header With Long Title",example:r.default.createElement(m.default,null),source:f.default},{title:"Header With Long Title, Children, And Content",example:r.default.createElement(p.default,null),source:h.default},{title:"Subheader with content",example:r.default.createElement(b.default,null),source:v.default}],propsTables:[{componentName:"Header",componentSrc:o.default}]})};t.default=_},912:function(e,t){}}]);
//# sourceMappingURL=98-b316188b8999d9dea139.js.map