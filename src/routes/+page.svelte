<script lang="ts">
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
    console.log(data);
</script>

<script lang="ts">
    import { onMount } from 'svelte';
    import { fly, fade } from 'svelte/transition';
  
    let count = $state(0);
    let features = [
      "Vote on current bills and policies",
      "See real-time statistics and demographics",
      "Engage in meaningful political discussions",
      "Stay informed on the latest legislative actions"
    ];
  
    onMount(() => {
      const interval = setInterval(() => count++, 3000);
      return () => clearInterval(interval);
    });
  </script>
  
  <main class="bg-gradient-to-b from-purple-700 to-indigo-900 min-h-screen text-white">
    <nav class="container mx-auto p-6 flex justify-between items-center">
      <div class="text-2xl font-bold">PolicyFeeler</div>
      <div class="space-x-4">
        <a href="#features" class="hover:text-purple-300">Features</a>
        <a href="#about" class="hover:text-purple-300">About</a>
        <button class="bg-white text-purple-700 px-4 py-2 rounded-full hover:bg-purple-100 transition-colors">
          Sign Up
        </button>
      </div>
    </nav>

    <div class="flex justify-center items-center">
      <span class="text-center text-4xl font-bold mt-10 bg-orange-500  p-6 rounded-lg">Under Construction 👷🏼🚧</span>
    </div>
  
    <header class="container mx-auto text-center py-20">
      <h1 class="text-5xl font-bold mb-6">
        Feel the Pulse of Democracy
      </h1>
      <p class="text-xl mb-8">
        Engage, vote, and understand public policies like never before.
      </p>
      <button class="bg-white text-purple-700 px-6 py-3 rounded-full text-lg font-semibold hover:bg-purple-100 transition-colors">
        Get Started
      </button>
    </header>
  
    <section id="features" class="container mx-auto py-20">
      <h2 class="text-3xl font-bold text-center mb-12">Why PolicyFeeler?</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        {#each features as feature, i}
          <div 
            class="bg-white bg-opacity-10 p-6 rounded-lg"
            in:fly={{ y: 50, duration: 500, delay: i * 200 }}
          >
            <h3 class="text-xl font-semibold mb-4">{feature}</h3>
            <p class="text-purple-200">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam viverra justo eu nulla condimentum, at malesuada nunc tincidunt.
            </p>
          </div>
        {/each}
      </div>
    </section>
  
    <section id="about" class="container mx-auto py-20">
      <div class="bg-white bg-opacity-10 p-8 rounded-lg">
        <h2 class="text-3xl font-bold mb-6">About PolicyFeeler</h2>
        <p class="text-lg mb-4">
          PolicyFeeler is a revolutionary platform that bridges the gap between citizens and the political process. We believe that everyone should have a voice in shaping the policies that affect their lives.
        </p>
        <p class="text-lg mb-4">
          Our platform provides real-time voting, detailed analytics, and a space for constructive dialogue on current bills and policies. Join us in creating a more engaged and informed democracy.
        </p>
        <div class="mt-8 text-center">
          <p class="text-2xl font-bold mb-4">Join {count} citizens making their voices heard</p>
          <button class="bg-white text-purple-700 px-6 py-3 rounded-full text-lg font-semibold hover:bg-purple-100 transition-colors">
            Sign Up Now
          </button>
        </div>
      </div>
    </section>
  
    <footer class="bg-purple-900 py-8">
      <div class="container mx-auto text-center">
        <p>&copy; 2024 PolicyFeeler. All rights reserved.</p>
        <div class="mt-4 space-x-4">
          <a href="#" class="hover:text-purple-300">Privacy Policy</a>
          <a href="#" class="hover:text-purple-300">Terms of Service</a>
          <a href="#" class="hover:text-purple-300">Contact Us</a>
        </div>
      </div>
    </footer>
  </main>
  
<style>
    :global(html) {
        scroll-behavior: smooth;
    }
</style>