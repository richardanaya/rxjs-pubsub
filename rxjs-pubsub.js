// rxjs-pubsub.js
// repo    : https://github.com/richardanaya/rxjs-pubsub
// license : MIT

(function (window, module) {
  "use strict";

  var listeners = [];
  function publish(channel,value){
   var listener = listeners[channel];
   if(listener!=null){
      listener.onNext(value)
   }
  }
  function subscribe(channel){
   var listener = listeners[channel];
   if(listener==null){
      listeners[channel] = listener = new Rx.Subject();
   }
   return listener;
  }

  window.pubsub = module.exports = {
    publish : publish,
    subscribe : subscribe
  };
})(
  typeof window !== "undefined" ? window : {},
  typeof module !== "undefined" ? module : {}
);
