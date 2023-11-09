import { useCallback, useEffect, useState } from 'react';
import { client } from '../../client';

import './Header.scss';

interface IHeader {
    title: string;
    description: string;
    image: {
        fields: {
            file: {
                url: string;
            };
        };
    };
}

const Header = () => {
    const [data, setData] = useState<IHeader>();

    const getHeader = useCallback(async () => {
        try {
            const response = await client.getEntries({
                content_type: 'header',
            });

            console.log(response);
            const data = response.items[0].fields as IHeader;

            setData(data);
        } catch (error) {
            console.log(error);
        }
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
