(window.webpackJsonp=window.webpackJsonp||[]).push([[139],{1509:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=[{title:"Section 0",key:"unique-key-0",childItems:[{title:"Subsection 0-0",key:"unique-key-0-0",childItems:[{title:"Item 0-0-0",key:"unique-key-0-0-0"},{title:"Item 0-0-1",key:"unique-key-0-0-1"},{title:"Item 0-0-2",key:"unique-key-0-0-2"}]},{title:"Subsection 0-1",key:"unique-key-0-1",childItems:[{title:"Item 0-1-0",key:"unique-key-0-1-0"},{title:"Item 0-1-1",key:"unique-key-0-1-1"},{title:"Item 0-1-2",key:"unique-key-0-1-2"}]}]},{title:"Section 1",key:"unique-key-1",childItems:[{title:"Subsection 1-0",key:"unique-key-1-0",childItems:[{title:"Item 1-0-0",key:"unique-key-1-0-0"},{title:"Item 1-0-1",key:"unique-key-1-0-1"},{title:"Item 1-0-2",key:"unique-key-1-0-2"}]},{title:"Subsection 1-1",key:"unique-key-1-1",childItems:[{title:"Item 1-1-0",key:"unique-key-1-1-0"},{title:"Item 1-1-1",key:"unique-key-1-1-1"},{title:"Item 1-1-2",key:"unique-key-1-1-2"}]}]}];t.default=i},3023:function(e,t,n){"use strict";n.r(t),t.default="# Terra List - Sections with Subsections\n\nWith the inclusion of sections in the list, there are two recommended patterns for creating nested collapsible sections. First is collapsible sections and static subsections, and the second is static sections and collapsible subsections. The guidance from UX is to only use collapsible sections or collapsible subsections in a list, but not both.\n\n## State Management\nAs section and subsection have the same API, we'll be walking through the expectation of a collapsible section in only one pattern.\n\nFirst defaulting our state to an empty array in the constructor. \n```diff\nclass MyList extends React.Component {\n  constructor(props) {\n    super(props);\n\n+    this.state = { collapsedKeys: [] };\n  }\n  \n  render() {\n    return (\n    );\n  }\n}\n```\nNext creating an event handler callback method to pass to the section's `onSelect` prop. The `onSelect` will return the metaData prop passed it each section.\n```diff\nclass MyList extends React.Component {\n  constructor(props) {\n    super(props);\n\n    this.state = { collapsedKeys: [] };\n+   this.handleSectionSelection = this.handleSectionSelection.bind(this)\n  }\n  \n+  handleSectionSelection(event, metaData) {\n+\n+  }\n```\nAs a precaution we can prevent default on the event, in case the list has an ancestor with a listener. This also prevents the browser from auto page scrolling when we are intending to make a selection with the space bar.\n```diff\n  handleSectionSelection(event, metaData) {\n+    event.preventDefault();\n  }\n```\nTerra list comes with additional helpers to manage state, in this case we want to determine if the selection has collapsed or opened the section using the section key in our state. So we use the utility method `updatedMulitSelectedKeys`, which returns an array of the keys following the addition or removing of the key passed. We then set this as our state.\n```diff\n  handleSectionSelection(event, metaData) {\n    event.preventDefault();\n+   this.setState(state => ({ collapsedKeys: Utils.updatedMultiSelectedKeys(state.selectedKeys, metaData.key) }));\n  }\n```\nSettting state will trigger another render. So in the render method we need to generate our sections with the updated `isCollapsed` and `isCollapsible` props. Each section needs a unique key, not necessarily associated to our own key, but it works as well. The list renders flat, so keys need to be unique even if items are placed within sections structurally.\n[React List & Key Documentation](https://reactjs.org/docs/lists-and-keys.html)\n```diff\nclass MyList extends React.Component {\n  constructor(props) {\n    super(props);\n\n    this.state = { collapsedKeys: [] };\n    this.handleSectionSelection = this.handleSectionSelection.bind(this)\n+   this.createSection = this.createSection.bind(this)\n  }\n  ...\n+ createSection(sectionData) {\n+   return (\n+     <Section\n+       key={sectionData.key}\n+       title={sectionData.title}\n+     >\n+       {sectionData.childItems.map(childItem => createSubsection(childItem))}\n+     </Section>\n+   );\n+ }\n```\nNext we need to set up our `metaData` object with our key value, and attach the `onSelect` to our handler.\n```diff\n  createSection(sectionData) {\n    return (\n      <Section\n        key={sectionData.key}\n        title={sectionData.title}\n+       metaData={{ key: sectionData.key }}\n+       onSelect={this.handleSectionSelection}\n      >\n        {sectionData.childItems.map(childItem => createSubsection(childItem))}\n      </Section>\n    );\n  }\n```\nFor the common collapsible sections we set `isCollapsible` for all sections.\n```diff\n  createSection(sectionData) {\n    return (\n      <Section\n        key={sectionData.key}\n        title={sectionData.title}\n+       isCollapsible\n        metaData={{ key: sectionData.key }}\n        onSelect={this.handleSectionSelection}\n      >\n        {sectionData.childItems.map(childItem => createSubsection(childItem))}\n      </Section>\n    );\n  }\n```\nFinally we need to check if the section is collapsed. As we support IE10 & 11, we cannot use `contains`, so we use `indexOf` to determine if the key is present in our state array. Here we can also avoid rendering collapsed child items and subsections by avoiding the subsequent function calls. Short circuiting the render is not required, as the section can correctly managed the display of the child content, but this will avoid additional javascript cycles looping through and creating child objects. The performance impact of generating child items is minimal, but with large lists it can add up.\n```diff\n  createSection(sectionData) {\n+   const isCollapsed = this.state.collapsedKeys.indexOf(sectionData.key) >= 0;\n    return (\n      <Section\n        key={sectionData.key}\n        title={sectionData.title}\n+       isCollapsed={isCollapsed}\n        isCollapsible\n        metaData={{ key: sectionData.key }}\n        onSelect={this.handleSectionSelection}\n      >\n-       {sectionData.childItems.map(childItem => createSubsection(childItem))}\n+       {!isCollapsed && sectionData.childItems.map(childItem => createSubsection(childItem))}\n      </Section>\n    );\n```\nWe can then implement the unpack of our data into our list items.\n```diff\n  createSection(sectionData) {\n   const isCollapsed = this.state.collapsedKeys.indexOf(sectionData.key) >= 0;\n+  const createListItem = itemData => (\n+    <Item key={itemData.key}>\n+       <Placeholder />\n+    </Item>\n+  );\n\n+  const createSubsection = subsectionData => (\n+     <Subsection\n+       key={subsectionData.key}\n+       title={subsectionData.title}\n+     >\n+       {subsectionData.childItems.map(childItem => createListItem(childItem))}\n+     </Subsection>\n+   );\n    return (\n      <Section\n        key={sectionData.key}\n        title={sectionData.title}\n        isCollapsed={isCollapsed}\n        isCollapsible\n        metaData={{ key: sectionData.key }}\n        onSelect={this.handleSectionSelection}\n      >\n        {!isCollapsed && sectionData.childItems.map(childItem => createSubsection(childItem))}\n      </Section>\n    );\n```\nThen we can implement a method to loop through our data and create the section with our methods and call it from our render method.\n```diff\nclass MyList extends React.Component {\n  constructor(props) {\n    super(props);\n\n    this.state = { collapsedKeys: [] };\n    this.handleSectionSelection = this.handleSectionSelection.bind(this)\n    this.createSection = this.createSection.bind(this)\n+   this.createSections = this.createSections.bind(this)\n  }\n  ...\n+ createSections(data) {\n+   return data.map(section => this.createSection(section));\n+ }\n\n  render() {\n    return (\n+     <List dividerStyle=\"standard\">\n+       {this.createSections(mockData)}\n+     </List>\n    );\n  }\n  ```\n  Using these steps we get the following example.\n"},3024:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=l(n(0)),a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var i=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};i.get||i.set?Object.defineProperty(t,n,i):t[n]=e[n]}return t.default=e,t}(n(123)),o=l(n(914)),s=l(n(4)),c=l(n(1509)),r=l(n(924));function l(e){return e&&e.__esModule?e:{default:e}}function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var f=s.default.bind(r.default),y=function(e){return i.default.createElement(a.Subsection,{key:e.key,title:e.title},e.childItems.map(function(e){return t=e,i.default.createElement(a.Item,{key:t.key},i.default.createElement(o.default,{title:t.title,className:f("placeholder")}));var t}))},b=function(e){function t(e){var n,i,a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),i=this,(n=!(a=p(t).call(this,e))||"object"!==u(a)&&"function"!=typeof a?h(i):a).createSection=n.createSection.bind(h(n)),n.createSections=n.createSections.bind(h(n)),n.handleSectionSelection=n.handleSectionSelection.bind(h(n)),n.state={collapsedKeys:[]},n}var n,o,s;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(t,i.default.Component),n=t,(o=[{key:"handleSectionSelection",value:function(e,t){e.preventDefault(),this.setState(function(e){return{collapsedKeys:a.Utils.updatedMultiSelectedKeys(e.collapsedKeys,t.key)}})}},{key:"createSection",value:function(e){var t=this.state.collapsedKeys.indexOf(e.key)>=0;return i.default.createElement(a.Section,{key:e.key,title:e.title,isCollapsed:t,isCollapsible:!0,metaData:{key:e.key},onSelect:this.handleSectionSelection},!t&&e.childItems.map(function(e){return y(e)}))}},{key:"createSections",value:function(e){var t=this;return e.map(function(e){return t.createSection(e)})}},{key:"render",value:function(){return i.default.createElement(a.default,{dividerStyle:"standard"},this.createSections(c.default))}}])&&d(n.prototype,o),s&&d(n,s),t}();t.default=b},3025:function(e,t,n){"use strict";n.r(t),t.default="import React from 'react';\n/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved */\nimport List, {\n  Item,\n  Section,\n  Subsection,\n  Utils,\n} from 'terra-list/lib/index';\n/* eslint-enable import/no-extraneous-dependencies, import/no-unresolved */\n\nimport Placeholder from 'terra-doc-template/lib/Placeholder';\nimport classNames from 'classnames/bind';\nimport mockData from './mock-data/mock-section-sub';\nimport styles from '../example/ListDocCommon.module.scss';\n\nconst cx = classNames.bind(styles);\n\nconst createListItem = itemData => (\n  <Item key={itemData.key}>\n    <Placeholder title={itemData.title} className={cx('placeholder')} />\n  </Item>\n);\n\nconst createSubsection = subsectionData => (\n  <Subsection\n    key={subsectionData.key}\n    title={subsectionData.title}\n  >\n    {subsectionData.childItems.map(childItem => createListItem(childItem))}\n  </Subsection>\n);\n\nclass SectionWithSubsection1 extends React.Component {\n  constructor(props) {\n    super(props);\n    this.createSection = this.createSection.bind(this);\n    this.createSections = this.createSections.bind(this);\n    this.handleSectionSelection = this.handleSectionSelection.bind(this);\n    this.state = { collapsedKeys: [] };\n  }\n\n  handleSectionSelection(event, metaData) {\n    event.preventDefault();\n\n    this.setState(state => ({ collapsedKeys: Utils.updatedMultiSelectedKeys(state.collapsedKeys, metaData.key) }));\n  }\n\n  createSection(sectionData) {\n    const isCollapsed = this.state.collapsedKeys.indexOf(sectionData.key) >= 0;\n    return (\n      <Section\n        key={sectionData.key}\n        title={sectionData.title}\n        isCollapsed={isCollapsed}\n        isCollapsible\n        metaData={{ key: sectionData.key }}\n        onSelect={this.handleSectionSelection}\n      >\n        {!isCollapsed && sectionData.childItems.map(childItem => createSubsection(childItem))}\n      </Section>\n    );\n  }\n\n  createSections(data) {\n    return data.map(section => this.createSection(section));\n  }\n\n  render() {\n    return (\n      <List dividerStyle=\"standard\">\n        {this.createSections(mockData)}\n      </List>\n    );\n  }\n}\n\nexport default SectionWithSubsection1;\n"},3026:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=l(n(0)),a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var i=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};i.get||i.set?Object.defineProperty(t,n,i):t[n]=e[n]}return t.default=e,t}(n(123)),o=l(n(914)),s=l(n(4)),c=l(n(1509)),r=l(n(924));function l(e){return e&&e.__esModule?e:{default:e}}function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var f=s.default.bind(r.default),y=function(e){function t(e){var n,i,a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),i=this,(n=!(a=p(t).call(this,e))||"object"!==u(a)&&"function"!=typeof a?h(i):a).createSection=n.createSection.bind(h(n)),n.createSections=n.createSections.bind(h(n)),n.createSubsection=n.createSubsection.bind(h(n)),n.handleSectionSelection=n.handleSectionSelection.bind(h(n)),n.state={collapsedKeys:[]},n}var n,s,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(t,i.default.Component),n=t,(s=[{key:"handleSectionSelection",value:function(e,t){e.preventDefault(),this.setState(function(e){return{collapsedKeys:a.Utils.updatedMultiSelectedKeys(e.collapsedKeys,t.key)}})}},{key:"createSubsection",value:function(e){var t=this.state.collapsedKeys.indexOf(e.key)>=0;return i.default.createElement(a.Subsection,{key:e.key,title:e.title,isCollapsed:t,isCollapsible:!0,metaData:{key:e.key},onSelect:this.handleSectionSelection},!t&&e.childItems.map(function(e){return t=e,i.default.createElement(a.Item,{key:t.key},i.default.createElement(o.default,{title:t.title,className:f("placeholder")}));var t}))}},{key:"createSection",value:function(e){var t=this;return i.default.createElement(a.Section,{key:e.key,title:e.title},e.childItems.map(function(e){return t.createSubsection(e)}))}},{key:"createSections",value:function(e){var t=this;return e.map(function(e){return t.createSection(e)})}},{key:"render",value:function(){return i.default.createElement(a.default,{dividerStyle:"standard"},this.createSections(c.default))}}])&&d(n.prototype,s),r&&d(n,r),t}();t.default=y},3027:function(e,t,n){"use strict";n.r(t),t.default="import React from 'react';\n/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved */\nimport List, {\n  Item,\n  Section,\n  Subsection,\n  Utils,\n} from 'terra-list/lib/index';\n/* eslint-enable import/no-extraneous-dependencies, import/no-unresolved */\nimport Placeholder from 'terra-doc-template/lib/Placeholder';\nimport classNames from 'classnames/bind';\nimport mockData from './mock-data/mock-section-sub';\nimport styles from '../example/ListDocCommon.module.scss';\n\nconst cx = classNames.bind(styles);\n\nconst createListItem = itemData => (\n  <Item key={itemData.key}>\n    <Placeholder title={itemData.title} className={cx('placeholder')} />\n  </Item>\n);\n\nclass SectionWithSubsection2 extends React.Component {\n  constructor(props) {\n    super(props);\n    this.createSection = this.createSection.bind(this);\n    this.createSections = this.createSections.bind(this);\n    this.createSubsection = this.createSubsection.bind(this);\n    this.handleSectionSelection = this.handleSectionSelection.bind(this);\n    this.state = { collapsedKeys: [] };\n  }\n\n  handleSectionSelection(event, metaData) {\n    event.preventDefault();\n\n    this.setState(state => ({ collapsedKeys: Utils.updatedMultiSelectedKeys(state.collapsedKeys, metaData.key) }));\n  }\n\n  createSubsection(subsectionData) {\n    const isCollapsed = this.state.collapsedKeys.indexOf(subsectionData.key) >= 0;\n    return (\n      <Subsection\n        key={subsectionData.key}\n        title={subsectionData.title}\n        isCollapsed={isCollapsed}\n        isCollapsible\n        metaData={{ key: subsectionData.key }}\n        onSelect={this.handleSectionSelection}\n      >\n        {!isCollapsed && subsectionData.childItems.map(childItem => createListItem(childItem))}\n      </Subsection>\n    );\n  }\n\n  createSection(sectionData) {\n    return (\n      <Section\n        key={sectionData.key}\n        title={sectionData.title}\n      >\n        {sectionData.childItems.map(childItem => this.createSubsection(childItem))}\n      </Section>\n    );\n  }\n\n  createSections(data) {\n    return data.map(section => this.createSection(section));\n  }\n\n  render() {\n    return (\n      <List dividerStyle=\"standard\">\n        {this.createSections(mockData)}\n      </List>\n    );\n  }\n}\n\nexport default SectionWithSubsection2;\n"},3759:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=d(n(0)),a=d(n(911)),o=d(n(3023)),s=n(921),c=d(n(3024)),r=d(n(3025)),l=d(n(3026)),u=d(n(3027));function d(e){return e&&e.__esModule?e:{default:e}}var p=function(){return i.default.createElement(a.default,{packageName:s.name,readme:o.default,srcPath:"https://github.com/cerner/terra-core/tree/master/packages/".concat(s.name),examples:[{title:"Collapsible sections with static subsections",example:i.default.createElement(c.default,null),source:r.default},{title:"Static sections with collapsible subsections",example:i.default.createElement(l.default,null),source:u.default}]})};t.default=p},914:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=c(n(0)),a=c(n(2)),o=c(n(4)),s=c(n(916));function c(e){return e&&e.__esModule?e:{default:e}}function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=o.default.bind(s.default),d={variant:a.default.oneOf(["light","dark"]),title:a.default.string},p=function(e){var t=e.variant,n=e.title,a=l(e,["variant","title"]),o=u(["placeholder",a.className]),s=u(["inner","is-".concat(t)]);return i.default.createElement("div",r({},a,{className:o}),i.default.createElement("div",{className:s},i.default.createElement("h2",null,n)))};p.propTypes=d,p.defaultProps={variant:"dark",title:""};var h=p;t.default=h},916:function(e,t,n){e.exports={placeholder:"Placeholder-module__placeholder___37I0I",inner:"Placeholder-module__inner___2DX7N","is-light":"Placeholder-module__is-light___3__YD","is-dark":"Placeholder-module__is-dark___9wQwQ"}},921:function(e){e.exports=JSON.parse('{"_from":"terra-list@^4.0.0","_id":"terra-list@4.14.0","_inBundle":false,"_integrity":"sha512-8J/uID+LTXyBUFDAHetqXOkCX463OuXg9/bW8z7rfilgqDYuGjZmjxn+9OYTK+vhGvpt4WCKH/C8WGwaEq7afQ==","_location":"/terra-list","_phantomChildren":{},"_requested":{"type":"range","registry":true,"raw":"terra-list@^4.0.0","name":"terra-list","escapedName":"terra-list","rawSpec":"^4.0.0","saveSpec":null,"fetchSpec":"^4.0.0"},"_requiredBy":["/","/terra-collapsible-menu-view","/terra-dev-site","/terra-infinite-list","/terra-menu"],"_resolved":"https://registry.npmjs.org/terra-list/-/terra-list-4.14.0.tgz","_shasum":"801467d9ebc874914daa659d1aab99a64b2f53ac","_spec":"terra-list@^4.0.0","_where":"/home/travis/build/cerner/terra-ui","author":{"name":"Cerner Corporation"},"bugs":{"url":"https://github.com/cerner/terra-core/issues"},"bundleDependencies":false,"dependencies":{"classnames":"^2.2.5","keycode-js":"^1.0.4","prop-types":"^15.5.8","terra-doc-template":"^2.15.0","terra-icon":"^3.16.0","terra-mixins":"^1.33.0"},"deprecated":false,"description":"The Terra List is a structural component to arrange content within list/listitems.","gitHead":"0b893dc4a80250c0b485a5f205f2defde7c38ecf","homepage":"https://github.com/cerner/terra-core#readme","keywords":["Cerner","Terra","terra-list","List","UI"],"license":"Apache-2.0","main":"lib/index.js","name":"terra-list","peerDependencies":{"react":"^16.8.5","react-dom":"^16.8.5"},"repository":{"type":"git","url":"git+https://github.com/cerner/terra-core.git"},"scripts":{"compile":"babel --root-mode upward src --out-dir lib --copy-files","lint":"npm run lint:js && npm run lint:scss","lint:js":"eslint --ext .js,.jsx . --ignore-path ../../.eslintignore","lint:scss":"stylelint src/**/*.scss","precompile":"rm -rf lib","test":"npm run test:jest && npm run test:wdio","test:jest":"jest --config ../../jestconfig.js","test:wdio":"../../node_modules/.bin/wdio ../../node_modules/terra-dev-site/config/wdio/wdio.conf.js"},"version":"4.14.0"}')},924:function(e,t,n){e.exports={placeholder:"ListDocCommon-module__placeholder___CD263"}}}]);
//# sourceMappingURL=139-a8e48e156129bc6e5d93.js.map