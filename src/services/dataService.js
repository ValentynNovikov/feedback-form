import {SETUP_SHEET, FEEDBACK_SHEET} from "../constants/google-credentials";

const dataService = {
    getData: async () => {
        const request = await fetch(SETUP_SHEET, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${window.localStorage.getItem('token')}`,
            }
        });

        const data = await request.json();

        return dataService.parseRows(data.values)
    },

    parseRows: (data) => {
        let recruiters = [],
            places = [];

        if (data) {
            data.map((element, index) => {
                if (index !== 0) {
                    recruiters.push({value: element[0], label: element[0]});

                    if (element.length > 1) {
                        places.push({value: element[1], label: element[1]})
                    }
                }
            });
        }

        return {recruiters, places}
    },

    saveValues: async (data) => {
        const request = await fetch(FEEDBACK_SHEET, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${window.localStorage.getItem('token')}`
            },
            body: JSON.stringify(data)
        });

        const response = await request.json();

        return dataService.parseRows(response.values)
    },

    prepareForSave: async (data) => {
        let feedbackValues = [[]];
        const bodyData = {
            "range": "Feedbacks!A1:I1",
            "majorDimension": "ROWS",
            "values": []
        };

        for (let key in data) {
            feedbackValues[0].push(data[key].value)
        }

        bodyData.values = feedbackValues;

        return await dataService.saveValues(bodyData)

    }
};

export default dataService;
