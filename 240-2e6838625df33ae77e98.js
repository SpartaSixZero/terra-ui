(window.webpackJsonp=window.webpackJsonp||[]).push([[240,376,377,378,379,380,381,382,383,384,385,386,387,388,389,390,391,392,393,394,395,396,397,398,399,400,401,402,403,404,405,406,407,408,409,410,411,412,413,414,415,416,417,418,419,420,421,422,423,424,425,426,427,428,429,430,431,432,433,434,435,436,437,438,439],{1747:function(n,e,d){"use strict";d.r(e),e.default="ChangeLog\n=========\n\nUnreleased\n----------\n\n2.24.0 - (July 30, 2019)\n------------------\n### Changed\n* Minor dependency version bump\n\n2.23.0 - (July 24, 2019)\n------------------\n### Added\n* Added documentation that maximize/minimize buttons will not be shown with the back button\n\n2.22.0 - (July 17, 2019)\n------------------\n### Changed\n* Revert components updated to use `injectIntl` to interface with `react-intl's` `intl` context.\n\n2.21.0 - (July 17, 2019)\n------------------\n### Changed\n* Components updated to use `injectIntl` to interface with `react-intl's` `intl` context.\n\n2.20.0 - (July 16, 2019)\n------------------\n### Added\n* Added documentation on required peerDependencies\n\n2.19.0  - (July 11, 2019)\n------------------\n### Changed\n* Updated Docs around the requirement of terra-base and aggregate-translations.\n\n2.18.0 - (July 9, 2019)\n------------------\n### Changed\n* Update tests to use `Terra.describeViewports` for setting viewports\n\n2.17.0 - (June 28, 2019)\n------------------\n### Added\n* Added `--terra-action-header-back-background-image` variable in ActionHeader.module.scss\n* Added `--terra-action-header-close-background-image` variable in ActionHeader.module.scss\n* Added `--terra-action-header-maximize-background-image` variable in ActionHeader.module.scss\n* Added `--terra-action-header-minimize-background-image` variable in ActionHeader.module.scss\n* Added `--terra-action-header-previous-background-image` variable in ActionHeader.module.scss\n* Added `--terra-action-header-next-background-image` variable in ActionHeader.module.scss\n\n### Removed\n* Removed `--terra-action-header-back-background` variable in ActionHeader.module.scss\n* Removed `--terra-action-header-close-background` variable in ActionHeader.module.scss\n* Removed `--terra-action-header-maximize-background` variable in ActionHeader.module.scss\n* Removed `--terra-action-header-minimize-background` variable in ActionHeader.module.scss\n* Removed `--terra-action-header-previous-background` variable in ActionHeader.module.scss\n* Removed `--terra-action-header-next-background` variable in ActionHeader.module.scss\n\n2.16.0 - (June 18, 2019)\n------------------\n### Changed\n* Minor dependency bump\n\n2.15.1 - (June 12, 2019)\n------------------\n### Changed\n* Removed all inline styles from Dev-site components and implemented the same styles using external css.\n\n### Changed\n* Reverted change to adjust header-icon top styling\n\n2.15.0 - (June 11, 2019)\n------------------\n### Removed\n* Removed node_modules from .npmignore\n\n### Changed\n* Updated misleading `children` documentation\n* Made required updates to consume terra-toolkit v5 and terra-dev-site v5\n* Adjusted header-icon top styling\n\n2.14.0 - (May 22, 2019)\n------------------\n### Changed\n* Now renders `<ActionHeader />` as a div instead of a header element to avoid duplicate banner landmarks in the DOM\n\n2.13.0 - (May 1, 2019)\n------------------\n### Changed\n* Minor dependency version bump\n\n### Fixed\n* Removed 100% heights from container of action header\n\n2.12.0 - (April 16, 2019)\n------------------\n### Changed\n* Minor dependency version bump\n\n2.11.0 - (April 9, 2019)\n------------------\n### Changed\n* Minor dependency version bump\n\n2.10.0 - (April 2, 2019)\n------------------\n### Changed\n* Minor dependency version bump\n\n2.9.0 - (March 26, 2019)\n------------------\n### Changed\n* Update react/react-dom peer-dependency to latest stable minor release\n\n### Removed\n* Removed peer dependency on terra-base\n* Removed baseStyles import from terra-base\n\n2.8.0 - (March 21, 2019)\n------------------\n### Changed\n* Update Jest tests to use terra-enzyme-intl\n\n2.7.0 - (February 26, 2019)\n------------------\n### Changed\n* Minor dependency version bump\n\n### Added\n* Added en-AU translations\n\n2.6.0 - (February 12, 2019)\n------------------\n### Changed\n* Minor dependency version bump\n* Remove the collapsible menu view from the example\n\n2.5.0 - (February 5, 2019)\n------------------\n### Changed\n* Minor dependency version bump\n\n2.4.0 - (January 27, 2019)\n------------------\n### Changed\n* Minor dependency version bump\n\n2.3.0 - (January 26, 2019)\n------------------\n### Changed\n* Minor dependency version bump\n\n2.2.0 - (January 22, 2019)\n------------------\n### Changed\n* Minor dependency version bump\n\n2.1.0 - (January 22, 2019)\n------------------\n### Changed\n* Minor dependency version bump\n\n2.0.0 - (January 8, 2019)\n------------------\n### Changed\n* Updated theme variables\n\n1.33.0 - (January 2, 2019)\n------------------\n### Changed\n* Minor dependency version bump\n\n1.32.1 - (November 20, 2018)\n------------------\n### Changed\n* Patch dependency version bump\n\n1.32.0 - (November 19, 2018)\n------------------\n### Changed\n* Minor dependency version bump\n\n1.31.0 - (November 14, 2018)\n------------------\n### Changed\n* Minor dependency version bump\n\n1.30.0 - (November 13, 2018)\n------------------\n### Changed\n* Minor dependency version bump\n\n1.29.0 - (November 9, 2018)\n------------------\n### Changed\n* Minor dependency version bump\n\n1.28.0 - (October 30, 2018)\n------------------\n### Changed\n* Update mixin import to be more explicit\n\n1.27.0 - (October 24, 2018)\n------------------\n### Changed\n* Minor dependency version bump\n\n### Fixed\n* Fixed text wrapping to break on whole word instead of part of the word.\n\n1.26.0 - (October 16, 2018)\n------------------\n### Changed\n* Minor dependency version bump\n\n1.25.0 - (October 8, 2018)\n------------------\n### Changed\n* Minor dependency version bump\n\n1.24.0 - (October 2, 2018)\n------------------\n### Changed\n* Minor dependency version bump\n\n1.23.0 - (September 25, 2018)\n------------------\n### Changed\n* Minor dependency version bump\n\n1.22.1 - (September 6, 2018)\n------------------\n### Changed\n* Patch dependency version bump\n\n1.22.0 - (September 5, 2018)\n------------------\n### Changed\n* Bumped minimum react peerDependency version from ^16.2.0 to ^16.4.2\n* Bumped minimum react-dom peerDependency version from ^16.2.0 to ^16.4.2\n\n1.21.0 - (September 4, 2018)\n------------------\n### Changed\n* Minor dependency version bump\n\n1.20.0 - (August 30, 2018)\n------------------\n### Changed\n* Minor dependency version bump\n\n1.19.0 - (August 29, 2018)\n------------------\n### Changed\n* Minor dependency version bump\n\n1.18.0 - (August 21, 2018)\n------------------\n### Changed\n* Minor dependency version bump\n\n1.17.0 - (August 8, 2018)\n------------------\n### Changed\n* Updated component internationalization error message\n\n1.16.0 - (August 1, 2018)\n------------------\n### Changed\n* Minor dependency version bump\n* Disable the next-previous button group button if its associating prop is not set.\n\n1.15.0 - (July 25, 2018)\n------------------\n### Added\n* Add sv and sv-SE translations\n\n1.14.0 - (July 19, 2018)\n------------------\n### Changed\n* Add .module extension to SCSS file(s)\n\n1.13.0 - (July 17, 2018)\n------------------\n### Changed\n* Minor dependency version bump\n* Formatting changes per eslint v4 update\n\n1.12.0 - (July 10, 2018)\n------------------\n### Changed\n* Minor dependency version bump\n\n1.11.0 - (July 3, 2018)\n------------------\n### Changed\n* Minor dependency version bump\n\n1.10.0 - (June 28, 2018)\n------------------\n### Changed\n* Minor dependency version bump\n\n### Added\n* Added change log to the documentation on terra-dev-site\n\n1.9.0 - (June 22, 2018)\n------------------\n### Changed\n* Moved terra-base from dependency to peerDependency\n\n1.8.0 - (June 19, 2018)\n------------------\n### Changed\n* Minor dependency version bump\n\n1.7.0 - (June 12, 2018)\n------------------\n### Changed\n* Updated \"test:jest\" script to work on windows.\n\n1.6.0 - (May 30, 2018)\n------------------\n### Changed\n* Updated structure to match terra-dev-site 1.0 and moved doc examples internal.\n\n1.5.0 - (May 23, 2018)\n------------------\n### Changed\n* Minor dependency version bump\n\n1.4.0 - (May 16, 2018)\n------------------\n### Changed\n* Minor dependency version bump\n\n### Fixed\n* Alignment bug with missing start content and title, when using an end aligned item.\n\n1.3.0 - (May 9, 2018)\n------------------\n### Changed\n* Minor dependency version bump\n\n1.2.0 - (May 2, 2018)\n------------------\n### Changed\n* Minor dependency version bump\n\n1.1.0 - (April 20, 2018)\n------------------\n### Changed\n* Minor dependency version bump\n\n1.0.0 - (April 15, 2018)\n------------------\n* Initial stable release\n"},3569:function(n,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(d(0)),r=i(d(911)),o=i(d(1747));function i(n){return n&&n.__esModule?n:{default:n}}var t=function(){return a.default.createElement(r.default,{packageName:"terra-action-header",srcPath:"https://github.com/cerner/terra-core/tree/master/packages/terra-action-header",readme:o.default})};e.default=t},912:function(n,e){}}]);
//# sourceMappingURL=240-2e6838625df33ae77e98.js.map