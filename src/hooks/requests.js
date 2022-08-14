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
    try {
        await axios.post(`${API_URL}/launches`, launch);
        return {
            ok: true,
        };
    } catch (err) {
        return {
            ok: false,
        };
    }
}

// Delete launch with ID launch
async function httpAbortLaunch(id) {
    try {
        axios.delete(`${API_URL}/launches/${id}`);
        return {
            ok: true,
        };
    } catch (err) {
        return {
            ok: false,
        };
    }
}

export { httpGetPlanets, httpGetLaunches, httpSubmitLaunch, httpAbortLaunch };
