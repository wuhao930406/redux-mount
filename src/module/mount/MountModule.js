/**
 * Created by kurosaki on 2018/8/9.
 */
import React, { Component } from 'react';
import { Icon } from 'antd';
import { TransitionGroup } from 'react-transition-group';
import { AnimatedWrapper } from '../../components';


class MountModule extends Component {
    constructor(){
        super();
        this.state={}
    }


    render () {
        let {array,handleGetChild} = this.props;
        const row = (item,i)=>{
            return(
            <AnimatedWrapper key={i} classNames="column">
                <li>
                    <span  data-id={i} onClick={(e)=>{
                        this.props.showIndex(e);
                    }}>
                        {item}
                    </span>
                    <Icon data-id={i} type="delete" onClick={(e)=>{
                        this.props.textSplice(e);
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

export default MountModule