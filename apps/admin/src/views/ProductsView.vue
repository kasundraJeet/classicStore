<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { FolderDown, FolderUp } from 'lucide-vue-next';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

const invoices = [
  {
    invoice: 'INV001',
    paymentStatus: 'Paid',
    totalAmount: '$250.00',
    paymentMethod: 'Credit Card',
  },
  {
    invoice: 'INV002',
    paymentStatus: 'Pending',
    totalAmount: '$150.00',
    paymentMethod: 'PayPal',
  },
  {
    invoice: 'INV003',
    paymentStatus: 'Unpaid',
    totalAmount: '$350.00',
    paymentMethod: 'Bank Transfer',
  },
  {
    invoice: 'INV004',
    paymentStatus: 'Paid',
    totalAmount: '$450.00',
    paymentMethod: 'Credit Card',
  },
  {
    invoice: 'INV005',
    paymentStatus: 'Paid',
    totalAmount: '$550.00',
    paymentMethod: 'PayPal',
  },
  {
    invoice: 'INV006',
    paymentStatus: 'Pending',
    totalAmount: '$200.00',
    paymentMethod: 'Bank Transfer',
  },
  {
    invoice: 'INV007',
    paymentStatus: 'Unpaid',
    totalAmount: '$300.00',
    paymentMethod: 'Credit Card',
  },
]
</script>


<template>
  <div class="w-full h-full space-y-6">
    <div class="flex items-center p-4  justify-between w-full">
      <div class="space-y-1">
        <h1 class="text-3xl">Products</h1>
        <p class="text-sm text-muted-foreground">Manage your inventory, edit product details, and control availability.
        </p>
      </div>
      <div class="space-x-2">
        <Button variant="outline">
          <FolderDown />
          Import
        </Button>
        <Button variant="outline">
          <FolderUp />
          Export
        </Button>
      </div>
    </div>
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead class="w-[100px]">
            Invoice
          </TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Method</TableHead>
          <TableHead class="text-right">
            Amount
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow v-for="invoice in invoices" :key="invoice.invoice">
          <TableCell class="font-medium">
            {{ invoice.invoice }}
          </TableCell>
          <TableCell>{{ invoice.paymentStatus }}</TableCell>
          <TableCell>{{ invoice.paymentMethod }}</TableCell>
          <TableCell class="text-right">
            {{ invoice.totalAmount }}
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </div>
</template>
