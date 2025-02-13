<script>
    import { Button } from "@/components/ui/button";
    import { Input } from "@/components/ui/input";
    import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
    import { Label } from "@/components/ui/label";
</script>

<div class="min-h-screen flex items-center justify-center bg-blue-50">
  <Card class="w-full max-w-md bg-white/20 backdrop-blur-md">
    <CardHeader class="space-y-1">
      <div class="flex justify-center mb-4">
        <img
          src="https://placehold.co/64x64?text=Logo"
          alt="PolicyFeel Logo"
          width="64"
          height="64"
          class="rounded-full"
        />
      </div>
      <CardTitle class="text-2xl font-bold text-center text-blue-900">Welcome to PolicyFeel</CardTitle>
      <CardDescription class="text-center text-blue-700">
        Login to stay informed about bills and policies
      </CardDescription>
    </CardHeader>
    <CardContent class="space-y-4">
      <form method="POST" action="?/login" class="space-y-4">
        <div class="space-y-2">
          <Label for="email">Email</Label>
          <Input id="email" name="email" type="email" placeholder="your@email.com" required />
        </div>
        <div class="space-y-2">
          <Label for="password">Password</Label>
          <Input id="password" name="password" type="password" required />
        </div>
        <Button type="submit" formaction="?/login" class="w-full bg-blue-600 text-white hover:bg-blue-700">Log in</Button>
        <div class="text-sm text-center text-muted-foreground">
          Don't have an account?{" "}
          <a href="/auth/signup" class="text-blue-600 hover:underline">Sign up</a>
        </div>
      </form>
    </CardContent>
  </Card>
</div>
