function extensibleObject() {
    return {
        extend: function (template) {
            for (let [k, v] of Object.entries(template)) {
                typeof v == 'function'
                    ? this.__proto__[k] = v
                    : this[k] = v
            }
        }
    }
}

const myObj = extensibleObject();

const template = {
    extensionMethod: function () { },
    extensionProperty: 'someString'
}
myObj.extend(template);
console.log(myObj);