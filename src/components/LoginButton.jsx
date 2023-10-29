import PropTypes from "prop-types";

function LoginButton({ children, logo }) {
  return (
    <button
      className={"login_btn flex flex-row items-center justify-center gap-x-5"}
    >
      {logo} {children}
    </button>
  );
}
LoginButton.propTypes = {
  children: PropTypes.string,
  logo: PropTypes.element,
};
export default LoginButton;
