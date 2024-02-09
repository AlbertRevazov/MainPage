import { FC } from "react";
import { Links } from "../../../../common/Links";
import { Label } from "../../../Label";
import "./stylex.css";

export const Contacts: FC = () => {
  return (
    <div className="contact__info__wrapper">
      <div className="contact__info__title">
        <h3 className="count">04</h3>contact
      </div>

      <div className="contact__us">
        <Label
          title="Phone"
          subtitle="+7(989) 134-34-54"
          src={"/img/icons/phone.png"}
        />
        <Label
          title="Email"
          subtitle="alber.revazov@bk.ru"
          src={"/img/icons/email.png"}
        />
        <Label
          title="Address"
          subtitle=" Russia, North Ossetia-Alania, Archonskaya, Ogorodnaya Street,"
          src="/img/icons/address.png"
        />
      </div>

      <Links className="contact__info__links" />
    </div>
  );
};
