### Shell收集

### 查看日志

#### 统计nginx日志里访问次数最多的前十个IP

awk '{print $1}' /var/log/nginx/access.log | sort | uniq -c | sort -nr -k1 | head -n 10

> 封IP，可以在nginx上配置 deny
> deny 110.249.201.0/24;