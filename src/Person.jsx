const Person = (props) => {
    const{id,name,image,age}=props;
  return (
    <>
      <article className="person">
        <img src={image} />
        <div>
          <h4>{name}</h4>
          <p>{age} Years</p>
        </div>
        
      </article>
    </>
  );
}
export default Person;