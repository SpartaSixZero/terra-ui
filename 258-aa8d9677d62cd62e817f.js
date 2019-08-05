(window.webpackJsonp=window.webpackJsonp||[]).push([[258,376,377,378,379,380,381,382,383,384,385,386,387,388,389,390,391,392,393,394,395,396,397,398,399,400,401,402,403,404,405,406,407,408,409,410,411,412,413,414,415,416,417,418,419,420,421,422,423,424,425,426,427,428,429,430,431,432,433,434,435,436,437,438,439],{1973:function(e,t,r){"use strict";r.r(t),t.default="# Terra Base Upgrade Guide\n\n## Changes from 4.0 to 5.0\n* To upgrade to terra-base v5, you now need to define a locale via the locale prop when using the `<Base>` component.\n* Any react-intl based exports that you were importing from terra-base should now be imported directly from react-intl.\n\n```diff\n- import { injectIntl, intlShape, FormattedMessage, IntlProvider } from terra-base;\n+ import { injectIntl, intlShape, FormattedMessage, IntlProvider } from react-intl;\n```\n\nTerra-base v5.x depends on terra-i18n v4.x. It is recommended to [review the terra-i18n v3 to v4 upgrade guide](https://github.com/cerner/terra-core/blob/master/packages/terra-i18n/docs/UPGRADEGUIDE.md) when updating terra-base to v5.\n\n## Changes from 3.0 to 4.0\n\n### Changes to CSS Custom Properties\n\nThe following transitive dependency had breaking changes. See its upgrade guide for more information.\n* terra-doc-template\n"},3613:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(r(0)),a=i(r(911)),o=i(r(1973));function i(e){return e&&e.__esModule?e:{default:e}}var s=function(){return n.default.createElement(a.default,{packageName:"terra-base",srcPath:"https://github.com/cerner/terra-core/tree/master/packages/terra-base",readme:o.default})};t.default=s},912:function(e,t){}}]);
//# sourceMappingURL=258-aa8d9677d62cd62e817f.js.map