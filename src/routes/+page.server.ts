import type { PageServerLoad } from './$types';
import { OPEN_STATES_API_KEY } from '$env/static/private';

export const load: PageServerLoad = async () => {
    // console.log('OPEN_STATES_API_KEY:', OPEN_STATES_API_KEY);
    // const response = await fetch('https://v3.openstates.org/bills/?jurisdiction=ak&identifier=S5649', {
    //     headers: {
    //         'X-API-Key': OPEN_STATES_API_KEY,
    //     },
    // });
    // const bills = await response.json();
    // console.log(bills);
    // return { bills };
};
