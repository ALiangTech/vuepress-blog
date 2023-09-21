---
description: 翻译
cover: 'https://th.bing.com/th/id/OIP._S9AReGNMmBZ2eGcHlSr-gAAAA?pid=ImgDet&rs=1'
---


# 简介JWT


## JWT 是什么

jwt 是一种开放标准，明确使用一种紧凑和独立的方式在各方安全的进行信息传输。这个信息作为一种数字信号是能被
核实和可信的。jwts 能够使用各种签名算法或者密钥进行加密。

jwts不仅能够被加密，而且在各方信息传递之间提供保密性。我们将专注于签名令牌，签名令牌能验证claims的完整性，
当加密令牌被其他用户从claims中隐藏的时候，如果令牌是使用的公共/私人key的时候，这个签名而且还能证明只有持有私钥的一方才是签名方。

## 何时使用jwt

- Authorization

- Information Exchange

## jwt 结构

jwt包含三部分，通过 . 进行分割

分别是：
- Header
- Payload
- Signnature

所以jwt看起来想 xxx.yyy.zzz