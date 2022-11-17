// example linked list with 3 nodes
let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: null
        }
    }
}

while (list != null) {
    console.log(list.value); // display current node value
    list = list.next; // switch to the next node
}