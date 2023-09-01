---
title: "Git合并"
date: 2023-05-22T13:08:22+08:00
categories : [ "git" ]
draft: false
---

# dev 分支合并到 main 分支
``` shell
# 将远程仓库 dev 分支的拉到本地 dev
git pull origin dev

# 本地切换到 main 分支
git switch main

# 将本地 dev 分支合并到 main 分支
git merge dev

# 将本地 main 分支上传到远程仓库
git push -u origin main
```


