import { Pagination } from 'react-bootstrap';
import { FetchDataFunction } from './Paginator.logic';

interface PaginationComponentProps<T> {

    pages: number[];
    pagination: number[];
    offset?: number;
    totalReg?: number;
    start?: number;
    end?: number;
    previousPagination: () => void;
    nextPagination: () => void;
    changeOffset: (offset: number) => void;
}

const PaginationComponent = <T,>({
    pages,
    pagination,
    offset,
    start,
    end,
    previousPagination,
    nextPagination,
    changeOffset,
}: PaginationComponentProps<T>) => {
    const paginationItemStyle = (page: any) => ({
        color: offset === page ? 'white' : '#212529',
        backgroundColor: offset === page ? '#212529' : 'white',
        boderColor: 'white',
    });

    return (
        <Pagination>
            <Pagination.Prev linkStyle={{ color: '#212529' }} onClick={() => previousPagination()} />
            {/* {pages.length > 3 && <Pagination.Ellipsis linkStyle={{ color: '#212529' }} className="disabled" />} */}
            {pages.slice(start, end).map((page, index) => (
                <Pagination.Item
                    key={index}
                    linkStyle={paginationItemStyle(page)}
                    onClick={() => changeOffset(page)}
                    active={offset === page}
                >
                    {pagination.indexOf(page) + 1}
                </Pagination.Item>
            ))}
            {pages.length > 3 && <Pagination.Ellipsis linkStyle={{ color: '#212529' }} className="disabled page-item" />}
            <Pagination.Next linkStyle={{ color: '#212529' }} onClick={() => nextPagination()} />
        </Pagination>
    );
};

export default PaginationComponent;
