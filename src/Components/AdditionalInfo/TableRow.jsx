
const TableRow = ({ property, value }) => {
    return (
        <tr className="w-full">
            <td className="border w-1/3  p-3 px-5 font-semibold border-slate-300 ...">{property}</td>
            <td className="border p-3 px-5 w-2/3 border-slate-300 ...">{value}</td>
        </tr>
    );
};

export default TableRow;