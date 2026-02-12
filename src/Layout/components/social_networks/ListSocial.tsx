import { socialNetworks } from "../../../helpers/socialNetworks";
import { ItemSocial } from "./ItemSocial";

export const ListSocial = () => {
  return (
    <>
      <ul className="list__social">
        {socialNetworks.map((network) => (
          <ItemSocial
            key={network.id}
            {...network}
          />
        ))}
      </ul>
    </>
  );
};
