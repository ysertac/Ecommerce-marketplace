import CryptoJS from "crypto-js";

const Gravatar = (props) => {
  const { email } = props;
  const sha256Email = CryptoJS.SHA256(email).toString(CryptoJS.enc.Hex);
  const gravatarUrl = `https://www.gravatar.com/avatar/${sha256Email}`;
  return (
    <img
      src={gravatarUrl}
      alt="User Avatar"
      className="rounded-full max-sm:w-1/3 w-1/4"
    />
  );
};

export default Gravatar;
