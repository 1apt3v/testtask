import Pagination from 'react-bootstrap/Pagination';

function PaginationComponent({ currentPage, setCurrentPage, totalPages, setTotalPages }) {

    let items = [];

    // console.log(currentPage)


    items.push(<Pagination.Prev key='prev' onClick={() => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1)
        }
    }
    } />)


    for (let page = 1; page <= totalPages; page++) {
        items.push(
            <Pagination.Item key={page} active={page === currentPage} onClick={() => setCurrentPage(page)}>
                {page}
            </Pagination.Item>,
        );
    }

    items.push(<Pagination.Next key='next' onClick={() => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1)
        }
    }
    } />)

    return (<Pagination>{items}</Pagination>)
}

export default PaginationComponent;
