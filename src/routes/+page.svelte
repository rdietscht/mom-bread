<script lang="ts">
    function testPush(e: Event)
    {
        console.log("TODO");
    }

</script>

<!-- MAIN CONTENT AREA -->
<div class="bg-amber-100 w-full h-full">
    <aside class="text-red-900 font-freckleface p-2">
        <h1 class="text-5xl">BreadWinner</h1>
        <p class="text-xl">Our bread-and-butter are loafs.</p>
    </aside>

    <!-- Button for testing push notifications on mobile -->
    <div>
        <button class="bg-red-200 p-2" onclick={testPush}>Push me!</button>
    </div>
</div>
