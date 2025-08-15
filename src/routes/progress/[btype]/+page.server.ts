import * as db from "$lib/server/data/bread-types.json";
import type { PageLoad } from '../$types';
import type { BreadStep_T } from '$lib';

export const load: PageLoad = ({ params }) =>
{
    // console.log(db["breadtypes"][0].STEPS);

    // TODO: Add some logic here to use the params of the page route
    // to determine which steps to fetch.

    let data_steps: BreadStep_T[] = db["breadtypes"][0].STEPS;

    // Return the fetched data to the page route.
    return {
        steps: data_steps,
        btype: (params as { btype: string }).btype
    };
}