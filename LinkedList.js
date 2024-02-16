class Node {
    constructor(value) {
        this.value = value;
        this.nextNode = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    append(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.nextNode = newNode;
            this.tail = newNode;
        }
        this.length++;
    }

    prepend(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.nextNode = this.head;
            this.head = newNode;
        }
        this.length++;
    }

    size() {
        return this.length;
    }

    head() {
        return this.head;
    }

    tail() {
        return this.tail;
    }

    at(index) {
        if (index < 0 || index >= this.length) return null;

        let currentNode = this.head;
        for (let i = 0; i < index; i++) {
            currentNode = currentNode.nextNode;
        }
        return currentNode;
    }

    pop() {
        if (!this.head) return null;

        let currentNode = this.head;
        let previousNode = null;
        while (currentNode.nextNode) {
            previousNode = currentNode;
            currentNode = currentNode.nextNode;
        }

        if (previousNode) {
            previousNode.nextNode = null;
            this.tail = previousNode;
        } else {
            this.head = null;
            this.tail = null;
        }
        this.length--;
        return currentNode;
    }

    contains(value) {
        let currentNode = this.head;
        while (currentNode) {
            if (currentNode.value === value) return true;
            currentNode = currentNode.nextNode;
        }
        return false;
    }

    find(value) {
        let currentNode = this.head;
        let index = 0;
        while (currentNode) {
            if (currentNode.value === value) return index;
            currentNode = currentNode.nextNode;
            index++;
        }
        return null;
    }

    toString() {
        let result = '';
        let currentNode = this.head;
        while (currentNode) {
            result += `(${currentNode.value}) -> `;
            currentNode = currentNode.nextNode;
        }
        result += 'null';
        return result;
    }

    insertAt(value, index) {
        if (index < 0 || index > this.length) return false;
        if (index === 0) {
            this.prepend(value);
            return true;
        }
        if (index === this.length) {
            this.append(value);
            return true;
        }

        const newNode = new Node(value);
        let currentNode = this.head;
        let previousNode = null;
        for (let i = 0; i < index; i++) {
            previousNode = currentNode;
            currentNode = currentNode.nextNode;
        }
        newNode.nextNode = currentNode;
        previousNode.nextNode = newNode;
        this.length++;
        return true;
    }

    removeAt(index) {
        if (index < 0 || index >= this.length) return null;
        if (index === 0) {
            const removedNode = this.head;
            this.head = this.head.nextNode;
            this.length--;
            if (this.length === 0) {
                this.tail = null;
            }
            return removedNode;
        }
        let currentNode = this.head;
        let previousNode = null;
        for (let i = 0; i < index; i++) {
            previousNode = currentNode;
            currentNode = currentNode.nextNode;
        }
        previousNode.nextNode = currentNode.nextNode;
        if (index === this.length - 1) {
            this.tail = previousNode;
        }
        this.length--;
        return currentNode;
    }
}



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
