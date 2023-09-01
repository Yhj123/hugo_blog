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
#### 删除远程仓库名为 "develop" 的分支
```shell
git push origin --delete develop
``` 
## 克隆
#### 克隆远程仓库标签为 "v1.6.5.7" 的分支
```shell
git clone --branch v1.6.5.7 [远程仓库地址]
```
> 另一种方法
1. 将远程代码拉取到本地
```shell
git clone -b develop git@gitlab.yopoint.vip:ac/YoPointSwift.git
```
2. 查看 tag
```shell
git tag
```
3. 检出tag
```shell
git checkout tagName
```
> 如果想修改 tag 下的代码，切记不要直接在此标签下提交代码,需要单独创建一个分支, 在分支上修改并提交.