import useCounterStore from "../../stores/useCounterStore";

function CounterDisplay() {
    //select only actions we need from store
    //const increment = useCounterStore((state) => state.increment)
    const {count, reset, decrementBy, increment, incrementBy, decrement} = useCounterStore()
    return (
        <div style={{fontSize: '2rem', fontWeight: 'bold', margin: '16px 0'}}>
            Counter: {count}
            <br />
            <button onClick={increment}>
                +
            </button>
            <button onClick={decrement}>
                -
            </button>
            <button onClick={reset}>
                reset
            </button>
            <button onClick={() => incrementBy(10, 20)}>
                increment By
            </button>
            <button onClick={() => decrementBy(10, 20)}>
                decrement By
            </button>
        </div>
    )
}

export default CounterDisplay;