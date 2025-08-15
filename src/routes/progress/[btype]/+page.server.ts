import * as db from "$lib/server/data/bread-types.json";
import type { PageLoad } from '../$types';
import type { BreadStep_T } from '$lib';

export const load: PageLoad = ({ params }) =>
{
    // console.log(db["breadtypes"][0].STEPS);
    let btype: string = (params as { btype: string }).btype;

    // Retrieve the bread steps for the provided page route.
    let data_steps: BreadStep_T[] = (db["breadtypes"].filter((breadinfo) => { if (breadinfo.TYPE == btype) { return breadinfo } }))[0].STEPS;

    // Return the fetched data to the page route.
    return {
        steps: data_steps,
        btype: btype,
    };
}