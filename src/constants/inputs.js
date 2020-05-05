export const FIVE_RADIO_BTNS = [
    {value: '1'},
    {value: '2'},
    {value: '3'},
    {value: '4'},
    {value: '5'}
];
export const THREE_RADIO_BTNS = [
    {value: 'Yes'},
    {value: 'No'},
    {value: 'Maybe'}
];
export const QUESTIONS = [
    {
        value: '1. How would you evaluate the work of the Recruitment department at Avenga?',
        threeInputs: false,
        prop: 'departmentScore',
        valid: true
    },
    {
        value: '2. Did you receive enough information about the project/customer/department?',
        threeInputs: false,
        prop: 'enoughInfoScore',
        valid: true
    },
    {
        value: '3. How would you evaluate the level of complexity at a technical interview?',
        threeInputs: false,
        prop: 'complexityScore',
        valid: true
    },
    {
        value: '4. Were the questions relevant to your experience and background?',
        threeInputs: false,
        prop: 'relevantQuestionsScore',
        valid: true
    },
    {
        value: '5. Have you learned anything new and useful during the interview?',
        threeInputs: false,
        prop: 'learningScore',
        valid: true
    },
    {
        value: '6. Will you be open to the new opportunities at Avenga in the future?',
        threeInputs: true,
        prop: 'opportunitiesScore',
        valid: true
    }
];

export class inputStates {
    fields = {
        recruiter: '',
        position: '',
        departmentScore: '',
        enoughInfoScore: '',
        complexityScore: '',
        relevantQuestionsScore: '',
        learningScore: '',
        opportunitiesScore: '',
        place: ''
    };


    constructor() {
        for (let key in this.fields) {
            this.fields[key] = {
                value: '',
                valid: true
            }
        }
    }
}

