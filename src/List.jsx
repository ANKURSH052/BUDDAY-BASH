import Person from "./Person";

const List = (props) => {
  const people = props.data;
  return (
    <>
      {people.map((p) => (
        <Person key={p.id} {...p} />
      ))}
    </>
  );
};
export default List;
