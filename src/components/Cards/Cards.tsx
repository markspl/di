import { useEffect, useState } from 'react';
import fetchCards from '../../functions/fetchCards';
import { TypeCardsFields } from '../../contentful';

import './Cards.scss';

function Cards() {
    const [data, setData] = useState<TypeCardsFields>();

    const fetchData = () => {
        fetchCards()
            .then((result) => {
                const data = result!;
                setData(data);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    useEffect(() => {
        fetchData();
    }, []);

    const cards = data?.cards;

    return (
        <div className="cards" data-testid="cards">
            {cards?.map((card) => {
                return (
                    <div
                        className="card"
                        key={card.fields.title}
                        style={{
                            background: `url(${card.fields.image?.fields.file.url}) no-repeat center`,
                        }}
                    >
                        {card.fields.title && card.fields.description && (
                            <div className="card-inner">
                                <div className="card-title">
                                    {card.fields.showTitle && (
                                        <h1>{card.fields.title}</h1>
                                    )}
                                </div>
                                <div className="card-text">
                                    <p>{card.fields.description}</p>
                                </div>
                            </div>
                        )}
                    </div>
                );
            })}
        </div>
    );
}

export default Cards;
