// ------------------------------------------
// func forEachElement
// forEach equivalent to use with a HTMLCollection of elements
// @className - string value specifying a className to search for
// @myFunction - callback function to use for each element in the HTMLcollection
// ------------------------------------------
function forEachElement(className, myFunction) {
  // HTMLCollection of all elements with the className passed
  const elements = document.getElementsByClassName(className);
  // Pass the HTMLCollection as the "this" value to the 
  // forEach method to iterate through it.
  Array.prototype.forEach.call(elements, function(element) {
    myFunction(element);
  });
}