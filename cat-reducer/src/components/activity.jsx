import React, { useContext, useState } from "react";
import StateContext from "../context";

const Activity = () => {
    const [value, dispatch] = useContext(StateContext);
    const [name, setName] = useState();
    const [activity, setActivity] = useState();

    const [newName, setNewName] = useState();
    const [newActivity, setNewActivity] = useState();


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
            type: "addCat",
            newName: name,
            newActivity: activity
        });
    };
    const handleUpdateName = e => {
        setNewName(e.target.value);
    };

    const handleUpdateActivity = e => {
        setNewActivity(e.target.value);
    };

    const handleUpdateSubmit = e => {
        e.persist();
        e.preventDefault();
        dispatch({
            type: "updateCat",
            id: e.target.id,
            newName,
            newActivity
        });
    };

    return (
        <div>
            <h1>The Cat's Activity</h1>
            <ul>
                {Object.keys(value.cats).map(cat => {
                    return (
                        <li key={cat}>
                            {value.cats[cat].name} is {value.cats[cat].activity}
                            <ul>
                                <li>
                                    <form onSubmit={e => handleUpdateSubmit(e)} id={cat}>
                                        <ul>
                                            <li>
                                                <label>
                                                    Change Name:
                                                    <input
                                                        type="text"
                                                        name="changeName"
                                                        placeholder="Change the name!"
                                                        onChange={e => handleUpdateName(e)}
                                                    />
                                                </label>
                                            </li>
                                            <li>
                                                <label>
                                                    Change Activity:
                                                    <input
                                                        type="text"
                                                        name="changeName"
                                                        placeholder="Change the name!"
                                                        onChange={e => handleUpdateActivity(e)}
                                                    />
                                                </label>
                                            </li>
                                            <li>
                                                <input type="submit" value="Submit" />
                                            </li>
                                        </ul>
                                    </form>
                                </li>
                            </ul>
                        </li>
                    );
                })}
            </ul>
            <form onSubmit={e => handleSubmit(e)}>
                <label>
                    Name:
                    <input
                        type="text"
                        name="name"
                        placeholder="Add new name!"
                        onChange={e => handleChangeName(e)}
                    />
                </label>
                <label>
                    Activity:
                    <input
                        type="text"
                        name="activity"
                        placeholder="Add new activity!"
                        onChange={e => handleChangeActivity(e)}
                    />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default Activity;
