import Pagination from 'react-bootstrap/Pagination';

function PaginationComponent() {
  return (
    <Pagination>
      <Pagination.First />
      <Pagination.Prev />
      <Pagination.Item active>{1}</Pagination.Item>
      <Pagination.Item>{2}</Pagination.Item>
      <Pagination.Ellipsis />

      <Pagination.Item>{20}</Pagination.Item>
      <Pagination.Next />
      <Pagination.Last />
    </Pagination>
  );
}

export default PaginationComponent;




// example

// let active = 2;
// let items = [];
// for (let number = 1; number <= 5; number++) {
//   items.push(
//     <Pagination.Item key={number} active={number === active}>
//       {number}
//     </Pagination.Item>,
//   );
// }

// const paginationBasic = (
//   <div>
//     <Pagination>{items}</Pagination>
//     <br />

//     <Pagination size="lg">{items}</Pagination>
//     <br />

//     <Pagination size="sm">{items}</Pagination>
//   </div>
// );

// render(paginationBasic);