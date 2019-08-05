(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{1098:function(e,n,t){"use strict";var i=t(5);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var s=i(t(0)),r=function(e){var n=e.children;return s.default.createElement("div",{style:{height:"300px",width:"100%",position:"relative",border:"1px solid black"}},n)};n.default=r},1116:function(e,n,t){e.exports={placeholder:"InfiniteListDocExampleCommon-module__placeholder___1xFyT"}},1135:function(e){e.exports=JSON.parse('{"_from":"terra-infinite-list@^3.0.0","_id":"terra-infinite-list@3.12.0","_inBundle":false,"_integrity":"sha512-OnfSzrWEigeaaovxKd4DZNffDyCKcBnEt/1iQCRctbGq+2F8Vs+UBfNAYbTa5QnBYFF/Xc9iYGIaLKX1ZxpIAA==","_location":"/terra-infinite-list","_phantomChildren":{},"_requested":{"type":"range","registry":true,"raw":"terra-infinite-list@^3.0.0","name":"terra-infinite-list","escapedName":"terra-infinite-list","rawSpec":"^3.0.0","saveSpec":null,"fetchSpec":"^3.0.0"},"_requiredBy":["/","/terra-dev-site"],"_resolved":"https://registry.npmjs.org/terra-infinite-list/-/terra-infinite-list-3.12.0.tgz","_shasum":"b5d814c2bc151fb897b201e206412e4ad8e7f0d9","_spec":"terra-infinite-list@^3.0.0","_where":"/home/travis/build/cerner/terra-ui","author":{"name":"Cerner Corporation"},"bugs":{"url":"https://github.com/cerner/terra-framework/issues"},"bundleDependencies":false,"dependencies":{"classnames":"^2.2.5","prop-types":"^15.5.8","resize-observer-polyfill":"^1.4.1","terra-list":"^4.0.0","terra-visually-hidden-text":"^2.0.0"},"deprecated":false,"description":"The infinite list component provides virtual dom management and data request callbacks to manage large data sets within a list.","devDependencies":{"terra-doc-template":"^2.2.0"},"gitHead":"f763d8f2d030d85d834554d5c2eca6f2917f2eac","homepage":"https://github.com/cerner/terra-framework#readme","keywords":["Cerner","Terra","terra-infinite-list","InfiniteList","Infinite","List","Virtualization","UI"],"license":"Apache-2.0","main":"lib/index.js","name":"terra-infinite-list","peerDependencies":{"react":"^16.8.5","react-dom":"^16.8.5","react-intl":"^2.8.0"},"repository":{"type":"git","url":"git+https://github.com/cerner/terra-framework.git"},"scripts":{"compile":"babel --root-mode upward src --out-dir lib --copy-files","lint":"npm run lint:js && npm run lint:scss","lint:js":"eslint --ext .js,.jsx . --ignore-path ../../.eslintignore","lint:scss":"stylelint src/**/*.scss","precompile":"rm -rf lib","props-table":"props-table ./src/InfiniteList.jsx --out-dir ./docs/props-table","test":"npm run test:jest && npm run test:wdio","test:jest":"jest --config ../../jestconfig.js","test:wdio":"../../node_modules/.bin/wdio ../../node_modules/terra-dev-site/config/wdio/wdio.conf.js"},"version":"3.12.0"}')},1367:function(e,n,t){"use strict";var i=t(5);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var s=i(t(0)),r=i(t(4)),o=i(t(914)),a=i(t(1368)),d=r.default.bind(a.default),l=function(){return s.default.createElement("div",{className:d("indicator")},s.default.createElement(o.default,{title:"I'm Loading",variant:"light"}))};n.default=l},1368:function(e,n,t){e.exports={indicator:"MyInitialLoadingIndicator-module__indicator___1fmN_"}},1369:function(e,n,t){"use strict";var i=t(5);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var s=i(t(0)),r=i(t(4)),o=i(t(914)),a=i(t(1370)),d=r.default.bind(a.default),l=function(){return s.default.createElement("div",{className:d("indicator")},s.default.createElement(o.default,{title:"I'm Loading More",variant:"light"}))};n.default=l},1370:function(e,n,t){e.exports={indicator:"MyProgressiveLoadingIndicator-module__indicator___1mT7L"}},2951:function(e,n,t){"use strict";t.r(n),n.default="# Terra Infinite List\n\nThe infinite list component provides virtual dom management and data request callbacks to manage large data sets within a list.\nInfiniteList is a controlled HOC built upon the `terra-list` component in order to allow for list style and selection patterns.\n\n## Getting Started\n\n- Install with [npmjs](https://www.npmjs.com):\n  - `npm install terra-infinite-list`\n\n\x3c!-- AUTO-GENERATED-CONTENT:START Peer Dependencies --\x3e\n## Peer Dependencies\n\n<details>\n<summary>View information on this component's peer dependencies.</summary>\n\nThis component requires the following peer dependencies be installed in your app for the component to properly function.\n\n| Peer Dependency | Version |\n|-|-|\n| react | ^16.8.5 |\n| react-dom | ^16.8.5 |\n| react-intl | ^2.8.0 |\n\n\n</details>\n\x3c!-- AUTO-GENERATED-CONTENT:END --\x3e\n\n## Component Features\n* [Cross-Browser Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#cross-browser-support)\n* [Responsive Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#responsive-support)\n* [Mobile Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#mobile-support)\n\n## List Item Selection\n\nManagement of list selection is provided by the HOC implementing the InfiniteList. For an example of list item selection you can refer to List's documentation:\n\n* [Single Select List](https://engineering.cerner.com/terra-ui/#/components/terra-list/list/guides/single-select-list)\n* [Multi Select List](https://engineering.cerner.com/terra-ui/#/components/terra-list/list/guides/multi-select-list)\n"},2952:function(e,n,t){"use strict";t.r(n),n.default="import React from 'react';\nimport PropTypes from 'prop-types';\nimport classNames from 'classnames/bind';\nimport { injectIntl, intlShape } from 'react-intl';\nimport ResizeObserver from 'resize-observer-polyfill';\nimport List from 'terra-list';\nimport VisuallyHiddenText from 'terra-visually-hidden-text';\nimport InfiniteUtils from './_InfiniteUtils';\nimport styles from './InfiniteList.module.scss';\n\nconst cx = classNames.bind(styles);\n\nconst propTypes = {\n  /**\n   * The child list items, of type InfiniteList Item, to be placed within the infinite list.\n   * For further documentation of InfiniteList Item see terra-list's ListItem.\n   */\n  children: PropTypes.node,\n  /**\n   * Whether or not the list's child items should have a border color applied.\n   * One of `'none'`, `'standard'`, `'bottom-only'`.\n   */\n  dividerStyle: PropTypes.oneOf(['none', 'standard', 'bottom-only']),\n  /**\n   * An indicator to be displayed when no children are yet present.\n   */\n  initialLoadingIndicator: PropTypes.element,\n  /**\n   * @private\n   * Internationalization object with translation APIs. Provided by `injectIntl`.\n   */\n  intl: intlShape,\n  /**\n   * Determines whether or not the loading indicator is visible and if callbacks are triggered.\n   */\n  isFinishedLoading: PropTypes.bool,\n  /**\n   * Callback trigger when new list items are requested.\n   */\n  onRequestItems: PropTypes.func,\n  /**\n   * The padding styling to apply to the child list item content.\n   * One of `'none'`, `'standard'`, `'compact'`.\n   */\n  paddingStyle: PropTypes.oneOf(['none', 'standard', 'compact']),\n  /**\n   * An indicator to be displayed at the end of the current loaded children.\n   */\n  progressiveLoadingIndicator: PropTypes.element,\n  /**\n   * A message to be provided to screen readers as new items are progressively loaded in\n   */\n  progressiveLoadingMessage: PropTypes.string,\n  /**\n   * Accessibility role of the list, defaults to 'none'. If creating a list with selectable items, pass 'listbox'.\n   */\n  role: PropTypes.string,\n};\n\nconst defaultProps = {\n  children: [],\n  dividerStyle: 'none',\n  isFinishedLoading: false,\n  paddingStyle: 'none',\n  progressiveLoadingMessage: undefined,\n  role: 'none',\n};\n\n/**\n * Returns a ListItem sized according to the provided height to use as a spacer.\n * @param {number} height - Height to set on the ListItem.\n * @param {number} index - Index to use as part of the spacers key.\n */\n/* eslint-disable react/forbid-dom-props */\nconst createSpacer = (height, index) => (\n  <div\n    className={cx(['spacer'])}\n    style={{ height }}\n    key={`infinite-spacer-${index}`}\n  />\n);\n/* eslint-enable react/forbid-dom-props */\n\nclass InfiniteList extends React.Component {\n  constructor(props) {\n    super(props);\n\n    this.update = this.update.bind(this);\n    this.enableListeners = this.enableListeners.bind(this);\n    this.disableListeners = this.disableListeners.bind(this);\n    this.setContentNode = this.setContentNode.bind(this);\n    this.updateItemCache = this.updateItemCache.bind(this);\n    this.initializeItemCache = this.initializeItemCache.bind(this);\n    this.updateScrollGroups = this.updateScrollGroups.bind(this);\n    this.handleRenderCompletion = this.handleRenderCompletion.bind(this);\n    this.handleResize = this.resizeDebounce(this.handleResize.bind(this));\n    this.resetTimeout = this.resetTimeout.bind(this);\n    this.wrapChild = this.wrapChild.bind(this);\n    this.ariaLiveStatus = '';\n    this.updateAriaLiveLoadingStatus = this.updateAriaLiveLoadingStatus.bind(this);\n\n    this.initializeItemCache(props);\n  }\n\n  componentDidMount() {\n    if (!this.listenersAdded) {\n      this.enableListeners();\n    }\n    this.updateScrollGroups();\n    this.handleRenderCompletion();\n  }\n\n  shouldComponentUpdate(nextProps) {\n    const newChildCount = React.Children.count(nextProps.children);\n    if (newChildCount > this.childCount) {\n      this.lastChildIndex = this.childCount;\n      this.loadingIndex += 1;\n      this.updateItemCache(nextProps);\n    } else if (newChildCount < this.childCount) {\n      this.initializeItemCache(nextProps);\n    } else {\n      this.childrenArray = React.Children.toArray(nextProps.children);\n    }\n\n    return true;\n  }\n\n  componentDidUpdate() {\n    if (!this.listenersAdded) {\n      this.enableListeners();\n    }\n    this.handleRenderCompletion();\n  }\n\n  componentWillUnmount() {\n    this.disableListeners();\n  }\n\n  /**\n   * Sets the html node of contentNode and if it was previously undefined trigger updateScrollGroups.\n   * @param {node} node - Html node of the List.\n   */\n  setContentNode(node) {\n    const wasUndefined = !this.contentNode;\n    this.contentNode = node;\n\n    if (this.contentNode && wasUndefined) {\n      this.updateScrollGroups();\n    }\n  }\n\n  /**\n   * If a request for items has not been made and/or updates are not pending trigger onRequestItems.\n   */\n  triggerItemRequest() {\n    if (!this.props.isFinishedLoading && !this.hasRequestedItems && !this.isRenderingNew && this.props.onRequestItems) {\n      this.hasRequestedItems = true;\n      this.props.onRequestItems();\n      this.updateAriaLiveLoadingStatus();\n    }\n  }\n\n  updateAriaLiveLoadingStatus() {\n    this.ariaLiveStatus = this.props.progressiveLoadingMessage ? this.props.progressiveLoadingMessage : this.props.intl.formatMessage({ id: 'Terra.InfiniteList.loading' });\n    // Clears status so aria live announces correctly next time more items are loaded\n    setTimeout(() => {\n      this.ariaLiveStatus = '';\n    }, 1000);\n  }\n\n  /**\n   * Following a render reset newChildren values. If new items were render trigger an update calculation.\n   */\n  handleRenderCompletion() {\n    this.renderNewChildren = false;\n    this.preventUpdate = false;\n    this.lastChildIndex = this.childCount;\n    if (this.isRenderingNew) {\n      this.isRenderingNew = false;\n      this.update(null, false, true); // Prevent from triggering an item request to avoid infinite loop of loading.\n    } else if (this.contentNode && InfiniteUtils.shouldTriggerItemRequest(InfiniteUtils.getContentData(this.contentNode))) {\n      this.triggerItemRequest();\n    }\n  }\n\n  /**\n   * Cache the value for the child count and convert the children props to an array.\n   * @param {object} props - React element props.\n   */\n  updateItemCache(props) {\n    this.childCount = React.Children.count(props.children);\n    this.childrenArray = React.Children.toArray(props.children);\n    this.hasRequestedItems = false;\n    this.renderNewChildren = true;\n  }\n\n  /**\n   * Set the initial state of the virtualization values for the list.\n   * @param {object} props - React element props.\n   */\n  initializeItemCache(props) {\n    this.loadingIndex = 0;\n    this.lastChildIndex = -1;\n    this.itemsByIndex = [];\n    this.scrollGroups = [];\n    this.boundary = {\n      topBoundryIndex: -1,\n      hiddenTopHeight: -1,\n      bottomBoundryIndex: -1,\n      hiddenBottomHeight: -1,\n    };\n    this.updateItemCache(props);\n  }\n\n  /**\n   * Adds a resize observer and scroll event listener to the contentNode.\n   */\n  enableListeners() {\n    if (!this.contentNode) {\n      return;\n    }\n    this.resizeObserver = new ResizeObserver((entries) => {\n      this.handleResize(entries[0].contentRect);\n    });\n    this.resizeObserver.observe(this.contentNode);\n    this.contentNode.addEventListener('scroll', this.update);\n    this.listenersAdded = true;\n  }\n\n  /**\n   * Removes the resize observer and scroll event listener from the contentNode.\n   */\n  disableListeners() {\n    if (!this.contentNode) {\n      return;\n    }\n    this.resizeObserver.disconnect(this.contentNode);\n    this.contentNode.removeEventListener('scroll', this.update);\n    this.listenersAdded = false;\n  }\n\n  /**\n   * Reset the timeout on this.timer.\n   * @param {function} fn - The handleResize function.\n   * @param {object} args - Arguments passed to the handleResize function.\n   * @param {context} context - Javascript context.\n   * @param {double} now - DOMHighResTimeStamp.\n   */\n  resetTimeout(fn, args, context, now) {\n    clearTimeout(this.timer);\n    this.timer = setTimeout(() => {\n      this.last = now;\n      this.disableScroll = false;\n      fn.apply(context, args);\n    }, 250);\n  }\n\n  /**\n   * Debounce the size event and prevent updates from scrolling.\n   * @param {function} fn - The handleResize function.\n   */\n  resizeDebounce(fn) {\n    return (...args) => {\n      const context = this;\n      const now = performance.now();\n      if (this.last && now < this.last + 250) {\n        this.resetTimeout(fn, args, context, now);\n      } else {\n        this.last = now;\n        this.disableScroll = true;\n        this.resetTimeout(fn, args, context, now);\n      }\n    };\n  }\n\n  /**\n   * Triggers a height adjustment if the height or scroll height changes.\n   */\n  handleResize() {\n    if (this.scrollHeight !== this.contentNode.scrollHeight || this.clientHeight !== this.contentNode.clientHeight) {\n      this.adjustHeight();\n    }\n  }\n\n  /**\n   * Calculates the visible scroll items and if the hidden items have changed force an update.\n   * @param {object} event - Browser DOM event.\n   * @param {bool} ensureUpdate - Regardless of calculation ensure a forceUpdate occurs.\n   * @param {bool} preventRequest - Should triggerItemRequest be prevented.\n   */\n  update(event, ensureUpdate, preventRequest) {\n    if (!this.contentNode || this.disableScroll || this.preventUpdate) {\n      return;\n    }\n\n    const contentData = InfiniteUtils.getContentData(this.contentNode);\n    const hiddenItems = InfiniteUtils.getHiddenItems(this.scrollGroups, contentData, this.boundary.topBoundryIndex, this.boundary.bottomBoundryIndex);\n    this.scrollHeight = contentData.scrollHeight;\n    this.clientHeight = contentData.clientHeight;\n\n    if (ensureUpdate || hiddenItems.topHiddenItem.index !== this.boundary.topBoundryIndex || hiddenItems.bottomHiddenItem.index !== this.boundary.bottomBoundryIndex) {\n      this.preventUpdate = true;\n      this.boundary = {\n        topBoundryIndex: hiddenItems.topHiddenItem.index,\n        hiddenTopHeight: hiddenItems.topHiddenItem.height,\n        bottomBoundryIndex: hiddenItems.bottomHiddenItem.index,\n        hiddenBottomHeight: hiddenItems.bottomHiddenItem.height,\n      };\n      this.forceUpdate();\n    }\n\n    if (!preventRequest && InfiniteUtils.shouldTriggerItemRequest(contentData)) {\n      this.triggerItemRequest();\n    }\n  }\n\n  /**\n   * Groups scroll items by height to reduce the number of refreshs that occur on scroll.\n   */\n  updateScrollGroups() {\n    if (!this.contentNode) {\n      return;\n    }\n\n    let groupHeight = 0;\n    let groupIndex = 0;\n    let captureOffsetTop = true;\n    const maxGroupHeight = 1 * this.contentNode.clientHeight;\n    this.scrollGroups = [];\n    for (let i = 0; i < this.itemsByIndex.length; i += 1) {\n      const item = this.itemsByIndex[i];\n      if (this.scrollGroups[groupIndex] && item.height >= maxGroupHeight) {\n        groupHeight = 0;\n        groupIndex += 1;\n        captureOffsetTop = true;\n      }\n\n      groupHeight += item.height;\n      this.scrollGroups[groupIndex] = this.scrollGroups[groupIndex] || { items: [] };\n      this.scrollGroups[groupIndex].items.push(i);\n      this.scrollGroups[groupIndex].height = groupHeight;\n      this.itemsByIndex[i].groupIndex = groupIndex;\n      if (captureOffsetTop) {\n        this.scrollGroups[groupIndex].offsetTop = this.itemsByIndex[i].offsetTop;\n        captureOffsetTop = false;\n      }\n\n      if (groupHeight >= maxGroupHeight) {\n        groupHeight = 0;\n        groupIndex += 1;\n        captureOffsetTop = true;\n      }\n    }\n  }\n\n  /**\n   * Checks the boundingClientRect for the scroll item's height and offsetTop then caches it.\n   * @param {node} node - The child node for the scroll item.\n   * @param {number} index - Index of the child.\n   */\n  updateHeight(node, index) {\n    if (node) {\n      this.itemsByIndex[index] = this.itemsByIndex[index] || {};\n      let updatedHeight = false;\n      const newHeight = node.getBoundingClientRect().height;\n      if (!this.itemsByIndex[index].height || Math.abs(this.itemsByIndex[index].height - newHeight) > 1) {\n        this.itemsByIndex[index].height = newHeight;\n        updatedHeight = true;\n      }\n      if (!this.itemsByIndex[index].offsetTop || Math.abs(this.itemsByIndex[index].offsetTop - node.offsetTop) > 1) {\n        this.itemsByIndex[index].offsetTop = node.offsetTop;\n      }\n      if (this.itemsByIndex.length === this.childCount) {\n        if (!this.scrollGroups.length) {\n          this.updateScrollGroups();\n        } else if (updatedHeight) {\n          this.adjustHeight();\n        }\n      }\n    }\n  }\n\n  /**\n   * Detects which scroll items are on the dom and reads the heights to see if resize has changed the boundClientRect.\n   */\n  adjustHeight() {\n    if (this.contentNode) {\n      this.itemsByIndex.forEach((item, itemIndex) => {\n        const scrollItemNode = this.contentNode.querySelector(`[data-infinite-list-index=\"${itemIndex}\"]`);\n        if (scrollItemNode) {\n          const newHeight = scrollItemNode.getBoundingClientRect().height;\n          if (!this.itemsByIndex[itemIndex].height || Math.abs(newHeight - this.itemsByIndex[itemIndex].height) > 1) {\n            this.itemsByIndex[itemIndex].height = newHeight;\n          }\n          if (!this.itemsByIndex[itemIndex].offsetTop || Math.abs(this.itemsByIndex[itemIndex].offsetTop - scrollItemNode.offsetTop) > 1) {\n            this.itemsByIndex[itemIndex].offsetTop = scrollItemNode.offsetTop;\n          }\n          this.adjustTrailingItems(itemIndex);\n        }\n      });\n\n      // needs to update offset tops of every other save\n      this.updateScrollGroups();\n      this.boundary = {\n        topBoundryIndex: -1,\n        hiddenTopHeight: -1,\n        bottomBoundryIndex: -1,\n        hiddenBottomHeight: -1,\n      };\n      this.update(null, true);\n    }\n  }\n\n  /**\n   * Updates the offsetTop of scroll items following the element that adjusted it's height.\n   * @param {number} index - Index of the scroll item that had adjusted it's height.\n   */\n  adjustTrailingItems(index) {\n    let lastTop = this.itemsByIndex[index].offsetTop;\n    let lastHeight = this.itemsByIndex[index].height;\n    for (let i = index + 1; i < this.itemsByIndex.length; i += 1) {\n      lastTop += lastHeight;\n      lastHeight = this.itemsByIndex[i].height;\n      this.itemsByIndex[i].offsetTop = lastTop;\n    }\n  }\n\n  /**\n   * Clones the child element with new props for selection, refCallback,  and data attributes.\n   * @param {element} child - React child element.\n   * @param {number} index - Index of the child element.\n   */\n  wrapChild(child, index) {\n    const wrappedCallback = (node) => {\n      this.updateHeight(node, index);\n      if (child.props.refCallback) {\n        child.props.refCallback(node);\n      }\n    };\n    const newProps = {\n      refCallback: wrappedCallback,\n      'data-infinite-list-index': index,\n    };\n    return React.cloneElement(child, newProps);\n  }\n\n  render() {\n    const {\n      children,\n      dividerStyle,\n      initialLoadingIndicator,\n      isFinishedLoading,\n      onRequestItems,\n      paddingStyle,\n      progressiveLoadingIndicator,\n      role,\n      ...customProps\n    } = this.props;\n\n    const topSpacer = createSpacer(`${this.boundary.hiddenTopHeight > 0 ? this.boundary.hiddenTopHeight : 0}px`, 0);\n    const bottomSpacer = createSpacer(`${this.boundary.hiddenBottomHeight > 0 ? this.boundary.hiddenBottomHeight : 0}px`, 1);\n\n    let loadingSpinner;\n    let initialSpinner;\n    if (!isFinishedLoading) {\n      if (this.childCount > 0) {\n        loadingSpinner = (\n          <div\n            className={cx('spacer')}\n            key={`infinite-spinner-row-${this.loadingIndex}`}\n          >\n            {progressiveLoadingIndicator}\n          </div>\n        );\n      } else {\n        /* eslint-disable react/forbid-dom-props */\n        initialSpinner = (\n          <div\n            className={cx('spacer')}\n            key=\"infinite-spinner-full\"\n            style={{ height: '100%' }}\n          >\n            {initialLoadingIndicator}\n          </div>\n        );\n        /* eslint-enable react/forbid-dom-props */\n      }\n    }\n\n    const attrSpread = { dividerStyle, paddingStyle };\n    if (role && role.length > 0 && role !== 'none') {\n      attrSpread.role = role;\n    }\n\n    let newChildren;\n    let visibleChildren;\n    if (!initialSpinner) {\n      let upperChildIndex = this.lastChildIndex;\n      if ((!this.scrollGroups.length && this.lastChildIndex <= 0) || !this.renderNewChildren) {\n        upperChildIndex = this.childCount;\n      } else {\n        newChildren = (\n          <List {...attrSpread} className={cx(['infinite-hidden'])}>\n            {InfiniteUtils.getNewChildren(this.lastChildIndex, this.childrenArray, this.wrapChild)}\n          </List>\n        );\n        this.isRenderingNew = true;\n      }\n      visibleChildren = InfiniteUtils.getVisibleChildren(this.scrollGroups, this.childrenArray, this.boundary.topBoundryIndex, this.boundary.bottomBoundryIndex, this.wrapChild, upperChildIndex);\n    }\n\n    return (\n      <React.Fragment>\n        <div {...customProps} className={cx(['infinite-list', customProps.className])} ref={this.setContentNode}>\n          {initialSpinner}\n          {topSpacer}\n          <List {...attrSpread}>\n            {visibleChildren}\n          </List>\n          {bottomSpacer}\n          {loadingSpinner}\n        </div>\n        {newChildren}\n        <VisuallyHiddenText aria-atomic=\"true\" aria-live=\"assertive\" text={this.ariaLiveStatus} />\n      </React.Fragment>\n    );\n  }\n}\n\nInfiniteList.propTypes = propTypes;\nInfiniteList.defaultProps = defaultProps;\n\nexport default injectIntl(InfiniteList);\n"},2953:function(e,n,t){"use strict";t.r(n),n.default="import React from 'react';\n/* eslint-disable import/no-unresolved, import/extensions */\nimport InfiniteList from 'terra-infinite-list/lib/index';\n/* eslint-enable import/no-unresolved, import/extensions */\n\nimport MyInitialLoadingIndicator from '../common/MyInitialLoadingIndicator';\nimport MyExampleContainer from '../common/MyExampleContainer';\n\nconst InitialLoadingExample = () => (\n  <MyExampleContainer>\n    <InfiniteList\n      dividerStyle=\"standard\"\n      initialLoadingIndicator={<MyInitialLoadingIndicator />}\n    />\n  </MyExampleContainer>\n);\n\nexport default InitialLoadingExample;\n"},2954:function(e,n,t){"use strict";t.r(n),n.default="import React from 'react';\n/* eslint-disable import/no-unresolved, import/extensions */\nimport InfiniteList, { Item } from 'terra-infinite-list/lib/index';\nimport Placeholder from 'terra-doc-template/lib/Placeholder';\nimport classNames from 'classnames/bind';\n/* eslint-enable import/no-unresolved, import/extensions */\n\nimport MyProgressiveLoadingIndicator from '../common/MyProgressiveLoadingIndicator';\nimport MyExampleContainer from '../common/MyExampleContainer';\nimport styles from './InfiniteListDocExampleCommon.module.scss';\n\nconst cx = classNames.bind(styles);\n\nconst ProgressiveLoadingExample = () => (\n  <MyExampleContainer>\n    <InfiniteList\n      dividerStyle=\"standard\"\n      progressiveLoadingIndicator={<MyProgressiveLoadingIndicator />}\n    >\n      <Item key=\"item-1\">\n        <Placeholder title=\"Item 1\" className={cx('placeholder')} />\n      </Item>\n    </InfiniteList>\n  </MyExampleContainer>\n);\n\nexport default ProgressiveLoadingExample;\n"},2955:function(e,n,t){"use strict";t.r(n),n.default="import React from 'react';\n/* eslint-disable import/no-unresolved, import/extensions */\nimport InfiniteList, { Item } from 'terra-infinite-list/lib/index';\nimport Placeholder from 'terra-doc-template/lib/Placeholder';\nimport classNames from 'classnames/bind';\n/* eslint-enable import/no-unresolved, import/extensions */\n\nimport mockData from './mock-data/virtualizedData';\nimport MyExampleContainer from '../common/MyExampleContainer';\nimport styles from './InfiniteListDocExampleCommon.module.scss';\n\nconst cx = classNames.bind(styles);\n\nconst createListItem = itemData => (\n  <Item key={itemData.key}>\n    <Placeholder title={itemData.title} className={cx('placeholder')} />\n  </Item>\n);\n\nconst createItems = data => data.map(item => createListItem(item));\n\nconst VirtualizedExample = () => (\n  <MyExampleContainer>\n    <InfiniteList\n      dividerStyle=\"standard\"\n      isFinishedLoading\n    >\n      {createItems(mockData)}\n    </InfiniteList>\n  </MyExampleContainer>\n);\n\nexport default VirtualizedExample;\n"},2956:function(e,n,t){"use strict";var i=t(5);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var s=i(t(0)),r=i(t(343)),o=i(t(1367)),a=i(t(1098)),d=function(){return s.default.createElement(a.default,null,s.default.createElement(r.default,{dividerStyle:"standard",initialLoadingIndicator:s.default.createElement(o.default,null)}))};n.default=d},2957:function(e,n,t){"use strict";var i=t(32),s=t(5);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=s(t(0)),o=i(t(343)),a=s(t(914)),d=s(t(4)),l=s(t(1369)),c=s(t(1098)),h=s(t(1116)),p=d.default.bind(h.default),u=function(){return r.default.createElement(c.default,null,r.default.createElement(o.default,{dividerStyle:"standard",progressiveLoadingIndicator:r.default.createElement(l.default,null)},r.default.createElement(o.Item,{key:"item-1"},r.default.createElement(a.default,{title:"Item 1",className:p("placeholder")}))))};n.default=u},2958:function(e,n,t){"use strict";var i=t(32),s=t(5);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=s(t(0)),o=i(t(343)),a=s(t(914)),d=s(t(4)),l=s(t(2959)),c=s(t(1098)),h=s(t(1116)),p=d.default.bind(h.default),u=function(e){return e.map(function(e){return n=e,r.default.createElement(o.Item,{key:n.key},r.default.createElement(a.default,{title:n.title,className:p("placeholder")}));var n})},m=function(){return r.default.createElement(c.default,null,r.default.createElement(o.default,{dividerStyle:"standard",isFinishedLoading:!0},u(l.default)))};n.default=m},2959:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=function(){for(var e=[],n=0;n<100;n+=1)e.push({title:"Item ".concat(n),key:"unique-".concat(n)});return e}();n.default=i},3742:function(e,n,t){"use strict";var i=t(5);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var s=i(t(0)),r=i(t(911)),o=t(1135),a=i(t(2951)),d=i(t(2952)),l=i(t(2953)),c=i(t(2954)),h=i(t(2955)),p=i(t(2956)),u=i(t(2957)),m=i(t(2958)),f=function(){return s.default.createElement(r.default,{packageName:o.name,readme:a.default,srcPath:"https://github.com/cerner/terra-framework/tree/master/packages/".concat(o.name),examples:[{title:"Example Initial Loading Indicator",example:s.default.createElement(p.default,null),source:l.default},{title:"Example Progressive Loading Indicator",example:s.default.createElement(u.default,null),source:c.default},{title:"Example Virtualized List",example:s.default.createElement(m.default,null),source:h.default}],propsTables:[{componentSrc:d.default}]})};n.default=f},914:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=a(t(0)),s=a(t(2)),r=a(t(4)),o=a(t(916));function a(e){return e&&e.__esModule?e:{default:e}}function d(){return(d=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e}).apply(this,arguments)}function l(e,n){if(null==e)return{};var t,i,s=function(e,n){if(null==e)return{};var t,i,s={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var c=r.default.bind(o.default),h={variant:s.default.oneOf(["light","dark"]),title:s.default.string},p=function(e){var n=e.variant,t=e.title,s=l(e,["variant","title"]),r=c(["placeholder",s.className]),o=c(["inner","is-".concat(n)]);return i.default.createElement("div",d({},s,{className:r}),i.default.createElement("div",{className:o},i.default.createElement("h2",null,t)))};p.propTypes=h,p.defaultProps={variant:"dark",title:""};var u=p;n.default=u},916:function(e,n,t){e.exports={placeholder:"Placeholder-module__placeholder___37I0I",inner:"Placeholder-module__inner___2DX7N","is-light":"Placeholder-module__is-light___3__YD","is-dark":"Placeholder-module__is-dark___9wQwQ"}}}]);
//# sourceMappingURL=85-dd467468f8f94ba30d43.js.map