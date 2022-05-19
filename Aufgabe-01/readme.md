# Array Iterations

## Overview
list of possible iterations:

```typescript
numbers.forEach
numbers.map
numbers.filter
numbers.reduce
numbers.reduceRight
numbers.every
numbers.some
numbers.indexOf
numbers.lastIndexOf
numbers.find
numbers.findIndex
numbers.keys
numbers.entries
numbers.includes
for .. of
for .. in
```

List of iterations which we will look at:

```typescript
for .. of
numbers.forEach
for .. in
numbers.map
numbers.filter
numbers.indexOf
```
## Iterations

### for .. of

just a for that takes elements from an array and lets you do something with them

```typescript
for (let element of nums) { s.. }
```
### forEach

callback function: 
```typescript
function callbackFunction (element, index, array) { ... }
```
call the callback function: 

```typescript
nums.forEach(callbackFunction)  
```
alternatively, we move the callback function to be inline. This is done witth either an arrow or a direct function declaration

```typescript
nums.forEach((element, index, array) => {
    ...
});
```
we are not forced to use element, index and array. For instance, we can also just use element
```typescript
nums.forEach(function(elem) {...} ) 

nums.forEach(function(element, index, array) {...} )
```

### for .. in

for in loops, for our purposes, returns indeces. Technically, it works on any object and returns "keys" for that object (in our case, indeces of an array).

```typescript
for (let index in nums) { ... }
```
### map


### filter


### indexOf


# Quellen

[w3-Schools](https://www.w3schools.com/js/js_array_iteration.asp)
[MDN] (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)