import React from 'react';
import { Field, reduxForm } from 'redux-form';


class StreamForm extends React.Component{
    
    renderError=({error, touched})=>{
        if(touched && error){
            return(
                <div className='ui  message'>
                    <div className="header">{error}</div>        
                </div>)
        }
        return <div></div>;
    }
    renderInput=({input, label, meta})=> {
        return (
            <div className="field">
                <label>{label}</label>
                <input 
                    onChange={input.onChange}
                    value={input.value} autoComplete='off'
                />
                {this.renderError(meta)}
            </div>
        )
    }
    onSubmit=(formValues)=>{
        this.props.onSubmit(formValues);
        console.log(formValues)
    }

    render() {
    return (
        //passes form value to onSubmit function. props.handleSubmit comes from reduxForm
        <form className="ui form" onSubmit={this.props.handleSubmit(this.onSubmit)}>
            <Field name="title" component={this.renderInput} label="Title"/>
            <Field name="description" component={this.renderInput} label="Description"/>
            <button className="ui button primary">Submit</button>
        </form>
        )
    }
}
const validate = formValues =>{
    const errors = {}
    if(!formValues.title){
        errors.title="You must enter a title"
    }

    if(!formValues.description){
        errors.description="You must enter a description"
    }

    return errors;
};

export default reduxForm({
    form: 'streamCreate',
    validate: validate
})(StreamForm);

