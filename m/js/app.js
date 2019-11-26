let vm = new Vue({
    el:"#app",
    data:{
        isNone:false,
        smallTitleText:'在兰考',
        smallTitle:false,
        topText:'输入关键词即可搜索，比如：酒店',
        topTextShow:false,
        isMainActive:false,
        keyWords:'',
        tips:'',
        allShowLists:[
          {
            id:1,
            name:'酷比乐',
            url:'./html/1/index.html',
            kw:'西餐，汉堡，可乐，奶茶，hanbao，naicha',
            phone:'18899997777',
            address:'建设路988号',
            description:'汉堡很不错'
          },
          {
            id:2,
            name:'蓝翔温泉',
            url:'./html/1/index.html',
            kw:'温泉，酒店，住宿，jiudian，wenquan，zhusu',
            phone:'电话：18899997777',
            address:'地址：建设路988号',
            description:'酒店服务态度好，很舒适'
          },
          {
            id:3,
            name:'酷比乐22',
            url:'./html/1/index.html',
            kw:'西餐，汉堡，可乐，奶茶，hanbao，naicha',
            description:'汉堡很不错'
          },
          {
            id:4,
            name:'蓝翔温泉22',
            url:'./html/1/index.html',
            kw:'温泉，酒店，住宿，jiudian，wenquan，zhusu',
            phone:'18899997777',
            address:'建设路988号',
            description:'酒店服务态度好，很舒适'
          }
        ],
        resultLists:[]
    },
    created() {
      var lett = this;
      document.onkeydown = function(e) {
        var key = window.event.keyCode;
        if (key == 13) {
          lett.onSearch();
        }
      }
    },
    methods:{
        onInput(){
            if(this.keyWords != ''){
                this.isNone = true;
                this.smallTitle = true;
                this.topTextShow = true;
                this.isMainActive = true;
                this.tips = '请按“回车”键发起检索';
            }else{
              this.tips = '';
            }
        },
        onSearch(){
          if(this.keyWords!=''){
            console.log(this.keyWords);
            this.resultLists=[];
            this.resultLists = this.allShowLists.filter((item)=>{
              return item.kw.indexOf(String(this.keyWords)) != -1;
            })
            console.log(this.resultLists);
            this.tips = '';
            // this.keyWords = '';
            if(this.resultLists.length == 0){
              this.tips = '抱歉！没有找到关于 “ '+ this.keyWords +' ” 的查询结果，您可以试着输入关键词查询';
              // this.keyWords = '';
            }
          }else{
            window.location.reload();
          }
        }
    },
    computed: {
        
    }
})