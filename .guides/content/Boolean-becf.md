Here we go with another term that is designed to confuse until you realize it is a useful catch-all term for a condition which can be either **true** or **false**.

We've already been working with boolean conditions in fact. 

> If your energy is less than 10, show message "You are low on energy".

Let's look at this in Javascript

```javascript
if (energy < 10) {
  showMessage('You are low on energy')
}
```

The condition test is `energy < 10`. You can think of this as a question that has only a **true** or a **false** outcome.

Let's say energy is 5. In this case

- `energy < 10` is **true** as the energy (5) **is** less then 10.

Let's now say that `energy` is 20.

- `energy < 10` is **false** as the energy (20) **is not** less than 10.