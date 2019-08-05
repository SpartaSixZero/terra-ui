(window.webpackJsonp=window.webpackJsonp||[]).push([[133,376,377,378,379,380,381,382,383,384,385,386,387,388,389,390,391,392,393,394,395,396,397,398,399,400,401,402,403,404,405,406,407,408,409,410,411,412,413,414,415,416,417,418,419,420,421,422,423,424,425,426,427,428,429,430,431,432,433,434,435,436,437,438,439],{1393:function(e){e.exports=JSON.parse('{"_from":"terra-theme-provider@^3.0.0","_id":"terra-theme-provider@3.9.0","_inBundle":false,"_integrity":"sha512-DniAaVJifPsf6claAzdqpwBhMjQx/DByHz+1O8Bh5tqnfgGWWxIsudRYHbpp6S1eQBai/Sln8p8Dr5Ne5+9CSw==","_location":"/terra-theme-provider","_phantomChildren":{},"_requested":{"type":"range","registry":true,"raw":"terra-theme-provider@^3.0.0","name":"terra-theme-provider","escapedName":"terra-theme-provider","rawSpec":"^3.0.0","saveSpec":null,"fetchSpec":"^3.0.0"},"_requiredBy":["/","/terra-application"],"_resolved":"https://registry.npmjs.org/terra-theme-provider/-/terra-theme-provider-3.9.0.tgz","_shasum":"3fa86c83954c98dfe32e02853eaee7783ee2555e","_spec":"terra-theme-provider@^3.0.0","_where":"/home/travis/build/cerner/terra-ui","author":{"name":"Cerner Corporation"},"bugs":{"url":"https://github.com/cerner/terra-framework/issues"},"bundleDependencies":false,"dependencies":{"classnames":"^2.2.5","prop-types":"^15.5.8","terra-mixins":"^1.0.0"},"deprecated":false,"description":"The theme provider component provides a theme to Terra UI components rendered within it via CSS custom properties a.k.a CSS variables.","devDependencies":{"terra-doc-template":"^2.2.0"},"gitHead":"f763d8f2d030d85d834554d5c2eca6f2917f2eac","homepage":"https://github.com/cerner/terra-framework#readme","keywords":["Cerner","Terra","terra-theme-provider","ThemeProvider","UI"],"license":"Apache-2.0","main":"lib/ThemeProvider.js","name":"terra-theme-provider","peerDependencies":{"react":"^16.8.5","react-dom":"^16.8.5"},"repository":{"type":"git","url":"git+https://github.com/cerner/terra-framework.git"},"scripts":{"compile":"babel --root-mode upward src --out-dir lib --copy-files","lint":"npm run lint:js && npm run lint:scss","lint:js":"eslint --ext .js,.jsx . --ignore-path ../../.eslintignore","lint:scss":"stylelint src/**/*.scss","precompile":"rm -rf lib","test":"npm run test:jest && npm run test:wdio","test:jest":"jest --config ../../jestconfig.js","test:wdio":"../../node_modules/.bin/wdio ../../node_modules/terra-dev-site/config/wdio/wdio.conf.js"},"version":"3.9.0"}')},3468:function(e,t,n){"use strict";n.r(t),t.default="# Terra Theme Provider\n\nThe theme provider component provides a theme to Terra UI components rendered within it via CSS custom properties a.k.a CSS variables. This is accomplished by setting a CSS class which contains defined CSS custom properties for the specified theme on the DOM element that wraps the children rendered by the theme provider.\n\nIf you need to theme styles on to the `html` or `body` elements applied in terra-base, you can set the `isGlobalTheme` prop on the theme provider component. This will set the CSS class generated from the `themeName` prop on the `html` element.\n\n*Note:*\n* Apps should only use the `isGlobalTheme` prop on one theme provider component.\n* The CSS custom properties applied via the theme provided only works in browsers which have native support for CSS custom properties.\n\n## Theme Names\nThe theme provider component offers a set of first class terra theme names via `ThemeProvider.Opts.Themes`.\nThese are intended to be used with the `themeName` prop:\n\n`<ThemeProvider themeName={ThemeProvider.Opts.Themes.CONSUMER}>`\n\nThe following themes are available via `ThemeProvider.Opts.Themes`\n\n* `CONSUMER` Theme for consumer user experience\n* `MOCK` Theme for mock testing\n\n## Getting Started\n\n- Install with [npmjs](https://www.npmjs.com):\n  - `npm install terra-theme-provider`\n\n\x3c!-- AUTO-GENERATED-CONTENT:START Peer Dependencies --\x3e\n## Peer Dependencies\n\n<details>\n<summary>View information on this component's peer dependencies.</summary>\n\nThis component requires the following peer dependencies be installed in your app for the component to properly function.\n\n| Peer Dependency | Version |\n|-|-|\n| react | ^16.8.5 |\n| react-dom | ^16.8.5 |\n\n\n</details>\n\x3c!-- AUTO-GENERATED-CONTENT:END --\x3e\n\n"},3469:function(e,t,n){"use strict";n.r(t),t.default="import React from 'react';\nimport PropTypes from 'prop-types';\nimport className from 'classnames';\n\nconst cx = className;\n\nconst ThemeProviderThemes = {\n  CONSUMER: 'cerner-consumer-theme',\n  MOCK: 'cerner-mock-theme',\n};\n\nconst propTypes = {\n  /**\n   * The component(s) that will be wrapped by `<ThemeProvider />`\n   */\n  children: PropTypes.node.isRequired,\n  /**\n   * Name of class for specified theme. e.g `cerner-consumer-theme`\n   */\n  themeName: PropTypes.string,\n  /**\n   * When set to true, applies theme class to HTML element\n   */\n  isGlobalTheme: PropTypes.bool,\n};\n\nconst defaultProps = {\n  isGlobalTheme: false,\n};\n\nclass ThemeProvider extends React.Component {\n  componentDidMount() {\n    if (this.props.isGlobalTheme === true && this.props.themeName) {\n      document.documentElement.classList.add(this.props.themeName);\n    }\n  }\n\n  componentDidUpdate(prevProps) {\n    if (this.props === prevProps) return;\n    if (this.props.isGlobalTheme === true) {\n      if (prevProps.themeName) {\n        document.documentElement.classList.remove(prevProps.themeName);\n      }\n\n      if (this.props.themeName) {\n        document.documentElement.classList.add(this.props.themeName);\n      }\n    }\n  }\n\n  componentWillUnmount() {\n    if (this.props.isGlobalTheme === true && this.props.themeName) {\n      document.documentElement.classList.remove(this.props.themeName);\n    }\n  }\n\n  render() {\n    const {\n      themeName, isGlobalTheme, children, ...customProps\n    } = this.props;\n    return (<div {...customProps} className={cx(themeName, customProps.className)}>{children}</div>);\n  }\n}\n\nThemeProvider.propTypes = propTypes;\nThemeProvider.defaultProps = defaultProps;\nThemeProvider.Opts = {};\nThemeProvider.Opts.Themes = ThemeProviderThemes;\n\nexport default ThemeProvider;\n"},3470:function(e,t,n){"use strict";var r=n(5);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n(20)),s=r(n(24)),a=r(n(25)),i=r(n(26)),m=r(n(31)),p=r(n(27)),d=r(n(0)),l=r(n(4)),h=r(n(366)),c=r(n(3471)),u=r(n(3474)),f=l.default.bind(u.default),v=function(e){function t(e){var n;return(0,o.default)(this,t),(n=(0,a.default)(this,(0,i.default)(t).call(this,e))).state={theme:""},n.handleThemeChange=n.handleThemeChange.bind((0,m.default)(n)),n}return(0,p.default)(t,e),(0,s.default)(t,[{key:"handleThemeChange",value:function(e){this.setState({theme:e.target.value})}},{key:"render",value:function(){var e;return e=window.CSS&&window.CSS.supports&&window.CSS.supports("(--fake-var: 0)")?d.default.createElement("div",{className:f("theme-switcher-wrapper")},d.default.createElement("label",{htmlFor:"theme"}," Theme: "),d.default.createElement("select",{id:"theme",value:this.state.theme,onChange:this.handleThemeChange},d.default.createElement("option",{value:""},"Default"),d.default.createElement("option",{value:h.default.Opts.Themes.MOCK},"Mock Theme"))):d.default.createElement("div",null),d.default.createElement("div",null,d.default.createElement("div",null,e),d.default.createElement(h.default,{themeName:this.state.theme},d.default.createElement("div",null,d.default.createElement(c.default,null,"Themable component"))))}}]),t}(d.default.Component);t.default=v},3471:function(e,t,n){"use strict";var r=n(5);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n(17)),s=r(n(34)),a=r(n(0)),i=r(n(2)),m=r(n(4)),p=r(n(3472));n(3473);var d=m.default.bind(p.default),l={children:i.default.node.isRequired},h=function(e){var t=e.children,n=(0,s.default)(e,["children"]);return a.default.createElement("div",(0,o.default)({},n,{className:d("mock-theme-component",n.className)}),t)};h.propTypes=l;var c=h;t.default=c},3472:function(e,t,n){e.exports={"mock-theme-component":"MockThemeComponent-module__mock-theme-component___1oj2b"}},3473:function(e,t,n){},3474:function(e,t,n){e.exports={"theme-switcher-wrapper":"DefaultThemeProvider-module__theme-switcher-wrapper___2NJ09"}},3475:function(e,t,n){"use strict";n.r(t),t.default="import React from 'react';\nimport classNames from 'classnames/bind';\n/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */\nimport ThemeProvider from 'terra-theme-provider/lib/ThemeProvider';\nimport MockThemeComponent from 'terra-theme-provider/lib/terra-dev-site/doc/example/MockThemeComponent';\n/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */\nimport styles from './DefaultThemeProvider.module.scss';\n\nconst cx = classNames.bind(styles);\n\nclass DefaultThemeProvider extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      theme: '',\n    };\n    this.handleThemeChange = this.handleThemeChange.bind(this);\n  }\n\n  handleThemeChange(e) {\n    this.setState({ theme: e.target.value });\n  }\n\n  render() {\n    let themeSwitcher;\n\n    function supportsCSSVars() {\n      return window.CSS && window.CSS.supports && window.CSS.supports('(--fake-var: 0)');\n    }\n\n    if (supportsCSSVars()) {\n      themeSwitcher = (\n        <div className={cx('theme-switcher-wrapper')}>\n          <label htmlFor=\"theme\"> Theme: </label>\n          <select id=\"theme\" value={this.state.theme} onChange={this.handleThemeChange}>\n            <option value=\"\">Default</option>\n            <option value={ThemeProvider.Opts.Themes.MOCK}>Mock Theme</option>\n          </select>\n        </div>\n      );\n    } else {\n      themeSwitcher = (\n        <div />\n      );\n    }\n\n    return (\n      <div>\n        <div>{themeSwitcher}</div>\n        <ThemeProvider themeName={this.state.theme}>\n          <div>\n            <MockThemeComponent>Themable component</MockThemeComponent>\n          </div>\n        </ThemeProvider>\n      </div>\n    );\n  }\n}\n\nexport default DefaultThemeProvider;\n"},3845:function(e,t,n){"use strict";var r=n(5);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n(0)),s=r(n(911)),a=n(1393),i=r(n(3468)),m=r(n(3469)),p=r(n(3470)),d=r(n(3475)),l=function(){return o.default.createElement(s.default,{packageName:a.name,readme:i.default,srcPath:"https://github.com/cerner/terra-framework/tree/master/packages/".concat(a.name),examples:[{title:"Example Theme Provider",example:o.default.createElement(p.default,null),source:d.default}],propsTables:[{componentSrc:m.default}]})};t.default=l},912:function(e,t){}}]);
//# sourceMappingURL=133-a8f57a3cf69e4a34d8f2.js.map