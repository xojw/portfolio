import React from "react";

const modules = import.meta.glob("./*.tsx", { eager: true });

interface BlogRoute {
  path: string;
  element: React.ReactNode;
}

export const blogRoutes: BlogRoute[] = Object.entries(modules)
  .filter(([filePath]) => !filePath.endsWith("index.ts")) 
  .map(([filePath, module]) => {
    const name = filePath
      .replace("./", "")
      .replace(".tsx", ""); 
    const Component = (module as any).default;

    return {
      path: `/blog/posts/${name}`,
      element: <Component />,
    };
  });
