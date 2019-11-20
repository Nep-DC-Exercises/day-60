import React, { useContext, useState } from "react";
import StateContext from "../context";

const Activity = () => {
    const [value, dispatch] = useContext(StateContext);
    const [name, setName] = useState();
    const [activity, setActivity] = useState();

    const handleChangeName = e => {
        setName(e.target.value);
    };

    const handleChangeActivity = e => {
        setActivity(e.target.value);
    };

    const handleSubmit = e => {
        e.persist();
        e.preventDefault();
        dispatch({
            type: "changeCat",
            newName: name,
            newActivity: activity
        });
    };

    return (
        <div>
            <h1>The Cat's Activity</h1>
            <p>
                {value.name} is {value.activity}
            </p>
            <form onSubmit={e => handleSubmit(e)}>
                <label>
                    Name:
                    <input
                        type="text"
                        name="name"
                        placeholder="Change the name!"
                        onChange={e => handleChangeName(e)}
                    />
                </label>
                <label>
                    Activity:
                    <input
                        type="text"
                        name="activity"
                        placeholder="Change the activity!"
                        onChange={e => handleChangeActivity(e)}
                    />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default Activity;
