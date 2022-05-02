import React from 'react'

export default function Navbar() {
  return (
    <>
      <nav className="navBar bg-blue-500 flex justify-between w-full">
        <div className="">
          <form className="">
            <input
              className=" pl-5 py-2 ml-5 pr-20 my-2 w-96 "
              type="text"
              placeholder="Search for and article or project"
              name="search"
            />
          </form>
        </div>
        <div className="my-2 py-2 mr-5 text-white color: rgb(255 255 255);  ">
          <p>P</p>
        </div>
      </nav>
    </>
  )
}
