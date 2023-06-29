import { component$ } from "@builder.io/qwik";

export interface ButtonProps {
  title: string;
}

export const Button = component$<ButtonProps>((props) => {
  return (
    <div>
      <button>
        <span>Title: {props.title}</span>
      </button>
    </div>
  );
});
