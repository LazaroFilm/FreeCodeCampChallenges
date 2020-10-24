# Data Visualisation with D3

start with `d3.` Then you can add a method:
- `.select("ul")` selects `ul` in the DOM
- `.selectAll("li")` selects all `li` in DOM
- `.data(dataset)` accesses the data stored in `dataset` and runs the rest of the methods once for each entry
- `.enter()` combined with `data` adds the missing elements to match the number of data entries
- `.append("li")` adds a `li ` to the DOM
- `.text("Hello World")` adds the text into the selected element(s).
- `.style("color", (d) => {d>20? "blue": "red"}` define the inline style of the element
- `.attr("property", (d, i))` defines attribute for the element, `d`= data, `i`= index

## SVG Shapes

All shapes must be appended to an `svg` element and need an `x` and `y` anchor point.

Home, `0,0` is in the top left corner.

### Rectangle

- `<rect>` creates a rectangle. It has 4 `attr`: `x`, `y`, `width`, `height`

- `.attr("fill", "navy")` sets the fill color of the shape

### Text

- `.text()` is used to defint the value of the text element (created with `.append("text")`)
- `.attr("fill", "blue")` sets the color of the text
- `.style()` sets all other CSS attribute of the text
- `.append("title")` can add an info bubble when the item is clicked

### Circle

Circles have 3 main attributes, `cx`, `cy` for coordinated of the center, and `r` for the radius. 

### Scaling

You create a `const xScale` and `const yScale` and assign them the scaling attributes. You can then call on those to scale your `svg`

- `.scaleLinear()` makes the scale linear
- `scale(50)` defines the scale
- `scale.domain([0, 500])` min and max values 
- `scale.range([0, 100])` the range of the scale
- `.min(dataSet, (d) => d[0])` finds the smallest value in the `dataSet`
- `.max()` same thing for largest value

```js
    const xScale = d3.scaleLinear()
                    .domain([0, d3.max(dataset, (d) => d[0])])
                    .range([padding, w - padding]);
    const yScale = d3.scaleLinear()
                     .domain([0, d3.max(dataset, (d) => d[1])])
                     .range([h-padding, padding]) //reverse Y axis
```

Remember to invert the y axis since the `0,0` is in top left for `svg` and grpahs usually have the `0,0` in the bottom left. 

### Axes

- `.axisLeft()` and `.axisBottom()` are used to define the axes with the scale on them. 
``` js
svg.append("g") //g stands for Group and can be used to render an axis.
	 .attr("transform", `transform(0, ${( h-padding )})`)
	 .call(xAxis)

```
