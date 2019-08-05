(window.webpackJsonp=window.webpackJsonp||[]).push([[161,376,377,378,379,380,381,382,383,384,385,386,387,388,389,390,391,392,393,394,395,396,397,398,399,400,401,402,403,404,405,406,407,408,409,410,411,412,413,414,415,416,417,418,419,420,421,422,423,424,425,426,427,428,429,430,431,432,433,434,435,436,437,438,439],{1982:function(e,n,t){"use strict";t.r(n),n.default="# Terra Breakpoints\n\n`terra-breakpoints` contains components and utilities related to Terra's supported responsive breakpoints.\n\n## Getting Started\n\n- Install with [npmjs](https://www.npmjs.com):\n  - `npm install terra-breakpoints`\n\n\x3c!-- AUTO-GENERATED-CONTENT:START Peer Dependencies --\x3e\n## Peer Dependencies\n\n<details>\n<summary>View information on this component's peer dependencies.</summary>\n\nThis component requires the following peer dependencies be installed in your app for the component to properly function.\n\n| Peer Dependency | Version |\n|-|-|\n| react | ^16.8.5 |\n| react-dom | ^16.8.5 |\n\n\n</details>\n\x3c!-- AUTO-GENERATED-CONTENT:END --\x3e\n\n## Usage\n\n### Breakpoints\n\nAn object containing the named breakpoint values is the default export of the `terra-breakpoints` package. These named breakpoints are defined as minimum values.\n\n|Breakpoint Name|Minimum Value|Media Query|Description|\n|---|---|---|---|\n|`tiny`|0px|`@media screen and (min-width: 0px)`| Active from viewport width 0px and up |\n|`small`|544px|`@media screen and (min-width: 544px)`|Active from viewport width 544px and up|\n|`medium`|768px|`@media screen and (min-width: 768px)`|Active from viewport width 768px and up|\n|`large`|992px|`@media screen and (min-width: 992px)`|Active from viewport width 992px and up|\n|`huge`|1216px|`@media screen and (min-width: 1216px)`|Active from viewport width 1216 and up|\n|`enormous`|1440px|`@media screen and (min-width: 1440px)`|Active from viewport width 1440px and up|\n\nUtility functions are also provided to help determine what breakpoint is active for a given value.\n\n#### `activeBreakpointForSize(widthValue)`\n\n`activeBreakpointForSize` will return the closest active breakpoint that matches the given width value.\n\n```jsx\nimport { activeBreakpointForSize } from 'terra-breakpoints';\n\nconsole.log(activeBreakpointForSize(300));  // 'tiny'\nconsole.log(activeBreakpointForSize(544));  // 'small'\nconsole.log(activeBreakpointForSize(800));  // 'medium'\nconsole.log(activeBreakpointForSize(1000)); // 'large'\nconsole.log(activeBreakpointForSize(1300)); // 'huge'\nconsole.log(activeBreakpointForSize(1500)); // 'enormous'\n```\n\n#### `isBreakpointActiveForSize(breakpointName, widthValue)`\n\n`isBreakpointActiveForSize` will return a boolean value indicating whether or not the given breakpoint name is active for the width value.\n\n> Note that since the breakpoints are defined as minimum values, a breakpoint will be determined to be active if the width value is larger than the defined minimum, even if the width value is included in a higher breakpoint's range.\n\n```jsx\nimport { isBreakpointActiveForSize } from 'terra-breakpoints';\n\nconsole.log(isBreakpointActiveForSize('tiny', 300));      // true\nconsole.log(isBreakpointActiveForSize('tiny', 544));      // true\nconsole.log(isBreakpointActiveForSize('tiny', 800));      // true\nconsole.log(isBreakpointActiveForSize('tiny', 1000));     // true\n\nconsole.log(isBreakpointActiveForSize('medium', 300));    // false\nconsole.log(isBreakpointActiveForSize('medium', 544));    // false\nconsole.log(isBreakpointActiveForSize('medium', 800));    // true\nconsole.log(isBreakpointActiveForSize('medium', 1500));   // true\n\nconsole.log(isBreakpointActiveForSize('enormous', 300));  // false\nconsole.log(isBreakpointActiveForSize('enormous', 544));  // false\nconsole.log(isBreakpointActiveForSize('enormous', 800));  // false\nconsole.log(isBreakpointActiveForSize('enormous', 1500)); // true\n```\n\n### ActiveBreakpointProvider\n\n`terra-breakpoints` also provides `<ActiveBreakpointProvider>`. a component that provides the current active breakpoint to child components using a Context-based API. This can be used to minimize the number of required resize event listeners and ensure consistency across the component hierarchy.\n\nA component generator called `withActiveBreakpoint()` is included to provide simple interfacing with the ActiveBreakpointProvider. However, the ActiveBreakpointContext can also be imported and used directly, if needed.\n\n```jsx\nimport React from 'react';\nimport { ActiveBreakpointProvider, withActiveBreakpoint, ActiveBreakpointContext } from 'terra-breakpoints';\n\nconst ActiveBreakpointConsumer1 = withActiveBreakpoint(({ activeBreakpoint }) => (\n  <div>\n    <p>This component uses the withActiveBreakpoint() component generator to interface with the ActiveBreakpointProvider.</p>\n    <p>\n      The active breakpoint is:\n      {' '}\n      {activeBreakpoint}\n    </p>\n  </div>\n));\n\nconst ActiveBreakpointConsumer2 = () => (\n  <ActiveBreakpointContext.Consumer>\n    {\n      activeBreakpoint => (\n        <div>\n          <p>This component interfaces with the ActiveBreakpointContext directly.</p>\n          <p>\n            The active breakpoint is:\n            {' '}\n            {activeBreakpoint}\n          </p>\n        </div>\n      )\n    }\n  </ActiveBreakpointContext.Consumer>\n);\n\nconst ActiveBreakpointProviderExample = () => (\n  <ActiveBreakpointProvider>\n    <ActiveBreakpointConsumer1 />\n    <hr />\n    <ActiveBreakpointConsumer2 />\n  </ActiveBreakpointProvider>\n);\n```\n\n### Media Queries\n\n`terra-breakpoints` includes `_media-queries.scss`, which contains a set of Sass mixins that define media queries for the supported breakpoints.\n\n```scss\n@import '~terra-breakpoints/lib/media-queries';\n\n.example {\n  color: blue;\n\n  @include terra-mq-small-up {\n    color: red;\n  }\n\n  @include terra-mq-medium-up {\n    color: purple;\n  }\n\n  @include terra-mq-large-up {\n    color: green;\n  }\n\n  @include terra-mq-huge-up {\n    color: yellow;\n  }\n\n  @include terra-mq-enormous-up {\n    color: orange;\n  }\n}\n```\n\n## Component Features\n* [Cross-Browser Support](https://engineering.cerner.com/terra-ui/#/getting-started/terra-ui/features)\n* [Responsive Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#responsive-support)\n* [Mobile Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#mobile-support)\n"},1983:function(e){e.exports=JSON.parse('{"_from":"terra-breakpoints@^2.0.0","_id":"terra-breakpoints@2.14.0","_inBundle":false,"_integrity":"sha512-l3OKcanKOBxn0jas31ojcrDb2lpONpVFqU+izpCtxUuapH08s+tpv4VPF/UKHY3NXxuaXre3FK/fVwBhwwAOOw==","_location":"/terra-breakpoints","_phantomChildren":{},"_requested":{"type":"range","registry":true,"raw":"terra-breakpoints@^2.0.0","name":"terra-breakpoints","escapedName":"terra-breakpoints","rawSpec":"^2.0.0","saveSpec":null,"fetchSpec":"^2.0.0"},"_requiredBy":["/","/terra-application","/terra-application-layout","/terra-clinical-onset-picker","/terra-grid","/terra-responsive-element"],"_resolved":"https://registry.npmjs.org/terra-breakpoints/-/terra-breakpoints-2.14.0.tgz","_shasum":"86fb9b800a9ca6e82d58486f2b79e322f80a3120","_spec":"terra-breakpoints@^2.0.0","_where":"/home/travis/build/cerner/terra-ui","author":{"name":"Cerner Corporation"},"bugs":{"url":"https://github.com/cerner/terra-core/issues"},"bundleDependencies":false,"dependencies":{"classnames":"^2.2.5","prop-types":"^15.5.8","terra-doc-template":"^2.15.0"},"deprecated":false,"description":"Contains components and utilities related to Terra\'s supported responsive breakpoints","gitHead":"0b893dc4a80250c0b485a5f205f2defde7c38ecf","homepage":"https://github.com/cerner/terra-core#readme","keywords":["Cerner","Terra","terra-breakpoints","Breakpoints","UI"],"license":"Apache-2.0","main":"lib/index.js","name":"terra-breakpoints","peerDependencies":{"react":"^16.8.5","react-dom":"^16.8.5"},"repository":{"type":"git","url":"git+https://github.com/cerner/terra-core.git"},"scripts":{"compile":"babel --root-mode upward src --out-dir lib --copy-files","lint":"npm run lint:js && npm run lint:scss","lint:js":"eslint --ext .js,.jsx . --ignore-path ../../.eslintignore","lint:scss":"stylelint src/**/*.scss","precompile":"rm -rf lib","test":"npm run test:jest && npm run test:wdio","test:jest":"jest --config ../../jestconfig.js","test:wdio":"../../node_modules/.bin/wdio ../../node_modules/terra-dev-site/config/wdio/wdio.conf.js"},"version":"2.14.0"}')},1984:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i,r=(i=t(0))&&i.__esModule?i:{default:i},o=t(212);var a=(0,o.withActiveBreakpoint)(function(e){var n=e.activeBreakpoint;return r.default.createElement("div",null,r.default.createElement("p",null,"This component uses the withActiveBreakpoint() component generator to interface with the ActiveBreakpointProvider."),r.default.createElement("p",null,"The active breakpoint is:"," ",n))}),s=function(){return r.default.createElement(o.ActiveBreakpointContext.Consumer,null,function(e){return r.default.createElement("div",null,r.default.createElement("p",null,"This component interfaces with the ActiveBreakpointContext directly."),r.default.createElement("p",null,"The active breakpoint is:"," ",e))})},c=function(){return r.default.createElement(o.ActiveBreakpointProvider,null,r.default.createElement(a,null),r.default.createElement("hr",null),r.default.createElement(s,null))};n.default=c},1985:function(e,n,t){"use strict";t.r(n),n.default="import React from 'react';\n\n// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions\nimport { ActiveBreakpointProvider, withActiveBreakpoint, ActiveBreakpointContext } from 'terra-breakpoints';\n\nconst ActiveBreakpointConsumer1 = withActiveBreakpoint(({ activeBreakpoint }) => (\n  <div>\n    <p>This component uses the withActiveBreakpoint() component generator to interface with the ActiveBreakpointProvider.</p>\n    <p>\n      The active breakpoint is:\n      {' '}\n      {activeBreakpoint}\n    </p>\n  </div>\n));\n\nconst ActiveBreakpointConsumer2 = () => (\n  <ActiveBreakpointContext.Consumer>\n    {\n      activeBreakpoint => (\n        <div>\n          <p>This component interfaces with the ActiveBreakpointContext directly.</p>\n          <p>\n            The active breakpoint is:\n            {' '}\n            {activeBreakpoint}\n          </p>\n        </div>\n      )\n    }\n  </ActiveBreakpointContext.Consumer>\n);\n\nconst ActiveBreakpointProviderExample = () => (\n  <ActiveBreakpointProvider>\n    <ActiveBreakpointConsumer1 />\n    <hr />\n    <ActiveBreakpointConsumer2 />\n  </ActiveBreakpointProvider>\n);\n\nexport default ActiveBreakpointProviderExample;\n"},1986:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=a(t(0)),r=a(t(4)),o=a(t(1987));function a(e){return e&&e.__esModule?e:{default:e}}var s=r.default.bind(o.default),c=function(){return i.default.createElement("div",null,i.default.createElement("p",null,"This example uses Sass mixins to determine the active breakpoint."),i.default.createElement("p",{className:s("content")}))};n.default=c},1987:function(e,n,t){e.exports={content:"MixinsExample-module__content___2WkWn"}},1988:function(e,n,t){"use strict";t.r(n),n.default="import React from 'react';\nimport classNames from 'classnames/bind';\nimport styles from './MixinsExample.module.scss';\n\n/**\n  MixinsExample.module.scss\n\n  @import 'terra-breakpoints/mixins';\n\n  :local {\n    .content::after {\n      content: 'The active breakpoint is: tiny';\n\n      @include terra-mq-small-up {\n        content: 'The active breakpoint is: small';\n      }\n\n      @include terra-mq-medium-up {\n        content: 'The active breakpoint is: medium';\n      }\n\n      @include terra-mq-large-up {\n        content: 'The active breakpoint is: large';\n      }\n\n      @include terra-mq-huge-up {\n        content: 'The active breakpoint is: huge';\n      }\n\n      @include terra-mq-enormous-up {\n        content: 'The active breakpoint is: enormous';\n      }\n    }\n  }\n*/\n\nconst cx = classNames.bind(styles);\n\nconst MixinsExample = () => (\n  <div>\n    <p>This example uses Sass mixins to determine the active breakpoint.</p>\n    <p className={cx('content')} />\n  </div>\n);\n\nexport default MixinsExample;\n"},3617:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=u(t(0)),r=u(t(911)),o=u(t(1982)),a=t(1983),s=u(t(1984)),c=u(t(1985)),p=u(t(1986)),l=u(t(1988));function u(e){return e&&e.__esModule?e:{default:e}}var d=function(){return i.default.createElement(r.default,{packageName:a.name,readme:o.default,srcPath:"https://github.com/cerner/terra-core/tree/master/packages/".concat(a.name),examples:[{title:"ActiveBreakpointProvider Example",example:i.default.createElement(s.default,null),source:c.default},{title:"Mixin Example",example:i.default.createElement(p.default,null),source:l.default}]})};n.default=d},912:function(e,n){}}]);
//# sourceMappingURL=161-5c9765a10065cbd8e862.js.map