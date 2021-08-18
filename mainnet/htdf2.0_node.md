# HTDF2.0如何升级或搭建节点？

关于HTDF2.0升级之后，交易所是否需要自行搭建观察节点的问题：

| 官方公共节点名称 | 节点地址 |
|---------------|-------------------------------|
| node01 | http://htdf2020-node01.orientwalt.cn|
| node02 | http://htdf2020-node02.orientwalt.cn|
| node03 | http://htdf2020-node03.orientwalt.cn|
| node04 | http://htdf2020-node04.orientwalt.cn|
| 备用节点| http://htdfscan.me|

节点开放的端口:

- `1317`端口:  由非Debug版本提供的RESTful API
- `25567`端口:  Tendermint RPC 接口, 支持`hscli`的远程连接

## 1."冷钱包"方式交易所
如果使用的“冷钱包”方式，即离线签名，进行转账的交易所， 从HTDF2.0开始，不必再自建观察节点，可以统一使用HTDF官方提供的4个公共节点的RESTful API, 即`1317`端口。

例如: `curl http://htdf2020-node04.orientwalt.cn:1317/auth/accounts/htdf1xwpsq6yqx0zy6grygy7s395e2646wggufqndml`


## 2."热钱包"方式交易所

如果使用的是“热钱包”方式，即直接使用Debug版的hscli提供的 send 接口， 进行转账的交易所， 也可以使用远程的官方公共节点的TendermintRPC端口,即`26657`端口，不必再搭建观察节点。

具体的使用方式如下:

1. 下载最新的Debug版本的hscli (目前最新是v2.0.0)
2. 配置可信节点: `hscli config trust-node true`
3. 直接使用`hscli`连接到远程的官方公共的节点, 提供本地的hscli相关服务: `hscli rest-server --node tcp://htdf2020-node04.orientwalt.cn:26657 --chain-id=mainchain --laddr tcp://0.0.0.0:1317`
4. 这样`localhost:1317` 可以像自行搭建的观察节点一样使用,包括Debug版本相关接口.


## 3.自建节点

https://github.com/orientwalt/htdf/releases/tag/v2.0.1


### hsd

#### 情况1： 已有节点，只需升级
如果已有HTDF1.x的节点，请直接使用脚本升级:

```sh
wget https://github.com/orientwalt/htdf/releases/download/v2.0.1/htdf2.0_upgrade.sh -O htdf2.0_upgrade.sh && sh htdf2.0_upgrade.sh
```

升级后自行启动即可


#### 情况2： 没有节点，从0开始搭建

没有搭建过HTDF1.x的节点，从0开始搭建观察节点， 请使用以下脚本


```sh
#! /bin/bash

cd ~

latest_version='v2.0.1'
release_url='https://github.com/orientwalt/htdf/releases/download/'$latest_version

mkdir -p ~/.hsd/config

wget $release_url/config.toml -O ~/.hsd/config/config.toml

wget $release_url/genesis.json.tar.gz -O genesis.json.tar.gz && tar xzf genesis.json.tar.gz -C ~/.hsd/config/

wget $release_url/'hsd_'$latest_version'_linux_amd64.tar.gz' -O hsd.tar.gz && tar xzf hsd.tar.gz -C /usr/local/bin/

wget $release_url/'hscli_'$latest_version'_linux_amd64.tar.gz' -O hscli.tar.gz && tar xzf hscli.tar.gz -C /usr/local/bin/

#查看hsd 版本
hsd version

#查看hscli版本
hscli version

```


启动命令:

```sh
# 后台启动 hsd
nohup hsd start >> ~/.hsd/app.log  2>&1  &

# 查看日志
tail -f ~/.hsd/app.log

# 启动 hscli 的REST API服务
nohup hscli rest-server --chain-id=mainchain --trust-node=true  --laddr=tcp://0.0.0.0:1317  >> ~/.hsd/restServer.log  2>&1  &

# 访问API
curl http://localhost:1317/blocks/latest

```


### hscli

非Debug版为例, 使用以下命令升级:


```sh
wget https://github.com/orientwalt/htdf/releases/download/v2.0.1/hscli_v2.0.1_linux_amd64.tar.gz -O hscli_v2.0.1_linux_amd64.tar.gz && tar xzf hscli_v2.0.1_linux_amd64.tar.gz -C $(which hscli) && hscli version
```


Debug版hscli, 使用以下命令升级:
```sh
wget https://github.com/orientwalt/htdf/releases/download/v2.0.1/hscli_Debug_v2.0.1_linux_amd64.tar.gz -O hscli_v2.0.1_linux_amd64.tar.gz && tar xzf hscli_v2.0.1_linux_amd64.tar.gz -C $(which hscli) && hscli version
```

升级后自行启动即可



## 帮助

### github下载很慢怎么办？

如果遇到github下载很慢的情况，可以使用以下加速下载的办法：

如果github下载链接为 `GITHUBURL`, 那么加速下载的链接为: `https://github.91chifun.workers.dev/GITHUBURL`

例如：
github下载链接： `https://github.com//orientwalt/htdf/releases/download/v2.0.1/genesis.json.tar.gz`
那么加速下载链接为：
`https://github.91chifun.workers.dev/https://github.com//orientwalt/htdf/releases/download/v2.0.1/genesis.json.tar.gz`