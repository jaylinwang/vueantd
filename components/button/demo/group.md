### 按钮组合

可以将多个 `v-button` 放入 `v-button-group` 的容器中。

::: demo

```html
<template>
<div>
  <p>
    <v-button-group>
      <v-button type="primary">
        Left
      </v-button>
      <v-button type="primary">
        Right
      </v-button>
    </v-button-group>
    <v-button-group>
      <v-button type="primary">
        Left
      </v-button>
      <v-button type="primary">
        Center
      </v-button>
      <v-button type="primary" disabled>
        Right
      </v-button>
    </v-button-group>
  </p>
  <p>
    <v-button-group>
      <v-button>
        Left
      </v-button>
      <v-button>
        <v-icon type="down"></v-icon>
      </v-button>
    </v-button-group>
    <v-button-group>
      <v-button>
        Left
      </v-button>
      <v-button disabled>
        Center
      </v-button>
      <v-button>
        Right
      </v-button>
    </v-button-group>
  </p>
  <p>
    <v-button-group>
      <v-button type="dashed">
        Left
      </v-button>
      <v-button type="dashed">
        Right
      </v-button>
    </v-button-group>
    <v-button-group>
      <v-button type="dashed">
        Left
      </v-button>
      <v-button type="dashed">
        Center
      </v-button>
      <v-button type="dashed">
        Right
      </v-button>
    </v-button-group>
  </p>
  </div>
</template>
```
