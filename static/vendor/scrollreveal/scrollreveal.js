(function(root,factory){if(typeof define==='function'&&define.amd){define(factory)}else if(typeof exports==='object'){module.exports=factory(require,exports,module)}else{root.ScrollReveal=factory()}}(this,function(require,exports,module){;(function(){'use strict';var sr,Tools,_requestAnimationFrame;this.ScrollReveal=(function(){ScrollReveal.prototype.defaults={origin:'bottom',distance:'20px',duration:500,delay:0,rotate:{x:0,y:0,z:0},opacity:0,scale:0.9,easing:'cubic-bezier(0.6, 0.2, 0.1, 1)',container:null,mobile:!0,reset:!1,useDelay:'always',viewFactor:0.2,viewOffset:{top:0,right:0,bottom:0,left:0},afterReveal:function(domEl){},afterReset:function(domEl){}};function ScrollReveal(config){if(typeof this=='undefined'||Object.getPrototypeOf(this)!==ScrollReveal.prototype){return new ScrollReveal(config)}
sr=this;sr.tools=new Tools();if(sr.isSupported()){sr.tools.extend(sr.defaults,config||{});_resolveContainer(sr.defaults);sr.store={elements:{},containers:[]};sr.sequences={};sr.history=[];sr.uid=0;sr.initialized=!1}
else if(typeof console!=='undefined'&&console!==null){console.log('ScrollReveal is not supported in this browser.')}
return sr}
ScrollReveal.prototype.isSupported=function(){var style=document.documentElement.style;return 'WebkitTransition' in style&&'WebkitTransform' in style||'transition' in style&&'transform' in style};ScrollReveal.prototype.reveal=function(selector,config,interval,sync){var
container,elements,elem,elemId,sequence,sequenceId;if(config&&config.container){container=_resolveContainer(config)}else{container=sr.defaults.container}
if(sr.tools.isNode(selector)){elements=[selector]}else{elements=Array.prototype.slice.call(container.querySelectorAll(selector))}
if(!elements.length){console.log('ScrollReveal: reveal on "'+selector+'" failed, no elements found.');return sr}
if(config&&typeof config=='number'){interval=config;config={}}
if(interval&&typeof interval=='number'){sequenceId=_nextUid();sequence=sr.sequences[sequenceId]={id:sequenceId,interval:interval,elemIds:[],active:!1}}
for(var i=0;i<elements.length;i++){elemId=elements[i].getAttribute('data-sr-id');if(elemId){elem=sr.store.elements[elemId]}
else{elem={id:_nextUid(),domEl:elements[i],seen:!1,revealing:!1};elem.domEl.setAttribute('data-sr-id',elem.id)}
if(sequence){elem.sequence={id:sequence.id,index:sequence.elemIds.length};sequence.elemIds.push(elem.id)}
_configure(elem,config||{});_style(elem);_updateStore(elem);if(sr.tools.isMobile()&&!elem.config.mobile||!sr.isSupported()){elem.domEl.setAttribute('style',elem.styles.inline);elem.disabled=!0}
else if(!elem.revealing){elem.domEl.setAttribute('style',elem.styles.inline+elem.styles.transform.initial)}}
if(!sync&&sr.isSupported()){_record(selector,config);if(sr.initTimeout){window.clearTimeout(sr.initTimeout)}
sr.initTimeout=window.setTimeout(_init,0)}
return sr};ScrollReveal.prototype.sync=function(){if(sr.history.length&&sr.isSupported()){for(var i=0;i<sr.history.length;i++){var record=sr.history[i];sr.reveal(record.selector,record.config,record.interval,!0)};_init()}else{console.log('ScrollReveal: sync failed, no reveals found.')}
return sr};function _resolveContainer(config){var container=config.container;if(container&&typeof container=='string'){return config.container=window.document.querySelector(container)}
else if(container&&!sr.tools.isNode(container)){console.log('ScrollReveal: Invalid container provided, using <html> instead.');config.container=null}
if(container==null){config.container=window.document.documentElement}
return config.container}
function _nextUid(){return ++sr.uid}
function _configure(elem,config){if(!elem.config){elem.config=sr.tools.extendClone(sr.defaults,config)}
else{elem.config=sr.tools.extendClone(elem.config,config)}
if(elem.config.origin==='top'||elem.config.origin==='bottom'){elem.config.axis='Y'}else{elem.config.axis='X'}
if(elem.config.origin==='top'||elem.config.origin==='left'){elem.config.distance='-'+elem.config.distance}}
function _style(elem){var computed=window.getComputedStyle(elem.domEl);if(!elem.styles){elem.styles={transition:{},transform:{},computed:{}};elem.styles.inline=elem.domEl.getAttribute('style')||'';elem.styles.inline+='; visibility: visible; ';elem.styles.computed.opacity=computed.opacity;if(!computed.transition||computed.transition=='all 0s ease 0s'){elem.styles.computed.transition=''}else{elem.styles.computed.transition=computed.transition+', '}}
elem.styles.transition.instant=_generateTransition(elem,0);elem.styles.transition.delayed=_generateTransition(elem,elem.config.delay);elem.styles.transform.initial=' -webkit-transform:';elem.styles.transform.target=' -webkit-transform:';_generateTransform(elem);elem.styles.transform.initial+='transform:';elem.styles.transform.target+='transform:';_generateTransform(elem)}
function _generateTransition(elem,delay){var config=elem.config;return '-webkit-transition: '+elem.styles.computed.transition+'-webkit-transform '+config.duration/1000+'s '+config.easing+' '+delay/1000+'s, opacity '+config.duration/1000+'s '+config.easing+' '+delay/1000+'s; '+'transition: '+elem.styles.computed.transition+'transform '+config.duration/1000+'s '+config.easing+' '+delay/1000+'s, opacity '+config.duration/1000+'s '+config.easing+' '+delay/1000+'s; '}
function _generateTransform(elem){var config=elem.config;var transform=elem.styles.transform;if(parseInt(config.distance)){transform.initial+=' translate'+config.axis+'('+config.distance+')';transform.target+=' translate'+config.axis+'(0)'}
if(config.scale){transform.initial+=' scale('+config.scale+')';transform.target+=' scale(1)'}
if(config.rotate.x){transform.initial+=' rotateX('+config.rotate.x+'deg)';transform.target+=' rotateX(0)'}
if(config.rotate.y){transform.initial+=' rotateY('+config.rotate.y+'deg)';transform.target+=' rotateY(0)'}
if(config.rotate.z){transform.initial+=' rotateZ('+config.rotate.z+'deg)';transform.target+=' rotateZ(0)'}
transform.initial+='; opacity: '+config.opacity+';';transform.target+='; opacity: '+elem.styles.computed.opacity+';'}
function _updateStore(elem){var container=elem.config.container;if(container&&sr.store.containers.indexOf(container)==-1){sr.store.containers.push(elem.config.container)}
sr.store.elements[elem.id]=elem};function _record(selector,config,interval){var record={selector:selector,config:config,interval:interval};sr.history.push(record)}
function _init(){if(sr.isSupported()){_animate();for(var i=0;i<sr.store.containers.length;i++){sr.store.containers[i].addEventListener('scroll',_handler);sr.store.containers[i].addEventListener('resize',_handler)}
if(!sr.initialized){window.addEventListener('scroll',_handler);window.addEventListener('resize',_handler);sr.initialized=!0}}
return sr}
function _handler(){_requestAnimationFrame(_animate)}
function _setActiveSequences(){var
active,elem,elemId,sequence;sr.tools.forOwn(sr.sequences,function(sequenceId){sequence=sr.sequences[sequenceId];active=!1;for(var i=0;i<sequence.elemIds.length;i++){elemId=sequence.elemIds[i]
elem=sr.store.elements[elemId];if(_isElemVisible(elem)&&!active){active=!0}}
sequence.active=active})}
function _animate(){var
delayed,elem;_setActiveSequences();sr.tools.forOwn(sr.store.elements,function(elemId){elem=sr.store.elements[elemId];delayed=_shouldUseDelay(elem);if(_shouldReveal(elem)){if(delayed){elem.domEl.setAttribute('style',elem.styles.inline+elem.styles.transform.target+elem.styles.transition.delayed)}else{elem.domEl.setAttribute('style',elem.styles.inline+elem.styles.transform.target+elem.styles.transition.instant)}
_queueCallback('reveal',elem,delayed);elem.revealing=!0;elem.seen=!0;if(elem.sequence){_queueNextInSequence(elem,delayed)}}
else if(_shouldReset(elem)){elem.domEl.setAttribute('style',elem.styles.inline+elem.styles.transform.initial+elem.styles.transition.instant);_queueCallback('reset',elem);elem.revealing=!1}})}
function _queueNextInSequence(elem,delayed){var
elapsed=0,delay=0,sequence=sr.sequences[elem.sequence.id];sequence.blocked=!0;if(delayed&&elem.config.useDelay=='onload'){delay=elem.config.delay}
if(elem.sequence.timer){elapsed=Math.abs(elem.sequence.timer.started-new Date());window.clearTimeout(elem.sequence.timer)}
elem.sequence.timer={started:new Date()};elem.sequence.timer.clock=window.setTimeout(function(){sequence.blocked=!1;elem.sequence.timer=null;_handler()},Math.abs(sequence.interval)+delay-elapsed)}
function _queueCallback(type,elem,delayed){var
elapsed=0,duration=0,callback='after';switch(type){case 'reveal':duration=elem.config.duration;if(delayed){duration+=elem.config.delay}
callback+='Reveal';break
case 'reset':duration=elem.config.duration;callback+='Reset';break}
if(elem.timer){elapsed=Math.abs(elem.timer.started-new Date());window.clearTimeout(elem.timer.clock)}
elem.timer={started:new Date()};elem.timer.clock=window.setTimeout(function(){elem.config[callback](elem.domEl);elem.timer=null},duration-elapsed)}
function _shouldReveal(elem){if(elem.sequence){var sequence=sr.sequences[elem.sequence.id];return sequence.active&&!sequence.blocked&&!elem.revealing&&!elem.disabled}
return _isElemVisible(elem)&&!elem.revealing&&!elem.disabled}
function _shouldUseDelay(elem){var config=elem.config.useDelay;return config==='always'||(config==='onload'&&!sr.initialized)||(config==='once'&&!elem.seen)}
function _shouldReset(elem){if(elem.sequence){var sequence=sr.sequences[elem.sequence.id];return!sequence.active&&elem.config.reset&&elem.revealing&&!elem.disabled}
return!_isElemVisible(elem)&&elem.config.reset&&elem.revealing&&!elem.disabled}
function _getContainer(container){return{width:container.clientWidth,height:container.clientHeight}}
function _getScrolled(container){if(container&&container!==window.document.documentElement){var offset=_getOffset(container);return{x:container.scrollLeft+offset.left,y:container.scrollTop+offset.top}}
else{return{x:window.pageXOffset,y:window.pageYOffset}}}
function _getOffset(domEl){var
offsetTop=0,offsetLeft=0,offsetHeight=domEl.offsetHeight,offsetWidth=domEl.offsetWidth;do{if(!isNaN(domEl.offsetTop)){offsetTop+=domEl.offsetTop}
if(!isNaN(domEl.offsetLeft)){offsetLeft+=domEl.offsetLeft}}while(domEl=domEl.offsetParent);return{top:offsetTop,left:offsetLeft,height:offsetHeight,width:offsetWidth}}
function _isElemVisible(elem){var
offset=_getOffset(elem.domEl),container=_getContainer(elem.config.container),scrolled=_getScrolled(elem.config.container),vF=elem.config.viewFactor,elemHeight=offset.height,elemWidth=offset.width,elemTop=offset.top,elemLeft=offset.left,elemBottom=elemTop+elemHeight,elemRight=elemLeft+elemWidth;return confirmBounds()||isPositionFixed()
function confirmBounds(){var
top=elemTop+elemHeight*vF,left=elemLeft+elemWidth*vF,bottom=elemBottom-elemHeight*vF,right=elemRight-elemWidth*vF,viewTop=scrolled.y+elem.config.viewOffset.top,viewLeft=scrolled.x+elem.config.viewOffset.left,viewBottom=scrolled.y-elem.config.viewOffset.bottom+container.height,viewRight=scrolled.x-elem.config.viewOffset.right+container.width;return top<viewBottom&&bottom>viewTop&&left>viewLeft&&right<viewRight}
function isPositionFixed(){return(window.getComputedStyle(elem.domEl).position==='fixed')}}
return ScrollReveal})();Tools=(function(){Tools.prototype.isObject=function(object){return object!==null&&typeof object==='object'&&object.constructor==Object};Tools.prototype.isNode=function(object){return typeof Node==='object'?object instanceof Node:object&&typeof object==='object'&&typeof object.nodeType==='number'&&typeof object.nodeName==='string'};Tools.prototype.forOwn=function(object,callback){if(!this.isObject(object)){throw new TypeError('Expected "object", but received "'+typeof object+'".')}else{for(var property in object){if(object.hasOwnProperty(property)){callback(property)}}}};Tools.prototype.extend=function(target,source){this.forOwn(source,function(property){if(this.isObject(source[property])){if(!target[property]||!this.isObject(target[property])){target[property]={}}
this.extend(target[property],source[property])}else{target[property]=source[property]}}.bind(this));return target};Tools.prototype.extendClone=function(target,source){return this.extend(this.extend({},target),source)};Tools.prototype.isMobile=function(){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)};function Tools(){};return Tools})();_requestAnimationFrame=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame}).call(this);return this.ScrollReveal}))