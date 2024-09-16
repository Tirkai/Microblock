import { Component, JSX } from "solid-js";
import styles from "./Card.module.css";

interface CardProps {
  children: JSX.Element;
}

export const Card: Component<CardProps> = (props) => {
  return (
    <div class={styles.root}>
      {props.children} <button class="agnButton">Action</button>
    </div>
  );
};
