<script lang="ts">

    const steps: BreadStep_T[] = [
        {
            title: 'Make the Dough',
            img: '/doughmaking.png',
            alt: 'cartoon of someone making dough',
            desc: 'Every bread type starts here. Making the dough \
            requires careful kneading to provide a firm foundation \
            for your starter. If you want to ensure a good texture \
            for your bread, make sure you knead well!',
        }
    ];

    let showGUI: boolean = $state(true);

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
            <div class="h-1/6 flex flex-row items-center">{step.title}</div> 
            <div class="text-sm py-1 px-2 h-fit max-h-5/6 overflow-y-auto bg-orange-200 rounded-sm inset-shadow-sm">
                {step.desc}
            </div>
        </div>
    </div>

{/snippet}

<main class="w-full h-full rounded-md bg-amber-100 font-freckleface">

    <!-- For sandwich bread, display the steps and have timers available -->
    <h1 class="text-4xl text-center text-red-900 py-4">Sandwich Bread</h1>

    <!-- Carousel area for showing steps -->
    <div class="h-2/3">
        <h2 class="h-1/9 text-2xl text-center">Current Step:</h2>
        <div class="w-full h-8/9">
            <!-- PROOF OF CONCEPT; REMOVE WHEN NOT TESTING -->
            {@render breadstep(steps[0])}
        </div>
    </div>

    <!-- Primary UI for interaction with progress page -->
    <div class="fixed bottom-0 left-0 w-screen h-fit">
        <button
            class="bg-red-900 text-stone-50 px-2 py-1 rounded-tr-sm"
            onclick={() => { showGUI = !showGUI }}
        >Show Hidden</button>
        <div class={`${ showGUI ? 'max-h-100' : 'max-h-0'} h-fit overflow-clip transition-[max-height] bg-red-900 text-stone-50`}>
    
            <!-- Navigational Buttons + Progress Bar (steps) -->
            <div>
                <h3>Progress</h3>
                <div class="flex flex-row">
                    <button class="">Prev.</button>
                    <button class="">Next</button>
                </div>
            </div>

            <!-- Timers (if any) + "BreadBook" containing facts about the selected bread -->
            <div class="flex flex-col">
                <div>
                    <h3>Timers</h3>
                </div>
                <div>
                    <!-- TODO: Make this into cartoon of a book -->
                    <h3>BreadBook</h3>
                </div>
            </div>

        </div>
    </div>

</main>