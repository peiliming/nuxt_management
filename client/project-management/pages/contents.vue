<template>
  <v-container fluid class="contents">
    <div class="text-h5 mb-6">商品登録ページ</div>
    <v-form ref="form">
      <v-row align="center">
        <v-col cols="6">
          <v-text-field
            label="商品名"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row align="center">
        <v-col cols="6">
          <v-text-field
            label="内容量"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row align="center">
        <v-col cols="6">
          <v-text-field
            label="商品説明"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row align="center">
        <v-col cols="6">
          <v-text-field
            label="お召し上がり方"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row align="center">
        <v-col cols="6">
          <v-text-field
            label="使用上の注意"
          ></v-text-field>
        </v-col>
      </v-row>

      <v-row
        ><v-col cols="6">
          <v-btn color="secondary"
            >登録</v-btn
          >
          <v-btn color="secondary"
            >保存</v-btn
          >
        </v-col>
      </v-row>
    </v-form>

  </v-container>
</template>

<script lang="ts">
export default {
  name: 'AddProductPage'
}
</script>
