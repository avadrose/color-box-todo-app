function Box({ id, width, height, backgroundColor, removeBox }) {
  const style = {
    width: `${width}px`,
    height: `${height}px`,
    backgroundColor
  };

  return (
    <div>
      <div
        data-testid="box"
        style={style}
      />

      <button onClick={() => removeBox(id)}>
        X
      </button>
    </div>
  );
}

export default Box;