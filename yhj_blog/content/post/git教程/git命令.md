---
title: "Git其它命令"
date: 2023-05-10T19:22:17+08:00
categories : [ "git" ]
draft: false
---

## 创建标签
#### 给当前的提交打名为 "v1.0" 的标签
```shell
git tag v1.0
```
#### 查看所有标签
```shell
git tag --list
```
#### 给提交号为 "f52c633" 的提交打名为 "v0.9" 的标签
```shell
git tag v0.9 f52c633
```
#### 查看标签名为 "v0.9" 的详细信息
```shell
git show v0.9
```
#### 查看远程仓库所有标签及 commit ID
```shell
git ls-remote --tags origin
```
#### 推送一个名为 "v0.9" 的标签到远程
```shell
git push origin v0.9
```
## 删除标签
#### 删除本地名为 "v0.9" 的标签
```shell
git tag -d v0.9
```
#### 删除远程仓库名为 "v0.9" 的标签 
```shell
git push --delete origin v0.9
```

