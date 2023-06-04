import { FC } from "react";
import { Icon } from "../../../../../Icon";
import { Links } from "../../../../../Links";
import "./stylex.css";

export const Contacts: FC = () => {
  return (
    <div className="contact__info__wrapper">
      <div className="contact__info__title">
        <h3 className="count">04</h3>contact
      </div>

      <div className="contact__us">
        <div className="contact__item__wrapper">
          <Icon src="/img/icons/phone.png" alt="icon" width={19} height={19} />
          <div className="contact__item">
            <h4 className="title">Phone</h4>
            <h6 className="subtitle">+7 (989) 134-34-54</h6>
          </div>
        </div>
        <div className="contact__item__wrapper">
          <Icon src="/img/icons/email.png" alt="icon" width={19} height={19} />
          <div className="contact__item">
            <h4 className="title">Email</h4>
            <h6 className="subtitle">alber.revazov@bk.ru</h6>
          </div>
        </div>
        <div className="contact__item__wrapper">
          <Icon
            src="/img/icons/address.png"
            alt="icon"
            width={18}
            height={21}
          />
          <div className="contact__item">
            <h4 className="title">Address</h4>
            <h6 className="subtitle">
              Russia, North Ossetia-Alania, Archonskaya, Ogorodnaya Street,
            </h6>
          </div>
        </div>
      </div>

      <Links className="contact__info__links" />
    </div>
  );
};
