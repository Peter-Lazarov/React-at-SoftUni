import { Link, Outlet } from "react-router-dom"

const people = [
  {
    name: 'Leslie Alexander',
    role: 'Co-Founder / CEO',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  // More people...
]

export default function About() {
  return (
    <>
      <nav>
        <Link to="our-team">Our Team</Link>
        <Link to="contact-us">Contact Us</Link>
      </nav>

      <Outlet />
    </>
  )
}
