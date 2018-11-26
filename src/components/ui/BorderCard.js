/**
 * Created by kurosaki on 2018/8/6.
 */
import React from 'react'
import PropTypes from 'prop-types'
import {
    Link,
    withRouter
} from 'react-router-dom';

class BorderCard extends React.Component{
    static propTypes = {
        borderRadius: PropTypes.number,
        startColor: PropTypes.string,
        endColor: PropTypes.string,
        borderSize: PropTypes.number,
        boxShadow: PropTypes.string,
        background: PropTypes.string,
        padding: PropTypes.number
    };

    static defaultProps = {
        borderRadius: 8,
        startColor: "#FFF1EB",
        endColor: "#ACE0F9",
        borderSize: 2,
        boxShadow: "5px 5px 10px #B4B4B4",
        background: "#FFFFFF",
        padding: 10,
        fontSize:22,
        borderBottom:"#999 solid 1px",
        display:"flex",
        justifyContent:"space-between",
        flexDirection:"row",
        alignItems:"flex-end"
    };

    constructor(props){
        super(props);
    }

    jump(url){
        this.props.history.push(url);
    }


    render(){
        let {props} = this;
        const containerStyle = {
            position: "relative",
            borderRadius: props.borderRadius + "px",
            background: "linear-gradient("+props.startColor+","+props.endColor+")",
            backgroundClip: "padding-box",
            boxShadow: props.boxShadow,
            padding: props.borderSize+"px"
        };
        const style = {
            background: props.background,
            borderRadius: (props.borderRadius - props.borderSize) + "px",
            padding: props.padding + "px"
        };
        const title = {
            padding:props.padding,
            fontSize:props.fontSize,
            display:props.display,
            justifyContent:props.justifyContent,
            flexDirection:props.flexDirection,
            alignItems:props.alignItems
        };
        const subTitle = {
            color:"#8080ff",
            borderLeft:"#8080ff solid 4px",
            textIndent:18
        }
        const jumpTitle={
            fontSize:18,
            color:"#999",
            textDecoration:"none"
        }


        let norelease = (props)=>(
            <h2 style={title}>
                <span style={subTitle}>{props.title}</span>
                {
                    props.subtitle?
                        <span onClick={()=>this.jump(props.url)} style={jumpTitle}>{props.subtitle}</span>:
                        ""
                }

            </h2>
        )
        let release = (props)=>(
            <h2 style={title}>
                {
                    props.subtitle?
                        <Link to={props.url} style={jumpTitle}>{props.subtitle}</Link>:
                        ""
                }
                <span style={subTitle}>{props.title}</span>
            </h2>
        )


        return (
            <div style={containerStyle}>
                {
                    this.props.release?release(this.props):norelease(this.props)
                }

                <div style={style}>
                    {this.props.children}
                </div>
            </div>
        )
    }
}
export default withRouter(BorderCard)