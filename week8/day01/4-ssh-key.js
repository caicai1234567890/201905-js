// 项目中使用git不是每次都需要输密码,输入密码效率低,而是使用ssh-key的东西.
// ssh-key 是建立ssh连接时需要的公钥,这个公钥存储在你的机器上,通过命令行生成的,生成以后要把这个公钥放在gtihub或者gitlab上.
// 等下一次建立ssh连接时(pull和push),ssh会自动从你的机器上读取这个密钥,建立连接的时候带着公钥一起去github或者gitlab服务器上,如果一样不用再次输入密码了可以直接进行操作了.

// 使用ssh-key的步骤:
// 1.生成 ssh-key 
// 1.1 进入到家目录中,在git bash中输入 ~
// 1.2 进入到家目录.ssh中 cd .ssh ,如果没有可以创建: mkdir .ssh
// 3. 执行 ssh-keygen 一路回车即可
// 4. cat id_rsa.pub 文件
// 5. 复制上一步cat出来的结果
// 6.打开github或者gitlab,进入个人设置 settings -> SSH and GPG keys -> new SSHkey
// 7. title是对这个key的描述,把复制的key复制到key中,点击 Add SSH key .
// 8. 后面再clone项目时改用SSH协议,以后的操作都不需要密码