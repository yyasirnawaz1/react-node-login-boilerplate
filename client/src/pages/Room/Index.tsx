import { useAccount } from "../../context/AuthContext";
import * as storage from "../../utils/storage";

const Room = () => {
  const { token, setToken } = useAccount();
  const setting = () => {
    storage?.set("token", "rooms");
    setToken("rooms");
  };
  return (
    <div>
      Room page {token}
      <button onClick={setting}> set value </button>
    </div>
  );
};

export default Room;
