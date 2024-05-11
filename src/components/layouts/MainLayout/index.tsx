export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <main className="min-h-dvh space-y-28 py-24 2xl:mx-auto 2xl:max-w-7xl">
        {children}
      </main>
    </>
  );
}
