<script lang="ts">
  import { Button } from "@/components/ui/button"
  import { Input } from "@/components/ui/input"
  import { Label } from "@/components/ui/label"
  import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
  import { User, Mail, Lock } from 'lucide-svelte'

  let formData = $state({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  })

  function handleSubmit(e: SubmitEvent) {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
  }
</script>

<div class="min-h-screen flex items-center justify-center bg-background">
  <div class="w-full max-w-md p-6">
    <div class="text-center mb-8">
      <h1 class="text-4xl font-bold text-primary mb-2">PolicyFeel</h1>
      <p class="text-muted-foreground">Stay informed, make your voice heard</p>
    </div>
    <Card class="w-full border-political-blue">
      <CardHeader class="bg-political-blue">
        <CardTitle class="text-2xl font-bold text-political-blue">Sign Up</CardTitle>
        <CardDescription class="text-muted-foreground">Create your account to get started</CardDescription>
      </CardHeader>
      <CardContent class="bg-card">
        <form on:submit={handleSubmit} class="space-y-4">
          <div class="space-y-2">
            <Label for="username" class="text-foreground">Username</Label>
            <div class="relative">
              <Input
                id="username"
                name="username"
                type="text"
                placeholder="johndoe"
                bind:value={formData.username}
                class="pl-10 bg-input text-foreground placeholder-muted-foreground"
                required
              />
              <User class="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
            </div>
          </div>
          <div class="space-y-2">
            <Label for="email" class="text-foreground">Email</Label>
            <div class="relative">
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="john@example.com"
                bind:value={formData.email}
                class="pl-10 bg-input text-foreground placeholder-muted-foreground"
                required
              />
              <Mail class="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
            </div>
          </div>
          <div class="space-y-2">
            <Label for="password" class="text-foreground">Password</Label>
            <div class="relative">
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="••••••••"
                bind:value={formData.password}
                class="pl-10 bg-input text-foreground placeholder-muted-foreground"
                required
              />
              <Lock class="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
            </div>
          </div>
          <div class="space-y-2">
            <Label for="confirmPassword" class="text-foreground">Confirm Password</Label>
            <div class="relative">
              <Input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                placeholder="••••••••"
                bind:value={formData.confirmPassword}
                class="pl-10 bg-input text-foreground placeholder-muted-foreground"
                required
              />
              <Lock class="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
            </div>
          </div>
          <Button type="submit" class="w-full btn-primary">
            Sign Up
          </Button>
        </form>
      </CardContent>
    </Card>
    <div class="mt-4 text-center text-sm text-muted-foreground">
      Already have an account?{" "}
      <a href="/auth/signin" class="text-primary hover:underline">
        Log in
      </a>
    </div>
  </div>
</div>

