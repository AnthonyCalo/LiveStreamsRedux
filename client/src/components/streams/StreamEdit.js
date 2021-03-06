import React from 'react';
import { connect } from 'react-redux';
import {fetchStream, editStream} from "../../actions";
import StreamForm from './StreamForm';

class StreamEdit extends React.Component{
    componentDidMount() {
        console.log(this.props);
        this.props.fetchStream(this.props.match.params.id);
    }
    onSubmit=(formValues)=>{
        console.log(formValues)
        this.props.editStream(this.props.match.params.id, formValues);
    }
    render(){
        if (!this.props.stream){
            return <div>...Loading</div>
        }else{
            return (
            <div>
                <h3>Edit a stream</h3>
                <StreamForm 
                    onSubmit={this.onSubmit}
                    //intial values is a special props value from reduxForm
                    initialValues={this.props.stream}
                    />
            </div>)
        }
    }
}

const mapStateToProps=(state, ownProps)=>{
    return{stream: state.streams[ownProps.match.params.id]};
}

export default connect(mapStateToProps, {fetchStream, editStream})(StreamEdit);