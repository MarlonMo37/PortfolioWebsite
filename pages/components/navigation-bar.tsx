import Link from "next/link";

export default function NavigationBar() {
  const PROJECTS = [
    { name: "BlogApp", href: "/BlogApp" },
    { name: "Manga Lister", href: "/BlogApp" },
    { name: "Movie Reviewer", href: "/BlogApp" },
    { name: "The Playlister", href: "/BlogApp" },
    { name: "My Own Pokemon Gym", href: "/BlogApp" },
  ];

  return (
    <>
      <header>
        <nav>
          <Link href={"/"}>
            <h1>Home</h1>
          </Link>
        </nav>
      </header>
    </>
  );
}
