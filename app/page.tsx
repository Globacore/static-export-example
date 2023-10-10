import Link from "next/link"

export default function Home() {
  return (
    <>
      <h1 className="font-bold mb-6 text-5xl">Hello world!</h1>
      <Link className="text-sky-600 underline" href="/about">
        About page
      </Link>
    </>
  )
}
