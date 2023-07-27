---
title: "Git其它"
date: 2023-05-20T10:22:37+08:00
categories : [ "git" ]
draft: true
---

## 查看分支图
``` shell
git log --graph
```
#### 查看 feature 分支的历史
``` shell
git log --graph feature
```

## git包含子仓库
``` shell
git submodule add <submodule_url>
```
> 创建子模块的过程中,会自动将相关代码克隆到对应路径,但对于后续使用者而言,对于主项目使用普通的 clone 操作并不会拉取到子模块中的实际代码.

#### 克隆仓库的同时获取子模块
```shell
git clone <主仓库地址> --recurse-submodules
```
