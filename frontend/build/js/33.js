(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{119:function(t,e,a){"use strict";var o=a(2),i=a(5),s=a(0),n=a.n(s),c=a(3),r=a.n(c),l=a(113),d=a.n(l),p=a(114),u={tag:p.q,noGutters:r.a.bool,className:r.a.string,cssModule:r.a.object,form:r.a.bool},v=function(t){var e=t.className,a=t.cssModule,s=t.noGutters,c=t.tag,r=t.form,l=Object(i.a)(t,["className","cssModule","noGutters","tag","form"]),u=Object(p.m)(d()(e,s?"no-gutters":null,r?"form-row":"row"),a);return n.a.createElement(c,Object(o.a)({},l,{className:u}))};v.propTypes=u,v.defaultProps={tag:"div"},e.a=v},120:function(t,e,a){"use strict";var o=a(2),i=a(5),s=a(0),n=a.n(s),c=a(3),r=a.n(c),l=a(113),d=a.n(l),p=a(114),u=r.a.oneOfType([r.a.number,r.a.string]),v=r.a.oneOfType([r.a.bool,r.a.number,r.a.string,r.a.shape({size:r.a.oneOfType([r.a.bool,r.a.number,r.a.string]),order:u,offset:u})]),m={tag:p.q,xs:v,sm:v,md:v,lg:v,xl:v,className:r.a.string,cssModule:r.a.object,widths:r.a.array},h={tag:"div",widths:["xs","sm","md","lg","xl"]},f=function(t,e,a){return!0===a||""===a?t?"col":"col-"+e:"auto"===a?t?"col-auto":"col-"+e+"-auto":t?"col-"+a:"col-"+e+"-"+a},b=function(t){var e=t.className,a=t.cssModule,s=t.widths,c=t.tag,r=Object(i.a)(t,["className","cssModule","widths","tag"]),l=[];s.forEach((function(e,o){var i=t[e];if(delete r[e],i||""===i){var s=!o;if(Object(p.k)(i)){var n,c=s?"-":"-"+e+"-",u=f(s,e,i.size);l.push(Object(p.m)(d()(((n={})[u]=i.size||""===i.size,n["order"+c+i.order]=i.order||0===i.order,n["offset"+c+i.offset]=i.offset||0===i.offset,n)),a))}else{var v=f(s,e,i);l.push(v)}}})),l.length||l.push("col");var u=Object(p.m)(d()(e,l),a);return n.a.createElement(c,Object(o.a)({},r,{className:u}))};b.propTypes=m,b.defaultProps=h,e.a=b},135:function(t,e,a){"use strict";a.d(e,"a",(function(){return i}));var o=a(0),i=a.n(o).a.createContext({})},136:function(t,e,a){"use strict";function o(){var t=this.constructor.getDerivedStateFromProps(this.props,this.state);null!=t&&this.setState(t)}function i(t){this.setState(function(e){var a=this.constructor.getDerivedStateFromProps(t,e);return null!=a?a:null}.bind(this))}function s(t,e){try{var a=this.props,o=this.state;this.props=t,this.state=e,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(a,o)}finally{this.props=a,this.state=o}}function n(t){var e=t.prototype;if(!e||!e.isReactComponent)throw new Error("Can only polyfill class components");if("function"!=typeof t.getDerivedStateFromProps&&"function"!=typeof e.getSnapshotBeforeUpdate)return t;var a=null,n=null,c=null;if("function"==typeof e.componentWillMount?a="componentWillMount":"function"==typeof e.UNSAFE_componentWillMount&&(a="UNSAFE_componentWillMount"),"function"==typeof e.componentWillReceiveProps?n="componentWillReceiveProps":"function"==typeof e.UNSAFE_componentWillReceiveProps&&(n="UNSAFE_componentWillReceiveProps"),"function"==typeof e.componentWillUpdate?c="componentWillUpdate":"function"==typeof e.UNSAFE_componentWillUpdate&&(c="UNSAFE_componentWillUpdate"),null!==a||null!==n||null!==c){var r=t.displayName||t.name,l="function"==typeof t.getDerivedStateFromProps?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";throw Error("Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n"+r+" uses "+l+" but also contains the following legacy lifecycles:"+(null!==a?"\n  "+a:"")+(null!==n?"\n  "+n:"")+(null!==c?"\n  "+c:"")+"\n\nThe above lifecycles should be removed. Learn more about this warning here:\nhttps://fb.me/react-async-component-lifecycle-hooks")}if("function"==typeof t.getDerivedStateFromProps&&(e.componentWillMount=o,e.componentWillReceiveProps=i),"function"==typeof e.getSnapshotBeforeUpdate){if("function"!=typeof e.componentDidUpdate)throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");e.componentWillUpdate=s;var d=e.componentDidUpdate;e.componentDidUpdate=function(t,e,a){var o=this.__reactInternalSnapshotFlag?this.__reactInternalSnapshot:a;d.call(this,t,e,o)}}return t}a.r(e),a.d(e,"polyfill",(function(){return n})),o.__suppressDeprecationWarning=!0,i.__suppressDeprecationWarning=!0,s.__suppressDeprecationWarning=!0},318:function(t,e,a){"use strict";a.d(e,"a",(function(){return m}));var o=a(2),i=a(5),s=a(0),n=a.n(s),c=a(3),r=a.n(c),l=a(113),d=a.n(l),p=a(135),u=a(114),v={tag:u.q,className:r.a.string,cssModule:r.a.object,tabId:r.a.any};function m(t){var e=t.className,a=t.cssModule,s=t.tabId,c=t.tag,r=Object(i.a)(t,["className","cssModule","tabId","tag"]),l=function(t){return Object(u.m)(d()("tab-pane",e,{active:s===t}),a)};return n.a.createElement(p.a.Consumer,null,(function(t){var e=t.activeTabId;return n.a.createElement(c,Object(o.a)({},r,{className:l(e)}))}))}m.propTypes=v,m.defaultProps={tag:"div"}},319:function(t,e,a){"use strict";var o=a(2),i=a(10),s=a(0),n=a.n(s),c=a(136),r=a(3),l=a.n(r),d=a(113),p=a.n(d),u=a(135),v=a(114),m={tag:v.q,activeTab:l.a.any,className:l.a.string,cssModule:l.a.object},h=function(t){function e(e){var a;return(a=t.call(this,e)||this).state={activeTab:a.props.activeTab},a}return Object(i.a)(e,t),e.getDerivedStateFromProps=function(t,e){return e.activeTab!==t.activeTab?{activeTab:t.activeTab}:null},e.prototype.render=function(){var t=this.props,e=t.className,a=t.cssModule,i=t.tag,s=Object(v.n)(this.props,Object.keys(m)),c=Object(v.m)(p()("tab-content",e),a);return n.a.createElement(u.a.Provider,{value:{activeTabId:this.state.activeTab}},n.a.createElement(i,Object(o.a)({},s,{className:c})))},e}(s.Component);Object(c.polyfill)(h),e.a=h,h.propTypes=m,h.defaultProps={tag:"div"}},493:function(t,e,a){"use strict";a.r(e);var o=a(6),i=a.n(o),s=a(0),n=a.n(s),c=a(471),r=a(318),l=a(119),d=a(120),p=a(472),u=a(469),v=a(470),m=a(319),h=a(113),f=a.n(h),b=i()("i",{className:"icon-calculator"}),g=i()("i",{className:"icon-basket-loaded"}),T=i()("i",{className:"icon-pie-chart"}),N=i()("i",{className:"icon-calculator"}),y=i()("i",{className:"icon-basket-loaded"}),S=i()("i",{className:"icon-pie-chart"}),C=i()("i",{className:"icon-calculator"}),P=i()(c.a,{color:"success"},void 0,"New"),w=i()("i",{className:"icon-basket-loaded"}),U=i()(c.a,{pill:!0,color:"danger"},void 0,"29"),j=i()("i",{className:"icon-pie-chart"});class k extends s.Component{constructor(t){super(t),this.toggle=this.toggle.bind(this),this.state={activeTab:new Array(4).fill("1")}}lorem(){return"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit."}toggle(t,e){var a=this.state.activeTab.slice();a[t]=e,this.setState({activeTab:a})}tabPane(){return n.a.createElement(n.a.Fragment,null,i()(r.a,{tabId:"1"},void 0,"1. ".concat(this.lorem())),i()(r.a,{tabId:"2"},void 0,"2. ".concat(this.lorem())),i()(r.a,{tabId:"3"},void 0,"3. ".concat(this.lorem())))}render(){return i()("div",{className:"animated fadeIn"},void 0,i()(l.a,{},void 0,i()(d.a,{xs:"12",md:"6",className:"mb-4"},void 0,i()(p.a,{tabs:!0},void 0,i()(u.a,{},void 0,i()(v.a,{active:"1"===this.state.activeTab[0],onClick:()=>{this.toggle(0,"1")}},void 0,"Home")),i()(u.a,{},void 0,i()(v.a,{active:"2"===this.state.activeTab[0],onClick:()=>{this.toggle(0,"2")}},void 0,"Profile")),i()(u.a,{},void 0,i()(v.a,{active:"3"===this.state.activeTab[0],onClick:()=>{this.toggle(0,"3")}},void 0,"Messages"))),i()(m.a,{activeTab:this.state.activeTab[0]},void 0,this.tabPane())),i()(d.a,{xs:"12",md:"6",className:"mb-4"},void 0,i()(p.a,{tabs:!0},void 0,i()(u.a,{},void 0,i()(v.a,{active:"1"===this.state.activeTab[1],onClick:()=>{this.toggle(1,"1")}},void 0,b)),i()(u.a,{},void 0,i()(v.a,{active:"2"===this.state.activeTab[1],onClick:()=>{this.toggle(1,"2")}},void 0,g)),i()(u.a,{},void 0,i()(v.a,{active:"3"===this.state.activeTab[1],onClick:()=>{this.toggle(1,"3")}},void 0,T))),i()(m.a,{activeTab:this.state.activeTab[1]},void 0,this.tabPane())),i()(d.a,{xs:"12",md:"6",className:"mb-4"},void 0,i()(p.a,{tabs:!0},void 0,i()(u.a,{},void 0,i()(v.a,{active:"1"===this.state.activeTab[2],onClick:()=>{this.toggle(2,"1")}},void 0,N," ",i()("span",{className:"1"===this.state.activeTab[2]?"":"d-none"},void 0," Calculator"))),i()(u.a,{},void 0,i()(v.a,{active:"2"===this.state.activeTab[2],onClick:()=>{this.toggle(2,"2")}},void 0,y," ",i()("span",{className:"2"===this.state.activeTab[2]?"":"d-none"},void 0," Shopping cart"))),i()(u.a,{},void 0,i()(v.a,{className:f()({active:"3"===this.state.activeTab[2]}),onClick:()=>{this.toggle(2,"3")}},void 0,S," ",i()("span",{className:"3"===this.state.activeTab[2]?"":"d-none"},void 0," Charts")))),i()(m.a,{activeTab:this.state.activeTab[2]},void 0,this.tabPane())),i()(d.a,{xs:"12",md:"6",className:"mb-4"},void 0,i()(p.a,{tabs:!0},void 0,i()(u.a,{},void 0,i()(v.a,{active:"1"===this.state.activeTab[3],onClick:()=>{this.toggle(3,"1")}},void 0,C,i()("span",{className:"1"===this.state.activeTab[3]?"":"d-none"},void 0," Calc")," ",P)),i()(u.a,{},void 0,i()(v.a,{active:"2"===this.state.activeTab[3],onClick:()=>{this.toggle(3,"2")}},void 0,w,i()("span",{className:"2"===this.state.activeTab[3]?"":"d-none"},void 0," Cart")," ",U)),i()(u.a,{},void 0,i()(v.a,{active:"3"===this.state.activeTab[3],onClick:()=>{this.toggle(3,"3")}},void 0,j,i()("span",{className:"3"===this.state.activeTab[3]?"":"d-none"},void 0," Charts")))),i()(m.a,{activeTab:this.state.activeTab[3]},void 0,this.tabPane()))))}}e.default=k}}]);
//# sourceMappingURL=33.js.map