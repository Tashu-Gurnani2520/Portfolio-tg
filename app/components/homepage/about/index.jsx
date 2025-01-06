// @flow strict

import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";

function AboutSection() {
  return (
    <div id="about" className="my-12 lg:my-16">
      {/* Main Content */}
      <div className="grid grid-cols-1 gap-8 lg:gap-16">
        <div className="order-1">
          <div className="mt-8">
            <p className="text-cyan-400 text-lg lg:text-xl">
              What excites me the most is the potential for AI to revolutionize industries and enhance everyday life. I am committed to continuously learning, growing, and using my technical skills to make an impactful contribution to the future of technology.
            </p>
            <p className="mt-4 text-cyan-400 text-lg lg:text-xl font-bold">
              Let’s connect! I’m open to job opportunities where I can contribute to creating the next generation of AI-driven solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
