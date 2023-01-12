# aurora-v2-stress
A very simple script to stress AWS Aurora Serverless V2.

The intent here is to force AWS RDS Aurora Serverless V2 to scale up vertically and horizontally to test how it behaves
under pressure.

The vídeo demonstrating this script in action will be published on:
- https://www.youtube.com/c/UmInventorQualquer
- https://www.youtube.com/c/WesleyMilan

## Usage

To necessary use node version minimal 16.x. After install, execute the commands below

```shell
$ npm install pm2 -g
$ pm2 completion install
$ npm install
# edit index.js to tests and execute it
$ node index.js
# Ctrl + C to exit
# edit json pm2 with configuration necessary and execute pm2 commands below
$ pm2 start pm2.json
$ pm2 monit
$ pm2 stop pm2.json
```
