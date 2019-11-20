import React, { useContext } from "react";
import StateContext from "../context";

const Activity = () => {
    const [value, dispatch] = useContext(StateContext);

    const handleClick = e => {
        e.preventDefault();
        dispatch({
            type: "changeActivity",
            activity: e.target.value
        });
    };

    return (
        <div>
            <h1>The Cat's Activity</h1>
            <p>
                The cat is {value.activity}
            </p>
            <ul>
                <li>
                    <button onClick={handleClick} value="napping">
                        Napping
                    </button>
                </li>
                <li>
                    <button onClick={handleClick} value="eating">
                        Eating
                    </button>
                </li>
                <li>
                    <button onClick={handleClick} value="playing">
                        Playing
                    </button>
                </li>
            </ul>
        </div>
    );
};

export default Activity;
