import Counter from "./components/counter";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p>
          Hello Stranger,
          <br /><br />
          You&apos;ve stumbled upon my home on the internet.
          <br /><br />
          Though currently under construction, the fact that you&apos;re seeing this means my <a href="https://caprover.com/" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">CapRover</a> instance is correctly setup and configured!
          <br /><br />
          Stay tuned to see what&apos;s next :)
          <br /><br />
          - Ryan
        </p>
      </div>
      <hr />
      <div>
        <Counter />
      </div>
    </main>
  );
}