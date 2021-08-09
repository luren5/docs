# HTDF2.0如何搭建节点？

关于HTDF2.0升级之后，交易所是否需要自行搭建观察节点的问题：

| 官方公共节点名称 | 节点地址 |
|---------------|-------------------------------|
| node01 | http://htdf2020-node01.orientwalt.cn|
| node02 | http://htdf2020-node02.orientwalt.cn|
| node03 | http://htdf2020-node03.orientwalt.cn|
| node04 | http://htdf2020-node04.orientwalt.cn|

节点开放的端口:

- `1317`端口:  由非Debug版本提供的RESTful API
- `25567`端口:  Tendermint RPC 接口, 支持scli的远程连接

## "冷钱包"方式交易所
如果使用的“冷钱包”方式，即离线签名，进行转账的交易所， 从HTDF2.0开始，不必再自建观察节点，可以统一使用HTDF官方提供的4个公共节点的RESTful API, 即`1317`端口。

例如: `curl http://htdf2020-node01.orientwalt.cn:1317/auth/accounts/htdf1xwpsq6yqx0zy6grygy7s395e2646wggufqndml`


## "热钱包"方式交易所

如果使用的是“热钱包”方式，即直接使用Debug版的hscli提供的 send 接口， 进行转账的交易所， 也可以使用远程的官方公共节点的TendermintRPC端口,即`26657`端口，不必再搭建观察节点。

具体的使用方式如下:

1. 下载最新的Debug版本的hscli (目前最新是v2.0.0)
2. 配置可信节点: `hscli config trust-node true`
3. 直接使用连接到远程的官方公共的节点, 提供本地的hscli相关服务: `hscli rest-server --node tcp://htdf2020-node04.orientwalt.cn:26657`
4. 这样`localhost:1317` 可以像自行搭建的观察节点一样使用,包括Debug版本相关接口.