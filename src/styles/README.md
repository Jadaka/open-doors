# SASS Project Documentation

The app's shared sass component (mixins, variables, etc.) are available in `src/styles/`.

In order to utilize a particular sass component, be sure to import the necessary scss partial.

Example:

```scss
// inside of App.scss
@import './styles/colors';

.someClass {
  background-color: palette("darkgray");
  
  &:hover {
    background-color: palette("darkgray", -10);
  }
}
```

## Colors

Use the `palette` function to retrieve a color from the preset color scheme.

The preset color scheme is defined inside of `src/styles/_vars.scss`.

```scss
.someClass {
  color: palette("accent-pink");
  background-color: palette("darkgray");
}
```

The available base colors are:

```
white
gray
darkgray
accent-pink
accent-blue
```

**NOTE: When using the palette function, be sure to surround the color names with `""` so that the standard HTML color names (like `white`, `gray`, `darkgray`) do not get interprolated into Hex values.**

In addition, the `palette` function accepts a positive or negative integer as the second argument.

```scss
palette("accent-blue", 10); // @returns "accent-blue" at 10% lighter
palette("accent-blue", -10); // @returns "accent-blue" at -10% lighter
```

## Media Queries

Media queries should be written using the `mq` mixin defined in `src/styles/mixins/_mq.scss`, and they should be written within the component directly for clarity:

The `mq` mixin uses the `$_breakpoints` map defined inside of `src/styles/mixins/_vars.scss`. The available sizes that are accepted in the `mq` mixin are:

```
short : 480px
tall  : 768px
grande: 1028px
venti : 1200px
```

**Example usage:**

```scss
// someComponent.scss
.logo {
  font-size: 14px;

  @include mq(short) {
    font-size: 16px;
  }

  @include mq(tall) {
    font-size: 18px;
  }

  @include mq(grande) {
    font-size: 22px;
  }

  @include mq(venti) {
    font-size: 26px;
  }
}
```

Use the `mq` mixin to include a specific media query for a component style.
