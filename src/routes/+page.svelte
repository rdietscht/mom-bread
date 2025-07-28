<script lang="ts">
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
            <a
                class="utility-button"
                href="/progress"
            >
                Track Bread Progress
            </a>
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

</div>
