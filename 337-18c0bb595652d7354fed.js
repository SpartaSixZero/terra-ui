(window.webpackJsonp=window.webpackJsonp||[]).push([[337,376,377,378,379,380,381,382,383,384,385,386,387,388,389,390,391,392,393,394,395,396,397,398,399,400,401,402,403,404,405,406,407,408,409,410,411,412,413,414,415,416,417,418,419,420,421,422,423,424,425,426,427,428,429,430,431,432,433,434,435,436,437,438,439],{3321:function(n,e,a){"use strict";a.r(e),e.default="Changelog\n=========\n\nUnreleased\n----------\n\n3.11.0 - (July 30, 2019)\n------------------\n### Removed\n* Removed DEPENDENCIES.md file\n\n3.10.0 - (July 16, 2019)\n------------------\n### Added\n* Added documentation on required peerDependencies\n\n3.9.0 - (July 10, 2019)\n------------------\n### Changed\n* Minor dependency version bump\n\n3.8.0 - (July 2, 2019)\n------------------\n### Changed\n* Renamed test and example SCSS files to end with `.module.scss` extension\n\n3.7.0 - (June 19, 2019)\n------------------\n### Removed\n* Removed '-ms-overflow-style' style\n\n### Fixed\n* Corrected to allow Slide Panel's DOM order to flex based on the 'panelPosition' prop.\n\n3.6.0 - (June 12, 2019)\n------------------\n### Removed\n* Removed node_modules from .npmignore\n\n### Changed\n* Removed all inline styles and implemented the same styles using external css.\n\n### Changed\n* Update tests for terra-toolkit v5 and terra-dev-site v5 changes\n* Update wdio specs to use Terra.describeViewports\n\n3.5.0 - (April 24, 2019)\n------------------\n### Changed\n* Moved packages we use solely in doc examples and tests to devDependencies\n\n3.4.0 - (April 18, 2019)\n------------------\n### Changed\n* Remove transition listener logic. Replace with componentDidUpdate comparison.\n\n### Fixed\n* Set outline to none on main + panel.\n\n3.3.0 - (April 9, 2019)\n------------------\n### Fixed\n* Setting Focus to slide panel's panel content on open.\n\n3.2.0 - (March 26, 2019)\n------------------\n### Changed\n* Update react/react-dom peer-dependency to latest stable minor release\n\n### Removed\n* Removed peer dependency on terra-base\n* Removed baseStyles import from terra-base\n\n### Removed\n* Removed peer dependency on terra-base\n* Removed baseStyles import from terra-base\n\n3.1.0 - (February 5, 2019)\n------------------\n### Changed\n* Minor dependency update\n\n3.0.0 - (January 25, 2019)\n------------------\n### Breaking Change\n* Updated variable names to match new naming standard\n* Added new variables for css theming\n* Removed variables for css theming\n* Updated terra-core dependencies\n\n2.25.0 - (January 5, 2019)\n------------------\n### Changed\n* Minor dependency update\n\n2.24.0 - (January 2, 2019)\n------------------\n### Changed\n* Minor dependency update\n\n2.23.0 - (December 5, 2018)\n------------------\n### Changed\n* Minor dependency update\n\n2.22.0 - (December 3, 2018)\n------------------\n### Changed\n* Wdio tests changed to use themeCombinationOfCustomProperties\n\n### Fixed\n* Slide panel's aria-hidden value when the panel is toggled\n\n2.21.0 - (November 15, 2018)\n------------------\n### Changed\n* Minor dependency update\n\n2.20.0 - (October 24, 2018)\n------------------\n### Changed\n* Updated the controlled slidepanel example's focus management\n\n2.19.0 - (October 16, 2018)\n------------------\n### Changed\n* Reordered DOM structure to change tab order\n\n2.18.0 - (October 8, 2018)\n------------------\n### Changed\n* Upgrade focus-trap-react version to ^4.0.1\n\n2.17.0 - (September 25, 2018)\n------------------\n### Changed\n* Minor dependency bump\n\n2.16.0 - (September 5, 2018)\n------------------\n### Changed\n* Bumped minimum react peerDependency version from ^16.2.0 to ^16.4.2\n* Bumped minimum react-dom peerDependency version from ^16.2.0 to ^16.4.2\n\n2.15.0 - (August 30, 2018)\n------------------\n### Changed\n* Formatting changes per eslint v5 update\n\n2.14.0 - (August 13, 2018)\n------------------\n### Changed\n* Formatting changes per eslint v4 update\n\n### Fixed\n* Lint errors regarding file path resolution\n\n2.13.0 - (July 25, 2018)\n------------------\n### Changed\n* Add .module extension to SCSS file(s)\n\n2.12.0 - (July 10, 2018)\n------------------\n### Changed\n* Clean up dependencies\n\n2.11.0 - (July 3, 2018)\n------------------\n### Added\n* Change logs to documentation on terra-dev-site\n\n2.10.0 - (June 29, 2018)\n------------------\n### Changed\n* Minor dependency updates\n\n2.9.0 - (June 12, 2018)\n------------------\n### Changed\n* Minor dependency updates\n\n2.8.0 - (May 30, 2018)\n------------------\n### Changed\n* Moved examples to src\n\n2.7.0 - (May 22, 2018)\n------------------\n### Changed\n* Minor dependency updates\n\n2.6.0 - (April 30, 2018)\n------------------\n### Changed\n* Minor dependency updates\n* Do not release snapshots to npm\n\n2.5.0 - (April 13, 2018)\n------------------\n### Changed\n* Minor dependency updates\n\n2.4.0 - (April 10, 2018)\n-----------------\n### Changed\n* Allow Slide Panel Background Color to be Themeable\n\n2.3.0 - (April 3, 2018)\n------------------\n### Changed\n* Miragte package to terra-framework\n\n2.2.0 - (March 6, 2018)\n------------------\n### Removed\n* Removed props-table script from package.json\n\n2.1.0 - (February 26, 2018)\n------------------\n### Fixed\n* Offscreen tab access in the panel removed\n\n### Changed\n* Updated aria hidden to use the string entry\n\n2.0.1 - (February 13, 2018)\n------------------\n### Changed\n* Updated peerDependencies\n\n2.0.0 - (February 12, 2018)\n------------------\n### Changed\n* Updated to use React 16\n\n### Fixed\n* CSS bug in calculated squish behavior\n\n1.16.0 - (February 1, 2018)\n------------------\n### Changed\n* Minor version bump\n\n1.15.0 - (January 18, 2018)\n------------------\n### Changed\n* Minor version bump\n\n1.14.0 - (January 5, 2018)\n------------------\n### Changed\n* Minor version bump\n\n1.13.0 - (November 28, 2017)\n------------------\n### Changed\n* Minor version bump\n\n1.12.0 - (November 16, 2017)\n------------------\n### Changed\n* Minor version bump\n\n1.11.0 - (October 6, 2017)\n------------------\n### Changed\n* Minor version bump\n\n1.10.0 - (September 26, 2017)\n------------------\n### Changed\n* Minor version bump\n\n1.9.0 - (September 19, 2017)\n------------------\n### Changed\n* Minor version bump\n\n1.8.0 - (September 12, 2017)\n------------------\n### Changed\n* Minor version bump\n\n1.7.0 - (September 7, 2017)\n------------------\n### Changed\n* Minor version bump\n\n1.6.0 - (September 5, 2017)\n------------------\n### Changed\n* Update nightwatch tests and test scripts.\n\n1.5.0 - (August 31, 2017)\n------------------\n### Changed\n* Minor version bump\n\n1.4.0 - (August 15, 2017)\n------------------\n### Changed\n* Switched CSS custom properties usage to inline fallback syntax\n\n1.3.0 - (August 8, 2017)\n------------------\n### Changed\n* Minor version bump\n\n1.2.0 - (August 1, 2017)\n------------------\n### Changed\n* Converted component to use CSS modules\n\n1.1.0 - (July 18, 2017)\n------------------\n### Changed\n* Updated nightwatch test scripts\n\n### Removed\n* Removed nightwatch.config file\n\n1.0.0 - (June 28, 2017)\n------------------\nInitial stable release\n"},3819:function(n,e,a){"use strict";var d=a(5);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=d(a(0)),r=d(a(911)),o=d(a(3321)),s=function(){return t.default.createElement(r.default,{packageName:"terra-slide-panel",srcPath:"https://github.com/cerner/terra-framework/tree/master/packages/terra-slide-panel",readme:o.default})};e.default=s},912:function(n,e){}}]);
//# sourceMappingURL=337-18c0bb595652d7354fed.js.map