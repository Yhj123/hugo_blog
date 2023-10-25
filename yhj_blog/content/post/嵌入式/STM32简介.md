---
title: "STM32简介"
date: 2023-09-13T09:17:38+08:00
categories : [ "嵌入式" ]
draft: false
---

## 概述
- 内核: 主流系列 ARM Cortex-M3系列
- 主频: 72MHz
- RAM(SRAM): 20KB
- ROM(Flash): 64KB
- 供电: 2.6 ~ 3.6V(标准 3.3V)

{{< collapse "概述" >}}
    <img src="/img/嵌入式/概述.png" data-fancybox="gallery" width="100%" height="20" data-width="2000" data-height="1000">
{{< /collapse >}}
## 结构
### 系统结构
- ICode(指令总线): 加载程序指令.
- DCode(数据总线): 加载数据.
- System(系统总线):  
- SRAM: 存储程序运行时的变量数据.
- DMA[^1]: 用来提供在外设和存储器之间或者存储器和存储器之间的高速数据传输。无须CPU的干预，通过DMA数据可以快速地移动。这就节省了CPU的资源来做其他操作

{{< collapse "系统结构" >}}
    <img src="/img/嵌入式/系统结构.png" data-fancybox="gallery" data-width="2000" data-height="1000">
{{< /collapse >}}

{{< collapse "片上资源/外设" >}}
    <img src="/img/嵌入式/外设.png" data-fancybox="gallery" width="100%" height="20" data-width="2000" data-height="1000">
{{< /collapse >}}

{{< collapse "引脚定义" >}}
    <img src="/img/嵌入式/引脚定义.png" data-fancybox="gallery" width="100%" height="20" data-width="2000" data-height="2000">
    {{< notice notice-info >}}
- 橙色: {{< mark text="电源相关引脚" >}}. 蓝色:{{< mark text="最小系统相关引脚" >}}. 绿色:{{< mark text="IO口,功能相关引脚" >}}.
- S: {{< mark text="电源" >}}. I: {{< mark text="输入" >}}. O: {{< mark text="输出" >}}. 
- 有 FT 的: {{< mark text="能容忍 5V 电压" >}}. 无 FT 的: {{< mark text="只能容忍 3.3V 电压" >}}.
- SWD 调试方式: {{< mark text="需要 SWDIO 和 SWCLK 两根线" >}}. JTAG 调试方式: {{< mark text="需要 JTMS, JTCK, JTDI, JTDO, NJTRST 五根线" >}}.
    {{< /notice >}}

{{< /collapse >}}

## 视频链接
{{< collapse "视频" >}}
    {{< bilibili BV1th411z7sn 2>}}
    {{< bilibili BV1th411z7sn 3>}}
    {{< bilibili BV1HM411b78E >}}
    {{< bilibili BV1th411z7sn 4>}}
    {{< bilibili BV1s84y1h77Q >}}
    {{< youtube OEsMC7FkAGQ >}}
{{< /collapse >}}

## 参考链接
[^1]: [DMA](https://blog.csdn.net/as480133937/article/details/104927922)



