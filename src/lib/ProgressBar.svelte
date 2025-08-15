<script lang="ts">

    // The max number of steps to render + the current step highlighted.
    let { stepCount, currentStep }: { stepCount: number, currentStep: number } = $props();
    $inspect(stepCount);

    const MAX_COUNT: number = 8; // changes the maximum number of steps rendered
    const STEP_VALUE: number = MAX_COUNT / stepCount; // the value of each step, used to progress bar when stepCount > MAX_COUNT

</script>

<!-- The vertical progress bar should render "levels"
 of some container getting filled as each step is completed.
 The render should only be less than one level filled when initialized.
 When the currentStep is equal to the stepCount , the progress
 bar container should appear full. In times where the stepCount
 is larger than the maxCount constant, the progress bar will determine
 the relative progress by standardizing each step of MAX_COUNT. -->

<div class="w-full h-full border-x-2 border-b-2 border-stone-50 rounded-b-md">
    <div class="w-full h-full flex flex-col-reverse">
        {#if stepCount <= MAX_COUNT}
            {#each Array.from(Array(stepCount).keys()) as tick}
                <div class={`w-full h-1/8 ${ tick + 1 <= currentStep ? 'bg-orange-200 border-y-1 border-orange-200' : '' }`}>
                    <div class="border-1 w-2"></div>
                </div>
            {/each}
        {:else}
            {#each Array.from(Array(MAX_COUNT).keys()) as tick}
                <div class={`w-full h-1/8 ${ tick + 1 <= currentStep * STEP_VALUE ? 'bg-orange-200 border-y-1 border-orange-200' : '' }`}>
                    <div class="border-1 w-2"></div>
                </div>
            {/each}
        {/if}
    </div>
</div>