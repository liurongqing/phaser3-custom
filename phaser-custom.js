require('polyfills');

var CONST = require('const');
var Extend = require('utils/object/Extend');

var Phaser = {

    Cameras: {
        Scene2D: require('cameras/2d')
    },
    Events: require('events/EventEmitter'),
    Game: require('core/Game'),
    GameObjects: {
        DisplayList: require('gameobjects/DisplayList'),
        UpdateList: require('gameobjects/UpdateList'),

        // GameObjectCreator: require('gameobjects/GameObjectCreator'),
        // GameObjectFactory: require('gameobjects/GameObjectFactory'),
        // GameObject: require('gameobjects/GameObject'),
        Components: require('gameobjects/components'),

        Container: require('gameobjects/container/Container'),
        Image: require('gameobjects/image/Image'),
        Sprite: require('gameobjects/sprite/Sprite'),
        Text: require('gameobjects/text/static/Text'),

        Factories: {
            Container: require('gameobjects/container/ContainerFactory'),
            Image: require('gameobjects/image/ImageFactory'),
            Sprite: require('gameobjects/sprite/SpriteFactory'),
            Text: require('gameobjects/text/static/TextFactory')
        },

        Creators: {
            Container: require('gameobjects/container/ContainerCreator'),
            Image: require('gameobjects/image/ImageCreator'),
            Sprite: require('gameobjects/sprite/SpriteCreator'),
            Text: require('gameobjects/text/static/TextCreator')
        }
    },
    Input: require('input'),
    Loader: {
        FileTypes: {
            ImageFile: require('loader/filetypes/ImageFile'),
            SpriteSheetFile: require('loader/filetypes/SpriteSheetFile'),
            TextFile: require('loader/filetypes/TextFile'),
        },
        LoaderPlugin: require('loader/LoaderPlugin'),
        XHRLoader: require('loader/XHRLoader'),
        XHRSettings: require('loader/XHRSettings')
    },
    Scene: require('scene/Scene'),
    Scenes: require('scene'),
    // File: require('loader/File'),
    // FileTypesManager: require('loader/FileTypesManager'),
    Textures: require('textures'),
    Time: require('time'),
    Tweens: require('tweens'),
    Utils: require('utils'),
    Math: {
        Between: require('math/Between')
    }
};

//  Merge in the consts

Phaser = Extend(false, Phaser, CONST);

//  Export it

module.exports = Phaser;

global.Phaser = Phaser;
GameGlobal.Phaser = Phaser;
