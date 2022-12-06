import React from 'react';
import { FiSearch } from "react-icons/fi";

export default function Search({ setPosts, search, setSearch }) {

  return (
    <div className='flex justify-start'>
      <form
        onSubmit={(event) => {
          event.preventDefault()

          fetch(`${import.meta.env.VITE_PST_API}?search=${search.trim()}`, {
            mode: "cors",
            credentials: "include",
          })
            .then((res) => res.json())
            .then((messages) => {
              setPosts(messages.data);
            })
            .catch((err) => console.log(err));
        }}
      >
        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          maxLength={100}
          className="py-3 pl-5 w-[8rem] md:w-[30rem] bg-ocean-700 text-offwhite-900"
        />
        <button><FiSearch
          type="submit"
          className='text-offwhite-900 w-10 h-10 pl-2 inline-block'
        />
        </button>
      </form>
    </div>
  )
}
