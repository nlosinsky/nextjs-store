import { Suspense } from "react";

export default function CheckoutLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <Suspense>
      <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-md">
        {children}
      </div>
    </Suspense>
  );
}
