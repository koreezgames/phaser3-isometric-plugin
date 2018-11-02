import { IsoSprite } from './isometric/impl/IsoSprite';

import {
  isoSpriteFactory,
  isoSpriteCreator,
} from './isometric/factories/isoSpriteFactories';
import { IsoImage } from './isometric/impl/IsoImage';
import {
  isoImageFactory,
  isoImageCreator,
} from './isometric/factories/isoImageFactories';
import { IsoText } from './isometric/impl/IsoText';
import {
  isoTextFactory,
  isoTextCreator,
} from './isometric/factories/isoTextFactories';
import { IsoContainer } from './isometric/impl/IsoContainer';
import {
  isoContainerCreator,
  isoContainerFactory,
} from './isometric/factories/isoContainerFactories';
import { IsoBitmapText } from './isometric/impl/IsoBitmapText';
import {
  isoBitmapTextCreator,
  isoBitmapTextFactory,
} from './isometric/factories/isoBitmapTextFactories';

export class IsometricPlugin extends Phaser.Plugins.BasePlugin {
  constructor(pluginManager: Phaser.Plugins.PluginManager) {
    super(pluginManager);

    // register iso sprite
    pluginManager.registerGameObject(
      IsoSprite.ISO_SPRITE,
      isoSpriteFactory,
      isoSpriteCreator,
    );

    // register iso image
    pluginManager.registerGameObject(
      IsoImage.ISO_IMAGE,
      isoImageFactory,
      isoImageCreator,
    );

    //register iso text
    pluginManager.registerGameObject(
      IsoText.ISO_TEXT,
      isoTextFactory,
      isoTextCreator,
    );

    //register iso container
    pluginManager.registerGameObject(
      IsoContainer.ISO_CONTAINER,
      isoContainerFactory,
      isoContainerCreator,
    );

    //register iso container
    pluginManager.registerGameObject(
      IsoBitmapText.ISO_BITMAP_TEXT,
      isoBitmapTextFactory,
      isoBitmapTextCreator,
    );
  }
}
