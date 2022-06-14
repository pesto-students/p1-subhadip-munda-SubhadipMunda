var reverseList = function (head) {
  if (head === null) {
    return null;
  }

  var previous = null;
  var current = head;
  var next = null;

  while (current.next) {
    next = current.next;
    current.next = previous;
    previous = current;
    current = next;
  }

  current.next = previous;
  return current;
};
