(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{1070:function(e,t,i){e.exports={"item-display":"ItemDisplay__item-display___147d4",text:"ItemDisplay__text___31JJn",icon:"ItemDisplay__icon___1PHtS","icon-center":"ItemDisplay__icon-center___2NGn1","icon-top":"ItemDisplay__icon-top___3Mk49","icon-inline":"ItemDisplay__icon-inline___1_yHF","is-truncated":"ItemDisplay__is-truncated___d21VE","is-disabled":"ItemDisplay__is-disabled___3yAo_",primary:"ItemDisplay__primary___3vCKf",secondary:"ItemDisplay__secondary___3_y9h",attention:"ItemDisplay__attention___1VyOY",strong:"ItemDisplay__strong___2kLI_","strike-through":"ItemDisplay__strike-through___aIkNK"}},1071:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=d(i(0)),l=d(i(2)),n=d(i(4)),r=d(i(935)),s=d(i(919)),o=d(i(1072));function d(e){return e&&e.__esModule?e:{default:e}}function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a])}return e}).apply(this,arguments)}function u(e,t){if(null==e)return{};var i,a,l=function(e,t){if(null==e)return{};var i,a,l={},n=Object.keys(e);for(a=0;a<n.length;a++)i=n[a],t.indexOf(i)>=0||(l[i]=e[i]);return l}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)i=n[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(l[i]=e[i])}return l}var m=n.default.bind(o.default),f={text:l.default.string,isTruncated:l.default.bool},p=function(e){var t=e.text,i=e.isTruncated,l=u(e,["text","isTruncated"]);return a.default.createElement(s.default,c({text:t,isTruncated:i,icon:a.default.createElement(r.default,{className:m("inline-icon")})},l,{className:m("item-comment",l.className)}))};p.propTypes=f,p.defaultProps={text:"",isTruncated:!1};var v=p;t.default=v},1072:function(e,t,i){e.exports={"item-comment":"ItemComment__item-comment___O7zn9","inline-icon":"ItemComment__inline-icon___e-shw"}},1131:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=s(i(0)),l=s(i(2)),n=s(i(4)),r=s(i(1318));function s(e){return e&&e.__esModule?e:{default:e}}function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a])}return e}).apply(this,arguments)}function d(e,t){if(null==e)return{};var i,a,l=function(e,t){if(null==e)return{};var i,a,l={},n=Object.keys(e);for(a=0;a<n.length;a++)i=n[a],t.indexOf(i)>=0||(l[i]=e[i]);return l}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)i=n[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(l[i]=e[i])}return l}var c=n.default.bind(r.default),u={label:l.default.string.isRequired,textValue:l.default.string,children:l.default.node},m={textValue:"",children:void 0},f=function(e){var t,i=e.label,l=e.textValue,n=e.children,r=d(e,["label","textValue","children"]);return l||n?l&&(t=a.default.createElement("div",{className:c("value")},l)):t=a.default.createElement("div",{className:c("value")},"--"),a.default.createElement("div",o({},r,{className:c("label-value-view",r.className)}),a.default.createElement("div",{className:c("label")},i),t,n)};f.propTypes=u,f.defaultProps=m;var p=f;t.default=p},1151:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(i(0)),l=n(i(23));function n(e){return e&&e.__esModule?e:{default:e}}function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a])}return e}).apply(this,arguments)}var s=function(e){var t=r({},e);return a.default.createElement(l.default,t,a.default.createElement("path",{d:"M48 22.7L37.4 12.1c-1.3-1.3-3.6-1.3-4.9 0l-3.8 3.8 2.1 2.1 3.8-3.8c.1-.1.3-.1.4-.1s.2 0 .4.1L43 22c-1.2-.6-2.8-1-4.8-1-6.7 0-9.7 1.4-10.9 3.8-1-.4-2.2-.7-3.3-.7s-2.3.2-3.3.7C19.5 22.4 16.5 21 9.8 21c-2 0-3.6.3-4.8 1l7.7-7.7c.2-.2.5-.2.7 0l3.8 3.8 2.1-2.1-3.8-3.8c-1.4-1.4-3.6-1.4-4.9 0L0 22.7V26l1.7 1.7v.8c0 4.8 4.8 8.3 9.8 8.3 5 0 9.8-3.5 9.8-8.3v-.8c.8-.4 1.7-.6 2.7-.6s1.9.2 2.7.6v.8c0 4.8 4.8 8.3 9.8 8.3 5 0 9.8-3.5 9.8-8.3v-.8L48 26v-3.3zM11.5 34.2c-3.4 0-7.1-2.3-7.1-5.6 0-3.2.9-4.9 5.4-4.9 8.8 0 8.8 2.3 8.8 4.9 0 3.3-3.7 5.6-7.1 5.6zm25 0c-3.4 0-7.1-2.3-7.1-5.6 0-2.6 0-4.9 8.8-4.9 3.5 0 5.4.8 5.4 4.9 0 3.3-3.8 5.6-7.1 5.6z"}))};s.displayName="IconGlasses",s.defaultProps={viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg"};var o=s;t.default=o},1200:function(e){e.exports=JSON.parse('{"_from":"terra-clinical-detail-view@^3.0.0","_id":"terra-clinical-detail-view@3.6.0","_inBundle":false,"_integrity":"sha512-eo4BvLL9uWRSUi5T7XGGgJh4hb8zTVJTqOXaLgp5CLkhzv17+KgLZFT0bko3mWiUeSUhhks02FUpcvsjknqHXg==","_location":"/terra-clinical-detail-view","_phantomChildren":{},"_requested":{"type":"range","registry":true,"raw":"terra-clinical-detail-view@^3.0.0","name":"terra-clinical-detail-view","escapedName":"terra-clinical-detail-view","rawSpec":"^3.0.0","saveSpec":null,"fetchSpec":"^3.0.0"},"_requiredBy":["/"],"_resolved":"https://registry.npmjs.org/terra-clinical-detail-view/-/terra-clinical-detail-view-3.6.0.tgz","_shasum":"e8467772f9d4b9e9ff3dc68c6efa9115b44f5c04","_spec":"terra-clinical-detail-view@^3.0.0","_where":"/home/travis/build/cerner/terra-ui","author":{"name":"Cerner Corporation"},"bugs":{"url":"https://github.com/cerner/terra-clinical/issues"},"bundleDependencies":false,"dependencies":{"classnames":"^2.2.5","prop-types":"^15.5.8","terra-clinical-item-display":"^3.5.0","terra-clinical-label-value-view":"^3.6.0","terra-doc-template":"^2.0.0","terra-icon":"^3.0.0"},"deprecated":false,"description":"Detail Views allows you to create a view with text at different levels of importance. A detail view can contain a title, subtitles, a graph, a footer and a list of elements that can display information at a more detailed level. A Detail List is a structural subcomponent of Detail View indented to be used within the details prop. A Detail List accepts and arranges DetailListItem elements in a flexbox layout that wraps the list of items by row. Detail List Items are the elements to be placed within a Detail List. A Detail List Item accepts one element item and applies a minimum width of 50% so that the element spans at minimum half of the Detail List. This allows the Detail List to have either one or two items per row depending on the width of the item content in each item.","homepage":"https://github.com/cerner/terra-clinical#readme","keywords":["Cerner","Terra","terra-clinical-detail-view","DetailView","UI"],"license":"Apache-2.0","main":"lib/DetailView.js","name":"terra-clinical-detail-view","peerDependencies":{"react":"^16.8.5","react-dom":"^16.8.5"},"repository":{"type":"git","url":"git+https://github.com/cerner/terra-clinical.git"},"scripts":{"compile":"babel --root-mode upward src --out-dir lib --copy-files","lint":"npm run lint:js && npm run lint:scss","lint:js":"eslint --ext .js,.jsx . --ignore-path ../../.eslintignore","lint:scss":"stylelint src/**/*.scss","precompile":"rm -rf lib","test":"npm run test:jest && npm run test:wdio","test:jest":"jest --config ../../jestconfig.js","test:wdio":"../../node_modules/.bin/wdio ../../node_modules/terra-dev-site/config/wdio/wdio.conf.js"},"version":"3.6.0"}')},1201:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=s(i(0)),l=s(i(4)),n=s(i(23)),r=s(i(1202));function s(e){return e&&e.__esModule?e:{default:e}}function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a])}return e}).apply(this,arguments)}var d=l.default.bind(r.default),c=function(e){var t=o({},e),i=d(["IconCritical",e.className]);return a.default.createElement(n.default,o({className:i},t),a.default.createElement("path",{fill:"#E50000",d:"M47.7 23.2L24.8.3c-.4-.4-1.1-.4-1.6 0L.3 23.2c-.4.4-.4 1.1 0 1.6l22.9 22.9c.4.4 1.1.4 1.6 0l22.9-22.9c.4-.4.4-1.2 0-1.6z"}),a.default.createElement("path",{fill:"#FFF",d:"M27 39h-6v-6h6v6zm0-11h-6V8h6v20z"}))};c.displayName="IconCritical",c.defaultProps={viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg"};var u=c;t.default=u},1202:function(e,t,i){e.exports={IconCritical:"IconCritical-module__IconCritical___1b2V4"}},1318:function(e,t,i){e.exports={"label-value-view":"LabelValueView__label-value-view___GzCt0",label:"LabelValueView__label___1CjvH",value:"LabelValueView__value___3Fgm9"}},1319:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=d(i(0)),l=d(i(2)),n=d(i(4)),r=d(i(2092)),s=d(i(2093)),o=d(i(1473));function d(e){return e&&e.__esModule?e:{default:e}}function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a])}return e}).apply(this,arguments)}function u(e,t){if(null==e)return{};var i,a,l=function(e,t){if(null==e)return{};var i,a,l={},n=Object.keys(e);for(a=0;a<n.length;a++)i=n[a],t.indexOf(i)>=0||(l[i]=e[i]);return l}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)i=n[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(l[i]=e[i])}return l}var m=n.default.bind(r.default),f={title:l.default.string,secondaryTitles:l.default.arrayOf(l.default.string),subtitles:l.default.arrayOf(l.default.string),accessory:l.default.element,graph:l.default.element,details:l.default.arrayOf(l.default.element),footer:l.default.string,isDivided:l.default.bool,isSmallerTitles:l.default.bool},p={title:void 0,secondaryTitles:[],subtitles:[],graph:void 0,accessory:void 0,details:[],footer:void 0,isDivided:!0,isSmallerTitles:!1},v=function(e){var t=e.title,i=e.secondaryTitles,l=e.subtitles,n=e.accessory,r=e.graph,s=e.details,o=e.footer,d=e.isDivided,f=e.isSmallerTitles,p=c({},u(e,["title","secondaryTitles","subtitles","accessory","graph","details","footer","isDivided","isSmallerTitles"]));p.className=m(["detail-view",p.className]);var v=t?a.default.createElement("h1",{className:m("primary-text")},t):null,y=i.map(function(e,t){return a.default.createElement("div",{className:m("secondary-text"),key:"".concat(t)},e)}),b=l.map(function(e,t){return a.default.createElement("div",{className:m("subtitle"),key:"".concat(t)},e)}),D=n?a.default.createElement("div",{className:m("accessory")},n):null,h=o?a.default.createElement("div",{className:m("footer-text")},o):null,w=null,_=[];if(d){w=a.default.createElement("hr",{className:m("divider")});for(var g=0;g<s.length;g+=1)_.push(s[g]),_.push(w)}else _=s;return a.default.createElement("div",p,a.default.createElement("div",{className:m("titles-section",{"titles-smaller":f})},v,y,b,D),r&&w,r,w,_,h)};v.propTypes=f,v.defaultProps=p,v.DetailList=s.default,v.DetailListItem=o.default;var y=v;t.default=y},1320:function(e,t,i){e.exports={"detail-view-divided":"DetailViewDivided-module__detail-view-divided___3EC0T"}},1321:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(i(0)),l=n(i(23));function n(e){return e&&e.__esModule?e:{default:e}}function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a])}return e}).apply(this,arguments)}var s=function(e){var t=r({},e);return a.default.createElement(l.default,t,a.default.createElement("path",{d:"M.6 7.2c-.8-.8-.8-2.1 0-2.9L2 3c.8-.8 2-.8 2.8 0l15 15h-8.5L.6 7.2zM48 21v10c0 8.3-6.7 15-15 15h-8c-8.3 0-15-6.7-15-15V21h38zM35 31h-4v-4h-4v4h-4v4h4v4h4v-4h4v-4z"}))};s.displayName="IconPharmacyReview",s.defaultProps={viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg"};var o=s;t.default=o},1322:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=s(i(0)),l=s(i(4)),n=s(i(23)),r=s(i(1323));function s(e){return e&&e.__esModule?e:{default:e}}function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a])}return e}).apply(this,arguments)}var d=l.default.bind(r.default),c=function(e){var t=o({},e),i=d(["IconPharmacyReject",e.className]);return a.default.createElement(n.default,o({className:i},t),a.default.createElement("path",{fill:"#E50000",d:"M36 22c-6.6 0-12 5.4-12 12s5.4 12 12 12 12-5.4 12-12-5.4-12-12-12zm-9 12c0-5 4-9 9-9 1.9 0 3.7.6 5.2 1.7L28.7 39.2C27.6 37.7 27 35.9 27 34zm9 9c-1.9 0-3.7-.6-5.2-1.7l12.5-12.5c1 1.5 1.7 3.3 1.7 5.2 0 5-4 9-9 9z"}),a.default.createElement("path",{d:"M.4 4.5c-.6-.6-.6-1.6 0-2.2l1.1-1.1c.6-.6 1.6-.6 2.2 0L15 12.6H8.6L.4 4.5zm22 29.3c0-3.2 1.1-6.1 2.9-8.4H23v3h-3v-3h-3v-3h3v-3h3v3h3v2.2c2.5-2.6 6-4.3 9.9-4.3V15H7.1v7.6c0 6.3 5.1 11.4 11.4 11.4h3.9v-.2z"}))};c.displayName="IconPharmacyReject",c.defaultProps={viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg"};var u=c;t.default=u},1323:function(e,t,i){e.exports={IconPharmacyReject:"IconPharmacyReject-module__IconPharmacyReject___5M0hm"}},1473:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=s(i(0)),l=s(i(2)),n=s(i(4)),r=s(i(2095));function s(e){return e&&e.__esModule?e:{default:e}}function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a])}return e}).apply(this,arguments)}function d(e,t){if(null==e)return{};var i,a,l=function(e,t){if(null==e)return{};var i,a,l={},n=Object.keys(e);for(a=0;a<n.length;a++)i=n[a],t.indexOf(i)>=0||(l[i]=e[i]);return l}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)i=n[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(l[i]=e[i])}return l}var c=n.default.bind(r.default),u={item:l.default.element.isRequired},m=function(e){var t=e.item,i=d(e,["item"]),l=c(["detail-list-item",i.className]);return a.default.createElement("div",o({},i,{className:l}),t)};m.propTypes=u,m.defaultProps={};var f=m;t.default=f},2087:function(e,t,i){"use strict";i.r(t),t.default="# Terra Clinical DetailView\n\nDetail Views allows you to create a view with text at different levels of importance. A detail view can contain a title, subtitles, a graph, a footer and a list of elements that can display information at a more detailed level.\n\nA Detail List is a structural subcomponent of Detail View indented to be used within the details prop. A Detail List accepts and arranges DetailListItem elements in a flexbox layout that wraps the list of items by row.\n\nDetail List Items are the elements to be placed within a Detail List. A Detail List Item accepts one element item and applies a minimum width of 50% so that the element spans at minimum half of the Detail List. This allows the Detail List to have either one or two items per row depending on the width of the item content in each item.\n\n## Getting Started\n\n- Install with [npmjs](https://www.npmjs.com):\n  - `npm install terra-clinical-detail-view`\n\n## Component Features\n* [Cross-Browser Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#cross-browser-support)\n* [Responsive Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#responsive-support)\n* [Mobile Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#mobile-support)\n"},2088:function(e,t,i){"use strict";i.r(t),t.default="import React from 'react';\nimport PropTypes from 'prop-types';\nimport classNames from 'classnames/bind';\nimport styles from './DetailView.scss';\nimport DetailList from './DetailList';\nimport DetailListItem from './DetailListItem';\n\nconst cx = classNames.bind(styles);\n\nconst propTypes = {\n  /**\n   * The primary title to display.\n   */\n  title: PropTypes.string,\n\n  /**\n   * Additional list of title strings to display.\n   */\n  secondaryTitles: PropTypes.arrayOf(PropTypes.string),\n\n  /**\n   * List of subtitle strings.\n   */\n  subtitles: PropTypes.arrayOf(PropTypes.string),\n\n  /**\n   * Display for minor supporting information like Status, Progress, or anything additional.\n   */\n  accessory: PropTypes.element,\n\n  /**\n   * Display for visualization of data.\n   */\n  graph: PropTypes.element,\n\n  /**\n   * Array of elements to display information in the body of the detail view.\n   */\n  details: PropTypes.arrayOf(PropTypes.element),\n\n  /**\n   * Text to be displayed at the footer of the detail view.\n   */\n  footer: PropTypes.string,\n\n  /**\n   * Indicates if sections should be divided. Is applied by default.\n   */\n  isDivided: PropTypes.bool,\n\n  /**\n   * Sets title sizes to be smaller than default sizes, good for longer titles like medication names.\n   */\n  isSmallerTitles: PropTypes.bool,\n};\n\nconst defaultProps = {\n  title: undefined,\n  secondaryTitles: [],\n  subtitles: [],\n  graph: undefined,\n  accessory: undefined,\n  details: [],\n  footer: undefined,\n  isDivided: true,\n  isSmallerTitles: false,\n};\n\nconst DetailView = (props) => {\n  const {\n    title,\n    secondaryTitles,\n    subtitles,\n    accessory,\n    graph,\n    details,\n    footer,\n    isDivided,\n    isSmallerTitles,\n    ...customProps\n  } = props;\n  const attributes = Object.assign({}, customProps);\n  attributes.className = cx(['detail-view',\n    attributes.className,\n  ]);\n\n  const titleElement = title ? (<h1 className={cx('primary-text')}>{title}</h1>) : null;\n  const secondaryTitlesElements = secondaryTitles.map((secondaryTitle, i) => (\n    // eslint-disable-next-line react/no-array-index-key\n    <div className={cx('secondary-text')} key={`${i}`}>{secondaryTitle}</div>\n  ));\n  const subtitleElements = subtitles.map((subTitle, i) => (\n    // eslint-disable-next-line react/no-array-index-key\n    <div className={cx('subtitle')} key={`${i}`}>{subTitle}</div>\n  ));\n  const accessoryElement = accessory ? (<div className={cx('accessory')}>{accessory}</div>) : null;\n  const footerElement = footer ? (<div className={cx('footer-text')}>{footer}</div>) : null;\n\n  let divider = null;\n  let dividedDetails = [];\n\n  if (isDivided) {\n    divider = (<hr className={cx('divider')} />);\n\n    for (let i = 0; i < details.length; i += 1) {\n      dividedDetails.push(details[i]);\n      dividedDetails.push(divider);\n    }\n  } else {\n    dividedDetails = details;\n  }\n\n  return (\n    <div {...attributes}>\n      <div className={cx('titles-section', { 'titles-smaller': isSmallerTitles })}>\n        {titleElement}\n        {secondaryTitlesElements}\n        {subtitleElements}\n        {accessoryElement}\n      </div>\n      {graph && divider}\n      {graph}\n      {divider}\n      {dividedDetails}\n      {footerElement}\n    </div>\n  );\n};\n\nDetailView.propTypes = propTypes;\nDetailView.defaultProps = defaultProps;\nDetailView.DetailList = DetailList;\nDetailView.DetailListItem = DetailListItem;\n\nexport default DetailView;\n"},2089:function(e,t,i){"use strict";i.r(t),t.default="import React from 'react';\nimport PropTypes from 'prop-types';\nimport classNames from 'classnames/bind';\nimport styles from './DetailList.scss';\nimport DetailListItem from './DetailListItem';\n\nconst cx = classNames.bind(styles);\n\nconst propTypes = {\n  /**\n   * The detail view list title to be displayed above the list item(s).\n   */\n  title: PropTypes.string,\n\n  /**\n   * The detail item(s) to display information. Must be either a\n   * DetailListItem element or array of DetailListItem elements.\n   */\n  children: PropTypes.oneOfType([\n    PropTypes.objectOf(DetailListItem),\n    PropTypes.arrayOf(PropTypes.objectOf(DetailListItem)),\n  ]),\n};\n\nconst defaultProps = {\n  title: undefined,\n  children: undefined,\n};\n\nconst DetailList = ({ title, children, ...customProps }) => {\n  let titleContent;\n  if (title) {\n    titleContent = (<div className={cx('title')}>{title}</div>);\n  }\n\n  return (\n    <div {...customProps} data-terra-clincial-detail-list className={customProps.className}>\n      {titleContent}\n      <div className={cx('list')}>\n        {children}\n      </div>\n    </div>\n  );\n};\n\nDetailList.propTypes = propTypes;\nDetailList.defaultProps = defaultProps;\n\nexport default DetailList;\n"},2090:function(e,t,i){"use strict";i.r(t),t.default="import React from 'react';\nimport PropTypes from 'prop-types';\nimport classNames from 'classnames/bind';\nimport styles from './DetailListItem.scss';\n\nconst cx = classNames.bind(styles);\n\nconst propTypes = {\n  /**\n   * The detail view list item to be displayed.\n   */\n  item: PropTypes.element.isRequired,\n};\n\nconst defaultProps = {\n};\n\nconst DetailListItem = ({ item, ...customProps }) => {\n  const detailListItemClassNames = cx([\n    'detail-list-item',\n    customProps.className,\n  ]);\n\n  return (\n    <div {...customProps} className={detailListItemClassNames}>\n      {item}\n    </div>\n  );\n};\n\nDetailListItem.propTypes = propTypes;\nDetailListItem.defaultProps = defaultProps;\n\nexport default DetailListItem;\n"},2091:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(i(0)),l=o(i(1131)),n=o(i(1319)),r=o(i(4)),s=o(i(1320));function o(e){return e&&e.__esModule?e:{default:e}}var d=r.default.bind(s.default),c=a.default.createElement(l.default,{label:"Age of onset",textValue:"38 years"}),u=a.default.createElement(l.default,{label:"Reviewed",textValue:"07/10/2012 10:00AM"}),m=a.default.createElement(l.default,{label:"Comments",textValue:"--"}),f=a.default.createElement(l.default,{label:"Age of onset",textValue:"--"}),p=a.default.createElement(l.default,{label:"Reviewed",textValue:"07/10/2012 10:00AM"}),v=a.default.createElement(l.default,{label:"Comments",textValue:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. (Hollister MD, David 09/12/2011 11:34:12AM)"}),y=function(){return a.default.createElement("div",{className:d("detail-view-divided")},a.default.createElement(n.default,{title:"Mother",subtitles:["Martha (58 years)","[second line for subtitles]"],details:[a.default.createElement(n.default.DetailList,{title:"Diabetes",key:"order-info-1"},a.default.createElement(n.default.DetailListItem,{item:c}),a.default.createElement(n.default.DetailListItem,{item:u}),a.default.createElement(n.default.DetailListItem,{item:m})),a.default.createElement(n.default.DetailList,{title:"Hypertension",key:"order-info-2"},a.default.createElement(n.default.DetailListItem,{item:f}),a.default.createElement(n.default.DetailListItem,{item:p}),a.default.createElement(n.default.DetailListItem,{item:v}))],footer:"Last Modified by: Hollister MD, David MD at 09/12/2011 11:34:12AM"}))};t.default=y},2092:function(e,t,i){e.exports={"detail-view":"DetailView__detail-view___2qKu8","titles-section":"DetailView__titles-section___2AHof","primary-text":"DetailView__primary-text___1qBWP","secondary-text":"DetailView__secondary-text___2lIOR",subtitle:"DetailView__subtitle___2cUa0",accessory:"DetailView__accessory___3jX9_","titles-smaller":"DetailView__titles-smaller___3g3So","footer-text":"DetailView__footer-text___2YklA",divider:"DetailView__divider___1UZ5p"}},2093:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(i(0)),l=o(i(2)),n=o(i(4)),r=o(i(2094)),s=o(i(1473));function o(e){return e&&e.__esModule?e:{default:e}}function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a])}return e}).apply(this,arguments)}function c(e,t){if(null==e)return{};var i,a,l=function(e,t){if(null==e)return{};var i,a,l={},n=Object.keys(e);for(a=0;a<n.length;a++)i=n[a],t.indexOf(i)>=0||(l[i]=e[i]);return l}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)i=n[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(l[i]=e[i])}return l}var u=n.default.bind(r.default),m={title:l.default.string,children:l.default.oneOfType([l.default.objectOf(s.default),l.default.arrayOf(l.default.objectOf(s.default))])},f={title:void 0,children:void 0},p=function(e){var t,i=e.title,l=e.children,n=c(e,["title","children"]);return i&&(t=a.default.createElement("div",{className:u("title")},i)),a.default.createElement("div",d({},n,{"data-terra-clincial-detail-list":!0,className:n.className}),t,a.default.createElement("div",{className:u("list")},l))};p.propTypes=m,p.defaultProps=f;var v=p;t.default=v},2094:function(e,t,i){e.exports={title:"DetailList__title___23KPa",list:"DetailList__list___36zDd"}},2095:function(e,t,i){e.exports={"detail-list-item":"DetailListItem__detail-list-item___24p7h"}},2096:function(e,t,i){"use strict";i.r(t),t.default='import React from \'react\';\nimport LabelValueView from \'terra-clinical-label-value-view\';\n// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions\nimport DetailView from \'terra-clinical-detail-view/lib/DetailView\';\nimport classNames from \'classnames/bind\';\nimport styles from \'./DetailViewDivided.module.scss\';\n\nconst cx = classNames.bind(styles);\n\nconst detail1title = \'Diabetes\';\nconst detail1item1 = (<LabelValueView label="Age of onset" textValue="38 years" />);\nconst detail1item2 = (<LabelValueView label="Reviewed" textValue="07/10/2012 10:00AM" />);\nconst detail1item3 = (<LabelValueView label="Comments" textValue="--" />);\n\nconst detail2title = \'Hypertension\';\nconst detail2item1 = (<LabelValueView label="Age of onset" textValue="--" />);\nconst detail2item2 = (<LabelValueView label="Reviewed" textValue="07/10/2012 10:00AM" />);\nconst detail2item3 = (<LabelValueView label="Comments" textValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. (Hollister MD, David 09/12/2011 11:34:12AM)" />);\n\n\nconst DetailViewDivided = () => (\n  <div className={cx(\'detail-view-divided\')}>\n    <DetailView\n      title="Mother"\n      subtitles={[\'Martha (58 years)\', \'[second line for subtitles]\']}\n      details={[\n        (\n          <DetailView.DetailList title={detail1title} key="order-info-1">\n            <DetailView.DetailListItem item={detail1item1} />\n            <DetailView.DetailListItem item={detail1item2} />\n            <DetailView.DetailListItem item={detail1item3} />\n          </DetailView.DetailList>\n        ),\n        (\n          <DetailView.DetailList title={detail2title} key="order-info-2">\n            <DetailView.DetailListItem item={detail2item1} />\n            <DetailView.DetailListItem item={detail2item2} />\n            <DetailView.DetailListItem item={detail2item3} />\n          </DetailView.DetailList>\n        ),\n      ]}\n      footer="Last Modified by: Hollister MD, David MD at 09/12/2011 11:34:12AM"\n    />\n  </div>\n);\n\nexport default DetailViewDivided;\n'},2097:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(i(0)),l=o(i(1131)),n=o(i(1319)),r=o(i(4)),s=o(i(1320));function o(e){return e&&e.__esModule?e:{default:e}}var d=r.default.bind(s.default),c=a.default.createElement(l.default,{label:"Start Date",textValue:"12/12/12 00:00AM"}),u=a.default.createElement(l.default,{label:"Stop Date",textValue:"12/12/12 10:00AM"}),m=a.default.createElement(l.default,{label:"Collected By",textValue:"Nuse Collect"}),f=a.default.createElement(l.default,{label:"Priority",textValue:"High"}),p=function(){return a.default.createElement("div",{className:d("detail-view-divided")},a.default.createElement(n.default,{title:"Complete Blood Count Order",subtitles:["Accession","239493849"],details:[a.default.createElement(n.default.DetailList,{title:"Collection Details",key:"order-info-2"},a.default.createElement(n.default.DetailListItem,{item:c}),a.default.createElement(n.default.DetailListItem,{item:u}),a.default.createElement(n.default.DetailListItem,{item:m}),a.default.createElement(n.default.DetailListItem,{item:f}))],isDivided:!1}))};t.default=p},2098:function(e,t,i){"use strict";i.r(t),t.default='import React from \'react\';\nimport LabelValueView from \'terra-clinical-label-value-view\';\n// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions\nimport DetailView from \'terra-clinical-detail-view/lib/DetailView\';\nimport classNames from \'classnames/bind\';\nimport styles from \'./DetailViewDivided.module.scss\';\n\nconst cx = classNames.bind(styles);\n\nconst item1 = (<LabelValueView label="Start Date" textValue="12/12/12 00:00AM" />);\nconst item2 = (<LabelValueView label="Stop Date" textValue="12/12/12 10:00AM" />);\nconst item3 = (<LabelValueView label="Collected By" textValue="Nuse Collect" />);\nconst item4 = (<LabelValueView label="Priority" textValue="High" />);\n\nconst DetailViewDivided = () => (\n  <div className={cx(\'detail-view-divided\')}>\n    <DetailView\n      title="Complete Blood Count Order"\n      subtitles={[\'Accession\', \'239493849\']}\n      details={[\n        (\n          <DetailView.DetailList title="Collection Details" key="order-info-2">\n            <DetailView.DetailListItem item={item1} />\n            <DetailView.DetailListItem item={item2} />\n            <DetailView.DetailListItem item={item3} />\n            <DetailView.DetailListItem item={item4} />\n          </DetailView.DetailList>\n        ),\n      ]}\n      isDivided={false}\n    />\n  </div>\n);\n\nexport default DetailViewDivided;\n'},2099:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=f(i(0)),l=f(i(1131)),n=f(i(919)),r=f(i(1201)),s=f(i(1321)),o=f(i(1322)),d=f(i(1151)),c=f(i(4)),u=f(i(1319)),m=f(i(1320));function f(e){return e&&e.__esModule?e:{default:e}}var p=c.default.bind(m.default),v=a.default.createElement(n.default,{text:"Immediate Priority",icon:a.default.createElement(r.default,null)}),y=a.default.createElement(n.default,{text:"Pharmacy Review",icon:a.default.createElement(s.default,null)}),b=a.default.createElement(n.default,{text:"Nurse Review",icon:a.default.createElement(d.default,null)}),D=a.default.createElement(n.default,{text:"Pharmacy Reject",icon:a.default.createElement(o.default,null)}),h=a.default.createElement(l.default,{label:"Order Comment",textValue:"To be taken after lunch"}),w=a.default.createElement(l.default,{label:"Mar Notes",textValue:"Using the med from last 2 months"}),_=a.default.createElement(l.default,{label:"Special Instructions",textValue:"Never to be taken without eating"}),g=a.default.createElement(l.default,{label:"Admin Notes",textValue:"Try med for 2 more months"}),x=function(){return a.default.createElement("div",{className:p("detail-view-divided")},a.default.createElement(u.default,{title:"Multiple Ingredients",secondaryTitles:["M. V. I. Adult 10 mL = 10 mL","Sodium bicarbonate 8.4% 50 mL","Dextrose 5% in Water 1000 mL"],subtitles:["30 mg, Oral, Start Date/Time: 06/28/17 20:00:00 CDT. Stop Date/Time: 06/28/17 20:00:00 CDT"],accessory:a.default.createElement(n.default,{text:"Ordered"}),details:[a.default.createElement(u.default.DetailList,{title:"Indicators",key:"Indicators"},a.default.createElement(u.default.DetailListItem,{item:v}),a.default.createElement(u.default.DetailListItem,{item:y}),a.default.createElement(u.default.DetailListItem,{item:b}),a.default.createElement(u.default.DetailListItem,{item:D})),a.default.createElement(u.default.DetailList,{title:"Comments",key:"Comments"},a.default.createElement(u.default.DetailListItem,{item:h}),a.default.createElement(u.default.DetailListItem,{item:w}),a.default.createElement(u.default.DetailListItem,{item:_}),a.default.createElement(u.default.DetailListItem,{item:g}))],footer:"Last Modified by: Hollister MD, David MD at 09/12/2011 11:34:12AM",isSmallerTitles:!0}))};t.default=x},2100:function(e,t,i){"use strict";i.r(t),t.default="import React from 'react';\nimport LabelValueView from 'terra-clinical-label-value-view';\nimport ItemDisplay from 'terra-clinical-item-display';\nimport IconCritical from 'terra-icon/lib/icon/IconCritical';\nimport IconPharmacyReview from 'terra-icon/lib/icon/IconPharmacyReview';\nimport IconPharmacyReject from 'terra-icon/lib/icon/IconPharmacyReject';\nimport IconGlasses from 'terra-icon/lib/icon/IconGlasses';\nimport classNames from 'classnames/bind';\n// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions\nimport DetailView from 'terra-clinical-detail-view/lib/DetailView';\nimport styles from './DetailViewDivided.module.scss';\n\nconst cx = classNames.bind(styles);\n\nconst detail1title = 'Indicators';\nconst detail1item1 = (<ItemDisplay text=\"Immediate Priority\" icon={<IconCritical />} />);\nconst detail1item2 = (<ItemDisplay text=\"Pharmacy Review\" icon={<IconPharmacyReview />} />);\nconst detail1item3 = (<ItemDisplay text=\"Nurse Review\" icon={<IconGlasses />} />);\nconst detail1item4 = (<ItemDisplay text=\"Pharmacy Reject\" icon={<IconPharmacyReject />} />);\n\nconst detail2title = 'Comments';\nconst detail2item1 = (<LabelValueView label=\"Order Comment\" textValue=\"To be taken after lunch\" />);\nconst detail2item2 = (<LabelValueView label=\"Mar Notes\" textValue=\"Using the med from last 2 months\" />);\nconst detail2item3 = (<LabelValueView label=\"Special Instructions\" textValue=\"Never to be taken without eating\" />);\nconst detail2item4 = (<LabelValueView label=\"Admin Notes\" textValue=\"Try med for 2 more months\" />);\n\n\nconst DetailViewDivided = () => (\n  <div className={cx('detail-view-divided')}>\n    <DetailView\n      title=\"Multiple Ingredients\"\n      secondaryTitles={['M. V. I. Adult 10 mL = 10 mL', 'Sodium bicarbonate 8.4% 50 mL', 'Dextrose 5% in Water 1000 mL']}\n      subtitles={['30 mg, Oral, Start Date/Time: 06/28/17 20:00:00 CDT. Stop Date/Time: 06/28/17 20:00:00 CDT']}\n      accessory={<ItemDisplay text=\"Ordered\" />}\n      details={[\n        (\n          <DetailView.DetailList title={detail1title} key=\"Indicators\">\n            <DetailView.DetailListItem item={detail1item1} />\n            <DetailView.DetailListItem item={detail1item2} />\n            <DetailView.DetailListItem item={detail1item3} />\n            <DetailView.DetailListItem item={detail1item4} />\n          </DetailView.DetailList>\n        ),\n        (\n          <DetailView.DetailList title={detail2title} key=\"Comments\">\n            <DetailView.DetailListItem item={detail2item1} />\n            <DetailView.DetailListItem item={detail2item2} />\n            <DetailView.DetailListItem item={detail2item3} />\n            <DetailView.DetailListItem item={detail2item4} />\n          </DetailView.DetailList>\n        ),\n      ]}\n      footer=\"Last Modified by: Hollister MD, David MD at 09/12/2011 11:34:12AM\"\n      isSmallerTitles\n    />\n  </div>\n);\n\nexport default DetailViewDivided;\n"},3638:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=y(i(0)),l=y(i(911)),n=y(i(2087)),r=i(1200),s=y(i(2088)),o=y(i(2089)),d=y(i(2090)),c=y(i(2091)),u=y(i(2096)),m=y(i(2097)),f=y(i(2098)),p=y(i(2099)),v=y(i(2100));function y(e){return e&&e.__esModule?e:{default:e}}var b=function(){return a.default.createElement(l.default,{packageName:r.name,readme:n.default,srcPath:"https://github.com/cerner/terra-clinical/tree/master/packages/".concat(r.name),examples:[{title:"Divided Detail View",example:a.default.createElement(c.default,null),source:u.default},{title:"Non-Divided Detail View",example:a.default.createElement(m.default,null),source:f.default},{title:"Divided Detail View with Smaller Titles",example:a.default.createElement(p.default,null),source:v.default}],propsTables:[{componentName:"Detail View",componentSrc:s.default},{componentName:"Detail List",componentSrc:o.default},{componentName:"Detail List Item",componentSrc:d.default}]})};t.default=b},919:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TextStyles=t.default=void 0;var a=o(i(0)),l=o(i(2)),n=o(i(4)),r=o(i(1070)),s=o(i(1071));function o(e){return e&&e.__esModule?e:{default:e}}function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a])}return e}).apply(this,arguments)}function c(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function u(e,t){if(null==e)return{};var i,a,l=function(e,t){if(null==e)return{};var i,a,l={},n=Object.keys(e);for(a=0;a<n.length;a++)i=n[a],t.indexOf(i)>=0||(l[i]=e[i]);return l}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)i=n[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(l[i]=e[i])}return l}var m=n.default.bind(r.default),f={PRIMARY:"primary",SECONDARY:"secondary",ATTENTION:"attention",STRIKETHROUGH:"strikeThrough",STRONG:"strong"};t.TextStyles=f;var p={text:l.default.string,textStyle:l.default.oneOf(Object.values(f)),isTruncated:l.default.bool,isDisabled:l.default.bool,icon:l.default.element,iconAlignment:l.default.oneOf(["center","top","inline"])},v={text:"",textStyle:void 0,isTruncated:!1,isDisabled:!1,icon:void 0,iconAlignment:"center"},y=function(e){var t,i=e.text,l=e.textStyle,n=e.isTruncated,r=e.isDisabled,s=e.icon,o=e.iconAlignment,p=u(e,["text","textStyle","isTruncated","isDisabled","icon","iconAlignment"]),v=m(["item-display",{"is-disabled":r},c({},"icon-".concat(o),s),p.className]),y=m(["text",{"is-truncated":n},c({"strike-through":l===f.STRIKETHROUGH},"".concat(l),l)]);return s&&(t=a.default.createElement("div",{className:m("icon")},s)),a.default.createElement("div",d({},p,{className:v}),t,a.default.createElement("div",{className:y},i))};y.propTypes=p,y.defaultProps=v,y.Comment=s.default;var b=y;t.default=b},935:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(i(0)),l=n(i(23));function n(e){return e&&e.__esModule?e:{default:e}}function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a])}return e}).apply(this,arguments)}var s=function(e){var t=r({},e);return a.default.createElement(l.default,t,a.default.createElement("path",{d:"M46 2.1H2a2 2 0 00-2 2v28a2 2 0 002 2h31.2L45 45.9V34.1h1a2 2 0 002-2v-28a2 2 0 00-2-2z"}))};s.displayName="IconComment",s.defaultProps={className:"",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1",isBidi:!0};var o=s;t.default=o}}]);
//# sourceMappingURL=58-168513c05f1020c25ecc.js.map