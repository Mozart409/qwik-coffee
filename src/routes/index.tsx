import { component$ } from '@builder.io/qwik'
import type { DocumentHead } from '@builder.io/qwik-city'

import Counter from '~/components/starter/counter/counter'
import Hero from '~/components/starter/hero/hero'
import Infobox from '~/components/starter/infobox/infobox'
export default component$(() => {
  return (
    <>
      <Hero />
    </>
  )
})

export const head: DocumentHead = {
  title: 'Welcome to my coffee tracker',
  meta: [
    {
      name: 'description',
      content: 'Qwik site description'
    }
  ]
}
