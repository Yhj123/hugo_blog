---
title: "Const关键字"
date: 2023-09-14T16:23:29+08:00
categories : [ "cplusplus" ]
tags: ["cplusplus"]
draft: false
---

## 视频
{{<bilibili BV12j411y7JX 107>}}

## const 在函数中的位置
#### const 返回值
1. const 型返回值, 指函数的返回值为 const 变量.
2. 函数返回 const 返回值, 主要用于函数返回 const 引用.
3. const 引用,相当于指向 const 变量的 const 指针, 其指向和指向的内容均不允许改变.
```c++ {linenos=table, hl_lines=[2 "5-6"]}
#include <string>

using namespace std;

const string& const_Version(string& version) {
    version = "V0.0.0";
    return version;
}

string& notConst_version(string& version) {
    version = "v0.0.0";
    return version;
}

int main(int argc, char* argv[]) {
    string versionInfo;
    // const_Version(versionInfo) = "V0.0.1";  // 报错,返回 const 引用,不允许修改.
    notConst_version(versionInfo) = "V0.0.1";
}
```
#### const 成员函数
1. const 成员函数, 指此函数不应该修改任何成员变量.
2. const 成员函数, 不能够修改任何成员变量, 除非成员变量被 mutable 修饰符修饰.
3. 传给 const 成员函数的 this 指针, 是指向 const 对象的 const 指针.在成员函数调用的过程中, 都有一个 this 指针被当做参数隐性地传递给成员函数.故成员变量不能够修改.

#### 其它
1. const 和 constexpr 的区别.
</br>
#### 参考链接
[1. 使用 constexpr 的坑](https://www.cnblogs.com/apocelipes/p/14769971.html)