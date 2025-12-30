const Skills = () => {
  return (
    <section className="text-center mt-12 animate-fade-in-delay-3">
      <h2 className="text-3xl font-bold mb-4 hover-scale">Skills</h2>
      <p className="text-lg mb-6 hover-scale">
        Tools I use for web and discord bot development
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <img
          src="https://skillicons.dev/icons?i=html,css,js,typescript,python,react,nodejs,vscode,discordjs,nextjs,tailwindcss,vite,astro&theme=dark"
          alt="Tech stack icons"
          className="max-w-full h-12 hover-scale"
        />
      </div>
    </section>
  );
};

export default Skills;
