<script lang="ts">
    import { type BreadStep_T } from '$lib';
    import BreadTimer from '$lib/BreadTimer.svelte';
    import ProgressBar from '$lib/ProgressBar.svelte';
    import type { PageProps } from '../../$types';

    // Retrieve fetched page data.
    let { data }: { data: { steps: BreadStep_T[], btype: string } } = $props();
    // console.log(data); // DEBUGGING!

    let steps: BreadStep_T[] = data.steps;
    let btype: string = data.btype;

    // STATE
    let showGUI: boolean = $state(true);
    let currentStep: number = $state(0);

    // HELPERS
    function stepBack()
    {
        currentStep = currentStep - 1 < 0 ? 0 : currentStep - 1;
    }
    function stepForward()
    {
        currentStep = currentStep + 1 >= steps.length ? steps.length - 1 : currentStep + 1;
    }

</script>

{#snippet breadstep(step: BreadStep_T)}

    <!-- Render a window using the provided step details -->
    <div class="w-3/4 h-full pt-2 m-auto border-3 rounded-md bg-orange-300">
        <div class="bg-orange-200 w-3/4 h-1/2 max-h-fit m-auto px-1 border-10 border-orange-800 rounded-sm overflow-clip">
            <img
                class="w-full p-2"
                src={step.img}
                alt={step.alt}
            />
        </div>
        <div class="px-2 h-1/2 text-lg">
            <div class="h-fit py-2 mb-2 flex flex-row items-center">{step.title}</div> 
            <div class="text-sm py-1 px-2 h-fit max-h-5/6 overflow-y-auto bg-orange-200 rounded-sm inset-shadow-sm">
                {step.desc}
            </div>
        </div>
    </div>

{/snippet}

<main class="w-full h-full rounded-md bg-amber-100 font-freckleface">

    <!-- Display the name of the bread type -->
    <h1 class="text-4xl text-center text-red-900 py-4">{btype[0].toUpperCase() + btype.slice(1)} Bread</h1>

    <!-- Card area for showing steps -->
    <div class="h-2/3">
        <h2 class="h-1/9 text-2xl text-center">Current Step:</h2>
        <div class="w-full h-8/9">
            {@render breadstep(steps[currentStep])}
        </div>
    </div>

    <!-- Return home button -->
    <div class="w-full h-1/4 relative">
        <a
            href="/"
            class="absolute top-3 right-3 bg-orange-300 border-2 rounded-sm p-2 transition active:scale-115"
        >
            Return to Home
        </a>
    </div>

    <!-- Primary UI for interaction with progress page -->
    <div class="fixed bottom-0 left-0 w-screen h-fit">
        <button
            class="bg-red-900 text-stone-50 px-2 py-1 rounded-tr-sm"
            onclick={() => { showGUI = !showGUI }}
        >Show Navigation</button>
        <div class={`${ showGUI ? 'max-h-100' : 'max-h-0'} h-fit overflow-clip transition-[max-height] bg-red-900 text-stone-50 flex flex-row`}>

            <!-- Navigational Buttons + Progress Bar (steps) -->
            <div class="w-1/2">
                <h3 class="text-center text-lg">Progress</h3>
                <div class="flex flex-row">
                    <div class="w-3/5 flex flex-row justify-evenly items-center">
                        <button
                            onclick={stepBack}
                            class="w-1/3 h-fit bg-purple-500 shadow-lg transition active:shadow-purple-500/50 active:scale-110"
                        >Prev.</button>
                        <button
                            onclick={stepForward}
                            class="w-1/3 h-fit bg-purple-500 shadow-lg transition active:shadow-purple-500/50 active:scale-110"
                        >Next</button>
                    </div>
                    <div class="w-2/5 h-20 px-2 py-1">
                        <ProgressBar stepCount={steps.length} currentStep={currentStep + 1} />
                    </div>
                </div>
            </div>

            <!-- Timers (if any) + "BreadBook" containing facts about the selected bread -->
            <div class="flex flex-col w-1/2 px-1">
                <h3 class="text-lg">Timers</h3>
                <div class="text-sm">
                    {#if steps[currentStep].timer}
                        <BreadTimer duration={steps[currentStep].timer as number} />
                    {:else}
                        <i class="text-xs">This step does not require a timer!</i>
                    {/if}
                </div>
            </div>

        </div>
    </div>

</main>