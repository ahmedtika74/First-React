export default function HomePage() {
  return (
    <main className="bg-[url('/bg.jpg')] bg-cover bg-no-repeat">
      <div className="flex h-[92vh] flex-col items-center justify-center px-[5%] text-white backdrop-blur-xs">
        <h2 className="mb-5 text-3xl font-bold text-shadow-md md:mb-10 md:text-6xl">
          Landing Page, Welcome
        </h2>
        <p className="text-xl text-black/70 md:text-2xl">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi
          nostrum ea excepturi nobis asperiores inventore!
        </p>
      </div>
    </main>
  );
}
