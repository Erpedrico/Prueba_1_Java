console.log("Hello") // Call Stack

setTimeout(() => console.log("Time"), 0) // Task Queue

Promise.resolve().then(() => console.log("Promise")) // MicroTask Queue

console.log("World") // Call Stack
