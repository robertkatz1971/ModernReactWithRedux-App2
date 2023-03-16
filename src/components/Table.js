import { Fragment } from "react";

const Table = ({data, config, getKey}) => {

    const renderedRows = data.map((row) => {

        const renderedCells = config.map((column) => {
            return (
                <td key={column.label} className="p-3">{column.render(row)}</td>
            );
        });

        return (
            <tr className="border-b" key={getKey(row)}>
                {renderedCells}
            </tr>    
        )
    });

    const renderHeaders = config.map((column) => {
            if (column.header) {
                return <Fragment key={column.label}>{column.header()}</Fragment>
            }
            return <th key={column.label}>{column.label}</th>
    });

    return (
        <table className="table-auto border-spacing-2" >
            <thead>
                <tr className="border-b-2">
                    {renderHeaders}
                </tr>
            </thead>
            <tbody>
               {renderedRows}
            </tbody>
        </table>
    )
};

export default Table;