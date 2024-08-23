import type { NextPage } from "next";
import { MetaHeader } from "~~/components/MetaHeader";

const ExampleUI: NextPage = () => {
  return (
    <>
      <MetaHeader
        title="Example UI | Fullstack Web3 Template"
        description="Example UI created with 🏗 Fullstack Web3 Template, showcasing some of its features."
      >
        {/* We are importing the font this way to lighten the size of SE2. */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Bai+Jamjuree&display=swap" rel="stylesheet" />
      </MetaHeader>
    </>
  );
};

export default ExampleUI;
