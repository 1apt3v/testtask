import Pagination from 'react-bootstrap/Pagination';

function PaginationComponent({ currentPage, setCurrentPage, totalPages, setTotalPages }) {

    let items = [];

    // console.log(currentPage)

    for (let page = 1; page <= totalPages; page++) {
        items.push(
            <Pagination.Item key={page} active={page === currentPage} onClick={() => setCurrentPage(page)}>
                {page}
            </Pagination.Item>,
        );
    }

    return (<Pagination>
        <Pagination.Prev key='prev' onClick={() => {
            if (currentPage > 1) {
                setCurrentPage(currentPage - 1)
            }
        }
        } />
        <div className='pagination__pages'>
            {items}
        </div>
        <Pagination.Next key='next' onClick={() => {
            if (currentPage < totalPages) {
                setCurrentPage(currentPage + 1)
            }
        }
        } />
    </Pagination>)
}

export default PaginationComponent;
