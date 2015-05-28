In the real world, questions are not always as simple as that. We often need to ask questions like

## AND `&&`

*"If energy is less than 10 **AND** steps taken is greater than 20, then tell user the score is not going to be good"*

```javascript
if ( energy < 10 && steps > 20) {
  do something
}
```



## OR `||`

*"If the object you just hit is a monster **OR** an energy store then play a sound"*

This is very easy to code in Javascript.

```javascript
if ( type == 'monster' || type == 'energy') {
  do something
}
```


