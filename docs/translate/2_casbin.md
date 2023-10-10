---
description: 翻译
cover: 'https://th.bing.com/th/id/OIP._S9AReGNMmBZ2eGcHlSr-gAAAA?pid=ImgDet&rs=1'
---
# casbin




## model


### 模型语法

- 一个模型配置文件应该至少包含四部分：[request_definition],[policy_definition],[policy_effect] 和 [matchers]。
- 如果一个使用RBAC模型，配置文件也应该包含：[role_definition] 这部分。
- 模型配置文件可以包含注释， 注释以#符合开始，#符号之后的所有内容都将被注释掉

#### request definition

[request_definition] 这部分定义了e.Enforce 函数的参数

```js
[request_definition]
r = sub, obj, act
```

在上面的例子中，sub, obj 和act 代表了资源的三部分： sub => 访问实体，obj => 被访问资源
，act 访问方式。同时，你也能自定义你的请求格式。举例来说，你也可以只使用sub 和 act,前提是你不需要访问指定的特殊资源。或者你有两种访问实体 例如 sub sub2 obj act。


### Policy Definition

[policy_definition] 这部分是用来定义策略。举例，我们有下面这个模型

```js
[policy_definition]
p = sub, obj, act
p2 = sub, act
```

同时假设，有下面这个策略文件

```js
p, alice, data1, read
p2, bob, write-all-objects
```

上面的策略模型定义中，每一行都是一条策略规则。每个规则开头都有一个策略类型，比如p,p2。
策略规则是用于匹配策略定义。这个上面策略的绑定关系如下。

```js
(alice, data1, read) -> (p.sub,p.obj,p.act)
(bob, write-all-objects) -> (p2.sub, p2.act)
```


### Policy Effect 

[policy_effect] 定义策略结果， 策略结果决定这个请求访问能否允许。举例来说

```js
[policy_effect]
e = some(where (p.eft === allow))
```

上面的例子中，如果有多个策略规则匹配，只要有一个匹配通过，那么最终的结果就是通过。



另一个策略效果例子如下：

```js
[policy_definition]
e = !some(where(p.eft === deny))
```

在上面的例子中，如果没有策略规则是拒绝，这个最终的结果是通过。
some 关键字表示存在策略规则被匹配。
any 关键字表示所有的策略规则被匹配。

策略效果也可以由多个合法的表达式组成：

```js
[policy_effect]
e = some(where( p.eft === allow)) && !some(where(p.eft === deny))
```


### Matchers

[matchers] 用来定义策略规则匹配器，匹配器用来表示当请求进入如果执行这个匹配规则。

```js
[matchers]
m = r.sub === p.sub && r.obj === p.ojb && r.act === p.act
```

上面这个例子的意思是: 在一个请求中，这个访问实体，资源 和 方式 应该在策略规范中有一个被匹配

