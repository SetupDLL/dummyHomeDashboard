const BASE_URL = 'https://dummyhome.onrender.com';
// const BASE_URL = 'http://127.0.0.1:8000';

class GlucoseRepository {

    findOnDate(date) {
        let from = date.startOf('day').toSeconds();
        return fetch(`${BASE_URL}/entries/date/${from}`)
            .then((response) => {
                return response.json();
            })
            .then(data => {
                return new GlucoseDataSet(data.map(e => new GlucoseEntry(e.date, e.glucose)));
            });
    }

    getLastId() {
        return fetch(`${BASE_URL}/entries/lastId`)
            .then((response) => {
                return response.json();
            });
    }
}
