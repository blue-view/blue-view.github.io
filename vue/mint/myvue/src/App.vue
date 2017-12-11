<template>
  <div id="app">
    <mt-header title="通讯录" fixed>
      <mt-button icon="back" slot="left">返回</mt-button>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <mt-index-list>
      <mt-index-section :index="item.index" v-for="(item,key) in usreData" :key="key">
        <mt-cell @click.native="telAlert(user.tel)" :title="user.name" v-for="(user,userkey) in item.users" :key="userkey"></mt-cell>
      </mt-index-section>
    </mt-index-list>
  </div>
</template>

<script>
  var usreData = [{
      "index": "A",
      "users": [{
          "name": "a1",
          "tel": "13011111111"
        },
        {
          "name": "a2",
          "tel": "13011111112"
        },
        {
          "name": "a3",
          "tel": "13011111113"
        },
      ]
    },
    {
      "index": "B",
      "users": [{
          "name": "b1",
          "tel": "13111111114"
        },
        {
          "name": "b2",
          "tel": "13111111115"
        },
        {
          "name": "b3",
          "tel": "13111111116"
        },
      ]
    },
    {
      "index": "C",
      "users": [{
          "name": "c1",
          "tel": "13111111117"
        },
        {
          "name": "c2",
          "tel": "13111111118"
        },
        {
          "name": "c3",
          "tel": "13111111119"
        },
      ]
    },
    {
      "index": "D",
      "users": [{
          "name": "d1",
          "tel": "13111111110"
        },
        {
          "name": "d2",
          "tel": "13111111111"
        },
        {
          "name": "d3",
          "tel": "13111111112"
        },
      ]
    },
    {
      "index": "E",
      "users": [{
          "name": "e1",
          "tel": "13111111113"
        },
        {
          "name": "e2",
          "tel": "13111111114"
        },
        {
          "name": "e3",
          "tel": "13111111115"
        },
      ]
    },
  ];
  import { MessageBox } from 'mint-ui';
  export default {
    name: "app",
    data() {
      return {
        usreData: usreData
      };
    },
    methods: {
      telAlert(tel) {
        MessageBox({
          title: '呼叫',
          message: 'tel',
          showCancelButton: true
        }).then(function(){
          alert(111);
        });
      }
    }
  
  };
</script>

<style>
  
</style>
