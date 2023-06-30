import { component$ } from "@builder.io/qwik";

export interface ButtonProps {
  title: string;
}

export const Button = component$<ButtonProps>((props) => {
  return (
    <div>
      <button class="px-2 py-4 rounded bg-blue-500 text-white m-2 font-semibold hover:bg-blue-600 hover:text-gray-50">
        <span>{props.title}</span>
      </button>
    </div>
  );
});
