<template>
  <div class="app">
    <my-header customFixed customTitle="通讯录">
      <button @touchstart="backBtn" slot="left">返回</button>
      <button @touchstart="homeBtn" slot="right">主页</button>
    </my-header>
    <my-list :userData="usreData"></my-list>
  </div>
</template>

<script>
  var usreData = [{
      index: "A",
      users: [{
          name: "a1",
          tel: "13011111111"
        },
        {
          name: "a2",
          tel: "13011111112"
        },
        {
          name: "a3",
          tel: "13011111113"
        }
      ]
    },
    {
      index: "B",
      users: [{
          name: "b1",
          tel: "13111111114"
        },
        {
          name: "b2",
          tel: "13111111115"
        },
        {
          name: "b3",
          tel: "13111111116"
        }
      ]
    },
    {
      index: "C",
      users: [{
          name: "c1",
          tel: "13111111117"
        },
        {
          name: "c2",
          tel: "13111111118"
        },
        {
          name: "c3",
          tel: "13111111119"
        }
      ]
    },
    {
      index: "D",
      users: [{
          name: "d1",
          tel: "13111111110"
        },
        {
          name: "d2",
          tel: "13111111111"
        },
        {
          name: "d3",
          tel: "13111111112"
        }
      ]
    },
    {
      index: "E",
      users: [{
          name: "e1",
          tel: "13111111113"
        },
        {
          name: "e2",
          tel: "13111111114"
        },
        {
          name: "e3",
          tel: "13111111115"
        }
      ]
    }
  ];
  
  export default {
    name: "app",
    data() {
      return {
        usreData: usreData
      };
    },
    methods: {
      backBtn: function() {
        alert(123);
      },
      homeBtn: function() {
        alert(456);
      }
    }
  };
</script>


<style>
  * {
    margin: 0;
    padding: 0;
  }
  
  li {
    list-style: none;
  }
  
  body {}
</style>
