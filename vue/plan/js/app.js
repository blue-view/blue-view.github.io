var store={
    seve(key,value){
      localStorage.setItem(key,JSON.stringify(value));
    },
    fetch(key)
    {
      return JSON.parse(localStorage.getItem(key))||[]; 
    }
  };
  var list=store.fetch("miaov-class");
var vm=new Vue({
    el: '#app',
    data() {
        return {
          todo: "",
          list: list,
          editorTodos: "", //正在编辑的数据,
          beforeTitle:'',
          visibilist:"all"
        };
      },
      computed:{
        noCheckedLength:function(){
    
        return this.list.filter(function(item){
               return !item.ischecked
             }).length
        }
      },
      watch:{//
        // list:function(){
        //   store.seve("miaov-class",this.list);
        // }
        list:{//深度监控
          handler:function(){
            store.seve("miaov-class",this.list);
          },
          deep:true
        }
      },
      methods: {
        addtodo: function(ev) {
          this.list.push({
            title: this.todo,
            ischecked: false
          });
          this.todo = "";
        },
        deleteToDo: function(todo) {
          //删除任务
          var index = this.list.indexOf(todo);
          this.list.splice(index, 1);
        },
        editorTodo: function(todo) {
          //编辑任务
          this.editorTodos = todo;
          this.beforeTitle=todo.title;
        },
        //编辑任务成功
        editorTodoed:function(todo){
          this.editorTodos='';
        },
        //取消编辑任务
        cacelTodo:function(todo){
          todo.title=this.beforeTitle;
          this.editorTodos='';
        }
      },
      directives:{
        "focus":{
          update(el,binding){
            console.log(el);
            console.log(binding);
            if(binding.value){
              el.focus();
            }
          }
        }
      }
  });
  function watchHashChange(){
    var hash=window.location.hash.slice(1);
    vm.visibilist=hash;
    console.log(hash);
  }
  window.addEventListener("hashchange",watchHashChange);