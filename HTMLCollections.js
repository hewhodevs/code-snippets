// ------------------------------------------
// func htmlCollectionForEachElement
// Finds all elements in a document with @className
// and performs the callback myFunction(element) for each
// element in the HTMLCollection.
// @className - A string specifying a className to seach for
// @myFunction - A callback function to apply forEach element.
// ------------------------------------------
function htmlCollectionForEachElement(className, myFunction) {
  // HTMLCollection of all elements with the className passed
  const elements = document.getElementsByClassName(className);
  // Pass the HTMLCollection as the "this" value to the forEach method to iterate through it.
  Array.prototype.forEach.call(elements, myFunction(element));
}