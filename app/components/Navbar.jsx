import Link from "next/link";

const links = [
  { title: "Home", url: "/", id: 1 },
  { title: "About", url: "/", id: 2 },
  { title: "Work", url: "/", id: 3 },
  { title: "Faq", url: "/", id: 4 },
];
const Navbar = () => {
  return (
    <header className="flex items-center justify-center w-full text-white absolute top-0 left-0">
      <nav className="mx-auto max-w-[1500px] w-full flex items-center justify-between py-5">
        <Link href="/" className="uppercase text-4xl">
          Kinzo
        </Link>

        <div className="flex items-center justify-center gap-6">
          <div className="flex gap-6 ">
            {links.map((item) => {
              return (
                <div key={item.id} className="group overflow-hidden relative">
                  <Link
                    className="font-[inter] font-medium uppercase text-sm block transition-transform duration-300 group-hover:-translate-y-4"
                    href={item.url}
                  >
                    {item.title}
                  </Link>

                  <Link
                    className="absolute left-0 top-16 block transition-transform duration-300 group-hover:-translate-y-16 font-[inter] font-medium uppercase text-sm "
                    href={item.url}
                  >
                    {item.title}
                  </Link>
                </div>
              );
            })}
          </div>

          <Link href="/" className="group flex gap-6 font-[inter] font-medium uppercase text-sm bg-orange px-4 py-2 rounded-lg ">
            <div className="overflow-hidden relative">
              <p className="block transition-transform duration-300 group-hover:-translate-y-5">Get in Touch</p>
              <p className="absolute left-0 top-16 block transition-transform duration-300 group-hover:-translate-y-16">Get in Touch</p>
            </div>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
