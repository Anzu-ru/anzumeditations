import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    

      <div className="relative z-[-1] flex place-items-center :absolute">
        <Image
          className="relative"
          src="/logo.svg"
          alt="Anzu Meditations"
          width={1000}
          height={300}
          priority
        />
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
$35/Session
</h1>
        </a>

        

        <a className="group rounded-lg border px-5 py-4 transition-colors">
<h2 className="mb-2 text-2xl font-semibold">
  30 Minute 1-on-1 Sound Bath
</h2>
<h1 className="m-0 max-w-[30ch] text-3xl">
$95/Session
</h1>
        </a>

        <a className="group rounded-lg border px-5 py-4 transition-colors">
<h2 className="mb-2 text-2xl font-semibold">
  30 Minute 1-on-1 Full Sensory Session
</h2>
<h1 className="m-0 max-w-[30ch] text-3xl">
$110/Session
</h1>
        </a>

      </div>

      <div className="border-2 mb-32 text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-3 lg:text-left px-5 py-4">
        <h1 className="bold-40 lg:bold-64 xl:max-w-[390px] font-bold text-3xl mt-3">
        Scholarships
        </h1>
        <p className="mt-5">I firmly believe that healing should not be cost prohibative. In an attempt to help as many people as possible, I offer free slots in my classes for those who cannot afford my standard rates. There are no strings attached. Email me at an@anzumeditations.com if you are interested!  </p>
      </div>

  
      
      
    </main>
  );
}
