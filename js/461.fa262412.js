(self["webpackChunkhotel"]=self["webpackChunkhotel"]||[]).push([[461],{7461:function(t){
/*!
 * vue-simple-progress v1.1.1 (https://github.com/dzwillia/vue-simple-progress)
 * (c) 2019 David Z. Williams
 * Released under the MIT License.
 */
(function(e,i){t.exports=i()})(0,(function(){return function(t){var e={};function i(s){if(e[s])return e[s].exports;var n=e[s]={i:s,l:!1,exports:{}};return t[s].call(n.exports,n,n.exports,i),n.l=!0,n.exports}return i.m=t,i.c=e,i.d=function(t,e,s){i.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:s})},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=0)}([function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.VueSimpleProgress=void 0;var s=i(1),n=r(s);function r(t){return t&&t.__esModule?t:{default:t}}"undefined"!==typeof window&&window.Vue&&Vue.component("vue-simple-progress",n.default),e.VueSimpleProgress=n.default,e.default=n.default},function(t,e,i){var s=i(2)(i(3),i(4),null,null);t.exports=s.exports},function(t,e){t.exports=function(t,e,i,s){var n,r=t=t||{},o=typeof t.default;"object"!==o&&"function"!==o||(n=t,r=t.default);var a="function"===typeof r?r.options:r;if(e&&(a.render=e.render,a.staticRenderFns=e.staticRenderFns),i&&(a._scopeId=i),s){var u=Object.create(a.computed||null);Object.keys(s).forEach((function(t){var e=s[t];u[t]=function(){return e}})),a.computed=u}return{esModule:n,exports:r,options:a}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=function(t){return!isNaN(parseFloat(t))&&isFinite(t)};e.default={props:{val:{default:0},max:{default:100},size:{default:3},"bg-color":{type:String,default:"#eee"},"bar-color":{type:String,default:"#2196f3"},"bar-transition":{type:String,default:"all 0.5s ease"},"bar-border-radius":{type:Number,default:0},spacing:{type:Number,default:4},text:{type:String,default:""},"text-align":{type:String,default:"center"},"text-position":{type:String,default:"bottom"},"font-size":{type:Number,default:13},"text-fg-color":{type:String,default:"#222"}},computed:{pct:function(){var t=this.val/this.max*100;return t=t.toFixed(2),Math.min(t,this.max)},size_px:function(){switch(this.size){case"tiny":return 2;case"small":return 4;case"medium":return 8;case"large":return 12;case"big":return 16;case"huge":return 32;case"massive":return 64}return s(this.size)?this.size:32},text_padding:function(){switch(this.size){case"tiny":case"small":case"medium":case"large":case"big":case"huge":case"massive":return Math.min(Math.max(Math.ceil(this.size_px/8),3),12)}return s(this.spacing)?this.spacing:4},text_font_size:function(){switch(this.size){case"tiny":case"small":case"medium":case"large":case"big":case"huge":case"massive":return Math.min(Math.max(Math.ceil(1.4*this.size_px),11),32)}return s(this.fontSize)?this.fontSize:13},progress_style:function(){var t={background:this.bgColor};return"middle"!=this.textPosition&&"inside"!=this.textPosition||(t["position"]="relative",t["min-height"]=this.size_px+"px",t["z-index"]="-2"),this.barBorderRadius>0&&(t["border-radius"]=this.barBorderRadius+"px"),t},bar_style:function(){var t={background:this.barColor,width:this.pct+"%",height:this.size_px+"px",transition:this.barTransition};return this.barBorderRadius>0&&(t["border-radius"]=this.barBorderRadius+"px"),"middle"!=this.textPosition&&"inside"!=this.textPosition||(t["position"]="absolute",t["top"]="0",t["height"]="100%",t["min-height"]=this.size_px+"px",t["z-index"]="-1"),t},text_style:function(){var t={color:this.textFgColor,"font-size":this.text_font_size+"px","text-align":this.textAlign};return"top"!=this.textPosition&&"middle"!=this.textPosition&&"inside"!=this.textPosition||(t["padding-bottom"]=this.text_padding+"px"),"bottom"!=this.textPosition&&"middle"!=this.textPosition&&"inside"!=this.textPosition||(t["padding-top"]=this.text_padding+"px"),t}}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[t.text.length>0&&"top"==t.textPosition?i("div",{staticClass:"vue-simple-progress-text",style:t.text_style},[t._v(t._s(t.text))]):t._e(),t._v(" "),i("div",{staticClass:"vue-simple-progress",style:t.progress_style},[t.text.length>0&&"middle"==t.textPosition?i("div",{staticClass:"vue-simple-progress-text",style:t.text_style},[t._v(t._s(t.text))]):t._e(),t._v(" "),t.text.length>0&&"inside"==t.textPosition?i("div",{staticStyle:{position:"relative",left:"-9999px"},style:t.text_style},[t._v(t._s(t.text))]):t._e(),t._v(" "),i("div",{staticClass:"vue-simple-progress-bar",style:t.bar_style},[t.text.length>0&&"inside"==t.textPosition?i("div",{style:t.text_style},[t._v(t._s(t.text))]):t._e()])]),t._v(" "),t.text.length>0&&"bottom"==t.textPosition?i("div",{staticClass:"vue-simple-progress-text",style:t.text_style},[t._v(t._s(t.text))]):t._e()])},staticRenderFns:[]}}])["default"]}))}}]);
//# sourceMappingURL=461.fa262412.js.map