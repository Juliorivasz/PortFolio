import { socialNetworks } from "../../../helpers/social-networks";
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
