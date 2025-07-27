<script lang="ts">
    import { type BreadStep_T } from '$lib';
    import BreadTimer from '$lib/BreadTimer.svelte';
import ProgressBar from '$lib/ProgressBar.svelte';

    // TODO: Move these into a static file that gets fetched before rendering the page.
    const steps: BreadStep_T[] = [
        {
            title: 'Make the Dough',
            img: '/doughmaking.png',
            alt: 'cartoon of someone making dough',
            desc: 'Every bread type starts here. Making the dough \
            requires careful kneading to provide a firm foundation \
            for your starter. If you want to ensure a good texture \
            for your bread, make sure you knead well!',
        },
        {
            title: 'Stretch-N-Fold',
            img: '/loading-dough.png',
            alt: 'loading bread icon',
            desc: 'I honestly have no clue wtf this means. I think\
            you gotta do some yoga or sumn while making bread',
        },
        {
            title: 'Bulk Ferment',
            img: '/loading-dough.png',
            alt: 'loading bread icon',
            desc: 'Oh yeah it\'s that part that takes fuckin forever',
        },
        {
            title: 'Shape Dough',
            img: '/loading-dough.png',
            alt: 'loading bread icon',
            desc: 'It\'s gotta be like building a snowman right? But\
            like instead of a friend you eat it when you\'re done and\
            realize you wasted half your time of the week making food\
            that is gonna be gone in less than 2 days',
        },
        {
            title: 'Second Rise',
            img: '/loading-dough.png',
            alt: 'loading bread icon',
            desc: 'U gotta be fkn kidding me. ANOTHER WAIT?? Dude just\
            go buy some bread at Wal-Mart or sumn this shit is taking \
            forever and I\'m hungry',
        },
        {
            title: 'Preheat Oven (400 degs.)',
            img: '/loading-dough.png',
            alt: 'loading bread icon',
            desc: 'Time to burn that MF like the Terminator. I think this also\
            requires some timing bc you want the inside to be the right texture\
            so make sure to ask Gia/Mami how they typically do this part.',
        },
        {
            title: 'Bake Bread (covered)',
            img: '/loading-dough.png',
            alt: 'loading bread icon',
            desc: 'jesus this thing is complicated. how the hell did humanity\
            even discover this shit without the wonders of technology? like\
            how would you even realize you need to bake covered then uncovered...',
        },
        {
            title: 'Bake Bread (uncovered)',
            img: '/loading-dough.png',
            alt: 'loading bread icon',
            desc: '.. you dirty dog you...',
        },
    ];

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
            {@render breadstep(steps[currentStep])}
        </div>
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
                        <ProgressBar stepCount={8} currentStep={currentStep + 1} />
                    </div>
                </div>
            </div>

            <!-- Timers (if any) + "BreadBook" containing facts about the selected bread -->
            <div class="flex flex-col w-1/2 px-1">
                <div>
                    <h3 class="text-lg">Timers</h3>
                    <div class="text-sm">
                        <!-- TODO: Change this to reactively render based on whether the
                         current breadStep contains a timer included -->
                        <BreadTimer duration={10} />
                    </div>
                </div>
                <div>
                    <!-- TODO: Make this into cartoon of a book -->
                    <h3>BreadBook</h3>
                </div>
            </div>

        </div>
    </div>

</main>