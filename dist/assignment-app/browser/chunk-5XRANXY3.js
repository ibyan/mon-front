import{H as Et}from"./chunk-HUESEVZU.js";import{C as kt,D as It,G as At,H as q,K as F,S as lt,W as St,X as Mt,Y as Ft,Z as Tt,_ as Rt,da as Ot,ia as dt,ja as Pt,ka as Lt,la as T,ma as R,na as Q,p as N,pa as Bt,q as V,qa as jt,r as G,ra as Ht,t as Dt,u as st,ua as K,w as xt,wa as zt,za as W}from"./chunk-MTLWUJHN.js";import{$ as c,$a as et,Bb as l,Bc as rt,Cb as d,E as b,Lb as H,O as L,Ob as M,Ta as tt,Ub as at,Vb as ot,W as B,Wb as ct,X as C,Ya as it,Z as h,Za as bt,a as u,ab as nt,ac as z,b as ft,cc as _,dc as wt,gb as v,h as g,hb as w,ia as p,ib as D,j as $,ja as X,kb as Ct,lb as y,ma as I,mb as j,na as J,ra as yt,ub as S,w as P,wa as A,y as vt,ya as E,z as k}from"./chunk-OT3V3LZO.js";var ei=new h("mat-chips-default-options",{providedIn:"root",factory:()=>({separatorKeyCodes:[13]})});var Zi=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=w({type:e});static \u0275inj=C({providers:[Et,{provide:ei,useValue:{separatorKeyCodes:[13]}}],imports:[St,V]})}return e})();function ni(e,a){}var f=class{viewContainerRef;injector;id;role="dialog";panelClass="";hasBackdrop=!0;backdropClass="";disableClose=!1;closePredicate;width="";height="";minWidth;minHeight;maxWidth;maxHeight;positionStrategy;data=null;direction;ariaDescribedBy=null;ariaLabelledBy=null;ariaLabel=null;ariaModal=!1;autoFocus="first-tabbable";restoreFocus=!0;scrollStrategy;closeOnNavigation=!0;closeOnDestroy=!0;closeOnOverlayDetachments=!0;disableAnimations=!1;providers;container;templateContext};var mt=(()=>{class e extends Lt{_elementRef=c(E);_focusTrapFactory=c(It);_config;_interactivityChecker=c(kt);_ngZone=c(J);_focusMonitor=c(xt);_renderer=c(et);_changeDetectorRef=c(rt);_injector=c(p);_platform=c(Dt);_document=c(X);_portalOutlet;_focusTrapped=new g;_focusTrap=null;_elementFocusedBeforeDialogWasOpened=null;_closeInteractionType=null;_ariaLabelledByQueue=[];_isDestroyed=!1;constructor(){super(),this._config=c(f,{optional:!0})||new f,this._config.ariaLabelledBy&&this._ariaLabelledByQueue.push(this._config.ariaLabelledBy)}_addAriaLabelledBy(t){this._ariaLabelledByQueue.push(t),this._changeDetectorRef.markForCheck()}_removeAriaLabelledBy(t){let i=this._ariaLabelledByQueue.indexOf(t);i>-1&&(this._ariaLabelledByQueue.splice(i,1),this._changeDetectorRef.markForCheck())}_contentAttached(){this._initializeFocusTrap(),this._captureInitialFocus()}_captureInitialFocus(){this._trapFocus()}ngOnDestroy(){this._focusTrapped.complete(),this._isDestroyed=!0,this._restoreFocus()}attachComponentPortal(t){this._portalOutlet.hasAttached();let i=this._portalOutlet.attachComponentPortal(t);return this._contentAttached(),i}attachTemplatePortal(t){this._portalOutlet.hasAttached();let i=this._portalOutlet.attachTemplatePortal(t);return this._contentAttached(),i}attachDomPortal=t=>{this._portalOutlet.hasAttached();let i=this._portalOutlet.attachDomPortal(t);return this._contentAttached(),i};_recaptureFocus(){this._containsFocus()||this._trapFocus()}_forceFocus(t,i){this._interactivityChecker.isFocusable(t)||(t.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let n=()=>{o(),s(),t.removeAttribute("tabindex")},o=this._renderer.listen(t,"blur",n),s=this._renderer.listen(t,"mousedown",n)})),t.focus(i)}_focusByCssSelector(t,i){let n=this._elementRef.nativeElement.querySelector(t);n&&this._forceFocus(n,i)}_trapFocus(t){this._isDestroyed||it(()=>{let i=this._elementRef.nativeElement;switch(this._config.autoFocus){case!1:case"dialog":this._containsFocus()||i.focus(t);break;case!0:case"first-tabbable":this._focusTrap?.focusInitialElement(t)||this._focusDialogContainer(t);break;case"first-heading":this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]',t);break;default:this._focusByCssSelector(this._config.autoFocus,t);break}this._focusTrapped.next()},{injector:this._injector})}_restoreFocus(){let t=this._config.restoreFocus,i=null;if(typeof t=="string"?i=this._document.querySelector(t):typeof t=="boolean"?i=t?this._elementFocusedBeforeDialogWasOpened:null:t&&(i=t),this._config.restoreFocus&&i&&typeof i.focus=="function"){let n=G(),o=this._elementRef.nativeElement;(!n||n===this._document.body||n===o||o.contains(n))&&(this._focusMonitor?(this._focusMonitor.focusVia(i,this._closeInteractionType),this._closeInteractionType=null):i.focus())}this._focusTrap&&this._focusTrap.destroy()}_focusDialogContainer(t){this._elementRef.nativeElement.focus?.(t)}_containsFocus(){let t=this._elementRef.nativeElement,i=G();return t===i||t.contains(i)}_initializeFocusTrap(){this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._document&&(this._elementFocusedBeforeDialogWasOpened=G()))}static \u0275fac=function(i){return new(i||e)};static \u0275cmp=v({type:e,selectors:[["cdk-dialog-container"]],viewQuery:function(i,n){if(i&1&&at(T,7),i&2){let o;ot(o=ct())&&(n._portalOutlet=o.first)}},hostAttrs:["tabindex","-1",1,"cdk-dialog-container"],hostVars:6,hostBindings:function(i,n){i&2&&S("id",n._config.id||null)("role",n._config.role)("aria-modal",n._config.ariaModal)("aria-labelledby",n._config.ariaLabel?null:n._ariaLabelledByQueue[0])("aria-label",n._config.ariaLabel)("aria-describedby",n._config.ariaDescribedBy||null)},features:[y],decls:1,vars:0,consts:[["cdkPortalOutlet",""]],template:function(i,n){i&1&&j(0,ni,0,0,"ng-template",0)},dependencies:[T],styles:[`.cdk-dialog-container {
  display: block;
  width: 100%;
  height: 100%;
  min-height: inherit;
  max-height: inherit;
}
`],encapsulation:2})}return e})(),O=class{overlayRef;config;componentInstance=null;componentRef=null;containerInstance;disableClose;closed=new g;backdropClick;keydownEvents;outsidePointerEvents;id;_detachSubscription;constructor(a,t){this.overlayRef=a,this.config=t,this.disableClose=t.disableClose,this.backdropClick=a.backdropClick(),this.keydownEvents=a.keydownEvents(),this.outsidePointerEvents=a.outsidePointerEvents(),this.id=t.id,this.keydownEvents.subscribe(i=>{i.keyCode===27&&!this.disableClose&&!q(i)&&(i.preventDefault(),this.close(void 0,{focusOrigin:"keyboard"}))}),this.backdropClick.subscribe(()=>{!this.disableClose&&this._canClose()?this.close(void 0,{focusOrigin:"mouse"}):this.containerInstance._recaptureFocus?.()}),this._detachSubscription=a.detachments().subscribe(()=>{t.closeOnOverlayDetachments!==!1&&this.close()})}close(a,t){if(this._canClose(a)){let i=this.closed;this.containerInstance._closeInteractionType=t?.focusOrigin||"program",this._detachSubscription.unsubscribe(),this.overlayRef.dispose(),i.next(a),i.complete(),this.componentInstance=this.containerInstance=null}}updatePosition(){return this.overlayRef.updatePosition(),this}updateSize(a="",t=""){return this.overlayRef.updateSize({width:a,height:t}),this}addPanelClass(a){return this.overlayRef.addPanelClass(a),this}removePanelClass(a){return this.overlayRef.removePanelClass(a),this}_canClose(a){let t=this.config;return!!this.containerInstance&&(!t.closePredicate||t.closePredicate(a,t,this.componentInstance))}},ai=new h("DialogScrollStrategy",{providedIn:"root",factory:()=>{let e=c(p);return()=>Q(e)}}),oi=new h("DialogData"),ci=new h("DefaultDialogConfig");function ri(e){let a=yt(e),t=new I;return{valueSignal:a,get value(){return a()},change:t,ngOnDestroy(){t.complete()}}}var ut=(()=>{class e{_injector=c(p);_defaultOptions=c(ci,{optional:!0});_parentDialog=c(e,{optional:!0,skipSelf:!0});_overlayContainer=c(jt);_idGenerator=c(F);_openDialogsAtThisLevel=[];_afterAllClosedAtThisLevel=new g;_afterOpenedAtThisLevel=new g;_ariaHiddenElements=new Map;_scrollStrategy=c(ai);get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}afterAllClosed=P(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(L(void 0)));constructor(){}open(t,i){let n=this._defaultOptions||new f;i=u(u({},n),i),i.id=i.id||this._idGenerator.getId("cdk-dialog-"),i.id&&this.getDialogById(i.id);let o=this._getOverlayConfig(i),s=zt(this._injector,o),r=new O(s,i),m=this._attachContainer(s,r,i);if(r.containerInstance=m,!this.openDialogs.length){let Y=this._overlayContainer.getContainerElement();m._focusTrapped?m._focusTrapped.pipe(b(1)).subscribe(()=>{this._hideNonDialogContentFromAssistiveTechnology(Y)}):this._hideNonDialogContentFromAssistiveTechnology(Y)}return this._attachDialogContent(t,r,m,i),this.openDialogs.push(r),r.closed.subscribe(()=>this._removeOpenDialog(r,!0)),this.afterOpened.next(r),r}closeAll(){pt(this.openDialogs,t=>t.close())}getDialogById(t){return this.openDialogs.find(i=>i.id===t)}ngOnDestroy(){pt(this._openDialogsAtThisLevel,t=>{t.config.closeOnDestroy===!1&&this._removeOpenDialog(t,!1)}),pt(this._openDialogsAtThisLevel,t=>t.close()),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete(),this._openDialogsAtThisLevel=[]}_getOverlayConfig(t){let i=new Bt({positionStrategy:t.positionStrategy||K().centerHorizontally().centerVertically(),scrollStrategy:t.scrollStrategy||this._scrollStrategy(),panelClass:t.panelClass,hasBackdrop:t.hasBackdrop,direction:t.direction,minWidth:t.minWidth,minHeight:t.minHeight,maxWidth:t.maxWidth,maxHeight:t.maxHeight,width:t.width,height:t.height,disposeOnNavigation:t.closeOnNavigation,disableAnimations:t.disableAnimations});return t.backdropClass&&(i.backdropClass=t.backdropClass),i}_attachContainer(t,i,n){let o=n.injector||n.viewContainerRef?.injector,s=[{provide:f,useValue:n},{provide:O,useValue:i},{provide:Ht,useValue:t}],r;n.container?typeof n.container=="function"?r=n.container:(r=n.container.type,s.push(...n.container.providers(n))):r=mt;let m=new dt(r,n.viewContainerRef,p.create({parent:o||this._injector,providers:s}));return t.attach(m).instance}_attachDialogContent(t,i,n,o){if(t instanceof bt){let s=this._createInjector(o,i,n,void 0),r={$implicit:o.data,dialogRef:i};o.templateContext&&(r=u(u({},r),typeof o.templateContext=="function"?o.templateContext():o.templateContext)),n.attachTemplatePortal(new Pt(t,null,r,s))}else{let s=this._createInjector(o,i,n,this._injector),r=n.attachComponentPortal(new dt(t,o.viewContainerRef,s));i.componentRef=r,i.componentInstance=r.instance}}_createInjector(t,i,n,o){let s=t.injector||t.viewContainerRef?.injector,r=[{provide:oi,useValue:t.data},{provide:O,useValue:i}];return t.providers&&(typeof t.providers=="function"?r.push(...t.providers(i,t,n)):r.push(...t.providers)),t.direction&&(!s||!s.get(N,null,{optional:!0}))&&r.push({provide:N,useValue:ri(t.direction)}),p.create({parent:s||o,providers:r})}_removeOpenDialog(t,i){let n=this.openDialogs.indexOf(t);n>-1&&(this.openDialogs.splice(n,1),this.openDialogs.length||(this._ariaHiddenElements.forEach((o,s)=>{o?s.setAttribute("aria-hidden",o):s.removeAttribute("aria-hidden")}),this._ariaHiddenElements.clear(),i&&this._getAfterAllClosed().next()))}_hideNonDialogContentFromAssistiveTechnology(t){if(t.parentElement){let i=t.parentElement.children;for(let n=i.length-1;n>-1;n--){let o=i[n];o!==t&&o.nodeName!=="SCRIPT"&&o.nodeName!=="STYLE"&&!o.hasAttribute("aria-live")&&!o.hasAttribute("popover")&&(this._ariaHiddenElements.set(o,o.getAttribute("aria-hidden")),o.setAttribute("aria-hidden","true"))}}}_getAfterAllClosed(){let t=this._parentDialog;return t?t._getAfterAllClosed():this._afterAllClosedAtThisLevel}static \u0275fac=function(i){return new(i||e)};static \u0275prov=B({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();function pt(e,a){let t=e.length;for(;t--;)a(e[t])}var Vt=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=w({type:e});static \u0275inj=C({providers:[ut],imports:[W,R,At,R]})}return e})();function si(e,a){}var Z=class{viewContainerRef;injector;id;role="dialog";panelClass="";hasBackdrop=!0;backdropClass="";disableClose=!1;closePredicate;width="";height="";minWidth;minHeight;maxWidth;maxHeight;position;data=null;direction;ariaDescribedBy=null;ariaLabelledBy=null;ariaLabel=null;ariaModal=!1;autoFocus="first-tabbable";restoreFocus=!0;delayFocusTrap=!0;scrollStrategy;closeOnNavigation=!0;enterAnimationDuration;exitAnimationDuration},gt="mdc-dialog--open",Gt="mdc-dialog--opening",qt="mdc-dialog--closing",li=150,di=75,hi=(()=>{class e extends mt{_animationStateChanged=new I;_animationsEnabled=!lt();_actionSectionCount=0;_hostElement=this._elementRef.nativeElement;_enterAnimationDuration=this._animationsEnabled?Kt(this._config.enterAnimationDuration)??li:0;_exitAnimationDuration=this._animationsEnabled?Kt(this._config.exitAnimationDuration)??di:0;_animationTimer=null;_contentAttached(){super._contentAttached(),this._startOpenAnimation()}_startOpenAnimation(){this._animationStateChanged.emit({state:"opening",totalTime:this._enterAnimationDuration}),this._animationsEnabled?(this._hostElement.style.setProperty(Qt,`${this._enterAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(Gt,gt)),this._waitForAnimationToComplete(this._enterAnimationDuration,this._finishDialogOpen)):(this._hostElement.classList.add(gt),Promise.resolve().then(()=>this._finishDialogOpen()))}_startExitAnimation(){this._animationStateChanged.emit({state:"closing",totalTime:this._exitAnimationDuration}),this._hostElement.classList.remove(gt),this._animationsEnabled?(this._hostElement.style.setProperty(Qt,`${this._exitAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(qt)),this._waitForAnimationToComplete(this._exitAnimationDuration,this._finishDialogClose)):Promise.resolve().then(()=>this._finishDialogClose())}_updateActionSectionCount(t){this._actionSectionCount+=t,this._changeDetectorRef.markForCheck()}_finishDialogOpen=()=>{this._clearAnimationClasses(),this._openAnimationDone(this._enterAnimationDuration)};_finishDialogClose=()=>{this._clearAnimationClasses(),this._animationStateChanged.emit({state:"closed",totalTime:this._exitAnimationDuration})};_clearAnimationClasses(){this._hostElement.classList.remove(Gt,qt)}_waitForAnimationToComplete(t,i){this._animationTimer!==null&&clearTimeout(this._animationTimer),this._animationTimer=setTimeout(i,t)}_requestAnimationFrame(t){this._ngZone.runOutsideAngular(()=>{typeof requestAnimationFrame=="function"?requestAnimationFrame(t):t()})}_captureInitialFocus(){this._config.delayFocusTrap||this._trapFocus()}_openAnimationDone(t){this._config.delayFocusTrap&&this._trapFocus(),this._animationStateChanged.next({state:"opened",totalTime:t})}ngOnDestroy(){super.ngOnDestroy(),this._animationTimer!==null&&clearTimeout(this._animationTimer)}attachComponentPortal(t){let i=super.attachComponentPortal(t);return i.location.nativeElement.classList.add("mat-mdc-dialog-component-host"),i}static \u0275fac=(()=>{let t;return function(n){return(t||(t=A(e)))(n||e)}})();static \u0275cmp=v({type:e,selectors:[["mat-dialog-container"]],hostAttrs:["tabindex","-1",1,"mat-mdc-dialog-container","mdc-dialog"],hostVars:10,hostBindings:function(i,n){i&2&&(H("id",n._config.id),S("aria-modal",n._config.ariaModal)("role",n._config.role)("aria-labelledby",n._config.ariaLabel?null:n._ariaLabelledByQueue[0])("aria-label",n._config.ariaLabel)("aria-describedby",n._config.ariaDescribedBy||null),z("_mat-animation-noopable",!n._animationsEnabled)("mat-mdc-dialog-container-with-actions",n._actionSectionCount>0))},features:[y],decls:3,vars:0,consts:[[1,"mat-mdc-dialog-inner-container","mdc-dialog__container"],[1,"mat-mdc-dialog-surface","mdc-dialog__surface"],["cdkPortalOutlet",""]],template:function(i,n){i&1&&(l(0,"div",0)(1,"div",1),j(2,si,0,0,"ng-template",2),d()())},dependencies:[T],styles:[`.mat-mdc-dialog-container {
  width: 100%;
  height: 100%;
  display: block;
  box-sizing: border-box;
  max-height: inherit;
  min-height: inherit;
  min-width: inherit;
  max-width: inherit;
  outline: 0;
}

.cdk-overlay-pane.mat-mdc-dialog-panel {
  max-width: var(--mat-dialog-container-max-width, 560px);
  min-width: var(--mat-dialog-container-min-width, 280px);
}
@media (max-width: 599px) {
  .cdk-overlay-pane.mat-mdc-dialog-panel {
    max-width: var(--mat-dialog-container-small-max-width, calc(100vw - 32px));
  }
}

.mat-mdc-dialog-inner-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  box-sizing: border-box;
  height: 100%;
  opacity: 0;
  transition: opacity linear var(--mat-dialog-transition-duration, 0ms);
  max-height: inherit;
  min-height: inherit;
  min-width: inherit;
  max-width: inherit;
}
.mdc-dialog--closing .mat-mdc-dialog-inner-container {
  transition: opacity 75ms linear;
  transform: none;
}
.mdc-dialog--open .mat-mdc-dialog-inner-container {
  opacity: 1;
}
._mat-animation-noopable .mat-mdc-dialog-inner-container {
  transition: none;
}

.mat-mdc-dialog-surface {
  display: flex;
  flex-direction: column;
  flex-grow: 0;
  flex-shrink: 0;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  position: relative;
  overflow-y: auto;
  outline: 0;
  transform: scale(0.8);
  transition: transform var(--mat-dialog-transition-duration, 0ms) cubic-bezier(0, 0, 0.2, 1);
  max-height: inherit;
  min-height: inherit;
  min-width: inherit;
  max-width: inherit;
  box-shadow: var(--mat-dialog-container-elevation-shadow, none);
  border-radius: var(--mat-dialog-container-shape, var(--mat-sys-corner-extra-large, 4px));
  background-color: var(--mat-dialog-container-color, var(--mat-sys-surface, white));
}
[dir=rtl] .mat-mdc-dialog-surface {
  text-align: right;
}
.mdc-dialog--open .mat-mdc-dialog-surface, .mdc-dialog--closing .mat-mdc-dialog-surface {
  transform: none;
}
._mat-animation-noopable .mat-mdc-dialog-surface {
  transition: none;
}
.mat-mdc-dialog-surface::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border: 2px solid transparent;
  border-radius: inherit;
  content: "";
  pointer-events: none;
}

.mat-mdc-dialog-title {
  display: block;
  position: relative;
  flex-shrink: 0;
  box-sizing: border-box;
  margin: 0 0 1px;
  padding: var(--mat-dialog-headline-padding, 6px 24px 13px);
}
.mat-mdc-dialog-title::before {
  display: inline-block;
  width: 0;
  height: 40px;
  content: "";
  vertical-align: 0;
}
[dir=rtl] .mat-mdc-dialog-title {
  text-align: right;
}
.mat-mdc-dialog-container .mat-mdc-dialog-title {
  color: var(--mat-dialog-subhead-color, var(--mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
  font-family: var(--mat-dialog-subhead-font, var(--mat-sys-headline-small-font, inherit));
  line-height: var(--mat-dialog-subhead-line-height, var(--mat-sys-headline-small-line-height, 1.5rem));
  font-size: var(--mat-dialog-subhead-size, var(--mat-sys-headline-small-size, 1rem));
  font-weight: var(--mat-dialog-subhead-weight, var(--mat-sys-headline-small-weight, 400));
  letter-spacing: var(--mat-dialog-subhead-tracking, var(--mat-sys-headline-small-tracking, 0.03125em));
}

.mat-mdc-dialog-content {
  display: block;
  flex-grow: 1;
  box-sizing: border-box;
  margin: 0;
  overflow: auto;
  max-height: 65vh;
}
.mat-mdc-dialog-content > :first-child {
  margin-top: 0;
}
.mat-mdc-dialog-content > :last-child {
  margin-bottom: 0;
}
.mat-mdc-dialog-container .mat-mdc-dialog-content {
  color: var(--mat-dialog-supporting-text-color, var(--mat-sys-on-surface-variant, rgba(0, 0, 0, 0.6)));
  font-family: var(--mat-dialog-supporting-text-font, var(--mat-sys-body-medium-font, inherit));
  line-height: var(--mat-dialog-supporting-text-line-height, var(--mat-sys-body-medium-line-height, 1.5rem));
  font-size: var(--mat-dialog-supporting-text-size, var(--mat-sys-body-medium-size, 1rem));
  font-weight: var(--mat-dialog-supporting-text-weight, var(--mat-sys-body-medium-weight, 400));
  letter-spacing: var(--mat-dialog-supporting-text-tracking, var(--mat-sys-body-medium-tracking, 0.03125em));
}
.mat-mdc-dialog-container .mat-mdc-dialog-content {
  padding: var(--mat-dialog-content-padding, 20px 24px);
}
.mat-mdc-dialog-container-with-actions .mat-mdc-dialog-content {
  padding: var(--mat-dialog-with-actions-content-padding, 20px 24px 0);
}
.mat-mdc-dialog-container .mat-mdc-dialog-title + .mat-mdc-dialog-content {
  padding-top: 0;
}

.mat-mdc-dialog-actions {
  display: flex;
  position: relative;
  flex-shrink: 0;
  flex-wrap: wrap;
  align-items: center;
  box-sizing: border-box;
  min-height: 52px;
  margin: 0;
  border-top: 1px solid transparent;
  padding: var(--mat-dialog-actions-padding, 16px 24px);
  justify-content: var(--mat-dialog-actions-alignment, flex-end);
}
@media (forced-colors: active) {
  .mat-mdc-dialog-actions {
    border-top-color: CanvasText;
  }
}
.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-start, .mat-mdc-dialog-actions[align=start] {
  justify-content: start;
}
.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-center, .mat-mdc-dialog-actions[align=center] {
  justify-content: center;
}
.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-end, .mat-mdc-dialog-actions[align=end] {
  justify-content: flex-end;
}
.mat-mdc-dialog-actions .mat-button-base + .mat-button-base,
.mat-mdc-dialog-actions .mat-mdc-button-base + .mat-mdc-button-base {
  margin-left: 8px;
}
[dir=rtl] .mat-mdc-dialog-actions .mat-button-base + .mat-button-base,
[dir=rtl] .mat-mdc-dialog-actions .mat-mdc-button-base + .mat-mdc-button-base {
  margin-left: 0;
  margin-right: 8px;
}

.mat-mdc-dialog-component-host {
  display: contents;
}
`],encapsulation:2})}return e})(),Qt="--mat-dialog-transition-duration";function Kt(e){return e==null?null:typeof e=="number"?e:e.endsWith("ms")?st(e.substring(0,e.length-2)):e.endsWith("s")?st(e.substring(0,e.length-1))*1e3:e==="0"?0:null}var U=(function(e){return e[e.OPEN=0]="OPEN",e[e.CLOSING=1]="CLOSING",e[e.CLOSED=2]="CLOSED",e})(U||{}),x=class{_ref;_config;_containerInstance;componentInstance;componentRef=null;disableClose;id;_afterOpened=new $(1);_beforeClosed=new $(1);_result;_closeFallbackTimeout;_state=U.OPEN;_closeInteractionType;constructor(a,t,i){this._ref=a,this._config=t,this._containerInstance=i,this.disableClose=t.disableClose,this.id=a.id,a.addPanelClass("mat-mdc-dialog-panel"),i._animationStateChanged.pipe(k(n=>n.state==="opened"),b(1)).subscribe(()=>{this._afterOpened.next(),this._afterOpened.complete()}),i._animationStateChanged.pipe(k(n=>n.state==="closed"),b(1)).subscribe(()=>{clearTimeout(this._closeFallbackTimeout),this._finishDialogClose()}),a.overlayRef.detachments().subscribe(()=>{this._beforeClosed.next(this._result),this._beforeClosed.complete(),this._finishDialogClose()}),vt(this.backdropClick(),this.keydownEvents().pipe(k(n=>n.keyCode===27&&!this.disableClose&&!q(n)))).subscribe(n=>{this.disableClose||(n.preventDefault(),pi(this,n.type==="keydown"?"keyboard":"mouse"))})}close(a){let t=this._config.closePredicate;t&&!t(a,this._config,this.componentInstance)||(this._result=a,this._containerInstance._animationStateChanged.pipe(k(i=>i.state==="closing"),b(1)).subscribe(i=>{this._beforeClosed.next(a),this._beforeClosed.complete(),this._ref.overlayRef.detachBackdrop(),this._closeFallbackTimeout=setTimeout(()=>this._finishDialogClose(),i.totalTime+100)}),this._state=U.CLOSING,this._containerInstance._startExitAnimation())}afterOpened(){return this._afterOpened}afterClosed(){return this._ref.closed}beforeClosed(){return this._beforeClosed}backdropClick(){return this._ref.backdropClick}keydownEvents(){return this._ref.keydownEvents}updatePosition(a){let t=this._ref.config.positionStrategy;return a&&(a.left||a.right)?a.left?t.left(a.left):t.right(a.right):t.centerHorizontally(),a&&(a.top||a.bottom)?a.top?t.top(a.top):t.bottom(a.bottom):t.centerVertically(),this._ref.updatePosition(),this}updateSize(a="",t=""){return this._ref.updateSize(a,t),this}addPanelClass(a){return this._ref.addPanelClass(a),this}removePanelClass(a){return this._ref.removePanelClass(a),this}getState(){return this._state}_finishDialogClose(){this._state=U.CLOSED,this._ref.close(this._result,{focusOrigin:this._closeInteractionType}),this.componentInstance=null}};function pi(e,a,t){return e._closeInteractionType=a,e.close(t)}var _t=new h("MatMdcDialogData"),mi=new h("mat-mdc-dialog-default-options"),ui=new h("mat-mdc-dialog-scroll-strategy",{providedIn:"root",factory:()=>{let e=c(p);return()=>Q(e)}}),Wt=(()=>{class e{_defaultOptions=c(mi,{optional:!0});_scrollStrategy=c(ui);_parentDialog=c(e,{optional:!0,skipSelf:!0});_idGenerator=c(F);_injector=c(p);_dialog=c(ut);_animationsDisabled=lt();_openDialogsAtThisLevel=[];_afterAllClosedAtThisLevel=new g;_afterOpenedAtThisLevel=new g;dialogConfigClass=Z;_dialogRefConstructor;_dialogContainerType;_dialogDataToken;get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}_getAfterAllClosed(){let t=this._parentDialog;return t?t._getAfterAllClosed():this._afterAllClosedAtThisLevel}afterAllClosed=P(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(L(void 0)));constructor(){this._dialogRefConstructor=x,this._dialogContainerType=hi,this._dialogDataToken=_t}open(t,i){let n;i=u(u({},this._defaultOptions||new Z),i),i.id=i.id||this._idGenerator.getId("mat-mdc-dialog-"),i.scrollStrategy=i.scrollStrategy||this._scrollStrategy();let o=this._dialog.open(t,ft(u({},i),{positionStrategy:K(this._injector).centerHorizontally().centerVertically(),disableClose:!0,closePredicate:void 0,closeOnDestroy:!1,closeOnOverlayDetachments:!1,disableAnimations:this._animationsDisabled||i.enterAnimationDuration?.toLocaleString()==="0"||i.exitAnimationDuration?.toString()==="0",container:{type:this._dialogContainerType,providers:()=>[{provide:this.dialogConfigClass,useValue:i},{provide:f,useValue:i}]},templateContext:()=>({dialogRef:n}),providers:(s,r,m)=>(n=new this._dialogRefConstructor(s,i,m),n.updatePosition(i?.position),[{provide:this._dialogContainerType,useValue:m},{provide:this._dialogDataToken,useValue:r.data},{provide:this._dialogRefConstructor,useValue:n}])}));return n.componentRef=o.componentRef,n.componentInstance=o.componentInstance,this.openDialogs.push(n),this.afterOpened.next(n),n.afterClosed().subscribe(()=>{let s=this.openDialogs.indexOf(n);s>-1&&(this.openDialogs.splice(s,1),this.openDialogs.length||this._getAfterAllClosed().next())}),n}closeAll(){this._closeDialogs(this.openDialogs)}getDialogById(t){return this.openDialogs.find(i=>i.id===t)}ngOnDestroy(){this._closeDialogs(this._openDialogsAtThisLevel),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete()}_closeDialogs(t){let i=t.length;for(;i--;)t[i].close()}static \u0275fac=function(i){return new(i||e)};static \u0275prov=B({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var Ut=(()=>{class e{_dialogRef=c(x,{optional:!0});_elementRef=c(E);_dialog=c(Wt);constructor(){}ngOnInit(){this._dialogRef||(this._dialogRef=gi(this._elementRef,this._dialog.openDialogs)),this._dialogRef&&Promise.resolve().then(()=>{this._onAdd()})}ngOnDestroy(){this._dialogRef?._containerInstance&&Promise.resolve().then(()=>{this._onRemove()})}static \u0275fac=function(i){return new(i||e)};static \u0275dir=D({type:e})}return e})(),Zt=(()=>{class e extends Ut{id=c(F).getId("mat-mdc-dialog-title-");_onAdd(){this._dialogRef._containerInstance?._addAriaLabelledBy?.(this.id)}_onRemove(){this._dialogRef?._containerInstance?._removeAriaLabelledBy?.(this.id)}static \u0275fac=(()=>{let t;return function(n){return(t||(t=A(e)))(n||e)}})();static \u0275dir=D({type:e,selectors:[["","mat-dialog-title",""],["","matDialogTitle",""]],hostAttrs:[1,"mat-mdc-dialog-title","mdc-dialog__title"],hostVars:1,hostBindings:function(i,n){i&2&&H("id",n.id)},inputs:{id:"id"},exportAs:["matDialogTitle"],features:[y]})}return e})(),Yt=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275dir=D({type:e,selectors:[["","mat-dialog-content",""],["mat-dialog-content"],["","matDialogContent",""]],hostAttrs:[1,"mat-mdc-dialog-content","mdc-dialog__content"],features:[Ct([Ot])]})}return e})(),$t=(()=>{class e extends Ut{align;_onAdd(){this._dialogRef._containerInstance?._updateActionSectionCount?.(1)}_onRemove(){this._dialogRef._containerInstance?._updateActionSectionCount?.(-1)}static \u0275fac=(()=>{let t;return function(n){return(t||(t=A(e)))(n||e)}})();static \u0275dir=D({type:e,selectors:[["","mat-dialog-actions",""],["mat-dialog-actions"],["","matDialogActions",""]],hostAttrs:[1,"mat-mdc-dialog-actions","mdc-dialog__actions"],hostVars:6,hostBindings:function(i,n){i&2&&z("mat-mdc-dialog-actions-align-start",n.align==="start")("mat-mdc-dialog-actions-align-center",n.align==="center")("mat-mdc-dialog-actions-align-end",n.align==="end")},inputs:{align:"align"},features:[y]})}return e})();function gi(e,a){let t=e.nativeElement.parentElement;for(;t&&!t.classList.contains("mat-mdc-dialog-container");)t=t.parentElement;return t?a.find(i=>i.id===t.id):null}var Xt=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=w({type:e});static \u0275inj=C({providers:[Wt],imports:[Vt,W,R,V]})}return e})();var Jt=class e{constructor(a,t){this.dialogRef=a;this.data=t}static \u0275fac=function(t){return new(t||e)(nt(x),nt(_t))};static \u0275cmp=v({type:e,selectors:[["app-confirm-dialog"]],decls:18,vars:1,consts:[[1,"dialog-container"],[1,"dialog-icon"],["color","warn"],["mat-dialog-title",""],[1,"warning-text"],["align","end"],["mat-stroked-button","",3,"click"],["mat-raised-button","","color","warn",3,"click"]],template:function(t,i){t&1&&(l(0,"div",0)(1,"div",1)(2,"mat-icon",2),_(3,"warning"),d()(),l(4,"h2",3),_(5,"Confirmation"),d(),l(6,"mat-dialog-content")(7,"p"),_(8),d(),l(9,"p",4),_(10,"Cette action est irr\xE9versible."),d()(),l(11,"mat-dialog-actions",5)(12,"button",6),M("click",function(){return i.dialogRef.close(!1)}),_(13,"Annuler"),d(),l(14,"button",7),M("click",function(){return i.dialogRef.close(!0)}),l(15,"mat-icon"),_(16,"delete"),d(),_(17," Supprimer "),d()()()),t&2&&(tt(8),wt(i.data.message))},dependencies:[Xt,Zt,$t,Yt,Ft,Mt,Rt,Tt],styles:[".dialog-container[_ngcontent-%COMP%]{padding:8px;min-width:300px}.dialog-icon[_ngcontent-%COMP%]{text-align:center}.dialog-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:48px;width:48px;height:48px}h2[_ngcontent-%COMP%]{text-align:center;margin:8px 0}p[_ngcontent-%COMP%]{margin:4px 0}.warning-text[_ngcontent-%COMP%]{color:#f44336;font-size:13px;font-style:italic}mat-dialog-actions[_ngcontent-%COMP%]{padding:16px 0 0;gap:8px}"]})};export{Zi as a,Wt as b,Xt as c,Jt as d};
