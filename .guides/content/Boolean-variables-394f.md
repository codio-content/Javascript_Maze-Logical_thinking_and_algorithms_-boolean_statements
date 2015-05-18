So far, we have dealt with number and string variables.

```javascript
message = 'Hello world!'
number = 100
```

We can also have a boolean variable type.

```javascript
showScore = true
```

A boolean variable can have only two possibles `true` or `false`.

The code on the left shows an example of how we are checking the energy level in the `collisionWithEnergy()` event handler.

If the energy is less than 10, then we are setting the lowEnergy variable to `true`, otherwise to `false`.

In the `stepsTaken()` handler, we are then looking to see whether `lowEnergy` is true and if so, we are showing a message warning about low energy.