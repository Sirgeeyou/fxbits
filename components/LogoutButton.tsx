import { LogOutIcon } from "lucide-react";

export default function Logout() {
  return (
    <form method="post" action="/auth/logout">
      <button
        type="submit"
        className="flex items-center gap-2 text-lg text-secondary-foreground"
      >
        <LogOutIcon className="text-neutral-400 dark:text-white" />
        <p>Logout</p>
      </button>
    </form>
  );
}
