import axios from 'axios';

const API_URL = 'http://localhost:8000';

async function httpGetPlanets() {
    try {
        const res = await axios.get(`${API_URL}/planets`);

        return await res.data;
    } catch (err) {
        console.error(err);
    }
}

async function httpGetLaunches() {
    try {
        const res = await axios.get(`${API_URL}/launches`);
        const fetchedLaunches = await res.data;

        return fetchedLaunches.sort((a, b) => {
            return a.flightNumber - b.flightNumber;
        });
    } catch (err) {
        console.log(err);
    }
}

async function httpSubmitLaunch(launch) {
    // TODO: Once API is ready.
    // Submit given launch data to launch system.
}

async function httpAbortLaunch(id) {
    // TODO: Once API is ready.
    // Delete launch with given ID.
}

export { httpGetPlanets, httpGetLaunches, httpSubmitLaunch, httpAbortLaunch };
