// ------------------------------------------------------------------------------
//  Copyright (c) 2018 Koreez LLC. All Rights Reserved.
//
//  NOTICE: You are permitted to use, modify, and distribute this file
//  in accordance with the terms of the license agreement accompanying it.
// ------------------------------------------------------------------------------

import { IsoContainer } from '../impl/IsoContainer';
import { GetValue } from './types';
import { handleSceneIsoProjector } from './handleSceneIsoProjector';

export function isoContainerFactory(
  x: number,
  y: number,
  z: number,
  children: Phaser.GameObjects.GameObject[],
): IsoContainer {
  handleSceneIsoProjector(this.scene);

  return this.scene.add.existing(
    new IsoContainer(this.scene, this.scene.isoProjector, x, y, z, children),
  );
}

export function isoContainerCreator(
  config: any,
  addToScene?: boolean,
): IsoContainer {
  const getAdvancedValue: GetValue = Phaser.Utils.Objects.GetAdvancedValue;
  config = config || {};
  config.add = addToScene;
  const x: number = getAdvancedValue(config, 'x', 0);
  const y: number = getAdvancedValue(config, 'y', 0);
  const z: number = getAdvancedValue(config, 'z', 0);

  handleSceneIsoProjector(this.scene);

  const children: Phaser.GameObjects.GameObject[] = Phaser.Utils.Objects.GetAdvancedValue(
    config,
    'children',
    [],
  );
  const isoContainer: IsoContainer = new IsoContainer(
    this.scene,
    this.scene.isoProjector,
    x,
    y,
    z,
    children,
  );
  Phaser.GameObjects.BuildGameObject(this.scene, isoContainer, config);
  return isoContainer;
}
