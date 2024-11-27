import SectionAtom from "./components/Atoms/SectionAtom";
import Link from "next/link";
import Login from "./components/Login"


export default function Home() {
  return (
    <main>
      {/* <h1 className="text-violet-950 text-center text-[34px]">Introduction to NextJS</h1>
      <SectionAtom heading="About Us">
      
      <div>
        <p>
          We are learning about NextJS
        </p>
        <Link href={'/about'}><button>About</button></Link>
      </div>

      </SectionAtom> */}
      <Login/>



    </main>
      );
}
