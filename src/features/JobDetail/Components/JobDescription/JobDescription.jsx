import React from "react";

const JobDescription = () => {
  return (
    <div className="container mx-auto flex items-center justify-center">
      <div className="py-16 mx-[80px] space-y-24">
        {/* Job Overview */}

        <ul className="list-disc pl-3 leading-relaxed tracking-wider space-y-8 font-light">
          <li>
            We’re looking for multifaceted, collaborative designers to work on
            everything from website design to mobile app designs. You will have
            an opportunity to define and reinvent the digital space, and a
            passion for doing just that is critical—we want people who believe
            in their skills and their perspective.
          </li>

          <li>
            We’re looking for multifaceted, collaborative designers to work on
            everything from website design to mobile app designs. You will have
            an opportunity to define and reinvent the digital space, and a
            passion for doing just that is critical—we want people who believe
            in their skills and their perspective.
          </li>
        </ul>

        {/* Roles and Responsibilities*/}

        <div className="space-y-6">
          <p className="text-[2.5rem] font-light">Roles + Responsibilities:</p>

          <ul className="list-disc pl-3 leading-relaxed tracking-wider space-y-8 font-light">
            <li>
              You’ll work on everything from high-end UI/UX to art direction.
              From typography to iconography. From sketches to illustrations.
              From design systems to grid systems. And if you know a little bit
              of motion graphics, you’ve just jumped the queue!
            </li>

            <li>
              You’ll work on everything from high-end UI/UX to art direction.
              From typography to iconography. From sketches to illustrations.
              From design systems to grid systems. And if you know a little bit
              of motion graphics, you’ve just jumped the queue!
            </li>
            <li>
              You’ll work on everything from high-end UI/UX to art direction.
              From typography to iconography. From sketches to illustrations.
              From design systems to grid systems. And if you know a little bit
              of motion graphics, you’ve just jumped the queue!
            </li>
            <li>
              You’ll work on everything from high-end UI/UX to art direction.
              From typography to iconography. From sketches to illustrations.
              From design systems to grid systems. And if you know a little bit
              of motion graphics, you’ve just jumped the queue!
            </li>
          </ul>
        </div>

        {/* Qualification */}

        <div className="space-y-6">
          <p className="text-[2.5rem] font-light">
            What it takes to be one of us!
          </p>

          <ul className="list-disc pl-3 leading-relaxed tracking-wider space-y-8 font-light">
            <li>Any Bachelor’s degree or diploma, multimedia courses.</li>
            <li>Any Bachelor’s degree or diploma, multimedia courses.</li>
            <li>Any Bachelor’s degree or diploma, multimedia courses.</li>
            <li>Any Bachelor’s degree or diploma, multimedia courses.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default JobDescription;
