---
title: "Git子模块"
date: 2023-09-02T02:13:33+08:00
draft: false
---

## git仓库有子仓库,子仓库代码会上传不成功
#### 详细解决方法
1. 删除子仓库的 .git 文件夹
2. 在子仓库的 .git 文件夹下执行以下命令
```shell
git rm -rf --cached .
```

#### git包含子仓库
``` shell
git submodule add <submodule_url>
```
> 创建子模块的过程中,会自动将相关代码克隆到对应路径,但对于后续使用者而言,对于主项目使用普通的 clone 操作并不会拉取到子模块中的实际代码.

#### 克隆仓库的同时获取子模块
```shell
git clone <主仓库地址> --recurse-submodules
```
