import{a as zt,b as Ot,c as Pt,d as Rt,e as Nt,f as Ft,g as Lt}from"./chunk-BYACMGZS.js";import{b as Dt,c as It,d as kt,e as wt,f as Tt}from"./chunk-NYWSHBGP.js";import{a as mt,c as ut,d as ht}from"./chunk-JHB64LTC.js";import{a as At}from"./chunk-B7TOQ4QS.js";import"./chunk-BR64ZJQX.js";import{A as st,B as lt,C as pt,D as dt,G as ct,H as oe,b as Qe,e as je,g as qe,j as $e,l as Ue,n as Ge,o as Ke,r as We,z as Ye}from"./chunk-HUESEVZU.js";import{Aa as St,Ba as Et,H as it,J as at,K as rt,S as ot,T as ft,U as gt,V as _t,W as vt,X as bt,Y as xt,Z as se,_ as le,b as he,d as He,ja as yt,l as Be,la as Mt,m as Ve,ma as Ct,p as Ze,q as re,r as Je,t as Xe,w as et,y as tt,z as nt}from"./chunk-MTLWUJHN.js";import{$ as m,$a as ke,$b as Pe,Ab as d,Bb as a,Bc as ae,Cb as r,Db as D,Ec as L,Fc as Le,Hb as Ae,Ib as ze,Jb as M,Kb as Oe,Lb as N,O as I,Ob as _,P as Ce,Q as C,Qb as u,Ra as Y,Rb as q,Sb as $,Ta as l,Tb as F,Ub as te,Vb as v,W as Se,Wb as b,X as Z,Z as Ee,Za as O,_b as w,ab as J,ac as T,bc as ne,cb as we,cc as p,d as xe,dc as y,ea as ce,fa as me,gb as S,h as W,hb as X,ib as x,jc as Re,kc as U,lb as k,ma as z,mb as E,mc as G,na as De,nb as Te,nc as Ne,o as ye,ra as h,rc as ue,s as Me,ub as j,va as Ie,vb as f,vc as ie,wa as B,wb as g,xb as ee,ya as V,yb as P,yc as Fe,za as Q,zb as R}from"./chunk-OT3V3LZO.js";var Zt=["*"];function Yt(n,o){n&1&&$(0)}var fe=(()=>{class n{_elementRef=m(V);constructor(){}focus(){this._elementRef.nativeElement.focus()}static \u0275fac=function(t){return new(t||n)};static \u0275dir=x({type:n,selectors:[["","cdkStepHeader",""]],hostAttrs:["role","tab"]})}return n})(),ge=(()=>{class n{template=m(O);constructor(){}static \u0275fac=function(t){return new(t||n)};static \u0275dir=x({type:n,selectors:[["","cdkStepLabel",""]]})}return n})();var A={NUMBER:"number",EDIT:"edit",DONE:"done",ERROR:"error"},Jt=new Ee("STEPPER_GLOBAL_OPTIONS"),pe=(()=>{class n{_stepperOptions;_stepper=m(H);_displayDefaultIndicatorType;stepLabel;_childForms;content;stepControl;get interacted(){return this._interacted()}set interacted(e){this._interacted.set(e)}_interacted=h(!1);interactedStream=new z;label;errorMessage;ariaLabel;ariaLabelledby;get state(){return this._state()}set state(e){this._state.set(e)}_state=h(void 0);get editable(){return this._editable()}set editable(e){this._editable.set(e)}_editable=h(!0);optional=!1;get completed(){let e=this._completedOverride(),t=this._interacted();return e??(t&&(!this.stepControl||this.stepControl.valid))}set completed(e){this._completedOverride.set(e)}_completedOverride=h(null);index=h(-1);isSelected=ie(()=>this._stepper.selectedIndex===this.index());indicatorType=ie(()=>{let e=this.isSelected(),t=this.completed,i=this._state()??A.NUMBER,s=this._editable();return this._showError()&&this.hasError&&!e?A.ERROR:this._displayDefaultIndicatorType?!t||e?A.NUMBER:s?A.EDIT:A.DONE:t&&!e?A.DONE:t&&e?i:s&&e?A.EDIT:i});isNavigable=ie(()=>{let e=this.isSelected();return this.completed||e||!this._stepper.linear});get hasError(){let e=this._customError();return e??this._getDefaultError()}set hasError(e){this._customError.set(e)}_customError=h(null);_getDefaultError(){return this.interacted&&!!this.stepControl?.invalid}constructor(){let e=m(Jt,{optional:!0});this._stepperOptions=e||{},this._displayDefaultIndicatorType=this._stepperOptions.displayDefaultIndicatorType!==!1}select(){this._stepper.selected=this}reset(){this._interacted.set(!1),this._completedOverride()!=null&&this._completedOverride.set(!1),this._customError()!=null&&this._customError.set(!1),this.stepControl&&(this._childForms?.forEach(e=>e.resetForm?.()),this.stepControl.reset())}ngOnChanges(){this._stepper._stateChanged()}_markAsInteracted(){this._interacted()||(this._interacted.set(!0),this.interactedStream.emit(this))}_showError(){return this._stepperOptions.showError??this._customError()!=null}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=S({type:n,selectors:[["cdk-step"]],contentQueries:function(t,i,s){if(t&1&&F(s,ge,5)(s,je,5),t&2){let c;v(c=b())&&(i.stepLabel=c.first),v(c=b())&&(i._childForms=c)}},viewQuery:function(t,i){if(t&1&&te(O,7),t&2){let s;v(s=b())&&(i.content=s.first)}},inputs:{stepControl:"stepControl",label:"label",errorMessage:"errorMessage",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],state:"state",editable:[2,"editable","editable",L],optional:[2,"optional","optional",L],completed:[2,"completed","completed",L],hasError:[2,"hasError","hasError",L]},outputs:{interactedStream:"interacted"},exportAs:["cdkStep"],features:[Ie],ngContentSelectors:Zt,decls:1,vars:0,template:function(t,i){t&1&&(q(),Te(0,Yt,1,0,"ng-template"))},encapsulation:2,changeDetection:0})}return n})(),H=(()=>{class n{_dir=m(Ze,{optional:!0});_changeDetectorRef=m(ae);_elementRef=m(V);_destroyed=new W;_keyManager;_steps;steps=new Q;_stepHeader;_sortedHeaders=new Q;get linear(){return this._linear()}set linear(e){this._linear.set(e)}_linear=h(!1);get selectedIndex(){return this._selectedIndex()}set selectedIndex(e){this._steps?(this._isValidIndex(e),this.selectedIndex!==e&&(this.selected?._markAsInteracted(),!this._anyControlsInvalidOrPending(e)&&(e>=this.selectedIndex||this.steps.toArray()[e].editable)&&this._updateSelectedItemIndex(e))):this._selectedIndex.set(e)}_selectedIndex=h(0);get selected(){return this.steps?this.steps.toArray()[this.selectedIndex]:void 0}set selected(e){this.selectedIndex=e&&this.steps?this.steps.toArray().indexOf(e):-1}selectionChange=new z;selectedIndexChange=new z;_groupId=m(rt).getId("cdk-stepper-");get orientation(){return this._orientation}set orientation(e){this._orientation=e,this._keyManager&&this._keyManager.withVerticalOrientation(e==="vertical")}_orientation="horizontal";constructor(){}ngAfterContentInit(){this._steps.changes.pipe(I(this._steps),C(this._destroyed)).subscribe(e=>{this.steps.reset(e.filter(t=>t._stepper===this)),this.steps.forEach((t,i)=>t.index.set(i)),this.steps.notifyOnChanges()})}ngAfterViewInit(){if(this._stepHeader.changes.pipe(I(this._stepHeader),C(this._destroyed)).subscribe(e=>{this._sortedHeaders.reset(e.toArray().sort((t,i)=>t._elementRef.nativeElement.compareDocumentPosition(i._elementRef.nativeElement)&Node.DOCUMENT_POSITION_FOLLOWING?-1:1)),this._sortedHeaders.notifyOnChanges()}),this._keyManager=new at(this._sortedHeaders).withWrap().withHomeAndEnd().withVerticalOrientation(this._orientation==="vertical"),this._keyManager.updateActiveItem(this.selectedIndex),(this._dir?this._dir.change:ye()).pipe(I(this._layoutDirection()),C(this._destroyed)).subscribe(e=>this._keyManager?.withHorizontalOrientation(e)),this._keyManager.updateActiveItem(this.selectedIndex),this.steps.changes.subscribe(()=>{this.selected||this._selectedIndex.set(Math.max(this.selectedIndex-1,0))}),this._isValidIndex(this.selectedIndex)||this._selectedIndex.set(0),this.linear&&this.selectedIndex>0){let e=this.steps.toArray().slice(0,this._selectedIndex());for(let t of e)t._markAsInteracted()}}ngOnDestroy(){this._keyManager?.destroy(),this.steps.destroy(),this._sortedHeaders.destroy(),this._destroyed.next(),this._destroyed.complete()}next(){this.selectedIndex=Math.min(this._selectedIndex()+1,this.steps.length-1)}previous(){this.selectedIndex=Math.max(this._selectedIndex()-1,0)}reset(){this._updateSelectedItemIndex(0),this.steps.forEach(e=>e.reset()),this._stateChanged()}_getStepLabelId(e){return`${this._groupId}-label-${e}`}_getStepContentId(e){return`${this._groupId}-content-${e}`}_stateChanged(){this._changeDetectorRef.markForCheck()}_getAnimationDirection(e){let t=e-this._selectedIndex();return t<0?this._layoutDirection()==="rtl"?"next":"previous":t>0?this._layoutDirection()==="rtl"?"previous":"next":"current"}_getFocusIndex(){return this._keyManager?this._keyManager.activeItemIndex:this._selectedIndex()}_updateSelectedItemIndex(e){let t=this.steps.toArray(),i=this._selectedIndex();this.selectionChange.emit({selectedIndex:e,previouslySelectedIndex:i,selectedStep:t[e],previouslySelectedStep:t[i]}),this._keyManager&&(this._containsFocus()?this._keyManager.setActiveItem(e):this._keyManager.updateActiveItem(e)),this._selectedIndex.set(e),this.selectedIndexChange.emit(e),this._stateChanged()}_onKeydown(e){let t=it(e),i=e.keyCode,s=this._keyManager;s?.activeItemIndex!=null&&!t&&(i===32||i===13)?(this.selectedIndex=s.activeItemIndex,e.preventDefault()):s?.setFocusOrigin("keyboard").onKeydown(e)}_anyControlsInvalidOrPending(e){return this.linear&&e>=0?this.steps.toArray().slice(0,e).some(t=>{let i=t.stepControl;return(i?i.invalid||i.pending||!t.interacted:!t.completed)&&!t.optional&&!t._completedOverride()}):!1}_layoutDirection(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_containsFocus(){let e=this._elementRef.nativeElement,t=Je();return e===t||e.contains(t)}_isValidIndex(e){return e>-1&&(!this.steps||e<this.steps.length)}static \u0275fac=function(t){return new(t||n)};static \u0275dir=x({type:n,selectors:[["","cdkStepper",""]],contentQueries:function(t,i,s){if(t&1&&F(s,pe,5)(s,fe,5),t&2){let c;v(c=b())&&(i._steps=c),v(c=b())&&(i._stepHeader=c)}},inputs:{linear:[2,"linear","linear",L],selectedIndex:[2,"selectedIndex","selectedIndex",Le],selected:"selected",orientation:"orientation"},outputs:{selectionChange:"selectionChange",selectedIndexChange:"selectedIndexChange"},exportAs:["cdkStepper"]})}return n})(),Bt=(()=>{class n{_stepper=m(H);type="submit";constructor(){}static \u0275fac=function(t){return new(t||n)};static \u0275dir=x({type:n,selectors:[["button","cdkStepperNext",""]],hostVars:1,hostBindings:function(t,i){t&1&&_("click",function(){return i._stepper.next()}),t&2&&N("type",i.type)},inputs:{type:"type"}})}return n})(),Vt=(()=>{class n{_stepper=m(H);type="button";constructor(){}static \u0275fac=function(t){return new(t||n)};static \u0275dir=x({type:n,selectors:[["button","cdkStepperPrevious",""]],hostVars:1,hostBindings:function(t,i){t&1&&_("click",function(){return i._stepper.previous()}),t&2&&N("type",i.type)},inputs:{type:"type"}})}return n})(),Qt=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=X({type:n});static \u0275inj=Z({imports:[re]})}return n})();var Xt=(n,o,e)=>({index:n,active:o,optional:e});function en(n,o){if(n&1&&M(0,2),n&2){let e=u();d("ngTemplateOutlet",e.iconOverrides[e.state])("ngTemplateOutletContext",Ne(2,Xt,e.index,e.active,e.optional))}}function tn(n,o){if(n&1&&(a(0,"span",7),p(1),r()),n&2){let e=u(2);l(),y(e._getDefaultTextForState(e.state))}}function nn(n,o){if(n&1&&(a(0,"span",8),p(1),r()),n&2){let e=u(3);l(),y(e._intl.completedLabel)}}function an(n,o){if(n&1&&(a(0,"span",8),p(1),r()),n&2){let e=u(3);l(),y(e._intl.editableLabel)}}function rn(n,o){if(n&1&&(f(0,nn,2,1,"span",8)(1,an,2,1,"span",8),a(2,"mat-icon",7),p(3),r()),n&2){let e=u(2);g(e.state==="done"?0:e.state==="edit"?1:-1),l(3),y(e._getDefaultTextForState(e.state))}}function on(n,o){if(n&1&&f(0,tn,2,1,"span",7)(1,rn,4,2),n&2){let e,t=u();g((e=t.state)==="number"?0:1)}}function sn(n,o){n&1&&(a(0,"div",4),M(1,9),r()),n&2&&(l(),d("ngTemplateOutlet",o.template))}function ln(n,o){if(n&1&&(a(0,"div",4),p(1),r()),n&2){let e=u();l(),y(e.label)}}function pn(n,o){if(n&1&&(a(0,"div",5),p(1),r()),n&2){let e=u();l(),y(e._intl.optionalLabel)}}function dn(n,o){if(n&1&&(a(0,"div",6),p(1),r()),n&2){let e=u();l(),y(e.errorMessage)}}var jt=["*"];function cn(n,o){}function mn(n,o){if(n&1&&($(0),E(1,cn,0,0,"ng-template",0)),n&2){let e=u();l(),d("cdkPortalOutlet",e._portal)}}var un=["animatedContainer"],qt=n=>({steps:n}),$t=n=>({step:n});function hn(n,o){n&1&&$(0)}function fn(n,o){if(n&1&&(a(0,"div",5),M(1,9)(2,6),r()),n&2){let e=u(2),t=w(6);l(),d("ngTemplateOutlet",e.headerPrefix()),l(),d("ngTemplateOutlet",t)("ngTemplateOutletContext",G(3,qt,e.steps))}}function gn(n,o){if(n&1&&M(0,6),n&2){let e=u(2),t=w(6);d("ngTemplateOutlet",t)("ngTemplateOutletContext",G(2,qt,e.steps))}}function _n(n,o){if(n&1&&(a(0,"div",10,2),M(2,9),r()),n&2){let e=o.$implicit,t=o.$index,i=u(2);ne("mat-horizontal-stepper-content-"+i._getAnimationDirection(t)),d("id",i._getStepContentId(t)),j("aria-labelledby",i._getStepLabelId(t))("inert",i.selectedIndex===t?null:""),l(2),d("ngTemplateOutlet",e.content)}}function vn(n,o){if(n&1&&(a(0,"div",3),f(1,fn,3,5,"div",5)(2,gn,1,4,"ng-container",6),a(3,"div",7),P(4,_n,3,6,"div",8,ee),r()()),n&2){let e=u();l(),g(e.headerPrefix()?1:2),l(3),R(e.steps)}}function bn(n,o){if(n&1&&M(0,9),n&2){let e=u(2);d("ngTemplateOutlet",e.headerPrefix())}}function xn(n,o){if(n&1&&(a(0,"div",11),M(1,6),a(2,"div",12,2)(4,"div",13)(5,"div",14),M(6,9),r()()()()),n&2){let e=o.$implicit,t=o.$index,i=o.$index,s=o.$count,c=u(2),de=w(4);l(),d("ngTemplateOutlet",de)("ngTemplateOutletContext",G(10,$t,e)),l(),T("mat-stepper-vertical-line",i!==s-1)("mat-vertical-content-container-active",c.selectedIndex===t),j("inert",c.selectedIndex===t?null:""),l(2),d("id",c._getStepContentId(t)),j("aria-labelledby",c._getStepLabelId(t)),l(2),d("ngTemplateOutlet",e.content)}}function yn(n,o){if(n&1&&(a(0,"div",4),f(1,bn,1,1,"ng-container",9),P(2,xn,7,12,"div",11,ee),r()),n&2){let e=u();l(),g(e.headerPrefix()?1:-1),l(),R(e.steps)}}function Mn(n,o){if(n&1){let e=Oe();a(0,"mat-step-header",15),_("click",function(){let i=ce(e).step;return me(i.select())})("keydown",function(i){ce(e);let s=u();return me(s._onKeydown(i))}),r()}if(n&2){let e=o.step,t=u();T("mat-horizontal-stepper-header",t.orientation==="horizontal")("mat-vertical-stepper-header",t.orientation==="vertical"),d("tabIndex",t._getFocusIndex()===e.index()?0:-1)("id",t._getStepLabelId(e.index()))("index",e.index())("state",e.indicatorType())("label",e.stepLabel||e.label)("selected",e.isSelected())("active",e.isNavigable())("optional",e.optional)("errorMessage",e.errorMessage)("iconOverrides",t._iconOverrides)("disableRipple",t.disableRipple||!e.isNavigable())("color",e.color||t.color),j("role",t.orientation==="horizontal"?"tab":"button")("aria-posinset",t.orientation==="horizontal"?e.index()+1:null)("aria-setsize",t.orientation==="horizontal"?t.steps.length:null)("aria-selected",t.orientation==="horizontal"?e.isSelected():null)("aria-current",t.orientation==="vertical"&&e.isSelected()?"step":null)("aria-disabled",t.orientation==="vertical"&&e.isSelected()?"true":null)("aria-expanded",t.orientation==="vertical"?e.isSelected():null)("aria-controls",t._getStepContentId(e.index()))("aria-label",e.ariaLabel||null)("aria-labelledby",!e.ariaLabel&&e.ariaLabelledby?e.ariaLabelledby:null)("aria-disabled",e.isNavigable()?null:!0)}}function Cn(n,o){n&1&&D(0,"div",17)}function Sn(n,o){if(n&1&&(M(0,6),f(1,Cn,1,0,"div",17)),n&2){let e=o.$implicit,t=o.$index,i=o.$count;u(2);let s=w(4);d("ngTemplateOutlet",s)("ngTemplateOutletContext",G(3,$t,e)),l(),g(t!==i-1?1:-1)}}function En(n,o){if(n&1&&(a(0,"div",16),P(1,Sn,2,5,null,null,ee),r()),n&2){let e=o.steps;l(),R(e)}}var K=(()=>{class n extends ge{static \u0275fac=(()=>{let e;return function(i){return(e||(e=B(n)))(i||n)}})();static \u0275dir=x({type:n,selectors:[["","matStepLabel",""]],features:[k]})}return n})(),Dn=(()=>{class n{changes=new W;optionalLabel="Optional";completedLabel="Completed";editableLabel="Editable";static \u0275fac=function(t){return new(t||n)};static \u0275prov=Se({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),_e=(()=>{class n extends fe{_intl=m(Dn);_focusMonitor=m(et);_intlSubscription;state;label;errorMessage;iconOverrides;index;selected=!1;active=!1;optional=!1;disableRipple=!1;color;constructor(){super();let e=m(tt);e.load(gt),e.load(nt);let t=m(ae);this._intlSubscription=this._intl.changes.subscribe(()=>t.markForCheck())}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0)}ngOnDestroy(){this._intlSubscription.unsubscribe(),this._focusMonitor.stopMonitoring(this._elementRef)}focus(e,t){e?this._focusMonitor.focusVia(this._elementRef,e,t):this._elementRef.nativeElement.focus(t)}_stringLabel(){return this.label instanceof K?null:this.label}_templateLabel(){return this.label instanceof K?this.label:null}_getHostElement(){return this._elementRef.nativeElement}_getDefaultTextForState(e){return e=="number"?`${this.index+1}`:e=="edit"?"create":e=="error"?"warning":e}_hasEmptyLabel(){return!this._stringLabel()&&!this._templateLabel()&&!this._hasOptionalLabel()&&!this._hasErrorLabel()}_hasOptionalLabel(){return this.optional&&this.state!=="error"}_hasErrorLabel(){return this.state==="error"}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=S({type:n,selectors:[["mat-step-header"]],hostAttrs:["role","",1,"mat-step-header"],hostVars:4,hostBindings:function(t,i){t&2&&(ne("mat-"+(i.color||"primary")),T("mat-step-header-empty-label",i._hasEmptyLabel()))},inputs:{state:"state",label:"label",errorMessage:"errorMessage",iconOverrides:"iconOverrides",index:"index",selected:"selected",active:"active",optional:"optional",disableRipple:"disableRipple",color:"color"},features:[k],decls:10,vars:17,consts:[["matRipple","",1,"mat-step-header-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled"],[1,"mat-step-icon-content"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"mat-step-label"],[1,"mat-step-text-label"],[1,"mat-step-optional"],[1,"mat-step-sub-label-error"],["aria-hidden","true"],[1,"cdk-visually-hidden"],[3,"ngTemplateOutlet"]],template:function(t,i){if(t&1&&(D(0,"div",0),a(1,"div")(2,"div",1),f(3,en,1,6,"ng-container",2)(4,on,2,1),r()(),a(5,"div",3),f(6,sn,2,1,"div",4)(7,ln,2,1,"div",4),f(8,pn,2,1,"div",5),f(9,dn,2,1,"div",6),r()),t&2){let s;d("matRippleTrigger",i._getHostElement())("matRippleDisabled",i.disableRipple),l(),ne(Re("mat-step-icon-state-",i.state," mat-step-icon")),T("mat-step-icon-selected",i.selected),l(2),g(i.iconOverrides&&i.iconOverrides[i.state]?3:4),l(2),T("mat-step-label-active",i.active)("mat-step-label-selected",i.selected)("mat-step-label-error",i.state=="error"),l(),g((s=i._templateLabel())?6:i._stringLabel()?7:-1,s),l(2),g(i._hasOptionalLabel()?8:-1),l(),g(i._hasErrorLabel()?9:-1)}},dependencies:[ft,he,se],styles:[`.mat-step-header {
  overflow: hidden;
  outline: none;
  cursor: pointer;
  position: relative;
  box-sizing: content-box;
  -webkit-tap-highlight-color: transparent;
}
.mat-step-header:focus-visible .mat-focus-indicator::before {
  content: "";
}
.mat-step-header:hover[aria-disabled=true] {
  cursor: default;
}
.mat-step-header:hover:not([aria-disabled]), .mat-step-header:hover[aria-disabled=false] {
  background-color: var(--mat-stepper-header-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent));
  border-radius: var(--mat-stepper-header-hover-state-layer-shape, var(--mat-sys-corner-medium));
}
.mat-step-header.cdk-keyboard-focused, .mat-step-header.cdk-program-focused {
  background-color: var(--mat-stepper-header-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent));
  border-radius: var(--mat-stepper-header-focus-state-layer-shape, var(--mat-sys-corner-medium));
}
@media (hover: none) {
  .mat-step-header:hover {
    background: none;
  }
}
@media (forced-colors: active) {
  .mat-step-header {
    outline: solid 1px;
  }
  .mat-step-header[aria-selected=true] .mat-step-label {
    text-decoration: underline;
  }
  .mat-step-header[aria-disabled=true] {
    outline-color: GrayText;
  }
  .mat-step-header[aria-disabled=true] .mat-step-label,
  .mat-step-header[aria-disabled=true] .mat-step-icon,
  .mat-step-header[aria-disabled=true] .mat-step-optional {
    color: GrayText;
  }
}

.mat-step-optional {
  font-size: 12px;
  color: var(--mat-stepper-header-optional-label-text-color, var(--mat-sys-on-surface-variant));
}

.mat-step-sub-label-error {
  font-size: 12px;
  font-weight: normal;
}

.mat-step-icon {
  border-radius: 50%;
  height: 24px;
  width: 24px;
  flex-shrink: 0;
  position: relative;
  color: var(--mat-stepper-header-icon-foreground-color, var(--mat-sys-surface));
  background-color: var(--mat-stepper-header-icon-background-color, var(--mat-sys-on-surface-variant));
}

.mat-step-icon-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
}

.mat-step-icon .mat-icon {
  font-size: 16px;
  height: 16px;
  width: 16px;
}

.mat-step-icon-state-error {
  background-color: var(--mat-stepper-header-error-state-icon-background-color, transparent);
  color: var(--mat-stepper-header-error-state-icon-foreground-color, var(--mat-sys-error));
}
.mat-step-icon-state-error .mat-icon {
  font-size: 24px;
  height: 24px;
  width: 24px;
}

.mat-step-label {
  display: inline-block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  min-width: 50px;
  vertical-align: middle;
  font-family: var(--mat-stepper-header-label-text-font, var(--mat-sys-title-small-font));
  font-size: var(--mat-stepper-header-label-text-size, var(--mat-sys-title-small-size));
  font-weight: var(--mat-stepper-header-label-text-weight, var(--mat-sys-title-small-weight));
  color: var(--mat-stepper-header-label-text-color, var(--mat-sys-on-surface-variant));
}
.mat-step-label.mat-step-label-active {
  color: var(--mat-stepper-header-selected-state-label-text-color, var(--mat-sys-on-surface-variant));
}
.mat-step-label.mat-step-label-error {
  color: var(--mat-stepper-header-error-state-label-text-color, var(--mat-sys-error));
  font-size: var(--mat-stepper-header-error-state-label-text-size, var(--mat-sys-title-small-size));
}
.mat-step-label.mat-step-label-selected {
  font-size: var(--mat-stepper-header-selected-state-label-text-size, var(--mat-sys-title-small-size));
  font-weight: var(--mat-stepper-header-selected-state-label-text-weight, var(--mat-sys-title-small-weight));
}
.mat-step-header-empty-label .mat-step-label {
  min-width: 0;
}

.mat-step-text-label {
  text-overflow: ellipsis;
  overflow: hidden;
}

.mat-step-header .mat-step-header-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}

.mat-step-icon-selected {
  background-color: var(--mat-stepper-header-selected-state-icon-background-color, var(--mat-sys-primary));
  color: var(--mat-stepper-header-selected-state-icon-foreground-color, var(--mat-sys-on-primary));
}

.mat-step-icon-state-done {
  background-color: var(--mat-stepper-header-done-state-icon-background-color, var(--mat-sys-primary));
  color: var(--mat-stepper-header-done-state-icon-foreground-color, var(--mat-sys-on-primary));
}

.mat-step-icon-state-edit {
  background-color: var(--mat-stepper-header-edit-state-icon-background-color, var(--mat-sys-primary));
  color: var(--mat-stepper-header-edit-state-icon-foreground-color, var(--mat-sys-on-primary));
}
`],encapsulation:2,changeDetection:0})}return n})(),In=(()=>{class n{templateRef=m(O);name;constructor(){}static \u0275fac=function(t){return new(t||n)};static \u0275dir=x({type:n,selectors:[["ng-template","matStepperIcon",""]],inputs:{name:[0,"matStepperIcon","name"]}})}return n})(),kn=(()=>{class n{_template=m(O);constructor(){}static \u0275fac=function(t){return new(t||n)};static \u0275dir=x({type:n,selectors:[["ng-template","matStepContent",""]]})}return n})(),ve=(()=>{class n extends pe{_errorStateMatcher=m(oe,{skipSelf:!0});_viewContainerRef=m(we);_isSelected=xe.EMPTY;stepLabel=void 0;color;_lazyContent;_portal;ngAfterContentInit(){this._isSelected=this._stepper.steps.changes.pipe(Ce(()=>this._stepper.selectionChange.pipe(Me(e=>e.selectedStep===this),I(this._stepper.selected===this)))).subscribe(e=>{e&&this._lazyContent&&!this._portal&&(this._portal=new yt(this._lazyContent._template,this._viewContainerRef))})}ngOnDestroy(){this._isSelected.unsubscribe()}isErrorState(e,t){let i=this._errorStateMatcher.isErrorState(e,t),s=!!(e&&e.invalid&&this.interacted);return i||s}static \u0275fac=(()=>{let e;return function(i){return(e||(e=B(n)))(i||n)}})();static \u0275cmp=S({type:n,selectors:[["mat-step"]],contentQueries:function(t,i,s){if(t&1&&F(s,K,5)(s,kn,5),t&2){let c;v(c=b())&&(i.stepLabel=c.first),v(c=b())&&(i._lazyContent=c.first)}},hostAttrs:["hidden",""],inputs:{color:"color"},exportAs:["matStep"],features:[U([{provide:oe,useExisting:n},{provide:pe,useExisting:n}]),k],ngContentSelectors:jt,decls:1,vars:0,consts:[[3,"cdkPortalOutlet"]],template:function(t,i){t&1&&(q(),E(0,mn,2,1,"ng-template"))},dependencies:[Mt],encapsulation:2,changeDetection:0})}return n})(),be=(()=>{class n extends H{_ngZone=m(De);_renderer=m(ke);_animationsDisabled=ot();_cleanupTransition;_isAnimating=h(!1);_stepHeader=void 0;_animatedContainers;_steps=void 0;steps=new Q;_icons;animationDone=new z;disableRipple=!1;color;labelPosition="end";headerPosition="top";headerPrefix=Fe(null);_iconOverrides={};get animationDuration(){return this._animationDuration}set animationDuration(e){this._animationDuration=/^\d+$/.test(e)?e+"ms":e}_animationDuration="";_isServer=!m(Xe).isBrowser;constructor(){super();let t=m(V).nativeElement.nodeName.toLowerCase();this.orientation=t==="mat-vertical-stepper"?"vertical":"horizontal"}ngAfterContentInit(){super.ngAfterContentInit(),this._icons.forEach(({name:e,templateRef:t})=>this._iconOverrides[e]=t),this.steps.changes.pipe(C(this._destroyed)).subscribe(()=>this._stateChanged()),this.selectedIndexChange.pipe(C(this._destroyed)).subscribe(()=>{let e=this._getAnimationDuration();e==="0ms"||e==="0s"?this._onAnimationDone():this._isAnimating.set(!0)}),this._ngZone.runOutsideAngular(()=>{this._animationsDisabled||setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-stepper-animations-enabled"),this._cleanupTransition=this._renderer.listen(this._elementRef.nativeElement,"transitionend",this._handleTransitionend)},200)})}ngAfterViewInit(){if(super.ngAfterViewInit(),typeof queueMicrotask=="function"){let e=!1;this._animatedContainers.changes.pipe(I(null),C(this._destroyed)).subscribe(()=>queueMicrotask(()=>{e||(e=!0,this.animationDone.emit()),this._stateChanged()}))}}ngOnDestroy(){super.ngOnDestroy(),this._cleanupTransition?.()}_getAnimationDuration(){return this._animationsDisabled?"0ms":this.animationDuration?this.animationDuration:this.orientation==="horizontal"?"500ms":"225ms"}_handleTransitionend=e=>{let t=e.target;if(!t)return;let i=this.orientation==="horizontal"&&e.propertyName==="transform"&&t.classList.contains("mat-horizontal-stepper-content-current"),s=this.orientation==="vertical"&&e.propertyName==="grid-template-rows"&&t.classList.contains("mat-vertical-content-container-active");(i||s)&&this._animatedContainers.find(de=>de.nativeElement===t)&&this._onAnimationDone()};_onAnimationDone(){this._isAnimating.set(!1),this.animationDone.emit()}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=S({type:n,selectors:[["mat-stepper"],["mat-vertical-stepper"],["mat-horizontal-stepper"],["","matStepper",""]],contentQueries:function(t,i,s){if(t&1&&F(s,ve,5)(s,In,5),t&2){let c;v(c=b())&&(i._steps=c),v(c=b())&&(i._icons=c)}},viewQuery:function(t,i){if(t&1&&te(_e,5)(un,5),t&2){let s;v(s=b())&&(i._stepHeader=s),v(s=b())&&(i._animatedContainers=s)}},hostVars:14,hostBindings:function(t,i){t&2&&(Pe("--mat-stepper-animation-duration",i._getAnimationDuration()),T("mat-stepper-horizontal",i.orientation==="horizontal")("mat-stepper-vertical",i.orientation==="vertical")("mat-stepper-label-position-end",i.orientation==="horizontal"&&i.labelPosition=="end")("mat-stepper-label-position-bottom",i.orientation==="horizontal"&&i.labelPosition=="bottom")("mat-stepper-header-position-bottom",i.headerPosition==="bottom")("mat-stepper-animating",i._isAnimating()))},inputs:{disableRipple:"disableRipple",color:"color",labelPosition:"labelPosition",headerPosition:"headerPosition",headerPrefix:[1,"headerPrefix"],animationDuration:"animationDuration"},outputs:{animationDone:"animationDone"},exportAs:["matStepper","matVerticalStepper","matHorizontalStepper"],features:[U([{provide:H,useExisting:n}]),k],ngContentSelectors:jt,decls:7,vars:2,consts:[["stepTemplate",""],["horizontalStepsTemplate",""],["animatedContainer",""],[1,"mat-horizontal-stepper-wrapper"],[1,"mat-vertical-stepper-wrapper"],[1,"mat-horizontal-stepper-header-wrapper"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"mat-horizontal-content-container"],["role","tabpanel",1,"mat-horizontal-stepper-content",3,"id","class"],[3,"ngTemplateOutlet"],["role","tabpanel",1,"mat-horizontal-stepper-content",3,"id"],[1,"mat-step"],[1,"mat-vertical-content-container"],["role","region",1,"mat-vertical-stepper-content",3,"id"],[1,"mat-vertical-content"],[3,"click","keydown","tabIndex","id","index","state","label","selected","active","optional","errorMessage","iconOverrides","disableRipple","color"],["aria-orientation","horizontal","role","tablist",1,"mat-horizontal-stepper-header-container"],[1,"mat-stepper-horizontal-line"]],template:function(t,i){if(t&1&&(q(),f(0,hn,1,0),f(1,vn,6,1,"div",3)(2,yn,4,1,"div",4),E(3,Mn,1,27,"ng-template",null,0,ue)(5,En,3,0,"ng-template",null,1,ue)),t&2){let s;g(i._isServer?0:-1),l(),g((s=i.orientation)==="horizontal"?1:s==="vertical"?2:-1)}},dependencies:[he,_e],styles:[`.mat-stepper-vertical,
.mat-stepper-horizontal {
  display: block;
  font-family: var(--mat-stepper-container-text-font, var(--mat-sys-body-medium-font));
  background: var(--mat-stepper-container-color, var(--mat-sys-surface));
}

.mat-horizontal-stepper-header-wrapper {
  align-items: center;
  display: flex;
}

.mat-horizontal-stepper-header-container {
  white-space: nowrap;
  display: flex;
  align-items: center;
  flex-grow: 1;
}
.mat-stepper-label-position-bottom .mat-horizontal-stepper-header-container {
  align-items: flex-start;
}
.mat-stepper-header-position-bottom .mat-horizontal-stepper-header-container {
  order: 1;
}

.mat-stepper-horizontal-line {
  border-top-width: 1px;
  border-top-style: solid;
  flex: auto;
  height: 0;
  margin: 0 -16px;
  min-width: 32px;
  border-top-color: var(--mat-stepper-line-color, var(--mat-sys-outline));
}
.mat-stepper-label-position-bottom .mat-stepper-horizontal-line {
  margin: 0;
  min-width: 0;
  position: relative;
  top: calc(calc((var(--mat-stepper-header-height, 72px) - 24px) / 2) + 12px);
}

.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::before, [dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::before, .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::after, [dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::after {
  border-top-width: 1px;
  border-top-style: solid;
  content: "";
  display: inline-block;
  height: 0;
  position: absolute;
  width: calc(50% - 20px);
}

.mat-horizontal-stepper-header {
  display: flex;
  overflow: hidden;
  align-items: center;
  padding: 0 24px;
  height: var(--mat-stepper-header-height, 72px);
}
.mat-horizontal-stepper-header .mat-step-icon {
  margin-right: 8px;
  flex: none;
}
[dir=rtl] .mat-horizontal-stepper-header .mat-step-icon {
  margin-right: 0;
  margin-left: 8px;
}
.mat-horizontal-stepper-header.mat-step-header-empty-label .mat-step-icon {
  margin: 0;
}
.mat-horizontal-stepper-header::before, .mat-horizontal-stepper-header::after {
  border-top-color: var(--mat-stepper-line-color, var(--mat-sys-outline));
}
.mat-stepper-label-position-bottom .mat-horizontal-stepper-header {
  padding: calc((var(--mat-stepper-header-height, 72px) - 24px) / 2) 24px;
}
.mat-stepper-label-position-bottom .mat-horizontal-stepper-header::before, .mat-stepper-label-position-bottom .mat-horizontal-stepper-header::after {
  top: calc(calc((var(--mat-stepper-header-height, 72px) - 24px) / 2) + 12px);
}
.mat-stepper-label-position-bottom .mat-horizontal-stepper-header {
  box-sizing: border-box;
  flex-direction: column;
  height: auto;
}
.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::after, [dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::after {
  right: 0;
}
.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::before, [dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::before {
  left: 0;
}
[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:last-child::before, [dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:first-child::after {
  display: none;
}
.mat-stepper-label-position-bottom .mat-horizontal-stepper-header .mat-step-icon {
  margin-right: 0;
  margin-left: 0;
}
.mat-stepper-label-position-bottom .mat-horizontal-stepper-header .mat-step-label {
  padding: 16px 0 0 0;
  text-align: center;
  width: 100%;
}

.mat-vertical-stepper-header {
  display: flex;
  align-items: center;
  height: 24px;
  padding: calc((var(--mat-stepper-header-height, 72px) - 24px) / 2) 24px;
}
.mat-vertical-stepper-header .mat-step-icon {
  margin-right: 12px;
}
[dir=rtl] .mat-vertical-stepper-header .mat-step-icon {
  margin-right: 0;
  margin-left: 12px;
}

.mat-horizontal-stepper-wrapper {
  display: flex;
  flex-direction: column;
}

.mat-horizontal-stepper-content {
  visibility: hidden;
  overflow: hidden;
  outline: 0;
  height: 0;
}
.mat-stepper-animations-enabled .mat-horizontal-stepper-content {
  transition: transform var(--mat-stepper-animation-duration, 0) cubic-bezier(0.35, 0, 0.25, 1);
}
.mat-horizontal-stepper-content.mat-horizontal-stepper-content-previous {
  transform: translate3d(-100%, 0, 0);
}
.mat-horizontal-stepper-content.mat-horizontal-stepper-content-next {
  transform: translate3d(100%, 0, 0);
}
.mat-horizontal-stepper-content.mat-horizontal-stepper-content-current {
  visibility: visible;
  transform: none;
  height: auto;
}
.mat-stepper-horizontal:not(.mat-stepper-animating) .mat-horizontal-stepper-content.mat-horizontal-stepper-content-current {
  overflow: visible;
}

.mat-horizontal-content-container {
  overflow: hidden;
  padding: 0 24px 24px 24px;
}
@media (forced-colors: active) {
  .mat-horizontal-content-container {
    outline: solid 1px;
  }
}
.mat-stepper-header-position-bottom .mat-horizontal-content-container {
  padding: 24px 24px 0 24px;
}

.mat-vertical-content-container {
  display: grid;
  grid-template-rows: 0fr;
  grid-template-columns: 100%;
  margin-left: 36px;
  border: 0;
  position: relative;
}
.mat-stepper-animations-enabled .mat-vertical-content-container {
  transition: grid-template-rows var(--mat-stepper-animation-duration, 0) cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-vertical-content-container.mat-vertical-content-container-active {
  grid-template-rows: 1fr;
}
.mat-step:last-child .mat-vertical-content-container {
  border: none;
}
@media (forced-colors: active) {
  .mat-vertical-content-container {
    outline: solid 1px;
  }
}
[dir=rtl] .mat-vertical-content-container {
  margin-left: 0;
  margin-right: 36px;
}
@supports not (grid-template-rows: 0fr) {
  .mat-vertical-content-container {
    height: 0;
  }
  .mat-vertical-content-container.mat-vertical-content-container-active {
    height: auto;
  }
}

.mat-stepper-vertical-line::before {
  content: "";
  position: absolute;
  left: 0;
  border-left-width: 1px;
  border-left-style: solid;
  border-left-color: var(--mat-stepper-line-color, var(--mat-sys-outline));
  top: calc(8px - calc((var(--mat-stepper-header-height, 72px) - 24px) / 2));
  bottom: calc(8px - calc((var(--mat-stepper-header-height, 72px) - 24px) / 2));
}
[dir=rtl] .mat-stepper-vertical-line::before {
  left: auto;
  right: 0;
}

.mat-vertical-stepper-content {
  overflow: hidden;
  outline: 0;
  visibility: hidden;
}
.mat-stepper-animations-enabled .mat-vertical-stepper-content {
  transition: visibility var(--mat-stepper-animation-duration, 0) linear;
}
.mat-vertical-content-container-active > .mat-vertical-stepper-content {
  visibility: visible;
}

.mat-vertical-content {
  padding: 0 24px 24px 24px;
}
`],encapsulation:2,changeDetection:0})}return n})(),Ut=(()=>{class n extends Bt{static \u0275fac=(()=>{let e;return function(i){return(e||(e=B(n)))(i||n)}})();static \u0275dir=x({type:n,selectors:[["button","matStepperNext",""]],hostAttrs:[1,"mat-stepper-next"],hostVars:1,hostBindings:function(t,i){t&2&&N("type",i.type)},features:[k]})}return n})(),Gt=(()=>{class n extends Vt{static \u0275fac=(()=>{let e;return function(i){return(e||(e=B(n)))(i||n)}})();static \u0275dir=x({type:n,selectors:[["button","matStepperPrevious",""]],hostAttrs:[1,"mat-stepper-previous"],hostVars:1,hostBindings:function(t,i){t&2&&N("type",i.type)},features:[k]})}return n})(),Kt=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=X({type:n});static \u0275inj=Z({providers:[oe],imports:[Ct,Qt,le,vt,be,_e,re]})}return n})();var Tn=(n,o)=>o.nom;function An(n,o){n&1&&p(0,"Devoir")}function zn(n,o){if(n&1&&(a(0,"mat-option",16)(1,"div",30),D(2,"img",31),a(3,"span"),p(4),r()()()),n&2){let e=o.$implicit;d("value",e.nom),l(2),d("src",e.image,Y)("alt",e.nom),l(2),y(e.nom)}}function On(n,o){if(n&1&&(a(0,"div",17),D(1,"img",32),a(2,"div")(3,"span",33),p(4,"Professeur"),r(),a(5,"span",34),p(6),r()()()),n&2){let e=u();l(),d("src",e.selectedMatiere.photoProf,Y)("alt",e.selectedMatiere.prof),l(5),y(e.selectedMatiere.prof)}}function Pn(n,o){n&1&&p(0,"Auteur")}function Rn(n,o){if(n&1&&(a(0,"div",22),D(1,"img",35),r()),n&2){let e=u();l(),d("src",e.photoAuteur(),Y)}}function Nn(n,o){n&1&&p(0,"Note & Statut")}function Fn(n,o){n&1&&(a(0,"p",28)(1,"mat-icon"),p(2,"warning"),r(),p(3,' Vous devez ajouter une note pour marquer "rendu". '),r())}function Ln(n,o){n&1&&p(0," Enregistrement... ")}function Hn(n,o){n&1&&(Ae(0),a(1,"mat-icon"),p(2,"save"),r(),p(3," Enregistrer"),ze())}var Wt=class n{constructor(o,e,t){this.assignmentsService=o;this.router=e;this.snackBar=t}matieres=Tt;nom=h("");dateDeRendu=h(new Date);matiereSelectionnee=h("");auteur=h("");photoAuteur=h("");note=h(null);remarques=h("");rendu=h(!1);loading=h(!1);get selectedMatiere(){return this.matieres.find(o=>o.nom===this.matiereSelectionnee())||null}onMatiereChange(o){this.matiereSelectionnee.set(o)}onSubmit(){if(this.rendu()&&(this.note()===null||this.note()===void 0)){this.snackBar.open('Impossible de marquer "rendu" sans note !',"Fermer",{duration:4e3,panelClass:"snack-error"});return}let o=this.selectedMatiere,e=new wt;e.nom=this.nom(),e.dateDeRendu=this.dateDeRendu(),e.auteur=this.auteur(),e.photoAuteur=this.photoAuteur()||`https://i.pravatar.cc/150?img=${Math.floor(Math.random()*70)+1}`,e.matiere=this.matiereSelectionnee(),e.imageMatiere=o?o.image:"",e.professorName=o?o.prof:"",e.photoProf=o?o.photoProf:"",e.note=this.note(),e.remarques=this.remarques(),e.rendu=this.rendu(),this.loading.set(!0),this.assignmentsService.addAssignment(e).subscribe({next:()=>{this.loading.set(!1),this.snackBar.open("Assignment ajout\xE9 avec succ\xE8s ! \u{1F389}","Fermer",{duration:3e3,panelClass:"snack-success"}),this.router.navigate(["/home"])},error:t=>{this.loading.set(!1),this.snackBar.open(t.error?.message||"Erreur lors de l'ajout.","Fermer",{duration:4e3,panelClass:"snack-error"})}})}static \u0275fac=function(e){return new(e||n)(J(At),J(Be),J(St))};static \u0275cmp=S({type:n,selectors:[["app-add-assignment"]],features:[U([Nt()])],decls:111,vars:19,consts:[["stepper",""],["picker",""],[1,"add-page"],[1,"page-header"],["mat-icon-button","","routerLink","/home"],["linear","",1,"add-stepper"],[3,"completed"],["matStepLabel",""],[1,"step-content"],[1,"step-title"],["appearance","outline",1,"full-width"],["matInput","","placeholder","ex: TP Bases de donn\xE9es N\xB03",3,"ngModelChange","ngModel"],["matPrefix",""],["matInput","",3,"ngModelChange","matDatepicker","ngModel"],["matSuffix","",3,"for"],[3,"ngModelChange","ngModel"],[3,"value"],[1,"prof-preview"],[1,"step-actions"],["mat-raised-button","","color","primary","matStepperNext","",3,"disabled"],["matInput","","placeholder","ex: Ibrahim Yankine",3,"ngModelChange","ngModel"],["matInput","","placeholder","https://...",3,"ngModelChange","ngModel"],[1,"photo-preview"],["mat-stroked-button","","matStepperPrevious",""],["matInput","","type","number","min","0","max","20","placeholder","ex: 15",3,"ngModelChange","ngModel"],["matInput","","rows","4","placeholder","Commentaires sur le devoir...",3,"ngModelChange","ngModel"],[1,"rendu-toggle"],["color","primary",3,"ngModelChange","ngModel"],[1,"warning-rendu"],["mat-raised-button","","color","accent",3,"click","disabled"],[1,"matiere-option"],[1,"option-img",3,"src","alt"],[1,"prof-avatar",3,"src","alt"],[1,"prof-label"],[1,"prof-name"],["alt","Photo auteur",1,"preview-avatar",3,"src"]],template:function(e,t){if(e&1&&(a(0,"div",2)(1,"div",3)(2,"button",4)(3,"mat-icon"),p(4,"arrow_back"),r()(),a(5,"h1")(6,"mat-icon"),p(7,"add_circle"),r(),p(8," Ajouter un Assignment"),r()(),a(9,"mat-stepper",5,0)(11,"mat-step",6),E(12,An,1,0,"ng-template",7),a(13,"div",8)(14,"h2",9)(15,"mat-icon"),p(16,"description"),r(),p(17," Informations du devoir"),r(),a(18,"mat-form-field",10)(19,"mat-label"),p(20,"Nom du devoir *"),r(),a(21,"input",11),_("ngModelChange",function(s){return t.nom.set(s)}),r(),a(22,"mat-icon",12),p(23,"title"),r()(),a(24,"mat-form-field",10)(25,"mat-label"),p(26,"Date de rendu *"),r(),a(27,"input",13),_("ngModelChange",function(s){return t.dateDeRendu.set(s)}),r(),D(28,"mat-datepicker-toggle",14)(29,"mat-datepicker",null,1),a(31,"mat-icon",12),p(32,"event"),r()(),a(33,"mat-form-field",10)(34,"mat-label"),p(35,"Mati\xE8re *"),r(),a(36,"mat-select",15),_("ngModelChange",function(s){return t.onMatiereChange(s)}),P(37,zn,5,4,"mat-option",16,Tn),r(),a(39,"mat-icon",12),p(40,"book"),r()(),f(41,On,7,3,"div",17),a(42,"div",18)(43,"button",19),p(44," Suivant "),a(45,"mat-icon"),p(46,"arrow_forward"),r()()()()(),a(47,"mat-step",6),E(48,Pn,1,0,"ng-template",7),a(49,"div",8)(50,"h2",9)(51,"mat-icon"),p(52,"person"),r(),p(53," Informations de l'auteur"),r(),a(54,"mat-form-field",10)(55,"mat-label"),p(56,"Nom de l'auteur (\xE9tudiant) *"),r(),a(57,"input",20),_("ngModelChange",function(s){return t.auteur.set(s)}),r(),a(58,"mat-icon",12),p(59,"person"),r()(),a(60,"mat-form-field",10)(61,"mat-label"),p(62,"URL photo (optionnel)"),r(),a(63,"input",21),_("ngModelChange",function(s){return t.photoAuteur.set(s)}),r(),a(64,"mat-icon",12),p(65,"image"),r(),a(66,"mat-hint"),p(67,"Laissez vide pour une photo g\xE9n\xE9r\xE9e automatiquement"),r()(),f(68,Rn,2,1,"div",22),a(69,"div",18)(70,"button",23)(71,"mat-icon"),p(72,"arrow_back"),r(),p(73," Pr\xE9c\xE9dent "),r(),a(74,"button",19),p(75," Suivant "),a(76,"mat-icon"),p(77,"arrow_forward"),r()()()()(),a(78,"mat-step"),E(79,Nn,1,0,"ng-template",7),a(80,"div",8)(81,"h2",9)(82,"mat-icon"),p(83,"grade"),r(),p(84," Note et statut"),r(),a(85,"mat-form-field",10)(86,"mat-label"),p(87,"Note sur 20"),r(),a(88,"input",24),_("ngModelChange",function(s){return t.note.set(s!==""?+s:null)}),r(),a(89,"mat-icon",12),p(90,"grade"),r(),a(91,"mat-hint"),p(92,"Laissez vide si le devoir n'est pas encore not\xE9"),r()(),a(93,"mat-form-field",10)(94,"mat-label"),p(95,"Remarques"),r(),a(96,"textarea",25),_("ngModelChange",function(s){return t.remarques.set(s)}),r(),a(97,"mat-icon",12),p(98,"comment"),r()(),a(99,"div",26)(100,"mat-slide-toggle",27),_("ngModelChange",function(s){return t.rendu.set(s)}),p(101," Marquer comme rendu "),r(),f(102,Fn,4,0,"p",28),r(),a(103,"div",18)(104,"button",23)(105,"mat-icon"),p(106,"arrow_back"),r(),p(107," Pr\xE9c\xE9dent "),r(),a(108,"button",29),_("click",function(){return t.onSubmit()}),f(109,Ln,1,0)(110,Hn,4,0,"ng-container"),r()()()()()()),e&2){let i=w(30);l(11),d("completed",t.nom()&&t.dateDeRendu()&&t.matiereSelectionnee()),l(10),d("ngModel",t.nom()),l(6),d("matDatepicker",i)("ngModel",t.dateDeRendu()),l(),d("for",i),l(8),d("ngModel",t.matiereSelectionnee()),l(),R(t.matieres),l(4),g(t.selectedMatiere?41:-1),l(2),d("disabled",!t.nom()||!t.dateDeRendu()||!t.matiereSelectionnee()),l(4),d("completed",!!t.auteur()),l(10),d("ngModel",t.auteur()),l(6),d("ngModel",t.photoAuteur()),l(5),g(t.photoAuteur()?68:-1),l(6),d("disabled",!t.auteur()),l(14),d("ngModel",t.note()),l(8),d("ngModel",t.remarques()),l(4),d("ngModel",t.rendu()),l(2),g(t.rendu()&&t.note()===null?102:-1),l(6),d("disabled",t.loading()||t.rendu()&&t.note()===null),l(),g(t.loading()?109:110)}},dependencies:[He,We,Qe,Ue,qe,Ke,Ge,$e,Ve,Kt,ve,K,be,Ut,Gt,mt,ct,st,lt,pt,dt,ht,ut,xt,bt,_t,le,se,kt,It,Dt,Rt,zt,Ot,Pt,Lt,Ft,Et,Ye],styles:[".add-page[_ngcontent-%COMP%]{max-width:700px;margin:0 auto}.page-header[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;margin-bottom:24px}.page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;margin:0;font-size:22px;font-weight:700;color:#1a1a2e}.add-stepper[_ngcontent-%COMP%]{border-radius:12px;box-shadow:0 4px 20px #0000001a}.step-content[_ngcontent-%COMP%]{padding:24px 16px;max-width:560px}.step-title[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;font-size:18px;font-weight:600;color:#1a1a2e;margin-bottom:20px}.full-width[_ngcontent-%COMP%]{width:100%;margin-bottom:12px}.matiere-option[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px}.option-img[_ngcontent-%COMP%]{width:24px;height:24px;object-fit:contain}.prof-preview[_ngcontent-%COMP%]{display:flex;align-items:center;gap:14px;padding:12px 16px;background:#f0f4ff;border-radius:10px;margin-bottom:16px}.prof-avatar[_ngcontent-%COMP%]{width:48px;height:48px;border-radius:50%;object-fit:cover;border:2px solid #667eea}.prof-label[_ngcontent-%COMP%]{display:block;font-size:11px;color:#999;text-transform:uppercase;letter-spacing:.5px}.prof-name[_ngcontent-%COMP%]{font-weight:600;font-size:15px;color:#1a1a2e}.photo-preview[_ngcontent-%COMP%]{display:flex;justify-content:center;margin-bottom:16px}.preview-avatar[_ngcontent-%COMP%]{width:80px;height:80px;border-radius:50%;object-fit:cover;border:3px solid #667eea}.step-actions[_ngcontent-%COMP%]{display:flex;gap:12px;margin-top:20px}.rendu-toggle[_ngcontent-%COMP%]{margin-top:12px;padding:16px;background:#f9f9f9;border-radius:10px}.warning-rendu[_ngcontent-%COMP%]{display:flex;align-items:center;gap:6px;color:#f57c00;font-size:13px;margin-top:8px}.warning-rendu[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:18px;width:18px;height:18px}"]})};export{Wt as AddAssignment};
