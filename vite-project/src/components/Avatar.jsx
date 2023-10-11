function Avatar ({image, firstName, lastName}) {
 
  return (
    <div>
      <img src = {image} alt = {firstName} />
      <p>{firstName} {lastName}</p>
    </div>
  );
}

export default Avatar;