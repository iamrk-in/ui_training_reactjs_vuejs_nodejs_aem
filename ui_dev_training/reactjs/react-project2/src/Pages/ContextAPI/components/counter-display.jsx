import React, { useContext } from "react";
import { CounterContext } from "../context/counter-context";

export default function CounterDisplay() {
    const [count] = useContext(CounterContext);

    return(
        <div className="row">
            <div className="col-12">
                <h4>Count: {count}</h4>
            </div>
        </div>
    );
}
