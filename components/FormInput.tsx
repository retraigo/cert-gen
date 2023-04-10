import { JSX } from "preact";

export default function FormInput(
  props: JSX.HTMLAttributes<HTMLInputElement>,
) {
  return (
    <input
      class="max-w-md p-2 w-full border-purple-700 rounded-xl bg-zinc-300 border-1 focus:border-2"
      {...props}
    />
  );
}
