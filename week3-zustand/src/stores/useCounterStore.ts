import { create } from "zustand";

//to use this outside a component do:- useCOunterStore.getState().count
interface CounterState {
    count: number;
    increment: () => void;
    decrement: () => void;
    reset: () => void;
    incrementBy: (amount1: number, amount2: number) => void; //takes amount as a parameter
    decrementBy: (amount1: number, amount2: number) => void;
}

const useCounterStore = create<CounterState>() ((set) => ({
    count: 0,

    //state is always for update
    increment : () => set((state) => ({count: state.count + 1})),

    decrement : () => set((state) => ({count : state.count - 1})),

    reset : () => set({count : 0}), //set by own is stateless

    incrementBy : (amount1, amount2) => set((state) => ({count : state.count + (amount1*amount2)})),

    decrementBy : (amount1, amount2) => set((state) => ({count : state.count - (amount1*amount2)})),
}));

export default useCounterStore;