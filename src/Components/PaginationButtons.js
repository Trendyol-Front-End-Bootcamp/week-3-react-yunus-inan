import React from 'react'

const PaginationButtons = ({ setPage }) => {
    return (
        <div className="pagination-buttons">
            <button value="1" onClick={(e) => setPage(e.target.value)}>1</button>
            <button value="2" onClick={(e) => setPage(e.target.value)}>2</button>
            <button value="3" onClick={(e) => setPage(e.target.value)}>3</button>
            <button value="4" onClick={(e) => setPage(e.target.value)}>4</button>
            <button value="5" onClick={(e) => setPage(e.target.value)}>5</button>
        </div>
    )
}

export default PaginationButtons
