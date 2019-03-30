import React, { Component } from "react";
import styles from "./styles.css";

export default class ReactKHI extends Component {
  render() {
    return (
      <div className={styles.main_container}>
        <img
          src="https://s3.amazonaws.com/media-p.slid.es/uploads/905781/images/5335091/pasted-from-clipboard.png"
          alt="reactkhi logo"
          className={styles.image}
        />
      </div>
    );
  }
}
