class Node {
    constructor(value) {
        // INITIALIZE NODE WITH VALUE AND NEXTNODE SET TO NULL
        this.value = value;
        this.nextNode = null;
    }
}

class LinkedList {
    constructor() {
        // INITIALIZE LINKED LIST WITH HEAD, TAIL, AND LENGTH SET TO NULL AND 0 RESPECTIVELY
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    append(value) {
        // ADD A NEW NODE CONTAINING VALUE TO THE END OF THE LIST
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
        // ADD A NEW NODE CONTAINING VALUE TO THE START OF THE LIST
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
        // RETURN THE TOTAL NUMBER OF NODES IN THE LIST
        return this.length;
    }

    head() {
        // RETURN THE HEAD NODE OF THE LIST
        return this.head;
    }

    tail() {
        // RETURN THE TAIL NODE OF THE LIST
        return this.tail;
    }

    at(index) {
        // RETURN THE NODE AT THE GIVEN INDEX
        if (index < 0 || index >= this.length) return null;
        let currentNode = this.head;
        for (let i = 0; i < index; i++) {
            currentNode = currentNode.nextNode;
        }
        return currentNode;
    }

    pop() {
        // REMOVE THE LAST ELEMENT FROM THE LIST
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
        // RETURN TRUE IF THE PASSED IN VALUE IS IN THE LIST AND OTHERWISE RETURN FALSE
        let currentNode = this.head;
        while (currentNode) {
            if (currentNode.value === value) return true;
            currentNode = currentNode.nextNode;
        }
        return false;
    }

    find(value) {
        // RETURN THE INDEX OF THE NODE CONTAINING VALUE, OR NULL IF NOT FOUND
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
        // REPRESENT THE LINKED LIST OBJECT AS A STRING
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
        // INSERT A NEW NODE WITH THE PROVIDED VALUE AT THE GIVEN INDEX
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
        // REMOVE THE NODE AT THE GIVEN INDEX
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
