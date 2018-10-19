# super-proxy

`superProxy` is a function that returns a function/object that has *every* property as a recursive version of itself. This is useful if you want to fake that an object exists but you want to remove the behaviour.

## Installation
**In a browser**
```
<script src="http://unpkg.com/super-proxy@0.0.2/umd/super-proxy.js"></script>
```
**With npm**
```
npm install super-proxy
```

## Usage
```js
const foo = superProxy()
foo.bar // this is okay
foo.bar() // also okay
new foo.bar().baz // all of this is okay
```

## Use Case Example

Let's say you have loaded [Segment](https://segment.com) with a script tag and in your application you have many calls to `window.analytics.track` that you would like to skip.

With `super-proxy` you can do:

```js
window.analytics = superProxy()
window.analytics.identify(...) // this does nothing now
window.analytics.track(...) // same here
window.analytics.whatever(...) // there is no tracking!
```
