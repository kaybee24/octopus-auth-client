import React from 'react';
import { FiSearch } from "react-icons/fi";

export default function Search({ setPosts, search, setSearch }) {

  return (
    <div className='flex justify-start relative'>
      <form
        className='absolute right-[-30px]'
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
          className="py-2 pl-3 bg-ocean-700 text-offwhite-900 w-[5rem] absolute right-[-3.5em] pl-5 w-[8rem] md:w-[15rem] md:left-[4.5em] lg:w-[20em] lg:left-[8.8em]"
        />
        <button><FiSearch
          type="submit"
          className='absolute left-[12px] top-0 text-offwhite-900 w-10 h-10 pl-2 inline-block md:left-[16.5em] lg:left-[25.5em]'
        />
        </button>
      </form>
    </div>
  )
}
