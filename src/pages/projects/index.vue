<script setup lang="ts">
import { supabase } from '@/lib/supabaseClient'

// const getProjects = async () => {
//   //...
//   const { data, error } = await supabase.from('projects').select()

//   if (error) console.log(error)

//   console.log('Projects : ', data)
// }

let projects: any
;(async () => {
  // ...
  const { data, error } = await supabase.from('projects').select()

  if (error) console.log(error)

  projects = data

  //console.log('Projects : ', data)
  console.log('projects: ', projects)
})()

//await getProjects()
</script>

<template>
  <div>
    <h1>Projects Page</h1>
    <RouterLink to="/">Go to home</RouterLink>
    {{ projects }}
  </div>
</template>
