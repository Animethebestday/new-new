scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairSouth, function (sprite, location) {
    game.over(true)
})
let mySprite = sprites.create(img`
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
tiles.placeOnRandomTile(mySprite, sprites.dungeon.stairLarge)
info.startCountdown(14)
