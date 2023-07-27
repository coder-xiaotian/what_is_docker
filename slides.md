---
theme: seriph
background: https://source.unsplash.com/collection/94734566/1920x1080
class: text-center
highlighter: shiki
lineNumbers: false
drawings:
  persist: false
transition: slide-left
title: What is Docker
---

# 什么是Docker

---
layout: center
---

## 传统虚拟机
![](/traditional.png)

传统虚拟机技术是虚拟出一套硬件后，在其上运行一个完整操作系统，在该系统上再运行所需应用进程；

---
layout: center
---

## Docker
![](/docker.png)

而容器内的应用进程直接运行于宿主的内核，容器内没有自己的内核，而且也没有进行硬件虚拟。因此容器要比传统虚拟机更为轻便。

---
layout: two-cols
---
<style>
  h2 {
    @apply mb-10
  }
  .col-left {
    @apply p-3 bg-blue-100
  }
  .col-right {
    @apply p-3 bg-red-100
  }
</style>
## 优点
+ 轻量级；
+ 资源隔离；
+ 服务隔离；
+ 使用容器编排工具可以做到一键启停所有服务，方便给客户部署；

::right::

## 对于前端的意义
+ Docker作为前端工程化的好帮手，用于前端自动部署。
+ 拓展知识面，了解熟悉前端周边的生态，提升竞争力。

---
layout: center
---

## Docker生命周期
<img class="w-[80%]" src="/run_flow.png"/>

---
layout: cover
---

# 名词概念

---
layout: image-left
image: https://source.unsplash.com/collection/94734566/1920x1080
---

+ 镜像：可以理解为类，里面有需要运行的代码、软件、库、环境（nginx、java、系统），可以继承，即在其之上再打一层镜像，最基础的镜像是系统镜像。
+ Dockerfile： 用于构建镜像的指令集。
+ 容器：可以理解为由类创建出的实例，一个镜像可创建多个容器。
+ 仓库：也叫DockerHub，类似npm，一个官方提供的镜像仓库，用户可以在上面找公开的镜像，也可以建私有库

---
layout: two-cols
---

# Dockerfile命令详解

+ FROM：指定基础镜像，可以在[DockerHub](https://hub.docker.com/)中找需要的基础镜像。
+ RUN：执行shell命令，比如：RUN npm install。
+ COPY：拷贝文件或目录到镜像中去，比如：COPY local/file image/file。
+ WORKDIR：工作目录
+ EXPOSE: 镜像暴露的端口。
+ CMD: 镜像启动时执行的命令，比如：CMD ["nginx", "-g", "daemon off;"]。

::right::

```dockerfile
FROM nginx:1.19.9-alpine
WORKDIR /usr/share/nginx/html
COPY dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
EXPOSE 443

CMD ["nginx", "-g", "daemon off;"]
```

---

# Docker命令行

+ docker build: 构建镜像命令，`docker build -t imgName:tag .`。
+ docker run: 启动镜像命令，`docker run -d --name xpros-web --link xpros-boot --link xpros-rca -p 80:80 -p 443:443 -v /xpros/fileRoot/download:/xpros/fileRoot/download:ro -v /xpros/fileRoot/resource:/xpros/fileRoot/resource:ro --restart=always imgName:tag`
+ docker exec: 在启动着的容器中执行一个命令，`docker exec -it xpros-web sh`
+ docker ps: 查看启动着的容器
+ docker images: 查看镜像列表

---

# 资源
+ [官网](https://www.docker.com/)
+ [Dockerfile文档](https://docs.docker.com/engine/reference/builder/)
+ [Docker命令行文档](https://docs.docker.com/engine/reference/run/#docker-run-reference)

---
layout: end
---

# 谢谢大家