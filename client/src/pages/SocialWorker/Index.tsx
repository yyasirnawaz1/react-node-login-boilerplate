import { useAccount } from "../../context/AuthContext";

const SocialWorker = () => {
  const { token, setToken } = useAccount();

  return <div>SocialWorker page {token}</div>;
};

export default SocialWorker;
