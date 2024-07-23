

import styles from './Table.module.css'

export interface Column<T> {
    header: string
    accessor: keyof T
}

interface TableProps<T> {
    columns: Column<T>[]
    data: T[]
    handleEdit?: (data: T) => void
    handleDelete?: (data: T) => void
}
export const Table = <T,>({ columns, data, handleEdit, handleDelete }: TableProps<T>): JSX.Element => {
    return (
        <table className={styles.table}>
            <thead>
                <tr>
                    {columns.map((column, index) => (
                        <th key={index}>{column.header}</th>
                    ))}
                    {(handleEdit || handleDelete) && <th className={styles.th}>Acões</th>}

                </tr>

            </thead>
            <tbody>
                {data.map((item, index) => (
                    <tr key={index}>
                        {columns.map((column, columnindex) => (
                            column.accessor == "image" ?
                                <td key={columnindex} className={styles.td}>
                                    <img src={item[column.accessor] as string} alt="image" />
                                </td>
                                :
                                <td key={columnindex} className={styles.td}>{item[column.accessor]}</td>
                        ))}
                        {(handleEdit || handleDelete) && (
                            <td className={styles.td}>
                                {handleEdit && <button type="button" onClick={() => handleEdit(item)}>Editar</button>}
                                {handleDelete && <button type="button" onClick={() => handleDelete(item)}>Excluir</button>}
                            </td>
                        )}
                    </tr>
                ))}
                  </tbody>
            
        </table>
    )
}
export default Table