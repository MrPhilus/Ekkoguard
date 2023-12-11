import ModalCard from "../modalCard/ModalCard";
import { PriceCards } from "../modalCard/Data";

const Subscription = ({ onPriceSelect }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-6 lg:flex-row">
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
            // onSelect={onPriceSelect}
            onSelect={() => onPriceSelect(PriceCard.price, PriceCard.duration)}
          />
        );
      })}
    </div>
  );
};

export default Subscription;
