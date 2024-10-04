import css from "./Title.module.css";
import PropTypes from "prop-types";

const Title = ({ title, children }) => {
  return (
    <div className={css.titleContainer}>
      <h1 className={css.title}>{title}</h1>
      {children}
    </div>
  );
};

Title.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Title;
