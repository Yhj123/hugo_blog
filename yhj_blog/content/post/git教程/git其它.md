---
title: "Git其它"
date: 2023-05-20T10:22:37+08:00
categories : [ "git" ]
draft: false
---

## 查看分支图
``` shell
git log --graph
```
### 查看 feature 分支的历史
``` shell
git log --graph feature
```
## 查看所以历史版本信息
```shell
git reflog
```

## 一台电脑配置多个 git 账号
### 涉及到的命令
#### 查看之前的设置
```shell
git config --global --list
```
#### 清空全局的邮箱和用户名称 
``` shell
git config --global --unset user.name "你的名字" //删除之前的名字配置
git config --global --unset user.email "你的邮箱"//删除之前的名字配置
```
- [参考链接](https://blog.csdn.net/qq_31947477/article/details/107350617)
- [参考链接](https://blog.csdn.net/m0_55580308/article/details/123707331)

