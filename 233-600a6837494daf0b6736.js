(window.webpackJsonp=window.webpackJsonp||[]).push([[233,376,377,378,379,380,381,382,383,384,385,386,387,388,389,390,391,392,393,394,395,396,397,398,399,400,401,402,403,404,405,406,407,408,409,410,411,412,413,414,415,416,417,418,419,420,421,422,423,424,425,426,427,428,429,430,431,432,433,434,435,436,437,438,439],{1382:function(r){r.exports=JSON.parse('{"_from":"terra-popup@^6.0.0","_id":"terra-popup@6.8.0","_inBundle":false,"_integrity":"sha512-+DmEiWsCHEMHZmQyAtZ5DS+Arg7HgkCjteB8gDvV6JcuRA2cU5y4flzka53ITH9bRzA1nUCm6BsEoKq1W03qEg==","_location":"/terra-popup","_phantomChildren":{},"_requested":{"type":"range","registry":true,"raw":"terra-popup@^6.0.0","name":"terra-popup","escapedName":"terra-popup","rawSpec":"^6.0.0","saveSpec":null,"fetchSpec":"^6.0.0"},"_requiredBy":["/","/terra-application-layout","/terra-application-links","/terra-application-navigation","/terra-date-picker","/terra-menu"],"_resolved":"https://registry.npmjs.org/terra-popup/-/terra-popup-6.8.0.tgz","_shasum":"bd25a384ab81c54bb2cb26695661e2446f221ea8","_spec":"terra-popup@^6.0.0","_where":"/home/travis/build/cerner/terra-ui","author":{"name":"Cerner Corporation"},"bugs":{"url":"https://github.com/cerner/terra-framework/issues"},"bundleDependencies":false,"dependencies":{"classnames":"^2.2.5","focus-trap-react":"^6.0.0","prop-types":"^15.5.8","react-portal":"^4.1.2","terra-button":"^3.3.0","terra-content-container":"^3.0.0","terra-hookshot":"^5.13.0","terra-mixins":"^1.0.0"},"deprecated":false,"description":"The Terra Popup is higher order component that launches terra-hookshot positioned content with the ability to display a dynamic arrow.","devDependencies":{"terra-disclosure-manager":"^4.17.0","terra-doc-template":"^2.2.0","terra-modal-manager":"^6.8.0"},"gitHead":"f763d8f2d030d85d834554d5c2eca6f2917f2eac","homepage":"https://github.com/cerner/terra-framework#readme","keywords":["Cerner","Terra","terra-popup","Popup","UI"],"license":"Apache-2.0","main":"lib/Popup.js","name":"terra-popup","peerDependencies":{"react":"^16.8.5","react-dom":"^16.8.5","react-intl":"^2.8.0"},"repository":{"type":"git","url":"git+https://github.com/cerner/terra-framework.git"},"scripts":{"compile":"babel --root-mode upward src --out-dir lib --copy-files","lint":"npm run lint:js && npm run lint:scss","lint:js":"eslint --ext .js,.jsx . --ignore-path ../../.eslintignore","lint:scss":"stylelint src/**/*.scss","precompile":"rm -rf lib","test":"npm run test:jest && npm run test:wdio","test:jest":"jest --config ../../jestconfig.js","test:wdio":"../../node_modules/.bin/wdio ../../node_modules/terra-dev-site/config/wdio/wdio.conf.js"},"version":"6.8.0"}')},3167:function(r,e,o){"use strict";o.r(e),e.default="# Terra Popup Upgrade Guide\n## Changes from version 4 to version 5\n### Changes to CSS Custom Properties\n\n#### Renamed\n| Previous | New |\n|-|-|\n| --terra-popup-arrow-size | --terra-popup-arrow-border-width |\n| --terra-popup-arrow-inner-size | --terra-popup-arrow-after-border-width |\n| --terra-popup-arrow-color | --terra-popup-top-align-arrow-border-bottom-color |\n| --terra-popup-arrow-inner-color | --terra-popup-top-align-arrow-after-border-bottom-color |\n| --terra-popup-arrow-inner-size | --terra-popup-top-align-arrow-after-left |\n| --terra-popup-arrow-inner-inset-size | --terra-popup-top-align-arrow-after-top |\n| --terra-popup-arrow-color | --terra-popup-bottom-align-arrow-border-top-color |\n| --terra-popup-arrow-inner-color | --terra-popup-bottom-align-arrow-after-border-top-color |\n| --terra-popup-arrow-inner-size | --terra-popup-bottom-align-arrow-after-left |\n| --terra-popup-arrow-inner-inset-size | --terra-popup-bottom-align-arrow-after-bottom |\n| --terra-popup-arrow-color | --terra-popup-left-align-arrow-border-right-color |\n| --terra-popup-arrow-inner-color | --terra-popup-left-align-arrow-after-border-right-color |\n| --terra-popup-arrow-inner-size | --terra-popup-left-align-arrow-after-top |\n| --terra-popup-arrow-inner-inset-size | --terra-popup-left-align-arrow-after-left |\n| --terra-popup-arrow-color | --terra-popup-right-align-arrow-border-left-color |\n| --terra-popup-arrow-inner-color | --terra-popup-right-align-arrow-after-border-left-color |\n| --terra-popup-arrow-inner-size | --terra-popup-right-align-arrow-after-top |\n| --terra-popup-arrow-inner-inset-size | --terra-popup-right-align-arrow-after-right |\n| --terra-popup-content-close-icon | --terra-popup-content-close-icon-background |\n\n#### Added\n* --terra-popup-content-header-background-color\n* --terra-popup-content-header-padding\n* --terra-popup-content-close-icon-height\n* --terra-popup-content-close-icon-margin-top\n* --terra-popup-content-close-icon-width\n\n#### Removed\n* --terra-popup-arrow-z-index\n* --terra-popup-arrow-inner-z-index\n"},3793:function(r,e,o){"use strict";var t=o(5);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var p=t(o(0)),a=t(o(911)),n=t(o(3167)),i=o(1382),s=function(){return p.default.createElement(a.default,{packageName:i.name,srcPath:"https://github.com/cerner/terra-framework/tree/master/packages/".concat(i.name),readme:n.default})};e.default=s},912:function(r,e){}}]);
//# sourceMappingURL=233-600a6837494daf0b6736.js.map