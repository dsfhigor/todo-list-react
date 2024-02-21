const Filter = ({ filter, setFilter, setSort }) => {
    return (
        <div className="filter">
            <h2>Filtrar: </h2>
            <div className="filter-options">
                <div>
                    <p>Status: </p>
                    <select value={filter} onChange={(e) => setFilter(e.target.value)}>
                        <option value="All">Todas</option>
                        <option value="Completed">Completas</option>
                        <option value="Incomplete">Incompleta</option>

                    </select>
                </div>
                <div>
                    <p>Ordem Alfabética:</p>
                    <button onClick={() => setSort("Asc")}>ASC</button>
                    <button onClick={() => setSort("Desc")}>DESC</button>
                </div>
            </div>
        </div>
    )
}

export default Filter