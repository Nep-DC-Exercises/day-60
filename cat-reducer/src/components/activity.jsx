import React from "react";
import { connect } from "react-redux";
import { catNap, catEat, catPlay } from "../redux/activity";

const Activity = ({ activity, catNap, catEat, catPlay }) => {
    return (
        <div>
            <h1>Cat Reducer</h1>
            <p>The cat is {activity}</p>
            <ul>
                <li><button onClick={() => catEat()}>Eating</button></li>
                <li><button onClick={() => catNap()}>Napping</button></li>
                <li><button onClick={() => catPlay()}>Playing</button></li>
            </ul>
        </div>
    );
};

const mapStateToProps = state => {
    const { activity } = state;
    return activity;
};

const mapDispatchToProps = dispatch => {
    return {
        catEat: () => dispatch(catEat()),
        catNap: () => dispatch(catNap()),
        catPlay: () => dispatch(catPlay())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Activity);
