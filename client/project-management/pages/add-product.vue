<template>
  <v-container fluid class="contents">
    <div class="text-h5 mb-6">商品登録ページ</div>
    <v-form ref="form">
      <v-row align="center">
        <v-col cols="6">
          <v-text-field
            label="商品名"
            v-model="product.name"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row align="center">
        <v-col cols="6">
          <v-text-field
            label="内容量"
            v-model="product.storage"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row align="center">
        <v-col cols="6">
          <v-text-field
            label="商品説明"
            v-model="product.description"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row align="center">
        <v-col cols="6">
          <v-text-field
            label="お召し上がり方"
            v-model="product.usage"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row align="center">
        <v-col cols="6">
          <v-text-field
            label="使用上の注意"
            v-model="product.note"
          ></v-text-field>
        </v-col>
      </v-row>

      <v-row
        ><v-col cols="6">
          <v-btn color="secondary" @click="save()"
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
import { defineComponent, ref, useAsync, useContext } from '@nuxtjs/composition-api';
import { Component, Vue } from 'vue-property-decorator';
import axios from '@nuxtjs/axios';
import { Product } from '../types';
import SampleApiService from '../services/api';

@Component
export default class Contents extends Vue {
  public product: Product = {
    name: '',
    storage: '',
    description: '',
    usage: '',
    note: ''
  };
  computed() {

  }
  save() {
    SampleApiService.create(this.product);
  }

}
</script>