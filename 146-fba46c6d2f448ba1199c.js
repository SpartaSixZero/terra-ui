(window.webpackJsonp=window.webpackJsonp||[]).push([[146,376,377,378,379,380,381,382,383,384,385,386,387,388,389,390,391,392,393,394,395,396,397,398,399,400,401,402,403,404,405,406,407,408,409,410,411,412,413,414,415,416,417,418,419,420,421,422,423,424,425,426,427,428,429,430,431,432,433,434,435,436,437,438,439],{3019:function(e,t,n){"use strict";n.r(t),t.default="# Terra List - Sections\n\nList sections are available in both static and collapsible varieties. A list section that is collapsed will remove its children items from the DOM. This improves performance and accessiblilty, but may remove potentional state associated to a mounted list item. If your list item content has additional state, it needs to be stored externally and reapplied when thawed for the next render that shows its section open. Since this render occurs at the same time that a collapsible section state changes, for additional optimization, collapsed sections do not necessarily need to be provided with child items.\n\n## State Management\nAs section and subsection have the same API, we'll be walking through the expectation of a collapsible section in only one pattern.\n\nFirst defaulting our state to an empty array in the constructor. \n```diff\nclass MyList extends React.Component {\n  constructor(props) {\n    super(props);\n\n+   this.state = { collapsedKeys: [] };\n  }\n  \n  render() {\n    return (\n    );\n  }\n}\n```\nNext creating an event handler callback method to pass to the section's `onSelect` prop. The `onSelect` callback will return the metaData prop passed to each section.\n```diff\nclass MyList extends React.Component {\n   constructor(props) {\n    super(props);\n\n    this.state = { collapsedKeys: [] };\n+   this.handleSectionSelection = this.handleSectionSelection.bind(this)\n   }\n  \n+  handleSectionSelection(event, metaData) {\n\n+  }\n```\nAs a precaution we can prevent default on the event, in case the list has an ancestor with a listener. This also prevents the browser from auto page scrolling when we are intending to make a selection with the space bar.\n```diff\n  handleSectionSelection(event, metaData) {\n+   event.preventDefault();\n  }\n```\nTerra List comes with additional helpers to manage state, in this case we want to determine if the selection has collapsed or opened the section using the section key in our state. So we use the utility method `updatedMulitSelectedKeys`, which takes an array of keys and returns a new array of keys following the addition or removal of the key passed. We then set this as our state.\n```diff\n  handleSectionSelection(event, metaData) {\n    event.preventDefault();\n+   this.setState(state => ({ collapsedKeys: Utils.updatedMultiSelectedKeys(state.selectedKeys, metaData.key) }));\n  }\n```\nSettting state will trigger another render. So in the render method we need to generate our sections with the updated `isCollapsed` and `isCollapsible` props. Each section needs a unique key, not necessarily associated to our own key, but it works as well. The list renders flat, so keys need to be unique even if items are placed within sections structurally.\n[React List & Key Documentation](https://reactjs.org/docs/lists-and-keys.html)\n```diff\nclass MyList extends React.Component {\n  constructor(props) {\n    super(props);\n\n    this.state = { selectedKey: null };\n    this.handleItemSelection = this.handleItemSelection.bind(this)\n+   this.createSection = this.createSection.bind(this)\n  }\n  ...\n+ createSection(sectionData) {\n+   return (\n+     <Section\n+       key={sectionData.key}\n+       title={sectionData.title}\n+     >\n+       {sectionData.childItems.map(childItem => createSubsection(childItem))}\n+     </Section>\n+   );\n+ }\n```\nNext we need to set up our `metaData` object with our key value, and attach the `onSelect` to our handler.\n```diff\n  createSection(sectionData) {\n    return (\n      <Section\n        key={sectionData.key}\n        title={sectionData.title}\n+       metaData={{ key: sectionData.key }}\n+       onSelect={this.handleSectionSelection}\n      >\n        {sectionData.childItems.map(childItem => createSubsection(childItem))}\n      </Section>\n    );\n  }\n```\nFor rendering the collapsible section we set `isCollapsible` for all sections.\n```diff\n  createSection(sectionData) {\n    return (\n      <Section\n        key={sectionData.key}\n        title={sectionData.title}\n+       isCollapsible\n        metaData={{ key: sectionData.key }}\n        onSelect={this.handleSectionSelection}\n      >\n        {sectionData.childItems.map(childItem => createSubsection(childItem))}\n      </Section>\n    );\n  }\n```\nFinally we need to check if the section is collapsed. As we support IE10 & 11, we cannot use `contains`, so we use `indexOf` to determine if the key is present in our state array. Here we can also avoid rendering collapsed child items and subsections by avoiding the subsequent function calls. Short circuiting the render is not required, as the section can correctly managed the display of the child content, but this will avoid additional javascript cycles looping through and creating child objects. The performance impact of generating child items is minimal, but with large lists it can add up.\n```diff\n  createSection(sectionData) {\n+   const isCollapsed = this.state.collapsedKeys.indexOf(sectionData.key) >= 0;\n    return (\n      <Section\n        key={sectionData.key}\n        title={sectionData.title}\n+       isCollapsed={isCollapsed}\n        isCollapsible\n        metaData={{ key: sectionData.key }}\n        onSelect={this.handleSectionSelection}\n      >\n-        {sectionData.childItems.map(childItem => createSubsection(childItem))}\n+        {!isCollapsed && sectionData.childItems.map(childItem => createListItem(childItem))}\n      </Section>\n    );\n```\nWe can then implement the unpack of our data into our list items.\n```diff\n  createSection(sectionData) {\n   const isCollapsed = this.state.collapsedKeys.indexOf(sectionData.key) >= 0;\n+  const createListItem = itemData => (\n+    <Item key={itemData.key}>\n+      <Placeholder />\n+    </Item>\n+  );\n   return (\n      <Section\n        key={sectionData.key}\n        title={sectionData.title}\n       isCollapsed={isCollapsed}\n        isCollapsible\n        metaData={{ key: sectionData.key }}\n        onSelect={this.handleSectionSelection}\n      >\n        {!isCollapsed && sectionData.childItems.map(childItem => createListItem(childItem))}\n      </Section>\n    );\n  \n\n```\nThen we can implement a method to loop through our data and create the section with our methods and call it from our render method.\n```diff\nclass MyList extends React.Component {\n  constructor(props) {\n    super(props);\n\n    this.state = { selectedKey: null };\n    this.handleItemSelection = this.handleItemSelection.bind(this)\n    this.createSection = this.createSection.bind(this)\n+   this.createSections = this.createSections.bind(this)\n  }\n  ...\n+ createSections(data) {\n+   return data.map(section => this.createSection(section));\n+ }\n\n  render() {\n    return (\n+     <List dividerStyle=\"standard\">\n+       {this.createSections(mockData)}\n+     </List>\n    );\n  }\n```\nUsing these steps we get the following example:\n"},3020:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=l(n(0)),a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var i=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};i.get||i.set?Object.defineProperty(t,n,i):t[n]=e[n]}return t.default=e,t}(n(123)),o=l(n(914)),s=l(n(4)),r=l(n(3021)),c=l(n(924));function l(e){return e&&e.__esModule?e:{default:e}}function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var f=s.default.bind(c.default),y=function(e){function t(e){var n,i,a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),i=this,(n=!(a=p(t).call(this,e))||"object"!==d(a)&&"function"!=typeof a?h(i):a).createSection=n.createSection.bind(h(n)),n.createSections=n.createSections.bind(h(n)),n.handleSectionSelection=n.handleSectionSelection.bind(h(n)),n.state={collapsedKeys:[]},n}var n,s,c;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(t,i.default.Component),n=t,(s=[{key:"handleSectionSelection",value:function(e,t){e.preventDefault(),this.setState(function(e){return{collapsedKeys:a.Utils.updatedMultiSelectedKeys(e.collapsedKeys,t.key)}})}},{key:"createSection",value:function(e){return i.default.createElement(a.Section,{key:e.key,title:e.title,isCollapsed:this.state.collapsedKeys.indexOf(e.key)>=0,isCollapsible:!0,metaData:{key:e.key},onSelect:this.handleSectionSelection},e.childItems.map(function(e){return t=e,i.default.createElement(a.Item,{key:t.key},i.default.createElement(o.default,{title:t.title,className:f("placeholder")}));var t}))}},{key:"createSections",value:function(e){var t=this;return e.map(function(e){return t.createSection(e)})}},{key:"render",value:function(){return i.default.createElement(a.default,{role:"listbox"},this.createSections(r.default))}}])&&u(n.prototype,s),c&&u(n,c),t}();t.default=y},3021:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=[{title:"Section 0",key:"unique-key-0",childItems:[{title:"Item 0-0",key:"unique-0-0"},{title:"Item 0-1",key:"unique-0-1"},{title:"Item 0-2",key:"unique-0-2"}]},{title:"Section 1",key:"unique-key-1",childItems:[{title:"Item 1-0",key:"unique-1-0"},{title:"Item 1-1",key:"unique1-1"},{title:"Item 1-2",key:"unique-1-2"}]}];t.default=i},3022:function(e,t,n){"use strict";n.r(t),t.default="import React from 'react';\n/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved */\nimport List, {\n  Item,\n  Section,\n  Utils,\n} from 'terra-list/lib/index';\n/* eslint-enable import/no-extraneous-dependencies, import/no-unresolved */\n\nimport Placeholder from 'terra-doc-template/lib/Placeholder';\nimport classNames from 'classnames/bind';\nimport mockData from './mock-data/mock-section';\nimport styles from '../example/ListDocCommon.module.scss';\n\nconst cx = classNames.bind(styles);\n\nconst createListItem = itemData => (\n  <Item key={itemData.key}>\n    <Placeholder title={itemData.title} className={cx('placeholder')} />\n  </Item>\n);\n\nclass SectionList extends React.Component {\n  constructor(props) {\n    super(props);\n    this.createSection = this.createSection.bind(this);\n    this.createSections = this.createSections.bind(this);\n    this.handleSectionSelection = this.handleSectionSelection.bind(this);\n    this.state = { collapsedKeys: [] };\n  }\n\n  handleSectionSelection(event, metaData) {\n    event.preventDefault();\n    this.setState(state => ({ collapsedKeys: Utils.updatedMultiSelectedKeys(state.collapsedKeys, metaData.key) }));\n  }\n\n  createSection(sectionData) {\n    return (\n      <Section\n        key={sectionData.key}\n        title={sectionData.title}\n        isCollapsed={this.state.collapsedKeys.indexOf(sectionData.key) >= 0}\n        isCollapsible\n        metaData={{ key: sectionData.key }}\n        onSelect={this.handleSectionSelection}\n      >\n        {sectionData.childItems.map(childItem => createListItem(childItem))}\n      </Section>\n    );\n  }\n\n  createSections(data) {\n    return data.map(section => this.createSection(section));\n  }\n\n  render() {\n    return (\n      <List role=\"listbox\">\n        {this.createSections(mockData)}\n      </List>\n    );\n  }\n}\n\nexport default SectionList;\n"},3758:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=l(n(0)),a=l(n(911)),o=l(n(3019)),s=n(921),r=l(n(3020)),c=l(n(3022));function l(e){return e&&e.__esModule?e:{default:e}}var d=function(){return i.default.createElement(a.default,{packageName:s.name,readme:o.default,srcPath:"https://github.com/cerner/terra-core/tree/master/packages/".concat(s.name),examples:[{example:i.default.createElement(r.default,null),source:c.default}]})};t.default=d},912:function(e,t){},914:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(n(0)),a=r(n(2)),o=r(n(4)),s=r(n(916));function r(e){return e&&e.__esModule?e:{default:e}}function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=o.default.bind(s.default),u={variant:a.default.oneOf(["light","dark"]),title:a.default.string},p=function(e){var t=e.variant,n=e.title,a=l(e,["variant","title"]),o=d(["placeholder",a.className]),s=d(["inner","is-".concat(t)]);return i.default.createElement("div",c({},a,{className:o}),i.default.createElement("div",{className:s},i.default.createElement("h2",null,n)))};p.propTypes=u,p.defaultProps={variant:"dark",title:""};var h=p;t.default=h},916:function(e,t,n){e.exports={placeholder:"Placeholder-module__placeholder___37I0I",inner:"Placeholder-module__inner___2DX7N","is-light":"Placeholder-module__is-light___3__YD","is-dark":"Placeholder-module__is-dark___9wQwQ"}},921:function(e){e.exports=JSON.parse('{"_from":"terra-list@^4.0.0","_id":"terra-list@4.14.0","_inBundle":false,"_integrity":"sha512-8J/uID+LTXyBUFDAHetqXOkCX463OuXg9/bW8z7rfilgqDYuGjZmjxn+9OYTK+vhGvpt4WCKH/C8WGwaEq7afQ==","_location":"/terra-list","_phantomChildren":{},"_requested":{"type":"range","registry":true,"raw":"terra-list@^4.0.0","name":"terra-list","escapedName":"terra-list","rawSpec":"^4.0.0","saveSpec":null,"fetchSpec":"^4.0.0"},"_requiredBy":["/","/terra-collapsible-menu-view","/terra-dev-site","/terra-infinite-list","/terra-menu"],"_resolved":"https://registry.npmjs.org/terra-list/-/terra-list-4.14.0.tgz","_shasum":"801467d9ebc874914daa659d1aab99a64b2f53ac","_spec":"terra-list@^4.0.0","_where":"/home/travis/build/cerner/terra-ui","author":{"name":"Cerner Corporation"},"bugs":{"url":"https://github.com/cerner/terra-core/issues"},"bundleDependencies":false,"dependencies":{"classnames":"^2.2.5","keycode-js":"^1.0.4","prop-types":"^15.5.8","terra-doc-template":"^2.15.0","terra-icon":"^3.16.0","terra-mixins":"^1.33.0"},"deprecated":false,"description":"The Terra List is a structural component to arrange content within list/listitems.","gitHead":"0b893dc4a80250c0b485a5f205f2defde7c38ecf","homepage":"https://github.com/cerner/terra-core#readme","keywords":["Cerner","Terra","terra-list","List","UI"],"license":"Apache-2.0","main":"lib/index.js","name":"terra-list","peerDependencies":{"react":"^16.8.5","react-dom":"^16.8.5"},"repository":{"type":"git","url":"git+https://github.com/cerner/terra-core.git"},"scripts":{"compile":"babel --root-mode upward src --out-dir lib --copy-files","lint":"npm run lint:js && npm run lint:scss","lint:js":"eslint --ext .js,.jsx . --ignore-path ../../.eslintignore","lint:scss":"stylelint src/**/*.scss","precompile":"rm -rf lib","test":"npm run test:jest && npm run test:wdio","test:jest":"jest --config ../../jestconfig.js","test:wdio":"../../node_modules/.bin/wdio ../../node_modules/terra-dev-site/config/wdio/wdio.conf.js"},"version":"4.14.0"}')},924:function(e,t,n){e.exports={placeholder:"ListDocCommon-module__placeholder___CD263"}}}]);
//# sourceMappingURL=146-fba46c6d2f448ba1199c.js.map