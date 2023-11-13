import style from "./header.module.scss";

const Header = ({ onSwitchPage }) => {
  return (
    <header className={style.header}>
      <div className={style.test_container}></div>
    </header>
  );
};

export default Header;
