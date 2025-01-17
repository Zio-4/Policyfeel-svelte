<script lang="ts">
    import { Input } from "$lib/components/ui/input";
    import { Select, SelectContent, SelectItem, SelectTrigger } from "$lib/components/ui/select";
    import BillCard from "../../components/BillCard.svelte";
    import { Search, Filter, SortAsc } from 'lucide-svelte';
  
    let { data } = $props()


    // const mockBills: any[] = [
    //   {
    //     id: '1',
    //     name: 'Clean Energy Act',
    //     introducedBy: 'Sen. Jane Doe',
    //     description: 'A bill to promote clean energy initiatives and reduce carbon emissions.',
    //     votes: { yes: 1200, no: 800, neutral: 500 },
    //     level: 'Federal',
    //     category: 'Environment'
    //   },
    //   {
    //     id: '2',
    //     name: 'Education Reform Bill',
    //     introducedBy: 'Rep. John Smith',
    //     description: 'A comprehensive plan to improve public education and increase teacher salaries.',
    //     votes: { yes: 1500, no: 500, neutral: 300 },
    //     level: 'State',
    //     category: 'Education'
    //   },
    //   {
    //     id: '3',
    //     name: 'Local Infrastructure Improvement',
    //     introducedBy: 'Councilor Sarah Johnson',
    //     description: 'A proposal to repair and upgrade local roads and bridges.',
    //     votes: { yes: 800, no: 200, neutral: 100 },
    //     level: 'Local',
    //     category: 'Infrastructure'
    //   },
    //   // Add more mock bills as needed
    // ];

    
    let searchTerm = $state("");
    let filterLevel = $state("All");
    let sortBy = $state("name");
  
    let filteredBills = data.bills
  </script>
  
  <div class="container mx-auto px-4 py-8 bg-gray-100">
    <div class="bg-gradient-to-r from-blue-600 to-red-600 text-white p-8 rounded-t-lg shadow-md">
      <h1 class="text-4xl font-bold mb-4 text-center">Discover Bills</h1>
      <p class="text-center mb-6">Explore and engage with the latest legislative proposals</p>
      <div class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-4">
        <div class="relative w-full md:w-1/3">
          <Search class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <Input
            class="w-full pl-10 pr-4 py-2 rounded-full border-2 border-white bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white"
            placeholder="Search bills..."
            bind:value={searchTerm}
          />
        </div>
        <div class="flex space-x-4 w-full md:w-auto">
          <Select bind:value={filterLevel}>
            <SelectTrigger class="w-full md:w-40 bg-white/20 border-2 border-white text-white rounded-full focus:ring-2 focus:ring-white">
              <Filter class="w-4 h-4 mr-2" />
              <SelectItem value="All">All Levels</SelectItem>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="All">All Levels</SelectItem>
              <SelectItem value="Federal">Federal</SelectItem>
              <SelectItem value="State">State</SelectItem>
              <SelectItem value="Local">Local</SelectItem>
            </SelectContent>
          </Select>
          <Select bind:value={sortBy}>
            <SelectTrigger class="w-full md:w-40 bg-white/20 border-2 border-white text-white rounded-full focus:ring-2 focus:ring-white">
              <SortAsc class="w-4 h-4 mr-2" />
              <SelectItem value="name">Name</SelectItem>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="name">Name</SelectItem>
              <SelectItem value="votes">Most Voted</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 bg-white p-6 rounded-lg shadow-md">
      {#each filteredBills as bill (bill.id)}
        <BillCard {bill} />
      {/each}
    </div>
  </div>
  
  