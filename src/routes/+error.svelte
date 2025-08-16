<script>
    import { page } from "$app/state";

</script>

<div class="m-auto w-7/8 h-full px-2 py-1 bg-orange-200">

    <h1>Oops! Something went wrong.</h1>

    <img
        class="rounded-md"
        src="/error-bread.png"
        alt="person watching burnt bread"
    />

    <p class="my-2 text-sm">Please contact <a href="mailto:rdietscht@gmail.com">rdietscht@gmail.com</a> and kindly pass along the following information:</p>

    <code class="p-2 text-sm bg-stone-200">
        <b>Error Message:</b> {page.error?.message}
    </code>

</div>