function createSortedList() {
    return {
        nums: [],
        add: function (n) {
            (i = this.nums.findIndex(a => a >= n)) == -1
                ? this.nums.push(n)
                : this.nums.splice(i, 0, n)

            this.size++
        },
        remove: function (i) {
            this.validateIndex(i)

            this.nums.splice(i, 1)
            this.size--
        },
        get: function (i) {
            this.validateIndex(i)

            return this.nums[i]
        },
        size: 0,
        validateIndex: function (i) {
            if (i < 0 || i >= this.size)
                throw new Error('Invalid index')
        }
    }
}

var myList = createSortedList();

// Generate random list of 20 numbers
var expectedArray = [];
for (let i = 0; i < 10; i++) {
    expectedArray.push(Math.floor(Math.random() * 200) - 100);
}
// Add to collection
for (let i = 0; i < expectedArray.length; i++) {
    myList.add(expectedArray[i]);
}

myList.get(0)

expectedArray.sort((a, b) => a - b);

console.log(expectedArray);
console.log(myList.nums);
