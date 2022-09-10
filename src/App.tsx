// import './App.css';
// import InputField from './component/InputField';
// import TodoList from './component/TodoList';
// import { Todo } from './model';
// let name: string
// let age: number | string
// let isStudent: boolean
// let hobbies: string[]
// let rol: [number, string] //tuple type

// type Person = {
//     name: string,
//     age?: number
// }
// let person: Person = {
//     name: "raj"

// }
// function raja(name: any) {
//     console.log(name)
// }
// raja("rahul")


// let printName: (name: string) => void

// interface Person {
//     name: string,
//     age?: number
// }
// type X = {
//     a: string,
//     b: number
// }
// interface guys extends Person {
//     profession: string
// }
// const App: React.FC = () => {
//     const [todo, setTodo] = useState<string>("")
//     const [todos, setTodos] = useState<Array<Todo>>([]);
//     console.log(todos)
//     const handleAdd = (e: React.FormEvent) => {
//         e.preventDefault();

//         if (todo) {
//             setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
//             setTodo("");
//         }
//     }
//     return (
//         <div className="App">
//             <span className='heading'>taskSky</span>
//             <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
//             <TodoList todos={todos} setTodos={setTodos} />
//         </div>
//     );
// }

// export default App;

// import "./styles.css";
// import React, { useState } from "react";
import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
    Provider,
    TypedUseSelectorHook,
    useDispatch,
    useSelector
} from "react-redux";

const counterSlice = createSlice({
    name: "counter",
    initialState: {
        value: 0
    },
    reducers: {
        increment: (s, action: PayloadAction<number>) => {
            return {
                ...s,
                value: s.value + action.payload
            };
        }
    }
});

const { increment } = counterSlice.actions;

const store = configureStore({
    reducer: {
        counter: counterSlice.reducer
    }
});

type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;

// const counterSelector = (state: RootState) => state.counter.value;

const useCounterDispatch = () => useDispatch<AppDispatch>();

const useCounterSelector: TypedUseSelectorHook<RootState> = useSelector;

function Counter() {
    const dispatch = useCounterDispatch();

    const value = useCounterSelector((state) => state.counter.value);

    return (
        <div className="App">
            <button onClick={() => dispatch(increment(3))}>click me</button>
            <h2>{value}</h2>
        </div>
    );
}

export default function App() {
    return (
        <Provider store={store}>
            <Counter />
        </Provider>
    );
}
