import _ from "lodash";
interface Props {
    totalPosts:any,
    pageNumber:any,
    pageSize:any
}
export const paginate = ({totalPosts, pageNumber, pageSize}:Props) => {
    const startIndex = (pageNumber - 1) * pageSize;
    return _(totalPosts).slice(startIndex).take(pageSize).value();
};