export default function HomePage() {
  return (
    <main className="bg-[url('/bg.jpg')] bg-cover bg-no-repeat">
      <div className="flex h-[92vh] flex-col items-center justify-center px-[5%] text-white backdrop-blur-xs">
        <h2 className="mb-10 text-6xl font-bold text-shadow-md">
          Landing Page, Welcome
        </h2>
        <p className="text-2xl text-black">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi
          nostrum ea excepturi nobis asperiores inventore!
        </p>
      </div>
    </main>
  );
}
