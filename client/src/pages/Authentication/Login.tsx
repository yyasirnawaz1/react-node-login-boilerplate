import { useEffect, useState, ChangeEvent } from "react";
import { useDispatch } from "react-redux";
import { setPageTitle } from "../../store/themeConfigSlice";
import { useAccount } from "../../context/AuthContext";
import * as storage from "../../utils/storage";
import { UseAxios } from "../../utils/useAxios";
import { AxiosInstance } from "axios";
import Config from "../../utils/config";
import { useNavigate } from "react-router-dom";

type PropsModel = {
  email?: string;
  password?: string;
  remember_me?: boolean;
};

const defaultProps: PropsModel = {
  email: "",
  password: "",
  remember_me: false,
};

const LoginCover = () => {
  const navigate = useNavigate();
  const { setToken, setUser } = useAccount();
  const [data, setData] = useState<PropsModel>(defaultProps);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setPageTitle("Login Cover"));
  });

  const onChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const onRememberMeChange = (): void => {
    setData({
      ...data,
      remember_me: !data.remember_me,
    });
  };

  const submitForm = async (): Promise<void> => {
    const axios: AxiosInstance = UseAxios();
    axios
      .post(`${Config.baseURL}/api/auth/login`, { email: data.email, password: data.password })
      .then((response) => {
        if (response.status === 200) {
          storage?.set("token", response.data.token);
          setToken(response.data.token);
          navigate("/");
        }
      })
      .catch((error) => {
        // TODO: show error on the page
        // setData({ email: "error", password: "", remember_me: false });
      });

    // const loginToken = "lk1j23lk12j3kl1j2l3j";
  };

  useEffect(() => {
    setToken(undefined);
    setUser(undefined);

    storage?.remove("token");
    storage?.remove("user");
  }, []);

  return (
    <div className="flex min-h-screen">
      <div className="bg-gradient-to-t from-[#ff1361bf] to-[#44107A] w-1/2  min-h-screen hidden lg:flex flex-col items-center justify-center text-white dark:text-black p-4">
        <div className="w-full mx-auto mb-5">
          <img src="/assets/images/auth-cover.svg" alt="coming_soon" className="lg:max-w-[370px] xl:max-w-[500px] mx-auto" />
        </div>
        <h3 className="text-3xl font-bold mb-4 text-center">Sign in to [Care Home Name]</h3>
        <p>Where quality care meets comfort. Empowering our team to provide exceptional care</p>
      </div>
      <div className="w-full lg:w-1/2 relative flex justify-center items-center">
        <div className="max-w-[480px] p-5 md:p-10">
          <h2 className="font-bold text-3xl mb-3">Sign In</h2>
          <p className="mb-7">Enter your email and password to login</p>
          <form className="space-y-5">
            <div>
              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" className="form-input" placeholder="Enter Email" onChange={onChange} value={data.email} />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input id="password" name="password" type="password" className="form-input" placeholder="Enter Password" onChange={onChange} value={data.password} />
            </div>
            <div>
              <label className="cursor-pointer">
                <input id="remember_me" name="remember_me" type="checkbox" className="form-checkbox" checked={data.remember_me} onChange={onRememberMeChange} />
                <span className="text-white-dark">Remember me</span>
              </label>
            </div>
            <button type="button" className="btn btn-primary w-full" onClick={submitForm}>
              SIGN IN
            </button>
          </form>
          <div className="relative my-7 h-5 text-center before:w-full before:h-[1px] before:absolute before:inset-0 before:m-auto before:bg-[#ebedf2]  dark:before:bg-[#253b5c]">
            <div className="font-bold text-white-dark bg-[#fafafa] dark:bg-[#060818] px-2 relative z-[1] inline-block">
              <span>OR</span>
            </div>
          </div>
          <ul className="flex justify-center gap-2 sm:gap-5 mb-5">
            <li>
              <button
                disabled
                type="button"
                className="btn flex gap-1 sm:gap-2 text-black shadow-none bg-white-dark/30 dark:border-[#253b5c] dark:hover:bg-[#1b2e4b] dark:bg-transparent dark:text-white hover:bg-white "
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 256 193" version="1.1" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid">
                  <g>
                    <path
                      d="M58.1818182,192.049515 L58.1818182,93.1404244 L27.5066233,65.0770089 L0,49.5040608 L0,174.59497 C0,184.253152 7.82545455,192.049515 17.4545455,192.049515 L58.1818182,192.049515 Z"
                      fill="#4285F4"
                    ></path>
                    <path
                      d="M197.818182,192.049515 L238.545455,192.049515 C248.203636,192.049515 256,184.224061 256,174.59497 L256,49.5040608 L224.844415,67.3422767 L197.818182,93.1404244 L197.818182,192.049515 Z"
                      fill="#34A853"
                    ></path>
                    <polygon
                      fill="#EA4335"
                      points="58.1818182 93.1404244 54.0077618 54.4932827 58.1818182 17.5040608 128 69.8676972 197.818182 17.5040608 202.487488 52.4960089 197.818182 93.1404244 128 145.504061"
                    ></polygon>
                    <path
                      d="M197.818182,17.5040608 L197.818182,93.1404244 L256,49.5040608 L256,26.2313335 C256,4.64587897 231.36,-7.65957557 214.109091,5.28587897 L197.818182,17.5040608 Z"
                      fill="#FBBC04"
                    ></path>
                    <path
                      d="M0,49.5040608 L26.7588051,69.5731646 L58.1818182,93.1404244 L58.1818182,17.5040608 L41.8909091,5.28587897 C24.6109091,-7.65957557 0,4.64587897 0,26.2313335 L0,49.5040608 Z"
                      fill="#C5221F"
                    ></path>
                  </g>
                </svg>
                Google
              </button>
            </li>
            <li>
              <button
                disabled
                type="button"
                className="btn flex gap-1 sm:gap-2 text-black shadow-none bg-white-dark/30 dark:border-[#253b5c] dark:hover:bg-[#1b2e4b] dark:bg-transparent dark:text-white hover:bg-white"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 256 250" version="1.1" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid">
                  <g>
                    <path
                      d="M128.00106,0 C57.3172926,0 0,57.3066942 0,128.00106 C0,184.555281 36.6761997,232.535542 87.534937,249.460899 C93.9320223,250.645779 96.280588,246.684165 96.280588,243.303333 C96.280588,240.251045 96.1618878,230.167899 96.106777,219.472176 C60.4967585,227.215235 52.9826207,204.369712 52.9826207,204.369712 C47.1599584,189.574598 38.770408,185.640538 38.770408,185.640538 C27.1568785,177.696113 39.6458206,177.859325 39.6458206,177.859325 C52.4993419,178.762293 59.267365,191.04987 59.267365,191.04987 C70.6837675,210.618423 89.2115753,204.961093 96.5158685,201.690482 C97.6647155,193.417512 100.981959,187.77078 104.642583,184.574357 C76.211799,181.33766 46.324819,170.362144 46.324819,121.315702 C46.324819,107.340889 51.3250588,95.9223682 59.5132437,86.9583937 C58.1842268,83.7344152 53.8029229,70.715562 60.7532354,53.0843636 C60.7532354,53.0843636 71.5019501,49.6441813 95.9626412,66.2049595 C106.172967,63.368876 117.123047,61.9465949 128.00106,61.8978432 C138.879073,61.9465949 149.837632,63.368876 160.067033,66.2049595 C184.49805,49.6441813 195.231926,53.0843636 195.231926,53.0843636 C202.199197,70.715562 197.815773,83.7344152 196.486756,86.9583937 C204.694018,95.9223682 209.660343,107.340889 209.660343,121.315702 C209.660343,170.478725 179.716133,181.303747 151.213281,184.472614 C155.80443,188.444828 159.895342,196.234518 159.895342,208.176593 C159.895342,225.303317 159.746968,239.087361 159.746968,243.303333 C159.746968,246.709601 162.05102,250.70089 168.53925,249.443941 C219.370432,232.499507 256,184.536204 256,128.00106 C256,57.3066942 198.691187,0 128.00106,0 Z M47.9405593,182.340212 C47.6586465,182.976105 46.6581745,183.166873 45.7467277,182.730227 C44.8183235,182.312656 44.2968914,181.445722 44.5978808,180.80771 C44.8734344,180.152739 45.876026,179.97045 46.8023103,180.409216 C47.7328342,180.826786 48.2627451,181.702199 47.9405593,182.340212 Z M54.2367892,187.958254 C53.6263318,188.524199 52.4329723,188.261363 51.6232682,187.366874 C50.7860088,186.474504 50.6291553,185.281144 51.2480912,184.70672 C51.8776254,184.140775 53.0349512,184.405731 53.8743302,185.298101 C54.7115892,186.201069 54.8748019,187.38595 54.2367892,187.958254 Z M58.5562413,195.146347 C57.7719732,195.691096 56.4895886,195.180261 55.6968417,194.042013 C54.9125733,192.903764 54.9125733,191.538713 55.713799,190.991845 C56.5086651,190.444977 57.7719732,190.936735 58.5753181,192.066505 C59.3574669,193.22383 59.3574669,194.58888 58.5562413,195.146347 Z M65.8613592,203.471174 C65.1597571,204.244846 63.6654083,204.03712 62.5716717,202.981538 C61.4524999,201.94927 61.1409122,200.484596 61.8446341,199.710926 C62.5547146,198.935137 64.0575422,199.15346 65.1597571,200.200564 C66.2704506,201.230712 66.6095936,202.705984 65.8613592,203.471174 Z M75.3025151,206.281542 C74.9930474,207.284134 73.553809,207.739857 72.1039724,207.313809 C70.6562556,206.875043 69.7087748,205.700761 70.0012857,204.687571 C70.302275,203.678621 71.7478721,203.20382 73.2083069,203.659543 C74.6539041,204.09619 75.6035048,205.261994 75.3025151,206.281542 Z M86.046947,207.473627 C86.0829806,208.529209 84.8535871,209.404622 83.3316829,209.4237 C81.8013,209.457614 80.563428,208.603398 80.5464708,207.564772 C80.5464708,206.498591 81.7483088,205.631657 83.2786917,205.606221 C84.8005962,205.576546 86.046947,206.424403 86.046947,207.473627 Z M96.6021471,207.069023 C96.7844366,208.099171 95.7267341,209.156872 94.215428,209.438785 C92.7295577,209.710099 91.3539086,209.074206 91.1652603,208.052538 C90.9808515,206.996955 92.0576306,205.939253 93.5413813,205.66582 C95.054807,205.402984 96.4092596,206.021919 96.6021471,207.069023 Z"
                      fill="currentColor"
                    ></path>
                  </g>
                </svg>
                Outlook
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LoginCover;
