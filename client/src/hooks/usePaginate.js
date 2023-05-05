import spinnerStyle from '../components/commonStyles/Spinner.module.css'
import { useState } from 'react';
import Card from '../components/Places/Card/Card';
import cardStyles from '../components/commonStyles/AllPlaces.module.css';
import paginateStyles from '../components/commonStyles/Paginate.module.css';
import ReactPaginate from "react-paginate";
import ReactLoading from 'react-loading';

export function usePaginate(fears) {
    const [pageNumber, setPageNumber] = useState(0);
    const fearsPerPage = 3;
    const pagesVisited = pageNumber * fearsPerPage;

    const displayFears = fears
        .slice(pagesVisited, pagesVisited + fearsPerPage)
        .map((fear) => {
            return (
                <Card key={fear.id} fear={fear} />
            );
        });

    const pageCount = Math.ceil(fears.length / fearsPerPage);

    const changePage = ({ selected }) => {
        setPageNumber(selected);
    };

    return (
        <>
            {fears.length > 0 ?
                <>
                    <ul className={cardStyles.cards}>
                        {displayFears}
                    </ul>
                    <ReactPaginate
                        previousLabel={"Previous"}
                        nextLabel={"Next"}
                        pageCount={pageCount}
                        onPageChange={changePage}
                        breakLabel={'...'}
                        marginPagesDisplayed={1}
                        pageRangeDisplayed={1}
                        containerClassName={paginateStyles.paginationContainer}
                        pageLinkClassName={paginateStyles.paginationLinks}
                        pageClassName={paginateStyles.paginationListItem}
                        previousLinkClassName={paginateStyles.previousBttn}
                        nextLinkClassName={paginateStyles.nextBttn}
                        disabledClassName={paginateStyles.paginationDisabled}
                        activeClassName={paginateStyles.paginationActive}
                    />
                </>
                :
                <ReactLoading className={spinnerStyle.spinner} type="spinningBubbles" color='red' height="8rem" width="8rem" />
            }
        </>
    );
}