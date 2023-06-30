import { component$ } from "@builder.io/qwik";

export interface TitleProps {
  title: string;
}

export const Title = component$<TitleProps>((props) => {
  return (
    <div>
      <h1 class="text-4xl font-bold">{props.title}</h1>{" "}
    </div>
  );
});
