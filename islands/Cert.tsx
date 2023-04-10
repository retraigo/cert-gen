
import Names from "../assets/names.ts";

import { useState } from "preact/hooks";
import create from "../assets/create.ts";
import FormInput from "../components/FormInput.tsx";

export default function Cert() {
  const [search, setSearch] = useState("");

  function getValue(e: Event) {
    e.preventDefault();
    const data = new FormData(e.currentTarget as HTMLFormElement);
    const val = data.get("emailOrPhone");
    setSearch(val as string);
  }
  return (
    <div>
      <form class = "flex flex-col space-y-4 items-center" onSubmit={(e) => getValue(e)}>
        <FormInput
          name="emailOrPhone"
          type="text"
          placeholder="Enter your registered mobile number or email..."
        />
        <button type="submit" class = "px-4 py-2 text-center text-white rounded-xl bg-purple-700 hover:bg-purple-500 transition duration-500 ease-in-out transform hover:scale-110">Download</button>
      </form>
      {search && <GetCertificate id={search} />}
    </div>
  );
}

function GetCertificate({ id }: { id: string }) {
  const [cert, setCert] = useState("");
  fetch(`/api/${id}`).then((res) => res.text()).then((res) => setCert(res));
  const name = Names.find((x) =>
    (x.email.toLowerCase() === id.toLowerCase()) || (x.phone === id)
  );

  if (!name) return <div class="text-2xl">Not a particiant</div>;

  return (
    <div class="flex flex-col space-y-8 w-full items-center tracking-wide lg:mt-32">
      <p class="font-semibold text-2xl lg:text-4xl uppercase">
        Certificate of Participation
      </p>
      <p class="font-bold text-xl lg:text-3xl">{name.name}</p>
      <a
        href={cert}
        target="_blank"
        class="flex flex-col items-center"
        download={`CYSEC_EEC_${id}_${name.name}.png`}
      >
        <img class="w-full lg:w-96" src={cert} />
        <small class="text-blue-400">({cert ? `Click to download` : `Please wait...`})</small>
      </a>
    </div>
  );
}