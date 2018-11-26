/**
 * Created by kurosaki on 2018/8/9.
 */
import React, { Component } from 'react';
import { BorderCard } from '../../components/index';
import {Link} from 'react-router-dom';
import { Input,message,Button } from 'antd';
import { ReduxModule } from '../../module'
import {connect} from 'react-redux';
const Search = Input.Search;


class ReduxContainer extends Component {
    constructor(props){
        super(props);
    }


    //delete
    //textSplice = (e) => {
    //    let newarr = this.state.array,
    //        i = parseInt(e.target.getAttribute('data-id'));
    //    newarr.splice(i,1);
    //    this.setState({array:newarr});
    //}

    //showindex
    //showIndex = (e) =>{
    //    let newarr = this.state.array,
    //        i = parseInt(e.target.getAttribute('data-id'));
    //    this.setState({text:newarr[i]});
    //}

    //reset
    reset = ()=>{
        let props = this.props;
        props.onSwitchArr([]);
        props.onSwitchTxt("")
    }


    render () {
        let { array,text } = this.props;
        let _it = this.props;

        return (
            <div>
                <BorderCard title="Redux Demo" subtitle="Mount Demo" url="/">
                    <div className="flexrow">
                        <Search
                            value={text}
                            onChange={(e)=>{
                                let {value} = e.target;
                                _it.onSwitchTxt(value)
                            }}
                            placeholder="input add text"
                            enterButton="Add Text"
                            size="large"
                            onSearch={value => {
                                if(value==""){
                                    message.error("请输入内容")
                                }else{
                                   let arr = array,key=0;
                                   arr.map(function(item,i) {
                                      if(item==value ){
                                            key = 1;
                                      }
                                   })
                                   setTimeout(function(item){
                                        if(key==1){
                                             message.error("已存在的text文本")
                                        }else{
                                            arr.push(value);
                                            console.log(arr)
                                            _it.onSwitchArr(arr)
                                        }
                                   },10)
                                }
                            }}
                        />
                        <Button size="large" onClick={this.reset} style={{marginLeft:10}}>
                            clear
                        </Button>

                    </div>
                </BorderCard>
                <ReduxModule>
                </ReduxModule>
            </div>
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
            dispatch({ type: 'CHANGE_ARR', array:JSON.parse(JSON.stringify(name)) })
        },
        onSwitchTxt: (name) => {
            dispatch({ type: 'CHANGE_TXT', text: name })
        },

    }
}
ReduxContainer = connect(mapStateToProps,mapDispatchToProps)(ReduxContainer)

export default ReduxContainer