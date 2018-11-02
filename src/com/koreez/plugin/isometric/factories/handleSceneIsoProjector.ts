// ------------------------------------------------------------------------------
//  Copyright (c) 2018 Koreez LLC. All Rights Reserved.
//
//  NOTICE: You are permitted to use, modify, and distribute this file
//  in accordance with the terms of the license agreement accompanying it.
// ------------------------------------------------------------------------------

import { Projector } from '../internal/Projector';

export const handleSceneIsoProjector: (
  scene: Phaser.Scene & {
    isoProjectionAngle: number;
    isoProjector?: Projector;
  },
) => void = (
  scene: Phaser.Scene & {
    isoProjectionAngle: number;
    isoProjector?: Projector;
  },
) => {
  if (!scene.isoProjector) {
    scene.isoProjector = new Projector(scene, scene.isoProjectionAngle);
  }
};
