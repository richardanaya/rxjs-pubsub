#rxjs-pubsub

Out of the box, rxjs doesn't really have a good publish-subscription data structure for you to use.

```javascript
//1. create a publisher
var eventbus = pubsub.create();

//2. subscribe to publisher
eventbus.subscribe("foo",(o)=>console.log(o));

//3. publish to a subscriber
eventbus.publish("foo","bar")
```

It's that easy!

#Install

```
npm install rxjs-pubsub
```

or

```
<script src="https://cdnjs.cloudflare.com/ajax/libs/rxjs/4.1.0/rx.all.js"></script>
<script src="https://cdn.rawgit.com/richardanaya/rxjs-pubsub/master/rxjs-pubsub.js"></script>
```

#Additional Details

This may seem like a simple library you may want to make yourself! Keep in mind that rxjs streams out of the box don't handle errors or completion very well for this type of setup. Keep the power of rxjs and checkout the code how I handled this!
