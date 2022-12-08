import { ButtonContainer } from "./styles";
import { IButtonProps } from "./types";

const Button = ({ title, disabled, onClick }: IButtonProps) => {
  return (
    <ButtonContainer disabled={true} onClick={onClick}>
      {title}
    </ButtonContainer>
  );
};

export default Button;