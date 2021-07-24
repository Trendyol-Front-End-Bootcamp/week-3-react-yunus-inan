import React from 'react'

const PaginationButtons = ({ page, setPage, paginationNext }) => {
    const pagePlusCounter = () => {
        if (paginationNext.pages === page) {
            try {
                page(paginationNext.pages);
            } catch {
                alert("Maksimum sayfaya ulaştın");
            }

        } else {
            setPage(page + 1);
        }

    }
    const pageNegativeCounter = () => {
        if (paginationNext.pages === 0) {
            try {
                page(paginationNext.pages);
            } catch {
                alert("Sayfalama daha geriye gidemez");
            }

        } else {
            setPage(page - 1);
        }

    }
    return (
        <div className="pagination-buttons">
            {!paginationNext.prev ?
                <button className="pointer-none-button"> Prev </button>
                :
                <button onClick={pageNegativeCounter}> Prev </button>}


            <span>{page} / {paginationNext.pages} </span>



            {!paginationNext.next ?
                <button className="pointer-none-button"> Next </button>
                :
                <button onClick={pagePlusCounter}> Next </button>}
        </div>
    )
}

export default PaginationButtons
