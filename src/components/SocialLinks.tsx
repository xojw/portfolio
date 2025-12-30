import { SiDiscord, SiTelegram, SiGithub, SiReddit } from "react-icons/si";

const SocialLinks = () => {
  return (
    <div className="flex flex-wrap justify-center gap-x-4 mt-5 lg:mt-6 animate-fade-in-delay-2">
      {/* Discord */}
      <a
        href="https://discord.com/users/1408081539249733764"
        target="_blank"
        rel="noopener noreferrer"
        title="Discord"
        className="icon-hover"
      >
        <SiDiscord className="w-8 h-8" />
      </a>

      {/* Telegram */}
      <a
        href="https://t.me/fucktazz"
        target="_blank"
        rel="noopener noreferrer"
        title="Telegram"
        className="hover-scale icon-hover"
      >
        <SiTelegram className="w-8 h-8" />
      </a>

      {/* GitHub */}
      <a
        href="https://github.com/xojw"
        target="_blank"
        rel="noopener noreferrer"
        title="GitHub"
        className="hover-scale icon-hover"
      >
        <SiGithub className="w-8 h-8" />
      </a>

      {/* Reddit */}
      <a
        href="https://www.reddit.com/user/PersonalityTiny4683/"
        target="_blank"
        rel="noopener noreferrer"
        title="Reddit"
        className="hover-scale icon-hover"
      >
        <SiReddit className="w-8 h-8" />
      </a>
    </div>
  );
};

export default SocialLinks;
