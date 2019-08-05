(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{1311:function(e){e.exports=JSON.parse('{"_from":"terra-application-utility@^2.0.0","_id":"terra-application-utility@2.18.0","_inBundle":false,"_integrity":"sha512-Zt7+xicDirpK0TBZdvl9XMk43S4t1CePbDLmfm7pfAoUxnCRO9NoSjf8h+x3JV1DXJY+yCzpXJIMxOCq8arkZg==","_location":"/terra-application-utility","_phantomChildren":{},"_requested":{"type":"range","registry":true,"raw":"terra-application-utility@^2.0.0","name":"terra-application-utility","escapedName":"terra-application-utility","rawSpec":"^2.0.0","saveSpec":null,"fetchSpec":"^2.0.0"},"_requiredBy":["/","/terra-application-layout"],"_resolved":"https://registry.npmjs.org/terra-application-utility/-/terra-application-utility-2.18.0.tgz","_shasum":"0fe23cbf91c335f891e72c7b6c539120d435298d","_spec":"terra-application-utility@^2.0.0","_where":"/home/travis/build/cerner/terra-ui","author":{"name":"Cerner Corporation"},"bugs":{"url":"https://github.com/cerner/terra-framework/issues"},"bundleDependencies":false,"dependencies":{"classnames":"^2.2.5","prop-types":"^15.5.8","terra-arrange":"^3.0.0","terra-button":"^3.3.0","terra-content-container":"^3.0.0","terra-icon":"^3.1.0"},"deprecated":false,"description":"The Utility is used to disclose a utility menu. There are two versions - a header version and menu version. These should be used with the corresponding `terra-application-header-layout` and `terra-application-menu-layout` components.","devDependencies":{"terra-application-header-layout":"^3.14.0","terra-application-menu-layout":"^3.10.0","terra-doc-template":"^2.2.0","terra-image":"^3.0.0"},"gitHead":"f763d8f2d030d85d834554d5c2eca6f2917f2eac","homepage":"https://github.com/cerner/terra-framework#readme","keywords":["Cerner","Terra","Framework","terra-application-utility","ApplicationUtility","UI"],"license":"Apache-2.0","main":"lib/ApplicationUtility.js","name":"terra-application-utility","peerDependencies":{"react":"^16.8.5","react-dom":"^16.8.5","react-intl":"^2.8.0"},"repository":{"type":"git","url":"git+https://github.com/cerner/terra-framework.git"},"scripts":{"compile":"babel --root-mode upward src --out-dir lib --copy-files","lint":"npm run lint:js && npm run lint:scss","lint:js":"eslint --ext .js,.jsx . --ignore-path ../../.eslintignore","lint:scss":"stylelint src/**/*.scss","precompile":"rm -rf lib","test":"npm run test:jest && npm run test:wdio","test:jest":"jest --config ../../jestconfig.js","test:wdio":"../../node_modules/.bin/wdio ../../node_modules/terra-dev-site/config/wdio/wdio.conf.js"},"version":"2.18.0"}')},1312:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n(1110),a=function(e){return[{key:"menu",title:"Menu",contentLocation:i.UtilityUtils.LOCATIONS.BODY,isSelected:!1,isSelectable:!1,metaData:{otherInformation:"Other Information"},childKeys:["item-1","item-2","item-3","item-4","item-5","item-6","item-7","item-8"]},{key:"item-1",title:"Item 1",content:e,contentLocation:i.UtilityUtils.LOCATIONS.BODY,isSelected:!1,isSelectable:!1,childKeys:["item-1.1"]},{key:"item-2",title:"Item 2",isSelected:!1,isSelectable:!1,childKeys:["item-2.1","item-2.2"],id:"test-item-2"},{key:"item-3",title:"item-3",contentLocation:i.UtilityUtils.LOCATIONS.FOOTER,isSelected:!1,isSelectable:!1,childKeys:[]},{key:"item-4",title:"Item 4",contentLocation:i.UtilityUtils.LOCATIONS.BODY,isSelected:!1,isSelectable:!1,childKeys:["item-4.1","item-4.2","item-4.3"]},{key:"item-1.1",title:"Item 1.1",contentLocation:i.UtilityUtils.LOCATIONS.BODY,isSelected:!1,isSelectable:!1,metaData:{otherInformation:"Other Information"},childKeys:[]},{key:"item-2.1",title:"Item 2.1",contentLocation:i.UtilityUtils.LOCATIONS.BODY,isSelected:!1,isSelectable:!1,childKeys:[]},{key:"item-2.2",title:"Item 2.2",contentLocation:i.UtilityUtils.LOCATIONS.BODY,isSelected:!1,isSelectable:!1,childKeys:[]},{key:"item-4.1",title:"Item 4.1",contentLocation:i.UtilityUtils.LOCATIONS.BODY,isSelected:!1,isSelectable:!1,childKeys:[]},{key:"item-4.2",title:"Item 4.2",contentLocation:i.UtilityUtils.LOCATIONS.BODY,isSelected:!1,isSelectable:!1,childKeys:[]},{key:"item-4.3",title:"Item 4.3",contentLocation:i.UtilityUtils.LOCATIONS.BODY,isSelected:!1,isSelectable:!1,childKeys:[]},{key:"item-5",title:"Item 5",contentLocation:i.UtilityUtils.LOCATIONS.BODY,isSelected:!1,isSelectable:!1,childKeys:["item-5.1","item-5.2"]},{key:"item-5.1",title:"Item 5.1",contentLocation:i.UtilityUtils.LOCATIONS.BODY,isSelected:!1,isSelectable:!0,childKeys:[]},{key:"item-5.2",title:"Item 5.2",contentLocation:i.UtilityUtils.LOCATIONS.BODY,isSelected:!1,isSelectable:!0,childKeys:[]},{key:"item-6",title:"Item 6",contentLocation:i.UtilityUtils.LOCATIONS.FOOTER,isSelected:!1,isSelectable:!0,childKeys:[]},{key:"item-7",title:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",contentLocation:i.UtilityUtils.LOCATIONS.BODY,isSelected:!0,isSelectable:!1,childKeys:[],id:"test-item-7"},{key:"item-8",title:"Read Only Item",contentLocation:i.UtilityUtils.LOCATIONS.BODY,isReadOnly:!0,isSelected:!1,isSelectable:!1,childKeys:[],id:"test-item-8"}]};t.default=a},1313:function(e,t,n){e.exports=n.p+"5ac56bd6333aa005424656ce9be56939.svg"},1892:function(e,t,n){"use strict";n.r(t),t.default="# Terra Application Utility\n\nThe Utility is used to disclose a utility menu. There are two versions - a header version and menu version. These should be used with the corresponding `terra-application-header-layout` and `terra-application-menu-layout` components.\n\n## Getting Started\n\n- Install with [npmjs](https://www.npmjs.com):\n  - `npm install terra-application-utility`\n\n\x3c!-- AUTO-GENERATED-CONTENT:START Peer Dependencies --\x3e\n## Peer Dependencies\n\n<details>\n<summary>View information on this component's peer dependencies.</summary>\n\nThis component requires the following peer dependencies be installed in your app for the component to properly function.\n\n| Peer Dependency | Version |\n|-|-|\n| react | ^16.8.5 |\n| react-dom | ^16.8.5 |\n| react-intl | ^2.8.0 |\n\n\n</details>\n\x3c!-- AUTO-GENERATED-CONTENT:END --\x3e\n\n## Menu Items\nThe menu items are generated from an array of menu item objects, which can contain up to eight attributes: `childKeys`, `content`, `contentLocation`, `isSelected`, `isSelectable`, `key`, `metaData`, and `title`.\n\n1. `childKeys` is an optional array of `keys` (strings). Enables a nested page to be rendered when this menu item is selected. For each menu item within the nested page, store it's `key` within this `childKeys` array.\n2. `content` is an optional object. Enables custom components to be rendered as *body* items. Avoid using `content` as a footer item - it will always render as a button.\n3. `contentLocation` is an optional string, one of `UtilityUtils.LOCATIONS.BODY` or `UtilityUtils.LOCATIONS.FOOTER`. Indicates if an item will render within the body or footer. Body items will render as list items, while footer items will render as buttons. Items will default to *body* if `contentLocation` is not provided.\n4. `isReadOnly` is an optional boolean. It removes interactivity and interactive styling from an item, and prevents menu closure when clicked directly.\n5. `isSelected` is an optional boolean. Enables a HOC to manage the selected states of each item.\n6. `isSelectable` is an optional boolean. Indicates if an item is selectable. A checkmark will toggle on item selection.\n7. `key` is **required**. Must be a unique value to differentiate itself from other items. `key` is returned, along with `metaData`, within the onChange.\n8. `metaData` is an optional object. Use this to store other data for this menu item, such as its parent `key` or another function. `metaData` is returned, along with `key`, within the onChange.\n9. `title` is an optional string. Sets the text to render for this item. If this menu item contains `childrenKeys`, `title` will be used as the header text for the nested page.\n\nDisplayed below is the explicit structure of a menu item:\n\n```javascript\nPropTypes.shape({\n  /**\n   * Array containing the keys of each child item of this item.\n   */\n  childKeys: PropTypes.arrayOf(PropTypes.string),\n  /**\n   * The component associated with this item.\n   */\n  content: PropTypes.object,\n  /**\n   * The location to place the item. One of UtilityUtils.LOCATIONS.BODY, UtilityUtils.LOCATIONS.FOOTER.\n   */\n  contentLocation: PropTypes.oneOf([LOCATIONS.BODY, LOCATIONS.FOOTER]),\n  /**\n   * Whether the item is read-only.\n   */\n  isReadOnly: PropTypes.bool,\n  /**\n   * Boolean indicating if the item is selected.\n   */\n  isSelected: PropTypes.bool,\n  /**\n   * Boolean indicating if the item is selectable.\n   */\n  isSelectable: PropTypes.bool,\n  /**\n   * The unique key associated with this item.\n   */\n  key: PropTypes.string.isRequired,\n  /**\n   * Optional meta data to be returned along with the item key within the onChange.\n   */\n  metaData: PropTypes.object,\n  /**\n   * The text associated with this item.\n   */\n  title: PropTypes.string,\n});\n```\nFor reference, checkout the [sample menu item config](https://github.com/cerner/terra-framework/blob/master/packages/terra-application-utility/src/terra-dev-site/doc/common/MockConfig.js) used for the bottom `Utility Menu` example.\n\n## Component Features\n\n * [Cross-Browser Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#cross-browser-support)\n  * [babel-pollyfill](https://babeljs.io/docs/usage/polyfill) is needed needed to support usage of the Map object in IE.\n * [Responsive Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#responsive-support)\n * [Mobile Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#mobile-support)\n * [Internationalization Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#internationalization-i18n-support)\n * [Localization Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#internationalization-i18n-support)\n * [LTR/RTL Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#ltr--rtl-support)\n"},1893:function(e,t,n){"use strict";n.r(t),t.default="import React from 'react';\nimport PropTypes from 'prop-types';\nimport Utils from './Utils';\nimport UtilityButton from './utility/_UtilityButton';\n\nconst propTypes = {\n  /**\n   * The array containing the menu items to be rendered within the menu.\n   */\n  menuItems: PropTypes.arrayOf(Utils.itemShape).isRequired,\n  /**\n   * The function to trigger when a menu item is selected.\n   * Returns `(event, { key: String, metaData: Object})`\n   */\n  onChange: PropTypes.func.isRequired,\n  /**\n   * The function that discloses the menu.\n   */\n  onDisclose: PropTypes.func.isRequired,\n  /**\n   * The key of the top level menu page.\n   */\n  initialSelectedKey: PropTypes.string.isRequired,\n  /**\n   * The text to be displayed.\n   */\n  title: PropTypes.string,\n  /**\n   * The accessory element to be displayed next to the title.\n   */\n  accessory: PropTypes.element,\n  /**\n   * The role attribute to set on the menu.\n   */\n  menuRole: PropTypes.string,\n};\n\nconst defaultProps = {\n  menuRole: 'navigation',\n};\n\nconst ApplicationHeaderUtility = ({\n  menuItems,\n  onChange,\n  onDisclose,\n  initialSelectedKey,\n  title,\n  accessory,\n  menuRole,\n  ...customProps\n}) => (\n  <UtilityButton\n    {...customProps}\n    menuItems={menuItems}\n    onChange={onChange}\n    onDisclose={onDisclose}\n    initialSelectedKey={initialSelectedKey}\n    title={title}\n    accessory={accessory}\n    menuRole={menuRole}\n    variant={Utils.VARIANTS.HEADER}\n  />\n);\n\nApplicationHeaderUtility.propTypes = propTypes;\nApplicationHeaderUtility.defaultProps = defaultProps;\n\nexport default ApplicationHeaderUtility;\n"},1894:function(e,t,n){"use strict";var i=n(5);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(n(20)),o=i(n(24)),s=i(n(25)),l=i(n(26)),r=i(n(31)),c=i(n(27)),d=i(n(0)),u=i(n(211)),p=i(n(1312)),m=i(n(1313)),y=n(1110),h=i(n(4)),f=i(n(1895)),b=h.default.bind(f.default),v=function(e){function t(e){var n;return(0,a.default)(this,t),(n=(0,s.default)(this,(0,l.default)(t).call(this,e))).onDiscloseUtility=n.onDiscloseUtility.bind((0,r.default)(n)),n.state={discloseCount:0},n}return(0,c.default)(t,e),(0,o.default)(t,[{key:"onDiscloseUtility",value:function(){this.setState(function(e){return{discloseCount:e.discloseCount+1}})}},{key:"render",value:function(){var e=d.default.createElement(u.default,{alt:"Fallback Avatar",src:m.default});return d.default.createElement("div",{className:b("container")},d.default.createElement("div",{className:b("content-wrapper")},d.default.createElement(y.ApplicationHeaderUtility,{menuItems:(0,p.default)(e),onChange:function(){},onDisclose:this.onDiscloseUtility,initialSelectedKey:"menu",title:"User Name",accessory:e,variant:y.UtilityUtils.VARIANTS.HEADER})),d.default.createElement("div",null,"Disclose count: ".concat(this.state.discloseCount)))}}]),t}(d.default.Component);t.default=v},1895:function(e,t,n){e.exports={container:"ApplicationHeaderUtilityExample-module__container___1Gd2t","content-wrapper":"ApplicationHeaderUtilityExample-module__content-wrapper___1HkRW"}},1896:function(e,t,n){"use strict";var i=n(5);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(n(20)),o=i(n(24)),s=i(n(25)),l=i(n(26)),r=i(n(31)),c=i(n(27)),d=i(n(0)),u=i(n(211)),p=i(n(1312)),m=i(n(1313)),y=n(1110),h=i(n(4)),f=i(n(1897)),b=h.default.bind(f.default),v=function(e){function t(e){var n;return(0,a.default)(this,t),(n=(0,s.default)(this,(0,l.default)(t).call(this,e))).onDiscloseUtility=n.onDiscloseUtility.bind((0,r.default)(n)),n.handleOnChange=n.handleOnChange.bind((0,r.default)(n)),n.state={discloseCount:0,selectedKey:null},n}return(0,c.default)(t,e),(0,o.default)(t,[{key:"onDiscloseUtility",value:function(){this.setState(function(e){return{discloseCount:e.discloseCount+1}})}},{key:"handleOnChange",value:function(e,t){this.setState({selectedKey:t})}},{key:"render",value:function(){var e=d.default.createElement(u.default,{alt:"Fallback Avatar",src:m.default});return d.default.createElement("div",null,d.default.createElement("div",{className:b("content-wrapper")},d.default.createElement(y.ApplicationMenuUtility,{menuItems:(0,p.default)(e),onChange:this.handleOnChange,onDisclose:this.onDiscloseUtility,initialSelectedKey:"menu",title:"User Name",accessory:e,variant:y.UtilityUtils.VARIANTS.MENU})),d.default.createElement("div",null,"Trigger event for: ".concat(this.state.selectedKey,".")),d.default.createElement("div",null,"Disclose count: ".concat(this.state.discloseCount,".")))}}]),t}(d.default.Component);t.default=v},1897:function(e,t,n){e.exports={"content-wrapper":"ApplicationMenuUtilityExample-module__content-wrapper___3KXQl"}},1898:function(e,t,n){"use strict";var i=n(5);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(n(20)),o=i(n(24)),s=i(n(25)),l=i(n(26)),r=i(n(31)),c=i(n(27)),d=i(n(0)),u=i(n(211)),p=i(n(1312)),m=i(n(1313)),y=n(1110),h=i(n(1454)),f=i(n(4)),b=i(n(1899)),v=f.default.bind(b.default),g=function(e){function t(e){var n;return(0,a.default)(this,t),(n=(0,s.default)(this,(0,l.default)(t).call(this,e))).handleOnChange=n.handleOnChange.bind((0,r.default)(n)),n.handleOnRequestClose=n.handleOnRequestClose.bind((0,r.default)(n)),n.state={selectedKey:null,requestCloseCount:0},n}return(0,c.default)(t,e),(0,o.default)(t,[{key:"handleOnChange",value:function(e,t){this.setState({selectedKey:t.key})}},{key:"handleOnRequestClose",value:function(){this.setState(function(e){return{requestCloseCount:e.requestCloseCount+1}})}},{key:"render",value:function(){var e=d.default.createElement(u.default,{alt:"Fallback Avatar",src:m.default,className:v("avatar")});return d.default.createElement("div",null,d.default.createElement("div",{className:v("content-wrapper")},d.default.createElement(h.default,{initialSelectedKey:"menu",isHeightBounded:!0,menuItems:(0,p.default)(e),onChange:this.handleOnChange,onRequestClose:this.handleOnRequestClose,variant:y.UtilityUtils.VARIANTS.MENU})),d.default.createElement("div",null,"Trigger event for: ".concat(this.state.selectedKey)),d.default.createElement("div",null,"Request close count: ".concat(this.state.requestCloseCount)))}}]),t}(d.default.Component);t.default=g},1899:function(e,t,n){e.exports={avatar:"MenuUtilityMenuExample-module__avatar___12DRF","content-wrapper":"MenuUtilityMenuExample-module__content-wrapper___vLO2I"}},1900:function(e,t,n){"use strict";n.r(t),t.default="import React from 'react';\nimport Image from 'terra-image';\n/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */\nimport MockConfig from 'terra-application-utility/lib/terra-dev-site/doc/common/MockConfig';\nimport FallbackAvatar from 'terra-application-utility/lib/terra-dev-site/doc/common/FallbackAvatar.svg';\nimport { ApplicationHeaderUtility, UtilityUtils } from 'terra-application-utility/lib/ApplicationUtility';\nimport classNames from 'classnames/bind';\nimport styles from './ApplicationHeaderUtilityExample.module.scss';\n/* eslint-enable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */\n\nconst cx = classNames.bind(styles);\n\nclass ApplicationHeaderUtilityExample extends React.Component {\n  constructor(props) {\n    super(props);\n    this.onDiscloseUtility = this.onDiscloseUtility.bind(this);\n    this.state = {\n      discloseCount: 0,\n    };\n  }\n\n  onDiscloseUtility() {\n    this.setState(prevState => ({ discloseCount: prevState.discloseCount + 1 }));\n  }\n\n  render() {\n    const accessory = <Image alt=\"Fallback Avatar\" src={FallbackAvatar} />;\n    const title = 'User Name';\n\n    return (\n      <div className={cx('container')}>\n        <div className={cx('content-wrapper')}>\n          <ApplicationHeaderUtility\n            menuItems={MockConfig(accessory)}\n            onChange={() => {}}\n            onDisclose={this.onDiscloseUtility}\n            initialSelectedKey=\"menu\"\n            title={title}\n            accessory={accessory}\n            variant={UtilityUtils.VARIANTS.HEADER}\n          />\n        </div>\n        <div>{`Disclose count: ${this.state.discloseCount}`}</div>\n      </div>\n    );\n  }\n}\n\nexport default ApplicationHeaderUtilityExample;\n"},1901:function(e,t,n){"use strict";n.r(t),t.default="import React from 'react';\nimport Image from 'terra-image';\n/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */\nimport MockConfig from 'terra-application-utility/lib/terra-dev-site/doc/common/MockConfig';\nimport FallbackAvatar from 'terra-application-utility/lib/terra-dev-site/doc/common/FallbackAvatar.svg';\nimport { UtilityUtils } from 'terra-application-utility/lib/ApplicationUtility';\nimport UtilityMenu from 'terra-application-utility/lib/utility/_UtilityMenu';\nimport classNames from 'classnames/bind';\nimport styles from './MenuUtilityMenuExample.module.scss';\n/* eslint-enable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */\n\nconst cx = classNames.bind(styles);\n\nclass MenuUtilityMenuExample extends React.Component {\n  constructor(props) {\n    super(props);\n    this.handleOnChange = this.handleOnChange.bind(this);\n    this.handleOnRequestClose = this.handleOnRequestClose.bind(this);\n    this.state = {\n      selectedKey: null,\n      requestCloseCount: 0,\n    };\n  }\n\n  handleOnChange(event, object) {\n    this.setState({ selectedKey: object.key });\n  }\n\n  handleOnRequestClose() {\n    this.setState(prevState => ({ requestCloseCount: prevState.requestCloseCount + 1 }));\n  }\n\n  render() {\n    const customComponent = <Image alt=\"Fallback Avatar\" src={FallbackAvatar} className={cx('avatar')} />;\n    return (\n      <div>\n        <div className={cx('content-wrapper')}>\n          <UtilityMenu\n            initialSelectedKey=\"menu\"\n            isHeightBounded\n            menuItems={MockConfig(customComponent)}\n            onChange={this.handleOnChange}\n            onRequestClose={this.handleOnRequestClose}\n            variant={UtilityUtils.VARIANTS.MENU}\n          />\n        </div>\n        <div>{`Trigger event for: ${this.state.selectedKey}`}</div>\n        <div>{`Request close count: ${this.state.requestCloseCount}`}</div>\n      </div>\n    );\n  }\n}\n\nexport default MenuUtilityMenuExample;\n"},1902:function(e,t,n){"use strict";n.r(t),t.default="import React from 'react';\nimport Image from 'terra-image';\n/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */\nimport MockConfig from 'terra-application-utility/lib/terra-dev-site/doc/common/MockConfig';\nimport FallbackAvatar from 'terra-application-utility/lib/terra-dev-site/doc/common/FallbackAvatar.svg';\nimport { ApplicationMenuUtility, UtilityUtils } from 'terra-application-utility/lib/ApplicationUtility';\nimport classNames from 'classnames/bind';\nimport styles from './ApplicationMenuUtilityExample.module.scss';\n/* eslint-enable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */\n\nconst cx = classNames.bind(styles);\n\nclass ApplicationMenuUtilityExample extends React.Component {\n  constructor(props) {\n    super(props);\n    this.onDiscloseUtility = this.onDiscloseUtility.bind(this);\n    this.handleOnChange = this.handleOnChange.bind(this);\n    this.state = {\n      discloseCount: 0,\n      selectedKey: null,\n    };\n  }\n\n  onDiscloseUtility() {\n    this.setState(prevState => ({ discloseCount: prevState.discloseCount + 1 }));\n  }\n\n  handleOnChange(event, key) {\n    this.setState({ selectedKey: key });\n  }\n\n  render() {\n    const accessory = <Image alt=\"Fallback Avatar\" src={FallbackAvatar} />;\n    const title = 'User Name';\n\n    return (\n      <div>\n        <div className={cx('content-wrapper')}>\n          <ApplicationMenuUtility\n            menuItems={MockConfig(accessory)}\n            onChange={this.handleOnChange}\n            onDisclose={this.onDiscloseUtility}\n            initialSelectedKey=\"menu\"\n            title={title}\n            accessory={accessory}\n            variant={UtilityUtils.VARIANTS.MENU}\n          />\n        </div>\n        <div>{`Trigger event for: ${this.state.selectedKey}.`}</div>\n        <div>{`Disclose count: ${this.state.discloseCount}.`}</div>\n      </div>\n    );\n  }\n}\n\nexport default ApplicationMenuUtilityExample;\n"},3597:function(e,t,n){"use strict";var i=n(5);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(n(0)),o=i(n(911)),s=n(1311),l=i(n(1892)),r=i(n(1893)),c=i(n(1894)),d=i(n(1896)),u=i(n(1898)),p=i(n(1900)),m=i(n(1901)),y=i(n(1902)),h=function(){return a.default.createElement(o.default,{packageName:s.name,readme:l.default,srcPath:"https://github.com/cerner/terra-framework/tree/master/packages/".concat(s.name),examples:[{title:"Header: Utility",example:a.default.createElement(c.default,null),source:p.default},{title:"Menu: Utility",example:a.default.createElement(d.default,null),source:y.default},{title:"Utility Menu",example:a.default.createElement(u.default,null),source:m.default}],propsTables:[{componentSrc:r.default}]})};t.default=h}}]);
//# sourceMappingURL=107-6a6a7cc6765284672f70.js.map