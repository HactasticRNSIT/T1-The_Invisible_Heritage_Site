import Link from "next/link";

export default function HomePage() {

  return (

    <main
      className="
        min-h-screen
        bg-black
        text-white
        flex
        flex-col
        items-center
        justify-center
        px-6
      "
    >

      <h1
        className="
          text-5xl
          md:text-7xl
          font-bold
          text-center
        "
      >
        🇮🇳 The Invisible Heritage Site
      </h1>

      <p
        className="
          text-gray-400
          text-center
          max-w-3xl
          mt-6
          text-lg
        "
      >
        Discover forgotten historical monuments,
        temples, forts, and cultural landmarks
        across India that remain digitally invisible.
      </p>

      <Link href="/explore">

        <button
          className="
            mt-10
            bg-yellow-500
            hover:bg-yellow-400
            text-black
            px-8
            py-4
            rounded-2xl
            text-lg
            font-semibold
            transition
          "
        >
          Explore India Heritage Map
        </button>

      </Link>

    </main>
  );
}