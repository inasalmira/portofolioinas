"use client";

import { logout } from "../(auth)/login/servis";

export default function LogoutButton() {
  return (
    <form action={logout}>
      <button type="submit" className="hover:underline">
        logout
      </button>
    </form>
  );
}
