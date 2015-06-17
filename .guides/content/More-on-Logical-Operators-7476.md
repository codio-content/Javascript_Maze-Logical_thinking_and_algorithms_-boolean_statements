|||definition
In Javascript, `&&`, `||` and `!` are known as *logical operators*
|||

## AND - the `&&` operator
Consider this expression

```javascript
if ( energy < 10 && steps > 20) {
  showMessage('Hmm looks like you are struggling?')
}
```

Javascript will process the code as listed in the steps below. 

Assume `energy = 5`, `steps = 10`.

1. `(energy < 10) && (steps > 20)`
1. Is processed as `(5 < 10) && (10 > 20)`
1. Which is `(true) && (false)`
1. And the final result is `(false)`, so the overall condition is `false`.

## OR - the `||` operator
Consider the following code

```javascript
if ( type == 'energy' || type == 'monster') {
  playSound('bump')
}
```

Javascript will process the code as listed in the steps below. 

Assume `type = 'monster'`.

1. `(type == 'energy') || (type == 'monster')`
1. Is processed as `('monster' == 'energy') || ('monster' == 'monster')`
1. Which is `(false) || (true)`
1. And the final result is `(true)`, so the overall condition is `true`.
