# 01/create-style-animation

## Bard

-   2023-11-16
-   Data: trained with data collected in 2022
    -   _"continuously trained on new data"_ -Bard
-   "Decoder-only generative model"

### Käyttöehdot:

-   Date: 2023-11-16
-   [Käyttöehdot](./documents/bard-käyttöehdot.txt)

## Prompt

````
I am trying to create an hover animation for my element. I am using React.

Requirements:
I have an class element called "card". When I hover the element, it should make background image 10% bigger.
Animation should not affect to the size of the "card" div. Animation duration should be 0.5s.

When mouse is moved away, the background image size should change back to normal.

I want to change CSS file only.

Code:
```
return (
    <div className="cards">
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
```

Style:
```
.card {
	@extend %roundedBox;
	display: flex;
	background-size: cover !important;
	padding: 50px 0 0;
	width: 400px;
	min-height: 500px;

	&-inner {
		align-self: flex-end;
		backdrop-filter: blur(8px);
		padding: 0 50px;
	}

	&-title {
		text-transform: uppercase;
	}

	&-text,
	&-title {
		color: white;
	}
}
```
````

## Response

-   Date: 2023-11-16

```
I can't create images yet so I'm not able to help you with that.
```

## Notes

-   Does not understand the prompt
-   Regenerating response does not help

![bard](./documents/Screenshot%202023-11-16%20193020.jpg)

## Prompt 2

```
I am not asking to generate images. I am looking for how to create animation on my React webpage with CSS animations.
```

## Result 2

```
I can't create images yet so I'm not able to help you with that.
```

## Prompt 3

```
Do not generate or create images. Give me a response, which includes Cascading Style Sheets (CSS)  information. I want only text based response.
```

## Result 3

```
I can't create images yet so I'm not able to help you with that.
```
