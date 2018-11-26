/**
 * Created by kurosaki on 2018/8/8.
 */
import React, { Component } from "react";
import { CSSTransition,TransitionGroup } from 'react-transition-group';

const AnimatedWrapper  = (props) => (
    < CSSTransition
        { ... props}
        classNames = {props.classNames}
        timeout = {{enter:500,exit : 500 }}
    />
);
export default AnimatedWrapper;