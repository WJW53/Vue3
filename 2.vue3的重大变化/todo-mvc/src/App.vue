<template>
  <div>
    <h1>count: {{ countRef }}</h1>
    <p>
      <button @click="increase">+1</button>
      <button @click="decrease">-1</button>
    </p>
  </div>
</template>

<script>
import { ref } from "vue";
function useCount() {
  let countRef = ref(0);
  const increase = () => {
    countRef.value++;
  };
  const decrease = () => {
    countRef.value--;
  };
  return {
    countRef,
    increase,
    decrease,
  };
}

export default {
  // 模板中能直接使用count,是因为模板中已经是在组件实例的基础上,
  //访问count就会返回count.value
  setup() {
    console.log("setup这个函数会在所有生命周期钩子函数之前调用!!");
    console.log(this); //undefined
    // let count = 0;//这样不具有响应式
    // let count = ref(0); //参数是默认值

    // let countRef = ref(0);//命名规范建议这么使用
    // //setup中count是一个代理对象
    // const increase = () => {
    //   // count++;
    //   // console.log("increase", count);
    //   countRef.value++;
    // };

    //setup中,count是一个对象
    //实例代理中,count是一个count.value

    // 1. 新增

    // 2. 修改

    // 3. 删除

    return {
      // // count,
      // countRef,
      // increase,
      ...useCount(),
    };
  },

  // name: "App",
  // data() {
  //   return {
  //     count: 0,
  //   };
  // },
  // methods: {
  //   increase() {
  //     console.log(this);
  //     this.count++;
  //   },
  // },
};
</script>
