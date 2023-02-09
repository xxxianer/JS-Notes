const x0 = 1
const promise1 = Promise.resolve(x0) // promise fulfilled wirh value x0

// [promise1.then] returns promise2
promise1.then(
    // onResolve, resolve handler
    // resolvedValue1 = x0
    (resolvedValue1) => {
        // return value k           => promise2 fulfilled with value k -> valueX
        // no return value          => promise2 fulfilled with value undefined -> valueX

        // return promise3 rejected => promise2 rejected with promise3's reason -> reasonY
        // return promise3 resolved => promise2 fulfilled with promise3's value -> valueX 
        // return promise3 pending  => promise2 pending
        // error                    => promise2 rejected with thrown error
    },
    // onReject never happens
)
    .then(
        (valueX) => { },
        (reasonY) => { }
    )