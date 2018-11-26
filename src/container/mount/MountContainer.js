/**
 * Created by kurosaki on 2018/8/9.
 */
import React, { Component } from 'react';
import { BorderCard } from '../../components/index';
import {Link} from 'react-router-dom';
import { Input,message,Button } from 'antd';
import { MountModule } from '../../module'

const Search = Input.Search;

class MountContainer extends Component {
    constructor(props){
        super(props);
    }
    state={
        array:[],
        text:""
    }

    //delete
    textSplice = (e) => {
        let newarr = this.state.array,
            i = parseInt(e.target.getAttribute('data-id'));
            newarr.splice(i,1);
        this.setState({array:newarr});
    }

    //showindex
    showIndex = (e) =>{
        let newarr = this.state.array,
        i = parseInt(e.target.getAttribute('data-id'));
        this.setState({text:newarr[i]});
    }

    //reset
    reset = ()=>{
        this.setState({array:[],text:""});
    }


    render () {
        let { array,text } = this.state;
        let _it = this;

        return (
            <div>
                <BorderCard title="Mount Demo" subtitle="Redux Demo" url="/redux">
                    <div className="flexrow">
                        <Search
                            value={text}
                            onChange={(e)=>{
                                let {value} = e.target;
                                this.setState({
                                    text:value
                                })
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
                                             _it.setState({
                                              array:arr
                                            })
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
                <MountModule array={array} textSplice={this.textSplice} showIndex={this.showIndex}>
                </MountModule>
            </div>
        )
    }
}

export default MountContainer