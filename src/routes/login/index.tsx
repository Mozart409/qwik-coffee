import { component$ } from '@builder.io/qwik'
import { Form } from '@builder.io/qwik-city'
import { Button } from '~/components/button/button'
import { useAuthSignin } from '~/routes/plugin@auth'
export default component$(() => {
  const signIn = useAuthSignin()
  return (
    <Form action={signIn}>
      <input type="hidden" name="providerId" value="github" />
      <Button>Sign In</Button>
    </Form>
  )
})
