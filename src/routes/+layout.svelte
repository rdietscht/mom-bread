<script lang="ts">

	// Disable server-side-rendering; makes the app a SPA for mobile apps
	export const srr = false;

	import '../app.css';
	
	let { children } = $props();
</script>

<main class="w-screen h-screen border-40 border-amber-700">
	{@render children()}
</main>
