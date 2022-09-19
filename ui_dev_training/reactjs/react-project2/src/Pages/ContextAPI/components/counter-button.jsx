import React, { useContext } from "react";
import { CounterContext } from "../context/counter-context";

export default function CounterButton() {
    const [count, setCount] = useContext(CounterContext);

    const increment = () => {
        setCount(count + 1);
    }

    const decrement = () => {
        setCount(count - 1);
    }

    return(
        <div className="row">
            <div className="col-12">
                <button type="button" className="btn btn-primary btn-sm me-2 mb-2" onClick={increment}> increment (+) </button>

                <button type="button" className="btn btn-primary btn-sm me-2 mb-2" onClick={decrement}> decrement (-) </button>
            </div>
        </div>
    );
}