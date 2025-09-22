import { useCallback, useState } from "react";
export type FetchDataFunction<T> = (limit: number, offset: number) => Promise<{
    data: T[];
    totalReg: number;
    limit: number;
    paginate: number;
}>;
interface GenericComponentProps<T> {
    fetchData: FetchDataFunction<T>;
    initialLimit?: number;
    initialOffset?: number;
}
const usePaginator = <T,>({ fetchData }: GenericComponentProps<T>) => {

    const [pages, setPages] = useState<number[]>([]);
    const [pagination, setPagination] = useState<number[]>([]);
    const [limit, setLimit] = useState(10);
    const [offset, setOffset] = useState(0);
    const [totalReg, setTotalReg] = useState(0);
    const [start, setStart] = useState(0);
    const [end, setEnd] = useState(3);

    const fetchPagination = useCallback(async () => {
        const data = await fetchData(limit, offset).catch((error: any) => console.error(error));

        if (data) {
            const offsetValues = Array.from({ length: data.paginate }, (_, index) => index * data.limit);
            setPages(offsetValues);
            setPagination(offsetValues);
            setLimit(data.limit);
            setTotalReg(data.totalReg);
            console.log(totalReg)
        }
    }, [limit, offset, fetchData]);

    const changeOffset = (offset: number) => {
        setOffset(Number(offset));
    };
    const changeLimit = (limit: number) => {
        setLimit(limit);
        setOffset(0);
        setStart(0);
        setEnd(3);
    };
    const nextPagination = () => {
        const index = pages.indexOf(offset);
        if (index + 1 < pages.length) {
            changeOffset(offset === 0 ? (index + 1) * limit : offset + limit);
        }
        if (pagination.indexOf(offset) + 1 === end && index + 1 !== pages.length) {
            setStart(end);
            setEnd(end + 3);
        }
    };

    const previousPagination = () => {
        if (offset > 0) changeOffset(offset - limit);
        if (offset < 0) changeOffset(0);
        if (pagination.indexOf(offset) === start && offset > 0) {
            setStart(start - 3);
            setEnd(end - 3);
        }
    };

    return {
        limit,
        offset,
        totalReg,
        pages,
        pagination,
        start,
        end,
        previousPagination,
        nextPagination,
        changeOffset,
        changeLimit,
        fetchPagination,
    };


}

export default usePaginator;