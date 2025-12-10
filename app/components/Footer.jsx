import Link from "next/link";
const links = [
  { title: "Home", url: "/", id: 1 },
  { title: "About", url: "/", id: 2 },
  { title: "Work", url: "/", id: 3 },
  { title: "Faq", url: "/", id: 4 },
];

const socialLinks = [
  { title: "Instagram", url: "www.instagram.com", id: 1 },
  { title: "LinkedIn", url: "https://www.linkedin.com", id: 2 },
];

const Footer = () => {
  return (
    <section className="w-full h-120 bg-primary p-5">
      <div className="bg-orange w-full h-full p-10 flex items-center justify-center rounded-xl ">
        <div className="mx-auto max-w-[1500px] w-full h-full flex flex-col justify-between">
          {/* Footer Top  */}
          <div className="w-full h-10 items-start md:items-center justify-between flex flex-col md:flex-row gal-9">
            <div className="footer-top-bar">
              <div className="flex gap-6 ">
                
                {links.map((item) => {
                  return (
                    <div
                      key={item.id}
                      className="group overflow-hidden relative"
                    >
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
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-between">
              <div className="footer-top-bar">
                <div className="flex gap-6 ">
                  {socialLinks.map((item) => {
                    return (
                      <div
                        key={item.id}
                        className="group overflow-hidden relative"
                      >
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
              </div>
            </div>
          </div>

          <h1 className="text-3xl md:text-6xl  text-primary text-center uppercase">
            Your brand deserves better.<br></br> Let's build it right.
          </h1>

          {/* Bottom Footer  */}
          <div className="w-full h-fit flex flex-col md:flex-row items-center gap-6 justify-between">
            <div className="flex flex-col items-center md:items-start justify-center">
              <Link className="text-2xl italic" href="/">
                Kinzo
              </Link>
              <p className="text-sm font-[inter]">
                2025 © All rights reserved.
              </p>
            </div>

            <div className="flex items-center justify-between gap-10 font-[inter] font-semibold">
                {/* Email */}
              <div className="Email">
                <h2>Email</h2>
                <div className="group overflow-hidden relative text-sm md:text-3xl">
                  <Link
                    className="font-[inter] font-medium   block transition-transform duration-300 group-hover:-translate-y-16"
                    href="/"
                  >
                    yourmail@gmail.com
                  </Link>

                  <Link
                    className="absolute left-0 top-16 block transition-transform duration-300 group-hover:-translate-y-16 font-[inter] font-medium "
                    href="/"
                  >
                    yourmail@gmail.com
                  </Link>
                </div>
              </div>
                  {/* Phone No */}
               <div className="">
                <h2>Phone</h2>
                <div className="group overflow-hidden relative text-sm md:text-3xl">
                  <Link
                    className="font-[inter] font-medium uppercase  block transition-transform duration-300 group-hover:-translate-y-16"
                    href="/"
                  >
                    +91 1234567890
                  </Link>

                  <Link
                    className="absolute left-0 top-16 block transition-transform duration-300 group-hover:-translate-y-16 font-[inter] font-medium uppercase "
                    href="/"
                  >
                    +91 1234567890
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
