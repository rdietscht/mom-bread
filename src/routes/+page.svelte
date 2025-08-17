<script lang="ts">
    import Fa from "svelte-fa";
    import { getCurrentType } from "$lib/session.svelte";
    import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";
    import { base } from "$app/paths";

    let displayBreadOptions: boolean = $state(false); // displays a popup
    let baseIndex: number = $state(0); // tracks carousel state

    // UPDATE THIS WHENEVER A NEW BREAD TYPE IS ADDED.
    const IMPLEMENTED_TYPES: string[] = [
        'sandwich',
        'COMING SOON'
    ];

    function updateBaseIndex(forward_flag: boolean)
    {
        // EARLY EXIT - Don't do anything if updating the baseIndex would lead to an OOB error.
        if (forward_flag && baseIndex + 3 >= IMPLEMENTED_TYPES.length)
        {
            // console.warn('stepping out-of-bounds... ignoring button press'); // DEBUGGING!
            return;
        } else if (!forward_flag && baseIndex - 3 < 0)
        {
            // console.warn('stepping out-of-bounds... ignoring button press'); // DEBUGGING!
            return;
        } else
        {
            baseIndex = forward_flag ? baseIndex + 3 : baseIndex - 3;
        }
    }

    function testPush(e: Event)
    {
        console.log("TODO");
    }

</script>

<style>

    .utility-button
    {
        background-color: rgb(157, 12, 12);
        color: rgb(245, 189, 189);
        width: 60%;
        padding: 5px;
        margin: 5px 0px;
        border-radius: 5px;
        text-align: center;
    }
    .utility-button:hover
    {
        background-color: rgb(179, 89, 89);
        color: rgb(255, 255, 255);
    }

</style>

<!-- Used for rendering bread types to select from. -->
{#snippet breadlink(type: string, img_url: string)}
    <a
        class="w-1/3 h-full m-auto my-2 border-2 rounded-full bg-amber-700/50 transition active:scale-115 active:bg-amber-400/40"
        href="/progress/{type}"
    >
        <img src={img_url} alt="link to a bread progress tracker" />
        <h1 class="relative -bottom-1 -left-1 bg-amber-950 w-fit px-1 rounded-md text-stone-50">{type.toUpperCase()}</h1>
    </a>
{/snippet}

<!-- MAIN CONTENT AREA -->
<div class="relative bg-amber-100 w-full h-full rounded-md font-freckleface">
    <aside class="text-red-900 p-2">
        <h1 class="text-5xl">BreadWinner (Demo)</h1>
        <p class="text-xl">Our bread-and-butter are loafs.</p>
    </aside>

    <!-- Button for testing push notifications on mobile -->
    <!-- <div>
        <button class="bg-red-200 p-2" onclick={testPush}>Push me!</button>
    </div> TODO: TEST THIS WHEN YOU HAVE ACCESS TO XCODE ON A MAC -->

    <!-- Selection of utilities -->
    <div class="border-8 border-red-900 rounded-sm absolute top-1/2 left-1/2 -translate-1/2 w-2/3">
        <h1 class="text-center text-2xl text-red-900 py-1">What are you looking for?</h1>
        <div class="flex flex-col items-center py-2">

            <!-- TODO: CHANGE THIS URL TO A PAGE THAT REROUTES YOU
             TO A NEW SELECTION PAGE OR A RESUME SESSION PAGE IF THE
             USER IS CURRENTLY TRACKING BREAD -->
            {#if getCurrentType()}
                <!-- The user has saved session state -->
                <a
                    class="utility-button"
                    href={`/progress/${getCurrentType()}`}
                >
                    View Progress
                </a>
            {:else}
                <button
                    class="utility-button"
                    onclick={() => { displayBreadOptions = true; }}
                >
                    Track Bread Progress
                </button>
            {/if}

            <a
                class="utility-button"
                href="/recipes"
            >
                Read Bread Recipes
            </a>
            <a
                class="utility-button"
                href="/types"
            >
                Learn Bread Types
            </a>
        </div>
    </div>

    <!-- POPUP WINDOW: BREAD SELECTION -->
    {#if displayBreadOptions}
        <div class="fixed top-0 left-0 bg-stone-700/40 w-screen h-screen">
            <div class="relative border-2 w-fit m-auto top-1/2 -translate-y-1/2 px-1 py-2 bg-stone-200 rounded-md">

                <!-- EXIT POPUP BUTTON -->
                <button
                    class="absolute border-2 bg-red-200 -translate-y-full left-0 px-2 py-1 rounded-sm"
                    onclick={() => { displayBreadOptions = false }}
                >CANCEL</button>

                <h2 class="text-lg">Which Bread type would you like to track?</h2>

                <!-- Render bread type options in groups of 3 -->
                {#if IMPLEMENTED_TYPES.length < 4}
                <div class="flex flex-col">
                    {#each IMPLEMENTED_TYPES as type}
                        {@render breadlink(type, '/loading-dough.png')}
                    {/each}
                </div>
                {:else}
                    <div class="flex flex-row justify-center">
                        <!-- Render a carousel for switching between displayed choices -->
                        <button
                            onclick={() => { updateBaseIndex(false) }}>
                            <Fa
                                icon={faCaretLeft}
                                scale={1.5}
                            />
                        </button>
                        <div class="flex flex-col">
                            {#each [...Array.from(Array(3).keys())] as offset}
                                {#if baseIndex + offset < IMPLEMENTED_TYPES.length}
                                    {@render breadlink(IMPLEMENTED_TYPES[baseIndex + offset], '/loading-dough.png')}
                                {/if}
                            {/each}
                        </div>
                        <button onclick={() => { updateBaseIndex(true) }}>
                            <Fa
                                icon={faCaretRight}
                                scale={1.5}
                            />
                        </button>
                    </div>
                {/if}
            </div>
        </div>
    {/if}

</div>
