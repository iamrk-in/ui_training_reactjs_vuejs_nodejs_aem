import React, { createContext, useState } from "react";;

// create context object
export const CounterContext = createContext();

// create a provider for components to consume and subscribe to changes
export const CounterContextProvider = (props) => {
    const [count, setCount] = useState(0);

    return(
        <CounterContext.Provider value = {[count, setCount]}>
            {props.children}
        </CounterContext.Provider>
    )
}