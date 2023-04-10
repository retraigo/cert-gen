import { Head } from "$fresh/runtime.ts";
import Cert from "../islands/Cert.tsx";
import * as Config from "../assets/config.ts";
export default function Home() {
  return (
    <div class="p-4 flex flex-col space-y-8 mx-auto max-w-screen-md">
      <Head>
        <title>{Config.TITLE}</title>
      </Head>
      <img
        src="/icon.png"
        class="w-32 h-32 mx-auto"
        alt="Easwari Engineering College"
      />
      <div class="text-center flex flex-col items-center space-y-0.5">
        <div class="font-semibold text-sm lg:text-xl text-red-500 font-montserrat">
          Easwari Engineering College (Autonomous)
        </div>
        <div class="font-bold text-base lg:text-2xl text-purple-500">
          {Config.DEPARTMENT}
        </div>
        <div class="font-bold text-blue-500 transition transform duration-500 ease-in-out hover:scale-110 text-lg lg:text-2xl">
          Certificates
        </div>
        <div class="font-bold text-base lg:text-2xl tracking-wider text-purple-700">
          {Config.EVENT}
        </div>
      </div>
      <Cert />
    </div>
  );
}
