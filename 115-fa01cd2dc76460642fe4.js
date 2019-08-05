(window.webpackJsonp=window.webpackJsonp||[]).push([[115],{1231:function(e,t,n){e.exports={"content-wrapper":"AbstractModalDocCommon-module__content-wrapper___2yi_x"}},1281:function(e,t,n){e.exports={"fixed-size":"ExampleAbstractSize-module__fixed-size___2zaVp"}},1687:function(e,t,n){"use strict";n.r(t),t.default="# Terra Abstract Modal\n\nThe abstract modal is a structural component that provides the ability to display portal'd content in a layer above the app. It consists of an overlay and an unstyled absolute positioned div in which content can be placed. The abstract modal is not intended to be consumed directly, but rather wrapped in a higher order component. Higher order components can provide the abstract modal with sizing, visual styles, and content (e.g; header, body, and actionable buttons). The abstract modals maximum size is constrained by the viewport size, so the content placed inside the modal needs to be responsive.\n\nOur recommendation for HOC is the [terra-modal-manager][1], as it provides sizing, responsive behavior, visual styles, and a disclosure stack.\n\n## Getting Started\n\n- Install with [npmjs](https://www.npmjs.com):\n  - `npm install terra-abstract-modal`\n  - `yarn add terra-abstract-modal`\n\n\x3c!-- AUTO-GENERATED-CONTENT:START Peer Dependencies --\x3e\n## Peer Dependencies\n\n<details>\n<summary>View information on this component's peer dependencies.</summary>\n\nThis component requires the following peer dependencies be installed in your app for the component to properly function.\n\n| Peer Dependency | Version |\n|-|-|\n| react | ^16.8.5 |\n| react-dom | ^16.8.5 |\n\n\n</details>\n\x3c!-- AUTO-GENERATED-CONTENT:END --\x3e\n\n[1]: https://github.com/cerner/terra-framework/tree/master/packages/terra-modal-manager/docs\n\n## Component Features\n* [Cross-Browser Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#cross-browser-support)\n* [Responsive Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#responsive-support)\n* [Mobile Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#mobile-support)\n"},1688:function(e){e.exports=JSON.parse('{"_from":"terra-abstract-modal@^3.0.0","_id":"terra-abstract-modal@3.8.0","_inBundle":false,"_integrity":"sha512-lGIQZ3hx9lxa3LcjeD7iwQSPzbR2Nrs1ub8oXoReA4ds3kgMArplenkanjEk9vm1djo4++qY+OEtYbYKR2qKKA==","_location":"/terra-abstract-modal","_phantomChildren":{},"_requested":{"type":"range","registry":true,"raw":"terra-abstract-modal@^3.0.0","name":"terra-abstract-modal","escapedName":"terra-abstract-modal","rawSpec":"^3.0.0","saveSpec":null,"fetchSpec":"^3.0.0"},"_requiredBy":["/","/terra-date-time-picker","/terra-dialog-modal","/terra-modal-manager","/terra-notification-dialog"],"_resolved":"https://registry.npmjs.org/terra-abstract-modal/-/terra-abstract-modal-3.8.0.tgz","_shasum":"198c3a5c728e1c0eceacdc38c6149b827c7118ac","_spec":"terra-abstract-modal@^3.0.0","_where":"/home/travis/build/cerner/terra-ui","author":{"name":"Cerner Corporation"},"bugs":{"url":"https://github.com/cerner/terra-framework/issues"},"bundleDependencies":false,"dependencies":{"classnames":"^2.2.5","keycode-js":"^1.0.4","mutationobserver-shim":"0.3.3","prop-types":"^15.5.8","react-portal":"^4.1.2","terra-visually-hidden-text":"^2.9.0","wicg-inert":"^2.1.1"},"deprecated":false,"description":"The abstract modal is a structural component that provides the ability to display portal\'d content in a layer above the app.","devDependencies":{"terra-doc-template":"^2.2.0","terra-icon":"^3.1.0"},"gitHead":"f763d8f2d030d85d834554d5c2eca6f2917f2eac","homepage":"https://github.com/cerner/terra-framework#readme","keywords":["Cerner","Terra","terra-abstract-modal","Abstract","Modal","UI"],"license":"Apache-2.0","main":"lib/AbstractModal.js","name":"terra-abstract-modal","peerDependencies":{"react":"^16.8.5","react-dom":"^16.8.5","react-intl":"^2.9.0"},"repository":{"type":"git","url":"git+https://github.com/cerner/terra-framework.git"},"scripts":{"compile":"babel --root-mode upward src --out-dir lib --copy-files","lint":"npm run lint:js && npm run lint:scss","lint:js":"eslint --ext .js,.jsx . --ignore-path ../../.eslintignore","lint:scss":"stylelint src/**/*.scss","precompile":"rm -rf lib","test":"npm run test:jest && npm run test:wdio","test:jest":"jest --config ../../jestconfig.js","test:wdio":"../../node_modules/.bin/wdio ../../node_modules/terra-dev-site/config/wdio/wdio.conf.js"},"version":"3.8.0"}')},1689:function(e,t,n){"use strict";n.r(t),t.default="import React from 'react';\nimport PropTypes from 'prop-types';\nimport { Portal } from 'react-portal';\nimport KeyCode from 'keycode-js';\nimport 'mutationobserver-shim';\nimport './_contains-polyfill';\nimport './_matches-polyfill';\nimport 'wicg-inert';\nimport ModalContent from './_ModalContent';\n\nconst zIndexes = ['6000', '7000', '8000', '9000'];\n\nconst propTypes = {\n  /**\n   * String that labels the modal for screen readers.\n   */\n  ariaLabel: PropTypes.string.isRequired,\n  /**\n   * Content inside the modal dialog.\n   */\n  children: PropTypes.node.isRequired,\n  /**\n   * CSS classnames that are appended to the modal.\n   */\n  classNameModal: PropTypes.string,\n  /**\n   * CSS classnames that are appended to the overlay.\n   */\n  classNameOverlay: PropTypes.string,\n  /**\n   * If set to true, the modal will close when the esc key is pressed.\n   */\n  closeOnEsc: PropTypes.bool,\n  /**\n   * If set to true, the modal will close when a mouse click is triggered outside the modal.\n   */\n  closeOnOutsideClick: PropTypes.bool,\n  /**\n   * If set to true, the modal will be fullscreen on all breakpoint sizes.\n   */\n  isFullscreen: PropTypes.bool,\n  /**\n   * If set to true, the modal will rendered as opened.\n   */\n  isOpen: PropTypes.bool.isRequired,\n  /**\n   * Callback function indicating a close condition was met, should be combined with isOpen for state management.\n   */\n  onRequestClose: PropTypes.func.isRequired,\n  /**\n   * Role attribute on the modal dialog.\n   */\n  role: PropTypes.string,\n  /**\n   * Allows assigning of root element custom data attribute for easy selecting of document base component.\n   */\n  rootSelector: PropTypes.string,\n  /**\n   * Z-Index layer to apply to the ModalContent and ModalOverlay. Valid values are the standard modal layer: '6000', and the max layer: '8000'.\n   */\n  zIndex: PropTypes.oneOf(zIndexes),\n};\n\nconst defaultProps = {\n  classNameModal: null,\n  classNameOverlay: null,\n  closeOnEsc: true,\n  closeOnOutsideClick: true,\n  isFullscreen: false,\n  role: 'dialog',\n  rootSelector: '#root',\n  zIndex: '6000',\n};\n\nclass AbstractModal extends React.Component {\n  constructor() {\n    super();\n    this.state = {\n      modalTrigger: undefined,\n    };\n    this.handleKeydown = this.handleKeydown.bind(this);\n    this.showModalDomUpdates = this.showModalDomUpdates.bind(this);\n    this.hideModalDomUpdates = this.hideModalDomUpdates.bind(this);\n    this.modalElement = React.createRef();\n  }\n\n  componentDidMount() {\n    document.addEventListener('keydown', this.handleKeydown);\n\n    if (this.props.isOpen) {\n      this.showModalDomUpdates();\n    }\n  }\n\n  componentDidUpdate(prevProps) {\n    if (this.props.isOpen) {\n      if (!prevProps.isOpen) {\n        this.showModalDomUpdates();\n      }\n    } else if (prevProps.isOpen) {\n      this.hideModalDomUpdates();\n    }\n  }\n\n  componentWillUnmount() {\n    document.removeEventListener('keydown', this.handleKeydown);\n    this.hideModalDomUpdates();\n  }\n\n  showModalDomUpdates() {\n    const mainDocumentElement = document.querySelector(this.props.rootSelector);\n    // Store element that was last focused prior to modal opening\n    this.setState({ modalTrigger: document.activeElement });\n\n    if (mainDocumentElement) {\n      const inert = +mainDocumentElement.getAttribute('data-overlay-count');\n\n      if (!mainDocumentElement.hasAttribute('data-overlay-count')) {\n        mainDocumentElement.setAttribute('data-overlay-count', '1');\n        mainDocumentElement.setAttribute('inert', '');\n      } else if (mainDocumentElement && mainDocumentElement.hasAttribute('data-overlay-count')) {\n        mainDocumentElement.setAttribute('data-overlay-count', `${inert + 1}`);\n      }\n\n      // Handle focus shift for VoiceOver on iOS\n      if ('ontouchstart' in window) {\n        this.modalElement.current.querySelector('[data-terra-abstract-modal-begin]').focus();\n      } else {\n        // Shift focus to modal dialog\n        this.modalElement.current.focus();\n      }\n    }\n  }\n\n  hideModalDomUpdates() {\n    const mainDocumentElement = document.querySelector(this.props.rootSelector);\n\n    if (mainDocumentElement) {\n      const inert = +mainDocumentElement.getAttribute('data-overlay-count');\n\n      if (inert === 1) {\n        mainDocumentElement.removeAttribute('data-overlay-count');\n        mainDocumentElement.removeAttribute('inert');\n      } else if (inert && inert > 1) {\n        mainDocumentElement.setAttribute('data-overlay-count', `${inert - 1}`);\n      }\n    }\n\n    setTimeout(() => {\n      if (this.state.modalTrigger) {\n        // Shift focus back to element that was last focused prior to opening the modal\n        this.state.modalTrigger.focus();\n      }\n    }, 0); // Allows inert processing to finish before shifting focus back\n  }\n\n  handleKeydown(e) {\n    const body = document.querySelector('body');\n    if (e.keyCode === KeyCode.KEY_ESCAPE && this.props.isOpen && this.props.closeOnEsc) {\n      if (this.modalElement.current) {\n        if (e.target === this.modalElement.current || this.modalElement.current.contains(e.target) || e.target === body) {\n          this.props.onRequestClose();\n        }\n      }\n    }\n  }\n\n  render() {\n    const {\n      ariaLabel,\n      children,\n      classNameModal,\n      classNameOverlay,\n      closeOnEsc,\n      closeOnOutsideClick,\n      isFullscreen,\n      isOpen,\n      role,\n      rootSelector,\n      onRequestClose,\n      zIndex,\n      ...customProps\n    } = this.props;\n\n    if (!isOpen) {\n      return null;\n    }\n\n    return (\n      <Portal\n        isOpened={isOpen}\n      >\n        <ModalContent\n          {...customProps}\n          closeOnOutsideClick={closeOnOutsideClick}\n          ariaLabel={ariaLabel}\n          classNameModal={classNameModal}\n          classNameOverlay={classNameOverlay}\n          role={role}\n          isFullscreen={isFullscreen}\n          onRequestClose={onRequestClose}\n          zIndex={zIndex}\n          aria-modal=\"true\"\n          ref={this.modalElement}\n        >\n          {children}\n        </ModalContent>\n      </Portal>\n    );\n  }\n}\n\nAbstractModal.propTypes = propTypes;\nAbstractModal.defaultProps = defaultProps;\n\nexport default AbstractModal;\n"},1690:function(e,t,n){"use strict";var a=n(5);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=a(n(20)),o=a(n(24)),s=a(n(25)),r=a(n(26)),i=a(n(31)),d=a(n(27)),c=a(n(0)),u=a(n(338)),p=a(n(4)),m=a(n(1281)),h=a(n(1231)),f=p.default.bind(h.default),b=function(e){function t(){var e;return(0,l.default)(this,t),(e=(0,s.default)(this,(0,r.default)(t).call(this))).state={isOpen:!1},e.handleOpenModal=e.handleOpenModal.bind((0,i.default)(e)),e.handleCloseModal=e.handleCloseModal.bind((0,i.default)(e)),e}return(0,d.default)(t,e),(0,o.default)(t,[{key:"handleOpenModal",value:function(){this.setState({isOpen:!0})}},{key:"handleCloseModal",value:function(){this.setState({isOpen:!1})}},{key:"render",value:function(){return c.default.createElement("div",null,c.default.createElement(u.default,{ariaLabel:"Default Modal",isOpen:this.state.isOpen,onRequestClose:this.handleCloseModal,classNameModal:m.default["fixed-size"]},c.default.createElement("div",{className:f("content-wrapper")},c.default.createElement("h1",null,"Default Modal"),c.default.createElement("br",null),c.default.createElement("p",null,"You can close the modal by:"),c.default.createElement("ul",null,c.default.createElement("li",null,"- Pressing the ESC key"),c.default.createElement("li",null,"- Clicking on the overlay"),c.default.createElement("li",null,"- Clicking on the close button")),c.default.createElement("br",null),c.default.createElement("p",null,"On smaller screens, the modal will take up the full screen."),c.default.createElement("p",null),c.default.createElement("br",null),c.default.createElement("button",{type:"button",onClick:this.handleCloseModal},"Close Modal"))),c.default.createElement("button",{type:"button",onClick:this.handleOpenModal},"Open Modal"))}}]),t}(c.default.Component);t.default=b},1691:function(e,t,n){"use strict";n.r(t),t.default="import React from 'react';\n// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions\nimport AbstractModal from 'terra-abstract-modal/lib/AbstractModal';\nimport classNames from 'classnames/bind';\nimport styles from './ExampleAbstractSize.module.scss';\nimport generalStyles from './AbstractModalDocCommon.module.scss';\n\nconst cx = classNames.bind(generalStyles);\n\nclass AbstractModalIsOpen extends React.Component {\n  constructor() {\n    super();\n\n    this.state = {\n      isOpen: false,\n    };\n\n    this.handleOpenModal = this.handleOpenModal.bind(this);\n    this.handleCloseModal = this.handleCloseModal.bind(this);\n  }\n\n  handleOpenModal() {\n    this.setState({ isOpen: true });\n  }\n\n  handleCloseModal() {\n    this.setState({ isOpen: false });\n  }\n\n  render() {\n    return (\n      <div>\n        <AbstractModal\n          ariaLabel=\"Default Modal\"\n          isOpen={this.state.isOpen}\n          onRequestClose={this.handleCloseModal}\n          classNameModal={styles['fixed-size']}\n        >\n          <div className={cx('content-wrapper')}>\n            <h1>Default Modal</h1>\n            <br />\n            <p>You can close the modal by:</p>\n            <ul>\n              <li>- Pressing the ESC key</li>\n              <li>- Clicking on the overlay</li>\n              <li>- Clicking on the close button</li>\n            </ul>\n            <br />\n            <p>On smaller screens, the modal will take up the full screen.</p>\n            <p />\n            <br />\n            <button type=\"button\" onClick={this.handleCloseModal}>Close Modal</button>\n          </div>\n        </AbstractModal>\n        <button type=\"button\" onClick={this.handleOpenModal}>Open Modal</button>\n      </div>\n    );\n  }\n}\n\nexport default AbstractModalIsOpen;\n"},1692:function(e,t,n){"use strict";var a=n(5);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=a(n(20)),o=a(n(24)),s=a(n(25)),r=a(n(26)),i=a(n(31)),d=a(n(27)),c=a(n(0)),u=a(n(338)),p=a(n(4)),m=a(n(1281)),h=a(n(1231)),f=p.default.bind(h.default),b=function(e){function t(){var e;return(0,l.default)(this,t),(e=(0,s.default)(this,(0,r.default)(t).call(this))).state={isOpen:!1},e.handleOpenModal=e.handleOpenModal.bind((0,i.default)(e)),e.handleCloseModal=e.handleCloseModal.bind((0,i.default)(e)),e}return(0,d.default)(t,e),(0,o.default)(t,[{key:"handleOpenModal",value:function(){this.setState({isOpen:!0})}},{key:"handleCloseModal",value:function(){this.setState({isOpen:!1})}},{key:"render",value:function(){return c.default.createElement("div",null,c.default.createElement(u.default,{ariaLabel:"Modal disable close on outside click",isOpen:this.state.isOpen,closeOnOutsideClick:!1,onRequestClose:this.handleCloseModal,classNameModal:m.default["fixed-size"]},c.default.createElement("div",{className:f("content-wrapper")},c.default.createElement("h1",null,"Modal disable close on outside click"),c.default.createElement("br",null),c.default.createElement("p",null,"You can close the modal by:"),c.default.createElement("ul",null,c.default.createElement("li",null,"- Pressing the ESC key"),c.default.createElement("li",null,"- Clicking on the close button")),c.default.createElement("br",null),c.default.createElement("button",{type:"button",onClick:this.handleCloseModal},"Close Modal"))),c.default.createElement("button",{type:"button",onClick:this.handleOpenModal},"Open Modal"))}}]),t}(c.default.Component);t.default=b},1693:function(e,t,n){"use strict";n.r(t),t.default="import React from 'react';\n// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions\nimport AbstractModal from 'terra-abstract-modal/lib/AbstractModal';\nimport classNames from 'classnames/bind';\nimport styles from './ExampleAbstractSize.module.scss';\nimport generalStyles from './AbstractModalDocCommon.module.scss';\n\nconst cx = classNames.bind(generalStyles);\n\nclass AbstractModalCloseOnOutsideClick extends React.Component {\n  constructor() {\n    super();\n\n    this.state = {\n      isOpen: false,\n    };\n\n    this.handleOpenModal = this.handleOpenModal.bind(this);\n    this.handleCloseModal = this.handleCloseModal.bind(this);\n  }\n\n  handleOpenModal() {\n    this.setState({ isOpen: true });\n  }\n\n  handleCloseModal() {\n    this.setState({ isOpen: false });\n  }\n\n  render() {\n    return (\n      <div>\n        <AbstractModal\n          ariaLabel=\"Modal disable close on outside click\"\n          isOpen={this.state.isOpen}\n          closeOnOutsideClick={false}\n          onRequestClose={this.handleCloseModal}\n          classNameModal={styles['fixed-size']}\n        >\n          <div className={cx('content-wrapper')}>\n            <h1>Modal disable close on outside click</h1>\n            <br />\n            <p>You can close the modal by:</p>\n            <ul>\n              <li>- Pressing the ESC key</li>\n              <li>- Clicking on the close button</li>\n            </ul>\n            <br />\n            <button type=\"button\" onClick={this.handleCloseModal}>Close Modal</button>\n          </div>\n        </AbstractModal>\n        <button type=\"button\" onClick={this.handleOpenModal}>Open Modal</button>\n      </div>\n    );\n  }\n}\n\nexport default AbstractModalCloseOnOutsideClick;\n"},1694:function(e,t,n){"use strict";var a=n(5);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=a(n(20)),o=a(n(24)),s=a(n(25)),r=a(n(26)),i=a(n(31)),d=a(n(27)),c=a(n(0)),u=a(n(338)),p=a(n(4)),m=a(n(1231)),h=p.default.bind(m.default),f=function(e){function t(){var e;return(0,l.default)(this,t),(e=(0,s.default)(this,(0,r.default)(t).call(this))).state={isOpen:!1},e.handleOpenModal=e.handleOpenModal.bind((0,i.default)(e)),e.handleCloseModal=e.handleCloseModal.bind((0,i.default)(e)),e}return(0,d.default)(t,e),(0,o.default)(t,[{key:"handleOpenModal",value:function(){this.setState({isOpen:!0})}},{key:"handleCloseModal",value:function(){this.setState({isOpen:!1})}},{key:"render",value:function(){return c.default.createElement("div",null,c.default.createElement(u.default,{ariaLabel:"Fullscreen Modal",isOpen:this.state.isOpen,isFullscreen:!0,onRequestClose:this.handleCloseModal},c.default.createElement("div",{className:h("content-wrapper")},c.default.createElement("h1",null,"Fullscreen Modal"),c.default.createElement("br",null),c.default.createElement("p",null,"This modal will always take up the full screen."),c.default.createElement("p",null),c.default.createElement("br",null),c.default.createElement("button",{type:"button",onClick:this.handleCloseModal},"Close Modal"))),c.default.createElement("button",{type:"button",onClick:this.handleOpenModal},"Open Modal"))}}]),t}(c.default.Component);t.default=f},1695:function(e,t,n){"use strict";n.r(t),t.default="import React from 'react';\n// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions\nimport AbstractModal from 'terra-abstract-modal/lib/AbstractModal';\nimport classNames from 'classnames/bind';\nimport styles from './AbstractModalDocCommon.module.scss';\n\nconst cx = classNames.bind(styles);\n\nclass AbstractModalIsFullscreen extends React.Component {\n  constructor() {\n    super();\n\n    this.state = {\n      isOpen: false,\n    };\n\n    this.handleOpenModal = this.handleOpenModal.bind(this);\n    this.handleCloseModal = this.handleCloseModal.bind(this);\n  }\n\n  handleOpenModal() {\n    this.setState({ isOpen: true });\n  }\n\n  handleCloseModal() {\n    this.setState({ isOpen: false });\n  }\n\n  render() {\n    return (\n      <div>\n        <AbstractModal\n          ariaLabel=\"Fullscreen Modal\"\n          isOpen={this.state.isOpen}\n          isFullscreen\n          onRequestClose={this.handleCloseModal}\n        >\n          <div className={cx('content-wrapper')}>\n            <h1>Fullscreen Modal</h1>\n            <br />\n            <p>This modal will always take up the full screen.</p>\n            <p />\n            <br />\n            <button type=\"button\" onClick={this.handleCloseModal}>Close Modal</button>\n          </div>\n        </AbstractModal>\n        <button type=\"button\" onClick={this.handleOpenModal}>Open Modal</button>\n      </div>\n    );\n  }\n}\n\nexport default AbstractModalIsFullscreen;\n"},1696:function(e,t,n){"use strict";var a=n(32),l=n(5);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=l(n(20)),s=l(n(24)),r=l(n(25)),i=l(n(26)),d=l(n(31)),c=l(n(27)),u=a(n(0)),p=l(n(338)),m=l(n(4)),h=l(n(1281)),f=l(n(1231)),b=m.default.bind(f.default),M=function(e){var t=e.handleCloseModal,n=(0,u.useRef)(null);return(0,u.useEffect)(function(){n.current.focus()},[]),u.default.createElement("div",{id:"alert-dialog-content",className:b("content-wrapper")},u.default.createElement("h1",null,"Alert Dialog Modal"),u.default.createElement("br",null),u.default.createElement("p",null,"The abstract modal can be used to create an alert dialog modal. You can use the role,"," ",u.default.createElement("code",null,"alertdialog")," ",", to create a modal dialog that interrupts the users workflow to get a response, usually some sort of confirmation."),u.default.createElement("button",{ref:n,type:"button",onClick:t},"Confirm action"),u.default.createElement("button",{type:"button",onClick:t},"Close Modal"))},y=function(e){function t(){var e;return(0,o.default)(this,t),(e=(0,r.default)(this,(0,i.default)(t).call(this))).state={isOpen:!1},e.handleOpenModal=e.handleOpenModal.bind((0,d.default)(e)),e.handleCloseModal=e.handleCloseModal.bind((0,d.default)(e)),e}return(0,c.default)(t,e),(0,s.default)(t,[{key:"handleOpenModal",value:function(){this.setState({isOpen:!0})}},{key:"handleCloseModal",value:function(){this.setState({isOpen:!1})}},{key:"render",value:function(){return u.default.createElement("div",null,u.default.createElement(p.default,{ariaLabel:"","aria-labelledby":"alert-dialog-content",isOpen:this.state.isOpen,onRequestClose:this.handleCloseModal,closeOnOutsideClick:!1,classNameModal:h.default["fixed-size"],role:"alertdialog"},u.default.createElement(M,{handleCloseModal:this.handleCloseModal})),u.default.createElement("button",{type:"button",onClick:this.handleOpenModal},"Open Modal"))}}]),t}(u.default.Component);t.default=y},1697:function(e,t,n){"use strict";n.r(t),t.default="import React, { useRef, useEffect } from 'react';\n// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions\nimport AbstractModal from 'terra-abstract-modal/lib/AbstractModal';\nimport classNames from 'classnames/bind';\nimport styles from './ExampleAbstractSize.module.scss';\nimport generalStyles from './AbstractModalDocCommon.module.scss';\n\nconst cx = classNames.bind(generalStyles);\n\n/* eslint-disable-next-line react/prop-types */\nconst AlertDialogContent = ({ handleCloseModal }) => {\n  const confirmBtn = useRef(null);\n\n  useEffect(() => {\n    confirmBtn.current.focus();\n  }, []);\n\n  return (\n    <div id=\"alert-dialog-content\" className={cx('content-wrapper')}>\n      <h1>Alert Dialog Modal</h1>\n      <br />\n      <p>\n        The abstract modal can be used to create an alert dialog modal. You can use the role,\n        {' '}\n        <code>alertdialog</code>\n        {' '}\n        , to create a modal dialog that interrupts the users workflow to get a response, usually some sort of confirmation.\n      </p>\n      <button ref={confirmBtn} type=\"button\" onClick={handleCloseModal}>Confirm action</button>\n      <button type=\"button\" onClick={handleCloseModal}>Close Modal</button>\n    </div>\n  );\n};\n\n/* VoiceOver will not read the content of the modal dialog if the role attribute\n is set to `alertdialog` and ariaLabel is defined */\nconst ariaLabel = '';\n\nclass AbstractModalAlertDialog extends React.Component {\n  constructor() {\n    super();\n\n    this.state = {\n      isOpen: false,\n    };\n\n    this.handleOpenModal = this.handleOpenModal.bind(this);\n    this.handleCloseModal = this.handleCloseModal.bind(this);\n  }\n\n  handleOpenModal() {\n    this.setState({ isOpen: true });\n  }\n\n  handleCloseModal() {\n    this.setState({ isOpen: false });\n  }\n\n  render() {\n    return (\n      <div>\n        <AbstractModal\n          ariaLabel={ariaLabel}\n          aria-labelledby=\"alert-dialog-content\"\n          isOpen={this.state.isOpen}\n          onRequestClose={this.handleCloseModal}\n          closeOnOutsideClick={false}\n          classNameModal={styles['fixed-size']}\n          role=\"alertdialog\"\n        >\n          <AlertDialogContent handleCloseModal={this.handleCloseModal} />\n        </AbstractModal>\n        <button type=\"button\" onClick={this.handleOpenModal}>Open Modal</button>\n      </div>\n    );\n  }\n}\n\nexport default AbstractModalAlertDialog;\n"},3561:function(e,t,n){"use strict";var a=n(5);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=a(n(0)),o=a(n(911)),s=a(n(1687)),r=n(1688),i=a(n(1689)),d=a(n(1690)),c=a(n(1691)),u=a(n(1692)),p=a(n(1693)),m=a(n(1694)),h=a(n(1695)),f=a(n(1696)),b=a(n(1697)),M=function(){return l.default.createElement(o.default,{packageName:r.name,readme:s.default,srcPath:"https://github.com/cerner/terra-framework/tree/master/packages/".concat(r.name),examples:[{title:"Default Modal",example:l.default.createElement(d.default,null),source:c.default},{title:"Disable closing the modal when clicking on the overlay",example:l.default.createElement(u.default,null),source:p.default},{title:"Fullscreen Modal",example:l.default.createElement(m.default,null),source:h.default},{title:"Alert Dialog Modal",example:l.default.createElement(f.default,null),source:b.default}],propsTables:[{componentName:"Modal",componentSrc:i.default}]})};t.default=M}}]);
//# sourceMappingURL=115-fa01cd2dc76460642fe4.js.map