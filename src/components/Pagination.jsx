import React from 'react'

export default function Pagination({page, setPage}) {
    let pages = [];
    const offset = page < 5 ? 5 - page : 0;
    for (let i = page - 5; i <= page + 4; i++) {
    pages.push(i + offset);
  }
  return pages.map((pn, i) =>  <button key={i} className="pagination-button" onClick={() => setPage(pn)}>{pn + 1}</button>
    );
}
