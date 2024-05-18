

export default function Home() {
  const userName: string = "Berotot";
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-6xl font-bold mb-8">Home</h1>
      <p className="text-xl">Hello {userName}, welcome to Home page</p>
    </main>
  );
}
