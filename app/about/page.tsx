import Link from "next/link"

export default async function AboutPage() {
  return (
    <>
      <h1 className="font-bold mb-6 text-5xl">About page</h1>
      <Link className="text-sky-600 underline" href="/">
        Home
      </Link>
    </>
  )
}
