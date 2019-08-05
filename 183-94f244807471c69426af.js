(window.webpackJsonp=window.webpackJsonp||[]).push([[183],{1381:function(e,t,n){e.exports={"paginator-wrapper":"ControlledPaginatorCommon-module__paginator-wrapper___1vq6i"}},3131:function(e,t,n){"use strict";n.r(t),t.default="# Terra Controlled Paginator\n\nControlled version of the [Paginator](https://github.com/cerner/terra-core/packages/terra-paginator/docs/README.md) for when the pagination state needs to be managed by a parent component. To use this component, the selectedPage must be managed through the state of a parent component, and passed into this paginator through props.\n\n## Getting Started\n\n- Install with [npmjs](https://www.npmjs.com):\n  - `npm install terra-paginator`\n\n## Usage\n\n```jsx\nimport React from 'react';\nimport ControlledPaginator from 'terra-paginator/lib/ControlledPaginator';\n\nclass ControlledPaginatorExample extends React.Component {\n  constructor(props) {\n    super(props);\n\n    this.state = {\n      currentPage: 1,\n    };\n\n    this.changePages = this.changePages.bind(this);\n  }\n\n  changePages(index) {\n    this.setState({ currentPage: index });\n  }\n\n  render() {\n    return (\n      <ControlledPaginator onPageChange={this.changePages} selectedPage={this.state.currentPage} totalCount={450} itemCountPerPage={10} />\n    );\n  }\n}\n```\n\n## Component Features\n\n* [Cross-Browser Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#cross-browser-support)\n* [Responsive Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#responsive-support)\n* [Mobile Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#mobile-support)\n"},3132:function(e,t,n){"use strict";n.r(t),t.default="import React from 'react';\nimport PropTypes from 'prop-types';\nimport classNames from 'classnames/bind';\nimport { injectIntl, intlShape } from 'react-intl';\nimport ResponsiveElement from 'terra-responsive-element';\nimport VisuallyHiddenText from 'terra-visually-hidden-text';\nimport KeyCode from 'keycode-js';\nimport styles from './Paginator.module.scss';\nimport { calculatePages, pageSet } from './_paginationUtils';\n\nconst cx = classNames.bind(styles);\n\nconst propTypes = {\n  /**\n   * Function to be executed when a navigation element is selected.\n   */\n  onPageChange: PropTypes.func.isRequired,\n  /**\n   * The active/selected page. Used to set the default selected page or maintain selection across renders.\n   * Required when using totalCount and itemCountPerPage.\n   */\n  selectedPage: PropTypes.number.isRequired,\n  /**\n   * Total number of all items being paginated.\n   * Required when using itemCountPerPage and selectedPage.\n   */\n  totalCount: PropTypes.number.isRequired,\n  /**\n   * Total number of items per page.\n   * Required when using selectedPage and totalCount.\n   */\n  itemCountPerPage: PropTypes.number.isRequired,\n  /**\n   * @private\n   * The intl object to be injected for translations.\n   */\n  intl: intlShape.isRequired,\n};\n\nclass Paginator extends React.Component {\n  constructor(props) {\n    super(props);\n\n    this.handlePageChange = this.handlePageChange.bind(this);\n    this.handleOnKeyDown = this.handleOnKeyDown.bind(this);\n    this.hasNavContext = this.hasNavContext.bind(this);\n    this.buildPageButtons = this.buildPageButtons.bind(this);\n    this.reducedPaginator = this.reducedPaginator.bind(this);\n  }\n\n  handlePageChange(index) {\n    return (event) => {\n      event.preventDefault();\n\n      if (Number.isNaN(Number(index))) {\n        this.props.onPageChange(event.currentTarget.attributes['aria-label'].value);\n\n        return false;\n      }\n\n      this.props.onPageChange(index);\n\n      return false;\n    };\n  }\n\n  handleOnKeyDown(index) {\n    return (event) => {\n      if (event.nativeEvent.keyCode === KeyCode.KEY_RETURN || event.nativeEvent.keyCode === KeyCode.KEY_SPACE) {\n        event.preventDefault();\n\n        if (Number.isNaN(Number(index))) {\n          this.props.onPageChange(event.currentTarget.attributes['aria-label'].value);\n\n          return false;\n        }\n\n        this.props.onPageChange(index);\n      }\n\n      return false;\n    };\n  }\n\n  buildPageButtons(totalPages, onClick) {\n    const {\n      totalCount,\n      itemCountPerPage,\n      selectedPage,\n      intl,\n    } = this.props;\n    const pageSequence = pageSet(selectedPage, calculatePages(totalCount, itemCountPerPage));\n    const pageButtons = [];\n\n    pageSequence.forEach((val) => {\n      const paginationLinkClassNames = cx([\n        'nav-link',\n        val === selectedPage ? 'is-selected' : null,\n      ]);\n\n      if (val > totalPages) {\n        return;\n      }\n      pageButtons.push((\n        <button\n          aria-label={intl.formatMessage({ id: 'Terra.paginator.pageIndex' }, { pageNumber: val })}\n          aria-current={val === selectedPage && 'page'}\n          className={paginationLinkClassNames}\n          tabIndex={val === selectedPage ? null : '0'}\n          key={`pageButton_${val}`}\n          onClick={onClick(val)}\n          onKeyDown={this.handleOnKeyDown(val)}\n          type=\"button\"\n        >\n          {val}\n        </button>));\n    });\n\n    return pageButtons;\n  }\n\n  hasNavContext() {\n    return this.props.totalCount && this.props.itemCountPerPage;\n  }\n\n  defaultPaginator() {\n    const totalPages = calculatePages(this.props.totalCount, this.props.itemCountPerPage);\n    const { selectedPage, intl } = this.props;\n    const previousPageIndex = selectedPage === 1 ? 1 : selectedPage - 1;\n    const nextPageIndex = selectedPage === totalPages ? totalPages : selectedPage + 1;\n\n    const fullView = (\n      <div className={cx(['paginator', !this.hasNavContext() && 'pageless'])}>\n        {\n          this.hasNavContext() && (\n          <button\n            aria-disabled={selectedPage === 1}\n            aria-label={intl.formatMessage({ id: 'Terra.paginator.first' })}\n            className={cx(['nav-link', 'left-controls', selectedPage === 1 && 'is-disabled'])}\n            tabIndex={selectedPage === 1 ? null : '0'}\n            onClick={this.handlePageChange(1)}\n            onKeyDown={this.handleOnKeyDown(1)}\n            type=\"button\"\n          >\n            {intl.formatMessage({ id: 'Terra.paginator.first' })}\n          </button>\n          )\n        }\n        <button\n          aria-disabled={selectedPage === 1}\n          aria-label={intl.formatMessage({ id: 'Terra.paginator.previous' })}\n          className={cx(['nav-link', 'left-controls', 'previous', selectedPage === 1 && 'is-disabled'])}\n          tabIndex={selectedPage === 1 ? null : '0'}\n          onClick={this.handlePageChange(previousPageIndex)}\n          onKeyDown={this.handleOnKeyDown(previousPageIndex)}\n          type=\"button\"\n        >\n          <span className={cx('icon')} />\n          {intl.formatMessage({ id: 'Terra.paginator.previous' })}\n        </button>\n        {this.hasNavContext() && this.buildPageButtons(totalPages, this.handlePageChange)}\n        <button\n          aria-disabled={selectedPage === totalPages}\n          aria-label={intl.formatMessage({ id: 'Terra.paginator.next' })}\n          className={cx(['nav-link', 'right-controls', 'next', selectedPage === totalPages && 'is-disabled'])}\n          tabIndex={selectedPage === totalPages ? null : '0'}\n          onClick={this.handlePageChange(nextPageIndex)}\n          onKeyDown={this.handleOnKeyDown(nextPageIndex)}\n          type=\"button\"\n        >\n          {intl.formatMessage({ id: 'Terra.paginator.next' })}\n          <span className={cx('icon')} />\n        </button>\n        {\n          this.hasNavContext() && (\n          <button\n            aria-disabled={selectedPage === totalPages}\n            aria-label={intl.formatMessage({ id: 'Terra.paginator.last' })}\n            className={cx(['nav-link', 'right-controls', selectedPage === totalPages && 'is-disabled'])}\n            tabIndex={selectedPage === totalPages ? null : '0'}\n            onClick={this.handlePageChange(totalPages)}\n            onKeyDown={this.handleOnKeyDown(totalPages)}\n            type=\"button\"\n          >\n            {intl.formatMessage({ id: 'Terra.paginator.last' })}\n          </button>\n          )\n        }\n      </div>\n    );\n\n    return fullView;\n  }\n\n  reducedPaginator() {\n    const totalPages = calculatePages(this.props.totalCount, this.props.itemCountPerPage);\n    const { selectedPage, intl } = this.props;\n    const previousPageIndex = selectedPage === 1 ? 1 : selectedPage - 1;\n    const nextPageIndex = selectedPage === totalPages ? totalPages : selectedPage + 1;\n\n    const reducedView = (\n      <div className={cx(['paginator', !this.hasNavContext() && 'pageless'])} role=\"navigation\" aria-label=\"pagination\">\n        {\n          this.hasNavContext() && (\n          <button\n            aria-disabled={selectedPage === 1}\n            aria-label={intl.formatMessage({ id: 'Terra.paginator.first' })}\n            className={cx(['nav-link', 'left-controls', selectedPage === 1 && 'is-disabled'])}\n            tabIndex={selectedPage === 1 ? null : '0'}\n            onClick={this.handlePageChange(1)}\n            onKeyDown={this.handleOnKeyDown(1)}\n            type=\"button\"\n          >\n            {intl.formatMessage({ id: 'Terra.paginator.first' })}\n          </button>\n          )\n        }\n        <button\n          aria-disabled={selectedPage === 1}\n          aria-label={intl.formatMessage({ id: 'Terra.paginator.previous' })}\n          className={cx(['nav-link', 'left-controls', 'previous', 'icon-only', selectedPage === 1 && 'is-disabled'])}\n          tabIndex={selectedPage === 1 ? null : '0'}\n          onClick={this.handlePageChange(previousPageIndex)}\n          onKeyDown={this.handleOnKeyDown(previousPageIndex)}\n          type=\"button\"\n        >\n          <VisuallyHiddenText text={intl.formatMessage({ id: 'Terra.paginator.previous' })} />\n          <span className={cx('icon')} />\n        </button>\n        {this.hasNavContext() && intl.formatMessage({ id: 'Terra.paginator.pageIndex' }, { pageNumber: selectedPage })}\n        <button\n          aria-disabled={selectedPage === totalPages}\n          aria-label={intl.formatMessage({ id: 'Terra.paginator.next' })}\n          className={cx(['nav-link', 'right-controls', 'next', 'icon-only', selectedPage === totalPages && 'is-disabled'])}\n          tabIndex={selectedPage === totalPages ? null : '0'}\n          onClick={this.handlePageChange(nextPageIndex)}\n          onKeyDown={this.handleOnKeyDown(nextPageIndex)}\n          type=\"button\"\n        >\n          <VisuallyHiddenText text={intl.formatMessage({ id: 'Terra.paginator.next' })} />\n          <span className={cx('icon')} />\n        </button>\n        {\n          this.hasNavContext() && (\n          <button\n            aria-disabled={selectedPage === totalPages}\n            aria-label={intl.formatMessage({ id: 'Terra.paginator.last' })}\n            className={cx(['nav-link', 'right-controls', selectedPage === totalPages && 'is-disabled'])}\n            tabIndex={selectedPage === totalPages ? null : '0'}\n            onClick={this.handlePageChange(totalPages)}\n            onKeyDown={this.handleOnKeyDown(totalPages)}\n            type=\"button\"\n          >\n            {intl.formatMessage({ id: 'Terra.paginator.last' })}\n          </button>\n          )\n        }\n      </div>\n    );\n\n    return reducedView;\n  }\n\n  render() {\n    return <ResponsiveElement tiny={this.reducedPaginator()} small={this.defaultPaginator()} />;\n  }\n}\n\nPaginator.propTypes = propTypes;\n\nexport default injectIntl(Paginator);\n"},3133:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=u(n(0)),o=u(n(1096)),r=u(n(61)),i=u(n(3134)),s=u(n(4)),l=u(n(1381));function u(e){return e&&e.__esModule?e:{default:e}}function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var f=s.default.bind(l.default),m=function(){return function(e,t){for(var n=[],o=0;o<t;o+=1)n.push(a.default.createElement("p",{key:Math.floor(Math.random()*Math.floor(1e5))},e));return n}("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce porttitor ullamcorper nisi, vel tincidunt dui pharetra vel. Morbi eu rutrum nibh, sit amet placerat libero. Integer vel dapibus nibh. Donec tempor mi vitae lorem congue, ut ultrices metus feugiat. Sed non commodo felis. Aliquam eget maximus dui, ut rhoncus augue.",10)},b=function(e){function t(e){var n,a,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),a=this,(n=!(o=g(t).call(this,e))||"object"!==d(o)&&"function"!=typeof o?p(a):o).state={content:m(),currentPage:1},n.changePages=n.changePages.bind(p(n)),n}var n,s,l;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(t,a.default.Component),n=t,(s=[{key:"changePages",value:function(e){this.setState({currentPage:e})}},{key:"render",value:function(){var e=this;return a.default.createElement("div",{className:f("paginator-wrapper")},a.default.createElement(o.default,{header:a.default.createElement("h1",null,"Page",this.state.currentPage),footer:a.default.createElement(i.default,{onPageChange:this.changePages,selectedPage:this.state.currentPage,totalCount:450,itemCountPerPage:10})},a.default.createElement("div",null,a.default.createElement(r.default,{text:"Set Page to 9",onClick:function(){e.setState({currentPage:9})}}),a.default.createElement(r.default,{text:"Set Page to 15",onClick:function(){e.setState({currentPage:15})}}),a.default.createElement(r.default,{text:"Set Page to 45",onClick:function(){e.setState({currentPage:45})}})),this.state.content))}}])&&c(n.prototype,s),l&&c(n,l),t}();t.default=b},3134:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=g(n(0)),o=g(n(2)),r=g(n(4)),i=n(21),s=g(n(922)),l=g(n(153)),u=g(n(35)),d=g(n(1248)),c=n(1249);function g(e){return e&&e.__esModule?e:{default:e}}function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function h(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var P=r.default.bind(d.default),v={onPageChange:o.default.func.isRequired,selectedPage:o.default.number.isRequired,totalCount:o.default.number.isRequired,itemCountPerPage:o.default.number.isRequired,intl:i.intlShape.isRequired},y=function(e){function t(e){var n,a,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),a=this,(n=!(o=f(t).call(this,e))||"object"!==p(o)&&"function"!=typeof o?m(a):o).handlePageChange=n.handlePageChange.bind(m(n)),n.handleOnKeyDown=n.handleOnKeyDown.bind(m(n)),n.hasNavContext=n.hasNavContext.bind(m(n)),n.buildPageButtons=n.buildPageButtons.bind(m(n)),n.reducedPaginator=n.reducedPaginator.bind(m(n)),n}var n,o,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(t,a.default.Component),n=t,(o=[{key:"handlePageChange",value:function(e){var t=this;return function(n){return n.preventDefault(),Number.isNaN(Number(e))?(t.props.onPageChange(n.currentTarget.attributes["aria-label"].value),!1):(t.props.onPageChange(e),!1)}}},{key:"handleOnKeyDown",value:function(e){var t=this;return function(n){if(n.nativeEvent.keyCode===u.default.KEY_RETURN||n.nativeEvent.keyCode===u.default.KEY_SPACE){if(n.preventDefault(),Number.isNaN(Number(e)))return t.props.onPageChange(n.currentTarget.attributes["aria-label"].value),!1;t.props.onPageChange(e)}return!1}}},{key:"buildPageButtons",value:function(e,t){var n=this,o=this.props,r=o.totalCount,i=o.itemCountPerPage,s=o.selectedPage,l=o.intl,u=(0,c.pageSet)(s,(0,c.calculatePages)(r,i)),d=[];return u.forEach(function(o){var r=P(["nav-link",o===s?"is-selected":null]);o>e||d.push(a.default.createElement("button",{"aria-label":l.formatMessage({id:"Terra.paginator.pageIndex"},{pageNumber:o}),"aria-current":o===s&&"page",className:r,tabIndex:o===s?null:"0",key:"pageButton_".concat(o),onClick:t(o),onKeyDown:n.handleOnKeyDown(o),type:"button"},o))}),d}},{key:"hasNavContext",value:function(){return this.props.totalCount&&this.props.itemCountPerPage}},{key:"defaultPaginator",value:function(){var e=(0,c.calculatePages)(this.props.totalCount,this.props.itemCountPerPage),t=this.props,n=t.selectedPage,o=t.intl,r=1===n?1:n-1,i=n===e?e:n+1;return a.default.createElement("div",{className:P(["paginator",!this.hasNavContext()&&"pageless"])},this.hasNavContext()&&a.default.createElement("button",{"aria-disabled":1===n,"aria-label":o.formatMessage({id:"Terra.paginator.first"}),className:P(["nav-link","left-controls",1===n&&"is-disabled"]),tabIndex:1===n?null:"0",onClick:this.handlePageChange(1),onKeyDown:this.handleOnKeyDown(1),type:"button"},o.formatMessage({id:"Terra.paginator.first"})),a.default.createElement("button",{"aria-disabled":1===n,"aria-label":o.formatMessage({id:"Terra.paginator.previous"}),className:P(["nav-link","left-controls","previous",1===n&&"is-disabled"]),tabIndex:1===n?null:"0",onClick:this.handlePageChange(r),onKeyDown:this.handleOnKeyDown(r),type:"button"},a.default.createElement("span",{className:P("icon")}),o.formatMessage({id:"Terra.paginator.previous"})),this.hasNavContext()&&this.buildPageButtons(e,this.handlePageChange),a.default.createElement("button",{"aria-disabled":n===e,"aria-label":o.formatMessage({id:"Terra.paginator.next"}),className:P(["nav-link","right-controls","next",n===e&&"is-disabled"]),tabIndex:n===e?null:"0",onClick:this.handlePageChange(i),onKeyDown:this.handleOnKeyDown(i),type:"button"},o.formatMessage({id:"Terra.paginator.next"}),a.default.createElement("span",{className:P("icon")})),this.hasNavContext()&&a.default.createElement("button",{"aria-disabled":n===e,"aria-label":o.formatMessage({id:"Terra.paginator.last"}),className:P(["nav-link","right-controls",n===e&&"is-disabled"]),tabIndex:n===e?null:"0",onClick:this.handlePageChange(e),onKeyDown:this.handleOnKeyDown(e),type:"button"},o.formatMessage({id:"Terra.paginator.last"})))}},{key:"reducedPaginator",value:function(){var e=(0,c.calculatePages)(this.props.totalCount,this.props.itemCountPerPage),t=this.props,n=t.selectedPage,o=t.intl,r=1===n?1:n-1,i=n===e?e:n+1;return a.default.createElement("div",{className:P(["paginator",!this.hasNavContext()&&"pageless"]),role:"navigation","aria-label":"pagination"},this.hasNavContext()&&a.default.createElement("button",{"aria-disabled":1===n,"aria-label":o.formatMessage({id:"Terra.paginator.first"}),className:P(["nav-link","left-controls",1===n&&"is-disabled"]),tabIndex:1===n?null:"0",onClick:this.handlePageChange(1),onKeyDown:this.handleOnKeyDown(1),type:"button"},o.formatMessage({id:"Terra.paginator.first"})),a.default.createElement("button",{"aria-disabled":1===n,"aria-label":o.formatMessage({id:"Terra.paginator.previous"}),className:P(["nav-link","left-controls","previous","icon-only",1===n&&"is-disabled"]),tabIndex:1===n?null:"0",onClick:this.handlePageChange(r),onKeyDown:this.handleOnKeyDown(r),type:"button"},a.default.createElement(l.default,{text:o.formatMessage({id:"Terra.paginator.previous"})}),a.default.createElement("span",{className:P("icon")})),this.hasNavContext()&&o.formatMessage({id:"Terra.paginator.pageIndex"},{pageNumber:n}),a.default.createElement("button",{"aria-disabled":n===e,"aria-label":o.formatMessage({id:"Terra.paginator.next"}),className:P(["nav-link","right-controls","next","icon-only",n===e&&"is-disabled"]),tabIndex:n===e?null:"0",onClick:this.handlePageChange(i),onKeyDown:this.handleOnKeyDown(i),type:"button"},a.default.createElement(l.default,{text:o.formatMessage({id:"Terra.paginator.next"})}),a.default.createElement("span",{className:P("icon")})),this.hasNavContext()&&a.default.createElement("button",{"aria-disabled":n===e,"aria-label":o.formatMessage({id:"Terra.paginator.last"}),className:P(["nav-link","right-controls",n===e&&"is-disabled"]),tabIndex:n===e?null:"0",onClick:this.handlePageChange(e),onKeyDown:this.handleOnKeyDown(e),type:"button"},o.formatMessage({id:"Terra.paginator.last"})))}},{key:"render",value:function(){return a.default.createElement(s.default,{tiny:this.reducedPaginator(),small:this.defaultPaginator()})}}])&&h(n.prototype,o),r&&h(n,r),t}();y.propTypes=v;var C=(0,i.injectIntl)(y);t.default=C},3135:function(e,t,n){"use strict";n.r(t),t.default="import React from 'react';\nimport Dialog from 'terra-dialog';\nimport Button from 'terra-button';\n// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions\nimport ControlledPaginator from 'terra-paginator/lib/ControlledPaginator';\nimport classNames from 'classnames/bind';\nimport styles from './ControlledPaginatorCommon.module.scss';\n\nconst cx = classNames.bind(styles);\n\nconst totalCount = 450;\n\nconst fillArray = (value, len) => {\n  const arr = [];\n  for (let i = 0; i < len; i += 1) {\n    arr.push(<p key={Math.floor(Math.random() * Math.floor(100000))}>{value}</p>);\n  }\n  return arr;\n};\n\nconst buildPage = () => {\n  let fullContent = [];\n  const content = ('Lorem ipsum dolor sit amet, consectetur adipiscing elit. '\n    + 'Fusce porttitor ullamcorper nisi, vel tincidunt dui pharetra vel. '\n    + 'Morbi eu rutrum nibh, sit amet placerat libero. Integer vel dapibus nibh. '\n    + 'Donec tempor mi vitae lorem congue, ut ultrices metus feugiat. Sed non commodo felis. '\n    + 'Aliquam eget maximus dui, ut rhoncus augue.');\n\n  fullContent = fillArray(content, 10);\n\n  return (\n    fullContent\n  );\n};\n\nclass PaginatorExample extends React.Component {\n  constructor(props) {\n    super(props);\n\n    this.state = {\n      content: buildPage(),\n      currentPage: 1,\n    };\n\n    this.changePages = this.changePages.bind(this);\n  }\n\n  changePages(index) {\n    this.setState({ currentPage: index });\n  }\n\n  render() {\n    return (\n      <div className={cx('paginator-wrapper')}>\n        <Dialog\n          header={(\n            <h1>\nPage\n              {this.state.currentPage}\n            </h1>\n)}\n          footer={<ControlledPaginator onPageChange={this.changePages} selectedPage={this.state.currentPage} totalCount={totalCount} itemCountPerPage={10} />}\n        >\n          <div>\n            <Button text=\"Set Page to 9\" onClick={() => { this.setState({ currentPage: 9 }); }} />\n            <Button text=\"Set Page to 15\" onClick={() => { this.setState({ currentPage: 15 }); }} />\n            <Button text=\"Set Page to 45\" onClick={() => { this.setState({ currentPage: 45 }); }} />\n          </div>\n          {this.state.content}\n        </Dialog>\n      </div>\n    );\n  }\n}\n\nexport default PaginatorExample;\n"},3787:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=d(n(0)),o=d(n(911)),r=d(n(3131)),i=n(1247),s=d(n(3132)),l=d(n(3133)),u=d(n(3135));function d(e){return e&&e.__esModule?e:{default:e}}var c=function(){return a.default.createElement(o.default,{packageName:i.name,readme:r.default,srcPath:"https://github.com/cerner/terra-core/tree/master/packages/".concat(i.name),examples:[{title:"Controlled Paginator Example",example:a.default.createElement(l.default,null),source:u.default}],propsTables:[{componentName:"Controlled Paginator",componentSrc:s.default}]})};t.default=c}}]);
//# sourceMappingURL=183-94f244807471c69426af.js.map