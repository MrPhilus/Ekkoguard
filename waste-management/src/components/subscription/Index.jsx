import Button from "../button";
import { ButtonSize, ButtonState } from "../button/enum";

const Subscription = () => {
  return (
    <div>
      <div role="tablist" className="tabs tabs-lifted">
        <a role="tab" className="tab">
          <h1>Monthly</h1>
        </a>
        <div className="w-full border flex flex-col items-center justify-center">
          <h2>7k</h2>
          <Button
            value={"Select Plan"}
            size={ButtonSize.lg}
            variant={ButtonState.PRIMARY}
            type={"Button"}
            className={"w-full mt-2"}
          />
        </div>
        <a
          role="tab"
          className="tab tab-active [--tab-bg:orange] [--tab-border-color:black] text-white"
        >
          <h1>Quarterly</h1>
        </a>
        <div className="w-full border flex flex-col items-center justify-center">
          <h2>24k</h2>
          <Button
            value={"Select Plan"}
            size={ButtonSize.lg}
            variant={ButtonState.PRIMARY}
            type={"Button"}
            className={"w-full mt-2"}
          />
        </div>
        <a role="tab" className="tab">
          <h1>Yearly</h1>
        </a>
        <div className="w-full border flex flex-col items-center justify-center">
          <h2>70k</h2>
          <Button
            value={"Select Plan"}
            size={ButtonSize.lg}
            variant={ButtonState.PRIMARY}
            type={"Button"}
            className={"w-full mt-2"}
          />
        </div>
      </div>
    </div>
  );
};

export default Subscription;
