import svgMaker from "../../svg-maker";
import s from "./default-input.module.scss";

const DefaultInput = ({ handleChangeName }) => {
  return (
    <div className={s.input_container}>
      <input
        onChange={handleChangeName}
        type="text"
        placeholder="Search Movies or TV Shows"
      />

      {svgMaker("icon-glass", "w-[24px] h-[24px]")}
    </div>
  );
};

export default DefaultInput;
