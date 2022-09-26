import styled from "styled-components";
import {
  BackgroundColor,
  FontColor,
  FontSize,
  HoverColor,
  Padding,
} from "../@types/styled";

interface ButtonComponent {
  backgroundColor?: keyof BackgroundColor;
  padding?: keyof Padding;
  hoverColor?: keyof HoverColor;
  fontSize?: keyof FontSize;
  fontColor?: keyof FontColor;
}

const Button = styled.button<ButtonComponent>`
  ${(props) =>
    `background-color: ${
      props.theme.backgroundColor[props.backgroundColor || "lightorange"]
    };
    color: ${props.theme.fontColor[props.fontColor || "black"]};
    font-size: ${props.theme.fontSize[props.fontSize || "sm"]};
    padding: ${props.theme.padding[props.padding || "md"]};

    :hover {
      background-color: ${props.theme.hoverColor[props.hoverColor || "none"]};
    }
 `};

  border: none;
  border-radius: 6px;
  transition-duration: 0.2s;
`;

export default Button;
