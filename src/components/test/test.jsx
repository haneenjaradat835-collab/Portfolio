import React from "react";
import * as motion from "motion/react-client";
import "./test.scss";

function Test() {
  return (
    <div>
      <h1>helo test</h1>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.4,
          scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
        }}
        className="box"
      >
        ffffffffffff
      </motion.div>
    </div>
  );
}

export default Test;
