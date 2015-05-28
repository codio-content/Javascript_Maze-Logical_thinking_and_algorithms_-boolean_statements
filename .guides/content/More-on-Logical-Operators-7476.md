|||definition
In Javascript, `&&`, `||` and `!` are know as *logical operators*
|||

## AND - the `&&` operator
Consider this expression

```javascript
if ( energy < 10 && steps > 20) {
  do something
}
```

Javascript will look at the code as shown below. Assume `energy = 5`, `steps = 10`.

1. `(energy < 10) && (steps > 20)`
1. `(5 < 10) && (10 > 20)`
1. `(true) && (false)`
1. (false)

## OR - the `||` operator
Consider the following code

```javascript
if ( type == 'energy' || type == 'monster') {
  do something
}
```

Assume `type = 'monster'`.

1. `(type == 'energy') || (type == 'monster')
1. `('monster' == 'energy') || ('monster' == 'monster')
1. `(false) || (true)`
1. `(true)`

