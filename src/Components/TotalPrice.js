function TotalPrice({total}) {
  return (
    <div>
      <h1 >
        {total()}$
      </h1>
    </div>
  );
}

export default TotalPrice;
