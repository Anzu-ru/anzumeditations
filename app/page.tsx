import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        
        <div className="bottom-0 left-0 flex h-48 w-full items-end justify-center lg:static lg:size-auto lg:bg-none">
          
          <h2 className="absolute left-[+10px] top-[-5] mt-6 text-gray-700">
            Website Under Development
          </h2>

        </div>
      </div>

      <div className="relative z-[-1] flex place-items-center :absolute before:h-[300px] before:w-full before:-translate-x-1/2">
        <Image
          className="relative"
          src="/logo.svg"
          alt="Anzu Meditations"
          width={700}
          height={200}
          priority
        />
      </div>

      <div className="relative flex place-items-center">
        <h1 className="relative flex mb-3 text-4xl font-bold">
          Full Sensory Meditation
        </h1>
      </div>

      
      
      <div className="flex flex-wrap justify-between lg:gap-10">
        <h1 className="bold-40 lg:bold-64 xl:max-w-[390px] font-bold text-3xl">
          Prices
        </h1>
      </div>

      

      <div className="border-2 mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-3 lg:text-left">
        <a className="group rounded-lg border border-transparent px-5 py-4 transition-colors">
<h2 className="mb-2 text-2xl font-semibold">
  Meditation Classes
</h2>
<h1 className="m-0 max-w-[30ch] text-3xl">
$45/Session
</h1>
        </a>

        

        <a className="group rounded-lg border px-5 py-4 transition-colors">
<h2 className="mb-2 text-2xl font-semibold">
  60 Minute Sound Bath
</h2>
<h1 className="m-0 max-w-[30ch] text-3xl">
$120/Session
</h1>
        </a>

        <a className="group rounded-lg border px-5 py-4 transition-colors">
<h2 className="mb-2 text-2xl font-semibold">
  60 Minute 1-on-1 Full Sensory Session
</h2>
<h1 className="m-0 max-w-[30ch] text-3xl">
$150/Session
</h1>
        </a>

      </div>

      <div className="border-2 mb-32 text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-3 lg:text-left px-5 py-4">
        <h1 className="bold-40 lg:bold-64 xl:max-w-[390px] font-bold text-3xl mt-10">
          Scolarships
        </h1>
        <p className="mt-5">I firmly believe that healing should not becost prohibative. In anattempt to help as many people aspossible, I offer free slots in my classes for those who cannot afford my standard rates. There are no strings attached. Email me at an@anzumeditations.com if you are interested!  </p>
      </div>

  
      
      
    </main>
  );
}
