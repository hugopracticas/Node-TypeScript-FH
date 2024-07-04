import { yarg } from "./config/plugins/yargs.plugin";
import { ServerApp } from "./presentation/server-app";



(async() => {
    await main();
})();


async function main(){
    //console.log(yarg);
    const { b: base, l:limit, s:showTable, d:destination, n:name} = yarg
    ServerApp.run({ base, limit, showTable, destination, name });
}