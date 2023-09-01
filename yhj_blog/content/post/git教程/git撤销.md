---
title: "Git撤销"
date: 2023-08-15T10:14:40+08:00
categories : [ "git" ]
draft: false
---

## 撤销 commit
#### 详细步骤
- git log命令查看提交信息,获取要撤销的版本号
```shell
git log
```

- git reset --mixed <版本号> 重置到指定版本的提交
```shell
git reset --mixed [版本号]
```
> 使用 mixed, 只会清空暂存区与本地库,工作区代码依然保留.

> 使用 hard, 本地代码也会消失.

- git push origin master --force 通过强制提交当前版本号到线上,以便达到撤销版本号的目的
```shell
git push [远程库地址别名] [分支名] --force
```

## 撤销 push
#### 详细步骤
- git log命令查看提交信息,获取要撤销的版本号
```shell
git log
```

- git reset --soft <版本号> 重置到指定版本的提交
```shell
git reset --soft [版本号]
```

- git push origin master --force 通过强制提交当前版本号到线上,以便达到撤销版本号的目的
```shell
git push [远程库地址别名] [分支名] --force
```

- 修改代码提交
```shell
git add .
git commit -m "注释"
git push origin master
```

[参考链接](https://www.jianshu.com/p/c2ec5f06cf1a)