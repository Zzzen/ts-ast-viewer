(this["webpackJsonpts-ast-viewer"]=this["webpackJsonpts-ast-viewer"]||[]).push([[131],{830:function(t,e,o){"use strict";o.r(e),o.d(e,"default",(function(){return h})),o.d(e,"MonacoDiffEditor",(function(){return g}));var i=o(179),n=o(1),r=o(0);function s(t){return/^\d+$/.test(t)?t+"px":t}function p(){}var a=function(){var t=function(e,o){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])})(e,o)};return function(e,o){function i(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(i.prototype=o.prototype,new i)}}(),u=function(){return(u=Object.assign||function(t){for(var e,o=1,i=arguments.length;o<i;o++)for(var n in e=arguments[o])Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t}).apply(this,arguments)},l=function(t,e){var o={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(o[i]=t[i]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(i=Object.getOwnPropertySymbols(t);n<i.length;n++)e.indexOf(i[n])<0&&Object.prototype.propertyIsEnumerable.call(t,i[n])&&(o[i[n]]=t[i[n]])}return o},h=function(t){function e(e){var o=t.call(this,e)||this;return o.assignRef=function(t){o.containerElement=t},o.containerElement=void 0,o}return a(e,t),e.prototype.componentDidMount=function(){this.initMonaco()},e.prototype.componentDidUpdate=function(t){var e=this.props,o=e.value,n=e.language,r=e.theme,s=e.height,p=e.options,a=e.width,u=this.editor,h=u.getModel();if(null!=this.props.value&&this.props.value!==h.getValue()&&(this.__prevent_trigger_change_event=!0,this.editor.pushUndoStop(),h.pushEditOperations([],[{range:h.getFullModelRange(),text:o}]),this.editor.pushUndoStop(),this.__prevent_trigger_change_event=!1),t.language!==n&&i.editor.setModelLanguage(h,n),t.theme!==r&&i.editor.setTheme(r),!u||a===t.width&&s===t.height||u.layout(),t.options!==p){p.model;var d=l(p,["model"]);u.updateOptions(d)}},e.prototype.componentWillUnmount=function(){this.destroyMonaco()},e.prototype.destroyMonaco=function(){if(this.editor){this.editor.dispose();var t=this.editor.getModel();t&&t.dispose()}this._subscription&&this._subscription.dispose()},e.prototype.initMonaco=function(){var t=null!=this.props.value?this.props.value:this.props.defaultValue,e=this.props,o=e.language,n=e.theme,r=e.overrideServices;if(this.containerElement){var s=u(u({},this.props.options),this.editorWillMount());this.editor=i.editor.create(this.containerElement,u(u({value:t,language:o},s),n?{theme:n}:{}),r),this.editorDidMount(this.editor)}},e.prototype.editorWillMount=function(){return(0,this.props.editorWillMount)(i)||{}},e.prototype.editorDidMount=function(t){var e=this;this.props.editorDidMount(t,i),this._subscription=t.onDidChangeModelContent((function(o){e.__prevent_trigger_change_event||e.props.onChange(t.getValue(),o)}))},e.prototype.render=function(){var t=this.props,e=t.width,o=t.height,i={width:s(e),height:s(o)};return r.createElement("div",{ref:this.assignRef,style:i,className:"react-monaco-editor-container"})},e.propTypes={width:n.oneOfType([n.string,n.number]),height:n.oneOfType([n.string,n.number]),value:n.string,defaultValue:n.string,language:n.string,theme:n.string,options:n.object,overrideServices:n.object,editorDidMount:n.func,editorWillMount:n.func,onChange:n.func},e.defaultProps={width:"100%",height:"100%",value:null,defaultValue:"",language:"javascript",theme:null,options:{},overrideServices:{},editorDidMount:p,editorWillMount:p,onChange:p},e}(r.Component),d=function(){var t=function(e,o){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])})(e,o)};return function(e,o){function i(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(i.prototype=o.prototype,new i)}}(),c=function(){return(c=Object.assign||function(t){for(var e,o=1,i=arguments.length;o<i;o++)for(var n in e=arguments[o])Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t}).apply(this,arguments)},g=function(t){function e(e){var o=t.call(this,e)||this;return o.assignRef=function(t){o.containerElement=t},o.containerElement=void 0,o}return d(e,t),e.prototype.componentDidMount=function(){this.initMonaco()},e.prototype.componentDidUpdate=function(t){var e=this.props,o=e.language,n=e.theme,r=e.height,s=e.options,p=e.width,a=this.editor.getModel(),u=a.original,l=a.modified;this.props.original!==u.getValue()&&u.setValue(this.props.original),null!=this.props.value&&this.props.value!==l.getValue()&&(this.__prevent_trigger_change_event=!0,this.editor.modifiedEditor.pushUndoStop(),l.pushEditOperations([],[{range:l.getFullModelRange(),text:this.props.value}]),this.editor.modifiedEditor.pushUndoStop(),this.__prevent_trigger_change_event=!1),t.language!==o&&(i.editor.setModelLanguage(u,o),i.editor.setModelLanguage(l,o)),t.theme!==n&&i.editor.setTheme(n),!this.editor||p===t.width&&r===t.height||this.editor.layout(),t.options!==s&&this.editor.updateOptions(s)},e.prototype.componentWillUnmount=function(){this.destroyMonaco()},e.prototype.editorWillMount=function(){return(0,this.props.editorWillMount)(i)||{}},e.prototype.editorDidMount=function(t){var e=this;this.props.editorDidMount(t,i);var o=t.getModel().modified;this._subscription=o.onDidChangeContent((function(t){e.__prevent_trigger_change_event||e.props.onChange(o.getValue(),t)}))},e.prototype.initModels=function(t,e){var o=this.props.language,n=i.editor.createModel(e,o),r=i.editor.createModel(t,o);this.editor.setModel({original:n,modified:r})},e.prototype.initMonaco=function(){var t=null!=this.props.value?this.props.value:this.props.defaultValue,e=this.props,o=e.original,n=e.theme,r=e.options,s=e.overrideServices;this.containerElement&&(this.editorWillMount(),this.editor=i.editor.createDiffEditor(this.containerElement,c(c({},r),n?{theme:n}:{}),s),this.initModels(t,o),this.editorDidMount(this.editor))},e.prototype.destroyMonaco=function(){if(this.editor){this.editor.dispose();var t=this.editor.getModel(),e=t.original,o=t.modified;e&&e.dispose(),o&&o.dispose()}this._subscription&&this._subscription.dispose()},e.prototype.render=function(){var t=this.props,e=t.width,o=t.height,i={width:s(e),height:s(o)};return r.createElement("div",{ref:this.assignRef,style:i,className:"react-monaco-editor-container"})},e.propTypes={width:n.oneOfType([n.string,n.number]),height:n.oneOfType([n.string,n.number]),original:n.string,value:n.string,defaultValue:n.string,language:n.string,theme:n.string,options:n.object,overrideServices:n.object,editorDidMount:n.func,editorWillMount:n.func,onChange:n.func},e.defaultProps={width:"100%",height:"100%",original:null,value:null,defaultValue:"",language:"javascript",theme:null,options:{},overrideServices:{},editorDidMount:p,editorWillMount:p,onChange:p},e}(r.Component)}}]);