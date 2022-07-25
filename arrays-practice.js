const order =[
    {item:'bananas',qty:6}, // index 0 // the order in the objects doesn't matter
    {item:'chips',qty:1},   // index 1 // the order in the objects doesn't matter
    {item:"eggs", qty: 12}, // index 2 // the order in the objects doesn't matter
] // order in array matters 

console.log(order[2].qty)


getName()
    .then (name => {
        console.log("Hello" + name)
    })
        .catch (err => console.log('got error'))

