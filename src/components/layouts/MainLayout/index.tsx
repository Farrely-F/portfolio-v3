import { LayoutProps } from "../../../../.next/types/app/layout";

export default function MainLayout({ children }: LayoutProps) {
  return (
    <>
      <main className="min-h-dvh space-y-28 py-24 2xl:mx-auto 2xl:max-w-7xl">
        {children}
      </main>
    </>
  );
}
