---
title: "Git基础"
date: 2023-05-16T20:04:58+08:00
categories : [ "git" ]
draft: false
---

## git代码上传
#### 创建新的 git 仓库
``` shell
git init
```
#### 将当前目录下的所有文件和子目录中的变更添加到 Git 的暂存区
``` shell
git add .
```
#### 将暂存区中的修改提交到本地 Git 仓库，并且添加一条提交信息以便于日后查看
``` shell
git commit -m "first commit"
```
#### 创建一个名为 main 的新分支,并从你所在的当前分支切换到它
``` shell
git checkout -b main
```
#### 将名为 "origin" 的远程仓库与你的本地仓库关联起来
``` shell
git remote add origin git@github.com:Yhj123/xue.git
```
{{< notice notice-tip >}}
- 执行此命令后, 在 ./git/config 文件中会有一条相关的记录.
- remote: 任何远程存储库.
- add: 表示将一个新的远程仓库添加到本地仓库中
- origin: 远程仓库 https://xxx.git 的名称
- git@github.com:Yhj123/xue.git: 远程仓库地址.
{{< /notice >}}

#### 初次建立仓库推送到远程
```shell
git push --set-upstream origin master
```

#### 将本地的 master 分支推送到远程仓库 origin 的 develop 分支
``` shell
git push origin master:develop
```
``` shell
git push <remote> <local_branch>:<remote_branch_name>
```

#### 将本地 develop 分支推送到远程 origin 仓库的 develop 分支，并建立本地分支和远程分支的关联
``` shell
git push -u origin develop
```

## git 克隆代码
#### 把最近的一次 commit 给 clone 下来
``` shell
git clone --depth=1 https://github.com/jaywcjlove/linux-command.git
```
> 只会把默认分支clone下来, 其他远程分支并不在本地.
#### 克隆远程仓库的指定分支 dev_jk
``` 
git clone -b dev_jk http://10.1.1.11/service/tmall-service.git
```

## git 查看 origin 信息
```shell
git remote show origin
```
#### git 删除 origin
```shell
git remote rm origin
```