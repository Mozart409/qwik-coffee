import { component$ } from "@builder.io/qwik";
import { Button } from "~/components/button/button";
import { Title } from "~/components/title/title";

import type { DocumentHead } from "@builder.io/qwik-city";
import { Session } from "~/components/session/session";

export default component$(() => {
  return (
    <div>
      <Title title="New route works." />
      <Button>Testing is fun</Button>
      <Session />
    </div>
  );
});

export const head: DocumentHead = {
  title: "About Page",
  meta: [{ name: "description", content: "Description test" }],
};
