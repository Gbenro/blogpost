import React, { Component } from 'react';
import {Field, reduxForm} from 'redux-form';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {createPost} from '../actions';



class PostsNew extends Component {

    
    renderField=(field)=>{

        const {meta:{touched,error}}= field;
    const className = `form-group ${touched && error ? 'has-danger': ''}`

        return (
            <div className = {className}>
                <label>{field.label}</label>
                <input className= "form-control"
                    type="text"
                    {...field.input}
                />
                <div className="text-help">
                {touched ? error : ''}
                </div>
            </div>
        )
    }
    onSubmit(values){
       
       this.props.createPost(values, () =>{
            this.props.history.push('/');
       });
    }
    render() {
        const {handleSubmit} = this.props;

        return (
        <form onSubmit ={handleSubmit(this.onSubmit.bind(this))}> 
            <Field 
            name= "title"
            label="Title"
            component={this.renderField} 
            />
            <Field
            name="categories"
            label="Categories"
            component = {this.renderField}
            />
            <Field
            name='content'
            label="Post Content"
            component = {this.renderField}
            />
            <button type ="sumbit" className= "btn btn-primary" >Submit</button>
            <Link className = "btn btn-danger" to ="/">
               Cancel
              </Link>
        </form>
        );
    }
}
    function validate(values){
        const errors ={};

        //validate the input from 'values'
        if(!values.title || values.title.length < 3){
            errors.title= "Enter a Title that is at least 3 character";
        }
        if(!values.categories){
            errors.categories= "Enter a Categories";
        }
        if(!values.content){
            errors.content= "Enter some content";
        }

        //If errors is empty, the form is fine to submit
        //If errors has *any* properties, redux form assumes form is invalid
        return errors;
    }


export default reduxForm({
    validate,
    form: 'PostsNewForm'
})(
   connect(null,{createPost}) (PostsNew)
    );


