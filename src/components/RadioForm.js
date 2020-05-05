import React, {Component} from 'react';
import {QUESTIONS, THREE_RADIO_BTNS, FIVE_RADIO_BTNS} from "../constants/inputs";
import './../components/radio-form.css'

class RadioForm extends Component {
    state = {
        questions: QUESTIONS,
        threeRadioBtns: THREE_RADIO_BTNS,
        fiveRadioBtns: FIVE_RADIO_BTNS
    };

    changeHandler = (name, value) => {
        if (typeof this.props.onChange === 'function') {
            this.props.onChange(name, value);
        }
    };

    checkValidInputs = () => {
        let updatedQuestions = this.state.fields;

        this.state.questions.map((question) => {
            for (let key in this.props.fields) {
                if (question.prop === key) {
                    question.valid = this.props.fields[key].valid
                }
            }
        });
        this.setState({updatedQuestions})

    };

    render() {
        return (
            <div>
                {this.state.questions.map((question, index) =>
                    <div className='radio-field' key={index}>
                        <label>{question.value} </label>

                        {!question.threeInputs && (
                            <div className='radio-btn'>
                                {this.state.fiveRadioBtns.map((item, index) =>

                                    <div key={index}>
                                        <label style={{color: !question.valid ? 'red' : 'black'}}>{item.value}</label>
                                        <input type="radio"
                                               value={item.value}
                                               name={question.prop}
                                               id={question.prop}
                                               onChange={this.changeHandler.bind(this, question.prop)}/>

                                    </div>
                                )}


                            </div>
                        )}


                        {question.threeInputs && (
                            <div className='radio-btn'>
                                {this.state.threeRadioBtns.map((item, index) =>

                                    <div key={index}>
                                        <label style={{color: !question.valid ? 'red' : 'black'}}>{item.value}</label>
                                        <input type="radio"
                                               value={item.value}
                                               name='radio'
                                               id={Math.random()}
                                               onChange={this.changeHandler.bind(this, question.prop)}/>
                                    </div>
                                )}
                            </div>
                        )}

                        {!question.valid && (
                            <p className={'validation-error'}>*required</p>
                        )}

                    </div>
                )}
            </div>

        )
    }
}

export default RadioForm;
