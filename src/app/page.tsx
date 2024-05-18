import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-[100dvh]  dark:bg-gray-900 py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6 text-center space-y-6">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tighter text-gray-900 dark:text-gray-50 sm:text-5xl md:text-6xl lg:text-7xl">
            Laugh Out Loud with AI-Generated Jokes
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-[700px] mx-auto">
            Discover a never-ending stream of hilarious, AI-powered jokes to
            brighten your day and share with friends.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 space-y-4">
            <h3 className="text-xl font-bold">
              Why can&apos;t a bicycle stand up by itself? It`&apos;s two tired!
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              An AI-generated joke that&apos;s sure to make you chuckle.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 space-y-4">
            <h3 className="text-xl font-bold">
              What do you call a fake noodle? An Impasta!
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Another hilarious joke created by our AI system.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 space-y-4">
            <h3 className="text-xl font-bold">
              Why did the tomato turn red? Because it saw the salad dressing!
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Get ready to laugh with this clever AI-generated joke.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 space-y-4">
            <h3 className="text-xl font-bold">
              Why can&apos;t a nose be 12 inches long? Because then it would be
              a foot!
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Our AI has a knack for creating side-splitting jokes.
            </p>
          </div>
        </div>
        <Link
          className="inline-flex items-center justify-center rounded-md bg-gray-900 px-6 py-3 text-lg font-medium text-gray-50 shadow-sm transition-colors hover:bg-gray-900/90 focus:outline-none focus:ring-1 focus:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus:ring-gray-300"
          href="/api/auth/register"
        >
          Explore More Jokes
        </Link>
      </div>
    </main>
  );
}
