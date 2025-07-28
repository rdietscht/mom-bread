<script lang="ts">

    import { computeFinalTime, convertSecsToDigitalTime, displayDT, type DigitalTime_T } from '$lib';

    // Duration of the timer in seconds.
    let { duration }: { duration: number } = $props(); 

    const MS_DURATION: number = duration * 1000; // for work with legacy functions

    let final_time: Date | undefined = $state(undefined);
    let time_left: DigitalTime_T = $state(convertSecsToDigitalTime(duration));
    let interval_id: any = $state(0); // used to preemptively cut a timer short

    // Used to configure timer settings and render state values.
    function setupBreadTimer()
    {
        // Obtain the finishing timestamp.
        final_time = computeFinalTime(new Date(), MS_DURATION);

        // Periodically update the timer display until the final time is reached.
        interval_id = setInterval(updateTime, 1000);
    }

    // Periodically updates the displayed date time.
    function updateTime()
    {
        // console.log('updating time display...'); // DEBUGGING!
        let current_time: Date = new Date();

        // EARLY EXIT - we have passed the finish time.
        if (final_time)
        {
            if (final_time.getTime() < current_time.getTime())
            {
                console.log("time reached! alerting the user..."); // DEBUGGING!
                time_left = convertSecsToDigitalTime(0);

                let ring: HTMLAudioElement = new Audio('/bell-ring.wav');
                ring.volume = 1.0;
                ring.play();

                // Destroy the interval calling this function once it's finished.
                clearInterval(interval_id);

            } else
            {
                // Update the displayed time by getting the difference
                // between the current time and the final time.
                let ms_diff: number = final_time.getTime() - current_time.getTime();
                let raw_time = convertSecsToDigitalTime(ms_diff / 1000);
                raw_time.hrs = Math.round(raw_time.hrs);
                raw_time.mins = Math.round(raw_time.mins);
                raw_time.secs = Math.round(raw_time.secs);
                time_left = raw_time;
            }
        } else
        {
            console.warn("WARN: Detected undefined final time during time update!");
        }

    }

</script>

<div class="w-full h-full flex">

    <!-- Graphic of a timer (static) -->
    <img
        class="w-1/3"
        src="/breadwatch.png"
        alt="stopwatch device in the shape of toasted bread"
    />

    <!-- Digital Clock showing remaining time -->
    <div class="w-2/3 text-xs text-center bg-red-950 mx-2 rounded-md">
        <!-- TODO: Render a timer in HH:MM:SS format that gets updated each second
            by displaying new Date instances after a timeout interval passes UNTIL
            the elapsed time specified by the duration prop is reached -->
            {#if final_time}
                <i>Estimated to Finish: {final_time.toLocaleTimeString()}</i>
                <h3 class="text-lg">{displayDT(time_left)}</h3>
            {:else}
                <button onclick={setupBreadTimer}>Begin Timer</button>
            {/if}
    </div>

</div>