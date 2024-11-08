<script setup>
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { HandCoins, ShoppingCart, BaggageClaim, TrendingUp, TrendingDown, Package, PackageSearch, PackageX, Users , BadgeDollarSign } from 'lucide-vue-next';
</script>

<template>
  <div class="w-full h-full p-4 space-y-6">
    <div class="space-y-1">
      <h1 class="text-3xl">Dashboard</h1>
      <p class="text-xs text-muted-foreground">Let's Choose Your Options To Sale!</p>
    </div>
    <div class="w-full grid grid-cols-3 gap-3">
      <div class="col-span-2 space-y-3">
        <div class="grid grid-cols-3 gap-3">
          <div class="card">
            <div class="flex items-center gap-3">
              <Button variant="outline" size="icon" class="max-w-8 max-h-8">
                <HandCoins class="w-4 h-4" />
              </Button>
              <p class="text-muted-foreground text-base">Profit</p>
            </div>
            <div class="space-y-1.5">
              <h6 class="text-2xl font-semibold">$64.212</h6>
              <p class="text-sm text-green-700">Grow 2.3% Past Month
                <TrendingUp class="inline w-4 h-4" />
              </p>
            </div>
          </div>
          <div class="card">
            <div class="flex items-center gap-3">
              <Button variant="outline" size="icon" class="max-w-8 max-h-8">
                <ShoppingCart class="w-4 h-4" />
              </Button>
              <p class="text-muted-foreground text-base">Total Order</p>
            </div>
            <div class="space-y-1.5">
              <h6 class="text-2xl font-semibold">212</h6>
              <p class="text-sm text-green-700">Grow 0.5% Past Month
                <TrendingUp class="inline w-4 h-4" />
              </p>
            </div>
          </div>
          <div class="card">
            <div class="flex items-center gap-3">
              <Button variant="outline" size="icon" class="max-w-8 max-h-8">
                <BaggageClaim class="w-4 h-4" />
              </Button>
              <p class="text-muted-foreground text-base">Total Complete Order</p>
            </div>
            <div class="space-y-1.5">
              <h6 class="text-2xl font-semibold">2120</h6>
              <p class="text-sm text-destructive">Bad Rate 1% Before Last Month
                <TrendingDown class="inline w-4 h-4" />
              </p>
            </div>
          </div>
          <div class="card">
            <div class="flex items-center gap-3">
              <Button variant="outline" size="icon" class="max-w-8 max-h-8">
                <Package class="w-4 h-4" />
              </Button>
              <p class="text-muted-foreground text-base">Today Orders</p>
            </div>
            <div class="space-y-1.5">
              <h6 class="text-2xl font-semibold">2</h6>
              <p class="text-sm text-destructive">Bad Rate 80% Before Last Day
                <TrendingDown class="inline w-4 h-4" />
              </p>
            </div>
          </div>
          <div class="card">
            <div class="flex items-center gap-3">
              <Button variant="outline" size="icon" class="max-w-8 max-h-8">
                <PackageSearch class="w-4 h-4" />
              </Button>
              <p class="text-muted-foreground text-base">Pending Orders</p>
            </div>
            <div class="space-y-1.5">
              <h6 class="text-2xl font-semibold">12</h6>
              <p class="text-sm text-destructive">
                Bad Rate 12% Before Last Day
                <TrendingDown class="inline w-4 h-4" />
              </p>
            </div>
          </div>
          <div class="card">
            <div class="flex items-center gap-3">
              <Button variant="outline" size="icon" class="max-w-8 max-h-8">
                <PackageX class="w-4 h-4" />
              </Button>
              <p class="text-muted-foreground text-base">Cancel Order</p>
            </div>
            <div class="space-y-1.5">
              <h6 class="text-2xl font-semibold">2</h6>
              <p class="text-sm text-destructive">
                Bad Rate 12% Before Last Day
                <TrendingDown class="inline w-4 h-4" />
              </p>
            </div>
          </div>
        </div>
        <div class="grid gap-3 grid-cols-2">
          <div class="card">
            <div class="flex items-center justify-between w-full">
              <div class="flex items-center gap-3">
                <Button variant="outline" size="icon" class="max-w-8 max-h-8">
                  <BadgeDollarSign class="w-4 h-4" />
                </Button>
                <p class="text-muted-foreground text-base">Recent Transactions</p>
              </div>
            </div>
            <div>
              <ScrollArea class="w-full h-64">
                <ul class="space-y-2">
                  <li
                    class="w-full rounded-lg border border-solid border-border flex items-center justify-between py-2 px-3">
                    <div class="flex items-center gap-2.5">
                      <div class="-space-x-3">
                        <Avatar class="max-w-8 max-h-8">
                          <AvatarImage src="https://gravatar.com/avatar/e4217ecd6a3c06261c54cf1cf1768979?s=400&d=robohash&r=x" alt="@radix-vue" />
                          <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <Avatar class="max-w-8 max-h-8">
                          <AvatarImage src="https://gravatar.com/avatar/563f98a0c69a86b884a98f041c9153e3?s=400&d=robohash&r=x" alt="@radix-vue" />
                          <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <Avatar class="max-w-8 max-h-8">
                          <AvatarImage src="https://gravatar.com/avatar/7a5d90dae89119d37b801672319ee02a?s=400&d=robohash&r=x" alt="@radix-vue" />
                          <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                      </div>
                      <div class="space-y-0.5">
                        <p class="text-sm">Order ID #1992032</p>
                        <div class="divide-x divide-border flex items-center gap-2">
                          <p class="text-xs text-muted-foreground">3 Item</p>
                          <p class="text-xs text-muted-foreground pl-2">12 Jan 2024</p>
                        </div>
                      </div>
                    </div>
                    <div class="divide-x divide-border flex items-center gap-2">
                      <p class="text-sm">$220.00</p>
                      <div class="pl-2">
                        <Badge>PAID</Badge>
                      </div>
                    </div>
                  </li>
                </ul>
              </ScrollArea>
            </div>
          </div>
        </div>
      </div>
      <div class="space-y-3">
        <div class="card">
          <div class="flex items-center justify-between w-full">
            <div class="flex items-center gap-3">
              <Button variant="outline" size="icon" class="max-w-8 max-h-8">
                <Users class="w-4 h-4" />
              </Button>
              <p class="text-muted-foreground text-base">Activity Customer</p>
            </div>
          </div>
          <div class="w-full h-64">

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  @apply w-full border border-solid border-border rounded-lg p-3.5 space-y-3.5
}
</style>
