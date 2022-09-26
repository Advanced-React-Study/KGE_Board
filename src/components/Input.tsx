import styled from "styled-components";
import {
  BackgroundColor,
  FontColor,
  FontSize,
  Padding,
} from "../@types/styled";

interface InputComponent {
  backgroundColor?: keyof BackgroundColor;
  padding?: keyof Padding;
  fontSize?: keyof FontSize;
  fontColor?: keyof FontColor;
}

const Input = styled.input<InputComponent>`
  ${(props) =>
    `background-color: ${
      props.theme.backgroundColor[props.backgroundColor || "lightgrey"]
    };
    color: ${props.theme.fontColor[props.fontColor || "black"]};
    font-size: ${props.theme.fontSize[props.fontSize || "sm"]};
    padding: ${props.theme.padding[props.padding || "md"]};
 `};

  outline: none;
  border: none;
  border-radius: 6px;
`;

export default Input;
