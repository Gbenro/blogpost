import React, { Component } from 'react';
import {Field, reduxForm} from 'redux-form';;


class PostsNew extends Component {
 state={

 }
    renderField=(field)=>{
        return (
            <div className = "form-group">
                <label>{field.label}</label>
                <input className= "form-control"
                    type="text"
                    {...field.input}
                />
            </div>
        )
    }

  
    render() {
        return (
        <form>
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
        //If errors has * any* properties, redux form assumes form is invalid
        return errors;
    }


export default reduxForm({
    validate,
    form: 'PostsNewForm'
})(PostsNew);


