<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<nav class="container mx-auto p-6 flex justify-between items-center bg-gradient-to-b from-purple-700 to-indigo-900 text-white">
	<a href="/" class="text-2xl font-bold">PolicyFeeler</a>
	<div class="space-x-4">
	  <a href="/bills" class="hover:text-purple-300">Bills</a>
	  <a href="/about" class="hover:text-purple-300">About</a>
	  <button class="bg-white text-purple-700 px-4 py-2 rounded-full hover:bg-purple-100 transition-colors">
		Sign Up
	  </button>
	</div>
  </nav>

{@render children()}
