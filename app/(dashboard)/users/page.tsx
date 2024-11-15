import Link from "next/link"

const page = () => {
  return (
    <div>
        <h1>Dashboard Users</h1>

        <ul className="nt-10">
            <li><Link href={"/users/1"}>user 1</Link></li>
            <li><Link href={"/users/2"}>user 2</Link></li>
            <li><Link href={"/users/3"}>user 3</Link></li>
            <li><Link href={"/users/4"}>user 4</Link></li>
        </ul>
    </div>
  )
}

export default page