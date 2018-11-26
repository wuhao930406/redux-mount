import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Route,Redirect,withRouter } from 'react-router-dom';


class PrivateRoute extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }


    componentWillReceiveProps(nextProps) {
        if (this.props.location != nextProps.location) {
            let _tes = this;
            //do some check
        }
    }



    render() {
        const { themeToken,component: Component,...rest } = this.props;
        let isAuth = sessionStorage.getItem("suc");

        return (
            <Route {...rest} render={props => (
                themeToken != "" ?
                (
                    <Component {...props}/>
                ):
                (
                  <Redirect to={{
                    pathname: '/404'
                  }}/>
                )


    )}/>)
    }

}


PrivateRoute.propTypes  ={
    path:PropTypes.string.isRequired,
    exact:PropTypes.bool,
    strict:PropTypes.bool,
    component:PropTypes.func.isRequired
}

const mapStateToProps = (state)=>{
    return{
        themeToken:state.themeToken
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSwitchName: (name) => {
            dispatch({ type: 'CHANGE_TOKEN', themeToken: name })
        }
    }
}

PrivateRoute = connect(mapStateToProps,mapDispatchToProps)(PrivateRoute)


export default PrivateRoute;