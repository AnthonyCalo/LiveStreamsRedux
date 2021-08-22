import React from 'react';
import { connect } from 'react-redux';
import {signIn, signOut} from '../actions';



class GoogleAuth extends React.Component {
    componentDidMount() {
        window.gapi.load('client:auth2', ()=>{
            window.gapi.client.init({
                clientId: '248921434882-1bgogt2sg722o9eeba88h9968t72g439.apps.googleusercontent.com',
                scope: 'email'
            }).then(()=>{
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChange(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.onAuthChange);
            })
        });
    }
    SignInClick=()=>{
        window.gapi.auth2.getAuthInstance().signIn()
    };

    SignOutClick=()=>{
        this.auth.signOut()
    };

    onAuthChange=(isSignedIn)=>{
        if(isSignedIn){
            this.props.signIn(this.auth.currentUser.get().getId());

        }else{
            this.props.signOut();
        }
    }
    renderAuthButton(){
        if(this.props.isSignedIn===null){
            return(
                <div>
                    I don't know if we are signed in
                </div>)
        }else if (this.props.isSignedIn){
            return( 
                <button className='ui red google button' onClick={this.SignOutClick}>
                    <i className='google icon' />
                    Sign Out
                </button>
            )
        }else{
            return(
                <button className='ui red google button' onClick={this.SignInClick}>
                    <i className='google icon' />
                    Sign in with google
                </button>
                )
        }
    }
    

    render(){
        return(
            <div className="item">
                {this.renderAuthButton()}
            </div>
            )
    }
}

const mapStateToProps=(state)=>{
    return{isSignedIn: state.auth.isSignedIn}
}

export default connect(mapStateToProps, {signIn, signOut})(GoogleAuth);





