function ContactSocials() {
  const socials = [
    {
      social: "email",
      un: "keshrianurag690@gmail.com",
      href: "mailto:keshrianurag690@gmail.com",
    },
    {
      social: "github",
      un: "keashri29",
      href: "https://www.github.com/keshri29/",
    },
    {
      social: "linkedin",
      un: "anurag keshri",
      href: "https://www.linkedin.com/in/anurag-kumar-aab8a61a7/",
    },
    {
      social: "instagram",
      un: "anurag.env",
      href: "https://www.instagram.com/anurag.env",
    },
{
social:"anurag.io",
un:"anuragMR",
href:"https://wa.me/+917564855093"
}
  ];
  return (
    <div className="line-container flex flex-col">
      <p className="  text-3xl text-textColor">Reach Out Via Socials </p>
      <div className="flex flex-col space-y-2 pt-5">
        <p className="line text-base text-textColor md:text-2xl">
          .socials &#123;{" "}
        </p>
        {socials.map((social) => {
          return (
            <div className="  line text-base md:text-2xl" key={social.social}>
              <span className="pl-5 text-textColor md:pl-8">
                {social.social}:
              </span>
              <a
                className=" pl-2 text-base text-accentColor hover:underline md:text-2xl"
                href={social.href}
                target="_blank"
                rel="noreferrer"
              >
                {social.un};
              </a>
            </div>
          );
        })}
        <p className="line text-base text-textColor md:text-2xl">&#125;</p>
      </div>
    </div>
  );
}

export default ContactSocials;
