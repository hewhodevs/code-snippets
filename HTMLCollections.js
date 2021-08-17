// ------------------------------------------
// func htmlCollectionForEachElement
// use the callback function @myFunction for each element of
// the HTMLCollection containing elements with @className
// @className - string value specifying a classname an element must have
// @myFunction - callback function to use for each element in the collection
// ------------------------------------------
function htmlCollectionForEachElement(className, myFunction) {
  // HTMLCollection of all elements with the className passed
  const elements = document.getElementsByClassName(className);
  // Pass the HTMLCollection as the "this" value to the 
  // forEach method to iterate through it.
  Array.prototype.forEach.call(elements, function(element) {
    myFunction(element);
  });
}