# 01/create-style-animation

## ChatGPT

-   2023-11-16
-   GPT-3.5
-   Data: up to Jan 2022 (?)

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

````
To achieve the hover animation for your "card" element in React with the specified requirements, you can add a CSS class for the hover effect and use the `:hover` pseudo-class. Additionally, you can utilize the `transition` property to control the animation duration. Here's the modified CSS code:

```css
.card {
  @extend %roundedBox;
  display: flex;
  background-size: cover !important;
  padding: 50px 0 0;
  width: 400px;
  min-height: 500px;
  transition: background-size 0.5s ease-in-out; /* Added transition property */

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

  &:hover {
    background-size: 110% !important; /* Increase background size on hover */
  }
}
```

In this code, I added the `transition` property to control the animation duration for the `background-size` property. The `ease-in-out` timing function provides a smooth transition effect. The `:hover` selector is used to define the styles that will be applied when the mouse hovers over the "card" element.

Make sure to adjust the `background-size` and other values according to your design preferences.
````

## Notes

-   Instant animation

![without hover](./documents/Screenshot%202023-11-16%20182024.png)
![hover 1](./documents/Screenshot%202023-11-16%20182141.png)
![hover 2](./documents/Screenshot%202023-11-16%20182211.png)
