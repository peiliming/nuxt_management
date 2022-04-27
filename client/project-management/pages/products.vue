<template>
  <v-container fluid class="contents">
    <div class="text-h5 mb-6">商品一覧ページ</div>

    <v-row>
      <v-col cols="12">
        <v-btn color="primary"  @click="initForm()">新規</v-btn>

        <v-form ref="form" v-if="show">
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
              <v-btn color="secondary" @click="update()"
                >更新</v-btn
              >
            </v-col>
          </v-row>
        </v-form>
      </v-col>
      
    </v-row>

    <v-row>
       <v-col cols="12">
        <v-data-table class="elevation-1" :headers="headers" :items="product_list.data">
          <!-- <template v-slot:item.actions="{  }">
            <v-btn>表示</v-btn>
          </template> -->

          <template v-slot:[`item.actions`]="{ item }">
            <v-icon
              small
              class="mr-2"
              @click="select(item)"
            >
              mdi-pencil
            </v-icon>
            <v-icon
              small
            >
              mdi-delete
            </v-icon>
          </template>

        </v-data-table>
      </v-col>
    </v-row>
    
  </v-container>
</template>

<script lang="ts">
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { Component, Vue } from 'vue-property-decorator';
import { Product } from '../types';
import SampleApiService from '../services/api';

@Component
export default class Products extends Vue {
  show: boolean = false;
  public headers: any[] = [
    {
      text: '商品名',
      value: 'name',
    },
    {
      text: '内容量',
      value: 'storage',
    },
    {
      text: '商品説明',
      value: 'description',
    },
    {
      text: 'お召し上がり方',
      value: 'usage',
    },
    {
      text: '使用上の注意',
      value: 'note'
    },
    {
      text: '操作',
      value: 'actions'
    }
  ];
  //public product_list: Product | null = null; 
  public product_list: Product = {
    name: '',
    storage: '',
    description: '',
    usage: '',
    note: ''
  };
  public product: Product | null = null; 

  initForm() {
    this.show = true;
    this.product = {
      name: '',
      storage: '',
      description: '',
      usage: '',
      note: ''
    }
  }

  closeForm() {
    this.show = false;
  }

   select(data: Product) {
     this.initForm();
      this.product = data;
      this.scrollTop();
    }

    scrollTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }

  async save() {
    if (!confirm('登録しますか？')) {
      return;
    }
    await SampleApiService.create(this.product);
    this.closeForm();
    this.loadData();
  }

  async update() {
    if (!confirm('更新しますか？')) {
      return;
    }
    const productId = this.product!.id;
    await SampleApiService.update(productId, this.product);
    this.closeForm();
  }

  async mounted() {
    this.loadData();
  }

  private async loadData() {
    this.product_list = await SampleApiService.getAll();
  }
}
</script>

