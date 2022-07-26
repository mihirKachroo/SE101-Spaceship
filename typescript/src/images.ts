const PlanetNames = [
	'Saturn',
	'BlueStorm',
	'Cheese',
	'DarkLava',
	'DarkNeptune',
	'DeadGrey',
	'EarthLookinAss',
	'GreyLines',
	'IceCube',
	'IceWater',
	'LavaRing',
	'LightLava',
	'Mars',
	'Neptune',
	'PinkSaturn',
	'PurplePlanet',
	'PurpleStripes',
	'SandyCheeks',
] as const

const OtherImageNames = ['background', 'ship', 'thruster', 'thrusterFlame', 'turret', 'asteroid', 'torpedo', 'warpgate'] as const

type imageFileName = `${string}.png`

export type PlanetImageName = typeof PlanetNames[number]
type OtherImageName = typeof OtherImageNames[number]
type ExplosionImageName = `explosion${number}`

type ImageName = PlanetImageName | OtherImageName | ExplosionImageName

export const imageSrcs: [ImageName, imageFileName][] = [
	['background', 'SpaceObjects/Space.png'],
	['ship', 'ship/ColonyShip.png'],
	['thruster', 'ship/ThrusterNozzle.png'],
	['thrusterFlame', 'ship/ThrusterFlame.png'],
	['turret', 'ship/TurretSprite.png'],
	['asteroid', 'SpaceObjects/Meteor.png'],
	['Saturn', 'planets/Saturn.png'],
	['BlueStorm', 'planets/BlueStorm.png'],
	['Cheese', 'planets/Cheese.png'],
	['DarkLava', 'planets/DarkLava.png'],
	['DarkNeptune', 'planets/DarkNeptune.png'],
	['DeadGrey', 'planets/DeadGrey.png'],
	['EarthLookinAss', 'planets/EarthLookinAss.png'],
	['GreyLines', 'planets/GreyLines.png'],
	['IceCube', 'planets/IceCube.png'],
	['IceWater', 'planets/IceWater.png'],
	['LavaRing', 'planets/LavaRing.png'],
	['LightLava', 'planets/LightLava.png'],
	['Mars', 'planets/Mars.png'],
	['Neptune', 'planets/Neptune.png'],
	['PinkSaturn', 'planets/PinkSaturn.png'],
	['PurplePlanet', 'planets/PurplePlanet.png'],
	['PurpleStripes', 'planets/PurpleStripes.png'],
	['SandyCheeks', 'planets/SandyCheeks.png'],
	['warpgate', 'SpaceObjects/WarpGate.png'],
	['torpedo', 'SpaceObjects/Torpedo.png'],
	['explosion0', 'explosions/0.png'],
	['explosion1', 'explosions/1.png'],
	['explosion2', 'explosions/2.png'],
	['explosion3', 'explosions/3.png'],
	['explosion4', 'explosions/4.png'],
	['explosion5', 'explosions/5.png'],
	['explosion6', 'explosions/6.png'],
	['explosion7', 'explosions/7.png'],
	['explosion8', 'explosions/8.png'],
]
