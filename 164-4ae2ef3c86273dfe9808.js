(window.webpackJsonp=window.webpackJsonp||[]).push([[164],{1250:function(e,t,n){e.exports={"paginator-wrapper":"PaginatorExampleCommon-module__paginator-wrapper___2IKfk"}},1512:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=g(n(0)),o=g(n(2)),r=g(n(4)),i=n(21),s=g(n(922)),l=g(n(153)),u=g(n(35)),c=g(n(1248)),d=n(1249);function g(e){return e&&e.__esModule?e:{default:e}}function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function h(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function P(e,t){return(P=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var b=r.default.bind(c.default),v={onPageChange:o.default.func.isRequired,selectedPage:o.default.number,totalCount:o.default.number,itemCountPerPage:o.default.number,intl:i.intlShape.isRequired},y=function(e){function t(e){var n,a,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),a=this;var r=(n=!(o=f(t).call(this,e))||"object"!==p(o)&&"function"!=typeof o?m(a):o).props,i=r.selectedPage,s=r.totalCount,l=r.itemCountPerPage;return n.state={selectedPage:i&&s?i:void 0,pageSequence:i&&s?(0,d.pageSet)(i,(0,d.calculatePages)(s,l)):void 0},n.handlePageChange=n.handlePageChange.bind(m(n)),n.handleOnKeyDown=n.handleOnKeyDown.bind(m(n)),n.hasNavContext=n.hasNavContext.bind(m(n)),n.buildPageButtons=n.buildPageButtons.bind(m(n)),n.reducedPaginator=n.reducedPaginator.bind(m(n)),n}var n,o,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&P(e,t)}(t,a.default.Component),n=t,(o=[{key:"handlePageChange",value:function(e){var t=this;return function(n){return n.preventDefault(),Number.isNaN(Number(e))?(t.props.onPageChange(n.currentTarget.attributes["aria-label"].value),!1):(t.props.onPageChange(e),t.setState({selectedPage:e,pageSequence:(0,d.pageSet)(e,(0,d.calculatePages)(t.props.totalCount,t.props.itemCountPerPage))}),!1)}}},{key:"handleOnKeyDown",value:function(e){var t=this;return function(n){if(n.nativeEvent.keyCode===u.default.KEY_RETURN||n.nativeEvent.keyCode===u.default.KEY_SPACE){if(n.preventDefault(),Number.isNaN(Number(e)))return t.props.onPageChange(n.currentTarget.attributes["aria-label"].value),!1;t.props.onPageChange(e),t.setState({selectedPage:e,pageSequence:(0,d.pageSet)(e,(0,d.calculatePages)(t.props.totalCount,t.props.itemCountPerPage))})}return!1}}},{key:"buildPageButtons",value:function(e,t){var n=this,o=this.props.intl,r=this.state,i=r.pageSequence,s=r.selectedPage,l=[];return i.forEach(function(r){var i=b(["nav-link",r===s?"is-selected":null]);r>e||l.push(a.default.createElement("button",{"aria-label":o.formatMessage({id:"Terra.paginator.pageIndex"},{pageNumber:r}),"aria-current":r===s&&"page",className:i,tabIndex:r===s?null:"0",key:"pageButton_".concat(r),onClick:t(r),onKeyDown:n.handleOnKeyDown(r),type:"button"},r))}),l}},{key:"hasNavContext",value:function(){return this.props.totalCount&&this.props.itemCountPerPage}},{key:"defaultPaginator",value:function(){var e=this.props.intl,t=(0,d.calculatePages)(this.props.totalCount,this.props.itemCountPerPage),n=this.state.selectedPage,o=1===n?1:n-1,r=n===t?t:n+1;return a.default.createElement("div",{className:b(["paginator",!this.hasNavContext()&&"pageless"])},this.hasNavContext()&&a.default.createElement("button",{"aria-disabled":1===n,"aria-label":e.formatMessage({id:"Terra.paginator.first"}),className:b(["nav-link","left-controls",1===n&&"is-disabled"]),tabIndex:1===n?null:"0",onClick:this.handlePageChange(1),onKeyDown:this.handleOnKeyDown(1),type:"button"},e.formatMessage({id:"Terra.paginator.first"})),a.default.createElement("button",{"aria-disabled":1===n,"aria-label":e.formatMessage({id:"Terra.paginator.previous"}),className:b(["nav-link","left-controls","previous",1===n&&"is-disabled"]),tabIndex:1===n?null:"0",onClick:this.handlePageChange(o),onKeyDown:this.handleOnKeyDown(o),type:"button"},a.default.createElement("span",{className:b("icon")}),e.formatMessage({id:"Terra.paginator.previous"})),this.hasNavContext()&&this.buildPageButtons(t,this.handlePageChange),a.default.createElement("button",{"aria-disabled":n===t,"aria-label":e.formatMessage({id:"Terra.paginator.next"}),className:b(["nav-link","right-controls","next",n===t&&"is-disabled"]),tabIndex:n===t?null:"0",onClick:this.handlePageChange(r),onKeyDown:this.handleOnKeyDown(r),type:"button"},e.formatMessage({id:"Terra.paginator.next"}),a.default.createElement("span",{className:b("icon")})),this.hasNavContext()&&a.default.createElement("button",{"aria-disabled":n===t,"aria-label":e.formatMessage({id:"Terra.paginator.last"}),className:b(["nav-link","right-controls",n===t&&"is-disabled"]),tabIndex:n===t?null:"0",onClick:this.handlePageChange(t),onKeyDown:this.handleOnKeyDown(t),type:"button"},e.formatMessage({id:"Terra.paginator.last"})))}},{key:"reducedPaginator",value:function(){var e=this.props.intl,t=(0,d.calculatePages)(this.props.totalCount,this.props.itemCountPerPage),n=this.state.selectedPage,o=1===n?1:n-1,r=n===t?t:n+1;return a.default.createElement("div",{className:b(["paginator",!this.hasNavContext()&&"pageless"]),role:"navigation","aria-label":"pagination"},this.hasNavContext()&&a.default.createElement("button",{"aria-disabled":1===n,"aria-label":e.formatMessage({id:"Terra.paginator.first"}),className:b(["nav-link","left-controls",1===n&&"is-disabled"]),tabIndex:1===n?null:"0",onClick:this.handlePageChange(1),onKeyDown:this.handleOnKeyDown(1),type:"button"},e.formatMessage({id:"Terra.paginator.first"})),a.default.createElement("button",{"aria-disabled":1===n,"aria-label":e.formatMessage({id:"Terra.paginator.previous"}),className:b(["nav-link","left-controls","previous","icon-only",1===n&&"is-disabled"]),tabIndex:1===n?null:"0",onClick:this.handlePageChange(o),onKeyDown:this.handleOnKeyDown(o),type:"button"},a.default.createElement(l.default,{text:e.formatMessage({id:"Terra.paginator.previous"})}),a.default.createElement("span",{className:b("icon")})),this.hasNavContext()&&e.formatMessage({id:"Terra.paginator.pageIndex"},{pageNumber:n}),a.default.createElement("button",{"aria-disabled":n===t,"aria-label":e.formatMessage({id:"Terra.paginator.next"}),className:b(["nav-link","right-controls","next","icon-only",n===t&&"is-disabled"]),tabIndex:n===t?null:"0",onClick:this.handlePageChange(r),onKeyDown:this.handleOnKeyDown(r),type:"button"},a.default.createElement(l.default,{text:e.formatMessage({id:"Terra.paginator.next"})}),a.default.createElement("span",{className:b("icon")})),this.hasNavContext()&&a.default.createElement("button",{"aria-disabled":n===t,"aria-label":e.formatMessage({id:"Terra.paginator.last"}),className:b(["nav-link","right-controls",n===t&&"is-disabled"]),tabIndex:n===t?null:"0",onClick:this.handlePageChange(t),onKeyDown:this.handleOnKeyDown(t),type:"button"},e.formatMessage({id:"Terra.paginator.last"})))}},{key:"render",value:function(){return a.default.createElement(s.default,{tiny:this.reducedPaginator(),medium:this.defaultPaginator()})}}])&&h(n.prototype,o),r&&h(n,r),t}();y.propTypes=v;var x=(0,i.injectIntl)(y);t.default=x},3125:function(e,t,n){"use strict";n.r(t),t.default="# Terra Paginator\n\nStandard paginator to be used for data sets of known and unknown size. Provides first, last, previous, next, and paged functionality.\n\n## Getting Started\n\n- Install with [npmjs](https://www.npmjs.com):\n  - `npm install terra-paginator`\n\n\x3c!-- AUTO-GENERATED-CONTENT:START Peer Dependencies --\x3e\n## Peer Dependencies\n\n<details>\n<summary>View information on this component's peer dependencies.</summary>\n\nThis component requires the following peer dependencies be installed in your app for the component to properly function.\n\n| Peer Dependency | Version |\n|-|-|\n| react | ^16.8.5 |\n| react-dom | ^16.8.5 |\n\n\n</details>\n\x3c!-- AUTO-GENERATED-CONTENT:END --\x3e\n\n## Usage\n\n```jsx\nimport React from 'react';\nimport Paginator from 'terra-paginator';\n\n<Paginator onPageChange={i => console.log(i)} selectedPage={1} totalCount={2234} itemCountPerPage={20} />\n```\n\n## Component Features\n\n* [Cross-Browser Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#cross-browser-support)\n* [Responsive Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#responsive-support)\n* [Mobile Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#mobile-support)\n"},3126:function(e,t,n){"use strict";n.r(t),t.default="import React from 'react';\nimport PropTypes from 'prop-types';\nimport classNames from 'classnames/bind';\nimport { injectIntl, intlShape } from 'react-intl';\nimport ResponsiveElement from 'terra-responsive-element';\nimport VisuallyHiddenText from 'terra-visually-hidden-text';\nimport KeyCode from 'keycode-js';\nimport styles from './Paginator.module.scss';\nimport { calculatePages, pageSet } from './_paginationUtils';\n\nconst cx = classNames.bind(styles);\n\nconst propTypes = {\n  /**\n   * Function to be executed when a navigation element is selected.\n   */\n  onPageChange: PropTypes.func.isRequired,\n  /**\n   * The active/selected page. Used to set the default selected page or maintain selection across renders.\n   * Required when using totalCount and itemCountPerPage.\n   */\n  selectedPage: PropTypes.number,\n  /**\n   * Total number of all items being paginated.\n   * Required when using itemCountPerPage and selectedPage.\n   */\n  totalCount: PropTypes.number,\n  /**\n    * Total number of items per page.\n    * Required when using selectedPage and totalCount.\n    */\n  itemCountPerPage: PropTypes.number,\n  /**\n   * @private\n   * The intl object to be injected for translations.\n   */\n  intl: intlShape.isRequired,\n};\n\nclass Paginator extends React.Component {\n  constructor(props) {\n    super(props);\n\n    const { selectedPage, totalCount, itemCountPerPage } = this.props;\n\n    this.state = {\n      selectedPage: selectedPage && totalCount ? selectedPage : undefined,\n      pageSequence: selectedPage && totalCount ? pageSet(selectedPage, calculatePages(totalCount, itemCountPerPage)) : undefined,\n    };\n\n    this.handlePageChange = this.handlePageChange.bind(this);\n    this.handleOnKeyDown = this.handleOnKeyDown.bind(this);\n    this.hasNavContext = this.hasNavContext.bind(this);\n    this.buildPageButtons = this.buildPageButtons.bind(this);\n    this.reducedPaginator = this.reducedPaginator.bind(this);\n  }\n\n  handlePageChange(index) {\n    return (event) => {\n      event.preventDefault();\n\n      if (Number.isNaN(Number(index))) {\n        this.props.onPageChange(event.currentTarget.attributes['aria-label'].value);\n\n        return false;\n      }\n\n      this.props.onPageChange(index);\n      this.setState({\n        selectedPage: index,\n        pageSequence: pageSet(index, calculatePages(this.props.totalCount, this.props.itemCountPerPage)),\n      });\n\n      return false;\n    };\n  }\n\n  handleOnKeyDown(index) {\n    return (event) => {\n      if (event.nativeEvent.keyCode === KeyCode.KEY_RETURN || event.nativeEvent.keyCode === KeyCode.KEY_SPACE) {\n        event.preventDefault();\n\n        if (Number.isNaN(Number(index))) {\n          this.props.onPageChange(event.currentTarget.attributes['aria-label'].value);\n\n          return false;\n        }\n\n        this.props.onPageChange(index);\n        this.setState({\n          selectedPage: index,\n          pageSequence: pageSet(index, calculatePages(this.props.totalCount, this.props.itemCountPerPage)),\n        });\n      }\n\n      return false;\n    };\n  }\n\n  buildPageButtons(totalPages, onClick) {\n    const { intl } = this.props;\n    const { pageSequence, selectedPage } = this.state;\n\n    const pageButtons = [];\n\n    pageSequence.forEach((val) => {\n      const paginationLinkClassNames = cx([\n        'nav-link',\n        val === selectedPage ? 'is-selected' : null,\n      ]);\n\n      if (val > totalPages) {\n        return;\n      }\n      pageButtons.push((\n        <button\n          aria-label={intl.formatMessage({ id: 'Terra.paginator.pageIndex' }, { pageNumber: val })}\n          aria-current={val === selectedPage && 'page'}\n          className={paginationLinkClassNames}\n          tabIndex={val === selectedPage ? null : '0'}\n          key={`pageButton_${val}`}\n          onClick={onClick(val)}\n          onKeyDown={this.handleOnKeyDown(val)}\n          type=\"button\"\n        >\n          {val}\n        </button>\n      ));\n    });\n\n    return pageButtons;\n  }\n\n  hasNavContext() {\n    return this.props.totalCount && this.props.itemCountPerPage;\n  }\n\n  defaultPaginator() {\n    const { intl } = this.props;\n    const totalPages = calculatePages(this.props.totalCount, this.props.itemCountPerPage);\n    const { selectedPage } = this.state;\n    const previousPageIndex = selectedPage === 1 ? 1 : selectedPage - 1;\n    const nextPageIndex = selectedPage === totalPages ? totalPages : selectedPage + 1;\n\n    const fullView = (\n      <div className={cx(['paginator', !this.hasNavContext() && 'pageless'])}>\n        {\n          this.hasNavContext() && (\n          <button\n            aria-disabled={selectedPage === 1}\n            aria-label={intl.formatMessage({ id: 'Terra.paginator.first' })}\n            className={cx(['nav-link', 'left-controls', selectedPage === 1 && 'is-disabled'])}\n            tabIndex={selectedPage === 1 ? null : '0'}\n            onClick={this.handlePageChange(1)}\n            onKeyDown={this.handleOnKeyDown(1)}\n            type=\"button\"\n          >\n            {intl.formatMessage({ id: 'Terra.paginator.first' })}\n          </button>\n          )\n        }\n        <button\n          aria-disabled={selectedPage === 1}\n          aria-label={intl.formatMessage({ id: 'Terra.paginator.previous' })}\n          className={cx(['nav-link', 'left-controls', 'previous', selectedPage === 1 && 'is-disabled'])}\n          tabIndex={selectedPage === 1 ? null : '0'}\n          onClick={this.handlePageChange(previousPageIndex)}\n          onKeyDown={this.handleOnKeyDown(previousPageIndex)}\n          type=\"button\"\n        >\n          <span className={cx('icon')} />\n          {intl.formatMessage({ id: 'Terra.paginator.previous' })}\n        </button>\n        {this.hasNavContext() && this.buildPageButtons(totalPages, this.handlePageChange)}\n        <button\n          aria-disabled={selectedPage === totalPages}\n          aria-label={intl.formatMessage({ id: 'Terra.paginator.next' })}\n          className={cx(['nav-link', 'right-controls', 'next', selectedPage === totalPages && 'is-disabled'])}\n          tabIndex={selectedPage === totalPages ? null : '0'}\n          onClick={this.handlePageChange(nextPageIndex)}\n          onKeyDown={this.handleOnKeyDown(nextPageIndex)}\n          type=\"button\"\n        >\n          {intl.formatMessage({ id: 'Terra.paginator.next' })}\n          <span className={cx('icon')} />\n        </button>\n        {\n          this.hasNavContext() && (\n          <button\n            aria-disabled={selectedPage === totalPages}\n            aria-label={intl.formatMessage({ id: 'Terra.paginator.last' })}\n            className={cx(['nav-link', 'right-controls', selectedPage === totalPages && 'is-disabled'])}\n            tabIndex={selectedPage === totalPages ? null : '0'}\n            onClick={this.handlePageChange(totalPages)}\n            onKeyDown={this.handleOnKeyDown(totalPages)}\n            type=\"button\"\n          >\n            {intl.formatMessage({ id: 'Terra.paginator.last' })}\n          </button>\n          )\n        }\n      </div>\n    );\n\n    return fullView;\n  }\n\n  reducedPaginator() {\n    const { intl } = this.props;\n    const totalPages = calculatePages(this.props.totalCount, this.props.itemCountPerPage);\n    const { selectedPage } = this.state;\n    const previousPageIndex = selectedPage === 1 ? 1 : selectedPage - 1;\n    const nextPageIndex = selectedPage === totalPages ? totalPages : selectedPage + 1;\n\n    const reducedView = (\n      <div className={cx(['paginator', !this.hasNavContext() && 'pageless'])} role=\"navigation\" aria-label=\"pagination\">\n        {\n          this.hasNavContext() && (\n          <button\n            aria-disabled={selectedPage === 1}\n            aria-label={intl.formatMessage({ id: 'Terra.paginator.first' })}\n            className={cx(['nav-link', 'left-controls', selectedPage === 1 && 'is-disabled'])}\n            tabIndex={selectedPage === 1 ? null : '0'}\n            onClick={this.handlePageChange(1)}\n            onKeyDown={this.handleOnKeyDown(1)}\n            type=\"button\"\n          >\n            {intl.formatMessage({ id: 'Terra.paginator.first' })}\n          </button>\n          )\n        }\n        <button\n          aria-disabled={selectedPage === 1}\n          aria-label={intl.formatMessage({ id: 'Terra.paginator.previous' })}\n          className={cx(['nav-link', 'left-controls', 'previous', 'icon-only', selectedPage === 1 && 'is-disabled'])}\n          tabIndex={selectedPage === 1 ? null : '0'}\n          onClick={this.handlePageChange(previousPageIndex)}\n          onKeyDown={this.handleOnKeyDown(previousPageIndex)}\n          type=\"button\"\n        >\n          <VisuallyHiddenText text={intl.formatMessage({ id: 'Terra.paginator.previous' })} />\n          <span className={cx('icon')} />\n        </button>\n        {this.hasNavContext() && intl.formatMessage({ id: 'Terra.paginator.pageIndex' }, { pageNumber: selectedPage })}\n        <button\n          aria-disabled={selectedPage === totalPages}\n          aria-label={intl.formatMessage({ id: 'Terra.paginator.next' })}\n          className={cx(['nav-link', 'right-controls', 'next', 'icon-only', selectedPage === totalPages && 'is-disabled'])}\n          tabIndex={selectedPage === totalPages ? null : '0'}\n          onClick={this.handlePageChange(nextPageIndex)}\n          onKeyDown={this.handleOnKeyDown(nextPageIndex)}\n          type=\"button\"\n        >\n          <VisuallyHiddenText text={intl.formatMessage({ id: 'Terra.paginator.next' })} />\n          <span className={cx('icon')} />\n        </button>\n        {\n          this.hasNavContext() && (\n          <button\n            aria-disabled={selectedPage === totalPages}\n            aria-label={intl.formatMessage({ id: 'Terra.paginator.last' })}\n            className={cx(['nav-link', 'right-controls', selectedPage === totalPages && 'is-disabled'])}\n            tabIndex={selectedPage === totalPages ? null : '0'}\n            onClick={this.handlePageChange(totalPages)}\n            onKeyDown={this.handleOnKeyDown(totalPages)}\n            type=\"button\"\n          >\n            {intl.formatMessage({ id: 'Terra.paginator.last' })}\n          </button>\n          )\n        }\n      </div>\n    );\n\n    return reducedView;\n  }\n\n  render() {\n    return <ResponsiveElement tiny={this.reducedPaginator()} medium={this.defaultPaginator()} />;\n  }\n}\n\nPaginator.propTypes = propTypes;\n\nexport default injectIntl(Paginator);\n"},3127:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=l(n(0)),o=l(n(1096)),r=l(n(1512)),i=l(n(4)),s=l(n(1250));function l(e){return e&&e.__esModule?e:{default:e}}function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function g(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var h=i.default.bind(s.default),f=function(){return function(e,t){for(var n=[],o=0;o<t;o+=1)n.push(a.default.createElement("p",{key:Math.floor(Math.random()*Math.floor(1e5))},e));return n}("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce porttitor ullamcorper nisi, vel tincidunt dui pharetra vel. Morbi eu rutrum nibh, sit amet placerat libero. Integer vel dapibus nibh. Donec tempor mi vitae lorem congue, ut ultrices metus feugiat. Sed non commodo felis. Aliquam eget maximus dui, ut rhoncus augue.",10)},m=function(e){function t(e){var n,a,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),a=this,(n=!(o=d(t).call(this,e))||"object"!==u(o)&&"function"!=typeof o?g(a):o).state={content:f(),currentPage:1},n.changePages=n.changePages.bind(g(n)),n}var n,i,s;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,a.default.Component),n=t,(i=[{key:"changePages",value:function(e){this.setState({currentPage:e})}},{key:"render",value:function(){return a.default.createElement("div",{className:h("paginator-wrapper")},a.default.createElement(o.default,{header:a.default.createElement("h1",null,"Page",this.state.currentPage),footer:a.default.createElement(r.default,{onPageChange:this.changePages,selectedPage:1,totalCount:450,itemCountPerPage:10})},this.state.content))}}])&&c(n.prototype,i),s&&c(n,s),t}();t.default=m},3128:function(e,t,n){"use strict";n.r(t),t.default="import React from 'react';\nimport Dialog from 'terra-dialog';\n// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions\nimport Paginator from 'terra-paginator/lib/Paginator';\nimport classNames from 'classnames/bind';\nimport styles from './PaginatorExampleCommon.module.scss';\n\nconst cx = classNames.bind(styles);\n\n\nconst totalCount = 450;\n\nconst fillArray = (value, len) => {\n  const arr = [];\n  for (let i = 0; i < len; i += 1) {\n    arr.push(<p key={Math.floor(Math.random() * Math.floor(100000))}>{value}</p>);\n  }\n  return arr;\n};\n\nconst buildPage = () => {\n  let fullContent = [];\n  const content = ('Lorem ipsum dolor sit amet, consectetur adipiscing elit. '\n    + 'Fusce porttitor ullamcorper nisi, vel tincidunt dui pharetra vel. '\n    + 'Morbi eu rutrum nibh, sit amet placerat libero. Integer vel dapibus nibh. '\n    + 'Donec tempor mi vitae lorem congue, ut ultrices metus feugiat. Sed non commodo felis. '\n    + 'Aliquam eget maximus dui, ut rhoncus augue.');\n\n  fullContent = fillArray(content, 10);\n\n  return (\n    fullContent\n  );\n};\n\nclass PaginatorExample extends React.Component {\n  constructor(props) {\n    super(props);\n\n    this.state = {\n      content: buildPage(),\n      currentPage: 1,\n    };\n\n    this.changePages = this.changePages.bind(this);\n  }\n\n  changePages(index) {\n    this.setState({ currentPage: index });\n  }\n\n  render() {\n    return (\n      <div className={cx('paginator-wrapper')}>\n        <Dialog\n          header={(\n            <h1>\nPage\n              {this.state.currentPage}\n            </h1>\n)}\n          footer={<Paginator onPageChange={this.changePages} selectedPage={1} totalCount={totalCount} itemCountPerPage={10} />}\n        >\n          {this.state.content}\n        </Dialog>\n      </div>\n    );\n  }\n}\n\nexport default PaginatorExample;\n"},3129:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=l(n(0)),o=l(n(1096)),r=l(n(1512)),i=l(n(4)),s=l(n(1250));function l(e){return e&&e.__esModule?e:{default:e}}function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function g(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var h=i.default.bind(s.default),f=function(){return function(e,t){for(var n=[],o=0;o<t;o+=1)n.push(a.default.createElement("p",{key:Math.floor(Math.random()*Math.floor(1e5))},e));return n}("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce porttitor ullamcorper nisi, vel tincidunt dui pharetra vel. Morbi eu rutrum nibh, sit amet placerat libero. Integer vel dapibus nibh. Donec tempor mi vitae lorem congue, ut ultrices metus feugiat. Sed non commodo felis. Aliquam eget maximus dui, ut rhoncus augue.",10)},m=function(e){function t(e){var n,o,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),o=this,(n=!(r=d(t).call(this,e))||"object"!==u(r)&&"function"!=typeof r?g(o):r).state={content:a.default.createElement("h2",null,"Welcome!"),currentPage:1},n.changePages=n.changePages.bind(g(n)),n}var n,i,s;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,a.default.Component),n=t,(i=[{key:"changePages",value:function(e){var t="next"===e?this.state.currentPage+1:this.state.currentPage-1;t>=5?this.setState({content:a.default.createElement("h2",null,"No more pages..."),currentPage:5}):t<=1?this.setState({content:a.default.createElement("h2",null,"Welcome!"),currentPage:1}):this.setState({content:f(),currentPage:t})}},{key:"render",value:function(){return a.default.createElement("div",{className:h("paginator-wrapper")},a.default.createElement(o.default,{header:a.default.createElement("h1",null,"Page",this.state.currentPage),footer:a.default.createElement(r.default,{onPageChange:this.changePages})},this.state.content))}}])&&c(n.prototype,i),s&&c(n,s),t}();t.default=m},3130:function(e,t,n){"use strict";n.r(t),t.default="import React from 'react';\nimport Dialog from 'terra-dialog';\n// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions\nimport Paginator from 'terra-paginator/lib/Paginator';\nimport classNames from 'classnames/bind';\nimport styles from './PaginatorExampleCommon.module.scss';\n\nconst cx = classNames.bind(styles);\nconst maxPages = 5;\n\nconst fillArray = (value, len) => {\n  const arr = [];\n  for (let i = 0; i < len; i += 1) {\n    arr.push(<p key={Math.floor(Math.random() * Math.floor(100000))}>{value}</p>);\n  }\n  return arr;\n};\n\nconst buildPage = () => {\n  let fullContent = [];\n  const content = ('Lorem ipsum dolor sit amet, consectetur adipiscing elit. '\n    + 'Fusce porttitor ullamcorper nisi, vel tincidunt dui pharetra vel. '\n    + 'Morbi eu rutrum nibh, sit amet placerat libero. Integer vel dapibus nibh. '\n    + 'Donec tempor mi vitae lorem congue, ut ultrices metus feugiat. Sed non commodo felis. '\n    + 'Aliquam eget maximus dui, ut rhoncus augue.');\n\n  fullContent = fillArray(content, 10);\n\n  return (\n    fullContent\n  );\n};\n\nclass PaginatorNoPagesExample extends React.Component {\n  constructor(props) {\n    super(props);\n\n    this.state = {\n      content: <h2>Welcome!</h2>,\n      currentPage: 1,\n    };\n\n    this.changePages = this.changePages.bind(this);\n  }\n\n  changePages(direction) {\n    const index = direction === 'next' ? this.state.currentPage + 1 : this.state.currentPage - 1;\n\n    if (index >= maxPages) {\n      this.setState({ content: <h2>No more pages...</h2>, currentPage: maxPages });\n    } else if (index <= 1) {\n      this.setState({ content: <h2>Welcome!</h2>, currentPage: 1 });\n    } else {\n      this.setState({ content: buildPage(), currentPage: index });\n    }\n  }\n\n  render() {\n    return (\n      <div className={cx('paginator-wrapper')}>\n        <Dialog\n          header={(\n            <h1>\nPage\n              {this.state.currentPage}\n            </h1>\n)}\n          footer={<Paginator onPageChange={this.changePages} />}\n        >\n          {this.state.content}\n        </Dialog>\n      </div>\n    );\n  }\n}\n\nexport default PaginatorNoPagesExample;\n"},3786:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=g(n(0)),o=g(n(911)),r=g(n(3125)),i=n(1247),s=g(n(3126)),l=g(n(3127)),u=g(n(3128)),c=g(n(3129)),d=g(n(3130));function g(e){return e&&e.__esModule?e:{default:e}}var p=function(){return a.default.createElement(o.default,{packageName:i.name,readme:r.default,srcPath:"https://github.com/cerner/terra-core/tree/master/packages/".concat(i.name),examples:[{title:"Paginator Example",example:a.default.createElement(l.default,null),source:u.default},{title:"Paginator Example Without Pages",example:a.default.createElement(c.default,null),source:d.default}],propsTables:[{componentName:"Paginator",componentSrc:s.default}]})};t.default=p}}]);
//# sourceMappingURL=164-4ae2ef3c86273dfe9808.js.map