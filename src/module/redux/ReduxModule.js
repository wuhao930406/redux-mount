/**
 * Created by kurosaki on 2018/8/9.
 */
import React, { Component } from 'react';
import { Icon } from 'antd';
import {connect} from 'react-redux';
import { TransitionGroup } from 'react-transition-group';
import {AnimatedWrapper} from '../../components';

class ReduxModule extends Component {
    constructor(){
        super();
    }

    render () {
        let { array,text } = this.props;
        console.log(array)
        let _it = this.props;

        const row = (item,i)=>{
            return(
            <AnimatedWrapper key={i} classNames="column">
                <li>
                    <span onClick={(e)=>{
                       _it.onSwitchTxt(item)
                    }}>
                        {item}
                    </span>
                    <Icon type="delete" onClick={(i)=>{
                        let newarr = array;
                            newarr.splice(i,1);
                           _it.onSwitchArr(newarr);
                    }}>

                    </Icon>
                </li>
            </AnimatedWrapper>
            )
        }

        return (

            <ul className="ulist">
                <TransitionGroup>
                {
                  array.map((item,i)=>row(item,i))
                }
                </TransitionGroup>
            </ul>


        )
    }
}
const mapStateToProps = (state) => {
    return {
        array: state.array,
        text:state.text
    }
}
const mapDispatchToProps = ( dispatch ) => {
    return {
        onSwitchArr: (name) => {
            dispatch({ type: 'CHANGE_ARR', array:JSON.parse(JSON.stringify(name))})
        },
        onSwitchTxt: (name) => {
            dispatch({ type: 'CHANGE_TXT', text: name })
        },

    }
}
ReduxModule = connect(mapStateToProps,mapDispatchToProps)(ReduxModule)

export default ReduxModule