"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex-contain">
      Login please
      <Button>
        <Link href="/api/auth/login">Login</Link>
      </Button>
      <Button>
        <Link href="/api/auth/register">SignUp</Link>
      </Button>
    </div>
  );
}
