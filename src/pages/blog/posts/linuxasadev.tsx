import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const LinuxAsADev = () => {
  return (
    <div className="min-h-screen flex flex-col px-4">
      <Navbar />

      <main className="flex-1 pt-28 pb-12 max-w-3xl mx-auto w-full">
        <h1 className="text-4xl font-bold text-ctp-green mb-8 animate-fade-in">
          Why I Prefer Linux Over Windows as a Developer
        </h1>

        <div className="space-y-6 text-foreground leading-relaxed whitespace-pre-line animate-fade-in-delay-1">
          <p>
            When I first started messing around with computers, I realized quickly that Windows always felt like it was holding me back. It’s fine for casual use, but once you start digging deeper into development, you notice how much control you don’t have. Linux, on the other hand, gives me freedom. I can set it up exactly how I want, strip away the stuff I don’t need, and make my machine feel like it’s truly mine. That’s the biggest difference. Windows feels like you’re borrowing a computer from Microsoft, while Linux feels like you own it.
          </p>

          <p>
            What really makes Linux stand out for me is how much I can customize it. I can rice my setup, change app icons, mess with the desktop environment, and basically make my computer look and feel exactly how I want. On Windows you’re stuck with whatever Microsoft thinks is best, but Linux lets me build a system that matches my workflow. As a developer that matters, because I spend hours in front of my computer and I want it to feel like it’s mine, not theirs.
          </p>

          <p>
            Another thing I appreciate is how updates and support work. On Linux I decide when to update, and my system stays consistent. With Windows, Microsoft decides when support ends, and dropping Windows 10 even though tons of people still use it feels scummy. On Linux the community keeps things alive, and I know my setup won’t suddenly be abandoned just because a company wants to push everyone to the next version.
          </p>

          <p>
            What blows my mind about Linux is that it’s open source. Anyone can look at the code, change it, improve it, or fix problems, and that’s just crazy to me. It’s not locked away behind some company, it’s built by a community of people all over the world who actually care about making it better. That kind of openness means I can trust it more, because there’s nothing hidden. The idea that thousands of developers are constantly working together to keep it strong is honestly amazing, and it makes me feel like I’m part of something bigger every time I use it.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default LinuxAsADev;
