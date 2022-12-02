import React, { useState } from 'react'

export default function Search({ posts, setPosts, search, setSearch }) {

  return (
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
        placeholder="search"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        maxLength={100}
        className="text-grey-700"
      />
      <button type="submit">SEARCH</button>
    </form>
  )
}
