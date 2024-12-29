import TableRow from "./TableRow";

const AdditionalInfo = ({ additionInfo }) => {
    const keyValuePairsoFInfo = Object.entries(additionInfo);
    return (
        <table class="border-collapse border border-slate-400 ... w-full">

            <tbody>
                {
                    keyValuePairsoFInfo?.map(([key, value]) => <TableRow property={key} value={value}></TableRow>)
                }


            </tbody>
        </table>
    );
};

export default AdditionalInfo;
