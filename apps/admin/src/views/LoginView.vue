<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
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
import { Loader } from 'lucide-vue-next'
import { toast } from 'vue-sonner'
import { useAuthStore } from '@/stores'
import axios from 'axios'

import { toTypedSchema } from '@vee-validate/zod'
import { useForm } from 'vee-validate'
import * as z from 'zod'

const router = useRouter()

const formSchema = toTypedSchema(
  z.object({
    email: z.string().email("Invalid email format").nonempty("Email is required"),
    password: z.string().nonempty("Password is required")
  })
)

const { isFieldDirty, handleSubmit , resetForm } = useForm({
  validationSchema: formSchema,
})
const loader = ref(false)
const authStore = useAuthStore()

const fetchIpAddress = async () => {
  try {
    const response = await axios.get('https://api.ipify.org?format=json')
    return response.data.ip
  } catch (error) {
    console.error("Failed to fetch IP address:", error)
    return null
  }
}

const onSubmit = handleSubmit(async (values) => {
  loader.value = true
  const ipAddress = await fetchIpAddress()

  if (!ipAddress) {
    toast.error("Failed to fetch IP address")
    loader.value = false
    return
  }

  try {
    const data = await post('/admin/login', {
      email: values.email,
      password: values.password,
      ipAddress: ipAddress,
    })
    if (data.success == 1) {
      loader.value = false
      authStore.setLoggin(true)
      localStorage.setItem('token', data.data.token)
      router.push('/')
      resetForm()
    } else {
      resetForm()
      toast.error(data.message)
    }
  } catch (e) {
    console.error(e)
    toast.error("An error occurred during login")
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
        <Loader v-if="loader" class="w-4 h-4 mr-2 animate-spin" />
        <span v-if="loader">Loading...</span>
        <span v-else>Submit</span>
      </Button>
    </form>
  </main>
</template>
