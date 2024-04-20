# Linked Lists in JavaScript

This repository contains a JavaScript implementation of a linked list data structure. Linked lists are fundamental data structures in computer science, providing a dynamic way to store and organize data.

## Overview

A linked list consists of nodes, where each node contains a value and a reference to the next node in the sequence. Unlike arrays, linked lists do not have a fixed size, and elements can be inserted or removed efficiently at any position.

## Usage

To use the linked list implementation provided in this repository, follow these steps:

1. Clone the repository to your local machine.
2. Navigate to the `javascript` directory.
3. Open the `LinkedList.js` file in your preferred code editor.
4. Use the `LinkedList` class to create and manipulate linked lists in your JavaScript applications.

## Features

The `LinkedList` class in this repository provides the following features:

- Appending and prepending elements to the linked list.
- Retrieving the size of the linked list.
- Accessing the head and tail nodes of the linked list.
- Accessing nodes at specific indices.
- Removing elements from the linked list.
- Searching for elements in the linked list.
- Inserting elements at specific indices.

## Example

```javascript
const linkedList = new LinkedList();
linkedList.append(1);
linkedList.append(2);
linkedList.append(3);
console.log(linkedList.toString()); // Output: (1) -> (2) -> (3) -> null

linkedList.prepend(0);
console.log(linkedList.toString()); // Output: (0) -> (1) -> (2) -> (3) -> null

console.log(linkedList.size()); // Output: 4

console.log(linkedList.head().value); // Output: 0

console.log(linkedList.tail().value); // Output: 3

console.log(linkedList.at(2).value); // Output: 2

linkedList.pop();
console.log(linkedList.toString()); // Output: (0) -> (1) -> (2) -> null

console.log(linkedList.contains(2)); // Output: true
console.log(linkedList.contains(5)); // Output: false

console.log(linkedList.find(1)); // Output: 1 (index)
console.log(linkedList.find(5)); // Output: null

linkedList.insertAt(2.5, 2);
console.log(linkedList.toString()); // Output: (0) -> (1) -> (2) -> (2.5) -> null

linkedList.removeAt(2);
console.log(linkedList.toString()); // Output: (0) -> (1) -> (2.5) -> null
```

## Contributing

Contributions to this repository are welcome. If you find any issues or would like to add new features, feel free to open a pull request.

---

### Ruby 

---

# Linked Lists in Ruby

This repository contains a Ruby implementation of a linked list data structure. Linked lists are fundamental data structures in computer science, providing a dynamic way to store and organize data.

## Overview

A linked list consists of nodes, where each node contains a value and a reference to the next node in the sequence. Unlike arrays, linked lists do not have a fixed size, and elements can be inserted or removed efficiently at any position.

## Usage

To use the linked list implementation provided in this repository, follow these steps:

1. Clone the repository to your local machine.
2. Navigate to the `ruby` directory.
3. Open the `linked_list.rb` file in your preferred code editor.
4. Use the `LinkedList` class to create and manipulate linked lists in your Ruby applications.

## Features

The `LinkedList` class in this repository provides the following features:

- Appending and prepending elements to the linked list.
- Retrieving the size of the linked list.
- Accessing the head and tail nodes of the linked list.
- Accessing nodes at specific indices.
- Removing elements from the linked list.
- Searching for elements in the linked list.
- Inserting elements at specific indices.

## Example

```ruby
require_relative 'linked_list'

linked_list = LinkedList.new
linked_list.append(1)
linked_list.append(2)
linked_list.append(3)
puts linked_list.to_s # Output: (1) -> (2) -> (3) -> nil

linked_list.prepend(0)
puts linked_list.to_s # Output: (0) -> (1) -> (2) -> (3) -> nil

puts linked_list.size # Output: 4

puts linked_list.head.value # Output: 0

puts linked_list.tail.value # Output: 3

puts linked_list.at(2).value # Output: 2

linked_list.pop
puts linked_list.to_s # Output: (0) -> (1) -> (2) -> nil

puts linked_list.contains(2) # Output: true
puts linked_list.contains(5) # Output: false

puts linked_list.find(1) # Output: 1 (index)
puts linked_list.find(5) # Output: nil

linked_list.insert_at(2.5, 2)
puts linked_list.to_s # Output: (0) -> (1) -> (2) -> (2.5) -> nil

linked_list.remove_at(2)
puts linked_list.to_s # Output: (0) -> (1) -> (2.5) -> nil
```

## Contributing

Contributions to this repository are welcome. If you find any issues or would like to add new features, feel free to open a pull request.