function ListGroup() {
  let items = ["a", "b", "c", "d"];
//   items = [];

  return (
    <>
    {items.length === 0 ? <h1>No items</h1> : <>
        <h1>List</h1>
        <ul className="list-group">
            {items.map((e)=>(
                <li key={e}>{e}</li>
            ))}
        </ul>
    </>}
    </>
  );
  
}

export default ListGroup;
