import React, { useState } from "react";

function CustomizeImage() {
  const [url, setUrl] = useState("");
  const [size, setSize] = useState(33);

  function handleChangeUrl(event) {
    setUrl(event.target.value);
  }

  function handleChangeSize(event) {
    setSize(event.target.value);
  }

  return (
    <div>
      <h1>Customize Image</h1>
      <input type="text" value={url} onChange={handleChangeUrl} />
      <input
        type="range"
        value={size}
        onChange={handleChangeSize}
        min="0"
        max="200"
      />
      <p>
        {size} X {size} px
      </p>
      {!url ? (
        ""
      ) : (
        <img src={url} alt="image to resize" height={size} width={size} />
      )}
    </div>
  );
}

export default CustomizeImage;
