import { create } from "zustand";
import type { User } from "../types/index";

interface AuthState {
    user: User | null;
    isLoggedIn: boolean;
    isLoading: boolean;
    error: string | null

    login: (email: string, password: string) => Promise<void> //this is an async function that returns nothing
    logout: () => void
    clearError: () => void
}

//store initial values as a separate object
//best practice, use this same for reset and logout

const initialState = {
    user: null,
    isLoggedIn: false,
    isLoading: false,
    error: null,
}

const useAuthStore = create<AuthState>() ((set) => ({
    ...initialState, //shorthand for user, isLoggedIn, etc.

    login: async (email, password) => {

        //step 1:- tell UI we are loading and clear old errors
        set({isLoading: true, error: null})

        //try runs code, catch handles error
        try {
            //step 2:- simulate network delay(to be replaced with real API call)
            await new Promise((resolve) => setTimeout(resolve, 1000))

            //step 3:- validate email and password(in real app server does this)
            if(email === 'admin@test.com' && password === '1234') {
                //login successful - create user object and update state
                const user: User = {id: 1, name: 'Admin User', email}

                set({user, isLoggedIn: true, isLoading: false})
            } else {
                set({error : 'Invalid email or password', isLoading: false})
            }
        } catch (err) {
            //in case of network failure or unexpected errors
            set({error: 'Something went wrong, try again', isLoading: false})
        }
    },

    logout: () => set(initialState),

    clearError: () => set({error: null}),
}));

export default useAuthStore;