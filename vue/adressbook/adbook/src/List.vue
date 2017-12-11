<template>
  <div id="list">
    <ul class="list_user" ref="listUser" @touchmove="bMove==true">
      <li v-for="(item,key) in userData" :key="key">
        <p>{{item.index}}</p>
        <ul>
          <li @touchend="showTel(user.tel)" v-for="(user,key) in item.users" :key="key">{{user.name}}</li>
        </ul>
      </li>
    </ul>
    <ul class="list_index" ref="listIndex">
      <li v-for="(item,key) in userIndex" @touchstart="setSroll" :key="key">{{item}}</li>
    </ul>
  </div>
</template>

<script>
import myAlert from './alert.js'
  export default {
    name: "my-list",
    props: {
      "userData": {
        type: Array,
        default: function() {
          return [];
        }
      }
    },
    computed: {
      userIndex: function() {
        return this.filterIndex(this.userData);
      }
    },
    data: function() {
      return {
        bMove: false
      }
    },
    methods: {
      filterIndex: function(data) {
        var result = [];
        for (var i = 0; i < data.length; i++) {
          if (data[i].index) {
            result.push(data[i].index);
          }
        }
        return result;
      },
      setListIndex: function() {
        var iH = this.$refs.listIndex.offsetHeight;
        this.$refs.listIndex.style.marginTop = -iH / 2 + "px";
      },
      setSroll: function(ev) {
        var aP = this.$refs.listUser.getElementsByTagName("p");
        console.log(ev.target.innerHTML);
        for (var i = 0; i < aP.length; i++) {
          if (aP[i].innerHTML == ev.target.innerHTML) {
            // console.log(aP[i].offsetTop);
            document.documentElement.scrollTop = aP[i].offsetTop;
          }
        }
      },
      showTel: function(tel) {
        if (!this.bMove) {
          // console.log(tel);
          // busVM.$emit("showAlert",tel);
          myAlert({
            title: '呼叫',
            body: tel,
            confirm: function() {
              document.body.removeChild(document.getElementById("alert"));
              // alert('1');
            },
            cancel: function() {
              // alert('2');
              document.body.removeChild(document.getElementById("alert"));
            }
          });
        } else {
          this.bMove = false;
        }
      }
    },
    mounted: function() {
      this.setListIndex();
    }
  };
</script>

<style>
  #list {
    position: relative;
    top: 40px;
    overflow: hidden;
  }
  
  #list .list_user p {
    background: #ccc;
    padding-left: 10px;
  }
  
  #list .list_user ul li {
    height: 50px;
    line-height: 50px;
    border-bottom: 1px #ccc solid;
    padding-left: 10px;
  }
  
  #list .list_index {
    position: fixed;
    right: 10px;
    top: 50%;
    font-size: 20px;
  }
  
  #list .list_index li {
    margin: 5px 0;
  }
</style>
