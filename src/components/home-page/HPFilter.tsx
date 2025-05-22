import { Accordion } from "../ui/Accordion";

const HPFilter: React.FC = () => {
  return (
    <div className="">
      <Accordion title="Status">
        <p className="text-sm text-gray-400">[Filter content here]</p>
      </Accordion>
      <Accordion title="Set Name">
        <p className="text-sm text-gray-400">[Set name filters go here]</p>
      </Accordion>
      <Accordion title="Language" />
      <Accordion title="Year" />
      <Accordion title="Grader" />
      <Accordion title="Grade" />
      <Accordion title="Edition" />
      <Accordion title="Card Number" />
      <Accordion title="Card Type" />
    </div>
  );
};

export { HPFilter };
