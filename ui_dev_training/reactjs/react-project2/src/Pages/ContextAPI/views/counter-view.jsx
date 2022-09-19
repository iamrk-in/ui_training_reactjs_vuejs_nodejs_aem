import React from "react";
import { CounterContextProvider } from "../context/counter-context";
import CounterDisplay from "../components/counter-display";
import CounterButton from "../components/counter-button";

export default function CounterView() {
    return(
        <CounterContextProvider>
            <h4>Counter - Increment / Decrement</h4>

            <CounterButton />
            <CounterDisplay />
        </CounterContextProvider>
    );
}