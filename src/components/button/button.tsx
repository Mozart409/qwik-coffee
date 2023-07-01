import { component$, Slot } from "@builder.io/qwik";

export interface ButtonProps {}

export const Button = component$<ButtonProps>((props) => {
  return (
    <div>
      <button class="px-2 py-4 rounded bg-blue-500 text-white m-2 font-semibold hover:bg-blue-600 hover:text-gray-50">
        <span>
          <Slot />
        </span>
      </button>
    </div>
  );
});
