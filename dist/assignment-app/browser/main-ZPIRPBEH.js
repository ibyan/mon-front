import{a as at}from"./chunk-4JQDV5D7.js";import{a as st,b as dt}from"./chunk-3ZOTI7Y5.js";import{a as ot}from"./chunk-UCJEILKV.js";import{a as rt}from"./chunk-BR64ZJQX.js";import{Aa as nt,Ba as it,C as Ge,D as Ye,H as Ue,O as T,S as Xe,V as Ze,W as qe,X as Ke,Y as $e,Z as Je,_ as et,ca as fe,d as Ne,da as V,e as je,ea as ge,f as Ve,ga as Q,i as ze,k as Le,l as K,m as He,n as Qe,o as $,p as pe,q as N,t as j,u as he,w as We,za as tt}from"./chunk-MTLWUJHN.js";import{$ as o,$a as Oe,$b as Z,Ab as ce,Bb as s,Bc as q,Cb as a,D as Ce,Db as O,E as ke,Ea as Ie,F as oe,Kb as D,O as ae,Ob as x,Q as _,Qb as b,Rb as v,Sb as m,T as De,Ta as u,Tb as B,Ub as X,Vb as w,W as Se,Wb as y,X as E,Xa as Pe,Ya as se,Z as L,_a as Fe,aa as Te,ac as g,bb as de,bc as me,cc as c,dc as ue,ea as C,fa as k,gb as p,h as M,hb as P,ia as H,ib as le,ja as R,kc as S,lb as F,ma as W,na as A,qa as Ee,ra as G,s as re,sa as Re,ub as U,vb as h,vc as Be,wa as Y,wb as f,y as xe,ya as I,z,za as Ae}from"./chunk-OT3V3LZO.js";var bt="@",vt=(()=>{class i{doc;delegate;zone;animationType;moduleImpl;_rendererFactoryPromise=null;scheduler=null;injector=o(H);loadingSchedulerFn=o(wt,{optional:!0});_engine;constructor(e,t,n,d,l){this.doc=e,this.delegate=t,this.zone=n,this.animationType=d,this.moduleImpl=l}ngOnDestroy(){this._engine?.flush()}loadImpl(){let e=()=>this.moduleImpl??import("./chunk-LQAZLLZ3.js").then(n=>n),t;return this.loadingSchedulerFn?t=this.loadingSchedulerFn(e):t=e(),t.catch(n=>{throw new De(5300,!1)}).then(({\u0275createEngine:n,\u0275AnimationRendererFactory:d})=>{this._engine=n(this.animationType,this.doc);let l=new d(this.delegate,this._engine,this.zone);return this.delegate=l,l})}createRenderer(e,t){let n=this.delegate.createRenderer(e,t);if(n.\u0275type===0)return n;typeof n.throwOnSyntheticProps=="boolean"&&(n.throwOnSyntheticProps=!1);let d=new _e(n);return t?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(l=>{let _t=l.createRenderer(e,t);d.use(_t),this.scheduler??=this.injector.get(Re,null,{optional:!0}),this.scheduler?.notify(10)}).catch(l=>{d.use(n)}),d}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}componentReplaced(e){this._engine?.flush(),this.delegate.componentReplaced?.(e)}static \u0275fac=function(t){de()};static \u0275prov=Se({token:i,factory:i.\u0275fac})}return i})(),_e=class{delegate;replay=[];\u0275type=1;constructor(r){this.delegate=r}use(r){if(this.delegate=r,this.replay!==null){for(let e of this.replay)e(r);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(r,e){return this.delegate.createElement(r,e)}createComment(r){return this.delegate.createComment(r)}createText(r){return this.delegate.createText(r)}get destroyNode(){return this.delegate.destroyNode}appendChild(r,e){this.delegate.appendChild(r,e)}insertBefore(r,e,t,n){this.delegate.insertBefore(r,e,t,n)}removeChild(r,e,t,n){this.delegate.removeChild(r,e,t,n)}selectRootElement(r,e){return this.delegate.selectRootElement(r,e)}parentNode(r){return this.delegate.parentNode(r)}nextSibling(r){return this.delegate.nextSibling(r)}setAttribute(r,e,t,n){this.delegate.setAttribute(r,e,t,n)}removeAttribute(r,e,t){this.delegate.removeAttribute(r,e,t)}addClass(r,e){this.delegate.addClass(r,e)}removeClass(r,e){this.delegate.removeClass(r,e)}setStyle(r,e,t,n){this.delegate.setStyle(r,e,t,n)}removeStyle(r,e,t){this.delegate.removeStyle(r,e,t)}setProperty(r,e,t){this.shouldReplay(e)&&this.replay.push(n=>n.setProperty(r,e,t)),this.delegate.setProperty(r,e,t)}setValue(r,e){this.delegate.setValue(r,e)}listen(r,e,t,n){return this.shouldReplay(e)&&this.replay.push(d=>d.listen(r,e,t,n)),this.delegate.listen(r,e,t,n)}shouldReplay(r){return this.replay!==null&&r.startsWith(bt)}},wt=new L("");function lt(i="animations"){return Pe("NgAsyncAnimations"),Te([{provide:Fe,useFactory:()=>new vt(o(R),o(je),o(A),i)},{provide:Ie,useValue:i==="noop"?"NoopAnimations":"BrowserAnimations"}])}var be=(i,r)=>{let e=o($),t=o(K);return e.isLoggedIn()?!0:(t.navigate(["/login"]),!1)};var ct=[{path:"",redirectTo:"/home",pathMatch:"full"},{path:"login",loadComponent:()=>import("./chunk-BLE5XRVI.js").then(i=>i.Login)},{path:"register",loadComponent:()=>import("./chunk-A5KUOLQH.js").then(i=>i.Register)},{path:"home",loadComponent:()=>import("./chunk-NCSFAHSV.js").then(i=>i.Assignments)},{path:"add",loadComponent:()=>import("./chunk-D5CSBFEQ.js").then(i=>i.AddAssignment),canActivate:[be]},{path:"assignments/:id",loadComponent:()=>import("./chunk-LNY5CREO.js").then(i=>i.AssignmentDetail)},{path:"assignments/:id/edit",loadComponent:()=>import("./chunk-FJWMRCA3.js").then(i=>i.EditAssignment),canActivate:[be]},{path:"**",redirectTo:"/home"}];var mt={providers:[Ee(),Qe(ct),ze(),lt()]};var yt=["*",[["mat-toolbar-row"]]],Mt=["*","mat-toolbar-row"],xt=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275dir=le({type:i,selectors:[["mat-toolbar-row"]],hostAttrs:[1,"mat-toolbar-row"],exportAs:["matToolbarRow"]})}return i})(),ut=(()=>{class i{_elementRef=o(I);_platform=o(j);_document=o(R);color;_toolbarRows;constructor(){}ngAfterViewInit(){this._platform.isBrowser&&(this._checkToolbarMixedModes(),this._toolbarRows.changes.subscribe(()=>this._checkToolbarMixedModes()))}_checkToolbarMixedModes(){this._toolbarRows.length}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=p({type:i,selectors:[["mat-toolbar"]],contentQueries:function(t,n,d){if(t&1&&B(d,xt,5),t&2){let l;w(l=y())&&(n._toolbarRows=l)}},hostAttrs:[1,"mat-toolbar"],hostVars:6,hostBindings:function(t,n){t&2&&(me(n.color?"mat-"+n.color:""),g("mat-toolbar-multiple-rows",n._toolbarRows.length>0)("mat-toolbar-single-row",n._toolbarRows.length===0))},inputs:{color:"color"},exportAs:["matToolbar"],ngContentSelectors:Mt,decls:2,vars:0,template:function(t,n){t&1&&(v(yt),m(0),m(1,1))},styles:[`.mat-toolbar {
  background: var(--mat-toolbar-container-background-color, var(--mat-sys-surface));
  color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));
}
.mat-toolbar, .mat-toolbar h1, .mat-toolbar h2, .mat-toolbar h3, .mat-toolbar h4, .mat-toolbar h5, .mat-toolbar h6 {
  font-family: var(--mat-toolbar-title-text-font, var(--mat-sys-title-large-font));
  font-size: var(--mat-toolbar-title-text-size, var(--mat-sys-title-large-size));
  line-height: var(--mat-toolbar-title-text-line-height, var(--mat-sys-title-large-line-height));
  font-weight: var(--mat-toolbar-title-text-weight, var(--mat-sys-title-large-weight));
  letter-spacing: var(--mat-toolbar-title-text-tracking, var(--mat-sys-title-large-tracking));
  margin: 0;
}
@media (forced-colors: active) {
  .mat-toolbar {
    outline: solid 1px;
  }
}
.mat-toolbar .mat-form-field-underline,
.mat-toolbar .mat-form-field-ripple,
.mat-toolbar .mat-focused .mat-form-field-ripple {
  background-color: currentColor;
}
.mat-toolbar .mat-form-field-label,
.mat-toolbar .mat-focused .mat-form-field-label,
.mat-toolbar .mat-select-value,
.mat-toolbar .mat-select-arrow,
.mat-toolbar .mat-form-field.mat-focused .mat-select-arrow {
  color: inherit;
}
.mat-toolbar .mat-input-element {
  caret-color: currentColor;
}
.mat-toolbar .mat-mdc-button-base.mat-mdc-button-base.mat-unthemed {
  --mat-button-text-label-text-color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));
  --mat-button-outlined-label-text-color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));
}

.mat-toolbar-row, .mat-toolbar-single-row {
  display: flex;
  box-sizing: border-box;
  padding: 0 16px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  white-space: nowrap;
  height: var(--mat-toolbar-standard-height, 64px);
}
@media (max-width: 599px) {
  .mat-toolbar-row, .mat-toolbar-single-row {
    height: var(--mat-toolbar-mobile-height, 56px);
  }
}

.mat-toolbar-multiple-rows {
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  width: 100%;
  min-height: var(--mat-toolbar-standard-height, 64px);
}
@media (max-width: 599px) {
  .mat-toolbar-multiple-rows {
    min-height: var(--mat-toolbar-mobile-height, 56px);
  }
}
`],encapsulation:2,changeDetection:0})}return i})();var pt=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=P({type:i});static \u0275inj=E({imports:[N]})}return i})();var ne=["*"],Dt=["content"],St=[[["mat-drawer"]],[["mat-drawer-content"]],"*"],Tt=["mat-drawer","mat-drawer-content","*"];function Et(i,r){if(i&1){let e=D();s(0,"div",1),x("click",function(){C(e);let n=b();return k(n._onBackdropClicked())}),a()}if(i&2){let e=b();g("mat-drawer-shown",e._isShowingBackdrop())}}function Rt(i,r){i&1&&(s(0,"mat-drawer-content"),m(1,2),a())}var At=[[["mat-sidenav"]],[["mat-sidenav-content"]],"*"],It=["mat-sidenav","mat-sidenav-content","*"];function Pt(i,r){if(i&1){let e=D();s(0,"div",1),x("click",function(){C(e);let n=b();return k(n._onBackdropClicked())}),a()}if(i&2){let e=b();g("mat-drawer-shown",e._isShowingBackdrop())}}function Ft(i,r){i&1&&(s(0,"mat-sidenav-content"),m(1,2),a())}var Ot=`.mat-drawer-container {
  position: relative;
  z-index: 1;
  color: var(--mat-sidenav-content-text-color, var(--mat-sys-on-background));
  background-color: var(--mat-sidenav-content-background-color, var(--mat-sys-background));
  box-sizing: border-box;
  display: block;
  overflow: hidden;
}
.mat-drawer-container[fullscreen] {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
}
.mat-drawer-container[fullscreen].mat-drawer-container-has-open {
  overflow: hidden;
}
.mat-drawer-container.mat-drawer-container-explicit-backdrop .mat-drawer-side {
  z-index: 3;
}
.mat-drawer-container.ng-animate-disabled .mat-drawer-backdrop,
.mat-drawer-container.ng-animate-disabled .mat-drawer-content, .ng-animate-disabled .mat-drawer-container .mat-drawer-backdrop,
.ng-animate-disabled .mat-drawer-container .mat-drawer-content {
  transition: none;
}

.mat-drawer-backdrop {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  display: block;
  z-index: 3;
  visibility: hidden;
}
.mat-drawer-backdrop.mat-drawer-shown {
  visibility: visible;
  background-color: var(--mat-sidenav-scrim-color, color-mix(in srgb, var(--mat-sys-neutral-variant20) 40%, transparent));
}
.mat-drawer-transition .mat-drawer-backdrop {
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: background-color, visibility;
}
@media (forced-colors: active) {
  .mat-drawer-backdrop {
    opacity: 0.5;
  }
}

.mat-drawer-content {
  position: relative;
  z-index: 1;
  display: block;
  height: 100%;
  overflow: auto;
}
.mat-drawer-content.mat-drawer-content-hidden {
  opacity: 0;
}
.mat-drawer-transition .mat-drawer-content {
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: transform, margin-left, margin-right;
}

.mat-drawer {
  position: relative;
  z-index: 4;
  color: var(--mat-sidenav-container-text-color, var(--mat-sys-on-surface-variant));
  box-shadow: var(--mat-sidenav-container-elevation-shadow, none);
  background-color: var(--mat-sidenav-container-background-color, var(--mat-sys-surface));
  border-top-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  width: var(--mat-sidenav-container-width, 360px);
  display: block;
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 3;
  outline: 0;
  box-sizing: border-box;
  overflow-y: auto;
  transform: translate3d(-100%, 0, 0);
}
@media (forced-colors: active) {
  .mat-drawer, [dir=rtl] .mat-drawer.mat-drawer-end {
    border-right: solid 1px currentColor;
  }
}
@media (forced-colors: active) {
  [dir=rtl] .mat-drawer, .mat-drawer.mat-drawer-end {
    border-left: solid 1px currentColor;
    border-right: none;
  }
}
.mat-drawer.mat-drawer-side {
  z-index: 2;
}
.mat-drawer.mat-drawer-end {
  right: 0;
  transform: translate3d(100%, 0, 0);
  border-top-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
[dir=rtl] .mat-drawer {
  border-top-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  transform: translate3d(100%, 0, 0);
}
[dir=rtl] .mat-drawer.mat-drawer-end {
  border-top-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  left: 0;
  right: auto;
  transform: translate3d(-100%, 0, 0);
}
.mat-drawer-transition .mat-drawer {
  transition: transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
}
.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) {
  visibility: hidden;
  box-shadow: none;
}
.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) .mat-drawer-inner-container {
  display: none;
}
.mat-drawer.mat-drawer-opened.mat-drawer-opened {
  transform: none;
}

.mat-drawer-side {
  box-shadow: none;
  border-right-color: var(--mat-sidenav-container-divider-color, transparent);
  border-right-width: 1px;
  border-right-style: solid;
}
.mat-drawer-side.mat-drawer-end {
  border-left-color: var(--mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side {
  border-left-color: var(--mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side.mat-drawer-end {
  border-right-color: var(--mat-sidenav-container-divider-color, transparent);
  border-right-width: 1px;
  border-right-style: solid;
  border-left: none;
}

.mat-drawer-inner-container {
  width: 100%;
  height: 100%;
  overflow: auto;
}

.mat-sidenav-fixed {
  position: fixed;
}
`;var Bt=new L("MAT_DRAWER_DEFAULT_AUTOSIZE",{providedIn:"root",factory:()=>!1}),ye=new L("MAT_DRAWER_CONTAINER"),ee=(()=>{class i extends V{_platform=o(j);_changeDetectorRef=o(q);_container=o(we);constructor(){let e=o(I),t=o(fe),n=o(A);super(e,t,n)}ngAfterContentInit(){this._container._contentMarginChanges.subscribe(()=>{this._changeDetectorRef.markForCheck()})}_shouldBeHidden(){if(this._platform.isBrowser)return!1;let{start:e,end:t}=this._container;return e!=null&&e.mode!=="over"&&e.opened||t!=null&&t.mode!=="over"&&t.opened}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=p({type:i,selectors:[["mat-drawer-content"]],hostAttrs:[1,"mat-drawer-content"],hostVars:6,hostBindings:function(t,n){t&2&&(Z("margin-left",n._container._contentMargins.left,"px")("margin-right",n._container._contentMargins.right,"px"),g("mat-drawer-content-hidden",n._shouldBeHidden()))},features:[S([{provide:V,useExisting:i}]),F],ngContentSelectors:ne,decls:1,vars:0,template:function(t,n){t&1&&(v(),m(0))},encapsulation:2,changeDetection:0})}return i})(),ve=(()=>{class i{_elementRef=o(I);_focusTrapFactory=o(Ye);_focusMonitor=o(We);_platform=o(j);_ngZone=o(A);_renderer=o(Oe);_interactivityChecker=o(Ge);_doc=o(R);_container=o(ye,{optional:!0});_focusTrap=null;_elementFocusedBeforeDrawerWasOpened=null;_eventCleanups;_isAttached=!1;_anchor=null;get position(){return this._position}set position(e){e=e==="end"?"end":"start",e!==this._position&&(this._isAttached&&this._updatePositionInParent(e),this._position=e,this.onPositionChanged.emit())}_position="start";get mode(){return this._mode}set mode(e){this._mode=e,this._updateFocusTrapState(),this._modeChanged.next()}_mode="over";get disableClose(){return this._disableClose}set disableClose(e){this._disableClose=T(e)}_disableClose=!1;get autoFocus(){let e=this._autoFocus;return e??(this.mode==="side"?"dialog":"first-tabbable")}set autoFocus(e){(e==="true"||e==="false"||e==null)&&(e=T(e)),this._autoFocus=e}_autoFocus;get opened(){return this._opened()}set opened(e){this.toggle(T(e))}_opened=G(!1);_openedVia=null;_animationStarted=new M;_animationEnd=new M;openedChange=new W(!0);_openedStream=this.openedChange.pipe(z(e=>e),re(()=>{}));openedStart=this._animationStarted.pipe(z(()=>this.opened),oe(void 0));_closedStream=this.openedChange.pipe(z(e=>!e),re(()=>{}));closedStart=this._animationStarted.pipe(z(()=>!this.opened),oe(void 0));_destroyed=new M;onPositionChanged=new W;_content;_modeChanged=new M;_injector=o(H);_changeDetectorRef=o(q);constructor(){this.openedChange.pipe(_(this._destroyed)).subscribe(e=>{e?(this._elementFocusedBeforeDrawerWasOpened=this._doc.activeElement,this._takeFocus()):this._isFocusWithinDrawer()&&this._restoreFocus(this._openedVia||"program")}),this._eventCleanups=this._ngZone.runOutsideAngular(()=>{let e=this._renderer,t=this._elementRef.nativeElement;return[e.listen(t,"keydown",n=>{n.keyCode===27&&!this.disableClose&&!Ue(n)&&this._ngZone.run(()=>{this.close(),n.stopPropagation(),n.preventDefault()})}),e.listen(t,"transitionend",this._handleTransitionEvent),e.listen(t,"transitioncancel",this._handleTransitionEvent)]}),this._animationEnd.subscribe(()=>{this.openedChange.emit(this.opened)})}_forceFocus(e,t){this._interactivityChecker.isFocusable(e)||(e.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let n=()=>{d(),l(),e.removeAttribute("tabindex")},d=this._renderer.listen(e,"blur",n),l=this._renderer.listen(e,"mousedown",n)})),e.focus(t)}_focusByCssSelector(e,t){let n=this._elementRef.nativeElement.querySelector(e);n&&this._forceFocus(n,t)}_takeFocus(){if(!this._focusTrap)return;let e=this._elementRef.nativeElement;switch(this.autoFocus){case!1:case"dialog":return;case!0:case"first-tabbable":se(()=>{!this._focusTrap.focusInitialElement()&&typeof e.focus=="function"&&e.focus()},{injector:this._injector});break;case"first-heading":this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]');break;default:this._focusByCssSelector(this.autoFocus);break}}_restoreFocus(e){this.autoFocus!=="dialog"&&(this._elementFocusedBeforeDrawerWasOpened?this._focusMonitor.focusVia(this._elementFocusedBeforeDrawerWasOpened,e):this._elementRef.nativeElement.blur(),this._elementFocusedBeforeDrawerWasOpened=null)}_isFocusWithinDrawer(){let e=this._doc.activeElement;return!!e&&this._elementRef.nativeElement.contains(e)}ngAfterViewInit(){this._isAttached=!0,this._position==="end"&&this._updatePositionInParent("end"),this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._updateFocusTrapState())}ngOnDestroy(){this._eventCleanups.forEach(e=>e()),this._focusTrap?.destroy(),this._anchor?.remove(),this._anchor=null,this._animationStarted.complete(),this._animationEnd.complete(),this._modeChanged.complete(),this._destroyed.next(),this._destroyed.complete()}open(e){return this.toggle(!0,e)}close(){return this.toggle(!1)}_closeViaBackdropClick(){return this._setOpen(!1,!0,"mouse")}toggle(e=!this.opened,t){e&&t&&(this._openedVia=t);let n=this._setOpen(e,!e&&this._isFocusWithinDrawer(),this._openedVia||"program");return e||(this._openedVia=null),n}_setOpen(e,t,n){return e===this.opened?Promise.resolve(e?"open":"close"):(this._opened.set(e),this._container?._transitionsEnabled?(this._setIsAnimating(!0),setTimeout(()=>this._animationStarted.next())):setTimeout(()=>{this._animationStarted.next(),this._animationEnd.next()}),this._elementRef.nativeElement.classList.toggle("mat-drawer-opened",e),!e&&t&&this._restoreFocus(n),this._changeDetectorRef.markForCheck(),this._updateFocusTrapState(),new Promise(d=>{this.openedChange.pipe(ke(1)).subscribe(l=>d(l?"open":"close"))}))}_setIsAnimating(e){this._elementRef.nativeElement.classList.toggle("mat-drawer-animating",e)}_getWidth(){return this._elementRef.nativeElement.offsetWidth||0}_updateFocusTrapState(){this._focusTrap&&(this._focusTrap.enabled=this.opened&&!!this._container?._isShowingBackdrop())}_updatePositionInParent(e){if(!this._platform.isBrowser)return;let t=this._elementRef.nativeElement,n=t.parentNode;e==="end"?(this._anchor||(this._anchor=this._doc.createComment("mat-drawer-anchor"),n.insertBefore(this._anchor,t)),n.appendChild(t)):this._anchor&&this._anchor.parentNode.insertBefore(t,this._anchor)}_handleTransitionEvent=e=>{let t=this._elementRef.nativeElement;e.target===t&&this._ngZone.run(()=>{e.type==="transitionend"&&this._setIsAnimating(!1),this._animationEnd.next(e)})};static \u0275fac=function(t){return new(t||i)};static \u0275cmp=p({type:i,selectors:[["mat-drawer"]],viewQuery:function(t,n){if(t&1&&X(Dt,5),t&2){let d;w(d=y())&&(n._content=d.first)}},hostAttrs:[1,"mat-drawer"],hostVars:12,hostBindings:function(t,n){t&2&&(U("align",null)("tabIndex",n.mode!=="side"?"-1":null),Z("visibility",!n._container&&!n.opened?"hidden":null),g("mat-drawer-end",n.position==="end")("mat-drawer-over",n.mode==="over")("mat-drawer-push",n.mode==="push")("mat-drawer-side",n.mode==="side"))},inputs:{position:"position",mode:"mode",disableClose:"disableClose",autoFocus:"autoFocus",opened:"opened"},outputs:{openedChange:"openedChange",_openedStream:"opened",openedStart:"openedStart",_closedStream:"closed",closedStart:"closedStart",onPositionChanged:"positionChanged"},exportAs:["matDrawer"],ngContentSelectors:ne,decls:3,vars:0,consts:[["content",""],["cdkScrollable","",1,"mat-drawer-inner-container"]],template:function(t,n){t&1&&(v(),s(0,"div",1,0),m(2),a())},dependencies:[V],encapsulation:2,changeDetection:0})}return i})(),we=(()=>{class i{_dir=o(pe,{optional:!0});_element=o(I);_ngZone=o(A);_changeDetectorRef=o(q);_animationDisabled=Xe();_transitionsEnabled=!1;_allDrawers;_drawers=new Ae;_content;_userContent;get start(){return this._start}get end(){return this._end}get autosize(){return this._autosize}set autosize(e){this._autosize=T(e)}_autosize=o(Bt);get hasBackdrop(){return this._drawerHasBackdrop(this._start)||this._drawerHasBackdrop(this._end)}set hasBackdrop(e){this._backdropOverride=e==null?null:T(e)}_backdropOverride=null;backdropClick=new W;_start=null;_end=null;_left=null;_right=null;_destroyed=new M;_doCheckSubject=new M;_contentMargins={left:null,right:null};_contentMarginChanges=new M;get scrollable(){return this._userContent||this._content}_injector=o(H);constructor(){let e=o(j),t=o(ge);this._dir?.change.pipe(_(this._destroyed)).subscribe(()=>{this._validateDrawers(),this.updateContentMargins()}),t.change().pipe(_(this._destroyed)).subscribe(()=>this.updateContentMargins()),!this._animationDisabled&&e.isBrowser&&this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._element.nativeElement.classList.add("mat-drawer-transition"),this._transitionsEnabled=!0},200)})}ngAfterContentInit(){this._allDrawers.changes.pipe(ae(this._allDrawers),_(this._destroyed)).subscribe(e=>{this._drawers.reset(e.filter(t=>!t._container||t._container===this)),this._drawers.notifyOnChanges()}),this._drawers.changes.pipe(ae(null)).subscribe(()=>{this._validateDrawers(),this._drawers.forEach(e=>{this._watchDrawerToggle(e),this._watchDrawerPosition(e),this._watchDrawerMode(e)}),(!this._drawers.length||this._isDrawerOpen(this._start)||this._isDrawerOpen(this._end))&&this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),this._ngZone.runOutsideAngular(()=>{this._doCheckSubject.pipe(Ce(10),_(this._destroyed)).subscribe(()=>this.updateContentMargins())})}ngOnDestroy(){this._contentMarginChanges.complete(),this._doCheckSubject.complete(),this._drawers.destroy(),this._destroyed.next(),this._destroyed.complete()}open(){this._drawers.forEach(e=>e.open())}close(){this._drawers.forEach(e=>e.close())}updateContentMargins(){let e=0,t=0;if(this._left&&this._left.opened){if(this._left.mode=="side")e+=this._left._getWidth();else if(this._left.mode=="push"){let n=this._left._getWidth();e+=n,t-=n}}if(this._right&&this._right.opened){if(this._right.mode=="side")t+=this._right._getWidth();else if(this._right.mode=="push"){let n=this._right._getWidth();t+=n,e-=n}}e=e||null,t=t||null,(e!==this._contentMargins.left||t!==this._contentMargins.right)&&(this._contentMargins={left:e,right:t},this._ngZone.run(()=>this._contentMarginChanges.next(this._contentMargins)))}ngDoCheck(){this._autosize&&this._isPushed()&&this._ngZone.runOutsideAngular(()=>this._doCheckSubject.next())}_watchDrawerToggle(e){e._animationStarted.pipe(_(this._drawers.changes)).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),e.mode!=="side"&&e.openedChange.pipe(_(this._drawers.changes)).subscribe(()=>this._setContainerClass(e.opened))}_watchDrawerPosition(e){e.onPositionChanged.pipe(_(this._drawers.changes)).subscribe(()=>{se({read:()=>this._validateDrawers()},{injector:this._injector})})}_watchDrawerMode(e){e._modeChanged.pipe(_(xe(this._drawers.changes,this._destroyed))).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck()})}_setContainerClass(e){let t=this._element.nativeElement.classList,n="mat-drawer-container-has-open";e?t.add(n):t.remove(n)}_validateDrawers(){this._start=this._end=null,this._drawers.forEach(e=>{e.position=="end"?(this._end!=null,this._end=e):(this._start!=null,this._start=e)}),this._right=this._left=null,this._dir&&this._dir.value==="rtl"?(this._left=this._end,this._right=this._start):(this._left=this._start,this._right=this._end)}_isPushed(){return this._isDrawerOpen(this._start)&&this._start.mode!="over"||this._isDrawerOpen(this._end)&&this._end.mode!="over"}_onBackdropClicked(){this.backdropClick.emit(),this._closeModalDrawersViaBackdrop()}_closeModalDrawersViaBackdrop(){[this._start,this._end].filter(e=>e&&!e.disableClose&&this._drawerHasBackdrop(e)).forEach(e=>e._closeViaBackdropClick())}_isShowingBackdrop(){return this._isDrawerOpen(this._start)&&this._drawerHasBackdrop(this._start)||this._isDrawerOpen(this._end)&&this._drawerHasBackdrop(this._end)}_isDrawerOpen(e){return e!=null&&e.opened}_drawerHasBackdrop(e){return this._backdropOverride==null?!!e&&e.mode!=="side":this._backdropOverride}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=p({type:i,selectors:[["mat-drawer-container"]],contentQueries:function(t,n,d){if(t&1&&B(d,ee,5)(d,ve,5),t&2){let l;w(l=y())&&(n._content=l.first),w(l=y())&&(n._allDrawers=l)}},viewQuery:function(t,n){if(t&1&&X(ee,5),t&2){let d;w(d=y())&&(n._userContent=d.first)}},hostAttrs:[1,"mat-drawer-container"],hostVars:2,hostBindings:function(t,n){t&2&&g("mat-drawer-container-explicit-backdrop",n._backdropOverride)},inputs:{autosize:"autosize",hasBackdrop:"hasBackdrop"},outputs:{backdropClick:"backdropClick"},exportAs:["matDrawerContainer"],features:[S([{provide:ye,useExisting:i}])],ngContentSelectors:Tt,decls:4,vars:2,consts:[[1,"mat-drawer-backdrop",3,"mat-drawer-shown"],[1,"mat-drawer-backdrop",3,"click"]],template:function(t,n){t&1&&(v(St),h(0,Et,1,2,"div",0),m(1),m(2,1),h(3,Rt,2,0,"mat-drawer-content")),t&2&&(f(n.hasBackdrop?0:-1),u(3),f(n._content?-1:3))},dependencies:[ee],styles:[`.mat-drawer-container {
  position: relative;
  z-index: 1;
  color: var(--mat-sidenav-content-text-color, var(--mat-sys-on-background));
  background-color: var(--mat-sidenav-content-background-color, var(--mat-sys-background));
  box-sizing: border-box;
  display: block;
  overflow: hidden;
}
.mat-drawer-container[fullscreen] {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
}
.mat-drawer-container[fullscreen].mat-drawer-container-has-open {
  overflow: hidden;
}
.mat-drawer-container.mat-drawer-container-explicit-backdrop .mat-drawer-side {
  z-index: 3;
}
.mat-drawer-container.ng-animate-disabled .mat-drawer-backdrop,
.mat-drawer-container.ng-animate-disabled .mat-drawer-content, .ng-animate-disabled .mat-drawer-container .mat-drawer-backdrop,
.ng-animate-disabled .mat-drawer-container .mat-drawer-content {
  transition: none;
}

.mat-drawer-backdrop {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  display: block;
  z-index: 3;
  visibility: hidden;
}
.mat-drawer-backdrop.mat-drawer-shown {
  visibility: visible;
  background-color: var(--mat-sidenav-scrim-color, color-mix(in srgb, var(--mat-sys-neutral-variant20) 40%, transparent));
}
.mat-drawer-transition .mat-drawer-backdrop {
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: background-color, visibility;
}
@media (forced-colors: active) {
  .mat-drawer-backdrop {
    opacity: 0.5;
  }
}

.mat-drawer-content {
  position: relative;
  z-index: 1;
  display: block;
  height: 100%;
  overflow: auto;
}
.mat-drawer-content.mat-drawer-content-hidden {
  opacity: 0;
}
.mat-drawer-transition .mat-drawer-content {
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: transform, margin-left, margin-right;
}

.mat-drawer {
  position: relative;
  z-index: 4;
  color: var(--mat-sidenav-container-text-color, var(--mat-sys-on-surface-variant));
  box-shadow: var(--mat-sidenav-container-elevation-shadow, none);
  background-color: var(--mat-sidenav-container-background-color, var(--mat-sys-surface));
  border-top-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  width: var(--mat-sidenav-container-width, 360px);
  display: block;
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 3;
  outline: 0;
  box-sizing: border-box;
  overflow-y: auto;
  transform: translate3d(-100%, 0, 0);
}
@media (forced-colors: active) {
  .mat-drawer, [dir=rtl] .mat-drawer.mat-drawer-end {
    border-right: solid 1px currentColor;
  }
}
@media (forced-colors: active) {
  [dir=rtl] .mat-drawer, .mat-drawer.mat-drawer-end {
    border-left: solid 1px currentColor;
    border-right: none;
  }
}
.mat-drawer.mat-drawer-side {
  z-index: 2;
}
.mat-drawer.mat-drawer-end {
  right: 0;
  transform: translate3d(100%, 0, 0);
  border-top-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
[dir=rtl] .mat-drawer {
  border-top-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  transform: translate3d(100%, 0, 0);
}
[dir=rtl] .mat-drawer.mat-drawer-end {
  border-top-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  left: 0;
  right: auto;
  transform: translate3d(-100%, 0, 0);
}
.mat-drawer-transition .mat-drawer {
  transition: transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
}
.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) {
  visibility: hidden;
  box-shadow: none;
}
.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) .mat-drawer-inner-container {
  display: none;
}
.mat-drawer.mat-drawer-opened.mat-drawer-opened {
  transform: none;
}

.mat-drawer-side {
  box-shadow: none;
  border-right-color: var(--mat-sidenav-container-divider-color, transparent);
  border-right-width: 1px;
  border-right-style: solid;
}
.mat-drawer-side.mat-drawer-end {
  border-left-color: var(--mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side {
  border-left-color: var(--mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side.mat-drawer-end {
  border-right-color: var(--mat-sidenav-container-divider-color, transparent);
  border-right-width: 1px;
  border-right-style: solid;
  border-left: none;
}

.mat-drawer-inner-container {
  width: 100%;
  height: 100%;
  overflow: auto;
}

.mat-sidenav-fixed {
  position: fixed;
}
`],encapsulation:2,changeDetection:0})}return i})(),te=(()=>{class i extends ee{static \u0275fac=(()=>{let e;return function(n){return(e||(e=Y(i)))(n||i)}})();static \u0275cmp=p({type:i,selectors:[["mat-sidenav-content"]],hostAttrs:[1,"mat-drawer-content","mat-sidenav-content"],features:[S([{provide:V,useExisting:i}]),F],ngContentSelectors:ne,decls:1,vars:0,template:function(t,n){t&1&&(v(),m(0))},encapsulation:2,changeDetection:0})}return i})(),Me=(()=>{class i extends ve{get fixedInViewport(){return this._fixedInViewport}set fixedInViewport(e){this._fixedInViewport=T(e)}_fixedInViewport=!1;get fixedTopGap(){return this._fixedTopGap}set fixedTopGap(e){this._fixedTopGap=he(e)}_fixedTopGap=0;get fixedBottomGap(){return this._fixedBottomGap}set fixedBottomGap(e){this._fixedBottomGap=he(e)}_fixedBottomGap=0;static \u0275fac=(()=>{let e;return function(n){return(e||(e=Y(i)))(n||i)}})();static \u0275cmp=p({type:i,selectors:[["mat-sidenav"]],hostAttrs:[1,"mat-drawer","mat-sidenav"],hostVars:16,hostBindings:function(t,n){t&2&&(U("tabIndex",n.mode!=="side"?"-1":null)("align",null),Z("top",n.fixedInViewport?n.fixedTopGap:null,"px")("bottom",n.fixedInViewport?n.fixedBottomGap:null,"px"),g("mat-drawer-end",n.position==="end")("mat-drawer-over",n.mode==="over")("mat-drawer-push",n.mode==="push")("mat-drawer-side",n.mode==="side")("mat-sidenav-fixed",n.fixedInViewport))},inputs:{fixedInViewport:"fixedInViewport",fixedTopGap:"fixedTopGap",fixedBottomGap:"fixedBottomGap"},exportAs:["matSidenav"],features:[S([{provide:ve,useExisting:i}]),F],ngContentSelectors:ne,decls:3,vars:0,consts:[["content",""],["cdkScrollable","",1,"mat-drawer-inner-container"]],template:function(t,n){t&1&&(v(),s(0,"div",1,0),m(2),a())},dependencies:[V],encapsulation:2,changeDetection:0})}return i})(),ht=(()=>{class i extends we{_allDrawers=void 0;_content=void 0;static \u0275fac=(()=>{let e;return function(n){return(e||(e=Y(i)))(n||i)}})();static \u0275cmp=p({type:i,selectors:[["mat-sidenav-container"]],contentQueries:function(t,n,d){if(t&1&&B(d,te,5)(d,Me,5),t&2){let l;w(l=y())&&(n._content=l.first),w(l=y())&&(n._allDrawers=l)}},hostAttrs:[1,"mat-drawer-container","mat-sidenav-container"],hostVars:2,hostBindings:function(t,n){t&2&&g("mat-drawer-container-explicit-backdrop",n._backdropOverride)},exportAs:["matSidenavContainer"],features:[S([{provide:ye,useExisting:i},{provide:we,useExisting:i}]),F],ngContentSelectors:It,decls:4,vars:2,consts:[[1,"mat-drawer-backdrop",3,"mat-drawer-shown"],[1,"mat-drawer-backdrop",3,"click"]],template:function(t,n){t&1&&(v(At),h(0,Pt,1,2,"div",0),m(1),m(2,1),h(3,Ft,2,0,"mat-sidenav-content")),t&2&&(f(n.hasBackdrop?0:-1),u(3),f(n._content?-1:3))},dependencies:[te],styles:[Ot],encapsulation:2,changeDetection:0})}return i})(),ft=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=P({type:i});static \u0275inj=E({imports:[Q,N,Q]})}return i})();var gt=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=P({type:i});static \u0275inj=E({imports:[qe,tt,N,Q]})}return i})();function jt(i,r){i&1&&(s(0,"span",18),c(1,"ADMIN"),a())}function Vt(i,r){if(i&1){let e=D();s(0,"span",16)(1,"mat-icon"),c(2,"account_circle"),a(),s(3,"span",17),c(4),a(),h(5,jt,2,0,"span",18),a(),s(6,"button",19),x("click",function(){C(e);let n=b();return k(n.logout())}),s(7,"mat-icon"),c(8,"logout"),a()()}if(i&2){let e,t=b();u(4),ue((e=t.currentUser())==null?null:e.username),u(),f(t.isAdmin()?5:-1)}}function zt(i,r){i&1&&(s(0,"a",5)(1,"button",20)(2,"mat-icon"),c(3,"login"),a(),c(4," Connexion "),a()())}function Lt(i,r){i&1&&(s(0,"a",14)(1,"button",13)(2,"mat-icon"),c(3,"add_circle"),a(),s(4,"span"),c(5,"Ajouter"),a()()())}function Ht(i,r){i&1&&(s(0,"a",21)(1,"button",13)(2,"mat-icon"),c(3,"login"),a(),s(4,"span"),c(5,"Connexion"),a()()(),s(6,"a",22)(7,"button",13)(8,"mat-icon"),c(9,"person_add"),a(),s(10,"span"),c(11,"Inscription"),a()()())}function Qt(i,r){if(i&1){let e=D();O(0,"mat-divider"),s(1,"button",23),x("click",function(){C(e);let n=b();return k(n.logout())}),s(2,"mat-icon"),c(3,"logout"),a(),s(4,"span"),c(5,"D\xE9connexion"),a()()}}var ie=class i{authService=o($);router=o(K);snackBar=o(nt);titre="Assignments ESATIC";sidenavOpened=G(!0);isLoggedIn=this.authService.isAuthenticated;isAdmin=Be(()=>this.authService.isAdmin());currentUser=this.authService.currentUser;logout(){this.authService.logOut(),this.snackBar.open("D\xE9connexion r\xE9ussie. \xC0 bient\xF4t !","Fermer",{duration:3e3})}toggleSidenav(){this.sidenavOpened.update(r=>!r)}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=p({type:i,selectors:[["app-root"]],decls:33,vars:6,consts:[["color","primary",1,"toolbar"],["mat-icon-button","","matTooltip","Menu",3,"click"],[1,"toolbar-title"],["routerLink","/home",1,"app-title"],[1,"spacer"],["routerLink","/login"],[1,"sidenav-container"],["mode","side",1,"sidenav",3,"opened"],[1,"sidenav-content"],[1,"sidenav-logo"],[1,"logo-icon"],[1,"nav-links"],["routerLink","/home",1,"nav-item"],["mat-button","",1,"nav-btn"],["routerLink","/add",1,"nav-item"],[1,"main-content"],[1,"user-info"],[1,"username"],[1,"admin-badge"],["mat-icon-button","","matTooltip","Se d\xE9connecter","color","warn",3,"click"],["mat-stroked-button","",1,"login-btn"],["routerLink","/login",1,"nav-item"],["routerLink","/register",1,"nav-item"],["mat-button","",1,"nav-btn","logout-btn",3,"click"]],template:function(e,t){e&1&&(s(0,"mat-toolbar",0)(1,"button",1),x("click",function(){return t.toggleSidenav()}),s(2,"mat-icon"),c(3,"menu"),a()(),s(4,"span",2)(5,"mat-icon"),c(6,"assignment"),a(),s(7,"a",3),c(8),a()(),O(9,"span",4),h(10,Vt,9,2)(11,zt,5,0,"a",5),a(),s(12,"mat-sidenav-container",6)(13,"mat-sidenav",7)(14,"div",8)(15,"div",9)(16,"mat-icon",10),c(17,"school"),a(),s(18,"span"),c(19,"ESATIC 2025/2026"),a()(),O(20,"mat-divider"),s(21,"nav",11)(22,"a",12)(23,"button",13)(24,"mat-icon"),c(25,"home"),a(),s(26,"span"),c(27,"Accueil"),a()()(),h(28,Lt,6,0,"a",14),h(29,Ht,12,0),h(30,Qt,6,0),a()()(),s(31,"mat-sidenav-content",15),O(32,"router-outlet"),a()()),e&2&&(u(8),ue(t.titre),u(2),f(t.isLoggedIn()?10:11),u(3),ce("opened",t.sidenavOpened()),u(15),f(t.isLoggedIn()?28:-1),u(),f(t.isLoggedIn()?-1:29),u(),f(t.isLoggedIn()?30:-1))},dependencies:[Le,He,Ne,$e,Ke,Ze,et,Je,dt,st,pt,ut,ft,Me,ht,te,gt,at,ot,rt,it],styles:[".toolbar[_ngcontent-%COMP%]{position:fixed;top:0;left:0;right:0;z-index:1000;box-shadow:0 2px 8px #0003}.toolbar-title[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;margin-left:8px}.app-title[_ngcontent-%COMP%]{color:#fff;text-decoration:none;font-size:20px;font-weight:700;letter-spacing:.5px}.spacer[_ngcontent-%COMP%]{flex:1}.user-info[_ngcontent-%COMP%]{display:flex;align-items:center;gap:6px;margin-right:8px;font-size:14px}.username[_ngcontent-%COMP%]{font-weight:600}.admin-badge[_ngcontent-%COMP%]{background:#ffd740;color:#333;padding:2px 8px;border-radius:12px;font-size:11px;font-weight:700;letter-spacing:.5px}.login-btn[_ngcontent-%COMP%]{color:#fff!important;border-color:#fff9!important}.sidenav-container[_ngcontent-%COMP%]{height:100vh;padding-top:64px}.sidenav[_ngcontent-%COMP%]{width:220px;background:#1a1a2e;color:#fff}.sidenav-content[_ngcontent-%COMP%]{height:100%;display:flex;flex-direction:column}.sidenav-logo[_ngcontent-%COMP%]{padding:20px 16px;display:flex;align-items:center;gap:10px;font-size:13px;font-weight:600;color:#a0aec0}.logo-icon[_ngcontent-%COMP%]{color:#667eea;font-size:28px;width:28px;height:28px}.nav-links[_ngcontent-%COMP%]{display:flex;flex-direction:column;padding:12px 0;flex:1}.nav-item[_ngcontent-%COMP%]{text-decoration:none;width:100%}.nav-btn[_ngcontent-%COMP%]{width:100%!important;justify-content:flex-start!important;color:#a0aec0!important;padding:10px 16px!important;border-radius:0!important;gap:12px}.nav-btn[_ngcontent-%COMP%]:hover{color:#fff!important;background:#ffffff14!important}.logout-btn[_ngcontent-%COMP%]{margin-top:auto;color:#fc8181!important}.main-content[_ngcontent-%COMP%]{background:#f5f7fa;min-height:calc(100vh - 64px);padding:24px}mat-divider[_ngcontent-%COMP%]{border-color:#ffffff1a!important;margin:8px 0!important}"]})};Ve(ie,mt).catch(i=>console.error(i));
