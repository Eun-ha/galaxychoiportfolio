import LoginForm from "@/components/account/login-form";
import { Suspense } from "react";

export default function Page() {
  return (
    <main className="flex">
      <div>
        <Suspense>
          <LoginForm />
        </Suspense>
      </div>
    </main>
  );
}
