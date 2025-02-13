<script lang="ts">
	import '../app.css';
	import { invalidate } from '$app/navigation'
	import { onMount } from 'svelte'

	let { data, children } = $props()
	let { session, supabase } = $derived(data)

	onMount(() => {
		const { data } = supabase.auth.onAuthStateChange((_, newSession) => {
			if (newSession?.expires_at !== session?.expires_at) {
				invalidate('supabase:auth')
			}
		})

		return () => data.subscription.unsubscribe()
	})

	const logout = async () => {
		const { error } = await supabase.auth.signOut()
		if (error) {
			console.error(error)
		}
	}
</script>

<nav class="container mx-auto p-6 flex justify-between items-center bg-gradient-to-b from-purple-700 to-indigo-900 text-white">
	<a href="/" class="text-2xl font-bold">PolicyFeeler</a>
	<div class="space-x-4">
	  <a href="/bills" class="hover:text-purple-300">Bills</a>
	  <a href="/about" class="hover:text-purple-300">About</a>
	  {#if session}	
		<button onclick={logout} class="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 transition-colors">
			Sign Out
		</button>
		{:else}
		<a href="/auth/signin" class="bg-white text-purple-700 px-4 py-2 rounded-full hover:bg-purple-100 transition-colors">
			Sign In
		</a>
	  {/if}
	</div>
  </nav>

{@render children()}
