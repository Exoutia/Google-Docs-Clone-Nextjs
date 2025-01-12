import Link from "next/link";

const Home = () => {
  return (
    <div className="bg-green-50 justify-center flex min-h-screen items-center">
      Click <Link href={"/documents/123"}><span className="mx-1">Here</span></Link> to go to document id
    </div>
  )
}
export default Home;
