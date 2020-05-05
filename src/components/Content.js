import React, {Component} from 'react';
import Select from "react-select";
import './content.css'
import RadioForm from './../components/RadioForm'
import {inputStates} from "../constants/inputs";
import dataService from "../services/dataService";


class Content extends Component {
    state = {
        fields: new inputStates().fields,
    };

    handleChange = (name, item) => {
        let fields = this.state.fields;
        fields[name].value = item.value ? item.value : item.target.value;

        this.setState(
            {fields}, () => console.log(`Option selected:`, this.state)
        );
    };

    trigRadioBtnValidation = () => {
        this.refs.child.checkValidInputs();
    };

    formSubmit = (e) => {
        e.preventDefault();

        if (this.handleValidation()) {
            dataService.prepareForSave(this.state.fields).then((res) => {
              this.props.onChange(true);
            })
        } else {
            this.trigRadioBtnValidation();
            console.log(this.state.fields)
        }
    };

    handleValidation() {
        let fields = this.state.fields;
        let formIsValid = true;

        for (let key in fields) {
            if ((fields[key].value.match(/^\s*$/) || []).length > 0) {
                fields[key].valid = false;
                formIsValid = false;

            } else {
                fields[key].valid = true
            }

            this.setState({fields});
        }

        return formIsValid;
    };

    render() {
        const {recruiter} = this.state.fields.recruiter.value,
            {place} = this.state.fields.place.value;

        return (
            <div className='card'>

                <h1 className='title'>Dear candidate,<br/>
                    We highly appreciate your time spent on the recruitment process at Avenga.<br/>
                    Since we always strive for continuous improvement, your feedback is essential for us.<br/>
                    That is why you are welcome to complete a quick survey below.
                </h1>

                <form name="feedback-form" className="feedback-form" onSubmit={this.formSubmit}>
                    <div className='recruiters-field'>
                        <label>Please, indicate the name of the recruiter that was contacting you.</label>
                        <Select className={this.state.fields.recruiter.valid ? 'select' : 'select error'}
                                options={this.props.recruiters}
                                value={recruiter}
                                onChange={this.handleChange.bind(this, 'recruiter')}/>
                    </div>

                    <div className='position-field'>
                        <label>Please, indicate the position you have applied for.</label>
                        <input className={this.state.fields.position.valid ? 'select' : 'select error'}
                               value={this.state.fields.position.value}
                               onChange={this.handleChange.bind(this, 'position')} type="text"/>
                    </div>

                    <RadioForm ref="child" onChange={this.handleChange} fields={this.state.fields}/>

                    <div className='place-field'>
                        <label>7. Where did you find out about Avenga?</label>
                        <Select className={this.state.fields.place.valid ? 'select' : 'select error'}
                                options={this.props.places} value={place}
                                onChange={this.handleChange.bind(this, 'place')}/>
                    </div>

                    <p className={'submit-btn'}><button type="submit">Submit</button></p>
                </form>


            </div>
        )
    }
}

export default Content;
