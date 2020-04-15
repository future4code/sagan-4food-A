import React from 'react';
import {connect} from "react-redux";
import {doLogin} from '../../actions/login'
import {goBack} from "connected-react-router";
import {routes} from "../Router/index";
import {push} from "connected-react-router";
import backImg from '../../img/back.svg'
import {HDWrapper, StyledTextHD, HDWrapperCont, HDWrapperCenter} from '../../style/styled'
import Divider from '@material-ui/core/Divider';



function HistoryDivider(props) {
    return (
        <HDWrapper>
            <HDWrapperCont>
                <img src={backImg} onClick={props.goBack}/>
                <HDWrapperCenter>
                    <StyledTextHD variant='subtitle2'>{props.head}</StyledTextHD>
                </HDWrapperCenter>
            </HDWrapperCont>
            <Divider />
        </HDWrapper>
    );
}

const mapStateToProps = state => ({});

const mapDispatchToProps = (dispatch) => ({
    doLogin: (inputUser, inputPass) => dispatch(doLogin(inputUser, inputPass)),
    doSignUp: () => dispatch(push(routes.signUp)),
    goBack: () => dispatch(goBack())

})

export default connect(mapStateToProps, mapDispatchToProps)(HistoryDivider)


{/* <HDWrapper>
<div><img src={backImg} /></div>
<HDTextWrapper><StyledTextHD variant='subtitle2'>{props.head}</StyledTextHD></HDTextWrapper>
</HDWrapper> */}