# easi.ready

config 接口执行成功后执行该函数

sdk 成功返回值

```TypeScript
{
    errMsg:"ready:ok",
    checkResult:{chooseImage: true, copy: false},
    langage:""
}
```

示例

```TypeScript
xxx.ready(({langage, checkResult})=>{
    console.log("ready")
})
```

## 参数

| 参数   | 描述     | 类型     | 值  | 是否必须 |
| ------ | -------- | -------- | --- | -------- |
| ()=>{} | 回调函数 | Function | -   | 否       |
