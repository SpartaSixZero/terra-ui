(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{2494:function(e,t,n){"use strict";n.r(t),t.default="# Terra Form Select\n\nThe Select component provides a dropdown of selectable options.\n\n## Getting Started\n\n- Install with [npmjs](https://www.npmjs.com):\n  - `npm install terra-form-select`\n\n\x3c!-- AUTO-GENERATED-CONTENT:START Peer Dependencies --\x3e\n## Peer Dependencies\n\n<details>\n<summary>View information on this component's peer dependencies.</summary>\n\nThis component requires the following peer dependencies be installed in your app for the component to properly function.\n\n| Peer Dependency | Version |\n|-|-|\n| react | ^16.8.5 |\n| react-dom | ^16.8.5 |\n| react-intl | ^2.8.0 |\n\n\n</details>\n\x3c!-- AUTO-GENERATED-CONTENT:END --\x3e\n\n## Implementation Notes:\n\nThe Form-Select component must be composed inside the [Base][1] component with a locale in order for it to load the correct translation strings.\n\n[1]: https://github.com/cerner/terra-core/tree/master/packages/terra-base/docs\n\n## Component Features\n\n * [Cross-Browser Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#cross-browser-support)\n * [Responsive Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#responsive-support)\n * [Mobile Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#mobile-support)\n * [Internationalization Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#internationalization-i18n-support)\n * [Localization Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#internationalization-i18n-support)\n * [LTR/RTL Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#ltr--rtl-support)\n"},2495:function(e,t,n){"use strict";n.r(t),t.default="import React from 'react';\nimport PropTypes from 'prop-types';\nimport classNames from 'classnames/bind';\nimport SharedUtil from './_SharedUtil';\nimport styles from './_Option.module.scss';\n\nconst cx = classNames.bind(styles);\n\nconst propTypes = {\n  /**\n   * Whether the option is disabled.\n   */\n  disabled: PropTypes.bool,\n  /**\n   * The display text of the option.\n   */\n  display: PropTypes.string,\n  /**\n   * @private\n   * Whether the option is active.\n   */\n  isActive: PropTypes.bool,\n  /**\n   * @private\n   * Whether the option is a custom text entry.\n   */\n  isAddOption: PropTypes.bool,\n  /**\n   * @private\n   * Whether the option is checkable.\n   */\n  isCheckable: PropTypes.bool,\n  /**\n   * @private\n   * Whether the option is selected.\n   */\n  isSelected: PropTypes.bool,\n  /**\n   * The value of the option. The value must be unique.\n   */\n  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,\n  /**\n   * @private\n   * Variant of select component\n   */\n  variant: PropTypes.string,\n};\n\nconst defaultProps = {\n  disabled: false,\n  display: undefined,\n};\n\nconst Option = ({\n  disabled,\n  display,\n  value,\n  variant,\n  isActive,\n  isSelected,\n  isCheckable,\n  isAddOption,\n  ...customProps\n}) => {\n  const optionClassNames = cx([\n    'option',\n    { 'is-active': isActive },\n    { 'is-checkable': isCheckable && !isAddOption },\n    { 'is-default': !isCheckable && !isAddOption },\n    { 'is-disabled': disabled },\n    { 'is-selected': isSelected },\n    { 'is-add-option': isAddOption },\n    customProps.className,\n  ]);\n\n  let role = 'option'; // Used for JAWs and VoiceOver on iOS\n\n  /**\n   * VoiceOver in Safari on desktop has issues with role=\"option\" with the combination of the\n   * aria-live section we have and will stutter when reading options.\n   * Switching to role=\"radio\" and role=\"checkbox\" mitigates this behavior.\n   */\n  if (SharedUtil.isSafari() && !('ontouchstart' in window)) {\n    role = 'radio';\n\n    if (variant === 'tag' || variant === 'multiple') {\n      role = 'checkbox';\n    }\n  }\n\n  return (\n    <li\n      role={role}\n      {...customProps}\n      disabled={disabled}\n      className={optionClassNames}\n      aria-selected={isSelected} // Needed to allow VoiceOver on iOS to announce selected state\n      aria-checked={isSelected} // Needed to allow JAWS to announce \"selected\" state\n      aria-disabled={disabled}\n      tabIndex=\"0\" // eslint-disable-line jsx-a11y/no-noninteractive-tabindex\n      data-terra-select-option\n    >\n      {(isCheckable || isAddOption) && <span className={cx('icon')} />}\n      <span className={cx('display')}>{display}</span>\n    </li>\n  );\n};\n\nOption.propTypes = propTypes;\nOption.defaultProps = defaultProps;\nOption.isOption = true;\n\nexport default Option;\n"},2496:function(e,t,n){"use strict";n.r(t),t.default="import React from 'react';\nimport PropTypes from 'prop-types';\nimport classNames from 'classnames/bind';\nimport styles from './_OptGroup.module.scss';\n\nconst cx = classNames.bind(styles);\n\nconst propTypes = {\n  /**\n   * The group options.\n   */\n  children: PropTypes.node,\n  /**\n   * Whether the option group is disabled.\n   */\n  disabled: PropTypes.bool,\n  /**\n   * The group label.\n   */\n  label: PropTypes.node.isRequired,\n};\n\nconst defaultProps = {\n  disabled: false,\n};\n\nconst OptGroup = ({ children, disabled, label }) => (\n  <li className={cx('opt-group', { 'is-disabled': disabled })} role=\"group\">\n    <div className={cx('label')}>\n      {label}\n    </div>\n    <ul className={cx('options')} role=\"listbox\">\n      {React.Children.map(children, child => (\n        React.cloneElement(child, { disabled: disabled || !!child.props.disabled })))}\n    </ul>\n  </li>\n);\n\n\nOptGroup.propTypes = propTypes;\nOptGroup.defaultProps = defaultProps;\nOptGroup.isOptGroup = true;\n\nexport default OptGroup;\n"},2497:function(e,t,n){"use strict";n.r(t),t.default="import React from 'react';\nimport PropTypes from 'prop-types';\nimport Variants from './_constants';\nimport DropdownMenu from './_Menu';\nimport Frame from './_Frame';\nimport Option from './_Option';\nimport OptGroup from './_OptGroup';\nimport Tag from './_Tag';\nimport Util from './_SelectUtil';\n\nconst propTypes = {\n  /**\n   * Whether a clear option is available to clear the selection, will use placeholder text if provided.\n   * This is not applicable to the `multiple` or `tag` variants since the selection can already be deselected using the tag.\n   */\n  allowClear: PropTypes.bool,\n  /**\n   * The dropdown menu options.\n   */\n  children: PropTypes.node,\n  /**\n   * The default selected value.\n   */\n  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.array]),\n  /**\n   * Whether the select is disabled.\n   */\n  disabled: PropTypes.bool,\n  /**\n   * Additional attributes to spread onto the dropdown. ( Style, ClassNames, etc.. )\n   */\n  // eslint-disable-next-line react/forbid-prop-types\n  dropdownAttrs: PropTypes.object,\n  /**\n   * Whether the select is in an invalid state.\n   */\n  isInvalid: PropTypes.bool,\n  /**\n   * The max height of the dropdown.\n   */\n  maxHeight: PropTypes.number,\n  /**\n   * @private The maximum number of options that can be selected. A value less than 2 will be ignored.\n   * Only applicable to variants allowing multiple selections (e.g.; `multiple`; `tag`).\n   */\n  maxSelectionCount: PropTypes.number,\n  /**\n   * Content to display when no results are found.\n   */\n  noResultContent: PropTypes.node,\n  /**\n   * Callback function triggered when the select loses focus. function(event)\n   */\n  onBlur: PropTypes.func,\n  /**\n   * Callback function triggered when the value changes. function(value)\n   */\n  onChange: PropTypes.func,\n  /**\n   * Callback function triggered when the select is clicked. function(event)\n   */\n  onClick: PropTypes.func,\n  /**\n   * Callback function triggered when an option is deselected. function(value)\n   */\n  onDeselect: PropTypes.func,\n  /**\n   * Callback function triggered when the select receives focus. function(event)\n   */\n  onFocus: PropTypes.func,\n  /**\n   * Callback function triggered when the search criteria changes. function(searchValue)\n   */\n  onSearch: PropTypes.func,\n  /**\n   * Callback function triggered when an option is selected. function(value)\n   */\n  onSelect: PropTypes.func,\n  /**\n   * Callback function invoked for each option on search change. function(searchValue, option)\n   */\n  optionFilter: PropTypes.func,\n  /**\n   * Placeholder text.\n   */\n  placeholder: PropTypes.string,\n  /**\n   * Whether the field is required.\n   */\n  required: PropTypes.bool,\n  /**\n   * The selected value.\n   */\n  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.array]),\n  /**\n   * The behavior of the select. One of `default`, `combobox`, `multiple`, `tag`, or `search`.\n   */\n  variant: PropTypes.oneOf([\n    Variants.COMBOBOX,\n    Variants.DEFAULT,\n    Variants.MULTIPLE,\n    Variants.SEARCH,\n    Variants.TAG,\n  ]),\n};\n\nconst defaultProps = {\n  allowClear: false,\n  children: undefined,\n  defaultValue: undefined,\n  disabled: false,\n  dropdownAttrs: undefined,\n  isInvalid: false,\n  maxSelectionCount: undefined,\n  noResultContent: undefined,\n  onChange: undefined,\n  onDeselect: undefined,\n  onSearch: undefined,\n  onSelect: undefined,\n  optionFilter: undefined,\n  placeholder: undefined,\n  required: false,\n  value: undefined,\n  variant: 'default',\n};\n\nconst contextTypes = {\n  /* eslint-disable consistent-return */\n  intl: (context) => {\n    if (context.intl === undefined) {\n      return new Error('Component is internationalized, and must be wrapped in terra-base');\n    }\n  },\n};\n\nclass Select extends React.Component {\n  constructor(props) {\n    super(props);\n\n    this.state = {\n      tags: [],\n      value: Util.defaultValue(props),\n    };\n\n    this.display = this.display.bind(this);\n    this.handleChange = this.handleChange.bind(this);\n    this.handleDeselect = this.handleDeselect.bind(this);\n    this.handleSelect = this.handleSelect.bind(this);\n  }\n\n  /**\n   * Returns the appropriate variant display\n   */\n  display() {\n    const selectValue = Util.value(this.props, this.state);\n\n    switch (this.props.variant) {\n      case Variants.TAG:\n      case Variants.MULTIPLE:\n        return selectValue.map(tag => (\n          <Tag value={tag} key={tag} onDeselect={this.handleDeselect}>\n            {Util.valueDisplay(this.props, tag)}\n          </Tag>\n        ));\n      default:\n        return Util.valueDisplay(this.props, selectValue);\n    }\n  }\n\n  /**\n   * Communicates changes to the value.\n   * @param {array|number|string} value - The value resulting from a change.\n   */\n  handleChange(value) {\n    if (this.props.value === undefined) {\n      this.setState({ value });\n    }\n\n    if (this.props.onChange) {\n      this.props.onChange(value);\n    }\n  }\n\n  /**\n   * Communicates the removal of a value from the selected options.\n   * @param {number|string} value - The value to be removed.\n   */\n  handleDeselect(value) {\n    this.handleChange(Util.deselect(this.props, this.state, value));\n\n    if (this.props.onDeselect) {\n      this.props.onDeselect(value);\n    }\n  }\n\n  /**\n   * Communicates the selection of a value.\n   * @param {number|string} value - The value of the selected option.\n   * @param {ReactNode} option - The selected option.\n   */\n  handleSelect(value, option) {\n    this.handleChange(Util.select(this.props, this.state, value));\n\n    // Add new tags for uncontrolled components.\n    if (this.props.value === undefined && !Util.findByValue(this.props, this.state, value)) {\n      this.setState(prevState => ({ tags: [...prevState.tags, <Option key={value} display={value} value={value} />] }));\n    }\n\n    if (this.props.onSelect) {\n      this.props.onSelect(value, option);\n    }\n  }\n\n  render() {\n    const { intl } = this.context;\n    const {\n      allowClear, children, defaultValue, onChange, placeholder, required, value, ...otherProps\n    } = this.props;\n\n    const defaultPlaceholder = intl.formatMessage({ id: 'Terra.form.select.defaultDisplay' });\n    const selectPlaceholder = placeholder === undefined ? defaultPlaceholder : placeholder;\n    let clearOptionDisplay;\n\n    if (allowClear) {\n      if (selectPlaceholder.length === 0) {\n        clearOptionDisplay = defaultPlaceholder;\n      } else {\n        clearOptionDisplay = selectPlaceholder;\n      }\n    }\n\n    return (\n      <Frame\n        {...otherProps}\n        data-terra-select\n        value={Util.value(this.props, this.state)}\n        display={this.display()}\n        onDeselect={this.handleDeselect}\n        onSelect={this.handleSelect}\n        placeholder={selectPlaceholder}\n        required={required}\n        totalOptions={Util.getTotalNumberOfOptions(children)}\n        clearOptionDisplay={clearOptionDisplay}\n        dropdown={dropdownProps => (\n          <DropdownMenu {...dropdownProps}>\n            {this.state.tags}\n            {children}\n          </DropdownMenu>\n        )}\n      />\n    );\n  }\n}\n\nSelect.Option = Option;\nSelect.OptGroup = OptGroup;\nSelect.propTypes = propTypes;\nSelect.defaultProps = defaultProps;\nSelect.contextTypes = contextTypes;\nSelect.isSelect = true;\n\nexport default Select;\n"},2498:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=i(n(0)),a=i(n(335)),o=i(n(4)),r=i(n(929));function i(e){return e&&e.__esModule?e:{default:e}}var s=o.default.bind(r.default),u=function(){return l.default.createElement(a.default,{placeholder:"Select a color",allowClear:!0,variant:"combobox",className:s("form-select")},l.default.createElement(a.default.Option,{value:"blue",display:"Blue"}),l.default.createElement(a.default.Option,{value:"green",display:"Green"}),l.default.createElement(a.default.Option,{value:"purple",display:"Purple"}),l.default.createElement(a.default.Option,{value:"red",display:"Red"}),l.default.createElement(a.default.Option,{value:"violet",display:"Violet"}))};t.default=u},2499:function(e,t,n){"use strict";n.r(t),t.default='import React from \'react\';\n// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions\nimport Select from \'terra-form-select/lib/Select\';\nimport classNames from \'classnames/bind\';\nimport styles from \'./FormSelectDocCommon.module.scss\';\n\nconst cx = classNames.bind(styles);\n\nconst AllowClearExample = () => (\n  <Select placeholder="Select a color" allowClear variant="combobox" className={cx(\'form-select\')}>\n    <Select.Option value="blue" display="Blue" />\n    <Select.Option value="green" display="Green" />\n    <Select.Option value="purple" display="Purple" />\n    <Select.Option value="red" display="Red" />\n    <Select.Option value="violet" display="Violet" />\n  </Select>\n);\n\nexport default AllowClearExample;\n'},2500:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=i(n(0)),a=i(n(335)),o=i(n(4)),r=i(n(929));function i(e){return e&&e.__esModule?e:{default:e}}function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){for(var n=0;n<t.length;n++){var l=t[n];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function c(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var f=o.default.bind(r.default),m=function(e){function t(){var e,n,l;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,(e=!(l=p(t).call(this))||"object"!==s(l)&&"function"!=typeof l?c(n):l).state={value:"blue"},e.handleChange=e.handleChange.bind(c(e)),e}var n,o,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(t,l.default.Component),n=t,(o=[{key:"handleChange",value:function(e){this.setState({value:e})}},{key:"render",value:function(){return l.default.createElement(a.default,{placeholder:"Select a color",value:this.state.value,onChange:this.handleChange,className:f("form-select")},l.default.createElement(a.default.Option,{value:"blue",display:"Blue"}),l.default.createElement(a.default.Option,{value:"green",display:"Green"}),l.default.createElement(a.default.Option,{value:"purple",display:"Purple"}),l.default.createElement(a.default.Option,{value:"red",display:"Red"}),l.default.createElement(a.default.Option,{value:"violet",display:"Violet"}))}}])&&u(n.prototype,o),r&&u(n,r),t}();t.default=m},2501:function(e,t,n){"use strict";n.r(t),t.default='import React from \'react\';\n// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions\nimport Select from \'terra-form-select/lib/Select\';\nimport classNames from \'classnames/bind\';\nimport styles from \'./FormSelectDocCommon.module.scss\';\n\nconst cx = classNames.bind(styles);\n\nclass ControlledExample extends React.Component {\n  constructor() {\n    super();\n\n    this.state = { value: \'blue\' };\n    this.handleChange = this.handleChange.bind(this);\n  }\n\n  handleChange(value) {\n    this.setState({ value });\n  }\n\n  render() {\n    return (\n      <Select placeholder="Select a color" value={this.state.value} onChange={this.handleChange} className={cx(\'form-select\')}>\n        <Select.Option value="blue" display="Blue" />\n        <Select.Option value="green" display="Green" />\n        <Select.Option value="purple" display="Purple" />\n        <Select.Option value="red" display="Red" />\n        <Select.Option value="violet" display="Violet" />\n      </Select>\n    );\n  }\n}\n\nexport default ControlledExample;\n'},2502:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=i(n(0)),a=i(n(335)),o=i(n(4)),r=i(n(929));function i(e){return e&&e.__esModule?e:{default:e}}var s=o.default.bind(r.default),u=function(){return l.default.createElement(a.default,{placeholder:"Select a color",variant:"combobox",className:s("form-select")},l.default.createElement(a.default.Option,{value:"blue",display:"Blue"}),l.default.createElement(a.default.Option,{value:"green",display:"Green"}),l.default.createElement(a.default.Option,{value:"purple",display:"Purple"}),l.default.createElement(a.default.Option,{value:"red",display:"Red"}),l.default.createElement(a.default.Option,{value:"violet",display:"Violet"}))};t.default=u},2503:function(e,t,n){"use strict";n.r(t),t.default='import React from \'react\';\n// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions\nimport Select from \'terra-form-select/lib/Select\';\nimport classNames from \'classnames/bind\';\nimport styles from \'./FormSelectDocCommon.module.scss\';\n\nconst cx = classNames.bind(styles);\n\nconst ComboboxExample = () => (\n  <Select placeholder="Select a color" variant="combobox" className={cx(\'form-select\')}>\n    <Select.Option value="blue" display="Blue" />\n    <Select.Option value="green" display="Green" />\n    <Select.Option value="purple" display="Purple" />\n    <Select.Option value="red" display="Red" />\n    <Select.Option value="violet" display="Violet" />\n  </Select>\n);\n\nexport default ComboboxExample;\n'},2504:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=i(n(0)),a=i(n(335)),o=i(n(4)),r=i(n(929));function i(e){return e&&e.__esModule?e:{default:e}}var s=o.default.bind(r.default),u=function(){return l.default.createElement(a.default,{placeholder:"Select a color",className:s("form-select")},l.default.createElement(a.default.Option,{value:"blue",display:"Blue"}),l.default.createElement(a.default.Option,{value:"green",display:"Green"}),l.default.createElement(a.default.Option,{value:"purple",display:"Purple"}),l.default.createElement(a.default.Option,{value:"red",display:"Red"}),l.default.createElement(a.default.Option,{value:"violet",display:"Violet"}))};t.default=u},2505:function(e,t,n){"use strict";n.r(t),t.default='import React from \'react\';\n// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions\nimport Select from \'terra-form-select/lib/Select\';\nimport classNames from \'classnames/bind\';\nimport styles from \'./FormSelectDocCommon.module.scss\';\n\nconst cx = classNames.bind(styles);\n\nconst DefaultExample = () => (\n  <Select placeholder="Select a color" className={cx(\'form-select\')}>\n    <Select.Option value="blue" display="Blue" />\n    <Select.Option value="green" display="Green" />\n    <Select.Option value="purple" display="Purple" />\n    <Select.Option value="red" display="Red" />\n    <Select.Option value="violet" display="Violet" />\n  </Select>\n);\n\nexport default DefaultExample;\n'},2506:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=i(n(0)),a=i(n(335)),o=i(n(4)),r=i(n(929));function i(e){return e&&e.__esModule?e:{default:e}}var s=o.default.bind(r.default),u=function(){return l.default.createElement(a.default,{placeholder:"Select a color",disabled:!0,className:s("form-select"),defaultValue:"blue"},l.default.createElement(a.default.Option,{value:"blue",display:"Blue"}),l.default.createElement(a.default.Option,{value:"green",display:"Green"}),l.default.createElement(a.default.Option,{value:"purple",display:"Purple"}),l.default.createElement(a.default.Option,{value:"red",display:"Red"}),l.default.createElement(a.default.Option,{value:"violet",display:"Violet"}))};t.default=u},2507:function(e,t,n){"use strict";n.r(t),t.default='import React from \'react\';\n// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions\nimport Select from \'terra-form-select/lib/Select\';\nimport classNames from \'classnames/bind\';\nimport styles from \'./FormSelectDocCommon.module.scss\';\n\nconst cx = classNames.bind(styles);\n\nconst DisabledExample = () => (\n  <Select placeholder="Select a color" disabled className={cx(\'form-select\')} defaultValue="blue">\n    <Select.Option value="blue" display="Blue" />\n    <Select.Option value="green" display="Green" />\n    <Select.Option value="purple" display="Purple" />\n    <Select.Option value="red" display="Red" />\n    <Select.Option value="violet" display="Violet" />\n  </Select>\n);\n\nexport default DisabledExample;\n'},2508:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=i(n(0)),a=i(n(335)),o=i(n(4)),r=i(n(929));function i(e){return e&&e.__esModule?e:{default:e}}var s=o.default.bind(r.default),u=function(){return l.default.createElement(a.default,{placeholder:"Select a color",isInvalid:!0,className:s("form-select")},l.default.createElement(a.default.Option,{value:"blue",display:"Blue"}),l.default.createElement(a.default.Option,{value:"green",display:"Green"}),l.default.createElement(a.default.Option,{value:"purple",display:"Purple"}),l.default.createElement(a.default.Option,{value:"red",display:"Red"}),l.default.createElement(a.default.Option,{value:"violet",display:"Violet"}))};t.default=u},2509:function(e,t,n){"use strict";n.r(t),t.default='import React from \'react\';\n// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions\nimport Select from \'terra-form-select/lib/Select\';\nimport classNames from \'classnames/bind\';\nimport styles from \'./FormSelectDocCommon.module.scss\';\n\nconst cx = classNames.bind(styles);\n\nconst InvalidExample = () => (\n  <Select placeholder="Select a color" isInvalid className={cx(\'form-select\')}>\n    <Select.Option value="blue" display="Blue" />\n    <Select.Option value="green" display="Green" />\n    <Select.Option value="purple" display="Purple" />\n    <Select.Option value="red" display="Red" />\n    <Select.Option value="violet" display="Violet" />\n  </Select>\n);\n\nexport default InvalidExample;\n'},2510:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=i(n(0)),a=i(n(335)),o=i(n(4)),r=i(n(929));function i(e){return e&&e.__esModule?e:{default:e}}var s=o.default.bind(r.default),u=function(){return l.default.createElement(a.default,{placeholder:"Select a color",maxHeight:150,className:s("form-select")},l.default.createElement(a.default.Option,{value:"black",display:"Black"}),l.default.createElement(a.default.Option,{value:"blue",display:"Blue"}),l.default.createElement(a.default.Option,{value:"brown",display:"Brown"}),l.default.createElement(a.default.Option,{value:"green",display:"Green"}),l.default.createElement(a.default.Option,{value:"purple",display:"Purple"}),l.default.createElement(a.default.Option,{value:"red",display:"Red"}),l.default.createElement(a.default.Option,{value:"violet",display:"Violet"}),l.default.createElement(a.default.Option,{value:"white",display:"White"}),l.default.createElement(a.default.Option,{value:"yellow",display:"Yellow"}))};t.default=u},2511:function(e,t,n){"use strict";n.r(t),t.default='import React from \'react\';\n// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions\nimport Select from \'terra-form-select/lib/Select\';\nimport classNames from \'classnames/bind\';\nimport styles from \'./FormSelectDocCommon.module.scss\';\n\nconst cx = classNames.bind(styles);\n\nconst MaxHeightExample = () => (\n  <Select placeholder="Select a color" maxHeight={150} className={cx(\'form-select\')}>\n    <Select.Option value="black" display="Black" />\n    <Select.Option value="blue" display="Blue" />\n    <Select.Option value="brown" display="Brown" />\n    <Select.Option value="green" display="Green" />\n    <Select.Option value="purple" display="Purple" />\n    <Select.Option value="red" display="Red" />\n    <Select.Option value="violet" display="Violet" />\n    <Select.Option value="white" display="White" />\n    <Select.Option value="yellow" display="Yellow" />\n  </Select>\n);\n\nexport default MaxHeightExample;\n'},2512:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=i(n(0)),a=i(n(335)),o=i(n(4)),r=i(n(929));function i(e){return e&&e.__esModule?e:{default:e}}var s=o.default.bind(r.default),u=function(){return l.default.createElement(a.default,{placeholder:"Select a color",variant:"multiple",className:s("form-select")},l.default.createElement(a.default.Option,{value:"blue",display:"Blue"}),l.default.createElement(a.default.Option,{value:"green",display:"Green"}),l.default.createElement(a.default.Option,{value:"purple",display:"Purple"}),l.default.createElement(a.default.Option,{value:"red",display:"Red"}),l.default.createElement(a.default.Option,{value:"violet",display:"Violet"}))};t.default=u},2513:function(e,t,n){"use strict";n.r(t),t.default='import React from \'react\';\n// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions\nimport Select from \'terra-form-select/lib/Select\';\nimport classNames from \'classnames/bind\';\nimport styles from \'./FormSelectDocCommon.module.scss\';\n\nconst cx = classNames.bind(styles);\n\nconst MultipleExample = () => (\n  <Select placeholder="Select a color" variant="multiple" className={cx(\'form-select\')}>\n    <Select.Option value="blue" display="Blue" />\n    <Select.Option value="green" display="Green" />\n    <Select.Option value="purple" display="Purple" />\n    <Select.Option value="red" display="Red" />\n    <Select.Option value="violet" display="Violet" />\n  </Select>\n);\n\nexport default MultipleExample;\n'},2514:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=i(n(0)),a=i(n(335)),o=i(n(4)),r=i(n(929));function i(e){return e&&e.__esModule?e:{default:e}}var s=o.default.bind(r.default),u=function(){return l.default.createElement(a.default,{placeholder:"Select a color",className:s("form-select")},l.default.createElement(a.default.OptGroup,{label:"Shade of blue"},l.default.createElement(a.default.Option,{value:"blue",display:"Blue"}),l.default.createElement(a.default.Option,{value:"cyan",display:"Cyan"}),l.default.createElement(a.default.Option,{value:"teal",display:"Teal"}),l.default.createElement(a.default.Option,{value:"azul",display:"Azul"}),l.default.createElement(a.default.Option,{value:"aqua",display:"Aqua"})),l.default.createElement(a.default.OptGroup,{label:"Shades of green"},l.default.createElement(a.default.Option,{value:"green",display:"Green"}),l.default.createElement(a.default.Option,{value:"forest",display:"Forest Green"}),l.default.createElement(a.default.Option,{value:"dark",display:"Dark Green"}),l.default.createElement(a.default.Option,{value:"neon",display:"Neon Green"})))};t.default=u},2515:function(e,t,n){"use strict";n.r(t),t.default='import React from \'react\';\n// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions\nimport Select from \'terra-form-select/lib/Select\';\nimport classNames from \'classnames/bind\';\nimport styles from \'./FormSelectDocCommon.module.scss\';\n\nconst cx = classNames.bind(styles);\n\nconst OptGroupExample = () => (\n  <Select placeholder="Select a color" className={cx(\'form-select\')}>\n    <Select.OptGroup label="Shade of blue">\n      <Select.Option value="blue" display="Blue" />\n      <Select.Option value="cyan" display="Cyan" />\n      <Select.Option value="teal" display="Teal" />\n      <Select.Option value="azul" display="Azul" />\n      <Select.Option value="aqua" display="Aqua" />\n    </Select.OptGroup>\n    <Select.OptGroup label="Shades of green">\n      <Select.Option value="green" display="Green" />\n      <Select.Option value="forest" display="Forest Green" />\n      <Select.Option value="dark" display="Dark Green" />\n      <Select.Option value="neon" display="Neon Green" />\n    </Select.OptGroup>\n  </Select>\n);\n\nexport default OptGroupExample;\n'},2516:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=i(n(0)),a=i(n(335)),o=i(n(4)),r=i(n(929));function i(e){return e&&e.__esModule?e:{default:e}}var s=o.default.bind(r.default),u=function(){return l.default.createElement(a.default,{placeholder:"Select a color",variant:"search",className:s("form-select")},l.default.createElement(a.default.Option,{value:"blue",display:"Blue"}),l.default.createElement(a.default.Option,{value:"green",display:"Green"}),l.default.createElement(a.default.Option,{value:"purple",display:"Purple"}),l.default.createElement(a.default.Option,{value:"red",display:"Red"}),l.default.createElement(a.default.Option,{value:"violet",display:"Violet"}))};t.default=u},2517:function(e,t,n){"use strict";n.r(t),t.default='import React from \'react\';\n// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions\nimport Select from \'terra-form-select/lib/Select\';\nimport classNames from \'classnames/bind\';\nimport styles from \'./FormSelectDocCommon.module.scss\';\n\nconst cx = classNames.bind(styles);\n\nconst SearchExample = () => (\n  <Select placeholder="Select a color" variant="search" className={cx(\'form-select\')}>\n    <Select.Option value="blue" display="Blue" />\n    <Select.Option value="green" display="Green" />\n    <Select.Option value="purple" display="Purple" />\n    <Select.Option value="red" display="Red" />\n    <Select.Option value="violet" display="Violet" />\n  </Select>\n);\n\nexport default SearchExample;\n'},2518:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=i(n(0)),a=i(n(335)),o=i(n(4)),r=i(n(929));function i(e){return e&&e.__esModule?e:{default:e}}var s=o.default.bind(r.default),u=function(){return l.default.createElement(a.default,{placeholder:"Select a color",variant:"tag",className:s("form-select")},l.default.createElement(a.default.Option,{value:"blue",display:"Blue"}),l.default.createElement(a.default.Option,{value:"green",display:"Green"}),l.default.createElement(a.default.Option,{value:"purple",display:"Purple"}),l.default.createElement(a.default.Option,{value:"red",display:"Red"}),l.default.createElement(a.default.Option,{value:"violet",display:"Violet"}))};t.default=u},2519:function(e,t,n){"use strict";n.r(t),t.default='import React from \'react\';\n// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions\nimport Select from \'terra-form-select/lib/Select\';\nimport classNames from \'classnames/bind\';\nimport styles from \'./FormSelectDocCommon.module.scss\';\n\nconst cx = classNames.bind(styles);\n\nconst TagExample = () => (\n  <Select placeholder="Select a color" variant="tag" className={cx(\'form-select\')}>\n    <Select.Option value="blue" display="Blue" />\n    <Select.Option value="green" display="Green" />\n    <Select.Option value="purple" display="Purple" />\n    <Select.Option value="red" display="Red" />\n    <Select.Option value="violet" display="Violet" />\n  </Select>\n);\n\nexport default TagExample;\n'},3708:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=R(n(0)),a=R(n(911)),o=R(n(2494)),r=R(n(2495)),i=R(n(2496)),s=R(n(2497)),u=R(n(2498)),p=R(n(2499)),c=R(n(2500)),d=R(n(2501)),f=R(n(2502)),m=R(n(2503)),v=R(n(2504)),h=R(n(2505)),y=R(n(2506)),b=R(n(2507)),S=R(n(2508)),O=R(n(2509)),g=R(n(2510)),x=R(n(2511)),E=R(n(2512)),P=R(n(2513)),T=R(n(2514)),C=R(n(2515)),w=R(n(2516)),N=R(n(2517)),_=R(n(2518)),G=R(n(2519));function R(e){return e&&e.__esModule?e:{default:e}}var D=function(){return l.default.createElement(a.default,{packageName:"terra-form-select",readme:o.default,srcPath:"https://github.com/cerner/terra-core/tree/master/packages/terra-form-select",propsTables:[{componentName:"Select",componentSrc:s.default},{componentName:"Option",componentSrc:r.default},{componentName:"OptGroup",componentSrc:i.default}],examples:[{title:"Default",description:"A default variant allows selecting a single option.",example:l.default.createElement(v.default,null),source:h.default},{title:"Search",description:"A search variant provides a searchable single select.",example:l.default.createElement(w.default,null),source:N.default},{title:"Combobox",description:"A combobox variant allows a user to enter a single free text entry or select a single option from the the dropdown.",example:l.default.createElement(f.default,null),source:m.default},{title:"Multiple",description:"A multiple variant allows searching and selecting multiple options.",example:l.default.createElement(E.default,null),source:P.default},{title:"Tag",description:"A tag variant allows a user to enter multiple custom free text entries or select multiple options from the the dropdown.",example:l.default.createElement(_.default,null),source:G.default},{title:"Disabled (applies to all)",example:l.default.createElement(y.default,null),source:b.default},{title:"Invalid (applies to all)",description:"Applies theme-specific styling for invalid. Will also display error text when used with a Field.",example:l.default.createElement(S.default,null),source:O.default},{title:"Ability to add Option Groups (applies to all)",description:"An OptGroup provides a way to group options together within the listbox. Can be applied to all select variants (default, search, combobox, multiple, tag).",example:l.default.createElement(T.default,null),source:C.default},{title:"Ability to set a Maximum Height (applies to all)",description:"An example of implementing a custom max height of the dropdown.",example:l.default.createElement(g.default,null),source:x.default},{title:"Ability to Clear Selection (applies to only 'default', 'combobox', and 'search')",description:"An example with an option to clear the selected item. (Not applicable to 'multiple' or 'tag' variants)",example:l.default.createElement(u.default,null),source:p.default},{title:"Create a Controlled Select (applies to all)",description:"An example of implementing a controlled Select.",example:l.default.createElement(c.default,null),source:d.default}]})};t.default=D},929:function(e,t,n){e.exports={"form-select":"FormSelectDocCommon-module__form-select___3izDR"}}}]);
//# sourceMappingURL=70-26fa326e00eb794ff976.js.map