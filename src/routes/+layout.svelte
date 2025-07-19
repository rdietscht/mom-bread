<script lang="ts">
	import '../app.css';
	
	let { children } = $props();
</script>

<main class="w-screen h-screen border-40 border-amber-700">
	{@render children()}
</main>
