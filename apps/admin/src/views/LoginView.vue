<script setup lang="ts">
import { ref } from 'vue'
import { Button } from '@/components/ui/button'
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { post } from '@/utils/apiHandler'
import { toast } from 'vue-sonner'

import { toTypedSchema } from '@vee-validate/zod'
import { useForm } from 'vee-validate'
import * as z from 'zod'

const formSchema = toTypedSchema(
  z.object({
    email: z.string().email("Invalid email format").nonempty("Email is required"),
    password: z.string().nonempty("Password is required")
  })
)

const { isFieldDirty, handleSubmit } = useForm({
  validationSchema: formSchema,
})
const loader = ref(false)

const onSubmit = handleSubmit(async (values) => {
  loader.value = true
  try {
    const data = await post('/admin/login', {
      email: values.email,
      password: values.password,
      ipAddress: '12',
    })

    if (data.success === 1) {
      loader.value = false
    }
    else{
      toast(data.message)
    }
  } catch (e) {
    console.error(e)
  } finally {
    loader.value = false
  }
})
</script>

<template>
  <main class="w-full h-dvh flex items-center justify-center overflow-y-auto">
    <form class="w-96 space-y-6" @submit.prevent="onSubmit">
      <div class="space-y-3">
        <FormField v-slot="{ componentField }" name="email" :validate-on-blur="!isFieldDirty">
          <FormItem>
            <FormLabel>Email</FormLabel>
            <FormControl>
              <Input type="text" placeholder="xyz@gmail.com" v-bind="componentField" />
            </FormControl>
            <FormMessage />
          </FormItem>
        </FormField>
        <FormField v-slot="{ componentField }" name="password" :validate-on-blur="!isFieldDirty">
          <FormItem>
            <FormLabel>Password</FormLabel>
            <FormControl>
              <Input type="password" placeholder="****" v-bind="componentField" />
            </FormControl>
            <FormMessage />
          </FormItem>
        </FormField>
      </div>
      <Button class="w-full" type="submit" :disabled="loader">
        <span v-if="loader">Loading...</span>
        <span v-else>Submit</span>
      </Button>
    </form>
  </main>
</template>
