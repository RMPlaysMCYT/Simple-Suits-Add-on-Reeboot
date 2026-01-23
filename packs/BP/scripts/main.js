// import { NoveltyManager, AccessoriesSlot } from "./lib/NoveltyManager";
import { system, world } from "@minecraft/server";
import { ActionFormData } from "@minecraft/server-ui";

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

function simpleSuitsDocumentation() {
  const SimpleSuitsDocumentation = ActionFormData();
  SimpleSuitsDocumentation.title("Simple Suits Documentation");
  SimpleSuitsDocumentation.body(
    "This Add-on adds 20+ clothing it has more caps, suits and more perfect to create a clothing store and more! \nThis Add-on is also comes to every sets and colors, plus craftable outfits"
  );
  SimpleSuitsDocumentation.button("Clothes Lists");
  SimpleSuitsDocumentation.button("Back");
  SimpleSuitsDocumentation.show(player).then((Response) => {
      if (Response.canceled) return;
    //   if (Response.selection == 0) {
          
    //   }
  })
}

world.beforeEvents.itemUse.subscribe((event) => {
  const event = event.itemStack;
  if (event.typeId == "simple_suits:simple_suitsbook") {
    system.run(() => {
      simpleSuitsDocumentation();
    });
  }
});
