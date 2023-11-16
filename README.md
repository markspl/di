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

## Prompt 2

```
Animation is working when I hover the "card" element, but there is no duration. Also, image does not get bigger when mouse is on the element: element size is the same, but image will appear without cropping, making it to look smaller.
```

## Response 2

````
I apologize for the oversight. It seems I missed a crucial detail in the implementation. To achieve the desired effect where the background image gets 10% bigger without affecting the size of the "card" div, you should adjust the `background-size` property using percentages. Here's the corrected CSS:

```css
.card {
  @extend %roundedBox;
  display: flex;
  background-size: 100% 100% !important; /* Specify initial background size */
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
    background-size: 110% 110% !important; /* Increase both width and height on hover */
  }
}
```

Here, I modified the `background-size` property in both the default and `:hover` states to specify both the width and height percentages. The `background-size: 100% 100%` ensures that the image covers the entire "card" div, and on hover, it increases by 10% both horizontally and vertically.

Please give this a try, and it should produce the intended hover effect.
````

## Notes 2

-   Animation is working
-   Image is narrow

![alt](./documents/Screenshot%202023-11-16%20183913.png)
![alt](./documents/Screenshot%202023-11-16%20183932.png)
