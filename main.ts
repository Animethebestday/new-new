scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.buttonPink, function (sprite, location) {
    game.over(false)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairNorth, function (sprite, location) {
    if (true) {
        tiles.setTilemap(tilemap`level6`)
        tiles.placeOnRandomTile(mySprite, sprites.dungeon.stairLadder)
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.floorLightMoss, function (sprite, location) {
    game.over(true, effects.clouds)
})
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.forestTiles0, function (sprite, location) {
    if (true) {
        tiles.setTilemap(tilemap`level17`)
        tiles.placeOnRandomTile(mySprite, sprites.castle.rock0)
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava0, function (sprite, location) {
    game.over(false)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.purpleOuterWest2, function (sprite, location) {
    game.over(false)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.doorOpenEast, function (sprite, location) {
    if (true) {
        tiles.setTilemap(tilemap`level14`)
        tiles.placeOnRandomTile(mySprite, sprites.castle.tileDarkGrass2)
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.doorClosedNorth, function (sprite, location) {
    if (true) {
        tiles.setTilemap(tilemap`level10`)
        tiles.placeOnRandomTile(mySprite, sprites.castle.tilePath4)
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.vehicle.roadVertical, function (sprite, location) {
    game.over(true, effects.blizzard)
})
function startNextLevel () {
    if (true) {
        tiles.setTilemap(tilemap`level2`)
        tiles.placeOnRandomTile(mySprite, sprites.dungeon.stairWest)
    } else if (true) {
        tiles.setTilemap(tilemap`level6`)
        tiles.placeOnRandomTile(mySprite, sprites.dungeon.stairLadder)
    } else if (true) {
        tiles.setTilemap(tilemap`level8`)
        tiles.placeOnRandomTile(mySprite, sprites.builtin.forestTiles9)
    } else if (true) {
        tiles.setTilemap(tilemap`level10`)
        tiles.placeOnRandomTile(mySprite, sprites.castle.tilePath4)
    } else if (true) {
        tiles.setTilemap(tilemap`level12`)
        tiles.placeOnRandomTile(mySprite, sprites.dungeon.hazardLava0)
    } else if (true) {
        tiles.setTilemap(tilemap`level14`)
        tiles.placeOnRandomTile(mySprite, sprites.castle.tileDarkGrass2)
    } else if (true) {
        tiles.setTilemap(tilemap`level17`)
        tiles.placeOnRandomTile(mySprite, sprites.builtin.forestTiles0)
    } else {
        tiles.setTilemap(tilemap`level19`)
        tiles.placeOnRandomTile(mySprite, sprites.dungeon.collectibleInsignia)
    }
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.buttonOrangeDepressed, function (sprite, location) {
    game.over(false)
})
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.coral0, function (sprite, location) {
    game.over(true, effects.hearts)
})
scene.onOverlapTile(SpriteKind.Player, sprites.castle.tileGrass2, function (sprite, location) {
    if (true) {
        tiles.setTilemap(tilemap`level6`)
        tiles.placeOnRandomTile(mySprite, sprites.dungeon.stairLadder)
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.floorLight3, function (sprite, location) {
    game.over(true, effects.starField)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.doorOpenWest, function (sprite, location) {
    if (true) {
        tiles.setTilemap(tilemap`level12`)
        tiles.placeOnRandomTile(mySprite, sprites.castle.tilePath5)
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.doorOpenNorth, function (sprite, location) {
    if (true) {
        tiles.setTilemap(tilemap`level8`)
        tiles.placeOnRandomTile(mySprite, sprites.builtin.forestTiles9)
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleInsignia, function (sprite, location) {
    if (true) {
        tiles.setTilemap(tilemap`level19`)
        tiles.placeOnRandomTile(mySprite, sprites.castle.saplingOak)
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairSouth, function (sprite, location) {
    startNextLevel()
})
let mySprite: Sprite = null
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . f f f f f f f f . . . . 
    . . . . f 6 6 6 6 6 6 f . . . . 
    . . . . f 6 7 7 7 7 6 f . . . . 
    . . . . f 6 6 6 6 6 6 f . . . . 
    . . . . f f f f f f f f . . . . 
    . . . a a f 8 9 9 8 f a a . . . 
    . . . f f f 9 8 8 9 f f f . . . 
    . . . 4 2 f 9 8 8 9 f 2 4 . . . 
    . . . 4 2 f 8 9 9 8 f 2 4 . . . 
    . . . 5 5 f f f f f f 5 5 . . . 
    . . . . . f c . . c f . . . . . 
    . . . . . f c . . c f . . . . . 
    . . . . . f f . . f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
scene.cameraFollowSprite(mySprite)
tiles.setTilemap(tilemap`level1`)
tiles.placeOnRandomTile(mySprite, sprites.dungeon.floorLight2)
info.startCountdown(40)
forever(function () {
    music.playMelody("A G A B A G A B ", 120)
    music.playMelody("F D F D G F D G ", 120)
})
