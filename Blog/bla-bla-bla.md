---
title: "Bla bla bla"
date: 2021-05-26
tags: ['Markdown', 'CSS']
---

## Bla bla bla

As it turns out I'm writing this on Easter,
so why not include a picture of a easter egg here.

![easter egg](https://images.unsplash.com/photo-1457301353672-324d6d14f471?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80)



Testing code highlighter:
```vue
<template>
  <Layout>
    <h1 class="text-xl font-semibold mb-2">{{ $page.post.title }}</h1>
    <span class="font-light">{{ $page.post.date }}</span>
    <div class="mt-8 mb-16 markdown" v-html="$page.post.content" />
  </Layout>
</template>

```