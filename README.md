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

## Prompt 2

```
The hover transition works, but image looks too narrow. element's aspect ratio is not the same as image's.
```

## Response 2

````
GitHub Copilot: If the aspect ratio of the image is not the same as the element, you can use `background-size: cover;` to make sure the image covers the entire element while maintaining its aspect ratio. However, this might cut off some parts of the image if the aspect ratios are significantly different.

Here's how you can modify your CSS:

```css
.card {
    /* ...existing styles... */
    background-size: cover !important;
    transition: transform 0.5s ease-in-out;
}

.card:hover {
    transform: scale(1.1);
}
```

In this case, instead of enlarging the background image, we're enlarging the whole card. The `transform: scale(1.1);` will make the card 10% bigger when hovered over. The transition will still last 0.5 seconds, and the `ease-in-out` value will still give a smooth effect.

Remember to ensure that the image does not repeat itself, or else the hover effect might not work as expected. If the image is repeating, you can add `background-repeat: no-repeat;` to the `.card` class.
````

## Notes 2

-   uses `Cards.scss` as reference file
-   hover animation works
    -   but it transforms the whole element and not the image
    -   end result looks better than what I asked for

![result2](./documents/Screenshot%202023-11-22%20211919.jpg)

## Prompt 3

```
Now the image looks correct, and hover animation works. But the whole element scales up by 1.1, and not only the background image.
```

## Response 3

````
GitHub Copilot: To scale only the background image, you can use a pseudo-element to hold the background image. This way, the hover effect will only apply to the background image and not the entire card. Here's how you can modify your CSS:

```scss
.card {
    /* ...existing styles... */
    position: relative;
    overflow: hidden;
    background: none;
}

.card::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: inherit;
    background-size: cover !important;
    transition: transform 0.5s ease-in-out;
    z-index: -1;
}

.card:hover::before {
    transform: scale(1.1);
}
```

In this case, we're creating a pseudo-element `::before` for the `.card` element. This pseudo-element will inherit the background from the `.card` element, and we apply the hover effect to this pseudo-element. The `overflow: hidden;` on the `.card` element will ensure that the scaled background image does not overflow the card.
````

## Notes 3

-   Image is set as cover and full sized (too big)
-   Hover animation does not work anymore

![result3](./documents/Screenshot%202023-11-22%20213347.jpg)

## Fix

```
.card {
    @extend %roundedBox;
    display: flex;
    background-size: auto 100% !important;
    transition: background-size 0.5s ease-in-out;
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

.card:hover {
    background-size: auto 110% !important;
}
```
