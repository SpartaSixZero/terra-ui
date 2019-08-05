(window.webpackJsonp=window.webpackJsonp||[]).push([[185,376,377,378,379,380,381,382,383,384,385,386,387,388,389,390,391,392,393,394,395,396,397,398,399,400,401,402,403,404,405,406,407,408,409,410,411,412,413,414,415,416,417,418,419,420,421,422,423,424,425,426,427,428,429,430,431,432,433,434,435,436,437,438,439],{1361:function(e,n,t){"use strict";var i=t(5);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=i(t(341)),a=i(t(20)),u=i(t(24)),l=function(){function e(){(0,a.default)(this,e)}return(0,u.default)(e,null,[{key:"isUnderMaxLength",value:function(e,n){return!(!("string"==typeof e||e instanceof String)||"number"!=typeof n||!isFinite(n)||n<0||!Number.isInteger(n))&&e.length<=n}},{key:"isOverMinLength",value:function(e,n){return!(!("string"==typeof e||e instanceof String)||"number"!=typeof n||!isFinite(n)||n<0||!Number.isInteger(n))&&e.length>=n}},{key:"hasNoWhitespace",value:function(e){return("string"==typeof e||e instanceof String)&&!/\s/.test(e)}},{key:"containsCharacters",value:function(e,n){if(!("string"==typeof e||e instanceof String)||!n||"object"!==(0,r.default)(n)||n.constructor!==Array)return!1;for(var t=0;t<n.length;t+=1)if(e.includes(n[t]))return!0;return!1}},{key:"isOverMinValue",value:function(e,n){return!(!("string"==typeof e||e instanceof String)||"number"!=typeof n||!isFinite(n))&&e>=n}},{key:"isUnderMaxValue",value:function(e,n){return!(!("string"==typeof e||e instanceof String)||"number"!=typeof n||!isFinite(n))&&e<=n}},{key:"isPrecise",value:function(e,n){if(!("string"==typeof e||e instanceof String)||"number"!=typeof n||!isFinite(n)||n<0||!Number.isInteger(n))return!1;var t=e.split(".");return!(2===t.length&&t[1].length>n)}},{key:"isNonnegative",value:function(e){return("string"==typeof e||e instanceof String)&&parseFloat(e)>=0}}]),e}();n.default=l},2578:function(e,n,t){"use strict";t.r(n),n.default="# Making a Numeric Input With Minimum, Maximum, and Precision Validations\n\nSince this is a more in depth view of validation, we're going to just start with some provided code and add to it as needed.\n\n```javascript\nimport React from 'react';\nimport { Form, Field } from 'react-final-form';\nimport InputField from 'terra-form-input/lib/InputField';\nimport Button from 'terra-button';\nimport Spacer from 'terra-spacer';\n\nconst validateNumber = (value) => {\n  if (!value) { return undefined; }\n\n  return undefined;\n};\n\nexport default class Example extends React.Component {\n  constructor(props) {\n    super(props);\n\n    this.state = {};\n    this.submitForm = this.submitForm.bind(this);\n  }\n\n  submitForm(values) {\n    this.setState({\n      submittedValues: values,\n    });\n  }\n\n  renderForm({ handleSubmit }) {\n    return (\n      <form\n        onSubmit={handleSubmit}\n      >\n        <Field\n          name=\"numExample\"\n          validate={validateNumber}\n        >\n          {({ input, meta }) => (\n            <InputField\n              inputId=\"numExample\"\n              label=\"Numeric Example\"\n              error={meta.error}\n              isInvalid={meta.error !== undefined}\n              inputAttrs={{\n                type: 'number',\n                ...input,\n              }}\n              onChange={(e) => { input.onChange(e.target.value); }}\n              value={input.value}\n              required\n            />\n          )}\n        </Field>\n        <Button text=\"Submit\" type={Button.Opts.Types.SUBMIT} />\n      </form>\n    );\n  }\n\n  render() {\n    return (\n      <Spacer marginBottom=\"small\">\n        <Form\n          onSubmit={this.submitForm}\n          render={this.renderForm}\n          initialValues={{ numExample: '' }}\n          validate={(values) => {\n            const errors = {};\n\n            if (!values.numExample) {\n              errors.numExample = 'Required';\n            }\n\n            return errors;\n          }}\n        />\n        {this.state.submittedValues\n          && (\n          <div>\n            <p>Form Submitted Successfully With</p>\n            <pre>{JSON.stringify(this.state.submittedValues, 0, 2)}</pre>\n          </div>\n          )\n        }\n      </Spacer>\n    );\n  }\n}\n```\n\nWe have a simple number type input with validation, tied to the `<Form>` component, that checks whether we have a value for the input.\n\nWe also have our `<Field>`'s validation function defined and ready to be added to, with it only having a basic check to see if there is a value.\n\nWe have added browser enforcement on the inputted value by passing `type: 'number'` into `<Inputfield>`'s `inputAttrs`.\n\nNote that specifying `type: 'number'` still allows negatives and decimal points, such as `--1` or `2.0.32`. These will be placed in the field as `undefined`. With our code, we will just return a value of `Required`, via the `<Form>`'s validation function, if values are undefined.\n\nSecond thing - our validation function, `validateNumber`, will be given a *string*, despite the input being of `type: 'number'`. This does not impact simple operators but is useful to know when building custom validation functions.\n\nLet's start by giving a minimum and maximum to our value. For simplicity, set a minimum to 10 and a maximum to 100.\n\n```diff\nconst validateNumber = (value) => {\n  if (!value) { return undefined; }\n+ var numericValue = Number(value);  \n+ if (numericValue < 10) {\n+   return 'Value should not be less than 10.';\n+ }\n+ if (numericValue > 100) {\n+   return 'Value should not be over 100.';\n+ }\n\n  return undefined;\n};\n```\n\nNow, let's check for precision. For this example, lets validate to the thousandth place (three decimal places). Since our value is a string, we'll use string functions to validate.\n\nUse `.` as a delimiter and check for a length less than or equal to 3.\n\n```diff\nconst validateNumber = (value) => {\n  ...\n+ const valueSplit = value.split('.');\n+ if (valueSplit.length === 2 && valueSplit[1].length > 3) {\n+   return 'Value has more than 3 decimal points';\n+ }\n\n  return undefined;\n};\n```\n\nThis validation has a quirk. If the input contains extra `0`s, like `23.0230000`, validation will fail.\n\nLet's try a different way of validating. Using the `Number` converted value instead, we can use the `toFixed` function to automatically set precision, and use this as a comparison.\n\n```diff\nconst validateNumber = (value) => {\n  if (!value) { return undefined; }\n  var numericValue = Number(value);  \n  ...\n- const valueSplit = value.split('.');\n- if (valueSplit.length === 2 && valueSplit[1].length > 3) {\n+ if (numericValue.toFixed(3) != numericValue) {\n    return 'Value has more than 3 decimal points';\n  }\n\n  return undefined;\n};\n```\n\nThis validation has the opposite quirk. If the input contains extra `0`s, like `23.0230000`, validation will succeed.\n\nWith this we have a function that we can add to validate a number based by having a minimum, maximum, and a certain level of precision required. In the same vein as the 'Max Length Input' example, we can use the `FormValidationUtil` to help control and reduce some of workflow.\n\n```diff\nconst validateNumber = (value) => {\n   if (!value) { return undefined; }\n-  var numericValue = Number(value);\n-  if (numericValue < 10) {\n+  if (!FormValidationUtil.isOverMinValue(value, 10)) {\n    return 'Value should not be less than 10.';\n  }\n-  if (numericValue > 100) {\n+  if (!FormValidationUtil.isUnderMaxValue(value, 100)) {\n    return 'Value should not be over 100.';\n  }\n- if (numericValue.toFixed(3) != numericValue) {\n+ if (!FormValidationUtil.isPrecise(value, 3)) {\n    return 'Value has more than 3 decimal points';\n  }\n\n  return undefined;\n};\n```\n\nNote: The `FormValidationUtil.precisionCheck` function uses the method where we split the `String` value to check precision.\n"},2579:function(e,n,t){"use strict";var i=t(5);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=i(t(331)),a=i(t(20)),u=i(t(24)),l=i(t(25)),o=i(t(26)),s=i(t(31)),d=i(t(27)),m=i(t(0)),f=t(926),c=i(t(918)),p=i(t(61)),v=i(t(333)),h=i(t(1361));function b(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),t.push.apply(t,i)}return t}function g(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?b(t,!0).forEach(function(n){(0,r.default)(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):b(t).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}var y=function(e){return h.default.isOverMinValue(e,10)?h.default.isUnderMaxValue(e,100)?h.default.isPrecise(e,3)?void 0:"Value has more than 3 decimal points":"Value should not be over 100.":"Value should not be less than 10."},F=function(e){function n(e){var t;return(0,a.default)(this,n),(t=(0,l.default)(this,(0,o.default)(n).call(this,e))).state={},t.submitForm=t.submitForm.bind((0,s.default)(t)),t}return(0,d.default)(n,e),(0,u.default)(n,[{key:"submitForm",value:function(e){this.setState({submittedValues:e})}},{key:"renderForm",value:function(e){var n=e.handleSubmit;return m.default.createElement("form",{onSubmit:n},m.default.createElement(f.Field,{name:"numExample",validate:y},function(e){var n=e.input,t=e.meta;return m.default.createElement(c.default,{inputId:"numExample",label:"Numeric Example",error:t.error,isInvalid:void 0!==t.error,inputAttrs:g({type:"number"},n),onChange:function(e){n.onChange(e.target.value)},value:n.value,required:!0})}),m.default.createElement(p.default,{text:"Submit",type:p.default.Opts.Types.SUBMIT}))}},{key:"render",value:function(){return m.default.createElement(v.default,{marginBottom:"small"},m.default.createElement(f.Form,{onSubmit:this.submitForm,render:this.renderForm,initialValues:{numExample:""},validate:function(e){var n={};return e.numExample||(n.numExample="Required"),n}}),this.state.submittedValues&&m.default.createElement("div",null,m.default.createElement("p",null,"Form Submitted Successfully With"),m.default.createElement("pre",null,JSON.stringify(this.state.submittedValues,0,2))))}}]),n}(m.default.Component);n.default=F},2580:function(e,n,t){"use strict";t.r(n),n.default="/* eslint-disable class-methods-use-this */\n\nimport React from 'react';\nimport { Form, Field } from 'react-final-form';\nimport InputField from 'terra-form-input/lib/InputField';\nimport Button from 'terra-button';\nimport Spacer from 'terra-spacer';\nimport FormValidationUtil from '../../../FormValidationUtil';\n\nconst validateNumber = (value) => {\n  if (!FormValidationUtil.isOverMinValue(value, 10)) {\n    return 'Value should not be less than 10.';\n  }\n  if (!FormValidationUtil.isUnderMaxValue(value, 100)) {\n    return 'Value should not be over 100.';\n  }\n  if (!FormValidationUtil.isPrecise(value, 3)) {\n    return 'Value has more than 3 decimal points';\n  }\n\n  return undefined;\n};\n\nexport default class Example extends React.Component {\n  constructor(props) {\n    super(props);\n\n    this.state = {};\n    this.submitForm = this.submitForm.bind(this);\n  }\n\n  submitForm(values) {\n    this.setState({\n      submittedValues: values,\n    });\n  }\n\n  renderForm({ handleSubmit }) {\n    return (\n      <form\n        onSubmit={handleSubmit}\n      >\n        <Field\n          name=\"numExample\"\n          validate={validateNumber}\n        >\n          {({ input, meta }) => (\n            <InputField\n              inputId=\"numExample\"\n              label=\"Numeric Example\"\n              error={meta.error}\n              isInvalid={meta.error !== undefined}\n              inputAttrs={{\n                type: 'number',\n                ...input,\n              }}\n              onChange={(e) => { input.onChange(e.target.value); }}\n              value={input.value}\n              required\n            />\n          )}\n        </Field>\n        <Button text=\"Submit\" type={Button.Opts.Types.SUBMIT} />\n      </form>\n    );\n  }\n\n  render() {\n    return (\n      <Spacer marginBottom=\"small\">\n        <Form\n          onSubmit={this.submitForm}\n          render={this.renderForm}\n          initialValues={{ numExample: '' }}\n          validate={(values) => {\n            const errors = {};\n\n            if (!values.numExample) {\n              errors.numExample = 'Required';\n            }\n\n            return errors;\n          }}\n        />\n        {this.state.submittedValues\n          && (\n          <div>\n            <p>Form Submitted Successfully With</p>\n            <pre>{JSON.stringify(this.state.submittedValues, 0, 2)}</pre>\n          </div>\n          )\n        }\n      </Spacer>\n    );\n  }\n}\n"},3721:function(e,n,t){"use strict";var i=t(5);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=i(t(0)),a=i(t(911)),u=i(t(2578)),l=i(t(2579)),o=i(t(2580)),s=function(){return r.default.createElement(a.default,{readme:u.default,examples:[{title:"Numeric Validations",example:r.default.createElement(l.default,null),source:o.default}]})};n.default=s},912:function(e,n){},918:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=o(t(0)),r=o(t(2)),a=o(t(330)),u=o(t(334)),l=o(t(332));function o(e){return e&&e.__esModule?e:{default:e}}function s(){return(s=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e}).apply(this,arguments)}function d(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var m={inputId:r.default.string.isRequired,label:r.default.node.isRequired,defaultValue:r.default.oneOfType([r.default.string,r.default.number]),disabled:r.default.bool,error:r.default.node,errorIcon:r.default.element,help:r.default.node,hideRequired:r.default.bool,inputAttrs:r.default.object,isInline:r.default.bool,isInvalid:r.default.bool,isLabelHidden:r.default.bool,labelAttrs:r.default.object,maxWidth:r.default.string,onChange:r.default.func,refCallback:r.default.func,required:r.default.bool,showOptional:r.default.bool,type:r.default.string,value:r.default.oneOfType([r.default.string,r.default.number])},f={defaultValue:void 0,disabled:!1,error:null,errorIcon:i.default.createElement(u.default,null),help:null,hideRequired:!1,inputAttrs:{},isInline:!1,isInvalid:!1,isLabelHidden:!1,labelAttrs:{},onChange:void 0,maxWidth:void 0,refCallback:void 0,required:!1,showOptional:!1,type:void 0,value:void 0},c=function(e){var n,t=e.defaultValue,r=e.disabled,u=e.error,o=e.errorIcon,m=e.help,f=e.hideRequired,c=e.inputAttrs,p=e.inputId,v=e.isInline,h=e.isInvalid,b=e.isLabelHidden,g=e.label,y=e.labelAttrs,F=e.maxWidth,V=e.onChange,S=e.refCallback,x=e.required,w=e.showOptional,O=e.type,I=e.value,E=d(e,["defaultValue","disabled","error","errorIcon","help","hideRequired","inputAttrs","inputId","isInline","isInvalid","isLabelHidden","label","labelAttrs","maxWidth","onChange","refCallback","required","showOptional","type","value"]);m&&u&&h?n="".concat(p,"-error ").concat(p,"-help"):(m&&(n="".concat(p,"-help")),u&&h&&(n="".concat(p,"-error")));var k=O||c.type;return i.default.createElement(a.default,s({label:g,labelAttrs:y,error:u,errorIcon:o,help:m,hideRequired:f,required:x,showOptional:w,isInvalid:h,isInline:v,isLabelHidden:b,htmlFor:p,maxWidth:F},E),i.default.createElement(l.default,s({},c,{disabled:c.disabled||r,id:p,type:k,onChange:V,value:I,defaultValue:t,refCallback:S,"aria-describedby":n})))};c.propTypes=m,c.defaultProps=f;var p=c;n.default=p}}]);
//# sourceMappingURL=185-e6014018848849b9465a.js.map