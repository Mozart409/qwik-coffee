import { component$ } from "@builder.io/qwik";
import { useAuthSession } from "~/routes/plugin@auth";
export interface SessionProps {}

export const Session = component$<SessionProps>((props) => {
  const session = useAuthSession();
  return <p>Session {session.value?.user?.email}</p>;
});
