<script lang="ts">
  import { Card, CardContent, CardHeader, CardTitle } from "$lib/components/ui/card"
  import { Button } from "$lib/components/ui/button"
</script>

<div class="container mx-auto px-4 py-8">
  <h1 class="text-4xl font-bold text-center mb-8 gradient-bg text-transparent bg-clip-text">About PolicyFeel</h1>
  
  <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
    <div>
      <h2 class="text-2xl font-semibold mb-4 text-political-blue">Our Mission</h2>
      <p class="text-lg mb-4">
        PolicyFeel is dedicated to empowering citizens by providing easy access to information about federal, state, and local bills. We believe that an informed populace is crucial for a thriving democracy.
      </p>
      <Button class="btn-primary">Learn More</Button>
    </div>
    <div class="relative h-64 rounded-lg overflow-hidden glass-effect">
      <img
        src="https://placehold.co/600x400?text=People+discussing+policies"
        alt="People discussing policies"
        class="w-full h-full object-cover"
      />
    </div>
  </div>

  <h2 class="text-2xl font-semibold mb-6 text-center text-political-red">Key Features</h2>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
    {#each [
      { title: "Bill Tracking", description: "Stay updated on the latest bills and their progress.", icon: "📊" },
      { title: "Voting System", description: "Express your opinion by voting on bills.", icon: "🗳️" },
      { title: "Community Discussions", description: "Engage in meaningful debates about policies.", icon: "💬" },
    ] as feature, index}
      <Card class={index % 2 === 0 ? "bg-political-blue" : "bg-political-red"}>
        <CardHeader>
          <CardTitle class="flex items-center">
            <span class="text-2xl mr-2">{feature.icon}</span>
            {feature.title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p>{feature.description}</p>
        </CardContent>
      </Card>
    {/each}
  </div>

  <div class="text-center mb-12">
    <h2 class="text-2xl font-semibold mb-4 gradient-bg text-transparent bg-clip-text">Join the PolicyFeel Community</h2>
    <p class="text-lg mb-6">
      Be part of the change. Stay informed, vote on bills, and make your voice heard.
    </p>
    <Button class="btn-secondary">Sign Up Now</Button>
  </div>

  <Card class="glass-effect">
    <CardContent class="p-6">
      <h3 class="text-xl font-semibold mb-4 text-center">Our Impact</h3>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
        <div>
          <p class="text-3xl font-bold text-political-blue">1M+</p>
          <p>Active Users</p>
        </div>
        <div>
          <p class="text-3xl font-bold text-political-red">50K+</p>
          <p>Bills Tracked</p>
        </div>
        <div>
          <p class="text-3xl font-bold text-political-blue">5M+</p>
          <p>Votes Cast</p>
        </div>
      </div>
    </CardContent>
  </Card>
</div>
