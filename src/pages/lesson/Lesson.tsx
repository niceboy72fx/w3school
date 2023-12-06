import { Collapse, CollapseProps } from "antd";
import { PreBag, ProgressBag } from "../components/ProgressBag";

const Lesson: React.FC = () => {
  const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

  const items: CollapseProps["items"] = [
    {
      key: "1",
      label: "This is panel header 1",
      children: <p>{text}</p>,
    },
  ];
  return (
    <section className="mt-28 mb-10 min-h-screen">
      <div className="flex items-center flex-col justify-center">
        <ProgressBag />
        <Collapse
          className="xl:w-3/6 outline-8  sm:w-4/5 mt-5"
          items={items}
          size="large"
          defaultActiveKey={["1"]}
        />
        <Collapse
          className="xl:w-3/6 outline-8  sm:w-4/5 mt-5"
          items={items}
          size="large"
          defaultActiveKey={["1"]}
        />
        <Collapse
          className="xl:w-3/6 outline-8  sm:w-4/5 mt-5"
          items={items}
          size="large"
          defaultActiveKey={["1"]}
        />
        <Collapse
          className="xl:w-3/6 outline-8  sm:w-4/5 mt-5"
          items={items}
          size="large"
          defaultActiveKey={["1"]}
        />
        <Collapse
          className="xl:w-3/6 outline-8  sm:w-4/5 mt-5"
          items={items}
          size="large"
          defaultActiveKey={["1"]}
        />
      </div>
    </section>
  );
};

export default Lesson;
