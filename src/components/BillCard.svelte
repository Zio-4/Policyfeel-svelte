<script lang="ts">
    import { Button } from "$lib/components/ui/button";
    import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "$lib/components/ui/card";
    import { ThumbsUp, ThumbsDown, MessageCircle, Minus } from 'lucide-svelte';
    import * as Tooltip from "$lib/components/ui/tooltip";
  
    let { bill } = $props();
  
    let totalVotes = $derived(bill.votes.yes + bill.votes.no + bill.votes.neutral);
    let yesPercentage = $derived((bill.votes.yes / totalVotes) * 100);
    let noPercentage = $derived((bill.votes.no / totalVotes) * 100); 
    let neutralPercentage = $derived((bill.votes.neutral / totalVotes) * 100);
</script>
  
  <Card class="w-full">
    <CardHeader>
      <CardTitle class="text-lg font-bold">{bill.name}</CardTitle>
      <p class="text-sm text-muted-foreground">Introduced by {bill.introducedBy}</p>
    </CardHeader>
    <CardContent>
      <p class="text-sm mb-4">{bill.description}</p>
      <div class="flex flex-col space-y-2 mb-4">
        <span class="text-sm font-semibold">Voting Statistics:</span>
        <div class="flex items-center space-x-2">
          <div class="h-2 w-full bg-gray-200 rounded-full overflow-hidden flex">
            <div
              class="h-full bg-green-500"
              style="width: {yesPercentage}%"
            ></div>
            <div
              class="h-full bg-gray-400"
              style="width: {neutralPercentage}%"
            ></div>
            <div
              class="h-full bg-red-500"
              style="width: {noPercentage}%"
            ></div>
          </div>
        </div>
        <div class="flex justify-between text-xs">
          <span>{yesPercentage.toFixed(1)}% Yes</span>
          <span>{neutralPercentage.toFixed(1)}% Neutral</span>
          <span>{noPercentage.toFixed(1)}% No</span>
        </div>
      </div>
    </CardContent>
    <CardFooter class="flex justify-between">
      <div class="flex space-x-2">
        <Tooltip.Provider>
          <Tooltip.Root>
            <Tooltip.Trigger>
              <Button variant="outline" size="icon" class="border-green-500 text-green-700 hover:bg-green-50">
                <ThumbsUp class="w-4 h-4" />
              </Button>
            </Tooltip.Trigger>
            <Tooltip.Content>
              <p>Vote Yes</p>
            </Tooltip.Content>
          </Tooltip.Root>
        </Tooltip.Provider>
        <Tooltip.Provider>
          <Tooltip.Root>
            <Tooltip.Trigger>
              <Button variant="outline" size="icon" class="border-gray-400 text-gray-700 hover:bg-gray-50">
                <Minus class="w-4 h-4" />
              </Button>
            </Tooltip.Trigger>
            <Tooltip.Content>
              <p>Vote Neutral</p>
            </Tooltip.Content>
          </Tooltip.Root>
        </Tooltip.Provider>
        <Tooltip.Provider>
          <Tooltip.Root>
            <Tooltip.Trigger>
              <Button variant="outline" size="icon" class="border-red-500 text-red-700 hover:bg-red-50">
                <ThumbsDown class="w-4 h-4" />
              </Button>
            </Tooltip.Trigger>
            <Tooltip.Content>
              <p>Vote No</p>
            </Tooltip.Content>
          </Tooltip.Root>
        </Tooltip.Provider>
        <Tooltip.Provider>
          <Tooltip.Root>
            <Tooltip.Trigger>
              <Button variant="outline" size="icon" class="border-blue-500 text-blue-700 hover:bg-blue-50">
                <MessageCircle class="w-4 h-4" />
            </Button>
            </Tooltip.Trigger>
            <Tooltip.Content>
              <p>Comment</p>
            </Tooltip.Content>
          </Tooltip.Root>
        </Tooltip.Provider>
    </div>
    </CardFooter>
  </Card>
  
  