const product = {
  productId: 1,
  name: "Slim Fit T-Shirt",
  description: "Comfortable cotton t-shirt, perfect for casual wear.",
  category: "T-Shirts",
  average_rating: 4.5,
  total_reviews: 250,
  product_url: "https://example.com/jeans-mens-slim-fit",
  tags: ["casual", "denim", "comfortable", "slim fit"],
  variants: [
    {
      color: "Blue",
      color_hex_code: "#0000FF",
      sizes: [
        {
          size: "M",
          imageUrls: [
            {
              url: "https://example.com/images/jeans-dark-blue.jpg",
              alt: "Men's Slim Fit Jeans - Dark Blue",
            },
            {
              url: "https://example.com/images/jeans-black.jpg",
              alt: "Men's Slim Fit Jeans - Black",
            },
            {
              url: "https://example.com/images/jeans-light-wash.jpg",
              alt: "Men's Slim Fit Jeans - Light Wash",
            },
          ],
          stock: 50,
          price: 29.99,
          discountPrice: 24.99,
        },
        {
          size: "L",
          imageUrls: [
            {
              url: "https://example.com/images/jeans-dark-blue.jpg",
              alt: "Men's Slim Fit Jeans - Dark Blue",
            },
            {
              url: "https://example.com/images/jeans-black.jpg",
              alt: "Men's Slim Fit Jeans - Black",
            },
            {
              url: "https://example.com/images/jeans-light-wash.jpg",
              alt: "Men's Slim Fit Jeans - Light Wash",
            },
          ],
          stock: 20,
          price: 29.99,
          discountPrice: 25.99,
        },
      ],
    },
    {
      color: "Red",
      color_hex_code: "#FF0000",
      sizes: [
        {
          size: "M",
          imageUrls: [
            {
              url: "https://example.com/images/jeans-dark-blue.jpg",
              alt: "Men's Slim Fit Jeans - Dark Blue",
            },
            {
              url: "https://example.com/images/jeans-black.jpg",
              alt: "Men's Slim Fit Jeans - Black",
            },
            {
              url: "https://example.com/images/jeans-light-wash.jpg",
              alt: "Men's Slim Fit Jeans - Light Wash",
            },
          ],
          stock: 30,
          price: 29.99,
          discountPrice: 27.99,
        },
      ],
    },
    {
      color: "Black",
      color_hex_code: "#000000",
      sizes: [
        {
          size: "L",
          imageUrls: [
            {
              url: "https://example.com/images/jeans-dark-blue.jpg",
              alt: "Men's Slim Fit Jeans - Dark Blue",
            },
            {
              url: "https://example.com/images/jeans-black.jpg",
              alt: "Men's Slim Fit Jeans - Black",
            },
            {
              url: "https://example.com/images/jeans-light-wash.jpg",
              alt: "Men's Slim Fit Jeans - Light Wash",
            },
          ],
          stock: 10,
          price: 29.99,
          discountPrice: 28.99,
        },
      ],
    },
  ],
};


<script setup lang="ts">
import { Button } from '@/components/ui/button'
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { toast } from '@/components/ui/toast/use-toast'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Textarea } from '@/components/ui/textarea'
import { DraftingCompass, Save, Plus } from 'lucide-vue-next';

import { toTypedSchema } from '@vee-validate/zod'
import { useForm } from 'vee-validate'
import * as z from 'zod'


const formSchema = toTypedSchema(z.object({
  username: z.string().min(2).max(50),
}))

const { isFieldDirty, handleSubmit } = useForm({
  validationSchema: formSchema,
})

const onSubmit = handleSubmit((values) => {
  console.log(values)
})
</script>

<template>
  <form class="w-full h-full space-y-6 p-4 bg-secondary" @submit.prevent="onSubmit">
    <div class="flex items-center justify-between w-full">
      <div class="space-y-1">
        <h1 class="text-3xl">Add Products</h1>
        <p class="text-sm text-muted-foreground">Manage your inventory, edit product details, and control availability.
        </p>
      </div>
      <div class="space-x-2">
        <Button variant="outline">
          <DraftingCompass />
          Save Draf
        </Button>
        <Button variant="outline">
          <Save />
          Add Product
        </Button>
      </div>
    </div>
    <div class="grid grid-cols-3 gap-4">
      <div class="col-span-2">
        <div class="w-full  bg-background border border-solid border-border  p-4 rounded-xl space-y-4">
          <FormField v-slot="{ componentField }" name="username" :validate-on-blur="!isFieldDirty">
            <FormItem>
              <FormLabel>Product name</FormLabel>
              <FormControl>
                <Input type="text" placeholder="shadcn" v-bind="componentField" />
              </FormControl>
              <FormMessage />
            </FormItem>
          </FormField>
          <FormField v-slot="{ componentField }" name="username" :validate-on-blur="!isFieldDirty">
            <FormItem>
              <FormLabel>Product description</FormLabel>
              <FormControl>
                <Textarea placeholder="shadcn" v-bind="componentField" />
              </FormControl>
              <FormMessage />
            </FormItem>
          </FormField>
          <div class="grid grid-cols-2 gap-4">
            <FormField v-slot="{ componentField }" name="username" :validate-on-blur="!isFieldDirty">
              <FormItem>
                <FormLabel>Pick Color</FormLabel>
                <FormControl>
                  <div class="color-pick-field">
                    <Dialog>
                      <DialogTrigger as-child>
                        <Button variant="outline" size="icon" class="color">
                          <Plus class="w-4 h-4" />
                        </Button>
                      </DialogTrigger>
                      <DialogContent class="sm:max-w-xl">
                        <DialogHeader>
                          <DialogTitle>Pick color or add</DialogTitle>
                          <DialogDescription>Crete new color after save it's save in product </DialogDescription>
                        </DialogHeader>
                        <div class="py-4 space-y-6">
                          <div class="border border-solid border-border flex items-stretch rounded-lg overflow-hidden !divide-x divide-border">
                            <div class="min-w-14">
                              <Input type="color" class="outline-none  border-0 border-solid rounded-none focus-visible:ring-0" />
                            </div>
                            <Input type="text" class="outline-none  border-0 border-solid rounded-none focus-visible:ring-0" placeholder="Color Name" />
                          </div>
                        </div>
                        <DialogFooter>
                          <Button type="submit">
                            Save
                          </Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            </FormField>
            <FormField v-slot="{ componentField }" name="username" :validate-on-blur="!isFieldDirty">
              <FormItem>
                <FormLabel>Pick Size</FormLabel>
                <FormControl>
                  <div class="color-pick-field">
                    <Dialog>
                      <DialogTrigger as-child>
                        <Button variant="outline" size="icon" class="color">
                          <Plus class="w-4 h-4" />
                        </Button>
                      </DialogTrigger>
                      <DialogContent class="sm:max-w-xl">
                        <DialogHeader>
                          <DialogTitle>Pick color or add</DialogTitle>
                          <DialogDescription>Crete new color after save it's save in product </DialogDescription>
                        </DialogHeader>
                        <div class="py-4 space-y-6">
                          <div class="border border-solid border-border flex items-stretch rounded-lg overflow-hidden !divide-x divide-border">
                            <div class="min-w-14">
                              <Input type="color" class="outline-none  border-0 border-solid rounded-none focus-visible:ring-0" />
                            </div>
                            <Input type="text" class="outline-none  border-0 border-solid rounded-none focus-visible:ring-0" placeholder="Color Name" />
                          </div>
                        </div>
                        <DialogFooter>
                          <Button type="submit">
                            Save
                          </Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            </FormField>
          </div>
        </div>
      </div>
    </div>
  </form>
</template>


<style scoped>
.color-pick-field {
  @apply flex items-stretch flex-wrap gap-2
}

.color-pick-field .color {
  @apply rounded-full
}
</style>
