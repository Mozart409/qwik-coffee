import { component$ } from "@builder.io/qwik";
import { useServerTimeLoader } from "~/routes/layout";
import styles from "./footer.module.css";

export default component$(() => {
  const serverTime = useServerTimeLoader();

  return (
    <footer>
      <div class="container">
        <a href="https://mozart409.com/" target="_blank" class={styles.anchor}>
          <span>Made by Mozart409 {new Date().getFullYear()}</span>
          <span class={styles.spacer}>|</span>
          <span>{serverTime.value.date}</span>
        </a>
      </div>
    </footer>
  );
});
