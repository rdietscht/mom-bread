// place files you want to import through the `$lib` alias in this folder.
export type BreadStep_T =
{
    title: string, // the title of the step (i.e., making the dough)
    img: string, // url to associated image
    alt: string, // description of image (for accessibility purposes)
    desc: string, // describes the step; can be expanded
    links?: string, // resource links associated for additional help
    timer?: number // for steps with waiting periods, the time in seconds to start the timer
}

export type DigitalTime_T =
{
    hrs: number,
    mins: number,
    secs: number,
}

/**
 * Builds and yields a `string` in HH:MM:SS format.
 * 
 * @param time The time value to use.
 * @returns A `string` value in HH:MM:SS format.
 */
export function displayDT(time: DigitalTime_T): string
{
    let hrs_f: string = time.hrs.toString().padStart(2, '0');
    let mins_f: string = time.mins.toString().padStart(2, '0');
    let secs_f: string = time.secs.toString().padStart(2, '0');
    return `${hrs_f}:${mins_f}:${secs_f}`;
}

/**
 * Converts the given duration in seconds to the `DigitalTime_T` interface.
 * 
 * @param secs Number of seconds in the duration.
 * @returns A `DigitalTime_T` instance computed from the `secs` parameter.
 */
export function convertSecsToDigitalTime(secs: number): DigitalTime_T
{
    return {
        hrs: Math.floor(secs / 3600),
        mins: Math.floor((secs - (Math.floor(secs / 3600) * 3600)) / 60),
        secs: secs - (Math.floor((secs - (Math.floor(secs / 3600) * 3600)) / 60) * 60) - (Math.floor(secs / 3600) * 3600)
    }
}

/**
 * Obtains the final time value from the given `start` time after `duration_ms` elapses.
 * 
 * @param start The starting time, given a `Date` instance.
 * @param duration_ms The duration of time from the starting time, in milliseconds.
 * @returns A new `Date` instance representing the time after the duration elapses starting from the start time.
 */
export function computeFinalTime(start: Date, duration_ms: number): Date
{
    let final_date: Date;

    // Get the ending time by adding to the start time in seconds.
    let final_ms: number = start.getTime() + duration_ms;
    final_date = new Date(final_ms); 
    // console.log(`Computed ending time: ${final_date}`);

    return final_date;
}