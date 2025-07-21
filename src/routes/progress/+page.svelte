<script lang="ts">

    const steps: BreadStep_T[] = [
        {
            title: 'Make the dough',
            img: '/doughmaking.png',
            alt: 'cartoon of someone making dough',
            desc: 'TODO: Fill these steps out',
        }
    ];

</script>

{#snippet breadstep(step: BreadStep_T)}

    <!-- Render a window using the provided step details -->
    <div class="border-2">
        <img
            class="border-2"
            src={step.img}
            alt={step.alt}
        />
    </div>

{/snippet}

<main class="w-full h-full rounded-md bg-amber-100 font-freckleface">

    <!-- For sandwich bread, display the steps and have timers available -->
    <h1 class="text-4xl text-center text-red-900 py-4">Sandwich Bread</h1>

    <!-- Carousel for showing steps -->
    <div>
        <!-- PROOF OF CONCEPT; REMOVE WHEN NOT TESTING -->
        {@render breadstep(steps[0])}
    </div>

</main>