export default function MainPage({ children }: { children: React.ReactNode }) {
  return (
    <main className="animate-page-scale-in origin-top py-12 2xl:py-24">
      <div className="container max-w-5xl">{children}</div>
    </main>
  );
}
