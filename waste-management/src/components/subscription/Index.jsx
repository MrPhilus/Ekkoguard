import ModalCard from "../modalCard/ModalCard";
import { PriceCards } from "../modalCard/Data";

const Subscription = () => {
  return (
    <div className="flex items-center justify-center gap-6">
      {/* <ModalCard
        header="Monthly"
        details="Pay for the month"
        price="7,000"
        duration="month"
        background="bg-rose-300"
        buttonTextColor="text-rose-300"
      /> */}

      {PriceCards.map((PriceCard) => {
        return (
          <ModalCard
            key={PriceCard.header}
            header={PriceCard.header}
            details={PriceCard.details}
            price={PriceCard.price}
            duration={PriceCard.duration}
            background={PriceCard.background}
            buttonTextColor={PriceCard.buttonTextColor}
          />
        );
      })}
    </div>
  );
};

export default Subscription;
