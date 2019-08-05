(window.webpackJsonp=window.webpackJsonp||[]).push([[197,376,377,378,379,380,381,382,383,384,385,386,387,388,389,390,391,392,393,394,395,396,397,398,399,400,401,402,403,404,405,406,407,408,409,410,411,412,413,414,415,416,417,418,419,420,421,422,423,424,425,426,427,428,429,430,431,432,433,434,435,436,437,438,439],{3080:function(t,e,n){"use strict";n.r(e),e.default="# Terra Navigation Prompt - Implementation Guide\n\nAssume we have built a simple component, the FormSwitcher, that toggles between showing two different stateful components, Form 1 and Form 2. Users of the FormSwitcher have recently complained that they can switch between forms before submitting their in progress form, losing their data in the process. We want to implement the NavigationPrompt and NavigationPromptCheckpoint to give our users more control over the FormSwitcher's navigation.\n\n> Note: This implementation guide features examples and use cases for the various APIs provided by the NavigationPrompt and NavigationPromptCheckpoint.\n> !! Please review your individual requirements to see which APIs are necessary for your specific needs.\n\n## Part 0 - Reviewing the Initial FormSwitcher Implementation\n\nThe FormSwitcher renders two buttons that allow users to toggle between showing Form 1 and Form 2. Form 1 and Form 2 are unique instances of the Form component.\n\nThe Form component renders a text input element and keeps the input's value in state. When the Submit button is pressed, the value is reset to simulate a mock submission.\n\nIf we enter text into Form 1's input, switch to Form 2, and then switch back to Form 1, we will notice our previously entered value is gone. This is not good, because that data in Form 1 could be *very* important to our users.\n\n```jsx\nimport React, { useState } from 'react';\nimport PropTypes from 'prop-types';\n\nconst Form = ({ title }) => {\n  const [inputValue, setInputValue] = useState('');\n\n  return (\n    <div>\n      <p>{title}</p>\n      <input\n        type=\"text\"\n        onChange={(event) => {\n          setInputValue(event.target.value);\n        }}\n        value={inputValue}\n      />\n      <button\n        type=\"button\"\n        onClick={() => {\n          setInputValue('');\n        }}\n      >\n        Submit\n      </button>\n    </div>\n  );\n};\n\nForm.propTypes = {\n  title: PropTypes.string,\n};\n\nconst FormSwitcher = () => {\n  const [activeForm, setActiveForm] = useState('Form 1');\n\n  function onSwitchForm(formKey) {\n    setActiveForm(formKey);\n  }\n\n  return (\n    <div>\n      <h2>Form Switcher</h2>\n      <p>The NavigationPrompt is not implemented, so no prompting occurs.</p>\n      <button\n        type=\"button\"\n        disabled={activeForm === 'Form 1'}\n        onClick={onSwitchForm.bind(null, 'Form 1')}\n      >\n        Switch to Form 1\n      </button>\n      <button\n        type=\"button\"\n        disabled={activeForm === 'Form 2'}\n        onClick={onSwitchForm.bind(null, 'Form 2')}\n      >\n        Switch to Form 2\n      </button>\n      <Form title={activeForm} key={activeForm} />\n    </div>\n  );\n};\n\nexport default FormSwitcher;\n```\n"},3081:function(t,e,n){"use strict";var o=n(32),r=n(5);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=r(n(125)),a=o(n(0)),u=r(n(2)),m=function(t){var e=t.title,n=(0,a.useState)(""),o=(0,i.default)(n,2),r=o[0],u=o[1];return a.default.createElement("div",null,a.default.createElement("p",null,e),a.default.createElement("input",{type:"text",onChange:function(t){u(t.target.value)},value:r}),a.default.createElement("button",{type:"button",onClick:function(){u("")}},"Submit"))};m.propTypes={title:u.default.string};var l=function(){var t=(0,a.useState)("Form 1"),e=(0,i.default)(t,2),n=e[0],o=e[1];function r(t){o(t)}return a.default.createElement("div",null,a.default.createElement("h2",null,"Form Switcher"),a.default.createElement("p",null,"The NavigationPrompt is not implemented, so no prompting occurs."),a.default.createElement("button",{type:"button",disabled:"Form 1"===n,onClick:r.bind(null,"Form 1")},"Switch to Form 1"),a.default.createElement("button",{type:"button",disabled:"Form 2"===n,onClick:r.bind(null,"Form 2")},"Switch to Form 2"),a.default.createElement(m,{title:n,key:n}))};e.default=l},3082:function(t,e,n){"use strict";n.r(e),e.default="import React, { useState } from 'react';\nimport PropTypes from 'prop-types';\n\nconst Form = ({ title }) => {\n  const [inputValue, setInputValue] = useState('');\n\n  return (\n    <div>\n      <p>{title}</p>\n      <input\n        type=\"text\"\n        onChange={(event) => {\n          setInputValue(event.target.value);\n        }}\n        value={inputValue}\n      />\n      <button\n        type=\"button\"\n        onClick={() => {\n          setInputValue('');\n        }}\n      >\n        Submit\n      </button>\n    </div>\n  );\n};\n\nForm.propTypes = {\n  title: PropTypes.string,\n};\n\nconst FormSwitcher = () => {\n  const [activeForm, setActiveForm] = useState('Form 1');\n\n  function onSwitchForm(formKey) {\n    setActiveForm(formKey);\n  }\n\n  return (\n    <div>\n      <h2>Form Switcher</h2>\n      <p>The NavigationPrompt is not implemented, so no prompting occurs.</p>\n      <button\n        type=\"button\"\n        disabled={activeForm === 'Form 1'}\n        onClick={onSwitchForm.bind(null, 'Form 1')}\n\n      >\n        Switch to Form 1\n      </button>\n      <button\n        type=\"button\"\n        disabled={activeForm === 'Form 2'}\n        onClick={onSwitchForm.bind(null, 'Form 2')}\n      >\n        Switch to Form 2\n      </button>\n      <Form title={activeForm} key={activeForm} />\n    </div>\n  );\n};\n\nexport default FormSwitcher;\n"},3773:function(t,e,n){"use strict";var o=n(5);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=o(n(0)),i=o(n(911)),a=o(n(3080)),u=o(n(3081)),m=o(n(3082)),l=function(){return r.default.createElement(i.default,{packageName:"terra-navigation-prompt",srcPath:"https://github.com/cerner/terra-framework/tree/master/packages/terra-navigation-prompt",readme:a.default,examples:[{title:"Part 0 - Reviewing the Initial FormSwitcher Implementation",example:r.default.createElement(u.default,null),source:m.default}]})};e.default=l},912:function(t,e){}}]);
//# sourceMappingURL=197-6b00eb9402ceee505b75.js.map