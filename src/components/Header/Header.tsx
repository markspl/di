import { useCallback, useEffect, useState } from 'react';
import { TypeHeaderFields } from '../../contentful';
import fetchHeader from '../../functions/fetchHeader';

import './Header.scss';

const Header = () => {
    const [data, setData] = useState<TypeHeaderFields>();

    const getHeader = useCallback(async () => {
        setData(await fetchHeader());
    }, []);

    useEffect(() => {
        void getHeader();
    }, [getHeader]);

    const imgAddress = data?.image.fields.file.url;

    return (
        data && (
            <div className="header">
                <div
                    className="background-img"
                    style={{
                        background: `url(${imgAddress}) no-repeat center` as
                            | string
                            | undefined,
                    }}
                />
                <div className="content">
                    <h1>{data.title}</h1>
                    <p>{data.description}</p>
                </div>
            </div>
        )
    );
};

export default Header;
