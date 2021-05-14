// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`10001000010101010101010101010101010101010108070707070707070707070707060101090101010101010b0101010101050101090108070601010b010d0e0f01050101090109010501070b010c100b01050101090109010501010b010c010b01050101090109010507010b010c010b01050101090109010501010b010c010b01050101090109010501070b010c010b01050101090109010501010b010c010b01050101090109010507010b010c010b01050101090109100501010b010c010b0105010109010a030401070b010c010b01050101010101010b010101010c0101010501010a03030303030303030303030304010201010c100101010101010101010501`, img`
. . . . . . . . . . . . . . . . 
. 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
. 2 . . . . . . 2 . . . . . 2 . 
. 2 . 2 . 2 . . 2 . 2 2 2 . 2 . 
. 2 . 2 . 2 . 2 2 . 2 . 2 . 2 . 
. 2 . 2 . 2 . . 2 . 2 . 2 . 2 . 
. 2 . 2 . 2 2 . 2 . 2 . 2 . 2 . 
. 2 . 2 . 2 . . 2 . 2 . 2 . 2 . 
. 2 . 2 . 2 . 2 2 . 2 . 2 . 2 . 
. 2 . 2 . 2 . . 2 . 2 . 2 . 2 . 
. 2 . 2 . 2 2 . 2 . 2 . 2 . 2 . 
. 2 . 2 . 2 . . 2 . 2 . 2 . 2 . 
. 2 . 2 2 2 . 2 2 . 2 . 2 . 2 . 
. . . . . . . . . . . . . . 2 . 
. 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.dungeon.floorLight0,sprites.dungeon.stairLarge,sprites.dungeon.purpleOuterSouth1,sprites.dungeon.purpleOuterSouthWest,sprites.dungeon.purpleOuterEast0,sprites.dungeon.purpleOuterNorthEast,sprites.dungeon.purpleOuterNorth1,sprites.dungeon.purpleOuterNorthWest,sprites.dungeon.purpleOuterWest0,sprites.dungeon.purpleOuterSouthEast,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.stairSouth], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
