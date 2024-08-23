"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Header() {
  const [searchText, setSearchText] = useState("");
  const router = useRouter();

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchText.trim()) {
      router.push(`/movies/search?query=${encodeURIComponent(searchText)}`);
    }
  };

  return (
    <nav
      className="navbar bg-dark border-bottom border-body"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <Link
          className="navbar-brand fs-3 fw-bold text-light text-uppercase navbar-brand-hover"
          href="/"
        >
          <Image
            src="/cinepedia-transparent.png"
            alt="log"
            width={85}
            height={55}
          />{" "}
          Cinepedia
        </Link>
        <form className="d-flex" role="search" onSubmit={handleSearchSubmit}>
          <input
            onChange={(e) => setSearchText(e.target.value)}
            value={searchText}
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-light" type="submit">
            Search
          </button>
        </form>
      </div>
    </nav>
  );
}
