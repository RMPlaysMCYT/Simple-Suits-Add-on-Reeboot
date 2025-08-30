// import { NoveltyManager, AccessoriesSlot } from "./lib/NoveltyManager"; 
import { system, world } from "@minecraft/server";

console.log("Simple Suits Add-on Loaded!");
console.warn("Simple Suits Add-on Loaded!");
// NoveltyManager.registerAccessoriesItem("minecraft:apple", AccessoriesSlot.Face);

// system.runInterval(()=>{
//     for(let playerData of world.getPlayers()){
//         let face = NoveltyManager.getAccessoriesSlot(playerData, AccessoriesSlot.Face);
//         if(face != undefined && face.typeId == "minecraft:apple"){
//             playerData.runCommand("say using apple")
//         }
//     }
// }, 5);