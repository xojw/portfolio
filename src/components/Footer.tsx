const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-6 mt-12 text-center text-sm text-foreground animate-fade-in-delay-4">
      <p>
        taz © {currentYear}
        <br />
        Made with React, TypeScript, Vite, and Tailwind CSS
      </p>
    </footer>
  );
};

export default Footer;
