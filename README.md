# 01/create-style-animation

## GitHub Copilot

-   2023-11-22
-   GPT-3

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

-   Date: 2023-11-22

````
GitHub Copilot: To achieve the hover effect you want, you can use CSS transitions and transforms. Here's how you can modify your CSS:

```css
.card {
    /* ...existing styles... */
    background-size: 100% 100% !important;
    transition: background-size 0.5s ease-in-out;
}

.card:hover {
    background-size: 110% 110% !important;
}
```

This will make the background image of the `.card` element 10% bigger when hovered over, and the transition will last 0.5 seconds. The `ease-in-out` value makes the transition speed gradually increase at the start and decrease at the end, giving a smooth effect.

Remember to ensure that the image does not repeat itself, or else the hover effect might not work as expected. If the image is repeating, you can add `background-repeat: no-repeat;` to the `.card` class.
````

## Notes

-   chat feature uses the file as reference
-   hover works
-   image is too narrow because 100% 100% style

![UI](./documents/Screenshot%202023-11-22%20150829.jpg)
![result](./documents/Screenshot%202023-11-22%20150935.jpg)
