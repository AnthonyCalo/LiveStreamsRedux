import React from 'react';
import Modal from '../Modal';
import {Link} from "react-router-dom";
import {fetchStream, deleteStream} from "../../actions";
import { connect } from 'react-redux';

class StreamDelete extends React.Component{
    componentDidMount(){
        console.log(this.props);
        this.props.fetchStream(this.props.match.params.id);
    }
    renderActions(){
        const id = this.props.match.params.id;

        return (
            <>
                <button className="ui negative button" onClick={()=>this.props.deleteStream(id)}>Delete</button>
                <Link to="/" className="ui button">Cancel</Link>
            </>
        )
    }
    renderContent(){
        if(!this.props.stream){
            return "Are you sure you want to delete this stream"
        }
        return `Are you sure you want to delete stream with title: ${this.props.stream.title}`
        
    }
    render(){
        return (
            <div>
                StreamDelete
                <Modal 
                    title="Delete Streams"
                    content={this.renderContent()}
                    actions={this.renderActions()}
                    />
            </div>
            )
        }
    }

const mapStateToProps = (state, ownProps) =>{
    return {stream: state.streams[ownProps.match.params.id]}
};



export default connect(mapStateToProps, {fetchStream, deleteStream})(StreamDelete);