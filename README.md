#rxjs-pubsub

Out of the box, rxjs doesn't really have a good publish-subscription construct for you to use.

```javascript
//1. create a publisher
var eventbus = pubsub.create();

//2. subscribe to publisher
eventbus("foo").subscribe((o)=>console.log(o));

//3. publish to a subscriber
eventbus.publish("foo")
```

It's that easy!

#Additional details

This may seem like a simple library you may want to make yourself! Keep in mind that rxjs streams out of the box don't handle errors or completion very well for this type of setup.
