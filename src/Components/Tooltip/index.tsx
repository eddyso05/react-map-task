import React, { FC } from "react";

interface Props {
  feature: any;
}

const Tooltip: FC<Props> = ({ feature }) => {
  const { id } = feature.properties;

  return (
    <div id={`tooltip-${id}`}>
      <strong>Source Layer:</strong> {feature.layer["source-layer"]}
      <br />
      <strong>Layer ID:</strong> {feature.layer.id}
    </div>
  );
};

export default Tooltip;
